// SuperMap merged-map viewer — container-mounted three.js viewer with dynamic
// segment highlighting. Adapted from the self-contained viewer emitted by
// examples/merged_map_web.py (same dequant / point-sizing / box picking), with
// three additions for the project site:
//   1. Mounts into a sized container (#map-canvas) instead of the full window.
//   2. Loads map/seg.bin (uint16 per-point segment membership bitmask, up to 16
//      segments) and, via a PointsMaterial.onBeforeCompile patch, recolors the
//      covered points toward bright yellow when a segment is hovered — a single
//      int uniform, so no per-hover buffer re-upload and the map stays fully
//      interactive.
//   3. Draws each segment's ego trajectory as a fat yellow polyline, toggled on
//      hover. Matches the in-rrd ego-trajectory trail color.
//
// Exposes window.superMapViewer = { highlightSegment(bit), clearHighlight(),
// segments, whenReady(cb) } for the preview-card grid to drive.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';

const MAP_BASE = '/img/supermap/';       // committed under website-dev/img/supermap/
const MANIFEST_URL = '/img/supermap/segments.json';
const HI_COLOR = new THREE.Color(1.0, 1.0, 0.0);   // bright yellow highlight
const HI_MIX = 0.85;                     // how strongly covered points shift to yellow

const container = document.getElementById('map-canvas');
const loadingEl = document.getElementById('map-loading');
const tooltip = document.getElementById('tooltip');

function setLoading(msg) { if (loadingEl) loadingEl.textContent = msg; }
function cw() { return container.clientWidth || 1; }
function ch() { return container.clientHeight || 1; }

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d0f12);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(cw(), ch());
container.appendChild(renderer.domElement);
renderer.domElement.style.display = 'block';

// CSS2D overlay for pinned box labels — mounted inside the container.
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(cw(), ch());
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0';
labelRenderer.domElement.style.left = '0';
labelRenderer.domElement.style.pointerEvents = 'none';
labelRenderer.domElement.style.zIndex = '10';
container.appendChild(labelRenderer.domElement);

const camera = new THREE.PerspectiveCamera(60, cw() / ch(), 0.1, 100000);
camera.up.set(0, 0, 1);  // world is Z-up (lidar frame)

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let pickers = [];             // per-class InstancedMesh used for hover/click picking
const classGroups = {};       // label -> THREE.Group (wireframes + picker)
const pinned = new Map();     // key -> CSS2DObject
let highlight = null;         // reusable wireframe box shown on box hover
let homeCam = null, homeTarget = null;
let pointMat = null;          // the cloud's PointsMaterial (size set per-frame)
let refDist = 1, basePx = 1, sizeMult = 1;
const SCALE_EXP = 0.7;

// Shared uniforms for the highlight shader patch (updated on hover by reference).
const hiUniforms = { uHoveredBit: { value: 0 }, uHiColor: { value: HI_COLOR },
                     uHiMix: { value: HI_MIX } };
const trajLines = new Map();  // seg_bit -> Line2
let lineMat = null;

const UNIT_EDGES = [
  [0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]];
const UNIT_CORNERS = [];
for (const sx of [-.5,.5]) for (const sy of [-.5,.5]) for (const sz of [-.5,.5])
  UNIT_CORNERS.push([sx,sy,sz]);

function classColor(rgb) { return new THREE.Color(rgb[0]/255, rgb[1]/255, rgb[2]/255); }

// ---- Public API for the preview-card grid --------------------------------
const readyCbs = [];
const api = {
  segments: [],
  ready: false,
  whenReady(cb) { this.ready ? cb(this) : readyCbs.push(cb); },
  highlightSegment(bit) {
    hiUniforms.uHoveredBit.value = bit | 0;
    for (const [b, line] of trajLines) line.visible = (b === bit);
  },
  clearHighlight() {
    hiUniforms.uHoveredBit.value = 0;
    for (const line of trajLines.values()) line.visible = false;
  },
};
window.superMapViewer = api;

