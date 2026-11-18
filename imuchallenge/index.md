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
  .imu-results-list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--imu-home-line);
  }
  .imu-result {
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr) auto;
    gap: 1.25rem;
    align-items: center;
    padding: 1.15rem 0;
    border-bottom: 1px solid var(--imu-home-line);
  }
  .imu-result-rank {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--imu-home-line);
    border-radius: 6px;
    background: #ffffff;
    color: var(--imu-home-ink);
    font-size: 1.05rem;
    font-weight: 800;
  }
  .imu-result.is-podium .imu-result-rank {
    border-color: var(--imu-home-accent);
    background: var(--imu-home-accent);
    color: #ffffff;
  }
  body.imuchallenge-home .content .imu-result h3 {
    margin: 0;
    color: var(--imu-home-ink);
    font-size: 1.05rem;
    font-weight: 800;
    -webkit-text-stroke: 0;
  }
  body.imuchallenge-home .content .imu-result p {
    margin: 0.2rem 0 0;
    color: var(--imu-home-muted);
    font-size: 0.86rem;
    line-height: 1.5;
  }
  .imu-result-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.45rem;
  }
  body.imuchallenge-home .content .imu-result-links a {
    display: inline-flex;
    min-height: 36px;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.7rem;
    border: 1px solid var(--imu-home-line);
    border-radius: 6px;
    background: #ffffff;
    color: var(--imu-home-ink);
    font-size: 0.82rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }
  body.imuchallenge-home .content .imu-result-links a:hover,
  body.imuchallenge-home .content .imu-result-links a:focus-visible {
    border-color: #d5b49c;
    background: #fff8f3;
    color: var(--imu-home-accent-dark);
  }
  .imu-result-links i { color: var(--imu-home-accent); }
  .imu-result-pending {
    color: var(--imu-home-muted);
    font-size: 0.82rem;
    font-style: italic;
  }
  @media (max-width: 700px) {
    .imu-result {
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 0.6rem 1rem;
    }
    .imu-result-links {
      grid-column: 2;
      justify-content: flex-start;
    }
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
    <p class="imu-workshop-lead">The challenge has concluded. Teams estimated 3D body-frame velocity from raw 6-axis IMU with one unified model across car, drone, quadruped, and handheld motion. Final results, slides, and model weights from the top teams are below.</p>
    <div class="imu-workshop-meta" aria-label="Challenge status">
      <span><i class="fas fa-flag-checkered" aria-hidden="true"></i> Competition concluded</span>
      <span><i class="fas fa-trophy" aria-hidden="true"></i> Top 10 announced</span>
      <span><i class="fas fa-calendar-alt" aria-hidden="true"></i> Leaderboard closed Sep 20, 2026</span>
    </div>
    <div class="imu-workshop-actions" aria-label="Challenge actions">
      <a class="imu-workshop-action" href="#results">
        <i class="fas fa-trophy" aria-hidden="true"></i><span>View Results</span>
      </a>
      <a class="imu-workshop-action is-secondary" href="https://www.kaggle.com/competitions/tartan-imu-challenge-iros2026/leaderboard" target="_blank" rel="noopener">
        <i class="fab fa-kaggle" aria-hidden="true"></i><span>Kaggle Leaderboard</span>
      </a>
      <a class="imu-workshop-action is-secondary" href="https://drive.google.com/drive/folders/1H4ZwVZdMNtb1O3xwV2_jTyKLPf3FhfHU?usp=sharing" target="_blank" rel="noopener">
        <i class="fas fa-video" aria-hidden="true"></i><span>Workshop Talks</span>
      </a>
      <a class="imu-workshop-action is-secondary" href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener">
        <i class="fab fa-github" aria-hidden="true"></i><span>TartanIMU Code</span>
      </a>
    </div>
  </div>
</header>

<nav class="imu-workshop-section-nav" aria-label="Challenge sections">
  <div class="imu-workshop-nav-inner">
    <a href="#results">Results</a>
    <a href="#overview">Overview</a>
    <a href="#platforms">Platforms</a>
    <a href="#protocol">Protocol</a>
    <a href="#partners">Partners</a>
    <a href="#updates">Updates</a>
    <a href="#citation">Citation</a>
  </div>
</nav>

<section class="imu-workshop-section is-muted" id="results">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Final results</p>
      <h2>Top 10 teams.</h2>
      <p>Each team shares its presentation slides, inference code, and a single unified model.</p>
    </div>

    <ol class="imu-results-list">
      <li class="imu-result is-podium">
        <span class="imu-result-rank" aria-label="Rank 1">1</span>
        <div><h3>Marco</h3><p>Slides, code, weights, and summary, pinned to exact commits</p></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/file/d/1fq8Jj3nYPb0eQ-QblSnSQCmauNQu14C_/view" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i>Talk</a>
          <a href="https://drive.google.com/drive/folders/1qbXadwk29wcOSYOYnum6SvOMxdFVS9Dr?usp=sharing" target="_blank" rel="noopener"><i class="fas fa-folder-open" aria-hidden="true"></i>Slides &amp; Model</a>
        </div>
      </li>
      <li class="imu-result is-podium">
        <span class="imu-result-rank" aria-label="Rank 2">2</span>
        <div><h3>Team SPARO</h3><p>Inha University &middot; Single model &middot; Code MIT, weights CC BY-NC 4.0</p></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/file/d/1QXYYytBEVGEOf__n8dScrQmZEqKfStGu/view" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i>Talk</a>
          <a href="https://drive.google.com/drive/folders/1poS6MMS40mzFJ6g7g0kEOhWf-r4zkUhi" target="_blank" rel="noopener"><i class="fas fa-file-powerpoint" aria-hidden="true"></i>Slides</a>
          <a href="https://huggingface.co/jivvon2/tartanimu-sparo" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i>Model</a>
        </div>
      </li>
      <li class="imu-result is-podium">
        <span class="imu-result-rank" aria-label="Rank 3">3</span>
        <div><h3>Haozhe Zhou</h3><p>Carnegie Mellon University</p></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/file/d/1ObGymxR9504VE6QjJrGDu4QeOScszJwH/view" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i>Talk</a>
          <a href="https://drive.google.com/drive/folders/1HgZgyBYo_EyavN8YRFIb6s5IK8s6mE7s?usp=drive_link" target="_blank" rel="noopener"><i class="fas fa-folder-open" aria-hidden="true"></i>Slides &amp; Model</a>
        </div>
      </li>
      <li class="imu-result">
        <span class="imu-result-rank" aria-label="Rank 4">4</span>
        <div><h3>AxisTilted2</h3><p>Single CalibratedIMU checkpoint &middot; Apache-2.0</p></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/file/d/1dQF0ec79sOx9dLJWU4vUMGOshTa0qEX_/view" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i>Talk</a>
          <a href="https://drive.google.com/drive/folders/1MBNj7mzGrYht4PLdlqyHCMD3qxyHBV7b" target="_blank" rel="noopener"><i class="fas fa-file-powerpoint" aria-hidden="true"></i>Slides</a>
          <a href="https://huggingface.co/AxisTilted2/tartanimu-iros2026" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i>Model</a>
        </div>
      </li>
      <li class="imu-result">
        <span class="imu-result-rank" aria-label="Rank 5">5</span>
        <div><h3>CoCEL</h3><p>POSTECH</p></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/file/d/1QN9FCkQ8L3uLhscuDBh4J41WLJ9aBe_Y/view" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i>Talk</a>
          <span class="imu-result-pending">Slides and model coming soon</span>
        </div>
      </li>
      <li class="imu-result">
        <span class="imu-result-rank" aria-label="Rank 6">6</span>
        <div><h3>Hack2Publish</h3><p>Single model &middot; Apache-2.0</p></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/file/d/1SVMYSSn6RLBpoptgk1c85PmH3wfdTR66/view" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i>Talk</a>
          <a href="https://drive.google.com/drive/folders/13YKrFrzSwG2ta43SxGIMBs1cclRpXHfp?usp=sharing" target="_blank" rel="noopener"><i class="fas fa-file-powerpoint" aria-hidden="true"></i>Slides</a>
          <a href="https://huggingface.co/mdhamidhosen/tartanimu-unified-hosen42" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i>Model</a>
          <a href="https://github.com/hamidhosen42/TartanIMU-Challenge-Multi-Platform-Inertial-Odometry" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i>Code</a>
        </div>
      </li>
      <li class="imu-result">
        <span class="imu-result-rank" aria-label="Rank 7">7</span>
        <div><h3>thisray</h3></div>
        <div class="imu-result-links"><span class="imu-result-pending">Materials coming soon</span></div>
      </li>
      <li class="imu-result">
        <span class="imu-result-rank" aria-label="Rank 8">8</span>
        <div><h3>ENIO</h3><p>University of Michigan &middot; Single model, raw 6-axis IMU only</p></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/file/d/1aT_vH-GsvEQ_1ZBmvQDFQPgErCxKt5BH/view" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i>Talk</a>
          <a href="https://drive.google.com/drive/folders/1LovJ_kgHop8wKWWLiCQabUnsrkzNUhO7?usp=sharing" target="_blank" rel="noopener"><i class="fas fa-file-powerpoint" aria-hidden="true"></i>Slides</a>
          <a href="https://huggingface.co/arattan7272/tartanimu-lnresnet" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i>Model</a>
        </div>
      </li>
      <li class="imu-result">
        <span class="imu-result-rank" aria-label="Rank 9">9</span>
        <div><h3>Lexxxxx</h3><p>Tunghai University &middot; Single model &middot; MIT</p></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/drive/folders/134HdxPPWaK0gf14gXOdUEgBwgPQqaB6L?usp=sharing" target="_blank" rel="noopener"><i class="fas fa-file-powerpoint" aria-hidden="true"></i>Slides</a>
          <a href="https://huggingface.co/LexHo/tartanimu-a3v20" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i>Model</a>
          <a href="https://github.com/Jadiouo/tartanimu-unified-io" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i>Code</a>
        </div>
      </li>
      <li class="imu-result">
        <span class="imu-result-rank" aria-label="Rank 10">10</span>
        <div><h3>ilytix</h3></div>
        <div class="imu-result-links">
          <a href="https://drive.google.com/file/d/1QXvvA2y-GTCBrJggExUhfl2B-SWpy0_M/view" target="_blank" rel="noopener"><i class="fas fa-play-circle" aria-hidden="true"></i>Talk</a>
          <a href="https://drive.google.com/drive/folders/1OJcIHm6sj7A-8V9Ya2Q_nofQ3YzidTOA?usp=sharing" target="_blank" rel="noopener"><i class="fas fa-folder-open" aria-hidden="true"></i>Materials</a>
          <a href="https://github.com/mohosin9602/inertialOdometrytartanimuC" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i>Code</a>
        </div>
      </li>
    </ol>

    <div class="imu-workshop-resource-row" aria-label="Results resources">
      <a href="https://drive.google.com/drive/folders/1H4ZwVZdMNtb1O3xwV2_jTyKLPf3FhfHU?usp=sharing" target="_blank" rel="noopener"><i class="fas fa-video" aria-hidden="true"></i><span>Workshop Invited Talks</span></a>
      <a href="https://drive.google.com/drive/folders/1g2e7CVwySSRISgyvQdIrc0eamdTiXukz?usp=sharing" target="_blank" rel="noopener"><i class="fas fa-users" aria-hidden="true"></i><span>Team Presentations (Remote)</span></a>
      <a href="https://www.kaggle.com/competitions/tartan-imu-challenge-iros2026/leaderboard" target="_blank" rel="noopener"><i class="fab fa-kaggle" aria-hidden="true"></i><span>Kaggle Leaderboard</span></a>
      <a href="/interoception/"><i class="fas fa-microphone" aria-hidden="true"></i><span>IROS 2026 Workshop</span></a>
    </div>
  </div>
</section>

<section class="imu-workshop-section" id="overview">
  <div class="imu-workshop-section-inner">
    <div class="imu-workshop-section-heading">
      <p class="imu-workshop-eyebrow">Challenge design</p>
      <h2>One benchmark across four motion domains.</h2>
      <p>Training and validation data include platform labels. The anonymized test set does not, so a single model had to generalize across radically different dynamics without switching between platform-specific experts.</p>
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
          <p>One submission had to handle car, drone, quadruped, and handheld trajectories at once.</p>
        </div>
      </article>
      <article class="imu-workshop-feature">
        <span class="imu-workshop-feature-icon"><i class="fas fa-eye-slash" aria-hidden="true"></i></span>
        <div>
          <h3>Platform-Blind Testing</h3>
          <p>Test labels and platform-revealing trajectory identifiers were hidden from participants.</p>
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
          <div><dt>TartanIMU Score</dt><dd><code>0.6 &times; (AVE / 0.7356384388) + 0.4 &times; (ATE20 / 3.1160277267)</code> &mdash; macro-averaged over the four platforms, each contributing 25&nbsp;%. <strong>Lower is better</strong>; an all-zero submission scores exactly 1.000.</dd></div>
          <div><dt>AVE &mdash; 60&nbsp;%</dt><dd>Absolute Velocity Error (m/s): the mean per-window Euclidean error <code>&#8214;v_pred &minus; v_gt&#8214;</code>.</dd></div>
          <div><dt>ATE20 &mdash; 40&nbsp;%</dt><dd>20&nbsp;m-segment Absolute Trajectory Error (m): predictions are integrated with ground-truth orientation, then each 20&nbsp;m segment is SE(3) (Umeyama) aligned before the RMS position error is taken.</dd></div>
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
      <p>The challenge is organized by CMU AirLab and Amazon FAR in conjunction with the IROS 2026 workshop on interoceptive perception, with support from the Shanghai Innovation Institute.</p>
    </div>

    <div class="imu-workshop-partners">
      <a href="https://theairlab.org/" target="_blank" rel="noopener" aria-label="CMU AirLab">
        <img src="/img/logos/Horizontal@2x.png" alt="CMU AirLab" width="600" height="147" loading="lazy" decoding="async">
      </a>
      <a href="https://github.com/amazon-far" target="_blank" rel="noopener" aria-label="Amazon FAR">
        <img src="/img/logos/amazon-far.png" alt="Amazon FAR" loading="lazy" decoding="async">
      </a>
      <a href="https://www.ri.cmu.edu/" target="_blank" rel="noopener" aria-label="Carnegie Mellon University Robotics Institute">
        <img src="/img/riLogo2019.svg" alt="Carnegie Mellon University Robotics Institute" loading="lazy" decoding="async">
      </a>
      <a href="https://www.sii.edu.cn/" target="_blank" rel="noopener" aria-label="Shanghai Innovation Institute">
        <img src="/img/logos/sii-logo.png" alt="Shanghai Innovation Institute" loading="lazy" decoding="async">
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
      <h2>Challenge timeline.</h2>
    </div>

    <div class="imu-workshop-updates">
      <article class="imu-workshop-update is-latest">
        <time datetime="2026-10-04">Oct 04, 2026</time>
        <div><span>Latest</span><p>Top teams presented their methods in a remote session held after the workshop. <a href="https://drive.google.com/drive/folders/1g2e7CVwySSRISgyvQdIrc0eamdTiXukz?usp=sharing" target="_blank" rel="noopener">Watch the team presentations</a>.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-09-27">Sep 27, 2026</time>
        <div><p><strong>Final results are published.</strong> See the <a href="#results">Top 10 teams</a> with their slides, inference code, and model weights.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-09-27">Sep 27, 2026</time>
        <div><p>The <a href="/interoception/">IROS 2026 interoceptive perception workshop</a> took place. <a href="https://drive.google.com/drive/folders/1H4ZwVZdMNtb1O3xwV2_jTyKLPf3FhfHU?usp=sharing" target="_blank" rel="noopener">Watch the invited talks and panels</a>.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-09-20">Sep 20, 2026</time>
        <div><p>The Kaggle leaderboard closed.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-07-09">Jul 09, 2026</time>
        <div><p>The competition launched on Kaggle: <a href="https://www.kaggle.com/competitions/tartan-imu-challenge-iros2026" target="_blank" rel="noopener">TartanIMU Challenge: Multi-Platform Inertial Odometry</a>.</p></div>
      </article>
      <article class="imu-workshop-update">
        <time datetime="2026-05-30">May 30, 2026</time>
        <div><p>The dataset, platform pages, and challenge website launched. The data remains available from the <a href="/imuchallenge/data/">challenge data page</a>.</p></div>
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
