---
title: "IROS'26 Workshop: Beyond Exteroception"
subtitle: "Interoceptive Perception for Resilient Robotics — Tentative: Sep 27, 2026"
layout: page
show_sidebar: false
hide_footer: true
hide_hero: true
permalink: /interoception/
hero_height: is-large
hero_image: /img/IROS_2026_tab/pittsburgh_from_pdf.jpg
---

<!-- Additional fonts and styles -->
<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<style>
  :root {
    --workshop-accent: #c45a0e;
    --workshop-accent-dark: #8f3d00;
    --workshop-ink: #17191d;
    --workshop-muted: #62666d;
    --workshop-line: #e2e4e8;
    --workshop-surface: #f6f7f8;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5.5rem;
  }

  body {
    overflow-x: hidden;
    color: var(--workshop-ink);
    background: #fff;
    font-family: 'Google Sans', 'Noto Sans', sans-serif;
  }

  .content .workshop-hero {
    position: relative;
    left: 50%;
    width: 100vw;
    min-height: 580px;
    margin: -3rem 0 0 -50vw;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    background:
      linear-gradient(90deg, rgba(14, 17, 22, 0.94) 0%, rgba(14, 17, 22, 0.76) 48%, rgba(14, 17, 22, 0.24) 100%),
      linear-gradient(0deg, rgba(14, 17, 22, 0.72) 0%, rgba(14, 17, 22, 0) 48%),
      url('/img/IROS_2026_tab/pittsburgh_from_pdf.jpg') center 62% / cover no-repeat;
  }

  .workshop-hero::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 5px;
    background: var(--workshop-accent);
  }

  .workshop-hero-inner {
    position: relative;
    z-index: 1;
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 5rem 0 4.25rem;
  }

  .content .workshop-kicker {
    margin: 0 0 1rem;
    color: #ffd8bc;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-align: left;
    text-transform: uppercase;
  }

  .content #main-title {
    max-width: 880px;
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 3.75rem;
    font-weight: 800;
    line-height: 1.02;
    letter-spacing: 0;
    text-align: left;
  }

  .content #main-title span {
    display: block;
    margin-top: 0.65rem;
    color: #fff;
    font-size: 0.48em;
    font-weight: 600;
    line-height: 1.25;
  }

  .workshop-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1.4rem;
    margin-top: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .workshop-meta span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
  }

  .workshop-meta i {
    color: #ffd8bc;
  }

  .workshop-hero .cta-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.65rem;
    max-width: 820px;
    margin-top: 1.5rem;
  }

  .content .challenge-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 46px;
    padding: 0.72rem 1rem;
    border: 1px solid var(--workshop-accent);
    border-radius: 6px;
    background: var(--workshop-accent);
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  .content .challenge-cta:hover {
    border-color: #fff;
    background: #fff;
    color: var(--workshop-accent-dark);
  }

  .content .challenge-cta.is-secondary {
    border-color: rgba(255, 255, 255, 0.58);
    background: rgba(10, 12, 16, 0.26);
    color: #fff;
    backdrop-filter: blur(8px);
  }

  .content .challenge-cta.is-secondary:hover {
    border-color: #fff;
    background: #fff;
    color: var(--workshop-accent-dark);
  }

  .content .cta-status {
    flex-basis: 100%;
    margin: 0.1rem 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.88rem;
    text-align: left;
  }

  .workshop-section-nav {
    position: sticky;
    z-index: 30;
    top: 0;
    width: 100%;
    margin: 0;
    background: transparent;
    isolation: isolate;
  }

  .workshop-section-nav::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    border-bottom: 1px solid var(--workshop-line);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 8px 24px rgba(19, 24, 31, 0.05);
    backdrop-filter: blur(12px);
  }

  .workshop-section-nav .nav-inner {
    display: flex;
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .workshop-section-nav .nav-inner::-webkit-scrollbar {
    display: none;
  }

  .content .workshop-section-nav a {
    position: relative;
    flex: 0 0 auto;
    padding: 1rem 1.1rem;
    color: #4d5158;
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
  }

  .content .workshop-section-nav a:first-child {
    padding-left: 0;
  }

  .workshop-section-nav a::after {
    content: '';
    position: absolute;
    right: 1.1rem;
    bottom: -1px;
    left: 1.1rem;
    height: 3px;
    background: transparent;
  }

  .workshop-section-nav a:first-child::after {
    left: 0;
  }

  .content .workshop-section-nav a:hover,
  .content .workshop-section-nav a.active {
    color: var(--workshop-accent-dark);
  }

  .workshop-section-nav a.active::after {
    background: var(--workshop-accent);
  }

  .content section.content-section {
    position: relative;
    left: 50%;
    width: 100vw;
    max-width: none;
    margin: 0 0 0 -50vw;
    padding: 5rem 1.5rem;
    border-top: 1px solid var(--workshop-line);
    background: #fff;
  }

  .content section.content-section:nth-of-type(even) {
    background: var(--workshop-surface);
  }

  .content-section .container {
    width: min(1080px, 100%);
    max-width: 1080px;
    margin: 0 auto;
  }

  .content-section .column.is-four-fifths {
    width: 100%;
    max-width: 940px;
    flex: none;
  }

  .content .content-section .title.is-2 {
    position: relative;
    margin: 0 0 2.25rem;
    padding-bottom: 0.8rem;
    color: var(--workshop-ink);
    font-size: 2.1rem;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: 0;
    text-align: left;
  }

  .content-section .title.is-2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 54px;
    height: 4px;
    background: var(--workshop-accent);
  }

  .content .content-section .title.is-4 {
    color: var(--workshop-ink);
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 0;
  }

  .content .content-section p {
    color: var(--workshop-ink);
    font-size: 1.02rem;
    line-height: 1.82;
    text-align: left;
  }

  .content .content-section .section-intro {
    max-width: 760px;
    margin: -1.25rem 0 2.25rem;
    color: var(--workshop-muted);
  }

  .dates-list {
    border: 0;
  }

  .date-row {
    position: relative;
    display: grid;
    grid-template-columns: minmax(160px, 205px) minmax(0, 1fr);
    gap: 2rem;
    align-items: baseline;
    padding: 1.15rem 1.25rem 1.15rem 1.65rem;
    border: 0;
    border-left: 2px solid #d8dadd;
  }

  .date-row::before {
    content: '';
    position: absolute;
    top: 1.6rem;
    left: -7px;
    width: 12px;
    height: 12px;
    border: 3px solid var(--workshop-accent);
    border-radius: 50%;
    background: #fff;
  }

  .date-row time {
    color: var(--workshop-accent-dark);
    font-size: 0.95rem;
    font-weight: 700;
  }

  .content .date-row p {
    margin: 0;
    font-size: 0.98rem;
  }

  .content .timeline-note {
    margin: 1.25rem 0 0;
    color: var(--workshop-muted);
    font-size: 0.88rem;
  }

  .topic-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--workshop-line);
    list-style: none;
  }

  .content .topic-list li {
    position: relative;
    margin: 0;
    padding: 0.9rem 1.5rem 0.9rem 1.25rem;
    border-bottom: 1px solid var(--workshop-line);
    background: transparent;
    color: #373a40;
    font-size: 0.95rem;
  }

  .topic-list li::before {
    content: '';
    position: absolute;
    top: 1.42rem;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--workshop-accent);
  }

  .speaker-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1.25rem;
  }

  .speaker-card {
    min-width: 0;
    padding: 1.5rem 1.25rem;
    border: 1px solid var(--workshop-line);
    border-radius: 8px;
    background: #fff;
    text-align: center;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  .speaker-card:hover {
    border-color: #d5b49c;
    box-shadow: 0 12px 30px rgba(30, 34, 40, 0.08);
    transform: translateY(-2px);
  }

  .content .speaker-card img {
    width: 132px;
    height: 132px;
    margin: 0 auto 1rem;
    border: 4px solid #fff;
    border-radius: 50%;
    outline: 1px solid #dfe1e4;
    box-shadow: none;
    object-fit: cover;
  }

  .content .speaker-card p {
    text-align: center;
  }

  .content .speaker-card .speaker-name {
    margin: 0 0 0.3rem;
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.3;
  }

  .content .speaker-card .speaker-name a {
    color: var(--workshop-ink);
    text-decoration: none;
  }

  .content .speaker-card .speaker-name a:hover {
    color: var(--workshop-accent-dark);
    text-decoration: underline;
  }

  .content .speaker-card .speaker-role,
  .content .speaker-card .speaker-affiliation,
  .content .speaker-card .speaker-topic {
    font-size: 0.84rem;
    line-height: 1.45;
  }

  .content .speaker-card .speaker-role {
    margin: 0;
    color: #555a62;
  }

  .content .speaker-card .speaker-affiliation {
    margin: 0.25rem 0 0;
    color: #7b7f86;
  }

  .content .speaker-card .speaker-topic {
    margin: 0.85rem 0 0;
    padding-top: 0.75rem;
    border-top: 1px solid var(--workshop-line);
    color: var(--workshop-accent-dark);
    font-style: normal;
    font-weight: 700;
  }

  .content .schedule-table {
    width: 100%;
    overflow: hidden;
    border: 1px solid var(--workshop-line);
    border-radius: 8px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: none;
  }

  .schedule-table th {
    padding: 0.9rem 1rem;
    border: 0;
    background: var(--workshop-ink);
    color: #fff;
    font-size: 0.83rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: left;
    text-transform: uppercase;
  }

  .schedule-table td {
    padding: 0.9rem 1rem;
    border: 0;
    border-bottom: 1px solid var(--workshop-line);
    color: #34373c;
    font-size: 0.91rem;
    line-height: 1.5;
    text-align: left;
    vertical-align: middle;
  }

  .schedule-table tr:last-child td {
    border-bottom: 0;
  }

  .schedule-table tr:hover {
    background: #fff8f3;
  }

  .schedule-table tr.break-row {
    background: #f1f2f3;
  }

  .schedule-table tr.break-row:hover {
    background: #eceeef;
  }

  @media (max-width: 900px) {
    .content .workshop-hero {
      min-height: 540px;
      background-position: 58% 62%;
    }

    .content #main-title {
      font-size: 3rem;
    }

    .speaker-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 720px) {
    .content .schedule-table {
      display: block;
      overflow: visible;
      border: 0;
      border-radius: 0;
      background: transparent;
    }

    .schedule-table tbody,
    .schedule-table tr,
    .schedule-table td {
      display: block;
      width: 100%;
    }

    .schedule-table tr:first-child {
      display: none;
    }

    .schedule-table tr {
      margin-bottom: 0.75rem;
      overflow: hidden;
      border: 1px solid var(--workshop-line);
      border-radius: 6px;
      background: #fff;
    }

    .schedule-table td {
      display: grid;
      grid-template-columns: 4.5rem minmax(0, 1fr);
      gap: 0.75rem;
      padding: 0.7rem 0.8rem;
      border-bottom: 1px solid var(--workshop-line);
      font-size: 0.87rem;
    }

    .schedule-table td:last-child {
      border-bottom: 0;
    }

    .schedule-table td::before {
      color: #6b7078;
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .schedule-table td:nth-child(1)::before { content: 'Time'; }
    .schedule-table td:nth-child(2)::before { content: 'Speaker'; }
    .schedule-table td:nth-child(3)::before { content: 'Topic'; }
    .schedule-table .break-row td[colspan]::before { content: 'Session'; }
  }

  @media (max-width: 640px) {
    .content .workshop-hero {
      min-height: 620px;
      margin-top: -1.5rem;
      background-position: 64% center;
    }

    .workshop-hero-inner,
    .workshop-section-nav .nav-inner {
      width: calc(100% - 2rem);
    }

    .workshop-hero-inner {
      padding: 4rem 0 3rem;
    }

    .content #main-title {
      font-size: 2.35rem;
      line-height: 1.05;
    }

    .content #main-title span {
      font-size: 0.52em;
    }

    .workshop-meta {
      display: grid;
      gap: 0.5rem;
    }

    .workshop-hero .cta-row {
      display: grid;
      grid-template-columns: 1fr;
    }

    .content .workshop-hero .challenge-cta {
      width: 100%;
    }

    .content .workshop-section-nav a {
      padding: 0.85rem 0.8rem;
      font-size: 0.82rem;
    }

    .workshop-section-nav a::after {
      right: 0.8rem;
      left: 0.8rem;
    }

    .content section.content-section {
      padding: 3.75rem 1rem;
    }

    .content .content-section .title.is-2 {
      font-size: 1.7rem;
    }

    .date-row {
      grid-template-columns: 1fr;
      gap: 0.25rem;
      padding-left: 1.3rem;
    }

    .topic-list {
      grid-template-columns: 1fr;
    }

    .speaker-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }

    .speaker-card {
      display: grid;
      grid-template-columns: 92px minmax(0, 1fr);
      column-gap: 1rem;
      padding: 1rem;
      text-align: left;
    }

    .content .speaker-card img {
      grid-row: 1 / span 5;
      width: 88px;
      height: 88px;
      margin: 0;
    }

    .speaker-card .speaker-name,
    .speaker-card .speaker-role,
    .speaker-card .speaker-affiliation,
    .speaker-card .speaker-topic {
      grid-column: 2;
    }

    .content .speaker-card p {
      text-align: left;
    }

    .content .speaker-card .speaker-topic {
      margin-top: 0.6rem;
      padding-top: 0.6rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .speaker-card,
    .challenge-cta { transition: none; }
  }
