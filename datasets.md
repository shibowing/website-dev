---
title: SubT-MRS Dataset
subtitle: Multi-robot, multi-modal SLAM in degraded environments
layout: page
show_sidebar: false
hide_footer: false
menubar_toc: false
hero_height: is-medium
hero_image: /img/datasets/dataset_video_short.gif
---

<style>
html {
  scroll-behavior: smooth;
}

body > .section {
  padding-top: 2.5rem;
}

body .hero .title,
body .hero .subtitle {
  color: #ffffff;
  text-shadow: 0 2px 12px rgba(17, 24, 39, 0.78);
}

.dataset-page {
  --dataset-accent: #b54708;
  --dataset-accent-dark: #8f3605;
  --dataset-teal: #0f766e;
  --dataset-ink: #1f2937;
  --dataset-muted: #667085;
  --dataset-line: #d7dce2;
  --dataset-soft: #f5f7f9;
  max-width: 1120px;
  margin: 0 auto;
  color: var(--dataset-ink);
}

.dataset-page p,
.dataset-page li {
  color: #475467;
  line-height: 1.7;
}

.dataset-page a {
  color: var(--dataset-accent-dark);
}

.dataset-page a:hover {
  color: #6f2b06;
}

.dataset-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.55fr);
  gap: 3rem;
  align-items: start;
  padding-bottom: 2.25rem;
}

.dataset-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.85rem !important;
  color: var(--dataset-accent-dark) !important;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.dataset-kicker::before {
  width: 28px;
  height: 2px;
  background: var(--dataset-accent);
  content: "";
}

.dataset-intro h1 {
  margin: 0 0 1rem !important;
  color: var(--dataset-ink);
  font-size: 2rem;
  line-height: 1.2;
}

.dataset-lede {
  max-width: 760px;
  margin: 0 !important;
  font-size: 1.08rem;
}

.dataset-actions {
  display: grid;
  gap: 0.65rem;
}

.dataset-actions .button {
  width: 100%;
  min-height: 44px;
  justify-content: flex-start;
  border-radius: 6px;
  font-weight: 700;
}

.dataset-actions .button.is-info {
  border-color: var(--dataset-accent);
  background: var(--dataset-accent);
}

.dataset-actions .button.is-info:hover {
  border-color: var(--dataset-accent-dark);
  background: var(--dataset-accent-dark);
}

.dataset-actions .dataset-action-secondary {
  border-color: #b8c0ca;
  background: #ffffff;
  color: var(--dataset-ink);
}

.dataset-actions .dataset-action-secondary:hover {
  border-color: var(--dataset-accent);
  color: var(--dataset-accent-dark);
}

.dataset-facts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0 0 3.5rem;
  border-top: 1px solid var(--dataset-line);
  border-bottom: 1px solid var(--dataset-line);
}

.dataset-fact {
  min-width: 0;
  padding: 1.2rem 1.35rem;
  border-left: 1px solid var(--dataset-line);
}

.dataset-fact:first-child {
  border-left: 0;
}

.dataset-fact strong,
.dataset-fact span {
  display: block;
}

.dataset-fact strong {
  margin-bottom: 0.25rem;
  color: var(--dataset-ink);
  font-size: 1rem;
}

.dataset-fact span {
  color: var(--dataset-muted);
  font-size: 0.85rem;
  line-height: 1.45;
}

.dataset-section {
  padding: 0 0 3.75rem;
  scroll-margin-top: 72px;
}

.dataset-section + .dataset-section {
  padding-top: 0.25rem;
}

.dataset-section-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--dataset-line);
}

.dataset-section-heading h2 {
  margin: 0 !important;
  color: var(--dataset-ink);
  font-size: 1.55rem;
  line-height: 1.25;
}

.dataset-section-heading p {
  margin: 0 !important;
  color: var(--dataset-muted);
  font-size: 0.88rem;
  text-align: right;
}

.dataset-overview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  margin-bottom: 2rem;
}

.dataset-overview-item {
  padding: 0 2rem 0 0;
}

.dataset-overview-item + .dataset-overview-item {
  padding: 0 0 0 2rem;
  border-left: 1px solid var(--dataset-line);
}

.dataset-overview-item h3 {
  margin: 0 0 0.65rem !important;
  color: var(--dataset-ink);
  font-size: 1.15rem;
}

.dataset-overview-item p {
  margin-bottom: 0.8rem !important;
}

.dataset-overview-item ul {
  margin: 0.4rem 0 0 1.1rem !important;
}

.dataset-overview-item li + li {
  margin-top: 0.35rem;
}

.dataset-media {
  margin: 2rem 0 0;
}

.dataset-media iframe {
  display: block;
  width: 100%;
  max-width: 920px;
  height: auto;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  border: 0;
}

.dataset-media img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
}

.dataset-media figcaption {
  margin-top: 0.65rem;
  color: var(--dataset-muted);
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
}

.dataset-media-pair {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  gap: 1.5rem;
  align-items: center;
  margin-top: 2rem;
}

.dataset-media-pair .dataset-media {
  margin: 0;
}

.dataset-download-group + .dataset-download-group {
  margin-top: 2.25rem;
}

.dataset-download-group h3 {
  margin: 0 0 0.35rem !important;
  color: var(--dataset-ink);
  font-size: 1.1rem;
}

.dataset-download-group > p {
  max-width: 780px;
  margin: 0 0 1rem !important;
  color: var(--dataset-muted);
  font-size: 0.92rem;
}

