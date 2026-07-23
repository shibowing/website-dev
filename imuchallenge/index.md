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
  <video autoplay loop muted playsinline preload="auto">
    <source src="/img/imuchallenge/hero_preview.mp4" type="video/mp4">
  </video>
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

<p class="imu-gt-subtitle">Can a single model sense motion for any robot? Estimate 3D body-frame velocity from raw 6-axis IMU — with <strong>one unified model</strong> across car, drone, quadruped, and human, scored on an anonymized, platform-blind test set.</p>

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
    <div><dt>Windows</dt><dd>~136K</dd></div>
    <div><dt>Total Duration</dt><dd>37.9 hrs</dd></div>
    <div><dt>Sample Rate</dt><dd>200 Hz</dd></div>
  </dl>
</div>

<div class="imu-gt-platform-strip" aria-label="Platform trajectory previews">
  <a class="imu-gt-platform-card" href="/imuchallenge/platforms/car/">
    <img src="/img/imuchallenge/previews/car_train_0000.png" alt="Car training trajectory preview" width="423" height="268" loading="lazy" decoding="async">
    <span class="imu-gt-platform-card-label"><strong>Car</strong><span>View platform <i class="fas fa-arrow-right" aria-hidden="true"></i></span></span>
  </a>
  <a class="imu-gt-platform-card" href="/imuchallenge/platforms/drone/">
    <img src="/img/imuchallenge/previews/drone_train_0000.png" alt="Drone training trajectory preview" width="426" height="268" loading="lazy" decoding="async">
    <span class="imu-gt-platform-card-label"><strong>Drone</strong><span>View platform <i class="fas fa-arrow-right" aria-hidden="true"></i></span></span>
  </a>
  <a class="imu-gt-platform-card" href="/imuchallenge/platforms/quadruped/">
    <img src="/img/imuchallenge/previews/quadruped_train_0000.png" alt="Quadruped training trajectory preview" width="423" height="268" loading="lazy" decoding="async">
    <span class="imu-gt-platform-card-label"><strong>Quadruped</strong><span>View platform <i class="fas fa-arrow-right" aria-hidden="true"></i></span></span>
  </a>
  <a class="imu-gt-platform-card" href="/imuchallenge/platforms/handheld/">
    <img src="/img/imuchallenge/previews/handheld_train_0000.png" alt="Handheld training trajectory preview" width="417" height="268" loading="lazy" decoding="async">
    <span class="imu-gt-platform-card-label"><strong>Handheld</strong><span>View platform <i class="fas fa-arrow-right" aria-hidden="true"></i></span></span>
  </a>
</div>

<div class="imu-gt-divider"><span class="imu-gt-divider-mark">{% include imu-bot.html %}</span></div>

<div class="imu-gt-section-title-wrap">
<h2 class="imu-gt-section-title">Key Features</h2>
</div>

<div class="imu-gt-feature-grid">
  <div class="imu-gt-feature">
    <div class="imu-gt-feature-icon"><i class="fas fa-layer-group"></i></div>
    <div class="imu-gt-feature-content">
      <span class="imu-gt-feature-title">One Unified Model, Four Embodiments</span>
      <p class="imu-gt-feature-body">Train and val include platform labels, but the test set is anonymized — no platform id, no platform-revealing trajectory ids. A single model must handle car, drone, quadruped, and human at once; switching between per-platform experts isn't possible.</p>
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
      <p class="imu-gt-feature-body">Scored on macro-averaged Absolute Trajectory Error (ATE): predicted velocities are integrated into a path, aligned to ground truth via SE(3) Umeyama, then averaged per platform — an equal-weight mean across all four so no platform dominates.</p>
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
<h2 class="imu-gt-section-title">Task &amp; Evaluation</h2>
</div>

<div class="imu-gt-evaluation-grid">
  <article class="imu-gt-evaluation-card">
    <div class="imu-gt-evaluation-heading">
      <span class="imu-gt-evaluation-icon"><i class="fas fa-wave-square" aria-hidden="true"></i></span>
      <h3>The Task</h3>
    </div>
    <dl class="imu-gt-evaluation-list">
      <div>
        <dt>Input</dt>
        <dd>Raw 6-axis IMU: acceleration in m/s² and angular velocity in rad/s, sampled at 200 Hz.</dd>
      </div>
      <div>
        <dt>Context</dt>
        <dd>One-second windows of 200 samples, provided as sequences of 10 consecutive windows.</dd>
      </div>
      <div>
        <dt>Output</dt>
        <dd>Per-window 3D body-frame velocity <strong>v = (v<sub>x</sub>, v<sub>y</sub>, v<sub>z</sub>)</strong> in m/s.</dd>
      </div>
    </dl>
  </article>
  <article class="imu-gt-evaluation-card">
    <div class="imu-gt-evaluation-heading">
      <span class="imu-gt-evaluation-icon"><i class="fas fa-chart-line" aria-hidden="true"></i></span>
      <h3>Scoring</h3>
    </div>
    <dl class="imu-gt-evaluation-list">
      <div>
        <dt>Primary</dt>
        <dd>Macro-averaged Absolute Trajectory Error (ATE), with all four platforms weighted equally.</dd>
      </div>
      <div>
        <dt>Evaluation</dt>
        <dd>Organizers integrate predicted velocities with ground-truth orientation, then align and score each path.</dd>
      </div>
      <div>
        <dt>Splits</dt>
        <dd>Train for fitting, validation for model selection, and anonymized public/private test trajectories for ranking.</dd>
      </div>
    </dl>
  </article>
</div>

<div class="imu-gt-cta-row">
  <a class="imu-gt-button" href="/imuchallenge/setup/">Read the full protocol &rarr;</a>
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
    <div class="imu-gt-partner-mark imu-gt-partner-mark-amazon" aria-label="Amazon FAR">
      <span class="imu-gt-amazon-name">amazon</span>
      <span class="imu-gt-amazon-divider" aria-hidden="true"></span>
      <span class="imu-gt-amazon-group">FAR</span>
    </div>
    <span>Amazon FAR</span>
  </div>
  <div class="imu-gt-partner">
    <div class="imu-gt-partner-mark"><img src="/img/riLogo2019.svg" alt="Carnegie Mellon University Robotics Institute logo"></div>
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
    <time datetime="2026-07-09">2026-07-09</time>
    <span>The competition is live on Kaggle: <a href="https://www.kaggle.com/competitions/tartanimu-iros2026" target="_blank" rel="noopener">TartanIMU Challenge: Multi-Platform Inertial Odometry</a>.</span>
  </div>
  <div class="imu-gt-update-row">
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