</style>

<!-- Workshop hero -->
<header class="workshop-hero">
  <div class="workshop-hero-inner">
    <p class="workshop-kicker">IROS 2026 Workshop &middot; Pittsburgh, Pennsylvania</p>
    <h1 class="title is-1 publication-title" id="main-title">
      Beyond Exteroception
      <span>Interoceptive Perception for Resilient Robotics</span>
    </h1>
    <div class="workshop-meta" aria-label="Workshop details">
      <span><i class="fas fa-calendar-alt" aria-hidden="true"></i> September 27, 2026 (tentative)</span>
      <span><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Pittsburgh, PA</span>
      <span><i class="fas fa-users" aria-hidden="true"></i> Full-day workshop</span>
    </div>
    <div class="cta-row" aria-label="Workshop actions">
      <a class="challenge-cta" href="/imuchallenge/">
        <span class="icon" aria-hidden="true"><i class="fas fa-trophy"></i></span>
        <span>Explore Challenge</span>
      </a>
      <a class="challenge-cta is-secondary" href="https://forms.gle/7rUg7ENctuBU9kTN8" target="_blank" rel="noopener">
        <span class="icon" aria-hidden="true"><i class="fas fa-user-plus"></i></span>
        <span>Register Team</span>
      </a>
      <a class="challenge-cta is-secondary" href="https://www.kaggle.com/competitions/tartanimu-iros2026/submissions" target="_blank" rel="noopener">
        <span class="icon" aria-hidden="true"><i class="fas fa-upload"></i></span>
        <span>Submit on Kaggle</span>
      </a>
      <p class="cta-status"><span class="icon" aria-hidden="true"><i class="fas fa-clock"></i></span> Workshop registration and poster submission details are coming soon.</p>
    </div>
  </div>
