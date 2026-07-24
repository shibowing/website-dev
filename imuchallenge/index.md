---
title: IMU Odometry Challenge
subtitle: Cross-Platform Inertial Positioning Benchmark
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/
---

<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">

<header class="imu-workshop-hero" aria-labelledby="imu-challenge-title">
  <video class="imu-workshop-hero-video" autoplay loop muted playsinline preload="metadata" poster="/img/imuchallenge/hero_poster.jpg" aria-hidden="true">
    <source src="/img/imuchallenge/hero_preview.mp4" type="video/mp4">
  </video>
  <div class="imu-workshop-hero-shade" aria-hidden="true"></div>
  <div class="imu-workshop-hero-inner">
    <p class="imu-workshop-kicker">IROS 2026 Competition &middot; Cross-Platform Inertial Positioning</p>
    <h1 id="imu-challenge-title">
      IMU Odometry Challenge
      <span>One model. Four embodiments. Raw IMU only.</span>
    </h1>
    <p class="imu-workshop-lead">Estimate 3D body-frame velocity from raw 6-axis IMU with one unified model across car, drone, quadruped, and handheld motion.</p>
    <div class="imu-workshop-meta" aria-label="Challenge status">
      <span><i class="fas fa-trophy" aria-hidden="true"></i> Live on Kaggle</span>
      <span><i class="fas fa-robot" aria-hidden="true"></i> Four platforms</span>
      <span><i class="fas fa-wave-square" aria-hidden="true"></i> 200 Hz measurements</span>
    </div>
    <div class="imu-workshop-actions" aria-label="Challenge actions">
      <a class="imu-workshop-action" href="https://www.kaggle.com/competitions/tartanimu-iros2026" target="_blank" rel="noopener">
        <i class="fab fa-kaggle" aria-hidden="true"></i><span>Compete on Kaggle</span>
      </a>
      <a class="imu-workshop-action is-secondary" href="https://forms.gle/7rUg7ENctuBU9kTN8" target="_blank" rel="noopener">
        <i class="fas fa-user-plus" aria-hidden="true"></i><span>Register Team</span>
      </a>
      <a class="imu-workshop-action is-secondary" href="/imuchallenge/setup/">
        <i class="fas fa-rocket" aria-hidden="true"></i><span>Setup Guide</span>
      </a>
    </div>
  </div>
</header>

<nav class="imu-workshop-section-nav" aria-label="Challenge sections">
  <div class="imu-workshop-nav-inner">
    <a href="#overview">Overview</a>
    <a href="#platforms">Platforms</a>
    <a href="#protocol">Protocol</a>
    <a href="#partners">Partners</a>
    <a href="#updates">Updates</a>
    <a href="#citation">Citation</a>
  </div>
</nav>

<section class="imu-workshop-section" id="overview">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Challenge design</p>
      <h2>One benchmark across four motion domains.</h2>
      <p>Training and validation data include platform labels. The anonymized test set does not, requiring a single model to generalize across radically different dynamics without switching between platform-specific experts.</p>
    </div>

    <dl class="imu-workshop-stats" aria-label="Dataset statistics">
      <div><dt>Platforms</dt><dd>4</dd></div>
      <div><dt>Windows</dt><dd>~136K</dd></div>
      <div><dt>Total Duration</dt><dd>37.9 hrs</dd></div>
      <div><dt>Sample Rate</dt><dd>200 Hz</dd></div>
    </dl>

    <div class="imu-workshop-feature-grid">
      <article class="imu-workshop-feature">
        <span class="imu-workshop-feature-icon"><i class="fas fa-layer-group" aria-hidden="true"></i></span>
        <div>
          <h3>One Unified Model</h3>
          <p>One submission must handle car, drone, quadruped, and handheld trajectories at once.</p>
        </div>
      </article>
      <article class="imu-workshop-feature">
        <span class="imu-workshop-feature-icon"><i class="fas fa-eye-slash" aria-hidden="true"></i></span>
        <div>
          <h3>Platform-Blind Testing</h3>
          <p>Test labels and platform-revealing trajectory identifiers remain hidden from participants.</p>
        </div>
      </article>
      <article class="imu-workshop-feature">
        <span class="imu-workshop-feature-icon"><i class="fas fa-route" aria-hidden="true"></i></span>
        <div>
          <h3>Trajectory-Level Evaluation</h3>
          <p>Predicted velocities are integrated, aligned with SE(3) Umeyama, and scored equally across platforms.</p>
        </div>
      </article>
      <article class="imu-workshop-feature">
        <span class="imu-workshop-feature-icon"><i class="fas fa-code-branch" aria-hidden="true"></i></span>
        <div>
          <h3>Open TartanIMU Baseline</h3>
          <p>Reference checkpoints, training code, and a browser demo provide a reproducible starting point.</p>
        </div>
      </article>
    </div>

    <div class="imu-workshop-resource-row" aria-label="Challenge resources">
      <a href="/imuchallenge/data/"><i class="fas fa-database" aria-hidden="true"></i><span>Browse Dataset</span></a>
      <a href="/imuchallenge/data/explorer/"><i class="fas fa-chart-area" aria-hidden="true"></i><span>Open Data Explorer</span></a>
      <a href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i><span>TartanIMU Code</span></a>
      <a href="https://huggingface.co/spaces/Tartan-IMU/imu_odometry_challenge_demo" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i><span>Run Live Demo</span></a>
    </div>
  </div>
