---
title: SuperMap
subtitle: "Open-Vocabulary 3D Semantic Mapping"
layout: page
show_sidebar: false
hide_footer: false
hero_height: is-large
hero_image: /img/place_holder_01.png
mathjax: false
---

<script>
    window.onload = function () {
        let p = document.getElementsByClassName("title is-2")[0].parentElement;
        p.style.background = "rgba(10, 10, 10, 0.7)";
        p.style.borderRadius = "12px";
        p.style.padding = "25px";
        p.style.width = "fit-content";
        p.style.margin = "0px";
        p.style.backdropFilter = "blur(5px)";
    }

    let p = document.getElementsByClassName("title is-2")[0].parentElement;
    p.style.background = "rgba(10, 10, 10, 0.7)";
    p.style.borderRadius = "12px";
    p.style.padding = "25px";
    p.style.width = "fit-content";
    p.style.margin = "0px";
    p.style.backdropFilter = "blur(5px)";
</script>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuperMap</title>
    <style>
        body, html {
            background-color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .hero.is-light {
            background-color: white;
        }

        .centered-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .centered-content h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #2c3e50;
            line-height: 1.2;
        }

        .authors {
            font-size: 1.2rem;
            margin-bottom: 10px;
            color: #555;
        }

        .affiliation {
            font-size: 1rem;
            margin-bottom: 25px;
            color: #666;
        }

        .button.is-info {
            background-color: #3498db;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            color: white;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            font-weight: 500;
            transition: all 0.3s ease;
            margin: 5px;
        }

        .button.is-info:hover {
            background-color: #2980b9;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }

        .small-logo, .logo {
            margin-right: 8px;
        }

        .small-logo { width: 18px; height: auto; }
        .logo { width: 24px; height: auto; }

        .centered-title, h1 {
            text-align: center;
            width: 100%;
            font-size: 2.2rem;
            font-weight: 600;
            margin: 40px 0 30px 0;
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
            display: inline-block;
            letter-spacing: 0.5px;
        }

        .about-section, .system-architecture {
            max-width: 1000px;
            margin: 0 auto 40px auto;
            padding: 0 20px;
        }

        .about-section p, .system-architecture p {
            font-size: 1.1rem;
            text-align: justify;
            margin-bottom: 20px;
            color: #555;
            line-height: 1.8;
            letter-spacing: 0.3px;
        }

        .figure-container, .image-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 40px 0;
            width: 100%;
        }

        .figure-container img, .image-container img {
            width: 100%;
            max-width: 900px;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.12);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .figure-container img:hover, .image-container img:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .figure-description, .image-caption {
            margin-top: 20px;
            text-align: center;
            font-style: italic;
            color: #666;
            max-width: 90%;
            font-size: 1.05rem;
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #3498db;
            line-height: 1.6;
        }

        .section-divider {
            width: 80%;
            height: 2px;
            background: linear-gradient(to right, transparent, #3498db, transparent);
            margin: 10px auto;
        }

        .highlight-box {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            border-left: 4px solid #3498db;
        }

        /* Feature Cards */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 25px;
            max-width: 1100px;
            margin: 30px auto;
            padding: 0 20px;
        }

        .feature-card {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 25px;
            border: 1px solid #e9ecef;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .feature-icon {
            font-size: 2rem;
            margin-bottom: 12px;
        }

        .feature-title {
            font-size: 1.15rem;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .feature-desc {
            font-size: 1rem;
            color: #555;
            line-height: 1.6;
        }

        /* Results Table */
        .results-section {
            max-width: 700px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .results-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            margin: 20px 0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .results-table th {
            background: #3498db;
            color: white;
            font-weight: 600;
            padding: 14px;
            text-align: left;
        }

        .results-table td {
            padding: 11px 14px;
            border-bottom: 1px solid #e9ecef;
            color: #555;
        }

        .results-table tr:last-child td { border-bottom: none; }
        .results-table tr:nth-child(even) { background: #f8f9fa; }
        .results-table tr:hover { background: #f1f3f5; }

        /* Citation */
        .citation-section {
            max-width: 1000px;
            margin: 40px auto;
            padding: 25px;
            background-color: #f8f9fa;
            border-radius: 12px;
            border-left: 4px solid #3498db;
        }

        .citation-section h2 {
            color: #2c3e50;
            margin-bottom: 20px;
        }

        .citation-section pre {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            border: 1px solid #e9ecef;
            font-size: 0.95rem;
        }

        /* Pipeline Steps */
        .pipeline-steps {
            max-width: 1000px;
            margin: 30px auto;
            padding: 0 20px;
            counter-reset: step;
        }

        .pipeline-step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 25px;
            background: #f8f9fa;
            border-radius: 12px;
            padding: 20px 25px;
            border: 1px solid #e9ecef;
            transition: transform 0.2s ease;
        }

        .pipeline-step:hover {
            transform: translateX(4px);
        }

        .step-number {
            counter-increment: step;
            min-width: 40px;
            height: 40px;
            background: #3498db;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.1rem;
            margin-right: 20px;
            flex-shrink: 0;
        }

        .step-content h3 {
            margin: 0 0 8px 0;
            font-size: 1.15rem;
            color: #2c3e50;
        }

        .step-content p {
            margin: 0;
            font-size: 1rem;
            color: #555;
            line-height: 1.6;
        }

        @media screen and (max-width: 768px) {
            .centered-content h1 { font-size: 2rem; }
            .authors { font-size: 1rem; }
            .features-grid { grid-template-columns: 1fr; }
            .pipeline-step { flex-direction: column; }
            .step-number { margin-bottom: 12px; }
        }
    </style>
</head>

<body>
    <div class="centered-content">
        <h1>SuperMap: A Spatio-Temporal SLAM System for Visual-Language Navigation</h1>
        <p class="affiliation">
            Carnegie Mellon University — AirLab
        </p>
        <center>
            <a href="https://github.com/gfchen01/semantic_mapping" class="button is-info">
                <i class="fab fa-github" style="font-size:20px; margin-right: 8px;"></i>Code
            </a>
            <a href="#" class="button is-info">
                <img src="/img/logos/arxiv.png" class="small-logo">Paper
            </a>
        </center>
    </div>
</body>
</html>

<div class="section-divider"></div>

<h1 class="centered-title">Abstract</h1>
<div class="about-section">
    <p>Robotic navigation in human environments requires a spatio-temporal semantic representation that can reconcile open-vocabulary perception with long-term environmental changes. While foundation models provide strong zero-shot recognition, their predictions are intermittent and view-dependent, and naively integrating them into mapping pipelines leads to identity drift and stale semantics over time.</p>

    <p>We present <strong>SuperMap</strong>, a 4D spatio-temporal mapping framework for language-guided navigation that integrates high-frequency geometric SLAM with asynchronous open-vocabulary perception. Our core contribution is a <em>consistency-driven mapping engine</em> that combines 3D-aware instance association and re-activation with a principled existence-and-label confidence update to maintain stable object identities and prune outdated map content under occlusions and scene changes.</p>

    <p>SuperMap produces a queryable 4D scene-graph representation that interfaces naturally with Vision-Language Models by supporting compositional queries over object semantics, relations, and history. We demonstrate SuperMap on benchmarks and real robots, including dynamic scenes with appearance/disappearance and relocation, and provide ablations and runtime analysis. We will release the full system as open-source to provide the community with a deployable baseline for open-vocabulary spatio-temporal mapping.</p>
</div>

<div class="section-divider"></div>

<h1 class="centered-title">Contributions</h1>

<div class="features-grid">
    <div class="feature-card">
        <div class="feature-icon">🗺️</div>
        <div class="feature-title">Open-Vocabulary Spatio-Temporal SLAM</div>
        <div class="feature-desc">An online robotic system that builds a persistent, queryable open-vocabulary 4D scene memory suitable for downstream language-conditioned tasks — running fully onboard in real time.</div>
    </div>
    <div class="feature-card">
        <div class="feature-icon">🔄</div>
        <div class="feature-title">Spatio-Temporal Object Tracking</div>
        <div class="feature-desc">An online pipeline that integrates 2D–3D association, validation, and change-aware updates to maintain instance consistency under occlusions, partial observations, label variability, and scene change.</div>
    </div>
    <div class="feature-card">
        <div class="feature-icon">🕸️</div>
        <div class="feature-title">Instance-level Scene Graph</div>
        <div class="feature-desc">A 4D scene graph that seamlessly incorporates spatial and temporal information for each object, equipping robots with instance-level spatio-temporal reasoning — e.g., locating moved objects, recalling past scenes.</div>
    </div>
    <div class="feature-card">
        <div class="feature-icon">📖</div>
        <div class="feature-title">Open-Source Framework</div>
        <div class="feature-desc">Full release of the change-detection benchmark, comprehensive ablations, runtime profiling, and the real-robot visual–language navigation pipeline to facilitate reproducible research.</div>
    </div>
</div>

<div class="section-divider"></div>

<h1 class="centered-title">System Architecture</h1>

<div class="pipeline-steps">
    <div class="pipeline-step">
        <div class="step-number">1</div>
        <div class="step-content">
            <h3>Geometric Layer — Online 3D Reconstruction</h3>
            <p>SuperOdometry provides pose estimation and a colorized dense 3D model from synchronized RGB images, depth/LiDAR, and IMU streams. Geometric priors anchor all subsequent 2D–3D association and global map consistency checks.</p>
        </div>
    </div>
    <div class="pipeline-step">
        <div class="step-number">2</div>
        <div class="step-content">
            <h3>Instance Layer — Spatio-Temporal Instance Association</h3>
            <p>Per-frame open-vocabulary detections (GroundingDINO + SAM2) are associated to existing 3D map objects via a hybrid 2D–3D tracker. A probabilistic geometric consistency update and Bayesian semantic fusion maintain stable object identities across long time horizons under occlusions and scene change.</p>
        </div>
    </div>
    <div class="pipeline-step">
        <div class="step-number">3</div>
        <div class="step-content">
            <h3>Topological Layer — Abstract 4D Scene Graph</h3>
            <p>The object map is abstracted into a scene graph <em>G = (V, E<sub>s</sub>, E<sub>t</sub>)</em> with spatial edges (geometric predicates: on, beside, under) and temporal edges (object trajectory history). The graph is serialized as structured text for compositional VLM queries over object semantics, spatial relations, and temporal history.</p>
        </div>
    </div>
</div>

<div class="section-divider"></div>

<h1 class="centered-title">3D Point Cloud Viewer</h1>

<style>
    .pointcloud-section {
        max-width: 1000px;
        margin: 30px auto;
        padding: 0 20px;
    }
    .pointcloud-wrapper {
        background: #0a0a0f;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        position: relative;
    }
    #pointcloud-canvas {
        width: 100%;
        height: 550px;
        display: block;
        cursor: grab;
    }
    #pointcloud-canvas:active { cursor: grabbing; }
    .pointcloud-controls-hint {
        position: absolute;
        bottom: 14px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.55);
        color: #ccc;
        font-size: 0.85rem;
        padding: 6px 16px;
        border-radius: 20px;
        pointer-events: none;
        white-space: nowrap;
    }
    .pointcloud-toolbar {
        display: flex;
        justify-content: center;
        gap: 10px;
        padding: 14px;
        background: #111;
    }
    .pc-btn {
        background: #1e1e2e;
        color: #aac4e0;
        border: 1px solid #2a3a50;
        border-radius: 8px;
        padding: 7px 18px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s;
    }
    .pc-btn:hover { background: #2a3a50; color: white; }
    #pc-status {
        color: #7a9abb;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        padding: 0 8px;
    }
    .pc-upload-label {
        background: #3498db;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 7px 18px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s;
    }
    .pc-upload-label:hover { background: #2980b9; }
    #pc-file-input { display: none; }
</style>

<div class="pointcloud-section">
    <div class="pointcloud-wrapper">
        <canvas id="pointcloud-canvas"></canvas>
        <div class="pointcloud-controls-hint">Left drag: rotate &nbsp;|&nbsp; Right drag / scroll: zoom &nbsp;|&nbsp; Middle drag: pan</div>
    </div>
    <div class="pointcloud-toolbar">
        <span id="pc-status">Loading…</span>
        <button class="pc-btn" id="pc-reset">Reset view</button>
    </div>
</div>

<p style="text-align:center; font-style:italic; color:#888; font-size:0.95rem; margin-top:10px;">
    CMU campus segment 01 — 3D bounding boxes from SuperMap. Use <strong>Load PLY file</strong> to load a different point cloud.
</p>

<script>
(function () {
    // Minimal Three.js + PLY loader via CDN, loaded on demand
    function loadScript(src, cb) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = cb;
        document.head.appendChild(s);
    }

    var THREE, OrbitControls, PLYLoader;
    var renderer, scene, camera, controls;
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
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;

        window.addEventListener('resize', function () {
            var w = canvas.clientWidth, h = canvas.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        });

        (function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        })();
    }

    document.getElementById('pc-reset').addEventListener('click', function () {
        if (!scene) return;
        var box = new THREE.Box3();
        scene.traverse(function(o) { if (o.isPoints) box.expandByObject(o); });
        var size = new THREE.Vector3(); box.getSize(size);
        var maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(0, maxDim * 0.4, maxDim * 1.1);
        controls.target.set(0, 0, 0);
        controls.update();
    });

    function fetchPLY(url) {
        return fetch(url)
            .then(function(r) {
                if (!r.ok) throw new Error('Could not load ' + url);
                return r.arrayBuffer();
            });
    }

    function addPLY(buffer, opts) {
        opts = opts || {};
        var geometry = PLYLoader.parse(buffer);
        geometry.computeBoundingBox();
        var box = geometry.boundingBox;
        var center = new THREE.Vector3();
        box.getCenter(center);
        if (opts.center) geometry.translate(-center.x, -center.y, -center.z);

        var pos = geometry.attributes.position;

        if (!geometry.attributes.color) {
            var z = [], i;
            for (i = 0; i < pos.count; i++) z.push(pos.getZ(i));
            var zMin = Math.min.apply(null, z), zMax = Math.max.apply(null, z);
            var colors = new Float32Array(pos.count * 3);
            for (i = 0; i < pos.count; i++) {
                var t = (z[i] - zMin) / (zMax - zMin + 1e-6);
                var c = new THREE.Color().setHSL(0.66 - t * 0.66, 1.0, 0.5);
                colors[i*3] = c.r; colors[i*3+1] = c.g; colors[i*3+2] = c.b;
            }
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        }

        var ptSize = opts.ptSize || 0.05;
        var material = new THREE.PointsMaterial({ size: ptSize, vertexColors: true, sizeAttenuation: true });
        var mesh = new THREE.Points(geometry, material);
        if (opts.offset) mesh.position.copy(opts.offset);
        scene.add(mesh);
        return { mesh: mesh, box: box, center: center, pos: pos };
    }

    function autoLoadBoth() {
        status.textContent = 'Loading point cloud…';
        fetchPLY('/img/supermap/segment_01_cloud.ply').then(function(cloudBuf) {
            status.textContent = 'Loading bounding boxes…';
            fetchPLY('/img/supermap/segment_01_bboxes.ply').then(function(bboxBuf) {

                // --- Cloud ---
                var cloudGeo = PLYLoader.parse(cloudBuf);
                cloudGeo.computeBoundingBox();
                var cloudBox = cloudGeo.boundingBox;
                var cloudCenter = new THREE.Vector3();
                cloudBox.getCenter(cloudCenter);
                // Use cloud center as shared world origin for both layers
                cloudGeo.translate(-cloudCenter.x, -cloudCenter.y, -cloudCenter.z);

                var cpos = cloudGeo.attributes.position;
                // White point cloud
                var ccols = new Float32Array(cpos.count * 3);
                for (var i = 0; i < cpos.count; i++) {
                    ccols[i*3] = 1.0; ccols[i*3+1] = 1.0; ccols[i*3+2] = 1.0;
                }
                cloudGeo.setAttribute('color', new THREE.BufferAttribute(ccols, 3));
                var cloudMat = new THREE.PointsMaterial({ size: 0.15, vertexColors: true, sizeAttenuation: true, depthWrite: false });
                var cloudMesh = new THREE.Points(cloudGeo, cloudMat);
                cloudMesh.renderOrder = 0;
                scene.add(cloudMesh);

                // --- Bboxes — apply SAME offset as cloud so they stay aligned ---
                var bboxGeo = PLYLoader.parse(bboxBuf);
                bboxGeo.translate(-cloudCenter.x, -cloudCenter.y, -cloudCenter.z);

                var bpos = bboxGeo.attributes.position;
                // Bright yellow so they stand out against white cloud
                var bcols = new Float32Array(bpos.count * 3);
                for (var j = 0; j < bpos.count; j++) {
                    bcols[j*3] = 1.0; bcols[j*3+1] = 0.85; bcols[j*3+2] = 0.0;
                }
                bboxGeo.setAttribute('color', new THREE.BufferAttribute(bcols, 3));
                var bboxMat = new THREE.PointsMaterial({ size: 0.4, vertexColors: true, sizeAttenuation: true, depthTest: false });
                var bboxMesh = new THREE.Points(bboxGeo, bboxMat);
                bboxMesh.renderOrder = 1;
                scene.add(bboxMesh);

                // Frame camera
                var cloudSize = new THREE.Vector3();
                cloudBox.getSize(cloudSize);
                var maxDim = Math.max(cloudSize.x, cloudSize.y, cloudSize.z);
                camera.position.set(0, maxDim * 0.4, maxDim * 1.1);
                controls.target.set(0, 0, 0);
                controls.update();

                status.textContent = cpos.count.toLocaleString() + ' cloud pts + ' + bpos.count.toLocaleString() + ' bbox pts';
            });
        }).catch(function(err) { status.textContent = 'Error: ' + err.message; });
    }

    // Lazy-load Three.js only when this section is visible
    var observer = new IntersectionObserver(function(entries) {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js', function () {
            THREE = window.THREE;
            loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js', function () {
                OrbitControls = THREE.OrbitControls;
                loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/PLYLoader.js', function () {
                    PLYLoader = new THREE.PLYLoader();
                    initThree();
                    autoLoadBoth();
                });
            });
        });
    }, { threshold: 0.1 });
    observer.observe(canvas);
})();
</script>

