---
title: IMU Odometry Challenge
subtitle: Cross-Platform Inertial Positioning Benchmark
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/
---

<div class="imu-gt-media">
  <div class="imu-gt-media-placeholder">Hero media placeholder — drop in a video or image</div>
</div>

<div class="imu-gt-pill-row">
  <div class="imu-gt-pill">
    <span>The IMU Odometry Challenge is now open for IROS'26 —</span>
    <a href="https://forms.gle/oRr4rCNxqTP1U6uS8" target="_blank" rel="noopener">Register your team</a>
  </div>
  <div class="imu-gt-pill">
    <span>For the latest announcements, please</span>
    <a href="#updates">click here &#128226;</a>
  </div>
</div>

<div class="imu-gt-hero">

<h1 class="imu-gt-title" data-title="IMU Odometry Challenge">IMU Odometry Challenge</h1>

<p class="imu-gt-subtitle">A CMU AirLab benchmark for neural inertial odometry: train and evaluate models across car, drone, quadruped, and handheld platforms on shared splits, ranked on held-out test sets.</p>

<div class="imu-gt-button-row">
  <a class="imu-gt-button" href="/imuchallenge/setup/">Setup</a>
  <a class="imu-gt-button" href="/imuchallenge/platforms/">Platforms</a>
  <a class="imu-gt-button" href="/imuchallenge/data/">Data Overview</a>
  <a class="imu-gt-button" href="/imuchallenge/about/">About</a>
</div>

</div>

<div class="imu-gt-stats-band">
  <dl class="imu-gt-stats">
    <div><dt>Platforms</dt><dd>4</dd></div>
    <div><dt>Trajectories</dt><dd>216</dd></div>
    <div><dt>Total Duration</dt><dd>29.5 hrs</dd></div>
    <div><dt>Sample Rate</dt><dd>200 Hz</dd></div>
  </dl>
</div>

<div class="imu-gt-media">
  <div class="imu-gt-media-placeholder">Illustration placeholder — e.g. platform lineup or trajectory figure</div>
</div>

<div class="imu-gt-divider"><span class="imu-gt-divider-mark">{% include imu-bot.html %}</span></div>

<div class="imu-gt-section-title-wrap">
<h2 class="imu-gt-section-title">Key Features</h2>
</div>

<div class="imu-gt-feature-grid">
  <div class="imu-gt-feature">
    <div class="imu-gt-feature-icon"><i class="fas fa-layer-group"></i></div>
    <div class="imu-gt-feature-content">
      <span class="imu-gt-feature-title">Cross-Platform Benchmark</span>
      <p class="imu-gt-feature-body">Shared train/validation splits and held-out test sets across car, drone, quadruped, and handheld IMU data, so methods are ranked on generalization, not one platform.</p>
    </div>
  </div>
  <div class="imu-gt-feature">
    <div class="imu-gt-feature-icon"><i class="fas fa-compass"></i></div>
    <div class="imu-gt-feature-content">
      <span class="imu-gt-feature-title">Tartan IMU Direction</span>
      <p class="imu-gt-feature-body">Motivated by large-scale multi-platform pretraining, efficient adaptation to unseen domains, and robust generalization — the same direction behind Tartan IMU.</p>
    </div>
  </div>
  <div class="imu-gt-feature">
    <div class="imu-gt-feature-icon"><i class="fas fa-balance-scale"></i></div>
    <div class="imu-gt-feature-content">
      <span class="imu-gt-feature-title">Standardized Evaluation</span>
      <p class="imu-gt-feature-body">Macro-averaged velocity RMSE as the primary metric and ATE as a secondary metric, both computed with a shared, transparent protocol across all platforms.</p>
    </div>
  </div>
  <div class="imu-gt-feature">
    <div class="imu-gt-feature-icon"><i class="fas fa-code"></i></div>
    <div class="imu-gt-feature-content">
      <span class="imu-gt-feature-title">Open Baseline &amp; Live Demo</span>
      <p class="imu-gt-feature-body">Reference TartanIMU specialist checkpoints per platform, plus a browser-based Hugging Face Space demo — no setup required to see what good performance looks like.</p>
    </div>
  </div>
