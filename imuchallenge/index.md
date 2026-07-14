---
title: IMU Odometry Challenge
subtitle: Cross-Platform Inertial Positioning Benchmark
layout: page
show_sidebar: false
hide_footer: false
hide_hero: false
hero_height: is-medium
hero_image: /img/datasets/dataset_video_short.gif
hero_link: /imuchallenge/setup/
hero_link_text: GET STARTED
hero_link2: https://forms.gle/oRr4rCNxqTP1U6uS8
hero_link_text2: REGISTER
hero_subtitle2: "Held in conjunction with Beyond Exteroception: Interoceptive Perception for Resilient Robotics Workshop at IROS 2026"
permalink: /imuchallenge/
---

## <i class="fas fa-bullhorn imu-h-icon"></i> Announcements

<div class="imu-updates">
  <div class="imu-update">
    <div class="imu-update-date">May 30, 2026</div>
    <div class="imu-update-body">The official dataset release hub is set to <a href="/imuchallenge/data/"><code>/imuchallenge/data/</code></a>.</div>
  </div>
  <div class="imu-update">
    <div class="imu-update-date">May 30, 2026</div>
    <div class="imu-update-body">Platform pages (Car, Drone, Quadruped, Handheld) are published.</div>
  </div>
  <div class="imu-update">
    <div class="imu-update-date">May 30, 2026</div>
    <div class="imu-update-body">Initial IMU Odometry Challenge website structure is now live under the <code>/imuchallenge/</code> namespace.</div>
  </div>
</div>

## <i class="fas fa-lightbulb imu-h-icon"></i> What This Challenge Is

The IMU Odometry Challenge is a CMU AirLab competition and benchmark for neural inertial odometry.

Participants train and evaluate models on shared train/validation splits and are ranked on held-out test sets. The benchmark is motivated by the Tartan IMU direction: large-scale pretraining, efficient adaptation, and robust generalization across platforms.

This challenge is held in conjunction with the [IROS'26 Workshop: "Beyond Exteroception: Interoceptive Perception for Resilient Robotics"](/interoception/).

## <i class="fas fa-play-circle imu-h-icon"></i> Intro Video: Learning IMU Odometry

<video controls preload="metadata" style="display:block; width:100%; border-radius:12px; border:1px solid #e5e7eb; margin:0 0 1rem 0;">
  <source src="/img/science_robotics/learning_imu_odometry_intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

All official dataset packages, download links, and the live metadata explorer are published on [/imuchallenge/data](/imuchallenge/data/).

## <i class="fas fa-rocket imu-h-icon"></i> Try the Live Demo

Run our reference TartanIMU specialist models on your own IMU sequences directly in the browser — no setup required. [Launch the Hugging Face Space demo &rarr;](https://huggingface.co/spaces/Tartan-IMU/imu_odometry_challenge_demo){:target="_blank" rel="noopener"}

## <i class="fas fa-bullseye imu-h-icon"></i> Challenge Goal

Build IMU odometry models that generalize across robot platforms and beat current state-of-the-art performance under a shared benchmark protocol, surfacing research questions for the workshop discussion on interoceptive robot perception.

### Problem Formulation

**Input:** Raw 6-DOF IMU measurements — accelerometer (a_x, a_y, a_z) in m/s² and gyroscope (ω_x, ω_y, ω_z) in rad/s — sampled at **200 Hz**. Each input window spans **1 second (200 samples)**; models receive sequences of **10 consecutive windows (10 s total)**.

**Output:** Per-window **3D body-frame velocity predictions v = (v_x, v_y, v_z)** in m/s. Positions are derived by the organizers via integration with ground-truth orientation.

### Evaluation Metrics

Submissions are ranked on held-out test trajectories across all platforms using:

<div class="imu-feature-grid">
  <div class="imu-feature">
    <span class="imu-feature-icon"><i class="fas fa-tachometer-alt"></i></span>
    <span class="imu-feature-tag">Primary</span>
    <span class="imu-feature-title">Velocity RMSE</span>
    <p>Macro-averaged velocity RMSE — mean of per-platform RMSEs — so platform size imbalance cannot be gamed.</p>
  </div>
  <div class="imu-feature">
    <span class="imu-feature-icon"><i class="fas fa-map-marker-alt"></i></span>
    <span class="imu-feature-tag">Secondary</span>
    <span class="imu-feature-title">ATE — Absolute Trajectory Error</span>
    <p>Position RMSE over 5 m drift-corrected segments, computed by the organizers by integrating predicted velocities with ground-truth orientation.</p>
  </div>
</div>

## <i class="fas fa-layer-group imu-h-icon"></i> Benchmark Structure

<div class="imu-feature-grid">
  <div class="imu-feature">
    <span class="imu-feature-icon"><i class="fas fa-graduation-cap"></i></span>
    <span class="imu-feature-title">Train</span>
    <p>Development data for model fitting and ablation.</p>
  </div>
  <div class="imu-feature">
    <span class="imu-feature-icon"><i class="fas fa-check-double"></i></span>
    <span class="imu-feature-title">Validation</span>
    <p>Public split for model selection and error analysis.</p>
  </div>
  <div class="imu-feature">
    <span class="imu-feature-icon"><i class="fas fa-flag-checkered"></i></span>
    <span class="imu-feature-title">Test</span>
    <p>Held-out benchmark split for official ranking.</p>
  </div>
</div>

## <i class="fas fa-compass imu-h-icon"></i> Start Here

<ul class="imu-icon-list">
  <li><i class="fas fa-wrench"></i> <a href="/imuchallenge/setup/">Setup</a></li>
  <li><i class="fas fa-robot"></i> <a href="/imuchallenge/platforms/">Platforms</a></li>
  <li><i class="fas fa-database"></i> <a href="/imuchallenge/data/">Data</a></li>
  <li><i class="fas fa-info-circle"></i> <a href="/imuchallenge/about/">About</a></li>
</ul>

## <i class="fas fa-book imu-h-icon"></i> BibTeX

```bibtex
@inproceedings{zhao2025tartanimu,
  title={Tartan IMU: A Light Foundation Model for Inertial Positioning in Robotics},
  author={Zhao, Shibo and Yagnyatinskiy, Maxim and others},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2025},
  url={https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_Positioning_in_CVPR_2025_paper.pdf}
}
```

```bibtex
@misc{imuchallenge2026,
  title={IMU Odometry Challenge: Cross-Platform Inertial Positioning Benchmark},
  author={CMU AirLab and Super Odometry Group},
  year={2026},
  howpublished={\url{https://superodometry.com/imuchallenge}},
  note={Dataset and benchmark challenge page}
}
```