// ---- PointsMaterial highlight patch --------------------------------------
// Adds `attribute float aSeg` (0..255 membership bitmask) + an int uniform
// uHoveredBit; covered points (aSeg & uHoveredBit != 0) are mixed toward yellow.
// Requires WebGL2 / GLSL ES 3.00 for the bitwise op (default in three r160).
function patchHighlight(mat) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uHoveredBit = hiUniforms.uHoveredBit;
    shader.uniforms.uHiColor = hiUniforms.uHiColor;
    shader.uniforms.uHiMix = hiUniforms.uHiMix;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>',
        '#include <common>\nattribute float aSeg;\nuniform int uHoveredBit;\nvarying float vHi;')
      .replace('#include <color_vertex>',
        '#include <color_vertex>\n{ int _s = int(aSeg + 0.5);'
        + ' vHi = ((_s & uHoveredBit) != 0) ? 1.0 : 0.0; }');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>',
        '#include <common>\nvarying float vHi;\nuniform vec3 uHiColor;\nuniform float uHiMix;')
      .replace('#include <color_fragment>',
        '#include <color_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, uHiColor, vHi * uHiMix);');
  };
}

async function main() {
  setLoading('Loading scene…');
  const meta = await (await fetch(MAP_BASE + 'scene.json')).json();

  setLoading('Loading point cloud… (large, please be patient)');
  const [posBuf, colBuf, segBuf, manifest] = await Promise.all([
    fetch(MAP_BASE + 'points.bin').then(r => r.arrayBuffer()),
    fetch(MAP_BASE + 'colors.bin').then(r => r.arrayBuffer()),
    fetch(MAP_BASE + 'seg.bin').then(r => r.ok ? r.arrayBuffer() : null).catch(() => null),
    fetch(MANIFEST_URL).then(r => r.ok ? r.json() : []).catch(() => []),
  ]);
  api.segments = manifest || [];

  const q = new Uint16Array(posBuf);
  const n = meta.num_points;
  const pos = new Float32Array(n * 3);
  const [mnx, mny, mnz] = meta.pos_min, [sx, sy, sz] = meta.span;
  for (let i = 0; i < n; i++) {
    pos[i*3]   = mnx + q[i*3]   / 65535 * sx;
    pos[i*3+1] = mny + q[i*3+1] / 65535 * sy;
    pos[i*3+2] = mnz + q[i*3+2] / 65535 * sz;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(new Uint8Array(colBuf), 3, true));
  // Per-point segment membership bitmask, uint16 (0 if seg.bin absent/short ->
  // no highlight). Declared as a float attribute in the shader; uint16 values
  // (0..65535) are exactly representable as float, so int(aSeg+0.5) is safe.
  const segArr = new Uint16Array(n);
  if (segBuf) segArr.set(new Uint16Array(segBuf).subarray(0, n));
  geo.setAttribute('aSeg', new THREE.BufferAttribute(segArr, 1));

  const pmat = new THREE.PointsMaterial({ size: meta.point_size, vertexColors: true,
    sizeAttenuation: false });
  patchHighlight(pmat);
  scene.add(new THREE.Points(geo, pmat));
  pointMat = pmat;

  // ---- Boxes, grouped by class (verbatim from the base viewer) ----
  const byClass = {};
  for (const b of meta.boxes) (byClass[b.l] = byClass[b.l] || []).push(b);

  const pickMat = new THREE.MeshBasicMaterial();
  pickMat.colorWrite = false; pickMat.depthWrite = false;
  const unitCube = new THREE.BoxGeometry(1, 1, 1);
  const tmp = new THREE.Matrix4(), tq = new THREE.Quaternion(),
        tp = new THREE.Vector3(), ts = new THREE.Vector3();

  for (const [label, items] of Object.entries(byClass)) {
    const col = classColor(meta.classes[label] || [200,200,200]);
    const group = new THREE.Group();
    const verts = [];
    for (const b of items) {
      const world = UNIT_CORNERS.map(([lx,ly,lz]) => {
        const v = new THREE.Vector3(lx*b.e[0], ly*b.e[1], lz*b.e[2]);
        v.applyQuaternion(tq.set(b.q[0],b.q[1],b.q[2],b.q[3]));
        v.add(tp.set(b.c[0],b.c[1],b.c[2]));
        return v;
      });
      for (const [a,c] of UNIT_EDGES) verts.push(
        world[a].x, world[a].y, world[a].z, world[c].x, world[c].y, world[c].z);
    }
    const eg = new THREE.BufferGeometry();
    eg.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    group.add(new THREE.LineSegments(eg, new THREE.LineBasicMaterial({ color: col })));

    const inst = new THREE.InstancedMesh(unitCube, pickMat, items.length);
    items.forEach((b, k) => {
      tq.set(b.q[0],b.q[1],b.q[2],b.q[3]);
      inst.setMatrixAt(k, tmp.compose(tp.set(b.c[0],b.c[1],b.c[2]), tq,
        ts.set(b.e[0],b.e[1],b.e[2])));
    });
    inst.instanceMatrix.needsUpdate = true;
    inst.userData = { label, items };
    group.add(inst);
    pickers.push(inst);
    scene.add(group);
    classGroups[label] = group;
  }

  // Reusable hover-highlight box.
  const hg = new THREE.BufferGeometry();
  const hv = [];
  for (const [a,c] of UNIT_EDGES) hv.push(
    UNIT_CORNERS[a][0],UNIT_CORNERS[a][1],UNIT_CORNERS[a][2],
    UNIT_CORNERS[c][0],UNIT_CORNERS[c][1],UNIT_CORNERS[c][2]);
  hg.setAttribute('position', new THREE.Float32BufferAttribute(hv, 3));
  highlight = new THREE.LineSegments(hg, new THREE.LineBasicMaterial({ color: 0xffffff }));
  highlight.visible = false;
  scene.add(highlight);

  // ---- Segment trajectory polylines (fat lines, toggled on hover) ----
  lineMat = new LineMaterial({ color: 0xffee00, linewidth: 3.5, depthTest: false,
    transparent: true });
  lineMat.resolution.set(cw(), ch());
  for (const seg of api.segments) {
    const t = seg.trajectory;
    if (!t || t.length < 2) continue;
    const flat = [];
    for (const p of t) flat.push(p[0], p[1], p[2]);
    const lg = new LineGeometry();
    lg.setPositions(flat);
    const line = new Line2(lg, lineMat);
    line.computeLineDistances();
    line.renderOrder = 5;
    line.visible = false;
    scene.add(line);
    trajLines.set(seg.seg_bit, line);
  }

  // ---- Camera framed on the cloud bounds ----
  geo.computeBoundingBox();
  const bb = geo.boundingBox, ctr = new THREE.Vector3(), size = new THREE.Vector3();
  bb.getCenter(ctr); bb.getSize(size);
  const diag = size.length();
  controls.target.copy(ctr);
  camera.position.copy(ctr).add(new THREE.Vector3(diag*0.5, -diag*0.5, diag*0.35));
  camera.far = diag * 10; camera.updateProjectionMatrix();
  homeCam = camera.position.clone(); homeTarget = ctr.clone();
  refDist = camera.position.distanceTo(controls.target);

  buildLegend(byClass, meta);
  const statsEl = document.getElementById('stats');
  if (statsEl) statsEl.innerHTML =
    `${n.toLocaleString()} points · ${meta.boxes.length} boxes · ${Object.keys(byClass).length} classes`;
  basePx = meta.point_size;
  const ps = document.getElementById('psize');
  if (ps) { sizeMult = parseFloat(ps.value); ps.addEventListener('input', () => { sizeMult = parseFloat(ps.value); }); }
  if (loadingEl) loadingEl.style.display = 'none';

  api.ready = true;
  for (const cb of readyCbs) cb(api);
  animate();
}