</div>

<div class="imu-gt-divider"><span class="imu-gt-divider-mark">{% include imu-bot.html %}</span></div>

<div class="imu-gt-section-title-wrap">
<h2 class="imu-gt-section-title">Organizers &amp; Partners</h2>
</div>

<div class="imu-gt-partners">
  <div class="imu-gt-partner">
    <div class="imu-gt-partner-mark"><img src="/img/logos/Horizontal@2x.png" alt="CMU AirLab logo"></div>
    <span>CMU AirLab</span>
  </div>
  <div class="imu-gt-partner">
    <div class="imu-gt-partner-mark imu-gt-partner-mark-text">Amazon FAR</div>
    <span>Amazon FAR</span>
  </div>
  <div class="imu-gt-partner">
    <div class="imu-gt-partner-mark imu-gt-partner-mark-text">Carnegie Mellon University</div>
    <span>Carnegie Mellon University</span>
  </div>
</div>

<div class="imu-gt-cta-row">
  <a class="imu-gt-button" href="/imuchallenge/about/">More details and organizers &rarr;</a>
</div>

<div class="imu-gt-divider"><span class="imu-gt-divider-mark">{% include imu-bot.html %}</span></div>

<div id="updates" class="imu-gt-updates-card">
  <div class="imu-gt-section-title-wrap">
  <h2 class="imu-gt-section-title">Announcements</h2>
  </div>
  <div class="imu-gt-update-row is-latest">
    <time datetime="2026-05-30">2026-05-30</time>
    <span>The official dataset release hub is set to <a href="/imuchallenge/data/"><code>/imuchallenge/data/</code></a>.</span>
  </div>
  <div class="imu-gt-update-row">
    <time datetime="2026-05-30">2026-05-30</time>
    <span>Platform pages (Car, Drone, Quadruped, Handheld) are published.</span>
  </div>
  <div class="imu-gt-update-row">
    <time datetime="2026-05-30">2026-05-30</time>
    <span>Initial IMU Odometry Challenge website structure is now live under the <code>/imuchallenge/</code> namespace.</span>
  </div>
</div>

<div class="imu-gt-divider"><span class="imu-gt-divider-mark">{% include imu-bot.html %}</span></div>

<div class="imu-gt-section-title-wrap">
<h2 class="imu-gt-section-title">Citation</h2>
</div>

<div class="imu-gt-citation" markdown="1">

Run our reference TartanIMU specialist models on your own IMU sequences directly in the browser at the [Hugging Face Space demo &rarr;](https://huggingface.co/spaces/Tartan-IMU/imu_odometry_challenge_demo){:target="_blank" rel="noopener"}. This challenge is held in conjunction with the [IROS'26 Workshop: "Beyond Exteroception: Interoceptive Perception for Resilient Robotics"](/interoception/).

<div class="imu-gt-citation-block" markdown="1">
### Tartan IMU (CVPR 2025)

```bibtex
@inproceedings{zhao2025tartanimu,
  title={Tartan IMU: A Light Foundation Model for Inertial Positioning in Robotics},
  author={Zhao, Shibo and Yagnyatinskiy, Maxim and others},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2025},
  url={https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_Positioning_in_CVPR_2025_paper.pdf}
}
```
</div>

<div class="imu-gt-citation-block" markdown="1">
### IMU Odometry Challenge

```bibtex
@misc{imuchallenge2026,
  title={IMU Odometry Challenge: Cross-Platform Inertial Positioning Benchmark},
  author={CMU AirLab and Super Odometry Group},
  year={2026},
  howpublished={\url{https://superodometry.com/imuchallenge}},
  note={Dataset and benchmark challenge page}
}
```
</div>

</div>