</header>

<nav class="workshop-section-nav" aria-label="Workshop sections">
  <div class="nav-inner">
    <a href="#abstract">Abstract</a>
    <a href="#important-dates">Dates</a>
    <a href="#scope">Scope</a>
    <a href="#speakers">Speakers</a>
    <a href="#program">Program</a>
    <a href="#organizers">Organizers</a>
  </div>
</nav>

<!-- Abstract Section -->
<section class="section content-section" id="abstract" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Abstract</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          Modern robots increasingly rely on external sensors—cameras, LiDARs, and radars—as their primary perceptual modality. Yet biological organisms evolved a fundamentally different strategy: they first understand their own body through vestibular and proprioceptive feedback before interpreting the external world. This workshop explores <strong>internal perception</strong>, the use of inertial measurement units (IMUs), joint encoders, force/torque sensors, and other body-mounted proprioceptive sensors, as a primary, not auxiliary, source of perceptual intelligence for resilient robotics.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          We argue that robust autonomy demands perception systems that are not only world-facing but also self-aware of their motion, dynamics, and physical state. This is not a metaphorical notion but a principled research direction centered on inertial sensing, proprioception, and their integration with external perception. Topics span learning-based inertial odometry, cross-embodiment proprioceptive motion model, adaptive sensor fusion under degradation, and the emerging role of humanoid robots as testbeds for internal-sensing research. The workshop brings together researchers from state estimation, legged locomotion, inertial navigation, and neuroscience-inspired robotics to define the foundations of this underexplored paradigm. Featuring invited talks, a contributed poster session, a panel discussion, and the inaugural <strong>Learning IMU Odometry Challenge</strong>, this workshop aims to catalyze a community around instinct-like perception for resilient robots.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Important Dates Section -->
<section class="section content-section" id="important-dates" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Important Dates</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="dates-list">
          <div class="date-row">
            <time datetime="2026-03">March 2026</time>
            <p>Challenge website launch and team pre-registration opens.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-04">April 2026</time>
            <p>Training data, baseline code, and evaluation toolkit released.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-05">May–August 2026</time>
            <p>Open development phase with public leaderboard updates.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-08-15">August 15, 2026</time>
            <p>Final challenge submission deadline.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-09-01">September 1, 2026</time>
            <p>Top teams notified and spotlight invitations issued.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-09-27">September 27, 2026</time>
            <p>Workshop, challenge spotlight talks, and award announcements (tentative).</p>
          </div>
        </div>
        <p class="timeline-note">The workshop date is tentative. Live competition rules and submission deadlines on Kaggle remain the source of truth.</p>
      </div>
    </div>
  </div>
