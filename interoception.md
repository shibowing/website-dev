---
title: "IROS'26 Workshop: Beyond Exteroception"
subtitle: "Interoceptive Perception for Resilient Robotics — September 27, 2026"
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

  .workshop-hero .hero-badges {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.65rem;
    margin-top: 1.1rem;
  }

  .content .workshop-hero a.challenge-stats {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin-top: 1.1rem;
    padding: 0.45rem 1rem;
    border: 1px solid rgba(255, 216, 188, 0.55);
    border-radius: 999px;
    background: rgba(255, 216, 188, 0.14);
    color: #ffe9d9;
    font-size: 0.92rem;
    text-decoration: none;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .content .workshop-hero .hero-badges a.challenge-stats {
    margin-top: 0;
  }

  .content .workshop-hero a.challenge-stats:hover {
    background: rgba(255, 216, 188, 0.26);
    border-color: #ffd8bc;
    color: #fff;
  }

  .challenge-stats i {
    color: #ffd8bc;
  }

  .challenge-stats strong {
    color: #fff;
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

  .content .cta-status a {
    color: #ffd8bc;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .content .cta-status a:hover {
    color: #fff;
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

  .content .topic-list {
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

  .speaker-grid--invited {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .speaker-grid--invited .speaker-card {
    flex: 0 0 calc((100% - 4rem) / 5);
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

    .speaker-grid--invited .speaker-card {
      flex-basis: calc((100% - 1rem) / 2);
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

    .speaker-grid--invited .speaker-card {
      flex-basis: 100%;
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

  .paper-list {
    display: grid;
    gap: 1.25rem;
  }

  .paper-card {
    display: grid;
    grid-template-columns: 168px minmax(0, 1fr);
    gap: 1.6rem;
    align-items: start;
    padding: 1.4rem;
    border: 1px solid var(--workshop-line);
    border-left: 4px solid var(--workshop-accent);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 10px 28px rgba(19, 24, 31, 0.06);
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }

  .paper-card:hover {
    box-shadow: 0 16px 36px rgba(19, 24, 31, 0.1);
    transform: translateY(-2px);
  }

  .content .paper-thumb {
    display: block;
    overflow: hidden;
    border: 1px solid var(--workshop-line);
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 12px rgba(19, 24, 31, 0.08);
  }

  .content .paper-thumb img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }

  .content .content-section .paper-card p {
    margin: 0;
    line-height: 1.55;
  }

  .content .content-section .paper-card .paper-team {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.55rem;
    padding: 0.2rem 0.65rem;
    border-radius: 999px;
    background: #fbeee4;
    color: var(--workshop-accent-dark);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .content .paper-card .paper-title {
    margin: 0 0 0.5rem;
    font-size: 1.18rem;
    font-weight: 800;
    line-height: 1.35;
  }

  .content .paper-card .paper-title a {
    color: var(--workshop-ink);
    text-decoration: none;
  }

  .content .paper-card .paper-title a:hover {
    color: var(--workshop-accent-dark);
  }

  .content .content-section .paper-card .paper-authors {
    color: #373a40;
    font-size: 0.95rem;
    font-weight: 600;
  }

  .content .content-section .paper-card .paper-affiliation {
    color: var(--workshop-muted);
    font-size: 0.9rem;
    font-style: italic;
  }

  .content .content-section .paper-card .paper-summary {
    margin-top: 0.75rem;
    color: #3d4046;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .content .paper-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin: 0.85rem 0 0;
    padding: 0;
    list-style: none;
  }

  .content .paper-tags li {
    margin: 0;
    padding: 0.18rem 0.6rem;
    border: 1px solid var(--workshop-line);
    border-radius: 4px;
    background: var(--workshop-surface);
    color: #4d5158;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .paper-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 1rem;
  }

  .content .paper-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.45rem 0.9rem;
    border: 1px solid var(--workshop-accent);
    border-radius: 6px;
    background: #fff;
    color: var(--workshop-accent-dark);
    font-size: 0.88rem;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .content .paper-link.is-primary {
    background: var(--workshop-accent);
    color: #fff;
  }

  .content .paper-link:hover {
    background: var(--workshop-accent-dark);
    border-color: var(--workshop-accent-dark);
    color: #fff;
  }

  @media (max-width: 640px) {
    .paper-card {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 1.1rem;
    }

    .content .paper-thumb {
      width: 132px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .paper-card,
    .paper-link { transition: none; }
    .paper-card:hover { transform: none; }
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
      <span><i class="fas fa-calendar-alt" aria-hidden="true"></i> September 27, 2026</span>
      <span><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Pittsburgh, PA</span>
      <span><i class="fas fa-users" aria-hidden="true"></i> Full-day workshop</span>
    </div>
    <div class="hero-badges">
      <a class="challenge-stats" href="https://cmu.zoom.us/j/7802647225?omn=96963726510" target="_blank" rel="noopener">
        <i class="fas fa-video" aria-hidden="true"></i>
        <span>Follow along remotely &middot; <strong>Join on Zoom</strong></span>
      </a>
      <a class="challenge-stats" href="https://www.kaggle.com/competitions/tartan-imu-challenge-iros2026/leaderboard?tab=public" target="_blank" rel="noopener">
        <i class="fas fa-fire" aria-hidden="true"></i>
        <span><strong>131 teams</strong> &middot; <strong>2,800+ submissions</strong> in the Learning IMU Odometry Challenge</span>
      </a>
    </div>
    <div class="cta-row" aria-label="Workshop actions">
      <a class="challenge-cta" href="#highlight-papers">
        <span class="icon" aria-hidden="true"><i class="fas fa-star"></i></span>
        <span>Workshop Highlight Papers</span>
      </a>
      <a class="challenge-cta" href="/imuchallenge/">
        <span class="icon" aria-hidden="true"><i class="fas fa-trophy"></i></span>
        <span>Explore Challenge</span>
      </a>
      <a class="challenge-cta is-secondary" href="https://www.kaggle.com/competitions/tartan-imu-challenge-iros2026/leaderboard" target="_blank" rel="noopener">
        <span class="icon" aria-hidden="true"><i class="fas fa-list-ol"></i></span>
        <span>Kaggle Leaderboard</span>
      </a>
      <p class="cta-status"><span class="icon" aria-hidden="true"><i class="fas fa-clock"></i></span> Workshop day: September 27, 2026, 8:40 AM &ndash; 5:00 PM EDT. Remote attendees can follow along on <a href="https://cmu.zoom.us/j/7802647225?omn=96963726510" target="_blank" rel="noopener">Zoom</a>.</p>
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
    <a href="#highlight-papers">Highlight Papers</a>
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
            <time datetime="2026-08-01">August 1, 2026</time>
            <p>Training data, baseline code, and evaluation toolkit released.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-09-20T23:55:00Z">September 20, 2026, 23:55 UTC</time>
            <p>Final challenge submission and model weights deadline.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-09-23T23:59:00-04:00">September 23, 2026, 23:59 US Eastern (EDT)</time>
            <p>Technical report deadline.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-09-24">September 24, 2026</time>
            <p>Top teams notified and workshop spotlight invitations issued.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-09-27">September 27, 2026</time>
            <p>Workshop, challenge spotlight talks, and award announcements.</p>
          </div>
        </div>
        <p class="timeline-note">The final submission deadline is listed in UTC. Live competition rules on Kaggle remain the source of truth.</p>
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
      <div class="column is-full">
        <div class="speaker-grid speaker-grid--invited">
          <div class="speaker-card">
            <img src="/img/slam_series/davides.jpg" alt="Davide Scaramuzza"/>
            <p class="speaker-name"><a href="https://rpg.ifi.uzh.ch/people_scaramuzza.html">Davide Scaramuzza</a></p>
            <p class="speaker-role">Professor of Robotics and Perception</p>
            <p class="speaker-affiliation">University of Zurich</p>
            <p class="speaker-topic">Learning Agile Flight from Vision to Commands: From State Estimation to Stateless Navigation</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Maani_Ghaffari.jpg" alt="Maani Ghaffari"/>
            <p class="speaker-name"><a href="https://robotics.umich.edu/people/faculty/maani-ghaffari/">Maani Ghaffari</a></p>
            <p class="speaker-role">Associate Professor, Naval Architecture and Marine Engineering and Robotics</p>
            <p class="speaker-affiliation">University of Michigan</p>
            <p class="speaker-topic">Equivariant Proprioceptive Estimation and Learning for Robotics</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Chen_Feng.jpg" alt="Chen Feng"/>
            <p class="speaker-name"><a href="https://engineering.nyu.edu/faculty/chen-feng">Chen Feng</a></p>
            <p class="speaker-role">Institute Associate Professor</p>
            <p class="speaker-affiliation">NYU Tandon School of Engineering</p>
            <p class="speaker-topic">Egocentric Experience and Memory for Embodied Spatial Intelligence</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Carmelo_Sferrazza.jpg" alt="Carmelo Sferrazza"/>
            <p class="speaker-name"><a href="https://sferrazza.cc/">Carmelo (Carlo) Sferrazza</a></p>
            <p class="speaker-role">Incoming Assistant Professor of Robotics and Artificial Intelligence; Member of Technical Staff</p>
            <p class="speaker-affiliation">ETH Zurich / Amazon FAR</p>
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
            <img src="/img/IROS_2026_tab/Daniel_Gehrig.jpg" alt="Daniel Gehrig"/>
            <p class="speaker-name"><a href="https://danielgehrig18.github.io/">Daniel Gehrig</a></p>
            <p class="speaker-role">Postdoctoral Researcher</p>
            <p class="speaker-affiliation">GRASP Lab, University of Pennsylvania</p>
            <p class="speaker-topic">Estimating Motion from Canonical, Proprioceptive Representations</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/yuheng2024.jpg" alt="Yuheng Qiu"/>
            <p class="speaker-name"><a href="http://yuhengqiu.com/">Yuheng Qiu</a></p>
            <p class="speaker-role">Postdoctoral Scientist</p>
            <p class="speaker-affiliation">Amazon FAR (Frontier AI &amp; Robotics)</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/team/wenshan.jpg" alt="Wenshan Wang"/>
            <p class="speaker-name"><a href="http://www.wangwenshan.com/">Wenshan Wang</a></p>
            <p class="speaker-role">Systems Scientist</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/team/shibozNew.png" alt="Shibo Zhao"/>
            <p class="speaker-name"><a href="https://shibowing.github.io/">Shibo Zhao</a></p>
            <p class="speaker-role">Ph.D.</p>
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
            <td>8:40 - 9:10 AM</td>
            <td><strong>Shibo Zhao</strong><br><span style="color:#999; font-size:0.85rem;">Carnegie Mellon University</span></td>
            <td>Opening Address & Challenge Introduction</td>
          </tr>
          <tr>
            <td>9:10 - 9:40 AM</td>
            <td><strong>Chen Feng</strong><br><span style="color:#999; font-size:0.85rem;">NYU Tandon School of Engineering</span></td>
            <td><strong>Egocentric Experience and Memory for Embodied Spatial Intelligence</strong><br><span style="color:#999; font-size:0.9rem;">Embodied agents must learn not only to perceive the world, but also to organize their egocentric experience into persistent spatial knowledge that supports reasoning and action over time. In this talk, I will present our recent work on learning navigation from large-scale visual experience, building and updating spatial memories in changing environments, and using egocentric representations for downstream interaction. Together, these efforts explore how experience and memory can serve as foundations for robust embodied spatial intelligence.</span></td>
          </tr>
          <tr>
            <td>9:40 - 10:10 AM</td>
            <td><strong>Carmelo Sferrazza</strong><br><span style="color:#999; font-size:0.85rem;">ETH Zurich / Amazon FAR</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>10:10 - 10:40 AM</td>
            <td><strong>Maani Ghaffari</strong><br><span style="color:#999; font-size:0.85rem;">University of Michigan (remote)</span></td>
            <td>Equivariant Proprioceptive Estimation and Learning for Robotics</td>
          </tr>
          <tr>
            <td>10:40 - 11:10 AM</td>
            <td><strong>Davide Scaramuzza</strong><br><span style="color:#999; font-size:0.85rem;">University of Zurich</span></td>
            <td>Learning Agile Flight from Vision to Commands: From State Estimation to Stateless Navigation</td>
          </tr>
          <tr>
            <td>11:10 - 11:40 AM</td>
            <td><strong>Social Time &amp; Panel Discussion</strong><br><span style="color:#999; font-size:0.85rem;">Invited speakers and attendees</span></td>
            <td><strong>Before a Robot Can Model the World, Must It Model Itself?</strong><br><span style="color:#999; font-size:0.9rem;">World models and vision-language-action policies condition on a body state they cannot produce themselves. Panelists discuss whether a robot's self-model, learned from inertial, proprioceptive, and tactile signals, is a prerequisite for modeling the world, or whether it emerges on its own from end-to-end training at scale.</span><br><span style="font-size:0.9rem;"><a href="/interoception-panels.html"><strong>View panel slides &rarr;</strong></a></span></td>
          </tr>
          <tr class="break-row">
            <td>11:40 - 2:00 PM</td>
            <td colspan="2"><strong>Lunch Break</strong> — Lunch and networking</td>
          </tr>
          <tr>
            <td>2:00 - 2:30 PM</td>
            <td><strong>Wenshan Wang</strong><br><span style="color:#999; font-size:0.85rem;">Carnegie Mellon University</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>2:30 - 3:00 PM</td>
            <td><strong>Daniel Gehrig</strong><br><span style="color:#999; font-size:0.85rem;">GRASP Lab, University of Pennsylvania</span></td>
            <td><strong>Estimating Motion from Canonical, Proprioceptive Representations</strong><br><span style="color:#999; font-size:0.9rem;">This talk explores how to leverage the spatial and temporal symmetries of motion to derive canonical representations from inertial sensors. These representations are invariant to changes in orientation and motion speed, simplifying the learning of neural displacement priors and improving their generalization. Drawing on EqNIO and Lie Events, I will show how to design equivariant neural networks and event-driven sampling schemes that not only improve the accuracy and robustness of neural inertial odometry but also reduce the data volume of inertial measurements.</span></td>
          </tr>
          <tr class="break-row">
            <td>3:00 - 3:30 PM</td>
            <td colspan="2"><strong>Coffee Break &amp; Challenge Team Presentations</strong> — Top challenge teams present posters and demos, alongside contributed posters and networking<br><span style="font-size:0.9rem;"><a href="#highlight-papers"><strong>View workshop highlight papers &rarr;</strong></a></span></td>
          </tr>
          <tr>
            <td>3:30 - 4:00 PM</td>
            <td><strong>Haozhi Qi</strong><br><span style="color:#999; font-size:0.85rem;">Amazon FAR / University of Chicago</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>4:00 - 4:30 PM</td>
            <td><strong>Yuheng Qiu</strong><br><span style="color:#999; font-size:0.85rem;">Amazon FAR (Frontier AI &amp; Robotics)</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>4:30 - 5:00 PM</td>
            <td><strong>Panel Discussion</strong><br><span style="color:#999; font-size:0.85rem;">Invited speakers</span></td>
            <td><strong>Explicit or Implicit? The Future of IMU Learning in Robot Perception</strong><br><span style="color:#999; font-size:0.9rem;">Should robots model inertial sensing explicitly, through dedicated and interpretable estimation modules, or implicitly, inside end-to-end learned policies? Panelists discuss what each path means for accuracy, generalization, and resilience when exteroceptive sensing degrades or fails.</span><br><span style="font-size:0.9rem;"><a href="/interoception-panels.html"><strong>View panel slides &rarr;</strong></a></span></td>
          </tr>
        </table>
        <p style="margin-top: 1rem; color:#999; font-size:0.9rem;">All times are Pittsburgh local time (EDT, UTC−4). The schedule may be adjusted as remaining talks and team presentations are confirmed.</p>
      </div>
    </div>
  </div>
</section>

<!-- Workshop Highlight Papers Section -->
<section class="section content-section" id="highlight-papers" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 0.75rem;">Workshop Highlight Papers</h2>
    <p class="section-intro">Selected by the organizers from the technical reports of the <a href="/imuchallenge/">Learning IMU Odometry Challenge</a>. Each paper describes one unified model, with a single set of weights, that estimates velocity from raw IMU alone across cars, quadrupeds, drones, and handheld devices. Papers are listed alphabetically by team name.</p>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
      <div class="paper-list">
        <article class="paper-card">
          <a class="paper-thumb" href="/img/IROS_2026_tab/highlight_papers/axistilted2.pdf" target="_blank" rel="noopener" aria-label="Open the paper by team AxisTilted2 (PDF)">
            <img src="/img/IROS_2026_tab/highlight_papers/axistilted2.jpg" alt="First page of the paper by team AxisTilted2" width="440" height="569" loading="lazy"/>
          </a>
          <div class="paper-body">
            <p class="paper-team"><i class="fas fa-users" aria-hidden="true"></i> AxisTilted2</p>
            <h3 class="paper-title"><a href="/img/IROS_2026_tab/highlight_papers/axistilted2.pdf" target="_blank" rel="noopener">Learning Velocity from IMU Signals: AxisTilted2 at the IROS 2026 IMU Odometry Challenge</a></h3>
            <p class="paper-authors">Sanjayan Sreekala, Chinmayan Pradeep</p>
            <p class="paper-affiliation">Independent Researchers</p>
            <p class="paper-summary">A convolutional encoder with frequency features and a bidirectional recurrent network predicts velocity, and learned sensor corrections feed an inertial smoother that reconciles the predictions with the motion equations. Supervising complete scored paths mainly reduces trajectory drift, and a diagnostic shows why better sensor estimates need not improve motion estimates.</p>
            <ul class="paper-tags"><li>Conv + BiRNN</li><li>Inertial smoother</li><li>Path supervision</li></ul>
            <div class="paper-links">
              <a class="paper-link is-primary" href="/img/IROS_2026_tab/highlight_papers/axistilted2.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i><span>Paper (PDF)</span></a>
              <a class="paper-link" href="https://huggingface.co/AxisTilted2/tartanimu-iros2026" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i><span>Model &amp; Code</span></a>
            </div>
          </div>
        </article>
        <article class="paper-card">
          <a class="paper-thumb" href="/img/IROS_2026_tab/highlight_papers/cocel-postech.pdf" target="_blank" rel="noopener" aria-label="Open the paper by team CoCEL @POSTECH (PDF)">
            <img src="/img/IROS_2026_tab/highlight_papers/cocel-postech.jpg" alt="First page of the paper by team CoCEL @POSTECH" width="440" height="569" loading="lazy"/>
          </a>
          <div class="paper-body">
            <p class="paper-team"><i class="fas fa-users" aria-hidden="true"></i> CoCEL @POSTECH</p>
            <h3 class="paper-title"><a href="/img/IROS_2026_tab/highlight_papers/cocel-postech.pdf" target="_blank" rel="noopener">What Actually Generalizes: Data Coverage for Multi-Platform Inertial Velocity Estimation</a></h3>
            <p class="paper-authors">Sanghyun Park, Seongjun Kim, Soohee Han</p>
            <p class="paper-affiliation">Pohang University of Science and Technology (POSTECH)</p>
            <p class="paper-summary">Argues that data coverage, not architecture, is the main bottleneck: drone sequences span far higher speeds than the other platforms and dominate the error. The model is a two-branch ConvNeXt-V2 encoder in which a low-frequency gravity-proxy branch modulates the raw-input branch through FiLM, followed by a bi-GRU (8.03 M parameters, trained from scratch).</p>
            <ul class="paper-tags"><li>ConvNeXt-V2 + FiLM</li><li>Gravity proxy</li><li>Data coverage</li></ul>
            <div class="paper-links">
              <a class="paper-link is-primary" href="/img/IROS_2026_tab/highlight_papers/cocel-postech.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i><span>Paper (PDF)</span></a>
              <a class="paper-link" href="https://huggingface.co/pash03023/TartanIMU-CoCEL_POSTECH" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i><span>Model &amp; Code</span></a>
            </div>
          </div>
        </article>
        <article class="paper-card">
          <a class="paper-thumb" href="/img/IROS_2026_tab/highlight_papers/hack2publish.pdf" target="_blank" rel="noopener" aria-label="Open the paper by team Hack2Publish (PDF)">
            <img src="/img/IROS_2026_tab/highlight_papers/hack2publish.jpg" alt="First page of the paper by team Hack2Publish" width="440" height="569" loading="lazy"/>
          </a>
          <div class="paper-body">
            <p class="paper-team"><i class="fas fa-users" aria-hidden="true"></i> Hack2Publish</p>
            <h3 class="paper-title"><a href="/img/IROS_2026_tab/highlight_papers/hack2publish.pdf" target="_blank" rel="noopener">Trajectory-Context Inertial Velocity Estimation with Metric-Shaped Training</a></h3>
            <p class="paper-authors">Md. Hamid Hosen, Esfer Sami, Kahakashan Ashraf, Foysal Emon Shanto</p>
            <p class="paper-summary">Lets the network see 16 s of context instead of a single window: a strided convolutional stem, dilated temporal-convolution blocks and a small transformer (3.9 M parameters) predict dense velocity. Training samples trajectories the way the metric averages them, adds a loss on integrated velocity, and uses only physically exact augmentation.</p>
            <ul class="paper-tags"><li>16 s context</li><li>TCN + Transformer</li><li>Metric-shaped training</li></ul>
            <div class="paper-links">
              <a class="paper-link is-primary" href="/img/IROS_2026_tab/highlight_papers/hack2publish.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i><span>Paper (PDF)</span></a>
              <a class="paper-link" href="https://huggingface.co/mdhamidhosen/tartanimu-unified-hosen42" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i><span>Model &amp; Code</span></a>
            </div>
          </div>
        </article>
        <article class="paper-card">
          <a class="paper-thumb" href="/img/IROS_2026_tab/highlight_papers/haozhe-zhou.pdf" target="_blank" rel="noopener" aria-label="Open the paper by team Haozhe Zhou (PDF)">
            <img src="/img/IROS_2026_tab/highlight_papers/haozhe-zhou.jpg" alt="First page of the paper by team Haozhe Zhou" width="440" height="569" loading="lazy"/>
          </a>
          <div class="paper-body">
            <p class="paper-team"><i class="fas fa-users" aria-hidden="true"></i> Haozhe Zhou</p>
            <h3 class="paper-title"><a href="/img/IROS_2026_tab/highlight_papers/haozhe-zhou.pdf" target="_blank" rel="noopener">Cross-Platform Neural Inertial Odometry with Kinematically Consistent Re-Timing Augmentation</a></h3>
            <p class="paper-authors">Haozhe Zhou</p>
            <p class="paper-affiliation">Carnegie Mellon University</p>
            <p class="paper-summary">An encoder&ndash;decoder transformer reads 64 s of raw IMU, infers a continuous embodiment state that modulates its normalization layers, and predicts per-window velocity. Re-timing and re-scaling trajectories while keeping gravity and sensor bias consistent addresses the scarcity of data per platform; this augmentation alone improves the score by 22%.</p>
            <ul class="paper-tags"><li>Encoder&ndash;decoder Transformer</li><li>Embodiment state</li><li>Re-timing augmentation</li></ul>
            <div class="paper-links">
              <a class="paper-link is-primary" href="/img/IROS_2026_tab/highlight_papers/haozhe-zhou.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i><span>Paper (PDF)</span></a>
              <a class="paper-link" href="https://huggingface.co/haozheee/imu_odometry_challenge_iros26" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i><span>Model &amp; Code</span></a>
            </div>
          </div>
        </article>
        <article class="paper-card">
          <a class="paper-thumb" href="/img/IROS_2026_tab/highlight_papers/marco.pdf" target="_blank" rel="noopener" aria-label="Open the paper by team Marco (PDF)">
            <img src="/img/IROS_2026_tab/highlight_papers/marco.jpg" alt="First page of the paper by team Marco" width="440" height="569" loading="lazy"/>
          </a>
          <div class="paper-body">
            <p class="paper-team"><i class="fas fa-users" aria-hidden="true"></i> Marco</p>
            <h3 class="paper-title"><a href="/img/IROS_2026_tab/highlight_papers/marco.pdf" target="_blank" rel="noopener">One Network, Per-Recording Physics: Shared-Weight Inertial Velocity Estimation for Cars, Quadrupeds, Humans and Drones</a></h3>
            <p class="paper-authors">Rana Alkhoury Maroun, Korab Berisha</p>
            <p class="paper-affiliation">Marco Intelligence Ltd, London, UK</p>
            <p class="paper-summary">A 12-block Conformer with learnable registers and soft expert mixtures predicts velocity, per-axis uncertainty and a platform posterior from one set of weights. A parameter-free second stage then solves, per recording, for the velocity, gravity and biases that best agree with the IMU kinematics, lowering the validation score by 24.1%.</p>
            <ul class="paper-tags"><li>Conformer</li><li>Learned uncertainty</li><li>Per-recording physics</li></ul>
            <div class="paper-links">
              <a class="paper-link is-primary" href="/img/IROS_2026_tab/highlight_papers/marco.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i><span>Paper (PDF)</span></a>
              <a class="paper-link" href="https://huggingface.co/Marco-intelligence/tartanimu-marco" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i><span>Model &amp; Code</span></a>
            </div>
          </div>
        </article>
        <article class="paper-card">
          <a class="paper-thumb" href="/img/IROS_2026_tab/highlight_papers/team-sparo.pdf" target="_blank" rel="noopener" aria-label="Open the paper by team Team SPARO (PDF)">
            <img src="/img/IROS_2026_tab/highlight_papers/team-sparo.jpg" alt="First page of the paper by team Team SPARO" width="440" height="569" loading="lazy"/>
          </a>
          <div class="paper-body">
            <p class="paper-team"><i class="fas fa-users" aria-hidden="true"></i> Team SPARO</p>
            <h3 class="paper-title"><a href="/img/IROS_2026_tab/highlight_papers/team-sparo.pdf" target="_blank" rel="noopener">Single-Head IMU Velocity Estimation Across Platforms via a Multi-Scale, Embodiment-Aware Encoder</a></h3>
            <p class="paper-authors">Jiwon Choi, Hogyun Kim, Jungwoo Lee, Geonmo Yang, Seunghee Yun; advisor: Younggun Cho</p>
            <p class="paper-affiliation">Inha University</p>
            <p class="paper-summary">A multi-scale encoder (residual stem, S4D state-space layers and a bidirectional GRU) reads the IMU from tens of milliseconds to the whole trajectory, while an embodiment head infers the platform from the IMU alone and conditions a single velocity head. A model trained without one platform fails on it with 3.8&ndash;27&times; its in-distribution error, showing why embodiment conditioning is needed.</p>
            <ul class="paper-tags"><li>S4D state space</li><li>Embodiment-aware</li><li>Self-distillation</li></ul>
            <div class="paper-links">
              <a class="paper-link is-primary" href="/img/IROS_2026_tab/highlight_papers/team-sparo.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i><span>Paper (PDF)</span></a>
              <a class="paper-link" href="https://huggingface.co/jivvon2/tartanimu-sparo" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i><span>Model &amp; Code</span></a>
            </div>
          </div>
        </article>
        <article class="paper-card">
          <a class="paper-thumb" href="/img/IROS_2026_tab/highlight_papers/thisray.pdf" target="_blank" rel="noopener" aria-label="Open the paper by team thisray (PDF)">
            <img src="/img/IROS_2026_tab/highlight_papers/thisray.jpg" alt="First page of the paper by team thisray" width="440" height="569" loading="lazy"/>
          </a>
          <div class="paper-body">
            <p class="paper-team"><i class="fas fa-users" aria-hidden="true"></i> thisray</p>
            <h3 class="paper-title"><a href="/img/IROS_2026_tab/highlight_papers/thisray.pdf" target="_blank" rel="noopener">A Shared Neural Prior with Signal-Routed Physics Operators for Cross-Platform Inertial Velocity Estimation</a></h3>
            <p class="paper-authors">Ssu-Rui Lee</p>
            <p class="paper-affiliation">RaydioTek, Taiwan</p>
            <p class="paper-summary">A shared 43.7 M-parameter network supplies a velocity prior, and a 267-parameter shared readout combines it with two strapdown-integration proposals using physical residuals. Fixed rules computed from each trajectory&rsquo;s raw IMU switch on rotor-drag or segmented strapdown refinements; the paper also documents the experiments that did not work.</p>
            <ul class="paper-tags"><li>Neural prior + physics</li><li>Strapdown proposals</li><li>Negative results</li></ul>
            <div class="paper-links">
              <a class="paper-link is-primary" href="/img/IROS_2026_tab/highlight_papers/thisray.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i><span>Paper (PDF)</span></a>
              <a class="paper-link" href="https://huggingface.co/gn01697933/tartanimu-iros2026-unified-model" target="_blank" rel="noopener"><i class="fas fa-cube" aria-hidden="true"></i><span>Model &amp; Code</span></a>
            </div>
          </div>
        </article>
      </div>
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
            <p class="speaker-role">Ph.D.</p>
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
            <p class="speaker-role">Postdoctoral Scientist</p>
            <p class="speaker-affiliation">Amazon FAR (Frontier AI &amp; Robotics)</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Sifan Zhou.jpg" alt="Sifan Zhou"/>
            <p class="speaker-name"><a href="https://scholar.google.com/citations?hl=en&amp;user=kSdqoi0AAAAJ">Sifan Zhou</a></p>
            <p class="speaker-role">Ph.D. Student</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/team/junbin.jpg" alt="Junbin Yuan"/>
            <p class="speaker-name"><a href="https://theairlab.org/team/junbiny/">Junbin Yuan</a></p>
            <p class="speaker-role">Ph.D. Student</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/haomin_wen.jpeg" alt="Haomin Wen"/>
            <p class="speaker-name"><a href="https://wenhaomin.github.io/">Haomin Wen</a></p>
            <p class="speaker-role">Assistant Professor (Research)</p>
            <p class="speaker-affiliation">Shanghai Innovation Institute (SII)</p>
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
