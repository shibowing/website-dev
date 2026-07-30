---
title: "TartanIMU"
subtitle: "A Light Foundation Model for Inertial Positioning in Robotics"
layout: page
show_sidebar: false
hide_hero: true
hide_footer: false
body_class: tartanimu-site
---

<link href="https://fonts.googleapis.com/css?family=Google+Sans:400,500,600,700|Noto+Sans:400,500,600,700" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<style>
  body.tartanimu-site {
    color: #25282d;
    background: #ffffff;
    font-family: 'Google Sans', 'Noto Sans', sans-serif;
  }

  body.tartanimu-site > section.section {
    padding: 0 !important;
  }

  body.tartanimu-site > section.section > .container {
    width: 100% !important;
    max-width: none !important;
  }

  body.tartanimu-site > section.section > .container > .columns {
    margin: 0 !important;
  }

  body.tartanimu-site > section.section > .container > .columns > .column {
    padding: 0 !important;
  }

  body.tartanimu-site footer.footer {
    color: rgba(255, 255, 255, 0.82) !important;
    background: linear-gradient(90deg, #9e2b04 0%, #cb640d 100%) !important;
    box-shadow: 0 -4px 14px rgba(17, 24, 39, 0.16);
  }

  body.tartanimu-site footer.footer a,
  body.tartanimu-site footer.footer a:visited {
    color: #ffffff !important;
  }

  .timu-page {
    --timu-accent: #c45a0e;
    --timu-accent-dark: #913b05;
    --timu-accent-soft: #fff4ec;
    --timu-ink: #202329;
    --timu-muted: #646b75;
    --timu-line: #e2e5e9;
    --timu-surface: #f6f7f8;
    color: var(--timu-ink);
    background: #ffffff;
    overflow: hidden;
  }

  .timu-page,
  .timu-page * {
    box-sizing: border-box;
  }

  .timu-page a {
    color: var(--timu-accent-dark);
  }

  .timu-page p {
    color: var(--timu-muted);
    font-size: 1.04rem;
    line-height: 1.75;
  }

  .timu-hero {
    position: relative;
    width: 100vw;
    height: clamp(420px, 58vh, 540px);
    min-height: 420px;
    margin-left: calc(50% - 50vw);
    overflow: hidden;
    isolation: isolate;
    background: #17191d;
  }

  .timu-hero-image,
  .timu-hero-shade {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .timu-hero-image {
    z-index: -2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.015);
    animation: timu-hero-settle 1400ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
  }

  .timu-hero-shade {
    z-index: -1;
    background: rgba(17, 20, 24, 0.68);
  }

  .timu-hero-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min(1040px, calc(100% - 3rem));
    height: 100%;
    margin: 0 auto;
  }

  .timu-kicker {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin: 0 0 0.9rem;
    color: #ffd8bd !important;
    font-size: 0.88rem !important;
    font-weight: 700;
    letter-spacing: 0 !important;
    text-transform: uppercase;
  }

  .timu-kicker::before {
    content: "";
    width: 28px;
    height: 2px;
    background: #f28b3c;
  }

  .timu-hero-inner > * {
    opacity: 0;
    transform: translateY(14px);
    animation: timu-hero-content 650ms ease-out forwards;
  }

  .timu-hero-inner > :nth-child(2) { animation-delay: 80ms; }
  .timu-hero-inner > :nth-child(3) { animation-delay: 150ms; }
  .timu-hero-inner > :nth-child(4) { animation-delay: 220ms; }
  .timu-hero-inner > :nth-child(5) { animation-delay: 290ms; }

  .timu-hero h1 {
    max-width: 760px;
    margin: 0;
    color: #ffffff;
    font-size: 4.1rem;
    font-weight: 800;
    line-height: 1.02;
    letter-spacing: 0;
  }

  .timu-hero-subtitle {
    max-width: 760px;
    margin: 1rem 0 0;
    color: #ffffff !important;
    font-size: 1.65rem !important;
    font-weight: 500;
    line-height: 1.3 !important;
  }

  .timu-hero-summary {
    max-width: 720px;
    margin: 1rem 0 0;
    color: rgba(255, 255, 255, 0.82) !important;
    font-size: 1.02rem !important;
    line-height: 1.65 !important;
  }

  .timu-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1.6rem;
  }

  .timu-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    gap: 0.5rem;
    padding: 0.68rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 6px;
    color: #ffffff !important;
    background: rgba(17, 20, 24, 0.46);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(8px);
    font-size: 0.94rem;
    font-weight: 700;
    text-decoration: none !important;
    transition: background-color 150ms ease, border-color 150ms ease, transform 150ms ease;
  }

  .timu-action--primary {
    border-color: #ffffff;
    color: #202329 !important;
    background: #ffffff;
  }

  .timu-action:hover,
  .timu-action:focus-visible {
    border-color: #ffffff;
    color: #ffffff !important;
    background: var(--timu-accent);
    transform: translateY(-1px);
  }

  .timu-action--primary:hover,
  .timu-action--primary:focus-visible {
    color: #ffffff !important;
  }

  .timu-inference-callout {
    width: 100%;
    margin-bottom: 1.75rem;
    border-top: 1px solid #dce2df;
    border-bottom: 1px solid #dce2df;
    background: #f3f6f5;
  }

  .timu-inference-callout-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(1040px, calc(100% - 3rem));
    gap: 2.5rem;
    margin: 0 auto;
    padding: 1.5rem 0;
  }

  .timu-inference-callout-copy {
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr);
    align-items: center;
    gap: 1rem;
  }

  .timu-inference-callout-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border: 1px solid #d7b08e;
    border-radius: 6px;
    color: var(--timu-accent-dark);
    background: #ffffff;
    box-shadow: 0 5px 14px rgba(32, 35, 41, 0.08);
    font-size: 1.15rem;
  }

  .timu-inference-callout-label {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin-bottom: 0.25rem;
    color: #32664e;
    font-size: 0.76rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .timu-inference-callout-label::before {
    content: "";
    width: 8px;
    height: 8px;
    flex: none;
    border-radius: 50%;
    background: #2e8b57;
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.14);
  }

  .timu-inference-callout h2 {
    margin: 0;
    color: var(--timu-ink);
    font-size: 1.35rem;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: 0;
  }

  .timu-inference-callout p {
    margin: 0.35rem 0 0;
    color: var(--timu-muted);
    font-size: 0.94rem;
    line-height: 1.5;
  }

  .timu-inference-cta,
  .timu-inference-cta:visited {
    min-height: 46px;
    flex: none;
    border-color: var(--timu-accent-dark);
    color: #ffffff !important;
    background: var(--timu-accent-dark);
    box-shadow: 0 7px 18px rgba(145, 59, 5, 0.2);
    backdrop-filter: none;
  }

  .timu-inference-cta:hover,
  .timu-inference-cta:focus-visible {
    border-color: #6f2b03;
    color: #ffffff !important;
    background: #6f2b03;
  }

  .timu-paper-meta {
    padding: 2.25rem 1.5rem 2.5rem;
    text-align: center;
  }

  .timu-paper-meta-inner {
    max-width: 1040px;
    margin: 0 auto;
  }

  .timu-authors {
    margin: 0;
    color: var(--timu-ink) !important;
    font-size: 1.12rem !important;
    font-weight: 600;
    line-height: 1.8 !important;
  }

  .timu-affiliation {
    margin: 0.45rem 0 0;
    font-size: 0.94rem !important;
  }

  .timu-publication-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1.5rem;
    margin-top: 1.15rem;
  }

  .timu-publication-links .timu-text-link {
    font-size: 0.9rem;
  }

  .timu-story {
    display: grid;
    grid-template-columns: repeat(7, auto);
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    max-width: 820px;
    margin: 1.75rem auto 0;
    padding: 1rem 0;
    border-top: 1px solid var(--timu-line);
    border-bottom: 1px solid var(--timu-line);
  }

  .timu-story-step {
    display: flex;
    align-items: center;
    min-width: 0;
    gap: 0.5rem;
    text-align: left;
  }

  .timu-story-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
    border: 1px solid #edc8ad;
    border-radius: 6px;
    color: var(--timu-accent);
    background: var(--timu-accent-soft);
  }

  .timu-story-name {
    display: block;
    color: var(--timu-ink);
    font-size: 0.9rem;
    font-weight: 700;
  }

  .timu-story-arrow {
    color: #b5bac1;
    font-size: 0.78rem;
  }

  .timu-challenge-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: min(1040px, calc(100% - 3rem));
    margin: 0 auto 2.75rem;
    padding: 1.2rem 0;
    border-top: 1px solid var(--timu-line);
    border-bottom: 1px solid var(--timu-line);
  }

  .timu-challenge-link p {
    margin: 0;
    color: var(--timu-ink);
  }

  .timu-challenge-link strong {
    color: var(--timu-accent-dark);
  }

  .timu-text-link {
    display: inline-flex;
    align-items: center;
    flex: none;
    gap: 0.45rem;
    color: var(--timu-accent-dark) !important;
    font-weight: 700;
    text-decoration: none !important;
  }

  .timu-text-link:hover,
  .timu-text-link:focus-visible {
    text-decoration: underline !important;
  }

  .timu-section {
    width: 100%;
    padding: 3.5rem 1.5rem;
    border-top: 1px solid var(--timu-line);
    scroll-margin-top: 76px;
  }

  .timu-section--surface {
    background: var(--timu-surface);
  }

  .timu-inner {
    width: 100%;
    max-width: 820px;
    margin: 0 auto;
  }

  .timu-inner--wide {
    max-width: 1040px;
  }

  .timu-section-heading {
    position: relative;
    margin-bottom: 2rem;
    padding-left: 1.25rem;
    border-left: 3px solid var(--timu-accent);
  }

  .timu-section-index {
    display: block;
    margin-bottom: 0.45rem;
    color: var(--timu-accent-dark);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .timu-section h2 {
    margin: 0;
    color: var(--timu-ink);
    font-size: 2.15rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0;
  }

  .timu-section-lead {
    max-width: 740px;
    margin: 0.9rem 0 0;
    color: var(--timu-muted);
    font-size: 1.12rem !important;
  }

  .timu-metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 2.5rem 0 3rem;
    border-top: 1px solid var(--timu-line);
    border-bottom: 1px solid var(--timu-line);
  }

  .timu-metrics > div {
    padding: 1.35rem 1rem;
    text-align: center;
  }

  .timu-metrics > div + div {
    border-left: 1px solid var(--timu-line);
  }

  .timu-metrics dt {
    color: var(--timu-muted);
    font-size: 0.82rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .timu-metrics dd {
    margin: 0.3rem 0 0;
    color: var(--timu-ink);
    font-size: 1.7rem;
    font-weight: 800;
  }

  .timu-feature-video {
    width: min(920px, 100%);
    margin: 0 auto;
  }

  .timu-feature-video-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px solid var(--timu-line);
  }

  .timu-block-label {
    display: block;
    margin-bottom: 0.3rem;
    color: var(--timu-accent-dark);
    font-size: 0.74rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .timu-feature-video-heading h3 {
    margin: 0;
    color: var(--timu-ink);
    font-size: 1.3rem;
    font-weight: 800;
  }

  .timu-feature-video-heading a {
    flex: none;
    font-size: 0.86rem;
    font-weight: 700;
    text-decoration: none;
  }

  .timu-feature-video video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 1px solid var(--timu-line);
    border-radius: 8px;
    object-fit: contain;
    background: #111318;
    box-shadow: 0 14px 34px rgba(32, 35, 41, 0.1);
  }

  .timu-feature-video figcaption {
    max-width: 880px;
    margin: 0.8rem auto 0;
    color: var(--timu-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    text-align: center;
  }

  .timu-comparison {
    width: min(980px, 100%);
    margin: 3.25rem auto 0;
    padding-top: 3rem;
    border-top: 1px solid var(--timu-line);
  }

  .timu-comparison-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
  }

  .timu-comparison-header h3 {
    margin: 0;
    color: var(--timu-ink);
    font-size: 1.45rem;
    font-weight: 800;
    line-height: 1.25;
  }

  .timu-comparison-header p {
    max-width: 720px;
    margin: 0.55rem 0 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .timu-comparison-tabs {
    display: flex;
    gap: 0.35rem;
    margin: 1.5rem 0 1.75rem;
    overflow-x: auto;
    border-bottom: 1px solid var(--timu-line);
  }

  .timu-comparison-tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    gap: 0.5rem;
    flex: 0 0 auto;
    padding: 0.65rem 0.85rem;
    border: 0;
    border-bottom: 3px solid transparent;
    border-radius: 0;
    color: var(--timu-muted);
    background: transparent;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
  }

  .timu-comparison-tab:hover,
  .timu-comparison-tab:focus-visible,
  .timu-comparison-tab.active {
    border-bottom-color: var(--timu-accent);
    color: var(--timu-accent-dark);
    background: var(--timu-accent-soft);
  }

  .timu-comparison-panel[hidden] {
    display: none !important;
  }

  .timu-comparison-context {
    display: grid;
    grid-template-columns: 118px minmax(0, 1fr);
    gap: 1.1rem;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--timu-line);
  }

  .timu-comparison-context img {
    display: block;
    width: 118px;
    height: 72px;
    border: 1px solid var(--timu-line);
    border-radius: 6px;
    object-fit: contain;
    background: #ffffff;
  }

  .timu-comparison-context span,
  .timu-comparison-card-eyebrow {
    color: var(--timu-accent-dark);
    font-size: 0.74rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .timu-comparison-context h4 {
    margin: 0.2rem 0 0;
    color: var(--timu-ink);
    font-size: 1.08rem;
    font-weight: 800;
  }

  .timu-comparison-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .timu-comparison-card {
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--timu-line);
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 6px 18px rgba(32, 35, 41, 0.06);
    transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
  }

  .timu-comparison-card.is-featured {
    border-color: #d78a50;
    box-shadow: inset 0 3px 0 var(--timu-accent);
  }

  .timu-comparison-card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 100px;
    gap: 0.5rem;
    padding: 0.8rem;
  }

  .timu-comparison-card h5 {
    margin: 0.25rem 0 0;
    color: var(--timu-ink);
    font-size: 0.92rem;
    font-weight: 800;
    line-height: 1.25;
  }

  .timu-comparison-card p {
    margin: 0.25rem 0 0;
    font-size: 0.78rem;
    line-height: 1.35;
  }

  .timu-fullscreen-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex: 0 0 36px;
    padding: 0;
    border: 1px solid #c7cbd1;
    border-radius: 6px;
    color: var(--timu-ink);
    background: #ffffff;
    cursor: pointer;
  }

  .timu-fullscreen-button:hover,
  .timu-fullscreen-button:focus-visible {
    border-color: var(--timu-accent);
    color: var(--timu-accent-dark);
    background: var(--timu-accent-soft);
  }

  .timu-comparison-card video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: contain;
    background: #111318;
  }

  .timu-platform-card {
    overflow: hidden;
    border: 1px solid var(--timu-line);
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 5px 16px rgba(32, 35, 41, 0.05);
    transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
  }

  @media (hover: hover) {
    .timu-comparison-card:hover,
    .timu-platform-card:hover {
      border-color: #d7b397;
      box-shadow: 0 12px 28px rgba(32, 35, 41, 0.11);
      transform: translateY(-3px);
    }
  }

  .timu-science-showcase {
    width: min(880px, 100%);
    margin: 2.75rem auto 0;
    padding-top: 2.25rem;
    border-top: 1px solid var(--timu-line);
  }

  .timu-science-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
  }

  .timu-science-header h3 {
    margin: 0;
    color: var(--timu-ink);
    font-size: 1.35rem;
    font-weight: 800;
    line-height: 1.25;
  }

  .timu-science-header p {
    max-width: 430px;
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.55;
    text-align: right;
  }

  .timu-science-tabs {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
    margin: 1.35rem 0 1rem;
  }

  .timu-science-tab {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    align-items: center;
    min-width: 0;
    min-height: 64px;
    gap: 0.65rem;
    padding: 0.7rem 0.75rem;
    border: 1px solid #cfd3d8;
    border-radius: 6px;
    color: var(--timu-ink);
    background: #ffffff;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition: border-color 150ms ease, background-color 150ms ease, box-shadow 150ms ease;
  }

  .timu-science-tab:hover,
  .timu-science-tab:focus-visible {
    border-color: var(--timu-accent);
    background: var(--timu-accent-soft);
  }

  .timu-science-tab.active {
    border-color: var(--timu-accent);
    color: var(--timu-accent-dark);
    background: var(--timu-accent-soft);
    box-shadow: inset 0 3px 0 var(--timu-accent);
  }

  .timu-science-tab-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 6px;
    color: var(--timu-muted);
    background: #eef0f2;
  }

  .timu-science-tab.active .timu-science-tab-icon {
    color: #ffffff;
    background: var(--timu-accent);
  }

  .timu-science-tab-copy {
    min-width: 0;
  }

  .timu-science-tab-name,
  .timu-science-tab-duration {
    display: block;
  }

  .timu-science-tab-name {
    overflow: hidden;
    font-size: 0.87rem;
    font-weight: 800;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .timu-science-tab-duration {
    margin-top: 0.25rem;
    color: var(--timu-muted);
    font-size: 0.76rem;
    font-variant-numeric: tabular-nums;
  }

  .timu-science-stage {
    width: 100%;
    margin: 0 !important;
    overflow: hidden;
    border: 1px solid var(--timu-line);
    border-radius: 8px;
    background: #111318;
    box-shadow: 0 12px 30px rgba(32, 35, 41, 0.1);
  }

  .timu-science-video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: contain;
    background: #111318;
  }

  .timu-science-caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.85rem 1rem;
    border-top: 1px solid var(--timu-line);
    color: var(--timu-muted);
    background: #ffffff;
    font-size: 0.86rem;
  }

  .timu-science-caption strong {
    color: var(--timu-ink);
  }

  .timu-science-caption-duration {
    flex: none;
    color: var(--timu-accent-dark);
    font-weight: 800;
    font-variant-numeric: tabular-nums;
  }

  .timu-page figure.timu-figure {
    position: relative;
    left: 50%;
    width: min(900px, calc(100vw - 3rem));
    margin: 2.25rem 0 0;
    transform: translateX(-50%);
  }

  .timu-page figure.timu-figure--contained {
    left: auto;
    width: min(860px, 100%);
    margin-right: auto;
    margin-left: auto;
    transform: none;
  }

  .timu-figure img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--timu-line);
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 12px 30px rgba(32, 35, 41, 0.08);
  }

  .timu-figure figcaption,
  .timu-stage-media figcaption {
    max-width: 860px;
    margin: 0.8rem auto 0;
    color: var(--timu-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    text-align: center;
  }

  .timu-contributions {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  .timu-contribution {
    padding-top: 1rem;
    border-top: 2px solid var(--timu-accent);
  }

  .timu-contribution span {
    color: var(--timu-accent-dark);
    font-size: 0.8rem;
    font-weight: 800;
  }

  .timu-contribution h3 {
    margin: 0.35rem 0 0.45rem;
    color: var(--timu-ink);
    font-size: 1.05rem;
    font-weight: 700;
  }

  .timu-contribution p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .timu-stage-list {
    margin-top: 2.5rem;
  }

  .timu-stage {
    display: grid;
    grid-template-columns: 210px minmax(0, 720px);
    justify-content: center;
    gap: 2rem;
    padding: 2.25rem 0;
    border-top: 1px solid var(--timu-line);
  }

  .timu-stage:last-child {
    border-bottom: 1px solid var(--timu-line);
  }

  .timu-stage-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    margin-bottom: 0.75rem;
    border: 1.5px solid var(--timu-accent);
    border-radius: 50%;
    color: var(--timu-accent-dark);
    font-size: 0.9rem;
    font-weight: 800;
  }

  .timu-stage h3 {
    margin: 0;
    color: var(--timu-ink);
    font-size: 1.25rem;
    font-weight: 800;
  }

  .timu-stage-copy p {
    margin: 0.7rem 0 0;
    font-size: 0.98rem;
    line-height: 1.7;
  }

  .timu-stage-media img {
    display: block;
    width: 100%;
    max-height: 520px;
    height: auto;
    border: 1px solid var(--timu-line);
    border-radius: 8px;
    object-fit: contain;
    background: #ffffff;
  }

  .timu-stage-media-grid {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(180px, 1fr);
    gap: 1rem;
    align-items: center;
  }

  .timu-platform-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    width: min(1000px, 100%);
    margin: 2.5rem auto 0;
  }

  .timu-platform-card img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .timu-platform-card-body {
    padding: 0.9rem 1rem 1rem;
    border-top: 3px solid var(--platform-color, var(--timu-accent));
  }

  .timu-platform-card h3 {
    margin: 0;
    color: var(--timu-ink);
    font-size: 1rem;
    font-weight: 800;
  }

  .timu-platform-card p {
    margin: 0.3rem 0 0;
    font-size: 0.86rem;
    line-height: 1.45;
  }

  .timu-dataset-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
    width: min(1000px, 100%);
    margin: 2rem auto 0;
  }

  .timu-note {
    margin-top: 2rem;
    padding: 0.25rem 0 0.25rem 1.25rem;
    border-left: 3px solid var(--timu-accent);
  }

  .timu-note p {
    margin: 0;
    color: var(--timu-ink);
  }

  .timu-citation-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .timu-copy-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 40px;
    padding: 0.55rem 0.85rem;
    border: 1px solid #c7cbd1;
    border-radius: 6px;
    color: var(--timu-ink);
    background: #ffffff;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
  }

  .timu-copy-button:hover,
  .timu-copy-button:focus-visible {
    border-color: var(--timu-accent);
    color: var(--timu-accent-dark);
  }

  .timu-citation {
    margin: 0.9rem 0 0;
    padding: 1.25rem;
    overflow-x: auto;
    border: 1px solid var(--timu-line);
    border-radius: 8px;
    color: #e7e9ed;
    background: #202329;
    font-size: 0.86rem;
    line-height: 1.6;
  }

  .timu-bottom-cta {
    padding: 3.5rem 1.5rem;
    color: #ffffff;
    background: #202329;
  }

  .timu-bottom-cta-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    max-width: 1040px;
    margin: 0 auto;
  }

  .timu-bottom-cta h2 {
    margin: 0;
    color: #ffffff;
    font-size: 1.65rem;
    font-weight: 800;
    letter-spacing: 0;
  }

  .timu-bottom-cta p {
    margin: 0.45rem 0 0;
    color: rgba(255, 255, 255, 0.72);
  }

  .timu-reveal {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 520ms ease, transform 520ms cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  .timu-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes timu-hero-settle {
    from { transform: scale(1.04); }
    to { transform: scale(1.015); }
  }

  @keyframes timu-hero-content {
    to { opacity: 1; transform: translateY(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .timu-hero-image,
    .timu-hero-inner > * {
      opacity: 1;
      transform: none;
      animation: none;
    }

    .timu-reveal,
    .timu-reveal.is-visible {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .timu-comparison-card,
    .timu-platform-card {
      transition: none;
    }
  }

  @media (max-width: 1024px) {
    .timu-hero h1 {
      font-size: 3.55rem;
    }

    .timu-contributions {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .timu-platform-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .timu-hero {
      height: 500px;
      min-height: 440px;
    }

    .timu-hero-inner {
      width: min(100% - 2rem, 1120px);
    }

    .timu-hero h1 {
      font-size: 3rem;
    }

    .timu-hero-subtitle {
      font-size: 1.25rem !important;
    }

    .timu-hero-summary {
      font-size: 0.94rem !important;
    }

    .timu-paper-meta {
      padding: 2.5rem 1rem 3rem;
    }

    .timu-story {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .timu-story-arrow {
      display: none;
    }

    .timu-challenge-link,
    .timu-inference-callout-inner,
    .timu-bottom-cta-inner {
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
    }

    .timu-inference-callout-inner {
      width: min(1040px, calc(100% - 2rem));
      padding: 1.25rem 0;
    }

    .timu-inference-cta {
      align-self: stretch;
    }

    .timu-science-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.5rem;
    }

    .timu-science-header p {
      max-width: 620px;
      text-align: left;
    }

    .timu-science-tabs {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .timu-section {
      padding: 3rem 1rem;
    }

    .timu-section h2 {
      font-size: 1.75rem;
    }

    .timu-metrics {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .timu-metrics > div + div {
      border-left: 0;
    }

    .timu-metrics > div:nth-child(even) {
      border-left: 1px solid var(--timu-line);
    }

    .timu-metrics > div:nth-child(n + 3) {
      border-top: 1px solid var(--timu-line);
    }

    .timu-stage,
    .timu-stage-media-grid,
    .timu-comparison-grid {
      grid-template-columns: 1fr;
    }

    .timu-comparison-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.75rem;
    }

    .timu-comparison-context {
      grid-template-columns: 88px minmax(0, 1fr);
    }

    .timu-comparison-context img {
      width: 88px;
      height: 60px;
    }

    .timu-comparison-card-header {
      min-height: 0;
    }

    .timu-stage {
      gap: 1.25rem;
    }

    .timu-page figure.timu-figure {
      left: auto;
      width: 100%;
      margin: 2.25rem 0 0;
      transform: none;
    }

    .timu-citation-bar {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (max-width: 520px) {
    .timu-hero {
      height: 500px;
      min-height: 500px;
    }

    .timu-hero h1 {
      font-size: 2.55rem;
    }

    .timu-actions {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100%;
    }

    .timu-action {
      width: 100%;
      padding: 0.62rem 0.7rem;
      font-size: 0.86rem;
    }

    .timu-authors {
      font-size: 1rem !important;
    }

    .timu-platform-grid {
      grid-template-columns: 1fr;
    }

    .timu-bottom-cta h2 {
      font-size: 1.4rem;
    }
  }
</style>

<div class="timu-page">
  <header class="timu-hero" aria-labelledby="timu-title">
    <img class="timu-hero-image" src="/img/tartanimu/firstpage.png" alt="TartanIMU operating across ground vehicle, quadruped, drone, and human motion platforms" width="3545" height="1604" fetchpriority="high" decoding="async">
    <div class="timu-hero-shade" aria-hidden="true"></div>
    <div class="timu-hero-inner">
      <p class="timu-kicker">CVPR 2025</p>
      <h1 id="timu-title">TartanIMU</h1>
      <p class="timu-hero-subtitle">A Light Foundation Model for Inertial Positioning in Robotics</p>
      <p class="timu-hero-summary">One inertial model learns motion across ground vehicles, quadrupeds, drones, and humans, then adapts efficiently to new robots and operating conditions.</p>
      <div class="timu-actions" aria-label="TartanIMU resources">
        <a class="timu-action timu-action--primary" href="https://superodometry.com/imuchallenge/data/explorer/" target="_blank" rel="noopener"><i class="fas fa-bolt" aria-hidden="true"></i> Live Inference</a>
        <a class="timu-action" href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> Code</a>
        <a class="timu-action" href="https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_Positioning_in_CVPR_2025_paper.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i> Paper</a>
        <a class="timu-action" href="/imuchallenge/data/"><i class="fas fa-database" aria-hidden="true"></i> Dataset</a>
      </div>
    </div>
  </header>

  <section class="timu-paper-meta" aria-label="Publication information">
    <div class="timu-paper-meta-inner">
      <p class="timu-authors">Shibo Zhao<sup>1&dagger;*</sup> &middot; Sifan Zhou<sup>1&dagger;*</sup> &middot; Raphael Blanchard<sup>1</sup> &middot; Yuheng Qiu<sup>1</sup> &middot; Wenshan Wang<sup>1</sup> &middot; Sebastian Scherer<sup>1</sup></p>
      <p class="timu-affiliation"><sup>1</sup>Carnegie Mellon University &nbsp; <sup>&dagger;</sup>Equal contribution &nbsp; <sup>*</sup>Corresponding authors</p>
      <div class="timu-publication-links" aria-label="Additional publication resources">
        <a class="timu-text-link" href="/img/tartanimu/CVPR_Poster.pdf" target="_blank" rel="noopener"><i class="fas fa-image" aria-hidden="true"></i> Poster</a>
        <a class="timu-text-link" href="#citation"><i class="fas fa-quote-left" aria-hidden="true"></i> BibTeX</a>
      </div>

      <div class="timu-story" aria-label="TartanIMU learning pipeline">
        <div class="timu-story-step">
          <span class="timu-story-icon"><i class="fas fa-layer-group" aria-hidden="true"></i></span>
          <span class="timu-story-name">Pretrain</span>
        </div>
        <i class="fas fa-arrow-right timu-story-arrow" aria-hidden="true"></i>
        <div class="timu-story-step">
          <span class="timu-story-icon"><i class="fas fa-project-diagram" aria-hidden="true"></i></span>
          <span class="timu-story-name">Generalize</span>
        </div>
        <i class="fas fa-arrow-right timu-story-arrow" aria-hidden="true"></i>
        <div class="timu-story-step">
          <span class="timu-story-icon"><i class="fas fa-sliders-h" aria-hidden="true"></i></span>
          <span class="timu-story-name">Adapt</span>
        </div>
        <i class="fas fa-arrow-right timu-story-arrow" aria-hidden="true"></i>
        <div class="timu-story-step">
          <span class="timu-story-icon"><i class="fas fa-bolt" aria-hidden="true"></i></span>
          <span class="timu-story-name">Deploy</span>
        </div>
      </div>
    </div>
  </section>

  <section class="timu-inference-callout" aria-labelledby="timu-inference-title">
    <div class="timu-inference-callout-inner">
      <div class="timu-inference-callout-copy">
        <span class="timu-inference-callout-icon" aria-hidden="true"><i class="fas fa-bolt"></i></span>
        <div>
          <span class="timu-inference-callout-label">Live TartanIMU</span>
          <h2 id="timu-inference-title">Run TartanIMU inference online</h2>
          <p>Explore IMU sequences and inspect model predictions directly in your browser.</p>
        </div>
      </div>
      <a class="timu-action timu-inference-cta" href="https://superodometry.com/imuchallenge/data/explorer/" target="_blank" rel="noopener">Launch Data Explorer <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
    </div>
  </section>

  <div class="timu-challenge-link">
    <p><strong>Put cross-platform inertial models to the test.</strong> The IROS 2026 IMU Odometry Challenge provides a platform-blind benchmark across four embodiments.</p>
    <a class="timu-text-link" href="/imuchallenge/">View the challenge <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>

  <section class="timu-section timu-section--surface" id="results">
    <div class="timu-inner timu-inner--wide">
      <div class="timu-section-heading">
        <span class="timu-section-index">01 / Results</span>
        <h2>One foundation model, four motion domains</h2>
        <p class="timu-section-lead">TartanIMU transfers motion knowledge across distinct embodiments instead of training an isolated model for every platform.</p>
      </div>

      <dl class="timu-metrics">
        <div><dt>Training data</dt><dd>100+ hrs</dd></div>
        <div><dt>Platforms</dt><dd>4</dd></div>
        <div><dt>ATE improvement</dt><dd>36%</dd></div>
        <div><dt>Online speed</dt><dd>200 FPS</dd></div>
      </dl>

      <figure class="timu-feature-video">
        <div class="timu-feature-video-heading">
          <div><span class="timu-block-label">Benchmark overview</span><h3>Cross-model IMU odometry comparison</h3></div>
          <a href="https://cmu-superx.github.io/HERO/" target="_blank" rel="noopener">Source: HERO <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
        </div>
        <video controls muted playsinline preload="metadata" aria-label="Comparison of expert IMU odometry models and the pretrained foundation model">
          <source src="https://cmu-superx.github.io/HERO/static/videos/learning_imu_odometry_comparsion.mp4" type="video/mp4">
        </video>
        <figcaption>Qualitative pose comparison across specialist baselines and the shared IMU pretrained model. Video provided by the HERO project.</figcaption>
      </figure>

      <section class="timu-comparison" aria-labelledby="timu-comparison-title">
        <div class="timu-comparison-header">
          <div>
            <span class="timu-block-label">Interactive benchmark</span>
            <h3 id="timu-comparison-title">Detailed single-trajectory comparison</h3>
            <p>Compare platform-specific expert models with the shared IMU pretrained model on the same car, quadruped, human, and drone trajectories.</p>
          </div>
          <a class="timu-text-link" href="https://cmu-superx.github.io/HERO/" target="_blank" rel="noopener">Source: HERO <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
        </div>

        <div class="timu-comparison-tabs" role="tablist" aria-label="Trajectory comparisons">
          {% for trajectory in site.data.tartanimu_comparisons %}
          <button class="timu-comparison-tab{% if forloop.first %} active{% endif %}" id="timu-comparison-tab-{{ trajectory.id }}" type="button" role="tab" aria-selected="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="timu-comparison-panel-{{ trajectory.id }}" tabindex="{% if forloop.first %}0{% else %}-1{% endif %}" data-comparison-tab="{{ trajectory.id }}">
            <i class="{{ trajectory.icon }}" aria-hidden="true"></i><span>{{ trajectory.short_name }}</span>
          </button>
          {% endfor %}
        </div>

        {% for trajectory in site.data.tartanimu_comparisons %}
        <section class="timu-comparison-panel" id="timu-comparison-panel-{{ trajectory.id }}" role="tabpanel" aria-labelledby="timu-comparison-tab-{{ trajectory.id }}" data-comparison-panel="{{ trajectory.id }}"{% unless forloop.first %} hidden{% endunless %}>
          <div class="timu-comparison-context">
            <img src="{{ trajectory.image }}" alt="{{ trajectory.image_alt }}" loading="lazy" decoding="async">
            <div><span>Trajectory {{ forloop.index | prepend: '0' }}</span><h4>{{ trajectory.name }}</h4></div>
          </div>
          <div class="timu-comparison-grid">
            {% for clip in trajectory.clips %}
            <article class="timu-comparison-card{% if clip.featured %} is-featured{% endif %}">
              <div class="timu-comparison-card-header">
                <div>
                  <span class="timu-comparison-card-eyebrow">{% if clip.featured %}Shared pretrain{% else %}Expert model{% endif %}</span>
                  <h5>{{ clip.model }}</h5>
                  <p>{{ clip.method }}</p>
                </div>
                <button class="timu-fullscreen-button" type="button" data-video-fullscreen aria-label="View {{ clip.model }} on the {{ trajectory.name | downcase }} in full screen" title="View full screen"><i class="fas fa-expand" aria-hidden="true"></i></button>
              </div>
              <video class="timu-comparison-video" controls muted loop playsinline preload="none" poster="{{ trajectory.image }}" aria-label="{{ clip.model }}, {{ clip.method }}, on the {{ trajectory.name | downcase }}">
                <source src="{{ clip.source }}" type="video/mp4">
              </video>
            </article>
            {% endfor %}
          </div>
        </section>
        {% endfor %}
      </section>

      <section class="timu-science-showcase" aria-labelledby="timu-science-title">
        <header class="timu-science-header">
          <div>
            <span class="timu-block-label">Science Robotics Movie 5.1</span>
            <h3 id="timu-science-title">TartanIMU predictions by platform</h3>
          </div>
          <p>Ground-truth trajectories and network predictions across four robot platforms.</p>
        </header>

        <div class="timu-science-tabs" role="tablist" aria-label="Robot platform results">
          <button class="timu-science-tab active" id="timu-science-tab-ground" type="button" role="tab" aria-selected="true" aria-controls="timu-science-panel" tabindex="0" data-science-source="/video/tartanimu/science-robotics-ground-vehicle.mp4" data-science-poster="/img/tartanimu/science-robotics-ground-vehicle.jpg" data-science-name="Ground vehicle" data-science-duration="00:30">
            <span class="timu-science-tab-icon"><i class="fas fa-car-side" aria-hidden="true"></i></span><span class="timu-science-tab-copy"><span class="timu-science-tab-name">Ground vehicle</span><span class="timu-science-tab-duration">00:30</span></span>
          </button>
          <button class="timu-science-tab" id="timu-science-tab-quadruped" type="button" role="tab" aria-selected="false" aria-controls="timu-science-panel" tabindex="-1" data-science-source="/video/tartanimu/science-robotics-quadruped.mp4" data-science-poster="/img/tartanimu/science-robotics-quadruped.jpg" data-science-name="Quadruped" data-science-duration="00:36">
            <span class="timu-science-tab-icon"><i class="fas fa-robot" aria-hidden="true"></i></span><span class="timu-science-tab-copy"><span class="timu-science-tab-name">Quadruped</span><span class="timu-science-tab-duration">00:36</span></span>
          </button>
          <button class="timu-science-tab" id="timu-science-tab-drone" type="button" role="tab" aria-selected="false" aria-controls="timu-science-panel" tabindex="-1" data-science-source="/video/tartanimu/science-robotics-drone.mp4" data-science-poster="/img/tartanimu/science-robotics-drone.jpg" data-science-name="Drone" data-science-duration="00:21">
            <span class="timu-science-tab-icon"><i class="fas fa-paper-plane" aria-hidden="true"></i></span><span class="timu-science-tab-copy"><span class="timu-science-tab-name">Drone</span><span class="timu-science-tab-duration">00:21</span></span>
          </button>
          <button class="timu-science-tab" id="timu-science-tab-human" type="button" role="tab" aria-selected="false" aria-controls="timu-science-panel" tabindex="-1" data-science-source="/video/tartanimu/science-robotics-human-motion.mp4" data-science-poster="/img/tartanimu/science-robotics-human-motion.jpg" data-science-name="Human motion" data-science-duration="00:23">
            <span class="timu-science-tab-icon"><i class="fas fa-walking" aria-hidden="true"></i></span><span class="timu-science-tab-copy"><span class="timu-science-tab-name">Human motion</span><span class="timu-science-tab-duration">00:23</span></span>
          </button>
        </div>

        <figure class="timu-science-stage" id="timu-science-panel" role="tabpanel" aria-labelledby="timu-science-tab-ground">
          <video class="timu-science-video" id="timu-science-video" controls playsinline preload="metadata" poster="/img/tartanimu/science-robotics-ground-vehicle.jpg" aria-label="Science Robotics Ground vehicle TartanIMU prediction">
            <source src="/video/tartanimu/science-robotics-ground-vehicle.mp4" type="video/mp4">
          </video>
          <figcaption class="timu-science-caption"><span><strong id="timu-science-platform">Ground vehicle</strong> · Science Robotics Movie 5.1</span><span class="timu-science-caption-duration" id="timu-science-duration">00:30</span></figcaption>
        </figure>
      </section>
    </div>
  </section>

  <section class="timu-section" id="overview">
    <div class="timu-inner">
      <div class="timu-section-heading">
        <span class="timu-section-index">02 / Overview</span>
        <h2>Generalizable inertial positioning</h2>
        <p class="timu-section-lead">Most learned IMU odometry systems overfit one dataset or one robot. TartanIMU learns shared motion structure from diverse platforms, then adapts without discarding that general representation.</p>
      </div>

      <p>The system combines large-scale pretraining, parameter-efficient fine-tuning, and online test-time adaptation. This progression supports both zero-shot transfer and rapid specialization when a deployment introduces an unseen motion pattern or domain shift.</p>

      <div class="timu-contributions">
        <article class="timu-contribution">
          <span>01</span>
          <h3>Cross-robot pretraining</h3>
          <p>A shared backbone captures motion knowledge across ground vehicles, quadrupeds, drones, and humans.</p>
        </article>
        <article class="timu-contribution">
          <span>02</span>
          <h3>Efficient transfer</h3>
          <p>LoRA adapts the model to new tasks with 1.1 million trainable parameters while retaining prior knowledge.</p>
        </article>
        <article class="timu-contribution">
          <span>03</span>
          <h3>Continuous adaptation</h3>
          <p>An adaptive memory buffer supports real-time updates as motion and operating conditions change.</p>
        </article>
      </div>

      <figure class="timu-figure">
        <img src="/img/tartanimu/firstpage.png" alt="Overview of TartanIMU across multiple robot embodiments and adaptation stages" width="3545" height="1604" loading="lazy" decoding="async">
        <figcaption>TartanIMU is an open-source, cross-robot foundation model for state estimation from IMU measurements.</figcaption>
      </figure>
    </div>
  </section>

  <section class="timu-section timu-section--surface" id="method">
    <div class="timu-inner timu-inner--wide">
      <div class="timu-section-heading">
        <span class="timu-section-index">03 / Method</span>
        <h2>Three stages from pretraining to deployment</h2>
        <p class="timu-section-lead">The same model moves from broad motion learning to lightweight task adaptation and finally to online updates in the field.</p>
      </div>

      <figure class="timu-figure timu-figure--contained">
        <img src="/img/tartanimu/systempipeline.png" alt="TartanIMU architecture showing pretraining, efficient fine-tuning, and online adaptation" width="1592" height="1145" loading="lazy" decoding="async">
        <figcaption>The TartanIMU pipeline: shared pretraining, adapter-based fine-tuning, and online adaptation with an adaptive memory buffer.</figcaption>
      </figure>

      <div class="timu-stage-list">
        <article class="timu-stage">
          <div class="timu-stage-copy">
            <span class="timu-stage-number">1</span>
            <h3>Pretrained IMU model</h3>
            <p>A shared backbone learns general motion patterns from more than 100 hours of multi-platform inertial data.</p>
          </div>
          <figure class="timu-stage-media">
            <img src="/img/tartanimu/tsne_viz.png" alt="t-SNE visualization of TartanIMU feature clusters across robot platforms" width="1222" height="830" loading="lazy" decoding="async">
            <figcaption>Learned features separate platform dynamics while preserving a shared inertial representation.</figcaption>
          </figure>
        </article>

        <article class="timu-stage">
          <div class="timu-stage-copy">
            <span class="timu-stage-number">2</span>
            <h3>Efficient fine-tuning</h3>
            <p>Low-Rank Adaptation freezes the foundation model and trains compact adapters for new tasks, enabling positive transfer with limited data and compute.</p>
          </div>
          <figure class="timu-stage-media">
            <div class="timu-stage-media-grid">
              <img src="/img/tartanimu/Offline_Finetuning.png" alt="TartanIMU offline fine-tuning evaluation" width="1485" height="619" loading="lazy" decoding="async">
              <img src="/img/tartanimu/no_forgetting.png" alt="Comparison showing retained performance after LoRA adaptation" width="445" height="381" loading="lazy" decoding="async">
            </div>
            <figcaption>LoRA improves adaptation performance while reducing catastrophic forgetting.</figcaption>
          </figure>
        </article>

        <article class="timu-stage">
          <div class="timu-stage-copy">
            <span class="timu-stage-number">3</span>
            <h3>Online adaptation</h3>
            <p>A motion-aware memory buffer selects diverse recent samples for stable, real-time updates when speed, terrain, or motion patterns shift.</p>
          </div>
          <figure class="timu-stage-media">
            <img src="/img/tartanimu/online_adaptation.png" alt="Online TartanIMU adaptation on an unseen trajectory" width="4874" height="1402" loading="lazy" decoding="async">
            <figcaption>TartanIMU progressively adapts during deployment using balanced samples from recent motion segments.</figcaption>
          </figure>
        </article>
      </div>
    </div>
  </section>

  <section class="timu-section" id="dataset">
    <div class="timu-inner timu-inner--wide">
      <div class="timu-section-heading">
        <span class="timu-section-index">04 / Dataset</span>
        <h2>Diverse motion at a consistent interface</h2>
        <p class="timu-section-lead">More than 100 hours of synchronized inertial data span four embodiment families and a wide range of indoor and outdoor motion.</p>
      </div>

      <div class="timu-platform-grid">
        <article class="timu-platform-card" style="--platform-color:#b45309;">
          <img src="/img/tartanimu/car_overview.png" alt="Ground vehicle trajectory and inertial result overview" width="1416" height="806" loading="lazy" decoding="async">
          <div class="timu-platform-card-body"><h3>Ground vehicles</h3><p>Driving, off-road, and subterranean motion.</p></div>
        </article>
        <article class="timu-platform-card" style="--platform-color:#0f766e;">
          <img src="/img/tartanimu/dog_overview.png" alt="Quadruped trajectory and inertial result overview" width="1404" height="794" loading="lazy" decoding="async">
          <div class="timu-platform-card-body"><h3>Quadrupeds</h3><p>Walking, turning, stairs, and rough terrain.</p></div>
        </article>
        <article class="timu-platform-card" style="--platform-color:#2563eb;">
          <img src="/img/tartanimu/drone_overview.png" alt="Drone trajectory and inertial result overview" width="1420" height="829" loading="lazy" decoding="async">
          <div class="timu-platform-card-body"><h3>Drones</h3><p>Three-dimensional flight and rapid maneuvers.</p></div>
        </article>
        <article class="timu-platform-card" style="--platform-color:#15803d;">
          <img src="/img/tartanimu/human_overview.png" alt="Human motion trajectory and inertial result overview" width="1445" height="804" loading="lazy" decoding="async">
          <div class="timu-platform-card-body"><h3>Human motion</h3><p>Handheld and body-worn locomotion patterns.</p></div>
        </article>
      </div>

      <div class="timu-dataset-actions">
        <a class="timu-text-link" href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener"><i class="fas fa-database" aria-hidden="true"></i> Browse dataset and checkpoints</a>
        <a class="timu-text-link" href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> Read setup and training instructions</a>
      </div>
    </div>
  </section>

  <section class="timu-section timu-section--surface" id="limitations">
    <div class="timu-inner">
      <div class="timu-section-heading">
        <span class="timu-section-index">05 / Limitations</span>
        <h2>Generalization still has boundaries</h2>
      </div>
      <div class="timu-note">
        <p>TartanIMU generalizes across vehicles, drones, humans, and legged robots, but it does not yet support every possible embodiment. New platform families may require a dedicated motion head or a mixture of existing experts.</p>
      </div>
    </div>
  </section>

  <section class="timu-section" id="citation">
    <div class="timu-inner">
      <div class="timu-section-heading">
        <span class="timu-section-index">06 / Citation</span>
        <h2>Cite TartanIMU</h2>
      </div>
      <div class="timu-citation-bar">
        <p style="margin:0;">CVPR 2025, pages 22520&ndash;22529</p>
        <button class="timu-copy-button" id="timu-copy-bibtex" type="button"><i class="fas fa-copy" aria-hidden="true"></i> <span>Copy BibTeX</span></button>
      </div>
      <pre class="timu-citation" id="timu-bibtex"><code>@inproceedings{zhao2025tartan,
  title={Tartan IMU: A Light Foundation Model for Inertial Positioning in Robotics},
  author={Zhao, Shibo and Zhou, Sifan and Blanchard, Raphael and Qiu, Yuheng and Wang, Wenshan and Scherer, Sebastian},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={22520--22529},
  year={2025}
}</code></pre>
    </div>
  </section>

  <section class="timu-bottom-cta" aria-label="TartanIMU code repository">
    <div class="timu-bottom-cta-inner">
      <div>
        <h2>Build on the official TartanIMU implementation</h2>
        <p>Models, training code, and project updates are available in the public repository.</p>
      </div>
      <a class="timu-action timu-action--primary" href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> Open TartanIMU Code</a>
    </div>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var links = Array.from(document.querySelectorAll('.tartanimu-navbar-section'));
    var sections = Array.from(new Set(links.map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    }).filter(Boolean)));

    if ('IntersectionObserver' in window && sections.length) {
      var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        });
      }, { rootMargin: '-25% 0px -65% 0px' });

      sections.forEach(function (section) {
        sectionObserver.observe(section);
      });
    }

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        var menu = document.getElementById('navMenu');
        var burger = document.querySelector('.navbar-burger');
        if (menu) menu.classList.remove('is-active');
        if (burger) {
          burger.classList.remove('is-active');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    var comparisonTabs = Array.from(document.querySelectorAll('[data-comparison-tab]'));
    var comparisonPanels = Array.from(document.querySelectorAll('[data-comparison-panel]'));
    var comparisonVideos = Array.from(document.querySelectorAll('.timu-comparison-video'));

    var comparisonIsVisible = false;

    function playComparisonPanel(panel, restart) {
      panel.querySelectorAll('video').forEach(function (video) {
        if (restart) {
          try { video.currentTime = 0; } catch (error) {}
        }
        var playback = video.play();
        if (playback) playback.catch(function () {});
      });
    }

    function activateComparison(tab) {
      var target = tab.getAttribute('data-comparison-tab');
      var activePanel = null;
      comparisonTabs.forEach(function (item) {
        var selected = item === tab;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-selected', selected ? 'true' : 'false');
        item.setAttribute('tabindex', selected ? '0' : '-1');
      });
      comparisonPanels.forEach(function (panel) {
        var selected = panel.getAttribute('data-comparison-panel') === target;
        panel.hidden = !selected;
        if (selected) {
          activePanel = panel;
        } else {
          panel.querySelectorAll('video').forEach(function (video) { video.pause(); });
        }
      });
      if (activePanel && comparisonIsVisible) playComparisonPanel(activePanel, true);
    }

    comparisonTabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () { activateComparison(tab); });
      tab.addEventListener('keydown', function (event) {
        var nextIndex = null;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % comparisonTabs.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + comparisonTabs.length) % comparisonTabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = comparisonTabs.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        activateComparison(comparisonTabs[nextIndex]);
        comparisonTabs[nextIndex].focus();
      });
    });

    var comparisonSection = document.querySelector('.timu-comparison');
    if (comparisonSection && 'IntersectionObserver' in window) {
      var comparisonObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          comparisonIsVisible = entry.isIntersecting;
          var activePanel = comparisonPanels.find(function (panel) { return !panel.hidden; });
          if (comparisonIsVisible && activePanel) {
            playComparisonPanel(activePanel, false);
          } else {
            comparisonVideos.forEach(function (video) { video.pause(); });
          }
        });
      }, { threshold: 0.08 });
      comparisonObserver.observe(comparisonSection);
    } else if (comparisonSection) {
      comparisonIsVisible = true;
      var initialComparisonPanel = comparisonPanels.find(function (panel) { return !panel.hidden; });
      if (initialComparisonPanel) playComparisonPanel(initialComparisonPanel, false);
    }

    document.querySelectorAll('[data-video-fullscreen]').forEach(function (button) {
      button.addEventListener('click', function () {
        var video = button.closest('.timu-comparison-card').querySelector('video');
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
      });
    });

    var scienceTabs = Array.from(document.querySelectorAll(".timu-science-tab"));
    var scienceVideo = document.getElementById("timu-science-video");
    var scienceSource = scienceVideo ? scienceVideo.querySelector("source") : null;
    var sciencePanel = document.getElementById("timu-science-panel");
    var sciencePlatform = document.getElementById("timu-science-platform");
    var scienceDuration = document.getElementById("timu-science-duration");

    function activateScienceTab(tab) {
      scienceTabs.forEach(function (item) {
        var selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", selected ? "true" : "false");
        item.setAttribute("tabindex", selected ? "0" : "-1");
      });

      if (!scienceVideo || !scienceSource) return;
      scienceVideo.pause();
      scienceSource.setAttribute("src", tab.getAttribute("data-science-source"));
      scienceVideo.setAttribute("poster", tab.getAttribute("data-science-poster"));
      scienceVideo.setAttribute("aria-label", "Science Robotics " + tab.getAttribute("data-science-name") + " TartanIMU prediction");
      if (sciencePanel) sciencePanel.setAttribute("aria-labelledby", tab.id);
      if (sciencePlatform) sciencePlatform.textContent = tab.getAttribute("data-science-name");
      if (scienceDuration) scienceDuration.textContent = tab.getAttribute("data-science-duration");
      scienceVideo.load();
    }

    scienceTabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () { activateScienceTab(tab); });
      tab.addEventListener("keydown", function (event) {
        var nextIndex = null;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % scienceTabs.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + scienceTabs.length) % scienceTabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = scienceTabs.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        activateScienceTab(scienceTabs[nextIndex]);
        scienceTabs[nextIndex].focus();
      });
    });

    var revealTargets = Array.from(document.querySelectorAll(
      ".timu-inference-callout-inner, .timu-science-showcase, " +
      '.timu-challenge-link, .timu-section-heading, .timu-metrics, .timu-feature-video, ' +
      '.timu-comparison, .timu-contributions, .timu-figure, .timu-stage, ' +
      '.timu-platform-grid, .timu-note, .timu-citation-bar, .timu-citation, .timu-bottom-cta-inner'
    ));
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('IntersectionObserver' in window && !reduceMotion) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

      revealTargets.forEach(function (item) {
        item.classList.add('timu-reveal');
        revealObserver.observe(item);
      });
    } else {
      revealTargets.forEach(function (item) { item.classList.add('is-visible'); });
    }

    var copyButton = document.getElementById('timu-copy-bibtex');
    var bibtex = document.querySelector('#timu-bibtex code');

    function legacyCopy(text) {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      var copied = document.execCommand('copy');
      textarea.remove();
      return copied;
    }

    function copyText(text) {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text).then(function () {
          return true;
        }).catch(function () {
          return legacyCopy(text);
        });
      }
      return Promise.resolve(legacyCopy(text));
    }

    if (copyButton && bibtex) {
      copyButton.addEventListener('click', function () {
        copyText(bibtex.textContent.trim()).then(function (copied) {
          copyButton.querySelector('span').textContent = copied ? 'Copied' : 'Select BibTeX below';
          window.setTimeout(function () {
            copyButton.querySelector('span').textContent = 'Copy BibTeX';
          }, 1800);
        });
      });
    }

    if ('IntersectionObserver' in window) {
      var videoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting && !entry.target.paused) entry.target.pause();
        });
      }, { rootMargin: '100px 0px' });

      document.querySelectorAll(".timu-science-video").forEach(function (video) {
        videoObserver.observe(video);
      });
    }
  });
</script>