</section>

<!-- Workshop Scope Section -->
<section class="section content-section" id="scope" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Workshop Scope</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          Robots need to understand both the world around them and the state of their own bodies. This workshop examines inertial measurement units, joint encoders, force/torque sensing, and other proprioceptive signals as primary sources of perceptual intelligence—not merely auxiliary inputs to vision and LiDAR pipelines.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          The program connects state estimation, legged locomotion, inertial navigation, humanoid robotics, and learning-based perception. Invited talks, challenge spotlights, contributed posters, a panel discussion, and open networking will focus on systems that remain reliable when external sensing is degraded or unavailable.
        </p>
        <h3 class="title is-4" style="text-align: left; margin-top: 2rem; margin-bottom: 1rem;">Topics</h3>
        <ul class="topic-list">
          <li>Learning-based inertial odometry and navigation</li>
          <li>IMU foundation models and cross-platform generalization</li>
          <li>Proprioceptive state estimation for legged and humanoid robots</li>
          <li>Multi-IMU fusion and spatial-temporal calibration</li>
          <li>Adaptive sensor fusion under environmental degradation</li>
          <li>Online adaptation and self-supervised learning</li>
          <li>Vestibular and proprioceptive inspiration from neuroscience</li>
          <li>Sim-to-real transfer for internal perception</li>
          <li>Robustness benchmarks and evaluation metrics</li>
          <li>Contact-rich and force-aware state estimation</li>
          <li>Differentiable factor graphs and learned optimization</li>
          <li>Integration with visual and geometric foundation models</li>
        </ul>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1.5rem;">
          <strong>Who should attend:</strong> researchers, students, and practitioners working in state estimation, inertial navigation, robot learning, legged or humanoid robotics, sensor fusion, and resilient autonomy. No specialized workshop prerequisite is required.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Invited Speakers Section -->