<div class="section-divider"></div>

<h1 class="centered-title">Results</h1>

<div class="about-section">
    <p>SuperMap is evaluated on the ScanNet benchmark against state-of-the-art semantic mapping and Semantic SLAM methods, and on real-robot deployments in dynamic indoor environments with object appearance and disappearance events.</p>
</div>

<div style="max-width:900px; margin:0 auto; padding:0 20px;">
    <p style="font-weight:600; color:#2c3e50; font-size:1.1rem; margin-bottom:10px;">Class-level Segmentation on ScanNet</p>
    <table class="results-table">
        <thead>
            <tr>
                <th>Method</th>
                <th>Approach</th>
                <th>mIoU (%)</th>
                <th>f-mIoU (%)</th>
                <th>Acc (%)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>ConceptGraphs</td><td>object-level</td><td>21.62</td><td>24.32</td><td>31.05</td></tr>
            <tr><td>HOV-SG</td><td>object-level</td><td>26.79</td><td>36.05</td><td>35.17</td></tr>
            <tr style="font-weight:600; background:#e3f2fd;"><td>SuperMap (Ours)</td><td>object-level</td><td>27.42</td><td>43.50</td><td>55.48</td></tr>
        </tbody>
    </table>

    <p style="font-weight:600; color:#2c3e50; font-size:1.1rem; margin:30px 0 10px;">Instance-level Segmentation on ScanNet (mAP<sub>50</sub>)</p>
    <table class="results-table">
        <thead>
            <tr>
                <th>Method</th>
                <th>Chair</th>
                <th>Window</th>
                <th>Refrigerator</th>
                <th>Sofa</th>
                <th>Door</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>HOV-SG</td><td>4.58</td><td>0.00</td><td>0.00</td><td>30.00</td><td>9.70</td></tr>
            <tr><td>ConceptGraphs</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr>
            <tr style="font-weight:600; background:#e3f2fd;"><td>SuperMap (Ours)</td><td>63.76</td><td>42.20</td><td>62.50</td><td>33.35</td><td>10.00</td></tr>
        </tbody>
    </table>

    <p style="font-weight:600; color:#2c3e50; font-size:1.1rem; margin:30px 0 10px;">Spatio-Temporal Change Detection Recall</p>
    <table class="results-table">
        <thead>
            <tr>
                <th>Method</th>
                <th>Appeared (Buc.)</th>
                <th>Appeared (Cart)</th>
                <th>Appeared (Sign)</th>
                <th>Disappeared (Plant)</th>
                <th>Disappeared (Trash)</th>
                <th>Disappeared (Chair)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Khronos</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td>DualMap</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.310</td><td>0.000</td><td>0.000</td></tr>
            <tr style="font-weight:600; background:#e3f2fd;"><td>SuperMap (Ours)</td><td>1.000</td><td>0.262</td><td>0.583</td><td>0.755</td><td>0.434</td><td>1.000</td></tr>
        </tbody>
    </table>
</div>

<div class="section-divider"></div>

<h1 class="centered-title">Citation</h1>

<div class="citation-section">
    <h2>BibTeX</h2>
    <pre>
@inproceedings{supermap2026,
  title     = {SuperMap: A Spatio-Temporal SLAM System for Visual-Language Navigation},
  author    = {Anonymous},
  booktitle = {Robotics: Science and Systems (RSS)},
  year      = {2026}
}
    </pre>
</div>

<script>
// Carousel logic (reused from other pages)
(function() {
    var carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(function(container) {
        var carousel = container.querySelector('.carousel');
        var items = carousel ? carousel.querySelectorAll('.item') : [];
        var previews = container.querySelectorAll('.preview-image');
        var current = 0;
        if (!carousel || items.length === 0) return;

        function goTo(idx) {
            current = (idx + items.length) % items.length;
            carousel.style.transform = 'translateX(-' + (current * 100) + '%)';
            previews.forEach(function(p, i) {
                p.classList.toggle('active', i === current);
            });
        }

        previews.forEach(function(p) {
            p.addEventListener('click', function() {
                goTo(parseInt(p.getAttribute('data-index')));
            });
        });
    });
})();
</script>