.dataset-download-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.dataset-download-link {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1rem;
  border: 1px solid var(--dataset-line);
  border-radius: 6px;
  background: #ffffff;
  color: var(--dataset-ink) !important;
  text-decoration: none !important;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

.dataset-download-link:hover {
  border-color: var(--dataset-accent);
  box-shadow: 0 3px 10px rgba(31, 41, 55, 0.1);
}

.dataset-download-link .icon {
  color: var(--dataset-accent);
}

.dataset-download-link strong,
.dataset-download-link small {
  display: block;
}

.dataset-download-link strong {
  color: var(--dataset-ink);
  font-size: 0.9rem;
}

.dataset-download-link small {
  color: var(--dataset-muted);
  font-size: 0.75rem;
}

.dataset-table-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid var(--dataset-line);
  border-radius: 6px;
  -webkit-overflow-scrolling: touch;
}

.dataset-table {
  width: 100%;
  min-width: 850px;
  margin: 0 !important;
  border-collapse: collapse;
  background: #ffffff;
  font-size: 0.83rem;
  white-space: nowrap;
}

.dataset-table th,
.dataset-table td {
  padding: 0.72rem 0.8rem !important;
  border: 0 !important;
  border-bottom: 1px solid #e7eaee !important;
  text-align: left !important;
  vertical-align: middle !important;
}

.dataset-table th {
  background: #eef1f4;
  color: #344054 !important;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}

.dataset-table tr:last-child td {
  border-bottom: 0 !important;
}

.dataset-table tbody tr:hover {
  background: #faf7f4;
}

.dataset-table code {
  padding: 0;
  background: transparent;
  color: #344054;
  font-size: 0.8rem;
}

.dataset-table a {
  font-weight: 700;
}

.dataset-table .dataset-source {
  display: inline-block;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: #e7f4f2;
  color: var(--dataset-teal);
  font-size: 0.72rem;
  font-weight: 800;
}

.dataset-table .dataset-source--sim {
  background: #f3eadf;
  color: var(--dataset-accent-dark);
}

.dataset-resource-links {
  display: inline-flex;
  gap: 0.65rem;
}

.dataset-details {
  margin-top: 1rem;
  border: 1px solid var(--dataset-line);
  border-radius: 6px;
  background: #ffffff;
}

.dataset-details summary {
  padding: 0.9rem 1rem;
  color: var(--dataset-ink);
  font-weight: 800;
  cursor: pointer;
}

.dataset-details[open] summary {
  border-bottom: 1px solid var(--dataset-line);
}

.dataset-details .dataset-table-wrap {
  border: 0;
  border-radius: 0 0 6px 6px;
}

.dataset-data-notes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
  padding: 1.15rem;
  border-top: 1px solid var(--dataset-line);
  border-bottom: 1px solid var(--dataset-line);
  background: var(--dataset-soft);
}

.dataset-data-note strong {
  display: block;
  margin-bottom: 0.3rem;
  color: var(--dataset-ink);
  font-size: 0.82rem;
}

.dataset-data-note p,
.dataset-data-note code {
  margin: 0 !important;
  font-size: 0.78rem;
  line-height: 1.5;
}

.dataset-platform-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

.dataset-platform-grid figure {
  margin: 0;
}

.dataset-platform-grid img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 !important;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

.dataset-platform-grid figcaption {
  padding: 0.55rem 0;
  color: #344054;
  font-size: 0.82rem;
  font-weight: 700;
  text-align: center;
}

.dataset-archive {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: center;
  padding: 1.4rem 1.5rem;
  border-top: 1px solid var(--dataset-line);
  border-bottom: 1px solid var(--dataset-line);
  background: var(--dataset-soft);
}

.dataset-archive h3 {
  margin: 0 0 0.35rem !important;
  color: var(--dataset-ink);
  font-size: 1.05rem;
}

.dataset-archive p {
  margin: 0 !important;
  font-size: 0.9rem;
}

.dataset-track-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
}

.dataset-track-links .button {
  margin: 0;
  border-radius: 6px;
  border-color: #aeb6c1;
  background: #ffffff;
  color: #344054;
  font-size: 0.78rem;
  font-weight: 700;
}

.dataset-citation-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 2rem;
}

.dataset-citation-grid h3 {
  margin: 0 0 0.5rem !important;
  color: var(--dataset-ink);
  font-size: 1.05rem;
}

.dataset-citation-grid p {
  margin-bottom: 0.8rem !important;
}

.dataset-citation-grid pre {
  max-width: 100%;
  max-height: 330px;
  overflow: auto;
  margin: 0 !important;
  border-radius: 6px;
  background: #20262e;
  color: #f8fafc;
  font-size: 0.72rem;
  line-height: 1.55;
}

.dataset-related-list {
  margin: 0 !important;
}

.dataset-related-list li + li {
  margin-top: 0.7rem;
}

.dataset-support {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 2.5rem;
  align-items: center;
  padding: 1.35rem 0;
  border-top: 1px solid var(--dataset-line);
  border-bottom: 1px solid var(--dataset-line);
}

.dataset-support h3 {
  margin: 0 0 0.4rem !important;
  color: var(--dataset-ink);
  font-size: 1.05rem;
}

.dataset-support p {
  margin: 0 !important;
}

.dataset-support img {
  display: block;
  width: 150px;
  height: auto;
  margin: 0 auto !important;
}

.dataset-organizer-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 1.5rem 1rem;
  margin-top: 2rem;
}

.dataset-organizer {
  min-width: 0;
  margin: 0;
  text-align: center;
}

.dataset-organizer img {
  display: block;
  width: 92px;
  height: 92px;
  margin: 0 auto 0.55rem !important;
  border-radius: 50%;
  object-fit: cover;
}

.dataset-organizer strong,
.dataset-organizer span {
  display: block;
}

.dataset-organizer strong {
  color: var(--dataset-ink);
  font-size: 0.82rem;
  line-height: 1.3;
}

.dataset-organizer span {
  margin-top: 0.15rem;
  color: var(--dataset-muted);
  font-size: 0.7rem;
  line-height: 1.35;
}

