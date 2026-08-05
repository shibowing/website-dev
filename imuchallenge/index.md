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

<style>
  .imu-workshop-wechat-dialog {
    width: min(430px, calc(100% - 2rem));
    max-height: calc(100vh - 2rem);
    margin: auto;
    padding: 1.5rem;
    overflow-y: auto;
    border: 1px solid #e3e5e8;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 24px 70px rgba(15, 18, 23, 0.28);
    color: #25282d;
    text-align: center;
  }
  .imu-workshop-wechat-dialog::backdrop { background: rgba(15, 18, 23, 0.72); }
  .imu-workshop-wechat-close {
    position: absolute;
    top: 0.65rem;
    right: 0.65rem;
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    border: 0;
    background: transparent;
    color: #666b72;
    cursor: pointer;
  }
  .imu-workshop-wechat-close:hover,
  .imu-workshop-wechat-close:focus-visible { color: #8f3d00; }
  body.imuchallenge-home .content .imu-workshop-wechat-dialog h2 {
    margin: 0 2rem 0.45rem;
    color: #25282d;
    font-size: 1.35rem;
    letter-spacing: 0;
  }
  body.imuchallenge-home .content .imu-workshop-wechat-dialog > p {
    margin: 0 auto 1rem;
    color: #656a72;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  #imu-wechat-qr[hidden], #imu-wechat-expired[hidden] { display: none; }
  body.imuchallenge-home .content #imu-wechat-qr img {
    display: block;
    width: min(100%, 360px);
    height: auto;
    margin: 0 auto;
  }
  .imu-workshop-wechat-validity {
    display: flex;
    gap: 0.55rem;
    margin: 0.85rem auto;
    padding: 0.7rem 0.8rem;
    border-left: 3px solid #c45a0e;
    background: #fff7f1;
    color: #6b3a18;
    font-size: 0.8rem;
    line-height: 1.45;
    text-align: left;
  }
  .imu-workshop-wechat-validity i { margin-top: 0.15rem; color: #c45a0e; }
  body.imuchallenge-home .content a.imu-workshop-wechat-full {
    display: inline-flex;
    min-height: 40px;
    align-items: center;
    gap: 0.45rem;
    padding: 0.55rem 0.85rem;
    border: 1px solid #c45a0e;
    border-radius: 6px;
    color: #8f3d00;
    font-size: 0.84rem;
    font-weight: 700;
    text-decoration: none;
  }
  body.imuchallenge-home .content a.imu-workshop-wechat-full:hover,
  body.imuchallenge-home .content a.imu-workshop-wechat-full:focus-visible {
    background: #c45a0e;
    color: #ffffff;
  }
  .imu-workshop-wechat-expired {
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #e3e5e8;
    border-radius: 6px;
    background: #f6f7f8;
    text-align: left;
  }
  .imu-workshop-wechat-expired i { color: #c45a0e; }
  body.imuchallenge-home .content .imu-workshop-wechat-expired p {
    margin: 0.45rem 0 0;
    color: #555a62;
    font-size: 0.88rem;
    line-height: 1.5;
  }
  @media (max-width: 480px) {
    .imu-workshop-wechat-dialog { padding: 1.25rem 1rem; }
    body.imuchallenge-home .content .imu-workshop-wechat-dialog h2 { font-size: 1.15rem; }
  }
</style>

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
      <span><i class="fas fa-calendar-alt" aria-hidden="true"></i> Final submission: Sep 20, 23:55 UTC</span>
    </div>
    <div class="imu-workshop-actions" aria-label="Challenge actions">
      <a class="imu-workshop-action" href="https://www.kaggle.com/competitions/tartan-imu-challenge-iros2026" target="_blank" rel="noopener">
        <i class="fab fa-kaggle" aria-hidden="true"></i><span>Compete on Kaggle</span>
      </a>
      <a class="imu-workshop-action is-secondary" href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener">
        <i class="fab fa-github" aria-hidden="true"></i><span>TartanIMU Code</span>
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
      <a class="imu-workshop-text-link" id="imu-wechat-open" href="/img/imuchallenge/wechat_2026_imu_challenge.png" aria-haspopup="dialog" aria-controls="imu-wechat-dialog">
        <i class="fab fa-weixin" aria-hidden="true"></i> Join WeChat <i class="fas fa-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</section>

<dialog class="imu-workshop-wechat-dialog" id="imu-wechat-dialog" aria-labelledby="imu-wechat-title" aria-describedby="imu-wechat-description">
  <button class="imu-workshop-wechat-close" type="button" id="imu-wechat-close" aria-label="Close WeChat dialog" title="Close">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
  <h2 id="imu-wechat-title">2026 IMU Challenge on WeChat</h2>
  <p id="imu-wechat-description">Community discussions and organizer updates for challenge participants.</p>
  <div id="imu-wechat-qr">
    <img src="/img/imuchallenge/wechat_2026_imu_challenge.png" alt="WeChat QR code for the 2026 IMU Challenge group" width="1285" height="1448">
    <div class="imu-workshop-wechat-validity">
      <i class="fas fa-calendar-alt" aria-hidden="true"></i>
      <span>This invite QR is valid until August 12, 2026.</span>
    </div>
    <a class="imu-workshop-wechat-full" href="/img/imuchallenge/wechat_2026_imu_challenge.png" target="_blank" rel="noopener">
      <i class="fas fa-expand" aria-hidden="true"></i><span>Open full-size QR</span>
    </a>
  </div>
  <div class="imu-workshop-wechat-expired" id="imu-wechat-expired" hidden>
    <i class="fas fa-clock" aria-hidden="true"></i>
    <p>This WeChat invite expired on August 12, 2026. Please request an updated code from the organizers through <a href="https://discord.com/invite/Huf2GJx32y" target="_blank" rel="noopener">Discord</a>.</p>
  </div>
</dialog>

<section class="imu-workshop-section" id="updates">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Announcements</p>
      <h2>Challenge updates.</h2>
    </div>

    <div class="imu-workshop-updates">
      <article class="imu-workshop-update is-latest">
        <time datetime="2026-08-01">Aug 01, 2026</time>
        <div><span>Latest</span><p>Final Kaggle submissions, the technical report, and model weights are due <strong>September 20, 2026, at 23:55 UTC</strong>. See the <a href="/imuchallenge/setup/#schedule-rules-and-leaderboard">rules timeline</a>.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-07-09">Jul 09, 2026</time>
        <div><p>The competition is live on Kaggle: <a href="https://www.kaggle.com/competitions/tartan-imu-challenge-iros2026" target="_blank" rel="noopener">TartanIMU Challenge: Multi-Platform Inertial Odometry</a>.</p></div>
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
        <pre><code>@InProceedings{Zhao_2025_CVPR,
  author    = {Zhao, Shibo and Zhou, Sifan and Blanchard,
               Raphael and Qiu, Yuheng and Wang, Wenshan and
               Scherer, Sebastian},
  title     = {Tartan IMU: A Light Foundation Model for
               Inertial Positioning in Robotics},
  booktitle = {Proceedings of the IEEE/CVF Conference on
               Computer Vision and Pattern Recognition (CVPR)},
  month     = {June},
  year      = {2025},
  pages     = {22520-22529}
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

    const wechatTrigger = document.getElementById("imu-wechat-open");
    const wechatDialog = document.getElementById("imu-wechat-dialog");
    const wechatClose = document.getElementById("imu-wechat-close");
    const wechatQr = document.getElementById("imu-wechat-qr");
    const wechatExpired = document.getElementById("imu-wechat-expired");

    if (wechatTrigger && wechatDialog && wechatClose && wechatQr && wechatExpired && typeof wechatDialog.showModal === "function") {
      wechatTrigger.addEventListener("click", function(event) {
        event.preventDefault();
        const inviteExpired = Date.now() >= Date.parse("2026-08-13T00:00:00+08:00");
        wechatQr.hidden = inviteExpired;
        wechatExpired.hidden = !inviteExpired;
        wechatDialog.showModal();
      });
      wechatClose.addEventListener("click", function() { wechatDialog.close(); });
      wechatDialog.addEventListener("click", function(event) {
        const bounds = wechatDialog.getBoundingClientRect();
        const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
        if (!inside) wechatDialog.close();
      });
    }

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
