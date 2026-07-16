---
title: "Research"
subtitle: "State Estimation, Spatial Perception and Memory for Robots"
layout: page
show_sidebar: false
hide_hero: true
hide_footer: false
---

<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">

<style>
  body { font-family: 'Google Sans', 'Noto Sans', sans-serif; }
  :root { --accent: #C45A0E; --accent-tint: #fdf3ec; --ink: #333; --muted: #666; --hair: #eaeaea; }

  .research-header {
    max-width: 1200px;
    margin: 1.8rem auto 0.3rem auto;
    padding: 0 1rem;
    text-align: left;
  }
  .research-header h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -0.5px;
    margin-bottom: 0.3rem;
  }
  .research-header .rule {
    width: 64px; height: 3px; background: var(--accent); border-radius: 2px;
    margin: 0.5rem 0 0.8rem 0;
  }
  .research-header p {
    font-size: 1rem;
    color: var(--muted);
    line-height: 1.5;
    margin-bottom: 0.3rem;
  }

  .research-feed {
    max-width: 1200px;
    margin: 1.5rem auto 4rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.3rem;
  }
  .research-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid var(--hair);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 3px 12px rgba(0,0,0,0.06);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .research-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.12);
  }
  .research-card-media {
    height: 170px;
    background: #f6f6f6;
    position: relative;
  }
  .research-card-media img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }
  .research-card-body {
    flex: 1;
    padding: 1rem 1.1rem 1rem 1.1rem;
    display: flex;
    flex-direction: column;
  }
  .research-card-venue {
    display: inline-block;
    align-self: flex-start;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-tint);
    border-radius: 9999px;
    padding: 0.18rem 0.7rem;
    margin-bottom: 0.6rem;
  }
  .research-card-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -0.3px;
    margin: 0 0 0.3rem 0;
  }
  .research-card-title a { color: inherit; }
  .research-card-title a:hover { color: var(--accent); }
  .research-card-desc {
    font-size: 0.85rem;
    color: var(--ink);
    line-height: 1.5;
    margin: 0 0 0.75rem 0;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .research-card-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }
  .research-card-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ink);
    border: 1px solid var(--hair);
    border-radius: 9999px;
    padding: 0.2rem 0.7rem;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .research-card-links a:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
  }

  @media (max-width: 1000px) {
    .research-feed { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .research-feed { grid-template-columns: 1fr; }
    .research-header h1 { font-size: 2rem; }
  }
</style>

<div class="research-header">
  <h1>Research</h1>
  <div class="rule"></div>
  <p>We build resilient state estimation, localization, and spatial memory systems that let robots operate in the most challenging environments — from underground tunnels to campus-scale deployments.</p>
</div>

<div class="research-feed">

  <!-- SuperMap -->
  <div class="research-card">
    <div class="research-card-media">
      <a href="/supermap"><img src="/img/supermap/supermap_overview_figure.png" alt="SuperMap overview"></a>
    </div>
    <div class="research-card-body">
      <span class="research-card-venue">RSS 2026</span>
      <h2 class="research-card-title"><a href="/supermap">SuperMap</a></h2>
      <p class="research-card-desc">A spatio-temporal SLAM system for visual-language navigation. SuperMap fuses geometric SLAM with open-vocabulary perception to build a queryable 4D scene graph — a living spatial memory that tracks objects as they appear, move, and disappear, running online and onboard.</p>
      <div class="research-card-links">
        <a href="/supermap">Project Page</a>
        <a href="https://www.roboticsproceedings.org/rss22/p052.pdf" target="_blank" rel="noopener">Paper</a>
        <a href="https://github.com/superxslam/SuperMap" target="_blank" rel="noopener">Code</a>
      </div>
    </div>
  </div>

  <!-- TartanIMU -->
  <div class="research-card">
    <div class="research-card-media">
      <a href="/tartanimu"><img src="/img/tartanimu/firstpage.png" alt="TartanIMU overview"></a>
    </div>
    <div class="research-card-body">
      <span class="research-card-venue">CVPR 2025</span>
      <h2 class="research-card-title"><a href="/tartanimu">TartanIMU</a></h2>
      <p class="research-card-desc">A light foundation model for inertial positioning in robotics. Trained across cars, drones, quadrupeds, and humans, TartanIMU generalizes zero-shot to new platforms and adapts online with minimal compute.</p>
      <div class="research-card-links">
        <a href="/tartanimu">Project Page</a>
        <a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_Positioning_in_CVPR_2025_paper.pdf" target="_blank" rel="noopener">Paper</a>
      </div>
    </div>
  </div>

  <!-- SuperLoc -->
  <div class="research-card">
    <div class="research-card-media">
      <a href="/superloc"><img src="/img/superloc/superloc_title.gif" alt="SuperLoc demo"></a>
    </div>
    <div class="research-card-body">
      <span class="research-card-venue">ICRA 2025</span>
      <h2 class="research-card-title"><a href="/superloc">SuperLoc</a></h2>
      <p class="research-card-desc">Robust LiDAR-inertial localization by predicting alignment risks before they cause failure. SuperLoc anticipates degeneracy in ICP registration and switches strategies proactively, staying reliable in geometrically degraded environments.</p>
      <div class="research-card-links">
        <a href="/superloc">Project Page</a>
      </div>
    </div>
  </div>

  <!-- SubT-MRS -->
  <div class="research-card">
    <div class="research-card-media">
      <a href="/datasets"><img src="/img/datasets/dataset_video_short.gif" alt="SubT-MRS dataset"></a>
    </div>
    <div class="research-card-body">
      <span class="research-card-venue">CVPR 2024 · Dataset</span>
      <h2 class="research-card-title"><a href="/datasets">SubT-MRS</a></h2>
      <p class="research-card-desc">A multi-robot, multi-degraded SLAM dataset pushing SLAM towards all-weather environments — darkness, fog, dust, smoke, and self-similar areas — with RGB, LiDAR, IMU, and thermal modalities across real and simulated (TartanAir) scenes.</p>
      <div class="research-card-links">
        <a href="/datasets">Dataset Page</a>
        <a href="https://arxiv.org/abs/2307.07607" target="_blank" rel="noopener">Paper</a>
      </div>
    </div>
  </div>

  <!-- Super Odometry -->
  <div class="research-card">
    <div class="research-card-media">
      <a href="/"><img src="/img/super_odometry/superodom_video.gif" alt="Super Odometry demo"></a>
    </div>
    <div class="research-card-body">
      <span class="research-card-venue">Science Robotics · IROS 2021</span>
      <h2 class="research-card-title"><a href="/">Super Odometry</a></h2>
      <p class="research-card-desc">An IMU-centric LiDAR-visual-inertial estimator with hierarchical adaptation, delivering resilient odometry through darkness, dust, and geometric degeneracy. Selected as a top feature article on Science Robotics and battle-tested in the DARPA SubT Challenge.</p>
      <div class="research-card-links">
        <a href="/">Project Page</a>
        <a href="/superodom_v1">SuperOdom V1</a>
        <a href="https://github.com/superxslam/SuperOdom" target="_blank" rel="noopener">Code</a>
      </div>
    </div>
  </div>

  <!-- TP-TIO -->
  <div class="research-card">
    <div class="research-card-media">
      <a href="/tptio"><img src="/img/tptio/tp-tio.gif" alt="TP-TIO demo"></a>
    </div>
    <div class="research-card-body">
      <span class="research-card-venue">IROS 2020</span>
      <h2 class="research-card-title"><a href="/tptio">TP-TIO</a></h2>
      <p class="research-card-desc">A robust thermal-inertial odometry with deep ThermalPoint. TP-TIO enables reliable state estimation in visually denied conditions — smoke, dust, and total darkness — where standard cameras fail.</p>
      <div class="research-card-links">
        <a href="/tptio">Project Page</a>
        <a href="https://arxiv.org/abs/2012.03455" target="_blank" rel="noopener">Paper</a>
      </div>
    </div>
  </div>

</div>