<section class="section content-section" id="speakers" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 0.75rem;">Invited Speakers</h2>
    <p class="section-intro">The current invited lineup spans locomotion, state estimation, learning, and resilient perception. Additional program updates will be posted as they are finalized.</p>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="speaker-grid">
          <div class="speaker-card">
            <img src="/img/invited_speakers/marco_hutter.jpeg" alt="Marco Hutter"/>
            <p class="speaker-name"><a href="https://rsl.ethz.ch/the-lab/people/person-detail.hutter.html">Marco Hutter</a></p>
            <p class="speaker-role">Professor of Robotic Systems</p>
            <p class="speaker-affiliation">ETH Zurich</p>
            <p class="speaker-topic">Learning-based Locomotion and Control for Legged Robots</p>
          </div>
          <div class="speaker-card">
            <img src="/img/slam_series/davides.jpg" alt="Davide Scaramuzza"/>
            <p class="speaker-name"><a href="https://rpg.ifi.uzh.ch/people_scaramuzza.html">Davide Scaramuzza</a></p>
            <p class="speaker-role">Professor of Robotics and Perception</p>
            <p class="speaker-affiliation">University of Zurich</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Maani_Ghaffari.jpg" alt="Maani Ghaffari"/>
            <p class="speaker-name"><a href="https://robotics.umich.edu/people/faculty/maani-ghaffari/">Maani Ghaffari</a></p>
            <p class="speaker-role">Assistant Professor, Naval Architecture and Marine Engineering and Robotics</p>
            <p class="speaker-affiliation">University of Michigan</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Chen_Feng.jpg" alt="Chen Feng"/>
            <p class="speaker-name"><a href="https://engineering.nyu.edu/faculty/chen-feng">Chen Feng</a></p>
            <p class="speaker-role">Institute Associate Professor</p>
            <p class="speaker-affiliation">NYU Tandon School of Engineering</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Koushil_Sreenath.jpg" alt="Koushil Sreenath"/>
            <p class="speaker-name"><a href="https://vcresearch.berkeley.edu/faculty/koushil-sreenath">Koushil Sreenath</a></p>
            <p class="speaker-role">Professor, Mechanical Engineering</p>
            <p class="speaker-affiliation">University of California, Berkeley</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Carmelo_Sferrazza.jpg" alt="Carmelo Sferrazza"/>
            <p class="speaker-name"><a href="https://sferrazza.cc/">Carmelo (Carlo) Sferrazza</a></p>
            <p class="speaker-role">Incoming Assistant Professor, Mechanical Engineering</p>
            <p class="speaker-affiliation">The University of Texas at Austin</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Haozhi_Qi.jpg" alt="Haozhi Qi"/>
            <p class="speaker-name"><a href="https://haozhi.io/">Haozhi Qi</a></p>
            <p class="speaker-role">Member of Technical Staff; Incoming Assistant Professor, Computer Science</p>
            <p class="speaker-affiliation">Amazon FAR / University of Chicago</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/yuheng2024.jpg" alt="Yuheng Qiu"/>
            <p class="speaker-name"><a href="http://yuhengqiu.com/">Yuheng Qiu</a></p>
            <p class="speaker-role">Ph.D. Student, Mechanical Engineering</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/team/shibozNew.png" alt="Shibo Zhao"/>
            <p class="speaker-name"><a href="https://shibowing.github.io/">Shibo Zhao</a></p>
            <p class="speaker-role">Ph.D. Candidate, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
            <p class="speaker-topic">Opening Address &amp; Challenge Introduction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Program Section -->