</section>

<section class="imu-workshop-section is-muted" id="platforms">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Benchmark coverage</p>
      <h2>Four embodiments with distinct motion dynamics.</h2>
      <p>Each platform page provides split statistics, trajectory previews, sensor characteristics, and domain-specific evaluation context.</p>
    </div>

    <div class="imu-workshop-platform-grid">
      <a class="imu-workshop-platform" href="/imuchallenge/platforms/car/">
        <img src="/img/imuchallenge/previews/car_train_0000.png" alt="Car training trajectory preview" width="423" height="268" loading="lazy" decoding="async">
        <span class="imu-workshop-platform-body">
          <span><strong>Car</strong><small>Ground vehicle motion</small></span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </a>
      <a class="imu-workshop-platform" href="/imuchallenge/platforms/drone/">
        <img src="/img/imuchallenge/previews/drone_train_0000.png" alt="Drone training trajectory preview" width="426" height="268" loading="lazy" decoding="async">
        <span class="imu-workshop-platform-body">
          <span><strong>Drone</strong><small>Aerial six-degree-of-freedom motion</small></span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </a>
      <a class="imu-workshop-platform" href="/imuchallenge/platforms/quadruped/">
        <img src="/img/imuchallenge/previews/quadruped_train_0000.png" alt="Quadruped training trajectory preview" width="423" height="268" loading="lazy" decoding="async">
        <span class="imu-workshop-platform-body">
          <span><strong>Quadruped</strong><small>Contact-rich legged locomotion</small></span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </a>
      <a class="imu-workshop-platform" href="/imuchallenge/platforms/handheld/">
        <img src="/img/imuchallenge/previews/handheld_train_0000.png" alt="Handheld training trajectory preview" width="417" height="268" loading="lazy" decoding="async">
        <span class="imu-workshop-platform-body">
          <span><strong>Handheld</strong><small>Human-scale free motion</small></span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </a>
    </div>
  </div>
</section>

<section class="imu-workshop-section" id="protocol">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Protocol at a glance</p>
      <h2>From raw inertial windows to ranked trajectories.</h2>
      <p>The model interface stays compact while evaluation measures the accumulated motion that matters in deployment.</p>
    </div>

    <div class="imu-workshop-protocol-grid">
      <article class="imu-workshop-protocol-card">
        <div class="imu-workshop-protocol-heading">
          <span><i class="fas fa-wave-square" aria-hidden="true"></i></span>
          <div><small>01</small><h3>The Task</h3></div>
        </div>
        <dl>
          <div><dt>Input</dt><dd>Raw 6-axis IMU: acceleration in m/s² and angular velocity in rad/s, sampled at 200 Hz.</dd></div>
          <div><dt>Context</dt><dd>One-second windows of 200 samples, provided as sequences of 10 consecutive windows.</dd></div>
          <div><dt>Output</dt><dd>Per-window 3D body-frame velocity <strong>v = (v<sub>x</sub>, v<sub>y</sub>, v<sub>z</sub>)</strong> in m/s.</dd></div>
        </dl>
      </article>
      <article class="imu-workshop-protocol-card">
        <div class="imu-workshop-protocol-heading">
          <span><i class="fas fa-chart-line" aria-hidden="true"></i></span>
          <div><small>02</small><h3>Scoring</h3></div>
        </div>
        <dl>
          <div><dt>Primary</dt><dd>Macro-averaged Absolute Trajectory Error (ATE), with all four platforms weighted equally.</dd></div>
          <div><dt>Evaluation</dt><dd>Organizers integrate predicted velocities with ground-truth orientation, then align and score each path.</dd></div>
          <div><dt>Splits</dt><dd>Train for fitting, validation for selection, and anonymized public/private test trajectories for ranking.</dd></div>
        </dl>
      </article>
    </div>

    <a class="imu-workshop-text-link" href="/imuchallenge/setup/">Read the complete setup and evaluation protocol <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
