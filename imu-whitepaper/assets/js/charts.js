/* Interactive figures of the project page. Vanilla SVG and canvas, no library; every value comes from window.SITE,
   which tools/build_data.py builds from the same files as the paper. */
(function () {
  "use strict";
  const S = window.SITE;
  if (!S) return;
  const NS = "http://www.w3.org/2000/svg";
  const PLATS = ["car", "human", "quadruped", "drone"];
  const PNAME = { car: "Car", human: "Handheld", quadruped: "Quadruped", drone: "Aerial" };
  const PCOL = { car: "#3F6EA8", human: "#1F8A8A", quadruped: "#D99A2B", drone: "#D1603D" };
  const PTXT = { car: "#345D8F", human: "#16706F", quadruped: "#8F5E10", drone: "#AE4527" };      // the same hues, dark enough for text
  const INK = "#1A1A1A", MUTED = "#646a78", LINE = "#E5E0D6", PLUM = "#7A2E80", LILAC = "#B784BB", NAVY = "#2B3A55";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------------- helpers ----------------
  const $ = id => document.getElementById(id);
  function el(tag, attrs, parent, text) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs || {}) if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]);
    if (text !== undefined) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  const clear = s => { while (s.firstChild) s.removeChild(s.firstChild); return s; };
  const lin = (d0, d1, r0, r1) => { const f = v => r0 + (v - d0) / (d1 - d0) * (r1 - r0); f.inv = y => d0 + (y - r0) / (r1 - r0) * (d1 - d0); return f; };
  const logs = (d0, d1, r0, r1) => { const a = Math.log10(d0), b = Math.log10(d1); return v => r0 + (Math.log10(v) - a) / (b - a) * (r1 - r0); };
  const fmt = (v, n = 3) => (v === null || v === undefined ? "–" : Number(v).toFixed(n));
  const tip = $("tooltip");
  function showTip(html, ev) {
    tip.innerHTML = html; tip.classList.add("show");
    const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
    let x = ev.clientX + pad, y = ev.clientY + pad;
    if (x + w > innerWidth - 8) x = ev.clientX - w - pad;
    if (y + h > innerHeight - 8) y = ev.clientY - h - pad;
    tip.style.left = x + "px"; tip.style.top = y + "px";
  }
  const hideTip = () => tip.classList.remove("show");
  function seg(id, cb) {
    const g = $(id); if (!g) return;
    g.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      g.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
      cb(b.dataset.v);
    });
  }
  function axisY(s, y, ticks, x0, x1, fmtf, opts = {}) {
    const g = el("g", { class: "axis" }, s);
    for (const v of ticks) {
      const yy = y(v);
      if (opts.grid !== false) el("line", { x1: x0, x2: x1, y1: yy, y2: yy, class: "grid-line", stroke: LINE, "stroke-dasharray": "2 3" }, g);
      el("text", { x: x0 - 8, y: yy + 4, "text-anchor": "end" }, g, fmtf ? fmtf(v) : v);
    }
    return g;
  }
  function axisX(s, x, ticks, y0, fmtf) {
    const g = el("g", { class: "axis" }, s);
    el("line", { x1: x(ticks[0]), x2: x(ticks[ticks.length - 1]), y1: y0, y2: y0, stroke: "#D7D1C4" }, g);
    for (const v of ticks) {
      el("line", { x1: x(v), x2: x(v), y1: y0, y2: y0 + 4, stroke: "#D7D1C4" }, g);
      el("text", { x: x(v), y: y0 + 18, "text-anchor": "middle" }, g, fmtf ? fmtf(v) : v);
    }
    return g;
  }
  function path(points) { return points.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(""); }
  function whenVisible(node, fn) {
    if (!("IntersectionObserver" in window)) { fn(); return; }
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { io.disconnect(); fn(); } }, { threshold: 0.25 });
    io.observe(node);
  }
  const TEAM = Object.fromEntries(S.teams.map(t => [t.id, t]));
  // Figures with a slider play themselves once when they come into view: the slider sweeps through its range and returns,
  // and stops as soon as the reader touches it. A few seconds of SVG updates, then nothing runs.
  function autoSweep(rng, stops, ms) {
    if (reduce || !("IntersectionObserver" in window)) return;
    let touched = false;
    ["pointerdown", "keydown", "touchstart"].forEach(ev => rng.addEventListener(ev, () => { touched = true; }, { passive: true }));
    whenVisible(rng.closest(".figure") || rng, () => {
      const t0 = performance.now(), n = stops.length - 1;
      const step = now => {
        if (touched) return;
        const u = Math.min(1, (now - t0) / ms), f = u * n, i = Math.min(n - 1, Math.floor(f)), a = f - i, e = a * a * (3 - 2 * a);
        rng.value = stops[i] + (stops[i + 1] - stops[i]) * e;
        rng.dispatchEvent(new Event("input"));
        if (u < 1) requestAnimationFrame(step);
      };
      setTimeout(() => requestAnimationFrame(step), 500);
    });
  }

  // ======================= 1. the map of Fig. 1 =======================
  // What the left half of Fig. 1 of the paper shows, laid out for a wide column: every one-second window of the map, a
  // soft region behind each platform, photographs of the platforms around it with an arrow to where their kind of
  // motion is densest. Layout, arrow targets and regions come from tools/build_mapfig.py (window.MAPFIG).
  // A click on a platform (its button, name or any of its photographs) shows that platform alone; a second click
  // brings all four back. The points are drawn on a canvas, redrawn only when something changes.
  (function mapFigure() {
    const cv = $("map-canvas"), svg = $("map-svg"), F = window.MAPFIG; if (!cv || !svg || !F) return;
    const ctx = cv.getContext("2d");
    const T = S.tsne, n = T.x.length, M = F.map, span = 1 + 2 * M.pad;
    svg.setAttribute("viewBox", `0 0 ${F.w} ${F.h}`);
    $("map-stage").style.aspectRatio = `${F.w} / ${F.h}`;
    let mode = "plat", focus = null, hover = -1, W = 0, k = 1, DPR = 1, X = new Float32Array(n), Y = new Float32Array(n);
    const spMax = 9, trMax = 1.2;                // windows above the cap take its colour (legend: ≥)
    // gold, red, plum: even the light end has 3:1 contrast on white
    function ramp(u) {
      const st = [[176, 138, 58], [200, 82, 62], [110, 40, 120]];
      const j = u < 0.5 ? 0 : 1, f = u < 0.5 ? u * 2 : (u - 0.5) * 2;
      const c = st[j].map((x, q) => Math.round(x + (st[j + 1][q] - x) * f));
      return `rgb(${c[0]},${c[1]},${c[2]})`;
    }
    const colorOf = i => mode === "plat" ? PCOL[PLATS[T.p[i]]] : ramp(Math.sqrt(mode === "speed" ? Math.min(1, T.speed[i] / spMax) : Math.min(1, Math.abs(T.turn[i]) / trMax)));
    const lg = document.createElement("div");
    lg.className = "ramp-legend"; lg.hidden = true;
    $("map-stage").after(lg);
    function legend() {
      lg.hidden = mode === "plat";
      if (mode === "plat") return;
      const max = mode === "speed" ? spMax : trMax, unit = mode === "speed" ? "m/s" : "rad/s";
      const ticks = mode === "speed" ? [0, 1, 3, 6, 9] : [0, 0.1, 0.3, 0.6, 1.2];
      const grad = Array.from({ length: 11 }, (_, i) => `${ramp(i / 10)} ${i * 10}%`).join(",");
      lg.innerHTML = `<span class="ctl-label">${mode === "speed" ? "Speed" : "Turn rate"}</span><div class="ramp"><i style="background:linear-gradient(90deg,${grad})"></i>` +
        ticks.map(v => `<b style="left:${(Math.sqrt(v / max) * 100).toFixed(1)}%">${v === max ? "≥ " : ""}${v}</b>`).join("") + `</div><span class="small muted">${unit}</span>`;
    }
    // the regions: one tinted image per platform
    const region = {};
    PLATS.forEach(p => { const im = new Image(); im.onload = () => { region[p] = im; draw(); }; im.src = `assets/img/map/region_${p}.png`; });

    function layout() {
      const r = cv.getBoundingClientRect(); if (!r.width) return;
      DPR = Math.min(window.devicePixelRatio || 1, 2); W = r.width; k = W / F.w;
      cv.width = Math.round(W * DPR); cv.height = Math.round(r.height * DPR);
      for (let i = 0; i < n; i++) { X[i] = (M.x + (T.x[i] + M.pad) / span * M.w) * k; Y[i] = (M.y + M.h - (T.y[i] + M.pad) / span * M.h) * k; }
      draw();
    }
    function draw() {
      if (!W) return;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.clearRect(0, 0, W, cv.height / DPR);
      PLATS.forEach(p => { if (region[p] && (!focus || focus === p) && mode === "plat") ctx.drawImage(region[p], M.x * k, M.y * k, M.w * k, M.h * k); });
      const r = Math.max(1.3, 1.9 * k);
      if (focus) {                                                             // the other platforms stay as a faint ground
        ctx.fillStyle = "#CFC9BC"; ctx.globalAlpha = 0.35;
        for (let i = 0; i < n; i++) if (PLATS[T.p[i]] !== focus) { ctx.beginPath(); ctx.arc(X[i], Y[i], r * 0.8, 0, 6.2832); ctx.fill(); }
      }
      ctx.globalAlpha = 0.9;
      for (let i = 0; i < n; i++) {
        if (focus && PLATS[T.p[i]] !== focus) continue;
        ctx.fillStyle = colorOf(i);
        ctx.beginPath(); ctx.arc(X[i], Y[i], r, 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (hover >= 0) {
        ctx.beginPath(); ctx.arc(X[hover], Y[hover], 7, 0, 6.2832); ctx.lineWidth = 2; ctx.strokeStyle = INK; ctx.stroke();
        ctx.beginPath(); ctx.arc(X[hover], Y[hover], 3.2, 0, 6.2832); ctx.fillStyle = colorOf(hover); ctx.fill();
      }
    }
    // ---- photographs, arrows, labels and platform names: an SVG over the canvas, in the units of the figure ----
    const groups = [];
    F.photos.forEach(ph => {
      const g = el("g", { class: "mp", "data-p": ph.plat, tabindex: ph.label.length ? 0 : null, role: ph.label.length ? "button" : null, "aria-label": ph.label.length ? `${ph.label.join(" ")}: show ${PNAME[ph.plat]} alone` : null }, svg);
      const r = ph.d / 2, col = PTXT[ph.plat];
      if (ph.path) {
        el("path", { d: ph.path, class: "mp-arrow", stroke: col }, g);
        const q = ph.path.match(/Q([\d.\-]+),([\d.\-]+) ([\d.\-]+),([\d.\-]+)/).slice(1).map(Number), a = Math.atan2(q[3] - q[1], q[2] - q[0]);
        const tip = [q[2] + 2.2 * Math.cos(a), q[3] + 2.2 * Math.sin(a)], w = 0.42, L = 9;
        el("path", { d: `M${tip[0].toFixed(2)},${tip[1].toFixed(2)}L${(tip[0] - L * Math.cos(a - w)).toFixed(2)},${(tip[1] - L * Math.sin(a - w)).toFixed(2)}L${(tip[0] - L * Math.cos(a + w)).toFixed(2)},${(tip[1] - L * Math.sin(a + w)).toFixed(2)}Z`, fill: col }, g);
        el("circle", { cx: ph.target[0], cy: ph.target[1], r: 3.6, class: "mp-target", stroke: col }, g);
      }
      el("image", { href: `assets/img/map/${ph.key}.png`, x: ph.cx - r, y: ph.cy - r, width: ph.d, height: ph.d }, g);
      el("circle", { cx: ph.cx, cy: ph.cy, r, class: "mp-ring", stroke: PCOL[ph.plat] }, g);
      ph.label.forEach((t, i) => {                                             // 15-unit lines, below the photograph or beside it
        const below = ph.side === "below", left = ph.side === "left";
        el("text", { x: below ? ph.cx : left ? ph.cx - r - 8 : ph.cx + r + 8, y: (below ? ph.cy + r + 5 : ph.cy - 7.5 * ph.label.length) + 12 + 15 * i,
          "text-anchor": below ? "middle" : left ? "end" : "start", class: "mp-label", fill: col }, g, t);
      });
      groups.push(g);
    });
    PLATS.forEach(p => {
      const N = F.names[p], g = el("g", { class: "mp mp-nameg", "data-p": p, tabindex: 0, role: "button", "aria-label": `Show ${PNAME[p]} alone` }, svg);
      const t = el("text", { x: N.x, y: N.y + 14, class: "mp-name", fill: PTXT[p] }, g, PNAME[p]);
      if (N.lines === 2) el("text", { x: N.x, y: N.y + 32, class: "mp-hours", fill: PTXT[p] }, g, `${N.hours.toFixed(1)} h`);
      else el("tspan", { class: "mp-hours", dx: 8 }, t, `${N.hours.toFixed(1)} h`);
      groups.push(g);
    });
    const knn = $("map-knn");
    if (knn) knn.textContent = `One second of raw signal identifies the platform in ${Math.round(100 * F.knn_all)}% of cases on held-out recordings.`;

    function setFocus(p) {
      focus = p; hover = -1; hideTip();
      groups.forEach(g => g.classList.toggle("off", !!focus && g.dataset.p !== focus));
      $("map-plat").querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.v === (focus || "all")));
      draw();
    }
    groups.forEach(g => {
      const go = () => setFocus(focus === g.dataset.p ? null : g.dataset.p);
      g.addEventListener("click", go);
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
    $("map-plat").addEventListener("click", e => { const b = e.target.closest("button"); if (b) setFocus(b.dataset.v === "all" || b.dataset.v === focus ? null : b.dataset.v); });
    seg("map-color", v => { mode = v; legend(); draw(); });

    function nearest(mx, my) {
      let best = -1, bd = 300;
      for (let i = 0; i < n; i++) {
        if (focus && PLATS[T.p[i]] !== focus) continue;
        const d = (X[i] - mx) ** 2 + (Y[i] - my) ** 2;
        if (d < bd) { bd = d; best = i; }
      }
      return best;
    }
    cv.addEventListener("mousemove", e => {
      const r = cv.getBoundingClientRect(), i = nearest(e.clientX - r.left, e.clientY - r.top);
      if (i !== hover) { hover = i; draw(); }
      if (i >= 0) showTip(`<b>${PNAME[PLATS[T.p[i]]]}</b> · one second<br><span class="t-num">${T.speed[i].toFixed(1)} m/s</span>, climb <span class="t-num">${T.climb[i].toFixed(2)}</span> m/s, turn <span class="t-num">${Math.abs(T.turn[i]).toFixed(2)}</span> rad/s`, e);
      else hideTip();
    });
    cv.addEventListener("mouseleave", () => { hover = -1; draw(); hideTip(); });
    whenVisible(cv, layout);
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(layout, 150); });
  })();

  // ======================= 2. levels of generality =======================
  (function ladder() {
    const L = [
      [0, "Serve one platform", "Held-out recordings of that platform", "est", "Established", "A decade of platform-specific systems, from pedestrians to cars, quadrotors and legged robots."],
      [1, "Serve several platforms with a shared backbone, platform-specific heads and a known platform", "Held-out recordings of each platform, with its label", "est", "Established", "Tartan IMU; 0.538 on this benchmark when told the platform."],
      [2, "Serve several platforms with one set of weights and no platform label", "Held-out recordings of every training platform, without labels", "reach", "Reached", "Ten solutions score 0.160 to 0.275. A label adds nothing to a shared model, but four specialists of the reference model are still 12 to 18% better."],
      [3, "Cope with a new sensor installation: mounting, frame convention, sensor model", "The same recordings with the sensor turned or stored in another frame, and new sensor models", "part", "Partly", "Storage frames can be detected from the signal. Turning the sensor by 10 to 20° raises the error of one solution (thisray) by three quarters or more, and the score of the reference model by 23 to 57%, or by 2 to 4% after training with bounded rotations."],
      [4, "Transfer to a platform or vehicle never seen in training", "One platform or vehicle left out of training, with and without a few minutes of its data", "open", "Open", "Trained without a platform, the reference model is no better on it than predicting zero velocity; five minutes of its data close part of the gap on the ground and none in the air."],
      [5, "Meet level 4 causally, with a calibrated uncertainty for fusion with other sensors", "Inference from the past only; calibration of the predicted uncertainty", "open", "Open", "All ten solutions read the future and none evaluates the calibration of an uncertainty; a past-only reference model run as a stream is 2% worse than one that reads ahead."],
    ];
    const box = $("ladder"); if (!box) return;
    for (const [lv, what, test, st, stl, ev] of L.slice().reverse()) {
      const d = document.createElement("div");
      d.className = "rung" + (lv === 2 ? " this open" : ""); d.tabIndex = 0; d.setAttribute("role", "button"); d.setAttribute("aria-expanded", lv === 2);
      d.innerHTML = `<div class="lv">${lv}</div><div class="what">${what}</div><span class="status st-${st}"><i></i>${stl}${lv === 2 ? " · this study" : ""}</span>
        <div class="detail"><div><h4>How to test it</h4>${test}.</div><div><h4>Evidence</h4>${ev}</div></div>`;
      const toggle = () => { d.classList.toggle("open"); d.setAttribute("aria-expanded", d.classList.contains("open")); };
      d.addEventListener("click", toggle);
      d.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
      box.appendChild(d);
    }
  })();

  // ======================= 2b. true paths and the teams' estimates (Fig. 1 of the paper, in motion) =======================
  // Four line drawings, one per platform, of the same data as Fig. 1: the true path of one test recording and the paths
  // of the nine solutions with public predictions, one point per second. The view is a fixed parallel projection, as in
  // the paper. Each panel keeps its grid and the shadow of the true path in a layer drawn once; a frame draws that layer
  // and at most ten polylines, only while the figure is on screen.
  (function pathsFigure() {
    const grid = $("paths-grid"); if (!grid || !S.paths) return;
    const TEAMS = S.teams.filter(t => S.paths.car.est[t.id]);                    // in the order of the internal ranking
    const COL = ["#7A2E80", "#2F6FB5", "#1F8A8A", "#D1603D", "#C98A1B", "#5B8C3A", "#B5477D", "#5A5FCF", "#8A6A4A"];
    const colOf = Object.fromEntries(TEAMS.map((t, i) => [t.id, COL[i]]));
    const STEP = { car: 10, human: 10, quadruped: 5, drone: 2 };                 // grid step in metres, as in the paper
    const AZ = 30 * Math.PI / 180, EL = 30 * Math.PI / 180, ca = Math.cos(AZ), sa = Math.sin(AZ), se = Math.sin(EL), ce = Math.cos(EL);
    const PLAY = 12, HOLD = 4;                                                   // seconds: the replay, then the finished picture
    const sel = new Set(TEAMS.slice(0, 5).map(t => t.id));
    let u = reduce ? 1 : 0, playing = !reduce, visible = false, raf = 0, last = 0, held = 0, hl = null;
    const prj = (x1, y1, z) => { const yr = x1 * sa + y1 * ca; return [x1 * ca - y1 * sa, -(yr * se + z * ce)]; };

    const panels = PLATS.map(p => {
      const D = S.paths[p], n = D.truth.length / 3;
      // metres; turned about the vertical so that the long axis of the true path lies across the panel
      let mx = 0, my = 0, sxx = 0, syy = 0, sxy = 0, z0 = Infinity;
      for (let i = 0; i < n; i++) { mx += D.truth[3 * i] / n; my += D.truth[3 * i + 1] / n; z0 = Math.min(z0, D.truth[3 * i + 2]); }
      for (let i = 0; i < n; i++) { const dx = D.truth[3 * i] - mx, dy = D.truth[3 * i + 1] - my; sxx += dx * dx; syy += dy * dy; sxy += dx * dy; }
      const ang = -0.5 * Math.atan2(2 * sxy, sxx - syy), c0 = Math.cos(ang), s0 = Math.sin(ang);
      const turn = a => { const o = new Float32Array(a.length); for (let i = 0; i < n; i++) { const dx = (a[3 * i] - mx) / 100, dy = (a[3 * i + 1] - my) / 100; o[3 * i] = dx * c0 - dy * s0; o[3 * i + 1] = dx * s0 + dy * c0; o[3 * i + 2] = (a[3 * i + 2] - z0) / 100; } return o; };
      const T = turn(D.truth), E = Object.fromEntries(TEAMS.map(t => [t.id, turn(D.est[t.id])]));
      // extent on the ground and in the projection (truth, its shadow and all nine estimates: the frame never changes)
      let gx0 = Infinity, gx1 = -Infinity, gy0 = Infinity, gy1 = -Infinity, bx0 = Infinity, bx1 = -Infinity, by0 = Infinity, by1 = -Infinity, zmax = 0;
      const see = (A, ground) => { for (let i = 0; i < n; i++) { const q = prj(A[3 * i], A[3 * i + 1], ground ? 0 : A[3 * i + 2]); bx0 = Math.min(bx0, q[0]); bx1 = Math.max(bx1, q[0]); by0 = Math.min(by0, q[1]); by1 = Math.max(by1, q[1]); gx0 = Math.min(gx0, A[3 * i]); gx1 = Math.max(gx1, A[3 * i]); gy0 = Math.min(gy0, A[3 * i + 1]); gy1 = Math.max(gy1, A[3 * i + 1]); } };
      see(T); see(T, true); Object.values(E).forEach(A => see(A));
      for (let i = 0; i < n; i++) zmax = Math.max(zmax, T[3 * i + 2]);
      const fig = document.createElement("figure");
      fig.className = "pp"; fig.style.setProperty("--c", PTXT[p]);
      fig.innerHTML = `<canvas role="img" aria-label="${PNAME[p]}: true path and estimated paths of a test recording"></canvas><span class="pp-name">${PNAME[p]}</span><span class="pp-time"></span><span class="pp-meta">grid ${STEP[p]} m · ${D.seconds} s</span>`;
      grid.appendChild(fig);
      return { p, D, n, T, E, fig, cv: fig.querySelector("canvas"), time: fig.querySelector(".pp-time"), g: [gx0, gx1, gy0, gy1], b: [bx0, bx1, by0, by1], climbs: zmax > 0.08 * Math.max(gx1 - gx0, gy1 - gy0) };
    });

    function layout(P) {
      const W = P.cv.clientWidth, H = P.cv.clientHeight; if (!W || !H) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2), [bx0, bx1, by0, by1] = P.b;
      const padX = 26, top = 50, bot = 40, sc = Math.min((W - 2 * padX) / (bx1 - bx0), (H - top - bot) / (by1 - by0));
      const ox = (W - sc * (bx1 + bx0)) / 2, oy = top + (H - top - bot - sc * (by1 + by0)) / 2;
      P.W = W; P.H = H; P.dpr = dpr;
      P.cv.width = Math.round(W * dpr); P.cv.height = Math.round(H * dpr);
      const to2 = (A, ground) => { const o = new Float32Array(2 * P.n); for (let i = 0; i < P.n; i++) { const q = prj(A[3 * i], A[3 * i + 1], ground ? 0 : A[3 * i + 2]); o[2 * i] = ox + sc * q[0]; o[2 * i + 1] = oy + sc * q[1]; } return o; };
      P.t2 = to2(P.T); P.sh = to2(P.T, true); P.e2 = Object.fromEntries(TEAMS.map(t => [t.id, to2(P.E[t.id])]));
      // the layer drawn once: ground grid, the shadow of the true path, its curtain where it climbs, the whole path faintly
      const st = P.stat = document.createElement("canvas"); st.width = P.cv.width; st.height = P.cv.height;
      const c = st.getContext("2d"); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.lineJoin = c.lineCap = "round";
      const step = STEP[P.p], [gx0, gx1, gy0, gy1] = P.g, G = (x1, y1) => { const q = prj(x1, y1, 0); return [ox + sc * q[0], oy + sc * q[1]]; };
      const a0 = Math.floor(gx0 / step) * step, a1 = Math.ceil(gx1 / step) * step, b0 = Math.floor(gy0 / step) * step, b1 = Math.ceil(gy1 / step) * step;
      c.strokeStyle = "#DDDFEB"; c.lineWidth = 1.1; c.beginPath();
      for (let x = a0; x <= a1 + 1e-6; x += step) { c.moveTo(...G(x, b0)); c.lineTo(...G(x, b1)); }
      for (let y = b0; y <= b1 + 1e-6; y += step) { c.moveTo(...G(a0, y)); c.lineTo(...G(a1, y)); }
      c.stroke();
      const line = (A, col, w) => { c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(A[0], A[1]); for (let i = 1; i < P.n; i++) c.lineTo(A[2 * i], A[2 * i + 1]); c.stroke(); };
      if (P.climbs) { c.fillStyle = "rgba(120, 130, 155, .07)"; for (let i = 1; i < P.n; i++) { c.beginPath(); c.moveTo(P.t2[2 * i - 2], P.t2[2 * i - 1]); c.lineTo(P.t2[2 * i], P.t2[2 * i + 1]); c.lineTo(P.sh[2 * i], P.sh[2 * i + 1]); c.lineTo(P.sh[2 * i - 2], P.sh[2 * i - 1]); c.closePath(); c.fill(); } }
      line(P.sh, "#B9C3DA", 3.2);
      line(P.t2, "rgba(23, 24, 28, .13)", 2.4);
    }

    function draw(P) {
      if (!P.stat) return;
      const c = P.cv.getContext("2d"), n = P.n, f = Math.min(n - 1, u * (n - 1)), i = Math.floor(f), a = f - i;
      c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, P.cv.width, P.cv.height); c.drawImage(P.stat, 0, 0);
      c.setTransform(P.dpr, 0, 0, P.dpr, 0, 0); c.lineJoin = c.lineCap = "round";
      const upTo = A => { c.beginPath(); c.moveTo(A[0], A[1]); for (let j = 1; j <= i; j++) c.lineTo(A[2 * j], A[2 * j + 1]); let x = A[2 * i], y = A[2 * i + 1]; if (i < n - 1) { x += (A[2 * i + 2] - x) * a; y += (A[2 * i + 3] - y) * a; c.lineTo(x, y); } c.stroke(); return [x, y]; };
      const ends = [];
      for (let k = TEAMS.length - 1; k >= 0; k--) {                            // the better teams on top
        const id = TEAMS[k].id; if (!sel.has(id)) continue;
        c.strokeStyle = colOf[id]; c.globalAlpha = hl && hl !== id ? 0.18 : 0.92; c.lineWidth = hl === id ? 3 : 1.9;
        ends.push([id, upTo(P.e2[id])]);
      }
      c.globalAlpha = hl ? 0.55 : 1; c.strokeStyle = "#17181C"; c.lineWidth = 4.2;
      const e = upTo(P.t2);
      c.globalAlpha = 1;
      for (const [id, q] of ends) { if (hl && hl !== id) continue; c.fillStyle = colOf[id]; c.beginPath(); c.arc(q[0], q[1], 3.6, 0, 6.2832); c.fill(); }
      c.fillStyle = "#fff"; c.strokeStyle = "#17181C"; c.lineWidth = 2.2;
      c.beginPath(); c.arc(P.t2[0], P.t2[1], 5, 0, 6.2832); c.fill(); c.stroke();          // where the recording starts
      c.fillStyle = "#17181C"; c.strokeStyle = "#fff"; c.lineWidth = 2;
      c.beginPath(); c.arc(e[0], e[1], 5.6, 0, 6.2832); c.fill(); c.stroke();
      const txt = `${Math.round(f)} s`;
      if (P.time._t !== txt) { P.time.textContent = txt; P.time._t = txt; }
    }
    const drawAll = () => panels.forEach(draw);

    // ---- team chips, sets, play and the slider ----
    const chips = $("pp-teams"), rng = $("pp-time"), playBtn = $("pp-play"), setSeg = $("pp-set");
    const ICON = { pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>', play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>' };
    TEAMS.forEach(t => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "pp-chip"; b.dataset.id = t.id; b.style.setProperty("--c", colOf[t.id]);
      b.innerHTML = `<i></i>${t.name}<small>#${t.irank}</small>`;
      b.title = "Mean velocity error on these segments: " + PLATS.map(p => `${PNAME[p].toLowerCase()} ${S.paths[p].ave[t.id].toFixed(3)}`).join(", ") + " m/s";
      b.addEventListener("click", () => { if (sel.has(t.id)) sel.delete(t.id); else sel.add(t.id); sync(); });
      b.addEventListener("mouseenter", () => { if (sel.has(t.id)) { hl = t.id; drawAll(); } });
      b.addEventListener("mouseleave", () => { if (hl) { hl = null; drawAll(); } });
      chips.appendChild(b);
    });
    function sync() {
      chips.querySelectorAll(".pp-chip").forEach(b => { const on = sel.has(b.dataset.id); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
      const top = TEAMS.slice(0, 5).every(t => sel.has(t.id)) && sel.size === 5;
      setSeg.querySelectorAll("button").forEach(b => b.classList.toggle("on", (b.dataset.v === "top" && top) || (b.dataset.v === "all" && sel.size === TEAMS.length) || (b.dataset.v === "none" && sel.size === 0)));
      if (hl && !sel.has(hl)) hl = null;
      drawAll();
    }
    setSeg.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      sel.clear();
      (b.dataset.v === "top" ? TEAMS.slice(0, 5) : b.dataset.v === "all" ? TEAMS : []).forEach(t => sel.add(t.id));
      sync();
    });
    const label = () => { playBtn.innerHTML = playing ? ICON.pause : ICON.play; playBtn.setAttribute("aria-label", playing ? "Pause" : "Play"); };
    const slide = () => { rng.value = Math.round(u * 1000); rng.style.setProperty("--p", (u * 100).toFixed(1) + "%"); };
    function frame(now) {
      raf = 0;
      if (!playing || !visible || document.hidden) return;
      const dt = Math.min(0.05, last ? (now - last) / 1000 : 0); last = now;
      if (u >= 1) { held += dt; if (held >= HOLD) { held = 0; u = 0; } } else u = Math.min(1, u + dt / PLAY);
      slide(); drawAll();
      raf = requestAnimationFrame(frame);
    }
    const kick = () => { if (!raf && playing && visible && !document.hidden) { last = 0; raf = requestAnimationFrame(frame); } };
    playBtn.addEventListener("click", () => { playing = !playing; if (playing && u >= 1) { u = 0; held = 0; } label(); kick(); });
    rng.addEventListener("input", () => { u = +rng.value / 1000; held = 0; playing = false; label(); slide(); drawAll(); });
    document.addEventListener("visibilitychange", kick);
    const relayout = () => { panels.forEach(layout); drawAll(); };
    if ("IntersectionObserver" in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible && !panels[0].stat) relayout(); kick(); }, { threshold: 0.1 }).observe(grid);
    else { visible = true; relayout(); kick(); }
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(relayout, 150); });
    label(); slide(); sync();
  })();

  // ======================= 3. results: where the error is =======================
  (function results() {
    const s = $("res-chart"); if (!s) return;
    const rows = [...S.teams.map(t => ({ name: t.name, rank: t.irank, score: t.score, share: t.share, plat: t.plat, ci: t.ci, team: true })),
      { name: "Baseline", rank: "", score: S.baseline.score, share: S.baseline.share, plat: S.baseline.plat, ci: null, team: false }];
    const legend = $("res-legend");
    legend.innerHTML = PLATS.map(p => `<span><i class="dot" style="--c:${PCOL[p]}"></i>${PNAME[p]}</span>`).join("");
    let mode = "score";
    function render() {
      clear(s);
      const L = 150, R = 990, top = 40, rowH = 40;
      const y = i => top + i * rowH;
      if (mode === "score") {
        const x = lin(0, 0.6, L, R - 70);
        axisX(s, x, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6], top + rows.length * rowH + 2, v => v.toFixed(1));
        el("text", { x: (L + R - 70) / 2, y: top + rows.length * rowH + 40, "text-anchor": "middle", class: "axis-title" }, s, "Contribution to the TartanIMU Score (lower is better)");
        rows.forEach((r, i) => {
          const yy = y(i);
          el("text", { x: L - 14, y: yy + 19, "text-anchor": "end", class: "lbl", style: r.team ? "" : "font-style:italic;fill:" + MUTED }, s, r.name);
          if (r.rank) el("text", { x: 8, y: yy + 19, class: "lbl-mono", style: "fill:" + MUTED + ";font-size:13.5px" }, s, "#" + r.rank);
          let acc = 0;
          const g = el("g", {}, s);
          PLATS.forEach(p => {
            const v = r.score * r.share[p] / 100;
            const rect = el("rect", { x: x(acc), y: yy + 6, width: Math.max(0, x(acc + v) - x(acc)), height: 22, fill: PCOL[p], rx: 2, opacity: r.team ? 0.9 : 0.45 }, g);
            rect.addEventListener("mousemove", e => showTip(`<b>${r.name}</b> · ${PNAME[p]}<br>adds <span class="t-num">${v.toFixed(3)}</span> (${r.share[p].toFixed(0)}% of ${r.score.toFixed(3)})<br>velocity error <span class="t-num">${fmt(r.plat[p].ave)}</span> m/s · ATE<sub>20</sub> <span class="t-num">${fmt(r.plat[p].ate)}</span> m`, e));
            rect.addEventListener("mouseleave", hideTip);
            acc += v;
          });
          if (r.ci) {
            el("line", { x1: x(r.ci[0]), x2: x(r.ci[1]), y1: yy + 17, y2: yy + 17, stroke: INK, "stroke-width": 1.2 }, s);
            el("line", { x1: x(r.ci[0]), x2: x(r.ci[0]), y1: yy + 12, y2: yy + 22, stroke: INK, "stroke-width": 1.2 }, s);
            el("line", { x1: x(r.ci[1]), x2: x(r.ci[1]), y1: yy + 12, y2: yy + 22, stroke: INK, "stroke-width": 1.2 }, s);
          }
          const xe = r.ci ? Math.max(x(r.score), x(r.ci[1])) : x(r.score);
          el("text", { x: Math.min(xe, R - 70) + 8, y: yy + 21, class: "lbl-mono" }, s, r.score.toFixed(3));
          if (r.team) el("text", { x: x(acc - r.score * r.share.drone / 100) + 6, y: yy + 21, class: "lbl-mono", style: "fill:#1A1A1A;font-size:13.5px" }, s, Math.round(r.share.drone) + "%");
        });
      } else {
        const key = mode, cw = (R - L) / 4;
        PLATS.forEach((p, k) => {
          const x0 = L + k * cw + 10, x1 = L + (k + 1) * cw - 30;
          const max = Math.max(...rows.map(r => r.plat[p][key]));
          const x = lin(0, max * 1.05, x0, x1);
          el("text", { x: x0, y: top - 14, class: "lbl", style: "font-weight:600;fill:" + PTXT[p] }, s, PNAME[p]);
          rows.forEach((r, i) => {
            const v = r.plat[p][key], yy = y(i);
            const rect = el("rect", { x: x0, y: yy + 8, width: x(v) - x0, height: 18, fill: PCOL[p], rx: 2, opacity: r.team ? 0.85 : 0.35 }, s);
            rect.addEventListener("mousemove", e => showTip(`<b>${r.name}</b> · ${PNAME[p]}<br>${key === "ave" ? "velocity error" : "ATE<sub>20</sub>"} <span class="t-num">${v.toFixed(3)}</span> ${key === "ave" ? "m/s" : "m"}`, e));
            rect.addEventListener("mouseleave", hideTip);
            el("text", { x: x(v) + 5, y: yy + 21, class: "lbl-mono", style: "font-size:13.5px" }, s, v.toFixed(key === "ave" && v < 1 ? 3 : 2));
          });
        });
        rows.forEach((r, i) => el("text", { x: L - 14, y: y(i) + 21, "text-anchor": "end", class: "lbl", style: r.team ? "" : "font-style:italic;fill:" + MUTED }, s, r.name));
        el("text", { x: (L + R) / 2, y: top + rows.length * rowH + 26, "text-anchor": "middle", class: "axis-title" }, s,
          key === "ave" ? "Mean velocity error per platform, m/s (each column on its own scale)" : "Trajectory error ATE₂₀ per platform, m (each column on its own scale)");
      }
    }
    seg("res-mode", v => { mode = v; render(); });
    render();
  })();

  // ======================= 5. team cards =======================
  // The ten awarded solutions in the order of the internal ranking (the official scorer on all 89 test recordings).
  (function teams() {
    const box = $("teams"); if (!box) return;
    const EMBN = { modulation: "Modulates features", blend: "Blends heads", none: "No embodiment module" };
    const PHN = { data: "training data", input: "extra inputs", layer: "layer inside", estimator: "estimator after", teacher: "teacher" };
    const ctxText = t => t.context === null ? "whole recording" : t.id === "Marco" ? "60–240 s" : (t.id === "ilytix" ? "up to " : "") + t.context + " s";
    for (const t of S.teams) {
      const d = document.createElement("article");
      d.className = "team";
      const share = PLATS.map(p => `<span style="width:${t.share[p]}%;background:${PCOL[p]}" title="${PNAME[p]} ${t.share[p].toFixed(0)}%"></span>`).join("");
      d.innerHTML = `
        <div class="top"><span class="rank"><b>#${t.irank}</b>internal ranking</span><span class="score" title="Official scorer on all 89 test recordings"><b>${t.score.toFixed(3)}</b><small>full-test score</small></span></div>
        <h3>${t.name}</h3><div class="aff">${t.affil}</div>
        <div class="tags">
          <span><b>Context</b>${ctxText(t)}</span><span><b>Size</b>${Number(t.params).toFixed(1)} M parameters</span>
          <span><b>Embodiment</b>${EMBN[t.emb]}</span><span><b>Physics</b>${t.physics.length ? t.physics.map(k => PHN[k]).join(", ") : "none"}</span>
        </div>
        <div class="foot">
          <div class="bar" aria-label="share of the score by platform">${share}</div>
          <div class="links">${t.report.code ? `<a href="${t.report.code}" target="_blank" rel="noopener">Code &amp; weights</a>` : ""}</div>
        </div>`;
      box.appendChild(d);
    }
  })();

  // ======================= 6. evidence chips =======================
  (function evidence() {
    const map = { context: "ev-context", retiming: "ev-retiming", physics: "ev-physics" };
    for (const e of S.evidence) {
      const box = $(map[e.idea]); if (!box) continue;
      const sp = document.createElement("span");
      sp.innerHTML = `${e.team} ${e.approx ? "≈" + e.before_txt : e.before.toFixed(3)} → <b>${e.after.toFixed(3)}</b> (${e.split})`;
      sp.title = { T: "official full test set", P: "public leaderboard", V: "held-out validation" }[e.split] || "";
      box.appendChild(sp);
    }
    const w = $("ev-windows");
    if (w) w.innerHTML = `<span>ilytix 0.369 → <b>0.340</b> (P)</span><span>ENIO: its largest single gain</span>`;
    // against, and caveats (Table IV of the paper), kept next to the support
    const box2 = { context: "ev-context", retiming: "ev-retiming", windows: "ev-windows", physics: "ev-physics" };
    for (const [idea, list] of Object.entries(S.against || {})) {
      const box = $(box2[idea]); if (!box) continue;
      for (const txt of list) {
        const sp = document.createElement("span");
        sp.className = "con";
        sp.innerHTML = `<i>against</i>${txt}`;
        box.appendChild(sp);
      }
    }
  })();

  // ======================= 7. idea 1: context =======================
  (function context() {
    const s = $("ctx-chart"), rng = $("ctx-range"); if (!s) return;
    const C = S.ideas.context, T = C.seconds;
    const spans = [["whole recording", null, ["SPARO", "CoCEL"]], ["60–240 s", 240, ["Marco"]], ["64 s", 64, ["Haozhe Zhou", "AxisTilted2", "thisray", "ENIO", "ilytix"]], ["40 s", 40, ["Lexxxxx"]], ["16 s", 16, ["Hack2Publish"]]];
    const L = 20, R = 620, x = lin(0, T, L, R), tc = T / 2;
    function render(len) {
      clear(s);
      // signal strip
      const yb = 196, h = 26;
      const top = C.hi.map((v, i) => [x(i * T / C.hi.length), yb - (Math.min(v, 9) + 6) / 15 * h * 2 + h]);
      const bot = C.lo.map((v, i) => [x(i * T / C.lo.length), yb - (Math.max(v, -6) + 6) / 15 * h * 2 + h]).reverse();
      el("path", { d: path(top.concat(bot)) + "Z", fill: "#9DB3D3", opacity: 0.8 }, s);
      // the selected context window
      const half = len === null ? T / 2 : Math.min(len, T) / 2;
      el("rect", { x: x(tc - half), y: 14, width: x(tc + half) - x(tc - half), height: 206, fill: PLUM, opacity: 0.07, rx: 6 }, s);
      el("line", { x1: x(tc), x2: x(tc), y1: 18, y2: 216, stroke: PLUM, "stroke-width": 1.4 }, s);
      el("text", { x: x(tc) + 6, y: 226, class: "lbl-mono", style: "font-size:14.5px;fill:" + PLUM }, s, "one window, 1 s");
      // spans of the solutions
      spans.forEach(([lab, sec, teams], k) => {
        const yy = 34 + k * 30;
        const on = len === null ? sec === null : (sec === null || sec >= len);
        const w = sec === null ? T / 2 : sec / 2;
        const col = on ? PLUM : "#CFC8BA";
        el("line", { x1: x(Math.max(0, tc - w)), x2: x(Math.min(T, tc + w)), y1: yy, y2: yy, stroke: col, "stroke-width": on ? 3 : 2, "stroke-linecap": "round" }, s);
        el("text", { x: x(tc) + 8, y: yy - 6, class: "lbl", style: `font-size:15px;fill:${on ? INK : "#A39C8E"}` }, s, `${lab}: ${teams.join(", ")}`);
      });
    }
    const steps = [1, 2, 4, 8, 16, 24, 32, 40, 48, 64, 96, 128, 160, 200, 240, null];
    function update() {
      const v = +rng.value, k = Math.round(v / 100 * (steps.length - 1)), len = steps[k];
      rng.style.setProperty("--p", v + "%");
      $("ctx-read").textContent = len === null ? "whole recording" : len + " s";
      render(len);
    }
    rng.addEventListener("input", update);
    const start = Math.round(9 / (steps.length - 1) * 100);
    rng.value = start; update();
    autoSweep(rng, [start, 0, 100, start], 7000);
  })();

  // ======================= 8. idea 2: re-timing =======================
  (function retiming() {
    const s = $("rt-chart"), rng = $("rt-range"); if (!s) return;
    const R = S.ideas.replay;
    const t = R.t, wz = R.wz, sp = R.sp;
    function panel(x0, w, series, yl, ylab) {
      const x = lin(0, 3, x0, x0 + w), y = lin(yl[0], yl[1], 200, 22);
      axisY(s, y, yl[2], x0, x0 + w, v => v);
      axisX(s, x, [0, 1, 2, 3], 200, v => v);
      el("text", { x: x0 + w / 2, y: 238, "text-anchor": "middle", class: "axis-title" }, s, "time (s)");
      el("text", { x: x0, y: 12, class: "axis-title" }, s, ylab);
      for (const [pts, col, wdt] of series) el("path", { d: path(pts.filter(p => p[0] <= 3).map(p => [x(p[0]), y(Math.max(yl[0], Math.min(yl[1], p[1])))])), fill: "none", stroke: col, "stroke-width": wdt, "stroke-linejoin": "round" }, s);
    }
    function render(r) {
      clear(s);
      const sm = a => a.map((_, i) => { let s0 = 0, c = 0; for (let k = Math.max(0, i - 4); k <= Math.min(a.length - 1, i + 4); k++) { s0 += a[k]; c++; } return s0 / c; });
      const wzs = sm(wz), sps = sm(sp);
      const rec1 = t.map((v, i) => [v, wzs[i]]), rep1 = t.map((v, i) => [v / r, r * wzs[i]]);
      const rec2 = t.map((v, i) => [v, sps[i]]), rep2 = t.map((v, i) => [v / r, r * sps[i]]);
      const nice = m => { const st = m <= 6 ? 2 : m <= 12 ? 3 : m <= 16 ? 4 : 5; const top = Math.ceil(m / st) * st; const tk = []; for (let v = 0; v <= top; v += st) tk.push(v); return [top, tk]; };
      const [wmax, wt] = nice(Math.max(...wzs) * 1.8), [smax, st] = nice(Math.max(...sps) * 1.8);
      panel(52, 240, [[rec1, NAVY, 1.4], [rep1, "#D1603D", 2]], [0, wmax, wt], "yaw rate (rad/s)");
      panel(372, 240, [[rec2, NAVY, 1.4], [rep2, "#D1603D", 2]], [0, smax, st], "speed label (m/s)");
      $("rt-read").textContent = r.toFixed(2) + "×";
      $("rt-speed").innerHTML = `mean speed ${R.speed.toFixed(1)} → <b>${(R.speed * r).toFixed(1)}</b> m/s · angular rate ×${r.toFixed(2)} · motion acceleration ×${(r * r).toFixed(2)} · gravity, bias unchanged`;
      rng.style.setProperty("--p", ((r - 0.67) / (1.8 - 0.67) * 100) + "%");
    }
    rng.addEventListener("input", () => render(+rng.value));
    render(+rng.value);
    autoSweep(rng, [1.5, 0.67, 1.8, 1.5], 7000);
  })();

  // ======================= 9. idea 3: rotor drag =======================
  (function drag() {
    const s = $("drag-chart"); if (!s) return;
    const D = S.ideas.drag, COLS = ["#B04A2A", "#2F5D96"];
    function render(ax) {
      clear(s);
      const vs = D.flatMap(d => d["v" + ax]), fs = D.flatMap(d => d["f" + ax]);
      const vx0 = Math.floor(Math.min(...vs)), vx1 = Math.ceil(Math.max(...vs)), fy0 = Math.floor(Math.min(...fs)), fy1 = Math.ceil(Math.max(...fs));
      const x = lin(vx0, vx1, 60, 440), y = lin(fy0, fy1, 220, 18);
      const tx = []; for (let v = Math.ceil(vx0 / 2) * 2; v <= vx1; v += 2) tx.push(v);
      const ty = []; for (let v = fy0; v <= fy1; v += 1) ty.push(v);
      axisY(s, y, ty, 60, 440, v => v);
      axisX(s, x, tx, 222, v => v);
      el("text", { x: 250, y: 252, "text-anchor": "middle", class: "axis-title" }, s, `velocity v${ax === "x" ? "ₓ" : "ᵧ"} (m/s)`);
      el("text", { x: 14, y: 12, class: "axis-title" }, s, `specific force f${ax === "x" ? "ₓ" : "ᵧ"} (m/s²)`);
      D.forEach((d, k) => {
        const v = d["v" + ax], f = d["f" + ax], fit = d.fit[ax];
        v.forEach((vv, i) => {
          const c = el("circle", { cx: x(vv), cy: y(f[i]), r: 3.2, fill: COLS[k], opacity: 0.75, stroke: "#fff", "stroke-width": 0.6 }, s);
          c.addEventListener("mousemove", e => showTip(`flight ${k + 1}<br>v = <span class="t-num">${vv.toFixed(2)}</span> m/s, f = <span class="t-num">${f[i].toFixed(2)}</span> m/s²`, e));
          c.addEventListener("mouseleave", hideTip);
        });
        const a = Math.min(...v), b = Math.max(...v);
        el("line", { x1: x(a), x2: x(b), y1: y(-fit.k * a + fit.intercept), y2: y(-fit.k * b + fit.intercept), stroke: COLS[k], "stroke-width": 2 }, s);
        el("text", { x: 462, y: 40 + k * 46, class: "lbl", style: `fill:${COLS[k]};font-weight:600` }, s, `flight ${k + 1}`);
        el("text", { x: 462, y: 58 + k * 46, class: "lbl-mono", style: `fill:${COLS[k]}` }, s, `c = ${fit.k.toFixed(2)} s⁻¹, R² = ${fit.r2.toFixed(2)}`);
      });
      el("text", { x: 462, y: 150, class: "lbl", style: "fill:" + MUTED + ";font-size:13.5px" }, s, "Fitted once per recording,");
      el("text", { x: 462, y: 167, class: "lbl", style: "fill:" + MUTED + ";font-size:13.5px" }, s, "like bias and mounting,");
      el("text", { x: 462, y: 184, class: "lbl", style: "fill:" + MUTED + ";font-size:13.5px" }, s, "it turns force into speed:");
      el("text", { x: 462, y: 204, class: "lbl-mono" }, s, "v = −f / c");
    }
    seg("drag-axis", render);
    render("x");
  })();

  // ======================= 10. idea 4: shifting windows =======================
  (function windows() {
    const s = $("win-chart"); if (!s) return;
    const sn = S.snippets.human.acc.map(v => Math.hypot(v[0], v[1], v[2]));
    const m = sn.reduce((a, b) => a + b, 0) / sn.length;
    const x = lin(0, sn.length - 1, 20, 620);
    el("path", { d: path(sn.map((v, i) => [x(i), 92 - (v - m) * 6])), fill: "none", stroke: PCOL.human, "stroke-width": 1.4 }, s);
    const sec = (620 - 20) / 5;
    for (let k = 0; k < 5; k++) el("rect", { x: 20 + k * sec + 1, y: 40, width: sec - 2, height: 104, fill: "none", stroke: "#BDB6A7", "stroke-width": 1.2, rx: 4, "stroke-dasharray": "4 3" }, s);
    const g = el("g", {}, s);
    const lab = el("text", { x: 20, y: 180, class: "lbl-mono", style: "font-size:13.5px" }, s, "");
    let n = 0, timer = 0;
    const shifts = [];
    // a new grid every 0.7 s, only while the figure is on screen (no drawing loop)
    function tick() {
      {
        n++;
        const off = Math.random() * sec;
        shifts.push(off); if (shifts.length > 4) shifts.shift();
        clear(g);
        shifts.forEach((o, j) => {
          const op = 0.25 + 0.75 * (j + 1) / shifts.length;
          for (let k = -1; k < 5; k++) {
            const x0 = 20 + o + k * sec; if (x0 + sec < 22 || x0 > 618) continue;
            el("rect", { x: Math.max(20, x0) + 1, y: 40 + j * 3, width: Math.min(620, x0 + sec) - Math.max(20, x0) - 2, height: 104 - j * 6, fill: "none", stroke: PLUM, "stroke-width": 1.3, rx: 4, opacity: op }, g);
          }
        });
        lab.textContent = `grids drawn: ${n} · any sample can start a window: about 200× more`;
      }
    }
    lab.textContent = "official grid: one window per second";
    if (!reduce && "IntersectionObserver" in window) new IntersectionObserver(es => {
      const on = es[0].isIntersecting && !document.hidden;
      if (on && !timer) timer = setInterval(tick, 700);
      else if (!on && timer) { clearInterval(timer); timer = 0; }
    }, { threshold: 0.25 }).observe(s);
  })();

  // ======================= 11. the fast flight =======================
  (function fast() {
    const s = $("fast-chart"); if (!s) return;
    const F = S.fast, sec = F.second, n = sec.length;
    const L = 56, R = 680, x = lin(1, sec[n - 1], L, R), y = lin(0, 17, 290, 16);
    const styles = { thisray: [PLUM, 2.4, ""], SPARO: [LILAC, 2.4, ""], CoCEL: ["#1F8A8A", 2.2, "6 4"] };
    const others = Object.keys(F.teams).filter(k => !(k in styles));
    let tNow = sec[n - 1];
    function render() {
      clear(s);
      axisY(s, y, [0, 4, 8, 12, 16], L, R, v => v);
      axisX(s, x, sec.filter(v => v % 2 === 1), 292, v => v);
      el("text", { x: (L + R) / 2, y: 326, "text-anchor": "middle", class: "axis-title" }, s, "time into the flight (s)");
      el("text", { x: 8, y: 10, class: "axis-title" }, s, "speed (m/s)");
      el("line", { x1: L, x2: R, y1: y(11), y2: y(11), stroke: "#C9A25B", "stroke-dasharray": "5 4", "stroke-width": 1.2 }, s);
      el("text", { x: L + 6, y: y(11) - 6, class: "lbl", style: "font-size:15px;fill:#A0782F" }, s, "fastest labelled aerial window, about 11 m/s");
      const cut = v => v <= tNow + 1e-9;
      const line = (arr, col, w, dash, op) => {
        const pts = sec.map((t, i) => [x(t), y(arr[i])]).filter((_, i) => cut(sec[i]));
        if (pts.length > 1) el("path", { d: path(pts), fill: "none", stroke: col, "stroke-width": w, "stroke-dasharray": dash || "", opacity: op || 1, "stroke-linejoin": "round", "stroke-linecap": "round" }, s);
      };
      others.forEach(k => line(F.teams[k], "#7F9CC5", 1.3, "", 0.85));
      Object.entries(styles).forEach(([k, [c, w, d]]) => line(F.teams[k], c, w, d));
      line(F.truth, INK, 3);
      const i = sec.findIndex(t => t >= tNow);
      if (i >= 0) {
        el("line", { x1: x(sec[i]), x2: x(sec[i]), y1: 16, y2: 290, stroke: INK, opacity: 0.18 }, s);
        el("circle", { cx: x(sec[i]), cy: y(F.truth[i]), r: 4.5, fill: INK }, s);
        const sp = $("speedo");
        const net = others.map(k => F.teams[k][i]); const netm = net.reduce((a, b) => a + b, 0) / net.length;
        sp.innerHTML = [["true speed", F.truth[i], INK], ["thisray (physics)", F.teams.thisray[i], PLUM], ["CoCEL (scaled data)", F.teams.CoCEL[i], "#1F8A8A"], ["six networks, mean", netm, "#5C7BAA"]]
          .map(([k, v, c]) => `<div><div class="k">${k}</div><div class="v" style="color:${c}">${v.toFixed(1)} <small style="font-size:14.5px;color:${MUTED}">m/s</small></div></div>`).join("");
        $("fast-t").textContent = "t = " + sec[i] + " s";
      }
    }
    render();
    const btn = $("fast-play");
    let playing = false;
    if (!reduce && "IntersectionObserver" in window) new IntersectionObserver(es => { if (es[0].isIntersecting) btn.click(); }, { threshold: 0.5 }).observe(s);
    btn.addEventListener("click", () => {
      if (playing) return;
      playing = true; btn.querySelector("span").textContent = "Replaying…";
      const t0 = performance.now(), dur = reduce ? 1 : 7000;
      const step = now => {
        const u = Math.min(1, (now - t0) / dur);
        tNow = 1 + u * (sec[n - 1] - 1); render();
        if (u < 1) requestAnimationFrame(step); else { playing = false; btn.querySelector("span").textContent = "Replay the flight"; }
      };
      tNow = 1; requestAnimationFrame(step);
    });
    // predicted against true speed over all aerial windows
    const b = $("bins-chart"), B = F.bins;
    const xb = lin(0, 16, 50, 400), yb = lin(0, 16, 290, 30);
    axisY(b, yb, [0, 4, 8, 12, 16], 50, 400, v => v);
    axisX(b, xb, [0, 4, 8, 12, 16], 292, v => v);
    el("text", { x: 225, y: 326, "text-anchor": "middle", class: "axis-title" }, b, "true speed of an aerial window (m/s)");
    el("text", { x: 50, y: 12, class: "axis-title" }, b, "mean predicted speed (m/s)");
    el("line", { x1: xb(0), y1: yb(0), x2: xb(16), y2: yb(16), stroke: INK, "stroke-dasharray": "2 4", "stroke-width": 1.2 }, b);
    const bl = (arr, col, w, dash) => el("path", { d: path(B.truth.map((t, i) => [xb(t), yb(arr[i])])), fill: "none", stroke: col, "stroke-width": w, "stroke-dasharray": dash || "" }, b);
    others.forEach(k => bl(B.pred[k], "#7F9CC5", 1.2));
    bl(B.pred.CoCEL, "#1F8A8A", 2, "6 4"); bl(B.pred.SPARO, LILAC, 2.2); bl(B.pred.thisray, PLUM, 2.4);
    el("text", { x: xb(11.2), y: yb(12.6), class: "lbl", style: "font-size:15px;fill:" + MUTED, transform: `rotate(-41 ${xb(11.2)} ${yb(12.6)})` }, b, "perfect");
  })();

  // ======================= 12. controlled experiments =======================
  // Five panels drawn with one frame and one set of marks, in the style of the paper's figure: a symbol is the mean of
  // three seeds, a band or bar spans the seeds, small marks are the seeds themselves. Coordinates of axes and guides are
  // rounded to half pixels so that every straight line is sharp.
  (function controlled() {
    const C = S.controlled;
    if (!$("cx-context")) return;
    const BLUE = "#3F6EA8", ORANGE = "#D1603D", TEAL = "#1F8A8A", SLATE = "#5F6B7D";
    const R = v => Math.round(v) + 0.5;
    const X0 = 60, X1 = 344, Y0 = 222, Y1 = 16;                                  // the plot area of a square panel
    const f3 = v => v.toFixed(3);
    function frame(s, o) {
      const g = el("g", {}, s), x0 = o.X0 === undefined ? X0 : o.X0, x1 = o.X1 === undefined ? X1 : o.X1;
      o.yt.forEach(v => {
        const yy = R(o.y(v));
        el("line", { x1: x0, x2: x1, y1: yy, y2: yy, class: "cx-g" }, g);
        el("line", { x1: x0 - 5, x2: x0, y1: yy, y2: yy, class: "cx-tick" }, g);
        el("text", { x: x0 - 9, y: yy + 4.5, "text-anchor": "end", class: "cx-num" }, g, o.yf(v));
      });
      (o.xt || []).forEach(v => {
        const xx = R(o.x(v));
        el("line", { x1: xx, x2: xx, y1: Y0, y2: Y0 + 5, class: "cx-tick" }, g);
        el("text", { x: xx, y: Y0 + 22, "text-anchor": "middle", class: "cx-num" }, g, o.xf(v));
      });
      el("path", { d: `M${R(x0)},${Y1}V${R(Y0)}H${x1}`, class: "cx-spine" }, g);
      if (o.xl) el("text", { x: (x0 + x1) / 2, y: Y0 + 48, "text-anchor": "middle", class: "cx-lab" }, g, o.xl);
      if (o.yl) el("text", { x: 15, y: (Y0 + Y1) / 2, "text-anchor": "middle", class: "cx-lab", transform: `rotate(-90 15 ${(Y0 + Y1) / 2})` }, g, o.yl);
    }
    function mark(s, shape, x, y, r, col, tip) {
      const e = shape === "sq" ? el("rect", { x: x - r * 0.9, y: y - r * 0.9, width: r * 1.8, height: r * 1.8, rx: 1 }, s)
        : shape === "tri" ? el("path", { d: `M${x},${y - r * 1.25}L${x + r * 1.15},${y + r * 0.8}H${x - r * 1.15}Z` }, s)
        : shape === "dia" ? el("path", { d: `M${x},${y - r * 1.3}L${x + r * 1.3},${y}L${x},${y + r * 1.3}L${x - r * 1.3},${y}Z` }, s)
        : el("circle", { cx: x, cy: y, r }, s);
      e.setAttribute("fill", col); e.setAttribute("class", "cx-mark");
      if (tip) { e.addEventListener("mousemove", ev => showTip(tip, ev)); e.addEventListener("mouseleave", hideTip); }
      return e;
    }
    function series(s, pts, x, y, col, o) {                                      // pts: [{v, m, seeds, tip}]
      o = o || {};
      if (pts.every(q => q.seeds)) el("path", { d: path(pts.map(q => [x(q.v), y(Math.min(...q.seeds))]).concat(pts.slice().reverse().map(q => [x(q.v), y(Math.max(...q.seeds))]))) + "Z", fill: col, opacity: 0.14 }, s);
      el("path", { d: path(pts.map(q => [x(q.v), y(q.m)])), fill: "none", stroke: col, "stroke-width": 2.4, "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-dasharray": o.dash || null }, s);
      pts.forEach(q => (q.seeds || []).forEach(v => el("circle", { cx: x(q.v), cy: y(v), r: 2, fill: col, opacity: 0.6 }, s)));
      pts.forEach(q => mark(s, o.shape, x(q.v), y(q.m), 5.2, col, q.tip));
    }
    const key = (s, x, y, shape, col, txt, dash) => {
      el("line", { x1: x, x2: x + 26, y1: R(y), y2: R(y), stroke: col, "stroke-width": 2.4, "stroke-dasharray": dash || null }, s);
      mark(s, shape, x + 13, R(y), 4.6, col);
      el("text", { x: x + 34, y: y + 5, class: "cx-key" }, s, txt);
    };
    const val = (s, x, y, txt, col, anchor) => el("text", { x, y, "text-anchor": anchor || "middle", class: "cx-val", fill: col }, s, txt);
    const run = (name, c) => ({ m: c.score, seeds: c.seeds, tip: `<b>${name}</b><br>score <span class="t-num">${f3(c.score)}</span><br>seeds ${c.seeds.map(f3).join(", ")}` });
    const zero = (s, y, x0, x1, txt) => {
      el("line", { x1: x0, x2: x1, y1: R(y), y2: R(y), class: "cx-zero" }, s);
      el("text", { x: x0 + 8, y: R(y) - 7, class: "cx-note" }, s, txt);
    };

    // (a) how much of the recording the model reads
    (function () {
      const s = $("cx-context"), x = logs(1, 64, X0 + 22, X1 - 22), y = lin(0.36, 0.54, Y0, Y1);
      frame(s, { x, y, xt: [1, 4, 16, 64], yt: [0.40, 0.45, 0.50], xf: v => v, yf: v => v.toFixed(2), xl: "context read by the model (s)", yl: "score" });
      const pts = [[1, "context/context1"], [4, "context/context4"], [16, "context/context16"], [64, "core/shared"]].map(([v, k]) => Object.assign({ v }, run(`${v} s of context`, C[k])));
      series(s, pts, x, y, PLUM);
      pts.forEach(q => val(s, x(q.v), y(Math.max(...q.seeds)) - 11, f3(q.m), PLUM));
    })();

    // (b) data or capacity
    (function () {
      const s = $("cx-data"), x = logs(25, 100, X0 + 22, X1 - 22), y = lin(0.40, 0.64, Y0, Y1);
      frame(s, { x, y, xt: [25, 50, 100], yt: [0.45, 0.50, 0.55, 0.60], xf: v => v + "%", yf: v => v.toFixed(2), xl: "share of the training recordings", yl: "score" });
      const small = [[25, "datascale/data25"], [50, "datascale/data50"], [100, "core/shared"]].map(([v, k]) => Object.assign({ v }, run(`0.86 M parameters, ${v}% of the data`, C[k])));
      const large = [[50, "large/large50"], [100, "large/large100"]].map(([v, k]) => Object.assign({ v }, run(`8.7 M parameters, ${v}% of the data`, C[k])));
      series(s, large, x, y, TEAL, { shape: "tri", dash: "7 5" });
      series(s, small, x, y, PLUM);
      key(s, X1 - 166, Y1 + 10, "", PLUM, "0.86 M parameters");
      key(s, X1 - 166, Y1 + 32, "tri", TEAL, "8.7 M parameters", "7 5");
      val(s, x(25) + 4, y(Math.max(...small[0].seeds)) - 11, f3(small[0].m), PLUM);
      val(s, x(100), y(Math.min(...small[2].seeds)) + 20, f3(small[2].m), PLUM);
      val(s, x(100), y(Math.max(...large[1].seeds)) - 11, f3(large[1].m), TEAL);
    })();

    // (c) a turned sensor
    (function () {
      const s = $("cx-rot"), ang = [0, 10, 20, 45, 90], x = lin(0, 90, X0 + 14, X1 - 14), y = lin(0.3, 1.1, Y0, Y1);
      frame(s, { x, y, xt: ang, yt: [0.4, 0.6, 0.8, 1.0], xf: v => v + "°", yf: v => v.toFixed(1), xl: "sensor turned at test, about a random axis", yl: "score" });
      zero(s, y(1), X0, X1, "predicting zero velocity");
      const rec = C.rotation.shared, aug = C.rotation.rotaug, pc = (r, a) => Math.round(100 * (r[a] / r[0] - 1));
      const pts = (r, name) => ang.map(a => ({ v: a, m: r[a], tip: `<b>${name}</b><br>turned by ${a}°: score <span class="t-num">${f3(r[a])}</span>` + (a ? ` (+${pc(r, a)}%)` : "") }));
      series(s, pts(aug, "Trained with random rotations up to 45°"), x, y, ORANGE, { shape: "tri", dash: "7 5" });
      series(s, pts(rec, "Trained on the data as recorded"), x, y, BLUE, { shape: "sq" });
      val(s, x(20) + 11, y(rec[20]) + 16, `+${pc(rec, 20)}%`, BLUE, "start");
      val(s, x(20), y(aug[20]) + 21, `+${pc(aug, 20)}%`, ORANGE);
      val(s, X1 - 2, y(0.83), "trained as recorded", BLUE, "end");
      val(s, X1 - 2, y(0.345), "random rotations in training", ORANGE, "end");
      $("cx-rot-sub").textContent = `Trained on the data as recorded, a 20° turn raises the score by ${pc(rec, 20)}%. With random rotations of up to 45° in training, by ${pc(aug, 20)}%.`;
    })();

    // (d) a platform never seen: velocity error relative to predicting zero velocity
    (function () {
      const s = $("cx-lopo"), y = logs(0.15, 30, Y0, Y1), z = C.zero_ave, cw = (X1 - X0) / 4;
      frame(s, { y, yt: [0.3, 1, 3, 10], yf: v => v + "×", yl: "velocity error ÷ zero velocity" });
      zero(s, y(1), X0, X1, "");
      const kinds = [["trained", "in training", PLUM, ""], ["left_out", "left out", ORANGE, "tri"], ["fewshot", "five minutes of its data", BLUE, "sq"]];
      PLATS.forEach((p, k) => {
        const cx = X0 + (k + 0.5) * cw;
        if (k) el("line", { x1: R(X0 + k * cw), x2: R(X0 + k * cw), y1: Y1, y2: Y0, class: "cx-g" }, s);
        el("text", { x: cx, y: Y0 + 22, "text-anchor": "middle", class: "cx-val", fill: PTXT[p] }, s, PNAME[p]);
        kinds.forEach(([kk, lab, col, shape], j) => {
          const xx = R(cx + (j - 1) * 19), m = C.lopo[p][kk] / z[p], sd = C.lopo[p].seeds[kk].map(v => v / z[p]), lo = Math.min(...sd), hi = Math.max(...sd);
          el("line", { x1: xx, x2: xx, y1: y(lo), y2: y(hi), stroke: col, "stroke-width": 2.4, "stroke-linecap": "round", opacity: 0.45 }, s);
          sd.forEach(v => el("line", { x1: xx - 4, x2: xx + 4, y1: y(v), y2: y(v), stroke: col, "stroke-width": 1.4 }, s));
          mark(s, shape, xx, y(m), 5.2, col, `<b>${PNAME[p]}</b> · ${lab}<br>${C.lopo[p][kk].toFixed(3)} m/s, <span class="t-num">${m.toFixed(2)}×</span> the error of zero velocity<br>seeds ${sd.map(v => v.toFixed(2) + "×").join(", ")}`);
          if (hi / lo > 2) val(s, xx + 9, y(hi) + 5, `${lo.toFixed(1)} to ${Math.round(hi)}×`, col, "start");
        });
      });
      let kx = 22;                                                              // the key, in one row under the platforms
      kinds.forEach(([, lab, col, shape]) => {
        mark(s, shape, kx + 5, R(Y0 + 43), 4.6, col);
        const t = el("text", { x: kx + 16, y: Y0 + 48, class: "cx-key" }, s, lab);
        kx += 16 + (t.getComputedTextLength ? t.getComputedTextLength() : lab.length * 6.6) + 18;
      });
    })();

    // (e) one shared model or four specialists, under two training recipes
    (function () {
      const s = $("cx-spec"), L = 232, Rr = 610, YA = 230, x = lin(0.26, 0.46, L, Rr);
      const groups = [["Recipe A", [["shared model", "core/shared"], ["told the platform", "core/label"], ["inputs normalized per platform", "platnorm/platnorm"], ["four specialists", "special/special_all"]]],
        ["Recipe B: more examples drawn from the same data", [["shared model", "recipeB1/shared"], ["told the platform", "recipeB1/label"], ["four specialists", "recipeB2/special_all"]]]];
      [0.30, 0.35, 0.40, 0.45].forEach(v => {
        el("line", { x1: R(x(v)), x2: R(x(v)), y1: 6, y2: YA, class: "cx-g" }, s);
        el("line", { x1: R(x(v)), x2: R(x(v)), y1: YA, y2: YA + 5, class: "cx-tick" }, s);
        el("text", { x: R(x(v)), y: YA + 22, "text-anchor": "middle", class: "cx-num" }, s, v.toFixed(2));
      });
      el("line", { x1: L, x2: Rr, y1: R(YA), y2: R(YA), class: "cx-spine" }, s);
      el("text", { x: (L + Rr) / 2, y: YA + 46, "text-anchor": "middle", class: "cx-lab" }, s, "score");
      let yy = 18;
      groups.forEach(([title, rows]) => {
        el("text", { x: 4, y: yy, class: "cx-group" }, s, title);
        const base = C[rows[0][1]].score;
        el("line", { x1: R(x(base)), x2: R(x(base)), y1: yy + 8, y2: yy + 10 + rows.length * 23, stroke: SLATE, "stroke-width": 1.2, "stroke-dasharray": "3 3", "shape-rendering": "crispEdges" }, s);
        yy += 24;
        rows.forEach(([lab, k]) => {
          const c = C[k], spec = k.includes("special"), col = spec ? PLUM : SLATE, lo = Math.min(...c.seeds), hi = Math.max(...c.seeds), ry = R(yy - 5);
          el("text", { x: L - 14, y: yy, "text-anchor": "end", class: spec ? "cx-row on" : "cx-row" }, s, lab);
          el("rect", { x: x(lo) - 4, y: ry - 4, width: x(hi) - x(lo) + 8, height: 8, rx: 4, fill: col, opacity: 0.22 }, s);
          c.seeds.forEach(v => el("circle", { cx: x(v), cy: ry, r: 2.6, fill: "#fff", stroke: col, "stroke-width": 1.4 }, s));
          mark(s, "dia", x(c.score), ry, 5, col, run(lab, c).tip);
          val(s, Rr + 22, yy, f3(c.score), col, "start");
          if (spec) val(s, Rr + 70, yy, `−${Math.round(100 * (1 - c.score / base))}%`, col, "start");
          yy += 23;
        });
        yy += 12;
      });
    })();
  })();
})();