<section class="section content-section" id="program" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Program</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <table class="schedule-table">
          <tr>
            <th style="width:15%;">Time</th>
            <th style="width:25%;">Speaker</th>
            <th style="width:60%;">Topic</th>
          </tr>
          <tr>
            <td>8:30 - 8:40 AM</td>
            <td><strong>Shibo Zhao</strong></td>
            <td>Opening Address & Challenge Introduction</td>
          </tr>
          <tr>
            <td>8:40 - 9:10 AM</td>
            <td><strong>Marco Hutter</strong><br><span style="color:#999; font-size:0.85rem;">ETH Zurich</span></td>
            <td>Learning-based Locomotion and Control for Legged Robots</td>
          </tr>
          <tr>
            <td>9:10 - 9:40 AM</td>
            <td><strong>Davide Scaramuzza</strong><br><span style="color:#999; font-size:0.85rem;">University of Zurich</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>9:40 - 10:10 AM</td>
            <td><strong>Carmelo Sferrazza</strong><br><span style="color:#999; font-size:0.85rem;">The University of Texas at Austin</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>10:10 - 10:30 AM</td>
            <td><strong>Challenge Spotlight</strong></td>
            <td>Top 3 team spotlight talks (5 min presentation + 2 min Q&A each)</td>
          </tr>
          <tr class="break-row">
            <td>10:30 - 11:00 AM</td>
            <td colspan="2"><strong>Coffee Break</strong> — Poster session from challenge teams and contributed papers</td>
          </tr>
          <tr>
            <td>11:00 - 11:30 AM</td>
            <td><strong>Maani Ghaffari</strong><br><span style="color:#999; font-size:0.85rem;">University of Michigan</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>11:30 - 12:00 PM</td>
            <td><strong>Chen Feng</strong><br><span style="color:#999; font-size:0.85rem;">NYU Tandon School of Engineering</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr class="break-row">
            <td>12:00 - 1:30 PM</td>
            <td colspan="2"><strong>Lunch Break</strong> — Lunch and networking</td>
          </tr>
          <tr>
            <td>1:30 - 2:00 PM</td>
            <td><strong>Koushil Sreenath</strong><br><span style="color:#999; font-size:0.85rem;">University of California, Berkeley</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>2:00 - 2:30 PM</td>
            <td><strong>Yuheng Qiu</strong><br><span style="color:#999; font-size:0.85rem;">Carnegie Mellon University</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>2:30 - 3:00 PM</td>
            <td><strong>Poster Session</strong></td>
            <td>Contributed abstracts and demos</td>
          </tr>
          <tr class="break-row">
            <td>3:00 - 3:30 PM</td>
            <td colspan="2"><strong>Coffee Break</strong> — Networking and posters</td>
          </tr>
          <tr>
            <td>3:30 - 4:00 PM</td>
            <td><strong>Haozhi Qi</strong><br><span style="color:#999; font-size:0.85rem;">Amazon FAR / University of Chicago</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>4:00 - 4:30 PM</td>
            <td><strong>Wenshan Wang</strong><br><span style="color:#999; font-size:0.85rem;">Carnegie Mellon University</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>4:30 - 5:00 PM</td>
            <td><strong>Panel Discussion</strong></td>
            <td>Future of Internal Perception</td>
          </tr>
          <tr>
            <td>5:00 - 5:15 PM</td>
            <td><strong>Shibo Zhao</strong></td>
            <td>Closing Remarks</td>
          </tr>
          <tr class="break-row">
            <td>5:15 - 5:45 PM</td>
            <td colspan="2"><strong>Open Networking</strong> — Networking among attendees</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- Organizers Section -->
