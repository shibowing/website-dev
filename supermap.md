---
title: SuperMap
subtitle: "A Spatio-Temporal SLAM System for Visual-Language Navigation"
layout: page
show_sidebar: false
hide_footer: false
hero_height: is-large
hero_image: /img/place_holder_01.png
---

<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<style>
  body { font-family: 'Google Sans', 'Noto Sans', sans-serif; }

  .hero[style*="background-image"] {
    width: 100vw !important; max-width: 100vw !important;
    margin-left: calc(50% - 50vw) !important; margin-right: calc(50% - 50vw) !important;
    padding: 0 !important; border-radius: 0 !important; overflow: hidden !important;
    background-size: cover !important; background-position: center !important;
    min-height: 300px !important; aspect-ratio: 21/9; position: relative !important;
  }
  .hero:not([style*="background-image"]) {
    width: 100% !important; max-width: 100% !important;
    margin-left: 0 !important; margin-right: 0 !important; padding: 1.5rem 0 !important;
  }
  .hero.is-large[style*="background-image"] { height: auto !important; max-height: 60vh !important; }

  .title-section, .content-section, section.section {
    max-width: 1200px !important; margin-left: auto !important; margin-right: auto !important;
    width: 100% !important; padding: 2rem 1rem !important;
  }
  @media (max-width: 1200px) { .title-section, .content-section, section.section { width: 95% !important; } }

  body, html { overflow-x: hidden; }

  #main-title {
    font-size: clamp(1.8rem, 4vw, 3rem) !important; line-height: 1.15 !important;
    margin-bottom: 1.5rem !important; font-weight: 800 !important; letter-spacing: -0.5px !important;
  }
  @media (max-width: 768px) { #main-title { font-size: clamp(1.4rem, 7vw, 2rem) !important; } }

  .publication-authors { font-family: 'Google Sans', sans-serif; word-wrap: break-word; }
  .publication-authors a { color: #555 !important; text-decoration: none; }
  .publication-authors a:hover { text-decoration: underline; }
  .author-block { display: inline-block; margin: 0.5rem 0.25rem !important; font-size: clamp(0.9rem, 2vw, 1.1rem) !important; }

  .publication-links { margin: 2rem 0 !important; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
  .link-block { margin: 0.25rem !important; flex-shrink: 0; }

  /* Accent color for SuperMap */
  :root { --accent: #1a6fc4; }

  .section-card {
    margin: 2rem 0; padding: 2.5rem; background: #fdfdfd;
    border-radius: 20px; border: 1px solid #eee;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;
  }
  .section-badge {
    position: absolute; top: -15px; left: 30px;
    background: var(--accent); color: white;
    padding: 5px 20px; border-radius: 20px;
    font-weight: 800; font-family: monospace; font-size: 0.9rem;
  }
  .section-card p { font-size: 1.05rem; color: #333; line-height: 1.8; text-align: justify; margin-bottom: 0.8rem; }
  .section-card p:last-child { margin-bottom: 0; }

  .contribution-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem; margin-top: 1rem;
  }
  .contribution-card {
    background: white; border-left: 5px solid var(--accent);
    padding: 1.25rem 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border-radius: 0 10px 10px 0;
  }
  .contribution-card h4 { font-weight: 700; color: var(--accent); margin: 0 0 0.5rem 0; font-size: 1rem; }
  .contribution-card p { font-size: 0.95rem; color: #444; line-height: 1.6; margin: 0; text-align: left; }

  .pipeline-step {
    display: flex; align-items: flex-start; gap: 1.25rem;
    margin-bottom: 1.25rem; padding: 1.25rem 1.5rem;
    background: white; border-radius: 12px;
    border: 1px solid #e9ecef; transition: transform 0.2s;
  }
  .pipeline-step:hover { transform: translateX(4px); }
  .step-num {
    min-width: 38px; height: 38px; background: var(--accent); color: white;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 1rem; flex-shrink: 0;
  }
  .step-body h4 { margin: 0 0 6px 0; font-size: 1.05rem; font-weight: 700; color: #2c3e50; }
  .step-body p { margin: 0; font-size: 0.97rem; color: #555; line-height: 1.65; text-align: left; }

  /* Results tables */
  .results-table {
    width: 100%; border-collapse: separate; border-spacing: 0;
    margin: 1rem 0; border-radius: 12px; overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  }
  .results-table th {
    background: var(--accent); color: white; font-weight: 600;
    padding: 12px 14px; text-align: center; font-size: 0.9rem;
  }
  .results-table td { padding: 10px 14px; border-bottom: 1px solid #e9ecef; color: #444; text-align: center; font-size: 0.9rem; }
  .results-table tr:last-child td { border-bottom: none; }
  .results-table tr:nth-child(even) { background: #f8f9fa; }
  .results-table tr.ours td { font-weight: 700; background: #e8f4fd !important; }

  /* Point cloud viewer */
  .pointcloud-wrapper {
    background: #0a0a0f; border-radius: 16px; overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.25); position: relative;
  }
  #pointcloud-canvas { width: 100%; height: 520px; display: block; cursor: grab; }
  #pointcloud-canvas:active { cursor: grabbing; }
  .pc-hint {
    position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%);
    background: rgba(0,0,0,0.55); color: #ccc; font-size: 0.82rem;
    padding: 5px 14px; border-radius: 20px; pointer-events: none; white-space: nowrap;
  }
  .pc-toolbar {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 16px; background: #111; border-radius: 0 0 16px 16px;
  }
  #pc-status { color: #7a9abb; font-size: 0.88rem; flex: 1; }
  .pc-btn {
    background: #1e1e2e; color: #aac4e0; border: 1px solid #2a3a50;
    border-radius: 8px; padding: 6px 16px; font-size: 0.88rem; cursor: pointer; transition: all 0.2s;
  }
  .pc-btn:hover { background: #2a3a50; color: white; }

  /* Citation */
  .citation-box {
    background: #f8f9fa; border-radius: 12px; border-left: 4px solid var(--accent);
    padding: 2rem;
  }
  .citation-box pre {
    background: white; padding: 1.25rem; border-radius: 8px;
    border: 1px solid #e9ecef; overflow-x: auto; font-size: 0.92rem; margin: 0;
  }

  .section { padding: 1.5rem; }
  .section p { text-align: justify; }

  /* TOC */
  .toc {
    width: 280px;
    font-family: 'Google Sans', sans-serif;
    position: fixed;
    top: 100px;
    display: none;
    z-index: 1000;
    max-height: calc(100vh - 280px);
    overflow-y: auto;
    padding-right: 10px;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  @media (min-width: 1400px) {
    .toc.show {
      left: max(20px, calc(25vw - 400px));
      display: block !important;
      opacity: 1;
    }
  }
  .toc::-webkit-scrollbar { display: none; }
  .toc h3 {
    font-family: 'Google Sans', sans-serif;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .toc hr { border: 0; height: 1px; background-color: #ccc; margin-bottom: 15px; }
  .toc ul { list-style: none; padding: 0; margin: 0; }
  .toc li { margin-bottom: 6px; }
  .toc a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    transition: color 0.2s ease, font-weight 0.2s ease;
  }
  .toc a:hover { color: #000; text-decoration: underline; }
  .toc a.active {
    color: var(--accent);
    font-weight: 700;
    position: relative;
    padding-left: 12px;
  }
  .toc a.active::before {
    content: "|";
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: 700;
  }
</style>

<!-- Title Section -->
<section class="section title-section">
  <div class="toc" id="toc">
    <h3>Content</h3><hr>
    <ul>
      <li><a href="#abstract">Abstract</a></li>
      <li><a href="#contributions">Contributions</a></li>
      <li><a href="#method">System Architecture</a></li>
      <li><a href="#demo">Point Cloud Demo</a></li>
      <li><a href="#results">Results</a></li>
      <li><a href="#bibtex">Citation</a></li>
    </ul>
  </div>

  <div class="container">
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <h1 class="title is-1 publication-title" id="main-title">
          <span style="color: var(--accent);">SuperMap</span>: A Spatio-Temporal SLAM System<br>for Visual-Language Navigation
        </h1>

        <div class="is-size-5 publication-authors" style="margin-top: 1.5rem;">
          <span class="author-block">Carnegie Mellon University — AirLab</span>
        </div>

        <div class="publication-links">
          <span class="link-block">
            <a href="https://github.com/gfchen01/semantic_mapping" class="external-link button is-normal is-rounded is-dark" target="_blank">
              <span class="icon"><i class="fab fa-github"></i></span>
              <span>Code</span>
            </a>
          </span>
          <span class="link-block">
            <a href="#" class="external-link button is-normal is-rounded is-dark">
              <span class="icon"><i class="fas fa-file-pdf"></i></span>
              <span>Paper</span>
            </a>
          </span>
          <span class="link-block">
            <a href="#bibtex" class="external-link button is-normal is-rounded is-dark">
              <span class="icon"><i class="fas fa-quote-left"></i></span>
              <span>Citation</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Abstract -->
<section class="section content-section" id="abstract">
  <div class="container">
    <h2 class="title is-2">Abstract</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="section-card">
          <div class="section-badge">SuperMap</div>
          <p>Robotic navigation in human environments requires a spatio-temporal semantic representation that can reconcile open-vocabulary perception with long-term environmental changes. While foundation models provide strong zero-shot recognition, their predictions are intermittent and view-dependent, and naively integrating them into mapping pipelines leads to identity drift and stale semantics over time.</p>
          <p>We present <strong>SuperMap</strong>, a 4D spatio-temporal mapping framework for language-guided navigation that integrates high-frequency geometric SLAM with asynchronous open-vocabulary perception. Our core contribution is a <em>consistency-driven mapping engine</em> that combines 3D-aware instance association and re-activation with a principled existence-and-label confidence update to maintain stable object identities and prune outdated map content under occlusions and scene changes.</p>
          <p>SuperMap produces a queryable 4D scene-graph representation that interfaces naturally with Vision-Language Models by supporting compositional queries over object semantics, relations, and history. We demonstrate SuperMap on benchmarks and real robots, including dynamic scenes with appearance/disappearance and relocation, and provide ablations and runtime analysis. We will release the full system as open-source to provide the community with a deployable baseline for open-vocabulary spatio-temporal mapping.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contributions -->
<section class="section content-section" id="contributions">
  <div class="container">
    <h2 class="title is-2">Contributions</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="contribution-grid">
          <div class="contribution-card">
            <h4>Open-Vocabulary Spatio-Temporal SLAM</h4>
            <p>An online robotic system that builds a persistent, queryable open-vocabulary 4D scene memory suitable for downstream language-conditioned tasks — running fully onboard in real time.</p>
          </div>
          <div class="contribution-card">
            <h4>Spatio-Temporal Object Tracking</h4>
            <p>An online pipeline that integrates 2D–3D association, validation, and change-aware updates to maintain instance consistency under occlusions, partial observations, label variability, and scene change.</p>
          </div>
          <div class="contribution-card">
            <h4>Instance-level Scene Graph</h4>
            <p>A 4D scene graph that incorporates spatial and temporal information for each object, equipping robots with instance-level reasoning — e.g., locating moved objects, recalling past scenes.</p>
          </div>
          <div class="contribution-card">
            <h4>Open-Source Framework</h4>
            <p>Full release of the change-detection benchmark, comprehensive ablations, runtime profiling, and the real-robot visual–language navigation pipeline to facilitate reproducible research.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- System Architecture -->
<section class="section content-section" id="method">
  <div class="container">
    <h2 class="title is-2">System Architecture</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="section-card">
          <div class="section-badge">Three-Layer Pipeline</div>
          <div style="margin-top: 1rem;">
            <div class="pipeline-step">
              <div class="step-num">1</div>
              <div class="step-body">
                <h4>Geometric Layer — Online 3D Reconstruction</h4>
                <p>SuperOdometry provides pose estimation and a colorized dense 3D model from synchronized RGB images, depth/LiDAR, and IMU streams. Geometric priors anchor all subsequent 2D–3D association and global map consistency checks.</p>
              </div>
            </div>
            <div class="pipeline-step">
              <div class="step-num">2</div>
              <div class="step-body">
                <h4>Instance Layer — Spatio-Temporal Instance Association</h4>
                <p>Per-frame open-vocabulary detections (GroundingDINO + SAM2) are associated to existing 3D map objects via a hybrid 2D–3D tracker. A probabilistic geometric consistency update and Bayesian semantic fusion maintain stable object identities across long time horizons under occlusions and scene change.</p>
              </div>
            </div>
            <div class="pipeline-step">
              <div class="step-num">3</div>
              <div class="step-body">
                <h4>Topological Layer — Abstract 4D Scene Graph</h4>
                <p>The object map is abstracted into a scene graph <em>G = (V, E<sub>s</sub>, E<sub>t</sub>)</em> with spatial edges (geometric predicates: on, beside, under) and temporal edges (object trajectory history). The graph is serialized as structured text for compositional VLM queries over object semantics, spatial relations, and history.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Point Cloud Demo -->
<section class="section content-section" id="demo">
  <div class="container">
    <h2 class="title is-2">Interactive 3D Map — CMU Campus Segment 01</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="pointcloud-wrapper">
          <canvas id="pointcloud-canvas"></canvas>
          <div class="pc-hint">Left drag: rotate &nbsp;|&nbsp; Scroll: zoom &nbsp;|&nbsp; Middle drag: pan</div>
        </div>
        <div class="pc-toolbar">
          <span id="pc-status">Loading…</span>
          <button class="pc-btn" id="pc-reset">Reset view</button>
        </div>
        <p style="text-align:center; font-style:italic; color:#888; font-size:0.9rem; margin-top:0.75rem;">
          White: LiDAR point cloud (47k pts) &nbsp;|&nbsp; Yellow: SuperMap 3D bounding boxes
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Results -->
<section class="section content-section" id="results">
  <div class="container">
    <h2 class="title is-2">Results</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">

        <div class="section-card" style="margin-bottom: 2rem;">
          <div class="section-badge">Class-level Segmentation — ScanNet</div>
          <p style="margin: 1.5rem 0 1rem;">SuperMap achieves competitive accuracy against state-of-the-art object-level mapping methods while running fully online.</p>
          <table class="results-table">
            <thead><tr><th>Method</th><th>Approach</th><th>mIoU (%)</th><th>f-mIoU (%)</th><th>Acc (%)</th></tr></thead>
            <tbody>
              <tr><td>ConceptGraphs</td><td>object-level</td><td>21.62</td><td>24.32</td><td>31.05</td></tr>
              <tr><td>HOV-SG</td><td>object-level</td><td>26.79</td><td>36.05</td><td>35.17</td></tr>
              <tr class="ours"><td>SuperMap (Ours)</td><td>object-level</td><td>27.42</td><td>43.50</td><td>55.48</td></tr>
            </tbody>
          </table>
        </div>

        <div class="section-card" style="margin-bottom: 2rem;">
          <div class="section-badge">Instance-level Segmentation — ScanNet (mAP<sub>50</sub>)</div>
          <p style="margin: 1.5rem 0 1rem;">SuperMap significantly outperforms prior scene-graph methods on instance-level detection.</p>
          <table class="results-table">
            <thead><tr><th>Method</th><th>Chair</th><th>Window</th><th>Refrigerator</th><th>Sofa</th><th>Door</th></tr></thead>
            <tbody>
              <tr><td>HOV-SG</td><td>4.58</td><td>0.00</td><td>0.00</td><td>30.00</td><td>9.70</td></tr>
              <tr><td>ConceptGraphs</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr>
              <tr class="ours"><td>SuperMap (Ours)</td><td>63.76</td><td>42.20</td><td>62.50</td><td>33.35</td><td>10.00</td></tr>
            </tbody>
          </table>
        </div>

        <div class="section-card">
          <div class="section-badge">Spatio-Temporal Change Detection Recall</div>
          <p style="margin: 1.5rem 0 1rem;">SuperMap achieves perfect recall on appearance events and strong recall on disappearance events, significantly outperforming prior methods.</p>
          <table class="results-table">
            <thead>
              <tr><th>Method</th><th>Appeared (Bucket)</th><th>Appeared (Cart)</th><th>Appeared (Sign)</th><th>Disappeared (Plant)</th><th>Disappeared (Trash)</th><th>Disappeared (Chair)</th></tr>
            </thead>
            <tbody>
              <tr><td>Khronos</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
              <tr><td>DualMap</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.310</td><td>0.000</td><td>0.000</td></tr>
              <tr class="ours"><td>SuperMap (Ours)</td><td>1.000</td><td>0.262</td><td>0.583</td><td>0.755</td><td>0.434</td><td>1.000</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- Citation -->
<section class="section content-section" id="bibtex">
  <div class="container">
    <h2 class="title is-2">Citation</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="citation-box">
          <pre>@inproceedings{supermap2026,
  title     = {SuperMap: A Spatio-Temporal SLAM System for Visual-Language Navigation},
  author    = {Anonymous},
  booktitle = {Robotics: Science and Systems (RSS)},
  year      = {2026}
}</pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Point cloud viewer script -->
<script>
(function () {
    function loadScript(src, cb) {
        var s = document.createElement('script'); s.src = src; s.onload = cb; document.head.appendChild(s);
    }
    var THREE, OrbitControls, PLYLoader, renderer, scene, camera, controls;
    var canvas = document.getElementById('pointcloud-canvas');
    var status = document.getElementById('pc-status');

    function initThree() {
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setClearColor(0x0a0a0f);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.01, 5000);
        camera.position.set(0, 5, 20);
        controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true; controls.dampingFactor = 0.08;
        window.addEventListener('resize', function () {
            var w = canvas.clientWidth, h = canvas.clientHeight;
            renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
        });
        (function animate() { requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); })();
    }

    function fetchPLY(url) {
        return fetch(url).then(function(r) {
            if (!r.ok) throw new Error('Could not load ' + url); return r.arrayBuffer();
        });
    }

    function autoLoadBoth() {
        status.textContent = 'Loading point cloud…';
        fetchPLY('/img/supermap/segment_01_cloud.ply').then(function(cloudBuf) {
            status.textContent = 'Loading bounding boxes…';
            fetchPLY('/img/supermap/segment_01_bboxes.ply').then(function(bboxBuf) {
                var cloudGeo = PLYLoader.parse(cloudBuf);
                cloudGeo.computeBoundingBox();
                var cloudBox = cloudGeo.boundingBox;
                var cloudCenter = new THREE.Vector3();
                cloudBox.getCenter(cloudCenter);
                cloudGeo.translate(-cloudCenter.x, -cloudCenter.y, -cloudCenter.z);
                var cpos = cloudGeo.attributes.position;
                var ccols = new Float32Array(cpos.count * 3);
                for (var i = 0; i < cpos.count; i++) { ccols[i*3] = 1.0; ccols[i*3+1] = 1.0; ccols[i*3+2] = 1.0; }
                cloudGeo.setAttribute('color', new THREE.BufferAttribute(ccols, 3));
                var cloudMesh = new THREE.Points(cloudGeo, new THREE.PointsMaterial({ size: 0.15, vertexColors: true, sizeAttenuation: true, depthWrite: false }));
                cloudMesh.renderOrder = 0; scene.add(cloudMesh);

                var bboxGeo = PLYLoader.parse(bboxBuf);
                bboxGeo.translate(-cloudCenter.x, -cloudCenter.y, -cloudCenter.z);
                var bpos = bboxGeo.attributes.position;
                var bcols = new Float32Array(bpos.count * 3);
                for (var j = 0; j < bpos.count; j++) { bcols[j*3] = 1.0; bcols[j*3+1] = 0.85; bcols[j*3+2] = 0.0; }
                bboxGeo.setAttribute('color', new THREE.BufferAttribute(bcols, 3));
                var bboxMesh = new THREE.Points(bboxGeo, new THREE.PointsMaterial({ size: 0.4, vertexColors: true, sizeAttenuation: true, depthTest: false }));
                bboxMesh.renderOrder = 1; scene.add(bboxMesh);

                var cloudSize = new THREE.Vector3(); cloudBox.getSize(cloudSize);
                var maxDim = Math.max(cloudSize.x, cloudSize.y, cloudSize.z);
                camera.position.set(0, maxDim * 0.4, maxDim * 1.1);
                controls.target.set(0, 0, 0); controls.update();
                status.textContent = cpos.count.toLocaleString() + ' cloud pts + ' + bpos.count.toLocaleString() + ' bbox pts';
            });
        }).catch(function(err) { status.textContent = 'Error: ' + err.message; });
    }

    document.getElementById('pc-reset').addEventListener('click', function () {
        if (!scene) return;
        var box = new THREE.Box3();
        scene.traverse(function(o) { if (o.isPoints) box.expandByObject(o); });
        var size = new THREE.Vector3(); box.getSize(size);
        var maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(0, maxDim * 0.4, maxDim * 1.1);
        controls.target.set(0, 0, 0); controls.update();
    });

    var observer = new IntersectionObserver(function(entries) {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js', function () {
            THREE = window.THREE;
            loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js', function () {
                OrbitControls = THREE.OrbitControls;
                loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/PLYLoader.js', function () {
                    PLYLoader = new THREE.PLYLoader(); initThree(); autoLoadBoth();
                });
            });
        });
    }, { threshold: 0.1 });
    observer.observe(canvas);

})();
</script>

<!-- TOC Scroll Behavior (matches SuperOdometry index.md) -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.toc');
    const mainTitle = document.getElementById('main-title');

    if (toc && mainTitle) {
      function checkTocVisibility() {
        const titleRect = mainTitle.getBoundingClientRect();
        if (titleRect.top <= 100) {
          toc.classList.add('show');
        } else {
          toc.classList.remove('show');
        }
      }
      window.addEventListener('scroll', checkTocVisibility);
      checkTocVisibility();
    }

    const tocLinks = document.querySelectorAll('.toc a');
    const sections = [];
    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.getElementById(href.substring(1));
        if (section) sections.push({ element: section, link: link });
      }
    });

    function updateActiveTocLink() {
      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      let currentSection = null;

      if (window.scrollY + windowHeight >= documentHeight - 50) {
        currentSection = sections[sections.length - 1];
      } else {
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].element.getBoundingClientRect();
          const sTop = rect.top + window.scrollY;
          if (scrollPosition >= sTop && scrollPosition < sTop + rect.height) {
            currentSection = sections[i];
            break;
          }
        }
        if (!currentSection) {
          for (let i = sections.length - 1; i >= 0; i--) {
            const sTop = sections[i].element.getBoundingClientRect().top + window.scrollY;
            if (sTop <= scrollPosition) { currentSection = sections[i]; break; }
          }
        }
      }

      tocLinks.forEach(link => link.classList.remove('active'));
      if (currentSection) currentSection.link.classList.add('active');
    }

    window.addEventListener('scroll', updateActiveTocLink);
    updateActiveTocLink();
  });
</script>