@media (max-width: 1023px) {
  .dataset-intro,
  .dataset-media-pair,
  .dataset-citation-grid {
    grid-template-columns: 1fr;
  }

  .dataset-intro {
    gap: 1.5rem;
  }

  .dataset-actions {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .dataset-organizer-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  body > .section {
    padding-top: 1.75rem;
  }

  .dataset-facts,
  .dataset-download-grid,
  .dataset-data-notes {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dataset-fact:nth-child(3) {
    border-left: 0;
  }

  .dataset-fact:nth-child(-n + 2) {
    border-bottom: 1px solid var(--dataset-line);
  }

  .dataset-overview-grid {
    grid-template-columns: 1fr;
  }

  .dataset-overview-item,
  .dataset-overview-item + .dataset-overview-item {
    padding: 0;
    border-left: 0;
  }

  .dataset-overview-item + .dataset-overview-item {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--dataset-line);
  }

  .dataset-platform-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dataset-archive,
  .dataset-support {
    grid-template-columns: 1fr;
  }

  .dataset-track-links {
    justify-content: flex-start;
  }

  .dataset-support img {
    margin: 0 !important;
  }
}

@media (max-width: 700px) {
  .dataset-actions {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .dataset-intro h1 {
    font-size: 1.65rem;
  }

  .dataset-actions,
  .dataset-download-grid,
  .dataset-data-notes {
    grid-template-columns: 1fr;
  }

  .dataset-section-heading {
    display: block;
  }

  .dataset-section-heading p {
    margin-top: 0.35rem !important;
    text-align: left;
  }

  .dataset-facts {
    grid-template-columns: 1fr;
  }

  .dataset-fact,
  .dataset-fact:nth-child(3) {
    border-left: 0;
    border-bottom: 1px solid var(--dataset-line);
  }

  .dataset-fact:last-child {
    border-bottom: 0;
  }

  .dataset-organizer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>

<div class="dataset-page">
  <section class="dataset-intro" aria-labelledby="dataset-intro-title">
    <div>
      <p class="dataset-kicker">CVPR 2024 dataset</p>
      <h1 id="dataset-intro-title">Robust SLAM data for environments where perception fails</h1>
      <p class="dataset-lede">SubT-MRS combines synchronized RGB, LiDAR, thermal, and inertial sensing across caves, tunnels, urban spaces, and off-road terrain. TartanAir adds photorealistic simulation with dense ground truth for testing sim-to-real robustness.</p>
    </div>
    <div class="dataset-actions" aria-label="Primary dataset actions">
      <a class="button is-info" href="https://arxiv.org/abs/2307.07607">
        <span class="icon"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
        <span>Read the paper</span>
      </a>
      <a class="button dataset-action-secondary" href="https://drive.google.com/drive/folders/1hHCsnc-gANmK6Oox-Im3hqRwsGGaJIuJ">
        <span class="icon"><i class="fas fa-download" aria-hidden="true"></i></span>
        <span>Download ROS bags</span>
      </a>
      <a class="button dataset-action-secondary" href="https://github.com/water-horse/ICCV2023_SLAM_Challenge">
        <span class="icon"><i class="fab fa-github" aria-hidden="true"></i></span>
        <span>Dataset tools</span>
      </a>
    </div>
  </section>

  <div class="dataset-facts" aria-label="Dataset summary">
    <div class="dataset-fact"><strong>4 platform types</strong><span>UGV, UAV, legged, and handheld</span></div>
    <div class="dataset-fact"><strong>4 sensor families</strong><span>RGB, LiDAR, thermal, and IMU</span></div>
    <div class="dataset-fact"><strong>Real + simulated</strong><span>SubT-MRS and TartanAir sequences</span></div>
    <div class="dataset-fact"><strong>Adverse conditions</strong><span>Darkness, smoke, dust, snow, and fog</span></div>
  </div>

  <section class="dataset-section" id="overview">
    <div class="dataset-section-heading">
      <h2>Dataset overview</h2>
      <p>Two complementary sources for robust localization research</p>
    </div>

    <div class="dataset-overview-grid">
      <article class="dataset-overview-item">
        <h3>SubT-MRS</h3>
        <p>A real-world, multi-robot dataset collected in subterranean, indoor, outdoor, and mixed environments with hardware-synchronized sensing.</p>
        <ul>
          <li>Four RGB cameras, LiDAR, IMU, and thermal imaging</li>
          <li>RC cars, legged robots, drones, and handheld motion</li>
          <li>Geometric degradation, darkness, smoke, dust, and illumination changes</li>
        </ul>
      </article>
      <article class="dataset-overview-item">
        <h3>TartanAir</h3>
        <p>A photorealistic AirSim dataset designed for difficult visual motion estimation and sim-to-real transfer.</p>
        <ul>
          <li>Indoor and outdoor environments across weather and seasons</li>
          <li>RGB stereo, depth, optical flow, and semantic labels</li>
          <li>Complex 3D motion, dynamic objects, and low illumination</li>
        </ul>
        <p><a href="https://theairlab.org/tartanair-dataset/">Open the TartanAir dataset page</a></p>
      </article>
    </div>

    <div class="dataset-media-pair">
      <figure class="dataset-media">
        <iframe loading="lazy" src="https://www.youtube.com/embed/gYeQJt9SNX4" title="SubT-MRS dataset sensor video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <figcaption>Synchronized multi-modal data collected across degraded environments.</figcaption>
      </figure>
      <figure class="dataset-media">
        <img loading="lazy" decoding="async" src="/img/datasets/palette.webp" alt="SubT-MRS sensor modalities and environments">
        <figcaption>Platforms, sensing modalities, and environmental conditions represented in the release.</figcaption>
      </figure>
    </div>
  </section>

  <section class="dataset-section" id="downloads">
    <div class="dataset-section-heading">
      <h2>Downloads</h2>
      <p>Sequences, calibration, maps, and trajectories</p>
    </div>

    <div class="dataset-download-group">
      <h3>Primary release</h3>
      <p>Download the same sequences as ROS bags or extracted folders. Ground truth is distributed separately.</p>
      <div class="dataset-download-grid">
        <a class="dataset-download-link" href="https://drive.google.com/drive/folders/1hHCsnc-gANmK6Oox-Im3hqRwsGGaJIuJ"><span class="icon"><i class="fas fa-database" aria-hidden="true"></i></span><span><strong>ROS bags</strong><small>Google Drive</small></span></a>
        <a class="dataset-download-link" href="https://drive.google.com/drive/folders/1zVG63JVmRCWSpTCe0F2iOb-E00NaS1JK"><span class="icon"><i class="fas fa-folder-open" aria-hidden="true"></i></span><span><strong>Extracted folders</strong><small>Google Drive</small></span></a>
        <a class="dataset-download-link" href="https://drive.google.com/drive/folders/1KyM_OO14G6z4NeDZdEfa7hntLLhfdAPp?usp=sharing"><span class="icon"><i class="fas fa-route" aria-hidden="true"></i></span><span><strong>Ground truth</strong><small>Google Drive</small></span></a>
      </div>

      <div class="dataset-table-wrap">
        <table class="dataset-table" aria-label="Primary challenge sequences">
          <thead><tr><th>Sequence</th><th>Source</th><th>Platform</th><th>Sensors</th><th>Condition</th><th>Resources</th></tr></thead>
          <tbody>
            <tr><td><code>Final_Challenge_UGV1</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>UGV1</td><td>LiDAR, IMU</td><td>Geometry degraded</td><td><span class="dataset-resource-links"><a href="https://youtu.be/7lxR0XIwdcM">Video</a><a href="https://drive.google.com/file/d/1jIxqeVk4i3Kj4OD-M8v3C4Bwz9m3d10d/view?usp=drive_link">Extrinsics</a></span></td></tr>
            <tr><td><code>Final_Challenge_UGV2</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>UGV2</td><td>LiDAR, IMU</td><td>Geometry degraded</td><td><span class="dataset-resource-links"><a href="https://youtu.be/7lxR0XIwdcM">Video</a><a href="https://drive.google.com/file/d/1aeEVNv6lmpOsVodTfsrDyQwJcCsdHqcb/view?usp=drive_link">Extrinsics</a></span></td></tr>
            <tr><td><code>Final_Challenge_UGV3</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>UGV3</td><td>LiDAR, IMU</td><td>Geometry degraded</td><td><span class="dataset-resource-links"><a href="https://youtu.be/7lxR0XIwdcM">Video</a><a href="https://drive.google.com/file/d/1J9MvUTH3-qqNHSRo93m6eluty7o7v1uy/view?usp=drive_link">Extrinsics</a></span></td></tr>
            <tr><td><code>Urban_Challenge_UGV1</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>UGV1</td><td>LiDAR, IMU</td><td>Geometry degraded</td><td><span class="dataset-resource-links"><a href="https://youtu.be/UGPbnyaStjM">Video</a><a href="https://drive.google.com/file/d/1UHw3s1ab073opa8-0xHzIe-ouULT90pH/view?usp=sharing">Extrinsics</a></span></td></tr>
            <tr><td><code>Urban_Challenge_UGV2</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>UGV2</td><td>LiDAR, IMU</td><td>Geometry degraded</td><td><span class="dataset-resource-links"><a href="https://youtu.be/UGPbnyaStjM">Video</a><a href="https://drive.google.com/file/d/1rNPndrHyPnbsLzG1BksghtwS2AWSsh4_/view?usp=sharing">Extrinsics</a></span></td></tr>
            <tr><td><code>Laurel_Cavern</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>Handheld</td><td>LiDAR, IMU</td><td>Underground cave</td><td><span class="dataset-resource-links"><a href="https://youtu.be/QYLY2Zc3j1w">Video</a><a href="https://drive.google.com/file/d/1l7UYUVfygY3j1yHzsuovpdHnIClTfKkP/view?usp=sharing">Extrinsics</a></span></td></tr>
            <tr><td><code>Lidar_factory</code></td><td><span class="dataset-source dataset-source--sim">TartanAir</span></td><td>Virtual</td><td>LiDAR, IMU</td><td>Snow</td><td><a href="https://drive.google.com/file/d/1TDGY-jw1NIexqtm6fh8pPjAkFv6V3VoR/view?usp=sharing">Calibration</a></td></tr>
            <tr><td><code>Lidar_ocean</code></td><td><span class="dataset-source dataset-source--sim">TartanAir</span></td><td>Virtual</td><td>LiDAR, IMU</td><td>Dynamic objects</td><td><a href="https://drive.google.com/file/d/1TDGY-jw1NIexqtm6fh8pPjAkFv6V3VoR/view?usp=sharing">Calibration</a></td></tr>
            <tr><td><code>Lidar_sewerage</code></td><td><span class="dataset-source dataset-source--sim">TartanAir</span></td><td>Virtual</td><td>LiDAR, IMU</td><td>Geometry degraded</td><td>Not listed</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="dataset-download-group">
      <h3>Sensor Fusion Challenge extension</h3>
      <p>Additional visual, thermal, inertial, and LiDAR sequences used by the sensor fusion track.</p>
      <div class="dataset-download-grid">
        <a class="dataset-download-link" href="https://drive.google.com/drive/folders/1bV5oCLrpVoc6xKcIduUcco47nG0jPH6i"><span class="icon"><i class="fas fa-database" aria-hidden="true"></i></span><span><strong>ROS bags</strong><small>Challenge extension</small></span></a>
        <a class="dataset-download-link" href="https://drive.google.com/drive/folders/1E4EFVY-Bnef7sSBprnfL5Z49HAc89dLr"><span class="icon"><i class="fas fa-folder-open" aria-hidden="true"></i></span><span><strong>Extracted folders</strong><small>Challenge extension</small></span></a>
        <a class="dataset-download-link" href="https://drive.google.com/drive/folders/1bSGDe1FFQYEjs20P8L15pTx7T0HCn2L0"><span class="icon"><i class="fas fa-route" aria-hidden="true"></i></span><span><strong>Ground truth</strong><small>Challenge extension</small></span></a>
      </div>

      <details class="dataset-details">
        <summary>View 7 sensor fusion sequences</summary>
        <div class="dataset-table-wrap">
          <table class="dataset-table" aria-label="Sensor fusion sequences">
            <thead><tr><th>Sequence</th><th>Platform</th><th>Sensors</th><th>Condition</th><th>Resources</th></tr></thead>
            <tbody>
              <tr><td><code>Multi_Floor</code></td><td>SP1</td><td>LiDAR, RGB, IMU</td><td>Multi-floor</td><td><span class="dataset-resource-links"><a href="https://youtu.be/QcHjVLlsyXE">Video</a><a href="https://drive.google.com/file/d/1BV87D60W35UGzIaHjKD64c_J1G0U70jf/view?usp=drive_link">Extrinsics</a><a href="https://drive.google.com/file/d/1uH4wFmLeQNrIGlsUsO--PQuyEIOSOGvR/view?usp=drive_link">Intrinsics</a></span></td></tr>
              <tr><td><code>Long_Corridor</code></td><td>RC2</td><td>LiDAR, RGB, IMU</td><td>Long corridor</td><td><span class="dataset-resource-links"><a href="https://youtu.be/prmBxGRGwNY">Video</a><a href="https://drive.google.com/file/d/1bB3jfEJeTf_XoLUHKOaxCNF_MCkiQTol/view?usp=drive_link">Extrinsics</a><a href="https://drive.google.com/file/d/10rv5dg5un7kUveTPS3XBx8IuIYGg9r2h/view?usp=drive_link">Intrinsics</a></span></td></tr>
              <tr><td><code>BlockLiDAR</code></td><td>SP1</td><td>LiDAR, RGB, IMU</td><td>Blocked LiDAR</td><td><span class="dataset-resource-links"><a href="https://youtu.be/2r4Z1XKTJHs">Video</a><a href="https://drive.google.com/file/d/1NscQVVsQc_CN-16O_VLpLQnmTWgBmf93/view?usp=drive_link">Extrinsics</a><a href="https://drive.google.com/file/d/1zCqwibpnmJ6I9lv29OUEnjyK2SxN4TbV/view?usp=drive_link">Intrinsics</a></span></td></tr>
              <tr><td><code>BlockVisual</code></td><td>SP1</td><td>RGB, IMU, thermal</td><td>Blocked visual/thermal</td><td><span class="dataset-resource-links"><a href="https://youtu.be/_vl2ClHvxPE">Video</a><a href="https://drive.google.com/file/d/136vuMpzb7OrO_6f8w2-p6g1xyXn09u--/view?usp=drive_link">Extrinsics</a><a href="https://drive.google.com/file/d/1f8DjHgZHH9-fCVUq1Q7kra5Tr5OtNBe-/view?usp=drive_link">Intrinsics</a></span></td></tr>
              <tr><td><code>SmokeRoom</code></td><td>RC7</td><td>RGB, thermal, IMU</td><td>Visual degradation</td><td><span class="dataset-resource-links"><a href="https://youtu.be/Ti2eAbDRMNk">Video</a><a href="https://drive.google.com/file/d/1HjWlRVQQvgrFGlgRxcczRt92Xy_P-5Ij/view?usp=drive_link">Extrinsics</a><a href="https://drive.google.com/file/d/1Q0JiqiIgGZ-7DZKZDNJ68F7rpC2rrLtT/view?usp=drive_link">Intrinsics</a></span></td></tr>
              <tr><td><code>OutdoorNight</code></td><td>SP1</td><td>RGB, thermal, IMU</td><td>Night illumination</td><td><span class="dataset-resource-links"><a href="https://youtu.be/p3Gmdem0LoU">Video</a><a href="https://drive.google.com/file/d/1Zkb4FybZBx2skEXxYnffL4jNneTmd8pQ/view?usp=drive_link">Extrinsics</a><a href="https://drive.google.com/file/d/1hbIyPUJ24YSyX1vISjkMUeqX5K0rrSkU/view?usp=drive_link">Intrinsics</a></span></td></tr>
              <tr><td><code>FlashLight</code></td><td>SP1</td><td>RGB, thermal, IMU</td><td>Changing illumination</td><td><span class="dataset-resource-links"><a href="https://youtu.be/RybUmK27fyY">Video</a><a href="https://drive.google.com/file/d/10YJQ3FMRw95F3_yhOsX2bbuMuvQbtnVV/view?usp=drive_link">Extrinsics</a><a href="https://drive.google.com/file/d/13iTBn_po_GWxt3X8kNWVGZ2wwQ38Eou0/view?usp=drive_link">Intrinsics</a></span></td></tr>
            </tbody>
          </table>
        </div>
      </details>
    </div>

    <div class="dataset-download-group">
      <h3>SuperLoc localization sequences</h3>
      <p>Evaluation data with ROS bags, calibration, ground-truth maps, and trajectories.</p>
      <details class="dataset-details">
        <summary>View 8 SuperLoc sequences</summary>
        <div class="dataset-table-wrap">
          <table class="dataset-table" aria-label="SuperLoc localization sequences">
            <thead><tr><th>Sequence</th><th>Source</th><th>Platform</th><th>Sensors</th><th>Resources</th></tr></thead>
            <tbody>
              <tr><td><code>Cave01</code></td><td><span class="dataset-source">SuperLoc</span></td><td>Handheld</td><td>RGB, LiDAR, IMU</td><td><span class="dataset-resource-links"><a href="https://drive.google.com/file/d/1cyHbmxmJQGuK5UCm_f7SXomr8Gd6GEww/view?usp=sharing">Bag</a><a href="https://drive.google.com/file/d/1TzIvJuJ3ulYSOdrXRy9wRm1E2Y5AE7g1/view?usp=sharing">Extrinsics</a><a href="https://drive.google.com/file/d/1XfWfpjMqfPHUO8JNy1u9Ysky6vvTpn8_/view?usp=sharing">Intrinsics</a><a href="https://drive.google.com/file/d/1JYSVgunLJj6Fj-MsDoNIDHRDx51YWsQP/view?usp=sharing">Map</a><a href="https://drive.google.com/file/d/17JiwUXJ6xZMkL7GSNQg_kV-ZJfKczxak/view?usp=sharing">Trajectory</a></span></td></tr>
              <tr><td><code>Cave02</code></td><td><span class="dataset-source">SuperLoc</span></td><td>Handheld</td><td>RGB, LiDAR, IMU</td><td><span class="dataset-resource-links"><a href="https://drive.google.com/file/d/1HwUYboHbCh4_GfyvZYQn25KmA12yiuMR/view?usp=sharing">Bag</a><a href="https://drive.google.com/file/d/1TzIvJuJ3ulYSOdrXRy9wRm1E2Y5AE7g1/view?usp=sharing">Extrinsics</a><a href="https://drive.google.com/file/d/1XfWfpjMqfPHUO8JNy1u9Ysky6vvTpn8_/view?usp=sharing">Intrinsics</a><a href="https://drive.google.com/file/d/1JYSVgunLJj6Fj-MsDoNIDHRDx51YWsQP/view?usp=sharing">Map</a><a href="https://drive.google.com/file/d/1_7D70MVcUbaJqlzN_xlDkguF1qiyZCqF/view?usp=sharing">Trajectory</a></span></td></tr>
              <tr><td><code>Cave03</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>Handheld</td><td>RGB, LiDAR, IMU</td><td><span class="dataset-resource-links"><a href="https://drive.google.com/file/d/1cO5fStkj1oKpQojfrF8sji-Pbu8LqxPF/view?usp=drive_link">Bag</a><a href="https://drive.google.com/file/d/1TzIvJuJ3ulYSOdrXRy9wRm1E2Y5AE7g1/view?usp=sharing">Extrinsics</a><a href="https://drive.google.com/file/d/1XfWfpjMqfPHUO8JNy1u9Ysky6vvTpn8_/view?usp=sharing">Intrinsics</a><a href="https://drive.google.com/file/d/1JYSVgunLJj6Fj-MsDoNIDHRDx51YWsQP/view?usp=sharing">Map</a><a href="https://drive.google.com/file/d/1Rgm5JC4Nq2mm8s6tafY5w-LvxLrt1oPG/view?usp=sharing">Trajectory</a></span></td></tr>
              <tr><td><code>Cave04</code></td><td><span class="dataset-source">SuperLoc</span></td><td>Handheld</td><td>RGB, LiDAR, IMU</td><td><span class="dataset-resource-links"><a href="https://drive.google.com/file/d/19DXx6mspWBXiEqqZOa34b2bHz7cc1jTN/view?usp=sharing">Bag</a><a href="https://drive.google.com/file/d/1TzIvJuJ3ulYSOdrXRy9wRm1E2Y5AE7g1/view?usp=sharing">Extrinsics</a><a href="https://drive.google.com/file/d/1XfWfpjMqfPHUO8JNy1u9Ysky6vvTpn8_/view?usp=sharing">Intrinsics</a><a href="https://drive.google.com/file/d/1JYSVgunLJj6Fj-MsDoNIDHRDx51YWsQP/view?usp=sharing">Map</a><a href="https://drive.google.com/file/d/11EnNKVYfHJV3P9i0MUrbV4tYqC5z-PSM/view?usp=sharing">Trajectory</a></span></td></tr>
              <tr><td><code>Corridor01</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>RC2</td><td>RGB, LiDAR, IMU</td><td><span class="dataset-resource-links"><a href="https://drive.google.com/file/d/1aIIqPiE10nX3IhidpxKhc4Psq-AMER1X/view?usp=drive_link">Bag</a><a href="https://drive.google.com/file/d/13WmYOrqbT6VNkIGL13cRuLiENeanI6oY/view?usp=sharing">Extrinsics</a><a href="https://drive.google.com/file/d/1guy4Sa1jdfOdxmqBIGFiXX-X2qvXQLGa/view?usp=sharing">Intrinsics</a><a href="https://drive.google.com/file/d/1EH4NzINNLkHrneIxstrzkY9XTZ1JP5bf/view?usp=sharing">Map</a><a href="https://drive.google.com/file/d/1QbQamSktPAzJkf0GduAPTqQlxuxM0DBK/view?usp=sharing">Trajectory</a></span></td></tr>
              <tr><td><code>Corridor02</code></td><td><span class="dataset-source">SuperLoc</span></td><td>RC1</td><td>RGB, LiDAR, IMU</td><td><span class="dataset-resource-links"><a href="https://drive.google.com/file/d/1fbQIjza6zCVZ719VvXfNhAONDZflqGnf/view?usp=sharing">Bag</a><a href="https://drive.google.com/file/d/1FzepVzxan_9GjS0Rg_3f1LIjjwm2VZrR/view?usp=sharing">Extrinsics</a><a href="https://drive.google.com/file/d/1gCjmOVcwhm55Rwosel79FMxG_WzvnV8g/view?usp=sharing">Intrinsics</a><a href="https://drive.google.com/file/d/1d5vv4kfrTyntZw-82fGeTyih3H7DWxg5/view?usp=sharing">Map</a><a href="https://drive.google.com/file/d/1hb3IVu1OqyPZA61kBZG1raGTBcTv_h3H/view?usp=sharing">Trajectory</a></span></td></tr>
              <tr><td><code>Floor01</code></td><td><span class="dataset-source">SubT-MRS</span></td><td>SP1</td><td>RGB, LiDAR, IMU</td><td><span class="dataset-resource-links"><a href="https://drive.google.com/file/d/13QQ8a-dEy56aHg8D0RNW0bfywWz6LKn9/view?usp=drive_link">Bag</a><a href="https://drive.google.com/file/d/1FAtf5IkUzNNrwxyqVAV6Vre5Pmvbp8Mj/view?usp=sharing">Extrinsics</a><a href="https://drive.google.com/file/d/1uH4wFmLeQNrIGlsUsO--PQuyEIOSOGvR/view?usp=drive_link">Intrinsics</a><a href="https://drive.google.com/file/d/1F46g0wnJVSedTJubFD_Ne1IwgZAGYvsU/view?usp=sharing">Map</a><a href="https://drive.google.com/file/d/1T-p9TgDwD_9us7U94cT0guwPNTvx3KkI/view?usp=sharing">Trajectory</a></span></td></tr>
              <tr><td><code>Floor02</code> (bonus)</td><td><span class="dataset-source">SuperLoc</span></td><td>SP1</td><td>RGB, LiDAR, IMU</td><td><span class="dataset-resource-links"><a href="https://drive.google.com/file/d/1RnlqpHVG1I-BD0T7pxNkKELAGy_Vp0oI/view?usp=sharing">Bag</a><a href="https://drive.google.com/file/d/1FAtf5IkUzNNrwxyqVAV6Vre5Pmvbp8Mj/view?usp=sharing">Extrinsics</a><a href="https://drive.google.com/file/d/1uH4wFmLeQNrIGlsUsO--PQuyEIOSOGvR/view?usp=drive_link">Intrinsics</a><a href="https://drive.google.com/file/d/1F46g0wnJVSedTJubFD_Ne1IwgZAGYvsU/view?usp=sharing">Map</a><span>Trajectory not listed</span></span></td></tr>
            </tbody>
          </table>
        </div>
      </details>
    </div>

    <div class="dataset-data-notes">
      <div class="dataset-data-note"><strong>Initialization poses</strong><p><a href="https://drive.google.com/drive/folders/1WZsyEYyU-_8ps1CUqRq3YO7IaARMdGNm?usp=sharing">Download pose configurations</a></p></div>
      <div class="dataset-data-note"><strong>Trajectory format</strong><p><code>timestamp x y z q_x q_y q_z q_w</code></p></div>
      <div class="dataset-data-note"><strong>Point cloud conversion</strong><p><a href="https://github.com/superxslam/ICCV2023_SLAM_Challenge?tab=readme-ov-file#instructions-for-running-velodyne-driver">Velodyne conversion tutorial</a></p></div>
    </div>
  </section>

  <section class="dataset-section" id="platforms">
    <div class="dataset-section-heading">
      <h2>Platforms and sensors</h2>
      <p>Heterogeneous motion and synchronized sensing</p>
    </div>

    <div class="dataset-platform-grid">
      <figure><img loading="lazy" decoding="async" src="/img/datasets/platform-offroad.webp" alt="Off-road RC platform"><figcaption>Off-road RC platform</figcaption></figure>
      <figure><img loading="lazy" decoding="async" src="/img/datasets/platform-spot.webp" alt="Legged robot platform"><figcaption>Legged robot</figcaption></figure>
      <figure><img loading="lazy" decoding="async" src="/img/datasets/platform-ugv.webp" alt="Uncrewed ground vehicle"><figcaption>Uncrewed ground vehicle</figcaption></figure>
      <figure><img loading="lazy" decoding="async" src="/img/datasets/platform-uav.webp" alt="Uncrewed aerial vehicle"><figcaption>Uncrewed aerial vehicle</figcaption></figure>
    </div>

    <div class="dataset-media-pair">
      <figure class="dataset-media">
        <iframe loading="lazy" src="https://www.youtube.com/embed/G8KaflyapIE" title="Dataset sensor platform video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <figcaption>Sensor platform and synchronized streams.</figcaption>
      </figure>
      <figure class="dataset-media">
        <img loading="lazy" decoding="async" src="/img/datasets/specs.webp" alt="Dataset sensor specifications">
        <figcaption>Sensor specifications and platform configuration.</figcaption>
      </figure>
    </div>
  </section>

  <section class="dataset-section" id="challenge">
    <div class="dataset-section-heading">
      <h2>ICCV 2023 challenge archive</h2>
      <p>Closed October 15, 2023</p>
    </div>
    <div class="dataset-archive">
      <div>
        <h3>Three evaluation tracks</h3>
        <p>The challenge evaluated visual-inertial, LiDAR-inertial, and multi-sensor fusion systems independently. Track pages remain available as an archive.</p>
      </div>
      <div class="dataset-track-links">
        <a class="button" href="/iccv23_challenge_VI">Visual-inertial</a>
        <a class="button" href="/iccv23_challenge_LiI">LiDAR-inertial</a>
        <a class="button" href="/iccv23_challenge_Mul">Sensor fusion</a>
      </div>
    </div>
  </section>

  <section class="dataset-section" id="citation">
    <div class="dataset-section-heading">
      <h2>Citation and related work</h2>
      <p>SubT-MRS appeared at CVPR 2024</p>
    </div>
    <div class="dataset-citation-grid">
      <div>
        <h3>SubT-MRS Dataset</h3>
        <p>Zhao et al., "SubT-MRS Dataset: Pushing SLAM Towards All-weather Environments," CVPR 2024.</p>
        <pre><code>@InProceedings{Zhao_2024_CVPR,
  author    = {Zhao, Shibo and Gao, Yuanjun and Wu, Tianhao and
               Singh, Damanpreet and Jiang, Rushan and Sun, Haoxiang and
               Sarawata, Mansi and Qiu, Yuheng and Whittaker, Warren and
               Higgins, Ian and Du, Yi and Su, Shaoshu and Xu, Can and
               Keller, John and Karhade, Jay and Nogueira, Lucas and
               Saha, Sourojit and Zhang, Ji and Wang, Wenshan and
               Wang, Chen and Scherer, Sebastian},
  title     = {SubT-MRS Dataset: Pushing SLAM Towards All-weather Environments},
  booktitle = {CVPR},
  year      = {2024},
  pages     = {22647--22657}
}</code></pre>
      </div>
      <div>
        <h3>Related papers</h3>
        <ul class="dataset-related-list">
          <li><a href="https://arxiv.org/abs/2003.14338">TartanAir: A Dataset to Push the Limits of Visual SLAM</a></li>
          <li><a href="https://arxiv.org/pdf/2208.01787.pdf">Present and Future of SLAM in Extreme Underground Environments</a></li>
          <li><a href="https://arxiv.org/abs/2307.07607">SubT-MRS Dataset paper and supplementary material</a></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="dataset-section" id="team">
    <div class="dataset-section-heading">
      <h2>Team and support</h2>
      <p>Carnegie Mellon University AirLab</p>
    </div>

    <div class="dataset-support">
      <div>
        <h3>Questions and dataset issues</h3>
        <p>Open an issue in the <a href="https://github.com/water-horse/ICCV2023_SLAM_Challenge">challenge repository</a> for dataset access, calibration, or format questions.</p>
      </div>
      <div>
        <img loading="lazy" decoding="async" src="/img/sponsor/NVIDIA.png" alt="NVIDIA">
      </div>
    </div>

    <div class="dataset-organizer-grid" aria-label="Dataset organizers">
      <figure class="dataset-organizer"><a href="https://theairlab.org/team/shiboz/"><img loading="lazy" decoding="async" src="/img/team/shibozNew.png" alt="Shibo Zhao"></a><figcaption><strong>Shibo Zhao</strong><span>PhD Candidate</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://theairlab.org/team/lucas_nogueira/"><img loading="lazy" decoding="async" src="/img/team/lucas_nogueira_crop.png" alt="Lucas Nogueira"></a><figcaption><strong>Lucas Nogueira</strong><span>Master's Student</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://theairlab.org/team/ian/"><img loading="lazy" decoding="async" src="/img/team/ian.jpg" alt="Ian Higgins"></a><figcaption><strong>Ian Higgins</strong><span>Research Associate</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://seansun.org"><img loading="lazy" decoding="async" src="/img/team/haoxiangsun.jpg" alt="Haoxiang Sun"></a><figcaption><strong>Haoxiang Sun</strong><span>Undergraduate Student</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://drive.google.com/file/d/1qWiMQoJsAF4oOikU0akjOOveBn-SUOLl/view"><img loading="lazy" decoding="async" src="/img/team/rushan_jiang.png" alt="Rushan Jiang"></a><figcaption><strong>Rushan Jiang</strong><span>Undergraduate Student</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://www.ri.cmu.edu/ri-people/warren-whittaker/"><img loading="lazy" decoding="async" src="/img/team/chuck-whittaker.jpg" alt="Warren Whittaker"></a><figcaption><strong>Warren Whittaker</strong><span>Field Robotics Specialist</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://www.linkedin.com/in/damanpreet-singh-289a46163/"><img loading="lazy" decoding="async" src="/img/iccv_organizers/iccv_members/daman.png" alt="Damanpreet Singh"></a><figcaption><strong>Damanpreet Singh</strong><span>Graduate Student</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://www.linkedin.com/in/cmucanxu"><img loading="lazy" decoding="async" src="/img/iccv_organizers/iccv_members/canxu.png" alt="Can Xu"></a><figcaption><strong>Can Xu</strong><span>Research Associate</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://www.linkedin.com/mwlite/in/tianhao-wu-112688a6"><img loading="lazy" decoding="async" src="/img/iccv_organizers/iccv_members/tianhao.jpg" alt="Tianhao Wu"></a><figcaption><strong>Tianhao Wu</strong><span>Research Associate</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://www.linkedin.com/in/tingting-da-6b87b4250/"><img loading="lazy" decoding="async" src="/img/team/tingting.jpg" alt="Tingting Da"></a><figcaption><strong>Tingting Da</strong><span>Undergraduate Student</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://www.linkedin.com/in/yuanjun-gao/"><img loading="lazy" decoding="async" src="/img/iccv_organizers/iccv_members/yuanjun.jpg" alt="Yuanjun Gao"></a><figcaption><strong>Yuanjun Gao</strong><span>Research Associate</span></figcaption></figure>
      <figure class="dataset-organizer"><img loading="lazy" decoding="async" src="/img/iccv_organizers/iccv_members/jay.png" alt="Jay Karhade"><figcaption><strong>Jay Karhade</strong><span>MSR Student</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://www.linkedin.com/in/mansi-sarawata"><img loading="lazy" decoding="async" src="/img/iccv_organizers/iccv_members/mansi.jpg" alt="Mansi Sarawata"></a><figcaption><strong>Mansi Sarawata</strong><span>MSME Student</span></figcaption></figure>
      <figure class="dataset-organizer"><a href="https://www.ri.cmu.edu/ri-people/yao-he/"><img loading="lazy" decoding="async" src="/img/iccv_organizers/iccv_members/yaohe.png" alt="Yao He"></a><figcaption><strong>Yao He</strong><span>Research Associate</span></figcaption></figure>
    </div>
  </section>
</div>