<section class="section content-section" id="organizers" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Organizers</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <h3 class="title is-4" style="text-align: left; margin-bottom: 1rem;">Corresponding Organizers</h3>
        <div class="speaker-grid">
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Guanya_Commencement.jpg" alt="Guanya Shi"/>
            <p class="speaker-name"><a href="https://www.gshi.me/">Guanya Shi</a></p>
            <p class="speaker-role">Assistant Professor, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/iccv_organizers/wenshan_wang.jpg" alt="Wenshan Wang"/>
            <p class="speaker-name"><a href="https://www.ri.cmu.edu/ri-faculty/wenshan-wang/">Wenshan Wang</a></p>
            <p class="speaker-role">Systems Scientist, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/team/shibozNew.png" alt="Shibo Zhao"/>
            <p class="speaker-name"><a href="https://shibowing.github.io/">Shibo Zhao</a></p>
            <p class="speaker-role">Ph.D. Candidate, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
        </div>

        <h3 class="title is-4" style="text-align: left; margin-top: 3rem; margin-bottom: 1rem;">Main Organizers</h3>
        <div class="speaker-grid">
          <div class="speaker-card">
            <img src="/img/invited_speakers/basti.jpg" alt="Sebastian Scherer"/>
            <p class="speaker-name"><a href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</a></p>
            <p class="speaker-role">Research Professor, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/invited_speakers/chenwang.jpg" alt="Chen Wang"/>
            <p class="speaker-name"><a href="https://chenwang.site/">Chen Wang</a></p>
            <p class="speaker-role">Assistant Professor, Computer Science and Engineering</p>
            <p class="speaker-affiliation">University at Buffalo</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Muqing_Cao.jpg" alt="Muqing Cao"/>
            <p class="speaker-name"><a href="https://caomuqing.github.io/">Muqing Cao</a></p>
            <p class="speaker-role">Postdoc, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Junyi_Geng.jpg" alt="Junyi Geng"/>
            <p class="speaker-name"><a href="https://ari-psu.github.io/">Junyi Geng</a></p>
            <p class="speaker-role">Assistant Professor, Aerospace Engineering</p>
            <p class="speaker-affiliation">Pennsylvania State University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/yuheng2024.jpg" alt="Yuheng Qiu"/>
            <p class="speaker-name"><a href="http://yuhengqiu.com/">Yuheng Qiu</a></p>
            <p class="speaker-role">Ph.D. Student, Mechanical Engineering</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Sifan Zhou.jpg" alt="Sifan Zhou"/>
            <p class="speaker-name"><a href="https://scholar.google.com/citations?hl=en&amp;user=kSdqoi0AAAAJ">Sifan Zhou</a></p>
            <p class="speaker-role">Ph.D. Student</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Active section navigation -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const links = Array.from(document.querySelectorAll('.workshop-section-nav a'));
    const sections = links
      .map(function(link) {
        return document.querySelector(link.getAttribute('href'));
      })
      .filter(Boolean);
    let ticking = false;

    function updateActiveSection() {
      const marker = window.scrollY + 140;
      let active = sections[0];

      sections.forEach(function(section) {
        if (section.offsetTop <= marker) active = section;
      });

      links.forEach(function(link) {
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
  });
</script>