</section>

<section class="imu-workshop-section is-muted" id="partners">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Organizers and partners</p>
      <h2>Built by teams working on robust robot perception.</h2>
      <p>The challenge is organized by CMU AirLab and Amazon FAR in conjunction with the IROS 2026 workshop on interoceptive perception.</p>
    </div>

    <div class="imu-workshop-partners">
      <a href="https://theairlab.org/" target="_blank" rel="noopener" aria-label="CMU AirLab">
        <img src="/img/logos/Horizontal@2x.png" alt="CMU AirLab" width="600" height="147" loading="lazy" decoding="async">
      </a>
      <div class="imu-workshop-amazon" aria-label="Amazon FAR">
        <span>amazon</span><i aria-hidden="true"></i><strong>FAR</strong>
      </div>
      <a href="https://www.ri.cmu.edu/" target="_blank" rel="noopener" aria-label="Carnegie Mellon University Robotics Institute">
        <img src="/img/riLogo2019.svg" alt="Carnegie Mellon University Robotics Institute" loading="lazy" decoding="async">
      </a>
    </div>

    <div class="imu-workshop-inline-links">
      <a class="imu-workshop-text-link" href="/imuchallenge/about/">Meet the organizers <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
      <a class="imu-workshop-text-link" href="/interoception/">Visit the IROS 2026 workshop <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
    </div>
  </div>
</section>

<section class="imu-workshop-section" id="updates">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Announcements</p>
      <h2>Challenge updates.</h2>
    </div>

    <div class="imu-workshop-updates">
      <article class="imu-workshop-update is-latest">
        <time datetime="2026-07-09">Jul 09, 2026</time>
        <div><span>Latest</span><p>The competition is live on Kaggle: <a href="https://www.kaggle.com/competitions/tartanimu-iros2026" target="_blank" rel="noopener">TartanIMU Challenge: Multi-Platform Inertial Odometry</a>.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-05-30">May 30, 2026</time>
        <div><p>The official dataset release hub is available from the <a href="/imuchallenge/data/">challenge data page</a>.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-05-30">May 30, 2026</time>
        <div><p>Platform pages for Car, Drone, Quadruped, and Handheld are published.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-05-30">May 30, 2026</time>
        <div><p>The initial IMU Odometry Challenge website and benchmark structure launched.</p></div>
      </article>
    </div>
  </div>
</section>

<section class="imu-workshop-section is-muted" id="citation">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Research resources</p>
      <h2>Citation and reference models.</h2>
      <p>Run the TartanIMU specialist models in the <a href="https://huggingface.co/spaces/Tartan-IMU/imu_odometry_challenge_demo" target="_blank" rel="noopener">Hugging Face demo</a>. Cite the paper and benchmark when using these resources.</p>
    </div>

    <div class="imu-workshop-citation-grid">
      <article class="imu-workshop-citation-block">
        <h3>TartanIMU (CVPR 2025)</h3>
        <pre><code>@inproceedings{zhao2025tartanimu,
  title={Tartan IMU: A Light Foundation Model for Inertial
         Positioning in Robotics},
  author={Zhao, Shibo and Yagnyatinskiy, Maxim and others},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer
             Vision and Pattern Recognition (CVPR)},
  year={2025},
  url={https://openaccess.thecvf.com/content/CVPR2025/papers/
       Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_
       Positioning_in_CVPR_2025_paper.pdf}
}</code></pre>
      </article>
      <article class="imu-workshop-citation-block">
        <h3>IMU Odometry Challenge</h3>
        <pre><code>@misc{imuchallenge2026,
  title={IMU Odometry Challenge: Cross-Platform Inertial
         Positioning Benchmark},
  author={CMU AirLab and Super Odometry Group},
  year={2026},
  howpublished={\url{https://superodometry.com/imuchallenge/}},
  note={Dataset and benchmark challenge page}
}</code></pre>
      </article>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = Array.from(document.querySelectorAll('.imu-workshop-section-nav a'));
    const sections = navLinks
      .map(function(link) { return document.querySelector(link.getAttribute('href')); })
      .filter(Boolean);
    let ticking = false;

    function updateActiveSection() {
      const marker = window.scrollY + 150;
      let active = sections[0];

      sections.forEach(function(section) {
        if (section.offsetTop <= marker) active = section;
      });

      navLinks.forEach(function(link) {
        const isActive = active && link.getAttribute('href') === '#' + active.id;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    }, { passive: true });
    updateActiveSection();

    const video = document.querySelector('.imu-workshop-hero-video');
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) video.play().catch(function() {});
        else video.pause();
      });
    }, { threshold: 0.1 });
    observer.observe(video);
  });
</script>
