---
title: SuperMap
subtitle: "A Spatio-Temporal SLAM System for Visual-Language Navigation"
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
---

<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<style>
  body { font-family: 'Google Sans', 'Noto Sans', sans-serif; }

  .hero[style*="background-image"] {
    width: 100vw !important; max-width: 100vw !important;
    margin-left: calc(50% - 50vw) !important; margin-right: calc(50% - 50vw) !important;
    padding: 0 !important; border-radius: 0 !important; overflow: hidden !important;
    background-size: cover !important; background-position: center !important;
    min-height: 300px !important; aspect-ratio: 21/9; position: relative !important;
  }
  .hero:not([style*="background-image"]) {
    width: 100% !important; max-width: 100% !important;
    margin-left: 0 !important; margin-right: 0 !important; padding: 1.5rem 0 !important;
  }
  .hero.is-large[style*="background-image"] { height: auto !important; max-height: 60vh !important; }

  .title-section, .content-section, section.section {
    max-width: 1200px !important; margin-left: auto !important; margin-right: auto !important;
    width: 100% !important; padding: 2rem 1rem !important;
  }
  @media (max-width: 1200px) { .title-section, .content-section, section.section { width: 95% !important; } }

  body, html { overflow-x: hidden; }

  #main-title {
    font-size: clamp(1.8rem, 4vw, 3rem) !important; line-height: 1.15 !important;
    margin-bottom: 1.5rem !important; font-weight: 800 !important; letter-spacing: -0.5px !important;
  }
  @media (max-width: 768px) { #main-title { font-size: clamp(1.4rem, 7vw, 2rem) !important; } }

  /* Accent color for SuperMap — HumanEgo burnt orange */
  :root { --accent: #C45A0E; --accent-dark: #9C3F00; --accent-tint: #fdf3ec; --ink: #333; --muted: #666; --hair: #eaeaea; }

  /* ===== Minimalist restyle (HumanEgo-inspired) ===== */
  body { color: var(--ink); background: #fff; }

  /* Page-scoped navbar override: burnt orange on this page only */
  nav.navbar.is-primary { background-color: var(--accent) !important; }
  nav.navbar.is-primary .navbar-dropdown { background-color: var(--accent) !important; }

  /* Narrow paper column for text; media breaks out wider */
  .content-section .container { max-width: 800px !important; }
  .breakout {
    position: relative; width: min(1100px, 94vw);
    left: 50%; transform: translateX(-50%);
  }

  .publication-authors { font-family: 'Google Sans', sans-serif; word-wrap: break-word; }
  .publication-authors a { color: #222 !important; text-decoration: none; }
  .publication-authors a:hover { color: var(--accent) !important; text-decoration: underline; }
  .author-block { display: inline-block; margin: 0.15rem 0.35rem !important; font-size: clamp(0.9rem, 2vw, 1.05rem) !important; }

  /* Author rows: two balanced centered lines with dot separators */
  .author-rows .author-row {
    display: flex; flex-wrap: wrap; justify-content: center; align-items: baseline;
    gap: 0 0.55rem; line-height: 1.9;
  }
  .author-rows .author-block { margin: 0 !important; font-size: clamp(0.95rem, 2vw, 1.1rem) !important; color: #222; font-weight: 400; }
  .author-rows .author-block sup { font-weight: 700; margin-left: 1px; }
  .author-rows .author-sep { color: #c9c9c9; font-weight: 400; }
  /* Contribution markers: dagger = equal contribution, bold name = core contributor */
  .author-rows .core-author, .author-rows .core-author a { font-weight: 700; }
  .mk-dag { color: var(--accent); }

  /* Publication links as HumanEgo dark rounded pills */
  .publication-links { margin: 2rem 0 0.5rem !important; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.6rem; }
  .link-block { margin: 0 !important; flex-shrink: 0; }
  .publication-links a.paper-link {
    display: inline-flex; align-items: center; gap: 0.45rem;
    background: #363636; color: #fff; text-decoration: none;
    font-size: 0.95rem; font-weight: 500;
    padding: 0.5rem 1.2rem; border-radius: 999px;
    transition: background .15s, transform .1s;
  }
  .publication-links a.paper-link:hover { background: var(--accent); color: #fff; transform: translateY(-1px); }
  .publication-links a.paper-link .icon { color: #fff; }

  /* Sections: mostly white, hairline separators, roomy padding (HumanEgo-style) */
  section.content-section { border-top: 1px solid var(--hair); padding-top: 3rem !important; padding-bottom: 3rem !important; }
  .content-section .title.is-2 {
    font-weight: 800; letter-spacing: -0.3px; color: var(--accent); text-align: left;
    margin-bottom: 1.75rem !important; font-size: clamp(1.45rem, 3vw, 1.9rem) !important;
    position: relative; padding-bottom: 0.6rem;
  }
  .content-section .title.is-2::after {
    content: ""; position: absolute; left: 0; bottom: 0;
    width: 64px; height: 3px; background: var(--accent); border-radius: 2px;
  }
  .content-section .title.is-2.has-text-centered { text-align: center; }
  .content-section .title.is-2.has-text-centered::after { left: 50%; transform: translateX(-50%); }

  /* Quote block (HumanEgo-style) */
  .quote-block { max-width: 720px; margin: 2.5rem auto 0.5rem; text-align: center; position: relative; padding: 0 2.5rem; }
  .quote-block .qmark { font-family: Georgia, serif; font-size: 3.5rem; color: #F4D3BB; position: absolute; line-height: 1; }
  .quote-block .qmark.open { left: 0; top: -8px; }
  .quote-block .qmark.close { right: 0; bottom: -14px; }
  .quote-block p.qtext { font-style: italic; color: #444; font-size: 1.08rem; line-height: 1.8; margin: 0; }
  .quote-block .qattr { color: var(--accent); font-size: 0.95rem; font-weight: 600; margin-top: 0.8rem; }
  .story-hl { color: var(--accent); font-weight: 700; font-style: normal; }

  /* Perceive -> Remember -> Reason -> Act story strip (mirrors overview figure) */
  .story-strip {
    display: flex; align-items: center; justify-content: center;
    gap: 0.6rem 1.1rem; flex-wrap: wrap; margin: 2rem auto 0.5rem;
  }
  .story-step { display: flex; flex-direction: column; align-items: center; min-width: 120px; }
  .story-icon {
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--accent-tint); color: var(--accent);
    display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
    border: 1.5px solid #f0d9c4; margin-bottom: 0.45rem;
  }
  .story-name { font-weight: 800; color: #1a1a1a; font-size: 1rem; }
  .story-desc { color: var(--muted); font-size: 0.82rem; margin-top: 2px; }
  .story-arrow { color: #d8b08c; font-size: 1.3rem; font-weight: 700; margin-top: -18px; }
  @media (max-width: 640px) {
    .story-arrow { display: none; }
    .story-step { min-width: 42%; margin-bottom: 0.8rem; }
  }

  /* Plain prose blocks (replaces .section-card) */
  .prose p { font-size: 1.05rem; color: var(--ink); line-height: 1.85; margin-bottom: 1rem; }
  .prose p:last-child { margin-bottom: 0; }

  /* Insights: three flat takeaways */
  .insight-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem; }
  .insight { }
  .insight .num { font-size: 0.85rem; font-weight: 700; color: var(--accent); letter-spacing: 1px; }
  .insight h4 { margin: 0.4rem 0 0.5rem; font-size: 1.1rem; font-weight: 700; color: #1a1a1a; }
  .insight p { margin: 0; font-size: 0.98rem; color: var(--muted); line-height: 1.7; }

  /* Contributions: hairline numbered list */
  .contrib-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0; }
  .contrib-item { padding: 1.25rem 0; border-top: 1px solid var(--hair); }
  .contrib-item h4 { margin: 0 0 0.4rem; font-size: 1.02rem; font-weight: 700; color: #1a1a1a; }
  .contrib-item p { margin: 0; font-size: 0.96rem; color: var(--muted); line-height: 1.65; }

  /* Pipeline: minimal numbered rows */
  .pipeline-step { display: flex; align-items: flex-start; gap: 1.1rem; padding: 1.1rem 0; border-top: 1px solid var(--hair); }
  .pipeline-step:first-child { border-top: none; }
  .step-num {
    min-width: 30px; height: 30px; border: 1.5px solid var(--accent); color: var(--accent);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.9rem; flex-shrink: 0; background: #fff;
  }
  .step-body h4 { margin: 3px 0 6px 0; font-size: 1.02rem; font-weight: 700; color: #1a1a1a; }
  .step-body p { margin: 0; font-size: 0.97rem; color: var(--muted); line-height: 1.65; text-align: left; }

  /* Results tables: flat, hairline */
  .results-table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.92rem; }
  .results-table th { color: #1a1a1a; font-weight: 700; padding: 10px 14px; text-align: center; border-bottom: 2px solid #1a1a1a; }
  .results-table td { padding: 9px 14px; border-bottom: 1px solid var(--hair); color: var(--ink); text-align: center; }
  .results-table tr:last-child td { border-bottom: none; }
  .results-table tr.ours td { font-weight: 700; background: var(--accent-tint); color: var(--accent); }

  /* Citation: plain code block */
  .citation-box pre {
    background: #fafafa; padding: 1.25rem; border-radius: 6px; border: 1px solid var(--hair);
    overflow-x: auto; font-size: 0.9rem; margin: 0; color: var(--ink);
  }

  .section p { text-align: left; }

  /* Demo video block */
  .demo-video-wrap { max-width: 960px; margin: 0 auto; }
  .demo-video-frame {
    position: relative; width: 100%; aspect-ratio: 16/9; border: 1px solid var(--hair);
    border-radius: 8px; overflow: hidden; background: #0a0a0f;
  }
  .demo-video-frame iframe, .demo-video-frame video { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
  .demo-video-placeholder {
    position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center;
    justify-content: center; gap: 0.6rem; color: #93a0ad; text-align: center; padding: 1rem;
  }
  .demo-video-placeholder .icon-lg { font-size: 2.4rem; color: #55606b; }
  .demo-caption { color: var(--muted); font-size: 0.9rem; text-align: center; margin-top: 0.8rem; }

  /* Overview figure below insights */
  .overview-figure { margin-top: 2.5rem; width: min(880px, 94vw); }
  .overview-figure img {
    width: 100%; display: block; border-radius: 10px;
    border: 1px solid var(--hair); background: #fff;
  }

  /* Video subtitle row: letter tag + label above each demo video */
  .video-subtitle {
    display: flex; align-items: center; gap: 0.6rem;
    font-size: 1.08rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.7rem;
  }
  .video-tag {
    display: inline-flex; align-items: center; justify-content: center;
    width: 26px; height: 26px; border-radius: 6px;
    background: var(--accent); color: #fff; font-size: 0.85rem; font-weight: 800;
  }

  /* Scene demo video gallery */
  .scene-gallery { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; margin-top: 0.5rem; }
  .scene-item { }
  .scene-item video {
    width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 8px;
    border: 1px solid var(--hair); display: block; background: #0a0a0f;
  }
  .scene-item .scene-label { margin-top: 0.5rem; font-size: 1rem; font-weight: 700; color: var(--accent); text-align: center; }

  /* Mobile: single-column grids, avoid horizontal overflow, tighter padding */
  @media (max-width: 640px) {
    .scene-gallery { grid-template-columns: 1fr; gap: 1rem; }
    .insight-grid { grid-template-columns: 1fr; gap: 1.25rem; }
    .contrib-list { grid-template-columns: 1fr; }
    section.content-section { padding-top: 2rem !important; padding-bottom: 2rem !important; }
    .prose p { font-size: 1rem; line-height: 1.75; }
    .publication-links { gap: 0.25rem 1rem; }
    .results-table { font-size: 0.8rem; }
    .results-table th, .results-table td { padding: 7px 8px; }
  }
  /* Results tables scroll horizontally instead of overflowing on small screens */
  .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }

  /* TOC: left-fixed mini sidebar (HumanEgo style), appears after scrolling past title */
  .toc {
    width: 185px; font-family: 'Google Sans', sans-serif;
    position: fixed; top: 110px; display: none; z-index: 900;
    max-height: calc(100vh - 200px); overflow-y: auto;
    border-left: 2px solid var(--hair); padding-left: 12px;
    scrollbar-width: none; opacity: 0; transition: opacity 0.3s ease-in-out;
  }
  .toc::-webkit-scrollbar { display: none; }
  /* Show only when the sidebar clears the 1100px breakout media:
     right edge (left + 197px) must stay left of the media edge (50vw - 550px). */
  @media (min-width: 1560px) {
    .toc.show { left: max(10px, calc(50vw - 770px)); display: block !important; opacity: 1; }
  }
  .toc h3 { font-size: 0.95rem; font-weight: 700; color: #1a1a1a; margin: 0 0 8px; }
  .toc hr { display: none; }
  .toc ul { list-style: none; padding: 0; margin: 0; }
  .toc li { margin: 0 0 7px; }
  .toc a {
    text-decoration: none; color: var(--muted); font-size: 0.88rem; font-weight: 500;
    transition: color 0.15s ease;
  }
  .toc a:hover { color: var(--accent); }
  .toc a.active { color: var(--accent); font-weight: 700; }

  /* ===== Interactive merged-map viewer (namespaced under #sm-viewer) ===== */
  #sm-viewer { --sm-accent: var(--accent); }
  #sm-viewer .sm-shell {
    position: relative; display: grid; grid-template-columns: 230px 1fr;
    height: 620px; border-radius: 8px; overflow: hidden;
    background: #0a0a0f; border: 1px solid var(--hair);
  }
  @media (max-width: 820px) {
    #sm-viewer .sm-shell { grid-template-columns: 1fr; height: 540px; }
    #sm-viewer #sm-panel { display: none; }
  }
  #sm-viewer #sm-panel {
    background: #111; border-right: 1px solid #222; padding: 14px;
    font-size: 12px; display: flex; flex-direction: column; overflow: hidden; color: #cdd6df;
  }
  #sm-viewer #sm-panel h3 { font-size: 13px; margin: 0 0 6px; font-weight: 600; color: #e6e6e6; }
  #sm-viewer #stats { color: #7a9abb; margin-bottom: 10px; line-height: 1.4; }
  #sm-viewer #legend { overflow-y: auto; flex: 1; }
  #sm-viewer #legend .row { display: flex; align-items: center; gap: 6px; padding: 2px 0; cursor: pointer; user-select: none; }
  #sm-viewer #legend .sw { width: 12px; height: 12px; border-radius: 2px; flex: none; }
  #sm-viewer #legend .row.off { opacity: .38; }
  #sm-viewer #legend .row .n { margin-left: auto; color: #7a9abb; }
  #sm-viewer #sm-ctl { margin-top: 10px; border-top: 1px solid #222; padding-top: 10px; }
  #sm-viewer #sm-ctl label { display: flex; align-items: center; gap: 6px; }
  #sm-viewer #sm-ctl input[type=range] { width: 100%; }
  #sm-viewer #sm-ctl .btnrow { margin-top: 8px; display: flex; gap: 6px; }
  #sm-viewer #sm-ctl button {
    background: #16181d; color: #aac4e0; border: 1px solid #2a3a50;
    border-radius: 6px; padding: 6px 12px; font-size: 0.85rem; cursor: pointer;
    transition: background .15s, border-color .15s, color .15s;
  }
  #sm-viewer #sm-ctl button:hover { background: var(--accent); border-color: var(--accent); color: #fff; }
  #sm-viewer .sm-map-area { position: relative; }
  #sm-viewer #map-canvas { position: absolute; inset: 0; }
  #sm-viewer #map-canvas canvas { width: 100%; height: 100%; display: block; cursor: grab; }
  #sm-viewer #map-canvas canvas:active { cursor: grabbing; }
  #sm-viewer #map-loading {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    font-size: 15px; color: #ccd; background: #0a0a0f; z-index: 5;
  }
  #sm-viewer #map-hint {
    position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);
    background: rgba(0,0,0,0.55); color: #ccc; font-size: 0.82rem;
    padding: 5px 14px; border-radius: 20px; pointer-events: none; white-space: nowrap; z-index: 6;
  }
  #tooltip {
    position: fixed; pointer-events: none; padding: 3px 7px; background: rgba(20,22,26,.95);
    border: 1px solid #444; border-radius: 4px; font-size: 12px; white-space: nowrap;
    display: none; z-index: 4000; color: #fff;
  }
  #sm-viewer .sm-caption { color: #888; font-size: 0.9rem; margin: 1rem 0 0.5rem; text-align: center; }
  #segment-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 14px; }
  @media (max-width: 640px) { #segment-grid { grid-template-columns: 1fr; } }
  #segment-grid .seg-card {
    background: #fff; border: 1px solid var(--hair); border-radius: 8px; overflow: hidden;
    cursor: pointer; transition: border-color .12s, transform .12s, box-shadow .12s;
  }
  #segment-grid .seg-card:hover, #segment-grid .seg-card.active {
    border-color: var(--accent); transform: translateY(-2px); box-shadow: 0 6px 18px rgba(26,111,196,0.18);
  }
  #segment-grid .seg-thumb { width: 100%; aspect-ratio: 3072/640; object-fit: contain; display: block; background: #0a0a0f; }
  #segment-grid .seg-thumb-missing { display: flex; align-items: center; justify-content: center; color: #999; font-size: 13px; }
  #segment-grid .seg-meta { padding: 9px 11px; display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  #segment-grid .seg-title { font-size: 0.92rem; font-weight: 600; color: #2c3e50; }
  #segment-grid .seg-idx { display: inline-block; font-size: 0.72rem; font-weight: 700;
    color: #fff; background: var(--accent); border-radius: 5px; padding: 1px 6px; margin-right: 3px; }
  #segment-grid .seg-play { font-size: 0.8rem; color: var(--accent); white-space: nowrap; }

  /* Rerun replay modal */
  .rr-modal { position: fixed; inset: 0; z-index: 5000; display: none;
    background: rgba(6,7,9,.88); flex-direction: column; padding: 3vh 3vw; }
  .rr-modal.open { display: flex; }
  body.modal-open { overflow: hidden; }
  .rr-modal-bar { display: flex; align-items: center; justify-content: space-between;
    padding: 8px 12px; background: #14171c; border: 1px solid #2a2d33; border-bottom: none; border-radius: 8px 8px 0 0; }
  .rr-modal-title { font-size: 15px; font-weight: 600; color: #e6e6e6; }
  .rr-modal-actions { display: flex; align-items: center; gap: 14px; }
  .rr-modal-actions a { font-size: 13px; color: #6db3ff; }
  .rr-status { font-size: 12px; color: #93a0ad; }
  .rr-close { background: #23262c; color: #ddd; border: 1px solid #3a3d44; border-radius: 5px;
    padding: 3px 9px; cursor: pointer; font-size: 14px; }
  .rr-close:hover { background: #33383f; }
  .rr-modal-body { flex: 1; border: 1px solid #2a2d33; border-radius: 0 0 8px 8px; overflow: hidden; background: #000; position: relative; }
  .rr-modal-body canvas { width: 100% !important; height: 100% !important; display: block; }
  .rr-error { padding: 24px; max-width: 620px; margin: 0 auto; color: #cdd6df; }
  .rr-error code { background: #23262c; padding: 1px 5px; border-radius: 4px; }
  /* Loading overlay that covers Rerun's default welcome screen while the .rrd streams */
  .rr-loading {
    position: absolute; inset: 0; z-index: 10; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 14px; text-align: center;
    background: #0a0a0f; color: #e6e6e6; transition: opacity 0.3s ease;
  }
  .rr-loading.rr-hidden { opacity: 0; pointer-events: none; }
  .rr-loading-text { font-size: 1.05rem; font-weight: 600; }
  .rr-loading-sub { font-size: 0.85rem; color: #93a0ad; max-width: 340px; }
  .rr-spinner {
    width: 42px; height: 42px; border-radius: 50%;
    border: 4px solid #2a3a50; border-top-color: var(--accent);
    animation: rr-spin 0.9s linear infinite;
  }
  @keyframes rr-spin { to { transform: rotate(360deg); } }
</style>

<!-- Title Section -->
<section class="section title-section">
  <div class="toc" id="toc">
    <h3>SuperMap</h3><hr>
    <ul>
      <li><a href="#overview">1 · Perception</a></li>
      <li><a href="#memory">2 · Memory</a></li>
      <li><a href="#demos">3 · Reasoning &amp; Action</a></li>
      <li><a href="#demo">4 · Interactive 3D Instance Map</a></li>
      <li><a href="#insights">5 · Insight</a></li>
      <li><a href="#abstract">6 · Abstract</a></li>
      <li><a href="#contributions">7 · Contributions</a></li>
      <li><a href="#method">8 · Architecture</a></li>
      <li><a href="#results">9 · Results</a></li>
      <li><a href="#bibtex">10 · BibTeX</a></li>
    </ul>
  </div>

  <div class="container">
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <h1 class="title is-1 publication-title" id="main-title">
          <span style="color:#1a1a1a;">Super</span><span style="color: var(--accent);">Map</span><span style="color:#1a1a1a;">: A Spatio-Temporal SLAM System<br>for Visual-Language Navigation</span>
        </h1>

        <div class="publication-authors author-rows" style="margin-top: 1.6rem;">
          <div class="author-row">
            <span class="author-block core-author"><a href="https://shibowing.github.io/" target="_blank">Shibo Zhao</a><sup class="mk-dag">&dagger;</sup></span><span class="author-sep">·</span>
            <span class="author-block core-author"><a href="https://gfchen01.cc/" target="_blank">Guofei Chen</a><sup class="mk-dag">&dagger;</sup></span><span class="author-sep">·</span>
            <span class="author-block core-author"><a href="https://adrienzhh.github.io/honghao/" target="_blank">Honghao Zhu</a></span><span class="author-sep">·</span>
            <span class="author-block core-author"><a href="https://zl3466.github.io/" target="_blank">Zhiheng Li</a></span><span class="author-sep">·</span>
            <span class="author-block core-author"><a href="https://www.chad-yao.com/" target="_blank">Changwei Yao</a></span>
          </div>
          <div class="author-row">
            <span class="author-block core-author"><a href="https://www.ri.cmu.edu/alumni/nader-zantout/" target="_blank">Nader Zantout</a></span><span class="author-sep">·</span>
            <span class="author-block"><a href="https://seungchan-kim.github.io/" target="_blank">Seungchan Kim</a></span><span class="author-sep">·</span>
            <span class="author-block"><a href="https://theairlab.org/team/wenshan/" target="_blank">Wenshan Wang</a></span><span class="author-sep">·</span>
            <span class="author-block"><a href="https://frc.ri.cmu.edu/~zhangji/" target="_blank">Ji Zhang</a></span><span class="author-sep">·</span>
            <span class="author-block"><a href="https://theairlab.org/team/sebastian/" target="_blank">Sebastian Scherer</a></span>
          </div>
        </div>
        <div class="is-size-6" style="margin-top: 0.9rem; color: #555; font-weight: 500;">
          Carnegie Mellon University — AirLab
        </div>
        <div style="margin-top: 0.45rem; color: #888; font-size: 0.85rem;">
          <sup class="mk-dag">&dagger;</sup> Equal contribution (order decided by coin flip)
          &nbsp;&nbsp;<strong style="color:#222;">Bold</strong> indicates core contributor
        </div>

        <div class="publication-links">
          <span class="link-block">
            <a href="https://www.roboticsproceedings.org/rss22/p052.pdf" class="paper-link" target="_blank">
              <span class="icon"><i class="fas fa-file-pdf"></i></span><span>Paper</span>
            </a>
          </span>
          <span class="link-block">
            <a href="#" class="paper-link">
              <span class="icon"><i class="ai ai-arxiv"></i></span><span>arXiv</span>
            </a>
          </span>
          <span class="link-block">
            <a href="https://github.com/superxslam/SuperMap" class="paper-link" target="_blank">
              <span class="icon"><i class="fab fa-github"></i></span><span>Code</span>
            </a>
          </span>
          <span class="link-block">
            <a href="https://www.youtube.com/watch?v=TQjTTqEewNQ" class="paper-link" target="_blank">
              <span class="icon"><i class="fab fa-youtube"></i></span><span>Summary Video</span>
            </a>
          </span>
          <span class="link-block">
            <a href="https://x.com/ShiboZhaoSLAM" class="paper-link" target="_blank">
              <span class="icon"><i class="fab fa-twitter"></i></span><span>Twitter</span>
            </a>
          </span>
          <span class="link-block">
            <a href="#bibtex" class="paper-link">
              <span class="icon"><i class="fas fa-quote-left"></i></span><span>BibTeX</span>
            </a>
          </span>
        </div>

        <div class="quote-block">
          <span class="qmark open">&ldquo;</span>
          <p class="qtext">SuperMap is a living spatial memory for embodied AI &mdash; it <strong class="story-hl">perceives</strong> the world, <strong class="story-hl">remembers</strong> its evolution, and supports <strong class="story-hl">reasoning</strong> and <strong class="story-hl">action</strong>.</p>
          <span class="qmark close">&rdquo;</span>
        </div>

        <div class="story-strip">
          <div class="story-step">
            <div class="story-icon"><i class="fas fa-eye"></i></div>
            <div class="story-name">Perceive</div>
            <div class="story-desc">Understand the world</div>
          </div>
          <div class="story-arrow">&rarr;</div>
          <div class="story-step">
            <div class="story-icon"><i class="fas fa-history"></i></div>
            <div class="story-name">Remember</div>
            <div class="story-desc">Track and retain changes</div>
          </div>
          <div class="story-arrow">&rarr;</div>
          <div class="story-step">
            <div class="story-icon"><i class="fas fa-brain"></i></div>
            <div class="story-name">Reason</div>
            <div class="story-desc">Ground and plan</div>
          </div>
          <div class="story-arrow">&rarr;</div>
          <div class="story-step">
            <div class="story-icon"><i class="fas fa-robot"></i></div>
            <div class="story-name">Act</div>
            <div class="story-desc">Execute in the real world</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Demo Video -->
<section class="section content-section" id="overview">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">1 ·</span> Perception</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p class="prose" style="color:var(--muted); margin-bottom:1.5rem;"><strong style="color:var(--ink);">Perception:</strong> Geometric and semantic consistency enable training-free, reliable 3D object mapping.</p>
        <div class="demo-video-wrap breakout" style="max-width:960px;">
          <div class="video-subtitle"><span class="video-tag">A</span> From Outdoor to Indoor</div>
          <div class="demo-video-frame">
            <video class="auto-play" src="/video/supermap/video1_v4.mp4" controls playsinline preload="metadata" muted loop autoplay poster="/img/supermap/campus_segments.png"></video>
          </div>
        </div>
        <div class="demo-video-wrap breakout" style="max-width:960px; margin-top:2.5rem;">
          <div class="video-subtitle"><span class="video-tag">B</span> Indoor Environment</div>
          <div class="demo-video-frame">
            <video class="auto-play" src="/video/supermap/supermap_indoor_environment.mp4" poster="/img/supermap/posters/supermap_indoor_environment.jpg" controls playsinline preload="none" muted loop></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Memory -->
<section class="section content-section" id="memory">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">2 ·</span> Memory</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p class="prose" style="color:var(--muted); margin-bottom:1.5rem;"><strong style="color:var(--ink);">Memory:</strong> Persistent object identities transform frame-level detections into long-term scene memory.</p>
        <div class="demo-video-wrap breakout" style="max-width:960px;">
          <div class="demo-video-frame">
            <video class="auto-play" src="/video/supermap/video2_v2.mp4" controls playsinline preload="none" muted loop poster="/img/supermap/posters/video2_v2.jpg"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- Reasoning & Action -->
<section class="section content-section" id="demos">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">3 ·</span> Reasoning &amp; Action</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p class="prose" style="color:var(--muted); margin-bottom:1.5rem;"><strong style="color:var(--ink);">Reasoning &amp; Action:</strong> A structured spatio-temporal memory provides a direct interface for visual-language navigation and embodied reasoning.</p>
        <div class="scene-gallery breakout">
          <div class="scene-item">
            <video class="auto-play" src="/video/supermap/mecanum_boardgame_shelf.mp4" poster="/img/supermap/posters/mecanum_boardgame_shelf.jpg" controls playsinline preload="none" muted loop></video>
            <div class="scene-label">Board game &amp; shelf</div>
          </div>
          <div class="scene-item">
            <video class="auto-play" src="/video/supermap/mecanum_bookshelf_plant.mp4" poster="/img/supermap/posters/mecanum_bookshelf_plant.jpg" controls playsinline preload="none" muted loop></video>
            <div class="scene-label">Bookshelf &amp; plant</div>
          </div>
          <div class="scene-item">
            <video class="auto-play" src="/video/supermap/mecanum_bulletin.mp4" poster="/img/supermap/posters/mecanum_bulletin.jpg" controls playsinline preload="none" muted loop></video>
            <div class="scene-label">Bulletin board</div>
          </div>
          <div class="scene-item">
            <video class="auto-play" src="/video/supermap/mecanum_painting_fridge.mp4" poster="/img/supermap/posters/mecanum_painting_fridge.jpg" controls playsinline preload="none" muted loop></video>
            <div class="scene-label">Painting &amp; fridge</div>
          </div>
          <div class="scene-item">
            <video class="auto-play" src="/video/supermap/wheelchair_plant_fire_edited.mp4" poster="/img/supermap/posters/wheelchair_plant_fire_edited.jpg" controls playsinline preload="none" muted loop></video>
            <div class="scene-label">Wheelchair · plant · fire extinguisher</div>
          </div>
          <div class="scene-item">
            <video class="auto-play" src="/video/supermap/wheelchair_print_edited.mp4" poster="/img/supermap/posters/wheelchair_print_edited.jpg" controls playsinline preload="none" muted loop></video>
            <div class="scene-label">Finding my print</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Interactive 3D Map Explorer -->
<section class="section content-section" id="demo">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">4 ·</span> Interactive 3D Instance Objects Map — 2 Hour CMU Campus Run from Indoor to Outdoor</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p class="prose" style="color:var(--muted); margin-bottom:1rem;">
          <strong style="color:var(--ink);">Generalization:</strong> SuperMap scales to a continuous 2-hour, campus-scale deployment
          across diverse indoor and outdoor environments without retraining. By maintaining persistent
          object identities and a temporally consistent semantic map, it transforms geometric mapping
          into a living spatial memory. This memory enables robots to ground language in 3D space,
          reason about spatial relationships, remember how scenes evolve over time, and execute
          visual-language navigation in complex, dynamic environments.
        </p>
        <p class="sm-caption" style="margin-top:0; margin-bottom:1rem;">
          <strong>Explore the map:</strong> Drag to orbit, scroll to zoom, and right-drag to pan.
          Hover over a 3D bounding box to view its semantic label, or click to pin it. Hover over a
          replay card to highlight the robot's trajectory and mapped region, then click to replay
          the dynamic reconstruction.
        </p>

        <div id="sm-viewer" class="breakout">
          <div class="sm-shell">
            <div id="sm-panel">
              <h3>Merged 3D Map</h3>
              <div id="stats">loading…</div>
              <div id="legend"></div>
              <div id="sm-ctl">
                <label>point size
                  <input id="psize" type="range" min="0.05" max="2" step="0.05" value="0.3">
                </label>
                <div class="btnrow">
                  <button id="reset">reset view</button>
                  <button id="clearpins">clear pins</button>
                </div>
              </div>
            </div>
            <div class="sm-map-area">
              <div id="map-canvas"></div>
              <div id="map-hint">drag: orbit · scroll: zoom · right-drag: pan · hover a card to highlight</div>
              <div id="map-loading">Loading map… (large, please be patient)</div>
            </div>
          </div>

          <p class="sm-caption">Dynamic replays — hover to locate, click to play:</p>
          <div id="segment-grid"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<div id="tooltip"></div>

<!-- Insights -->
<section class="section content-section" id="insights">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">5 ·</span> Insight</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p class="prose" style="color:var(--muted); margin-bottom:1.5rem;"><strong style="color:var(--ink);">Insight:</strong> SuperMap turns frame-level perception into a persistent, model-agnostic spatial memory — the missing layer between vision foundation models and embodied reasoning.</p>
        <div class="insight-grid">
          <div class="insight">
            <div class="num">01</div>
            <h4>Persistent Object Tracking</h4>
            <p>3D-aware instance association plus an existence-and-label confidence update keep object identities stable and prune stale content under occlusion and scene change.</p>
          </div>
          <div class="insight">
            <div class="num">02</div>
            <h4>Model-Agnostic Spatial Perception</h4>
            <p>Rather than replacing foundation models, SuperMap complements them by providing the missing spatial memory — connecting state-of-the-art vision foundation models with downstream embodied agents through a unified, persistent, and structured world representation.</p>
          </div>
          <div class="insight">
            <div class="num">03</div>
            <h4>Fully online, open-source</h4>
            <p>High-frequency geometric SLAM fused with asynchronous open-vocabulary perception runs onboard in real time — released as a deployable baseline.</p>
          </div>
        </div>

        <div class="overview-figure breakout">
          <img src="/img/supermap/supermap_overview_figure.png"
               alt="SuperMap overview: vision foundation models feed perception results into a persistent spatial memory (4D scene graph with past-present-future timeline), which interfaces with embodied AI applications such as VLN, VLA, and embodied agents."
               loading="lazy">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Abstract -->
<section class="section content-section" id="abstract">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">6 ·</span> Abstract</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="prose">
          <p>Robotic navigation requires a persistent spatial memory that bridges open-vocabulary perception with long-term scene understanding. While vision foundation models provide strong zero-shot recognition, they operate at the frame level and cannot maintain consistent object identities or reason about scene evolution.</p>
          <p>We present <strong>SuperMap</strong>, a training-free 4D spatio-temporal mapping framework that fuses geometric SLAM with open-vocabulary perception to build a persistent semantic world model. By jointly enforcing geometric and semantic consistency, SuperMap maintains stable object identities, tracks object appearance, disappearance, and relocation, and continuously updates the map as the environment evolves.</p>
          <p>The resulting queryable 4D scene graph serves as a unified spatial memory for vision-language navigation and embodied AI, providing a model-agnostic interface between vision foundation models and downstream reasoning and planning systems.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contributions -->
<section class="section content-section" id="contributions">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">7 ·</span> Contributions</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="contrib-list">
          <div class="contrib-item">
            <h4>Open-Vocabulary Spatio-Temporal SLAM</h4>
            <p>An online robotic system that builds a persistent, queryable open-vocabulary 4D scene memory suitable for downstream language-conditioned tasks — running fully onboard in real time.</p>
          </div>
          <div class="contrib-item">
            <h4>Spatio-Temporal Object Tracking</h4>
            <p>An online pipeline that integrates 2D–3D association, validation, and change-aware updates to maintain instance consistency under occlusions, partial observations, label variability, and scene change.</p>
          </div>
          <div class="contrib-item">
            <h4>Instance-level Scene Graph</h4>
            <p>A 4D scene graph that incorporates spatial and temporal information for each object, equipping robots with instance-level reasoning — e.g., locating moved objects, recalling past scenes.</p>
          </div>
          <div class="contrib-item">
            <h4>Open-Source Framework</h4>
            <p>Full release of the change-detection benchmark, comprehensive ablations, runtime profiling, and the real-robot visual–language navigation pipeline to facilitate reproducible research.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- System Architecture -->
<section class="section content-section" id="method">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">8 ·</span> System Architecture</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="prose">
          <p style="color:var(--muted); margin-bottom:1.5rem;">A three-layer pipeline — geometric, instance, and topological.</p>
          <div>
            <div class="pipeline-step">
              <div class="step-num">1</div>
              <div class="step-body">
                <h4>Geometric Layer — Online 3D Reconstruction</h4>
                <p>SuperOdometry provides pose estimation and a colorized dense 3D model from synchronized RGB images, depth/LiDAR, and IMU streams. Geometric priors anchor all subsequent 2D–3D association and global map consistency checks.</p>
              </div>
            </div>
            <div class="pipeline-step">
              <div class="step-num">2</div>
              <div class="step-body">
                <h4>Instance Layer — Spatio-Temporal Instance Association</h4>
                <p>Per-frame open-vocabulary detections (GroundingDINO + SAM2) are associated to existing 3D map objects via a hybrid 2D–3D tracker. A probabilistic geometric consistency update and Bayesian semantic fusion maintain stable object identities across long time horizons under occlusions and scene change.</p>
              </div>
            </div>
            <div class="pipeline-step">
              <div class="step-num">3</div>
              <div class="step-body">
                <h4>Topological Layer — Abstract 4D Scene Graph</h4>
                <p>The object map is abstracted into a scene graph <em>G = (V, E<sub>s</sub>, E<sub>t</sub>)</em> with spatial edges (geometric predicates: on, beside, under) and temporal edges (object trajectory history). The graph is serialized as structured text for compositional VLM queries over object semantics, spatial relations, and history.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- Results -->
<section class="section content-section" id="results">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">9 ·</span> Results</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">

        <div style="margin-bottom: 2.5rem;">
          <h3 style="font-size:1.1rem; font-weight:700; color:#1a1a1a; margin-bottom:0.5rem;">Class-level Segmentation — ScanNet</h3>
          <p style="color:var(--muted); margin:0 0 0.75rem;">SuperMap achieves competitive accuracy against state-of-the-art object-level mapping methods while running fully online.</p>
          <div class="table-scroll"><table class="results-table">
            <thead><tr><th>Method</th><th>Approach</th><th>mIoU (%)</th><th>f-mIoU (%)</th><th>Acc (%)</th></tr></thead>
            <tbody>
              <tr><td>ConceptGraphs</td><td>object-level</td><td>21.62</td><td>24.32</td><td>31.05</td></tr>
              <tr><td>HOV-SG</td><td>object-level</td><td>26.79</td><td>36.05</td><td>35.17</td></tr>
              <tr class="ours"><td>SuperMap (Ours)</td><td>object-level</td><td>27.42</td><td>43.50</td><td>55.48</td></tr>
            </tbody>
          </table></div>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <h3 style="font-size:1.1rem; font-weight:700; color:#1a1a1a; margin-bottom:0.5rem;">Instance-level Segmentation — ScanNet (mAP<sub>50</sub>)</h3>
          <p style="color:var(--muted); margin:0 0 0.75rem;">SuperMap significantly outperforms prior scene-graph methods on instance-level detection.</p>
          <div class="table-scroll"><table class="results-table">
            <thead><tr><th>Method</th><th>Chair</th><th>Window</th><th>Refrigerator</th><th>Sofa</th><th>Door</th></tr></thead>
            <tbody>
              <tr><td>HOV-SG</td><td>4.58</td><td>0.00</td><td>0.00</td><td>30.00</td><td>9.70</td></tr>
              <tr><td>ConceptGraphs</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr>
              <tr class="ours"><td>SuperMap (Ours)</td><td>63.76</td><td>42.20</td><td>62.50</td><td>33.35</td><td>10.00</td></tr>
            </tbody>
          </table></div>
        </div>

        <div>
          <h3 style="font-size:1.1rem; font-weight:700; color:#1a1a1a; margin-bottom:0.5rem;">Spatio-Temporal Change Detection Recall</h3>
          <p style="color:var(--muted); margin:0 0 0.75rem;">SuperMap achieves perfect recall on appearance events and strong recall on disappearance events, significantly outperforming prior methods.</p>
          <div class="table-scroll"><table class="results-table">
            <thead>
              <tr><th>Method</th><th>Appeared (Bucket)</th><th>Appeared (Cart)</th><th>Appeared (Sign)</th><th>Disappeared (Plant)</th><th>Disappeared (Trash)</th><th>Disappeared (Chair)</th></tr>
            </thead>
            <tbody>
              <tr><td>Khronos</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
              <tr><td>DualMap</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.310</td><td>0.000</td><td>0.000</td></tr>
              <tr class="ours"><td>SuperMap (Ours)</td><td>1.000</td><td>0.262</td><td>0.583</td><td>0.755</td><td>0.434</td><td>1.000</td></tr>
            </tbody>
          </table></div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- Citation -->
<section class="section content-section" id="bibtex">
  <div class="container">
    <h2 class="title is-2"><span style="color:var(--muted); font-weight:600;">10 ·</span> Citation</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="citation-box">
          <pre>@inproceedings{zhao2026supermap,
  title     = {SuperMap: A Spatio-Temporal SLAM System for Visual-Language Navigation},
  author    = {Zhao, Shibo and Chen, Guofei and Zhu, Honghao and Li, Zhiheng and Yao, Changwei and Zantout, Nader and Kim, Seungchan and Wang, Wenshan and Zhang, Ji and Scherer, Sebastian},
  booktitle = {Proceedings of Robotics: Science and Systems (RSS)},
  year      = {2026}
}</pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Interactive merged-map viewer: three.js ES modules (import map) + replay modal -->
<script type="importmap">
{ "imports": {
  "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
  "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
}}
</script>
<script type="module" src="/assets/js/supermap_viewer.js"></script>
<script src="/assets/js/supermap_replay.js"></script>

<!-- TOC Scroll Behavior (matches SuperOdometry index.md) -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.toc');
    const mainTitle = document.getElementById('main-title');

    if (toc && mainTitle) {
      function checkTocVisibility() {
        const titleRect = mainTitle.getBoundingClientRect();
        if (titleRect.top <= 100) {
          toc.classList.add('show');
        } else {
          toc.classList.remove('show');
        }
      }
      window.addEventListener('scroll', checkTocVisibility);
      checkTocVisibility();
    }

    const tocLinks = document.querySelectorAll('.toc a');
    const sections = [];
    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.getElementById(href.substring(1));
        if (section) sections.push({ element: section, link: link });
      }
    });

    function updateActiveTocLink() {
      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      let currentSection = null;

      if (window.scrollY + windowHeight >= documentHeight - 50) {
        currentSection = sections[sections.length - 1];
      } else {
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].element.getBoundingClientRect();
          const sTop = rect.top + window.scrollY;
          if (scrollPosition >= sTop && scrollPosition < sTop + rect.height) {
            currentSection = sections[i];
            break;
          }
        }
        if (!currentSection) {
          for (let i = sections.length - 1; i >= 0; i--) {
            const sTop = sections[i].element.getBoundingClientRect().top + window.scrollY;
            if (sTop <= scrollPosition) { currentSection = sections[i]; break; }
          }
        }
      }

      tocLinks.forEach(link => link.classList.remove('active'));
      if (currentSection) currentSection.link.classList.add('active');
    }

    window.addEventListener('scroll', updateActiveTocLink);
    updateActiveTocLink();
  });
</script>

<!-- Autoplay scene demonstration videos when scrolled into view -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var vids = document.querySelectorAll('video.auto-play');
    var visible = new Set();
    // Decoding many 1080p/10Mbps streams at once causes jank. Cap how many
    // play simultaneously; prefer the ones closest to the viewport center.
    var MAX_PLAYING = 3;

    function tryPlay(v) {
      v.muted = true;
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    }

    function distToCenter(v) {
      var r = v.getBoundingClientRect();
      return Math.abs((r.top + r.bottom) / 2 - window.innerHeight / 2);
    }

    var scheduleTimer = null;
    function schedule() {
      if (scheduleTimer) return;
      scheduleTimer = setTimeout(function () {
        scheduleTimer = null;
        var sorted = Array.from(visible).sort(function (a, b) {
          // user-started (unmuted or with controls interacted) videos keep priority
          return distToCenter(a) - distToCenter(b);
        });
        sorted.forEach(function (v, i) {
          if (i < MAX_PLAYING) { if (v.paused) tryPlay(v); }
          else if (!v.paused && !v.hasAttribute('autoplay')) { v.pause(); }
        });
      }, 150);
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var v = e.target;
          if (e.isIntersecting) { visible.add(v); }
          else { visible.delete(v); if (!v.hasAttribute('autoplay')) v.pause(); }
        });
        schedule();
      }, { threshold: 0.15 });
      vids.forEach(function (v) {
        v.muted = true;
        // Videos with the native autoplay attribute start themselves — never
        // pause them from script; a pause() racing the native start can wedge
        // playback permanently.
        if (v.hasAttribute('autoplay')) { visible.add(v); tryPlay(v); }
        io.observe(v);
      });
      // Re-rank on scroll so the cap follows the viewport
      window.addEventListener('scroll', schedule, { passive: true });
    } else {
      vids.forEach(function (v) { visible.add(v); tryPlay(v); });
    }

    // Retry when media becomes ready (decoder freed up / data arrived)
    vids.forEach(function (v) {
      v.addEventListener('canplay', function () { if (visible.has(v) && v.paused) schedule(); });
    });

    // Last-resort: some browsers only allow playback after first user gesture
    function kick() {
      visible.forEach(function (v) { if (v.paused) tryPlay(v); });
      window.removeEventListener('pointerdown', kick);
      window.removeEventListener('scroll', kick);
      window.removeEventListener('keydown', kick);
    }
    window.addEventListener('pointerdown', kick, { passive: true });
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('keydown', kick);
  });
</script>