function buildLegend(byClass, meta) {
  const legend = document.getElementById('legend');
  if (!legend) return;
  const labels = Object.keys(byClass).sort();
  for (const label of labels) {
    const rgb = meta.classes[label] || [200,200,200];
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<span class="sw" style="background:rgb(${rgb[0]},${rgb[1]},${rgb[2]})"></span>`
      + `<span>${label}</span><span class="n">${byClass[label].length}</span>`;
    row.onclick = () => {
      const g = classGroups[label];
      g.visible = !g.visible;
      row.classList.toggle('off', !g.visible);
    };
    legend.appendChild(row);
  }
}

// ---- Hover / pick (canvas-rect relative, not window) ----
function updatePointer(e) {
  const r = renderer.domElement.getBoundingClientRect();
  pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
}
function pick() {
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(pickers.filter(p => p.parent.visible), false);
  return hits.length ? hits[0] : null;
}
renderer.domElement.addEventListener('pointermove', (e) => {
  updatePointer(e);
  const hit = pick();
  if (hit) {
    const b = hit.object.userData.items[hit.instanceId];
    if (tooltip) {
      tooltip.style.display = 'block';
      tooltip.style.left = e.clientX + 'px';
      tooltip.style.top = e.clientY + 'px';
      tooltip.textContent = `${b.l} ${b.i}`;
    }
    highlight.visible = true;
    highlight.position.set(b.c[0], b.c[1], b.c[2]);
    highlight.quaternion.set(b.q[0], b.q[1], b.q[2], b.q[3]);
    highlight.scale.set(b.e[0], b.e[1], b.e[2]);
    renderer.domElement.style.cursor = 'pointer';
  } else {
    if (tooltip) tooltip.style.display = 'none';
    highlight.visible = false;
    renderer.domElement.style.cursor = '';
  }
});
let downXY = null;
renderer.domElement.addEventListener('pointerdown', (e) => { downXY = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!downXY || Math.hypot(e.clientX-downXY[0], e.clientY-downXY[1]) > 4) return;
  updatePointer(e);
  const hit = pick();
  if (!hit) return;
  const b = hit.object.userData.items[hit.instanceId];
  const key = `${b.l}_${b.i}`;
  if (pinned.has(key)) { scene.remove(pinned.get(key)); pinned.delete(key); return; }
  const div = document.createElement('div');
  div.className = 'pin';
  div.textContent = `${b.l} ${b.i}`;
  const obj = new CSS2DObject(div);
  obj.position.set(b.c[0], b.c[1], b.c[2]);
  scene.add(obj);
  pinned.set(key, obj);
});

const resetBtn = document.getElementById('reset');
if (resetBtn) resetBtn.onclick = () => { camera.position.copy(homeCam); controls.target.copy(homeTarget); };
const clearBtn = document.getElementById('clearpins');
if (clearBtn) clearBtn.onclick = () => { for (const o of pinned.values()) scene.remove(o); pinned.clear(); };

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  if (pointMat) {
    const dist = camera.position.distanceTo(controls.target);
    const px = basePx * sizeMult * Math.pow(refDist / dist, SCALE_EXP);
    pointMat.size = Math.max(0.2, Math.min(16.0, px));
  }
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}

window.addEventListener('error', (e) => {
  setLoading('Error: ' + (e.message || e.error) + ' — see console.');
  if (loadingEl) loadingEl.style.color = '#f88';
});
window.addEventListener('unhandledrejection', (e) => {
  setLoading('Error: ' + (e.reason && e.reason.message || e.reason) + ' — see console.');
  if (loadingEl) loadingEl.style.color = '#f88';
});

function resize() {
  const w = cw(), h = ch();
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  labelRenderer.setSize(w, h);
  if (lineMat) lineMat.resolution.set(w, h);
}
window.addEventListener('resize', resize);
if (window.ResizeObserver) new ResizeObserver(resize).observe(container);

main();
