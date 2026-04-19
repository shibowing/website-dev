---
title: "TartanIMU"
subtitle: "A Light Foundation Model for Inertial Positioning in Robotics"
layout: page
show_sidebar: false
hide_hero: false
hide_footer: false
hero_height: is-large
hero_image: img/tartanimu/firstpage.png
hero_link: https://github.com/superxslam/SuperOdom
hero_link_text: See Our Code
hero_glass_title: true
mathjax: true
---

<!-- Additional fonts and styles (loaded after theme's default styles) -->
<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
    SVG: { linebreaks: { automatic: true } }
  });
</script>

<!-- index.md layout CSS (Tartan accent in TOC) -->
<!-- CSS for VIRAL-style layout -->
<style>
  body {
    font-family: 'Google Sans', 'Noto Sans', sans-serif;
  }
  
  /* Top hero with cover image: use .hero--has-cover from _includes/hero.html (reliable vs [style*="url("]) */
  .hero.hero--has-cover {
    width: 100vw !important;
    max-width: 100vw !important;
    margin-left: calc(50% - 50vw) !important;
    margin-right: calc(50% - 50vw) !important;
    padding: 0 !important;
    border-radius: 0 !important;
    overflow: hidden !important;
    background-size: cover !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    min-height: 400px !important;
    aspect-ratio: 21 / 9; /* Cinematic wide ratio */
    position: relative !important;
    left: 0 !important;
    /* Override Bulma .hero { justify-content: space-between } so one child centers vertically */
    justify-content: center !important;
    align-items: stretch !important;
  }
  
  /* Reset general hero class so it doesn't break layout for in-page heroes (carousel, etc.) */
  .hero:not(.hero--has-cover) {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 1.5rem 0 !important;
  }
  
  /* Hero height constraints for the top hero */
  .hero.is-large.hero--has-cover {
    height: auto !important;
    min-height: 400px !important;
    max-height: 70vh !important;
  }
  
  /* If the screen is very narrow (mobile), use a taller ratio for top hero */
  @media (max-width: 768px) {
    .hero.hero--has-cover {
      aspect-ratio: 16 / 9;
    }
  }
  
  /* Cover hero: center title block — parent centers .hero-body; shrink body so it isn’t full-height top-aligned */
  .hero.hero--has-cover .hero-body {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: stretch !important;
    flex-grow: 0 !important;
    flex-shrink: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
  }
  @media screen and (min-width: 769px), print {
    .hero.is-large.hero--has-cover .hero-body {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }
  /* Hero text position (same as index.md .hero .container; cover hero only) */
  .hero.hero--has-cover .container {
    text-align: left !important;
    padding-left: 15% !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  /* Black glass panel: hugs title + subtitle only (see hero_glass_title in _includes/hero.html) */
  .hero.hero--has-cover .hero__title-glass {
    display: inline-block;
    width: fit-content;
    max-width: 100%;
    box-sizing: border-box;
    padding: 1.45rem 1.4rem;
    margin: 0 0 1.25rem 0;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.68);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.4);
  }
  .hero.hero--has-cover .hero__title-glass .title.is-2,
  .hero.hero--has-cover .hero__title-glass .subtitle.is-3 {
    color: #fff !important;
  }
  /* Same vertical rhythm as index.md hero (Bulma title + subtitle: %block + adjacent sibling rule) */
  .hero.hero--has-cover .hero__title-glass .title.is-2:not(:last-child) {
    margin-bottom: 1.5rem !important;
  }
  .hero.hero--has-cover .hero__title-glass .title.is-2:not(.is-spaced) + .subtitle.is-3 {
    margin-top: -1.25rem !important;
  }
  .hero.hero--has-cover .hero__title-glass .subtitle.is-3:last-child {
    margin-bottom: 0 !important;
  }

  /* Match index.md: stacked .content-section blocks use padding 2rem top + 2rem bottom each */
  h2#dataset.title.is-2,
  h2#limitations.title.is-2 {
    margin-top: 5.5rem !important;
  }

  /* Title section and other sections should align */
  .title-section,
  .content-section,
  section.section {
    max-width: 1200px !important; /* Standard content width */
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
    padding: 2rem 1rem !important;
  }

  /* Standardized container for all sections to ensure alignment */
  .title-section .container,
  .content-section .container,
  section.section .container {
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  @media (max-width: 1200px) {
    .title-section,
    .content-section,
    section.section {
      width: 95% !important;
    }
  }
  
  /* Remove any potential theme-enforced margins */
  body, html {
    overflow-x: hidden; /* Prevent horizontal scroll from the 100vw breakout */
  }
  
  .layout--page .hero,
  .layout--default .hero {
    margin-top: 0 !important;
    margin-bottom: 2rem !important;
    left: 0 !important;
    right: 0 !important;
  }

  /* --- HERO TEXT POSITION (carousel / in-page heroes; not the site cover hero) --- */
  .hero:not(.hero--has-cover) .hero-body {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    padding-top: 8rem !important;
  }
  /* In-page heroes (e.g. Results carousel): do not use top-hero offset — match normal section spacing */
  .hero:not(.hero--has-cover).is-small .hero-body,
  .hero:not(.hero--has-cover).is-medium .hero-body {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  /* ---------------------------------------- */
  
  .project-title { 
    font-family: 'Google Sans', sans-serif;
    font-size: 6rem !important; 
    font-weight: 900 !important; 
    margin-bottom: 0.5rem !important; 
    color: #1a1a1a !important; 
    line-height: 1.1 !important; 
  }
  
  .project-subtitle { 
    font-family: 'Google Sans', sans-serif;
    font-size: 2.5rem !important; 
    color: #4a4a4a !important; 
    margin-bottom: 2rem !important; 
    line-height: 1.3 !important; 
    font-weight: 300 !important; 
  }
  
  /* Responsive title and publication styles */
  .publication-title {
    font-family: 'Google Sans', sans-serif;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  #main-title {
    font-size: clamp(2rem, 5vw, 3.5rem) !important;
    line-height: 1.1 !important;
    margin-bottom: 1.5rem !important;
    padding: 0 1rem !important;
    font-weight: 800 !important;
    letter-spacing: -1px !important;
  }

  /* Match index.md: later page CSS sets body to Segoe UI; keep hero title on Google Sans */
  .title-section #main-title,
  .title-section h1.publication-title {
    font-family: 'Google Sans', 'Noto Sans', sans-serif !important;
  }

  /* Better line break handling - prevent orphaned words like 'via' */
  #main-title br {
    display: block;
  }
  
  /* On mobile, use smaller font and let it flow naturally */
  @media (max-width: 768px) {
    #main-title {
      font-size: clamp(1.5rem, 8vw, 2.2rem) !important;
      line-height: 1.2 !important;
      letter-spacing: -0.5px !important;
    }
    
    #main-title br {
      display: none;
    }
  }
  
  .publication-authors {
    font-family: 'Google Sans', sans-serif;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .publication-authors a {
    color: #555 !important;
    text-decoration: none;
    white-space: nowrap;
  }
  
  .publication-authors a:hover {
    text-decoration: underline;
  }
  
  .author-block {
    display: inline-block;
    margin: 0.5rem 0.25rem !important;
    font-size: clamp(0.9rem, 2vw, 1.15rem) !important;
    line-height: 1.6 !important;
  }
  
  @media (max-width: 768px) {
    .author-block {
      margin: 0.3rem 0.15rem !important;
      font-size: clamp(0.8rem, 3vw, 1rem) !important;
    }
    
    .is-size-4.publication-authors {
      font-size: 0.9rem !important;
    }
    
    .is-size-5.publication-authors {
      font-size: 0.85rem !important;
    }
  }
  
  .publication-links {
    margin: 2rem 0 !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .link-block {
    margin: 0.25rem !important;
    flex-shrink: 0;
  }
  
  @media (max-width: 768px) {
    .publication-links {
      margin: 1.5rem 0 !important;
      gap: 0.4rem;
    }
    
    .link-block .button {
      font-size: 0.85rem !important;
      padding: 0.5rem 1rem !important;
    }
  }
  
  /* Hero body responsive spacing */
  .hero-body {
    padding: 2rem 1rem !important;
  }
  
  @media (min-width: 769px) {
    .hero-body {
      padding: 3rem 1.5rem !important;
    }
  }
  
  /* Container responsive max-width */
  .hero-body .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  @media (min-width: 769px) {
    .hero-body .container {
      padding: 0 2rem;
    }
  }
  
  /* Column responsive behavior */
  .hero-body .column {
    padding: 0.75rem !important;
  }
  
  @media (min-width: 769px) {
    .hero-body .column {
      padding: 1rem !important;
    }
  }
  
  .section-title {
    font-family: 'Google Sans', sans-serif;
    font-size: 1.5rem !important;
    font-weight: 700 !important;
    margin: 2rem 0 1.5rem !important;
    text-align: left !important;
    background: #000 !important;
    color: #fff !important;
    display: inline-block !important;
    padding: 8px 16px !important;
  }
  
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    margin-bottom: 1.5rem;
    background: #000;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  .abstract-box {
    background: #fdfdfd;
    border: 1px solid #eee;
    padding: 2.5rem;
    border-radius: 12px;
    margin: 3rem 0;
    font-size: 1.15rem;
    line-height: 1.8;
    text-align: justify;
    color: #444;
  }
  
  .method-card {
    background: #fff;
    border-left: 5px solid #cc002b;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border-radius: 0 8px 8px 0;
  }
  
  .method-level {
    font-weight: 800;
    color: #cc002b;
    margin-right: 10px;
    font-family: monospace;
    font-size: 1.2rem;
  }
  
  /* TOC styles */
  .toc {
    width: 280px;
    font-family: 'Google Sans', sans-serif;
    position: fixed;
    top: 100px;
    display: none;
    z-index: 1000;
    max-height: calc(100vh - 280px);
    overflow-y: auto;
    padding-right: 10px;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  @media (min-width: 1400px) {
    .toc.show {
      left: max(20px, calc(25vw - 400px));
      display: block !important;
      opacity: 1;
    }
  }
  
  .toc::-webkit-scrollbar {
    display: none;
  }
  
  .toc h3 {
    font-family: 'Google Sans', sans-serif;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  
  .toc hr {
    border: 0;
    height: 1px;
    background-color: #ccc;
    margin-bottom: 15px;
  }
  
  .toc ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .toc li {
    margin-bottom: 6px;
  }
  
  .toc a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    transition: color 0.2s ease, font-weight 0.2s ease;
  }
  
  .toc a:hover {
    color: #000;
    text-decoration: underline;
  }
  
  .toc a.active {
    color: #6366f1;
    font-weight: 700;
    position: relative;
    padding-left: 12px;
  }
  
  .toc a.active::before {
    content: "|";
    position: absolute;
    left: 0;
    color: #6366f1;
    font-weight: 700;
  }
  
  /* Section styles */
  .section {
    padding: 1.5rem 1.5rem;
  }
  
  .section p {
    text-align: justify;
  }
  
  /* Prevent content overflow and ensure proper spacing */
  .hero-body .columns {
    margin: 0 !important;
  }
  
  .hero-body .column.has-text-centered {
    margin-bottom: 1.5rem;
  }
  
  /* Ensure author names wrap properly */
  .is-size-4.publication-authors .author-block {
    margin: 0.4rem 0.3rem !important;
  }
  
  @media (max-width: 1024px) {
    .is-size-4.publication-authors .author-block {
      margin: 0.3rem 0.2rem !important;
    }
  }
  
  /* Better spacing for affiliation notes */
  .is-size-4.publication-authors {
    margin-top: 1.5rem !important;
    margin-bottom: 0.75rem !important;
  }
  
  .is-size-5.publication-authors {
    margin-top: 0.75rem !important;
    margin-bottom: 0.25rem !important;
  }
  
  /* Ensure proper vertical spacing between sections */
  .hero-body .column.has-text-centered > * {
    margin-bottom: 0.5rem;
  }
  
  .hero-body .column.has-text-centered > *:last-child {
    margin-bottom: 0;
  }
  
  /* Responsive button wrapping */
  .publication-links .button {
    margin: 0.25rem !important;
    white-space: nowrap;
  }
  
  @media (max-width: 480px) {
    .publication-links {
      flex-direction: column;
      align-items: center;
    }
    
    .publication-links .button {
      width: auto;
      min-width: 150px;
    }
  }
  
  /* Ensure title doesn't break awkwardly */
  #main-title br {
    display: block;
  }
  
  @media (max-width: 768px) {
    #main-title br {
      display: none;
    }
  }
  
  /* Prevent TOC from overlapping content on smaller screens */
  @media (max-width: 1399px) {
    .toc {
      display: none !important;
    }
  }
  
  /* Better container constraints */
  .hero-body .container .columns.is-centered {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<!-- TartanIMU component styles (from original page) -->
<style>
        /* Base Styles */
        body, html {
            background-color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .hero.is-light {
            background-color: white;
        }

        /* Header and Navigation */
        .centered-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .centered-content h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #2c3e50;
            line-height: 1.2;
        }

        .authors {
            font-size: 1.2rem;
            margin-bottom: 10px;
            color: #555;
        }

        .affiliation {
            font-size: 1rem;
            margin-bottom: 25px;
            color: #666;
        }

        /* Button Styles */
        .button.is-info {
            background-color: #6366f1;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            color: white;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            font-weight: 500;
            transition: all 0.3s ease;
            margin: 5px;
        }

        .button.is-info:hover {
            background-color: #4f46e5;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }

        .small-logo, .logo {
            margin-right: 8px;
        }

        .small-logo {
            width: 18px;
            height: auto;
        }

        .logo {
            width: 24px;
            height: auto;
        }

        /* Section Headers (scoped: do not target all h1 — publication #main-title uses Bulma) */
        .centered-title {
            text-align: center;
            width: 100%;
            font-size: 2.2rem;
            font-weight: 600;
            margin: 40px 0 30px 0;
            color: #2c3e50;
            border-bottom: 3px solid #6366f1;
            padding-bottom: 10px;
            display: inline-block;
            letter-spacing: 0.5px;
        }

        #results.centered-title {
            border-bottom: none;
            padding-bottom: 0;
            text-align: left !important;
            font-size: 2.5rem !important;
            font-weight: 600 !important;
            display: block !important;
        }

        /* Content Sections */
        .about-section, .system-architecture {
            max-width: 1000px;
            margin: 0 auto 40px auto;
            padding: 0 20px;
        }

        .about-section p, .system-architecture p {
            font-size: 1.1rem;
            text-align: justify;
            margin-bottom: 20px;
            color: #555;
            line-height: 1.8;
            letter-spacing: 0.3px;
        }

        /* Figure and Image Styles */
        .figure-container, .image-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 40px 0;
            width: 100%;
        }

        .figure-container img, .image-container img {
            width: 100%;
            max-width: 900px;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }

        .figure-description, .image-caption {
            margin-top: 20px;
            text-align: center;
            font-style: italic;
            color: #666;
            max-width: 90%;
            font-size: 1.05rem;
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #6366f1;
            line-height: 1.6;
        }

        /* Video Styles */
        .video-container {
            width: 100%;
            max-width: 900px;
            margin: 30px auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .video-container iframe {
            width: 100%;
            height: 450px;
            border: none;
        }

        /* Carousel Styles */
        .carousel-container {
            position: relative;
            width: 100%;
            max-width: 900px;
            margin: 30px auto;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 6px 25px rgba(0,0,0,0.15);
        }

        .carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .item {
            flex: 0 0 100%;
        }

        .item video {
            width: 100%;
            height: auto;
            max-height: 600px;
            aspect-ratio: 320 / 163;
            object-fit: contain;
            display: block;
            background-color: #000;
            border-radius: 8px;
        }

        /* Video Loading Optimization */
        .item video:not([data-loaded]) {
            background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                        linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
            background-size: 20px 20px;
            background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
            animation: loading 1s linear infinite;
        }

        @keyframes loading {
            0% { background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }
            100% { background-position: 20px 20px, 20px 30px, 30px 10px, 10px 20px; }
        }

        .item-description {
            text-align: center;
            margin-top: 15px;
            padding: 15px;
            font-size: 1.2rem;
            color: #2c3e50;
            font-weight: 500;
            background-color: #f8f9fa;
        }

        /* Preview Images */
        .drag-bar {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            gap: 15px;
            flex-wrap: wrap;
            padding: 15px 0;
        }

        .preview-container {
            display: flex;
            gap: 15px;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 10px 0;
        }

        .preview-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .preview-image {
            width: 120px;
            height: 68px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            opacity: 0.6;
            transition: all 0.3s ease;
            border: 3px solid transparent;
        }

        .preview-image:hover {
            opacity: 0.9;
        }

        .preview-image.active {
            opacity: 1;
            border-color: #3498db;
            box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
        }

        /*
         * Override site _sass/components/_carousel.scss (global):
         * - .item-description was position:absolute + z-index:2 → blocked native video controls
         * - .carousel .item had padding:20px → video narrower than container
         * - loading animation squares suppressed (posters removed; black bg used instead)
         */
        .tartanimu-results-section .carousel-container .carousel .item {
            padding: 0 !important;
        }
        .tartanimu-results-section .carousel-container .carousel .item video:not([data-loaded]) {
            background: #000 !important;
            animation: none !important;
        }
        .tartanimu-results-section .drag-bar .drag-handle {
            pointer-events: none !important;
        }
        .tartanimu-results-section .carousel-container .item-description {
            position: static !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            z-index: auto !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            white-space: normal !important;
            text-align: center !important;
            width: 100% !important;
            display: block !important;
        }

        /* Math and Equations */
        .math-content {
            overflow-x: auto;
            padding: 20px;
            margin: 15px 0;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #6366f1;
        }

        .equation {
            display: block;
            text-align: center;
            margin: 20px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 8px;
        }

        /* Dataset Table */
        .dataset-section {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .dataset-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .dataset-table th {
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            color: #fff !important;
            padding: 15px 12px;
            text-align: center;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .dataset-table thead th a,
        .dataset-table tfoot td,
        .dataset-table tfoot td strong,
        .dataset-table tfoot td a,
        .dataset-table tfoot td a:visited {
            color: #fff !important;
        }

        .dataset-table tfoot td a:hover {
            color: #e0e7ff !important;
        }

        .dataset-table tfoot td a i,
        .dataset-table tfoot td a .icon {
            color: inherit !important;
        }

        .dataset-table tfoot td a i {
            margin-left: 0.35em;
            vertical-align: middle;
            opacity: 0.95;
        }

        /* Bulma .content table tfoot td uses $text-strong — override for purple footer row */
        .content table.dataset-table tfoot td,
        .content table.dataset-table tfoot td strong,
        .content table.dataset-table tfoot td a {
            color: #fff !important;
        }

        .content table.dataset-table tfoot td a[target="_blank"]::after {
            content: none !important;
        }

        .dataset-table td {
            padding: 12px;
            text-align: center;
            border-bottom: 1px solid #e9ecef;
            font-size: 0.9rem;
        }

        .dataset-table tbody tr:nth-child(even) {
            background-color: #f8f9fa;
        }

        .dataset-table tbody tr:hover {
            background-color: #eef2ff;
        }

        .dataset-table tbody td a {
            color: #6366f1;
            text-decoration: none;
            font-weight: 500;
        }

        .dataset-table tbody td a:hover {
            color: #4f46e5;
            text-decoration: underline;
        }

        /* Citation Section */
        .citation-section {
            max-width: 1000px;
            margin: 40px auto;
            padding: 25px;
            background-color: #f8f9fa;
            border-radius: 12px;
            border-left: 4px solid #6366f1;
        }

        .citation-section h2 {
            color: #2c3e50;
            margin-bottom: 20px;
        }

        .citation-section pre {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            border: 1px solid #e9ecef;
        }

        /* Contact Section */
        .contact-section {
            max-width: 800px;
            margin: 40px auto;
            padding: 25px;
            text-align: center;
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            border-radius: 12px;
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
            .centered-content h1 {
                font-size: 2rem;
            }
            
            .authors {
                font-size: 1rem;
            }
            
            .video-container iframe {
                height: 300px;
            }
            
            .dataset-table {
                font-size: 0.8rem;
            }
            
            .dataset-table th,
            .dataset-table td {
                padding: 8px 6px;
            }
            
            .preview-image {
                width: 80px;
                height: 45px;
            }
        }

        .poster-section {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }
        
        .poster-container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .poster-viewer {
            width: 100%;
            background: #f8f9fa;
            padding: 20px;
            border-bottom: 1px solid #e9ecef;
        }
        
        .poster-viewer object {
            border: none;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: height 0.3s ease;
        }
        
        .poster-controls {
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 20px;
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }
        
        .poster-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            background: #6366f1;
            color: white;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        
        .poster-button:hover {
            background: #4f46e5;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        
        .poster-button i {
            font-size: 1.1rem;
        }
        
        .download-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #6366f1;
            text-decoration: none;
            font-weight: 500;
            padding: 10px 20px;
            border-radius: 8px;
            background: #eef2ff;
            transition: all 0.3s ease;
        }
        
        .download-link:hover {
            background: #e0e7ff;
            transform: translateY(-2px);
        }
        
        @media screen and (max-width: 768px) {
            .poster-section {
                padding: 0 10px;
            }
            
            .poster-viewer {
                padding: 10px;
            }
            
            .poster-controls {
                flex-direction: column;
                align-items: stretch;
                padding: 15px;
            }
            
            .poster-button {
                width: 100%;
                justify-content: center;
            }
        }

</style>

<!-- Main Content Section -->
<section class="section title-section">
  <div class="toc">
    <h3>Content</h3>
    <hr>
    <ul>
      <li><a href="#results">Results</a></li>
      <li><a href="#about-tartanimu">About TartanIMU</a></li>
      <li><a href="#system-architecture">System Architecture</a></li>
      <li><a href="#method">Method</a></li>
      <li><a href="#interactive-demo">Interactive Demo</a></li>
      <li><a href="#dataset">Dataset</a></li>
      <li><a href="#limitations">Limitations</a></li>
      <li><a href="#Citations">Citation</a></li>
    </ul>
  </div>

  <div class="container">
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <h1 class="title is-1 publication-title" id="main-title"><span style="color:#6366f1;">TARTAN IMU</span>: A Light Foundation Model <br> for Inertial Positioning in Robotics</h1>

        <div class="is-size-4 publication-authors" style="margin-top: 1.5rem; margin-bottom: 0.5rem;">
          <span class="author-block" style="font-size: 95%;">
            Shibo Zhao<sup>1†*</sup>, Sifan Zhou<sup>1†*</sup>, Raphael Blanchard<sup>1</sup>, Yuheng Qiu<sup>1</sup>, Wenshan Wang<sup>1</sup>, Sebastian Scherer<sup>1</sup>
          </span>
        </div>

        <div class="is-size-5 publication-authors">
          <span class="author-block"><sup>†</sup>Equal contribution</span>
          <span class="author-block"><sup>1</sup>Carnegie Mellon University</span>
          <span class="author-block"><sup>*</sup>Corresponding Author</span>
        </div>

        <div class="column has-text-centered">
          <div class="publication-links">
            <span class="link-block">
              <a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_Positioning_in_CVPR_2025_paper.pdf" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon"><i class="fas fa-file-pdf"></i></span>
                <span>Paper</span>
              </a>
            </span>
            <span class="link-block">
              <a href="/img/tartanimu/CVPR_Poster.pdf" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon"><i class="fas fa-image"></i></span>
                <span>Poster</span>
              </a>
            </span>
            <span class="link-block">
              <a href="https://github.com/superxslam/SuperOdom" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon"><i class="fab fa-github"></i></span>
                <span>Code (Coming soon...)</span>
              </a>
            </span>
            <span class="link-block">
              <a href="https://huggingface.co/datasets/raphael-blanchard/TartanIMU/tree/main" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon"><i class="fas fa-database"></i></span>
                <span>Dataset &amp; Checkpoints</span>
              </a>
            </span>
            <span class="link-block">
              <a href="#Citations" class="external-link button is-normal is-rounded is-dark">
                <span class="icon"><i class="fas fa-quote-left"></i></span>
                <span>Citation</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<h1 id="results" class="centered-title">Results (Foundation Model Performance on Different Robot Platform)</h1>
<section class="hero is-light is-small tartanimu-results-section">
    <div class="hero-body">
        <div class="container">
            <div class="carousel-container">
                <div id="results-carousel" class="carousel">
                    <div class="item">
                        <video muted loop playsinline controls preload="metadata" poster="/img/tartanimu/car_overview.png">
                            <source src="video/tartanimu/exp1_video_compare_car.m4v" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <p class="item-description">UGV (Foundation Model)</p>
                    </div>
                    <div class="item">
                        <video muted loop playsinline controls preload="metadata" poster="/img/tartanimu/dog_overview.png">
                            <source src="{{ "/video/tartanimu/exp1_video_compare_dog.m4v" | relative_url }}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <p class="item-description">Quadruped (Foundation Model)</p>
                    </div>
                    <div class="item">
                        <video muted loop playsinline controls preload="metadata" poster="/img/tartanimu/drone_overview.png">
                            <source src="{{ "/video/tartanimu/exp1_video_compare_drone.m4v" | relative_url }}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <p class="item-description">Drone (Foundation Model)</p>
                    </div>
                    <div class="item">
                        <video muted loop playsinline controls preload="metadata" poster="/img/tartanimu/human_overview.png">
                            <source src="{{ "/video/tartanimu/exp1_video_compare_human.m4v" | relative_url }}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <p class="item-description">Human (Foundation Model)</p>
                    </div>
                </div>
            </div>
            <div class="drag-bar modern-preview-bar">
                <div class="preview-container">
                    <div class="preview-wrapper">
                        <img src="/img/tartanimu/car_overview.png" alt="Preview 1" class="preview-image active" data-index="0">
                    </div>
                    <div class="preview-wrapper">
                        <img src="/img/tartanimu/dog_overview.png" alt="Preview 2" class="preview-image" data-index="1">
                    </div>
                    <div class="preview-wrapper">
                        <img src="/img/tartanimu/drone_overview.png" alt="Preview 3" class="preview-image" data-index="2">
                    </div>
                    <div class="preview-wrapper">
                        <img src="/img/tartanimu/human_overview.png" alt="Preview 4" class="preview-image" data-index="3">
                    </div>
                </div>
                <div class="drag-handle modern-drag-handle"></div>
            </div>
        </div>
    </div>
</section>




<h2 id="about-tartanimu" class="title is-2" style="text-align: left; margin-bottom: 2rem;">About TartanIMU</h2>
<div class="about-section">
    <p>Despite recent advances in deep learning, most existing learning IMU odometry methods are trained on specific datasets, lack generalization, and are prone to overfitting, which limits their real-world application. To address these challenges, we present Tartan IMU, a foundation model designed for generalizable, IMU-based state estimation across diverse robotic platforms.</p>
    
    <p>Our approach consists of three stages: First, a pre-trained foundation model leverages over 100 hours of multi-platform data to establish general motion knowledge, achieving 36% improvement in ATE over specialized models. Second, to adapt to previously unseen tasks, we use Low-Rank Adaptation (LoRA), allowing positive transfer with only 1.1 M trainable parameters. Finally, to support robotics deployment, we introduce online test-time adaptation, which eliminates the boundary between training and testing, allowing the model to continuously "learn as it operates" at 200 FPS in real-time.</p>
    
    <div class="figure-container">
        <img src="/img/tartanimu/firstpage.png" alt="TartanIMU Overview" />
    <p class="figure-description">
    Tartan IMU is to our knowledge the first open-source cross-robot foundation model for pose estimation using solely IMU data.
    </p>
    </div>
</div>

<h2 id="system-architecture" class="title is-2" style="text-align: left; margin-bottom: 2rem;">System Architecture</h2>
<div class="system-architecture">
    <div class="image-container">
        <img src="/img/tartanimu/systempipeline.png" alt="System architecture">
        <p class="image-caption">
            <strong>Figure 1: Three learning stages of TartanIMU.</strong> <strong>(a)</strong> Pretrained IMU Model features a shared backbone to capture generalizable IMU knowledge. <strong>(b)</strong> Efficient Fine-Tuning utilizes an adapter to enable positive transfer for new tasks. <strong>(c)</strong> Online Adaptation employs an adaptive memory buffer to support on-the-fly model updates during deployment.
        </p>
    </div>
</div>

<!-- Methodology Section (same structure as index.md) -->
<h2 class="title is-2" style="text-align: left;">Method</h2>
<section class="section content-section" id="method">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="content">
          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #6366f1; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Stage 1: Pretrained IMU Model</div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Our foundation model leverages a shared backbone architecture to capture generalizable IMU motion patterns across different robotic platforms. This stage establishes the core motion understanding that serves as the foundation for subsequent adaptation stages.
            </p>
            <div class="columns is-centered">
              <div class="column is-four-fifths">
                <img src="/img/tartanimu/tsne_viz.png" alt="t-SNE visualization of learned features" style="width: 100%; border-radius:10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" />
              </div>
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              t-SNE visualization of the learned ResNet feature space. Cluster separation across platforms shows the model's ability to learn motion-specific dynamics.
            </p>
          </div>

          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #6366f1; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Stage 2: Efficient Fine-Tuning</div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Once the base TartanIMU model is pretrained, we adapt it to unseen robot motions or challenging deployment scenarios using <strong>Low-Rank Adaptation (LoRA)</strong>. This technique introduces only a small number of trainable parameters while freezing the original model, preserving its robust general motion understanding.
            </p>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              LoRA achieves this by reparameterizing weight updates as a low-rank matrix decomposition:
            </p>
            <div class="equation" style="margin-top: 1rem; margin-bottom: 0.5rem;">
              \[ h = W_0 x + \Delta W x = W_0 x + B A x \tag{1} \]
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Here, \(W_0\) is the pretrained weight, and \(A, B\) are the small matrices trained for the new task. This structure ensures that learning is efficient, allowing use even with very limited data.
            </p>
            <div class="columns is-centered">
              <div class="column is-four-fifths">
                <img src="/img/tartanimu/offline_finetuning.png" alt="Offline finetuning results" style="width: 100%; border-radius:10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" />
              </div>
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Our LoRA-based finetuning improves accuracy on new motion tasks while keeping computational and data costs low.
            </p>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              One of the key benefits of LoRA adaptation is <strong>non-forgetting</strong>: the core representation remains stable across tasks. This enables lifelong learning capabilities and is particularly useful in robotics where new environments and tasks are continuously encountered.
            </p>
            <div class="columns is-centered">
              <div class="column is-four-fifths">
                <img src="/img/tartanimu/no_forgetting.png" alt="No forgetting comparison" style="width: 100%; border-radius:10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" />
              </div>
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Comparison of LoRA vs. full fine-tuning. LoRA retains prior knowledge, while full finetuning can degrade earlier performance.
            </p>
          </div>

          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #6366f1; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Stage 3: Online Adaptation</div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              In the final stage of our TartanIMU pipeline, we enable real-time test-time adaptation through a novel online learning strategy. Unlike traditional pipelines that maintain a static model during deployment, we allow the model to evolve as it operates. This is critical in real-world robotics, where domain shifts such as speed, terrain, or motion patterns frequently occur.
            </p>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              To support this, we maintain a lightweight, adaptive training buffer that stores recent IMU samples during deployment. These samples are filtered and clustered via a Gaussian Mixture Model (GMM) based motion classifier to ensure diversity across motion types—e.g., stationary, forward motion, left turns, and right turns. The buffer actively reselects samples to avoid redundancy, enabling quick and stable updates with minimal compute.
            </p>
            <div class="columns is-centered">
              <div class="column is-four-fifths">
                <img src="/img/tartanimu/online_adaptation.png" alt="Online adaptation illustration" style="width: 100%; border-radius:10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" />
              </div>
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Online adaptation results in an 8-shaped trajectory using only IMU data. By maintaining a balanced buffer across diverse motion segments, TartanIMU adapts quickly during deployment, improving trajectory accuracy over time.
            </p>
            <div class="columns is-centered">
              <div class="column is-four-fifths">
                <img src="/img/tartanimu/online_adaptation_circle.png" alt="Online adaptation on unseen circular trajectory" style="width: 100%; border-radius:10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" />
              </div>
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Performance of Online Adaptation on Unseen Trajectory. The Tartan IMU model progressively learns unseen circular patterns through incremental training data. It can be seen that our model can learn new motion patterns within 90 seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<script>
// Video Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('results-carousel');
    const previewImages = document.querySelectorAll('.preview-image');
    let currentIndex = 0;

    function showSlide(index) {
        // Update carousel position
        const translateX = -index * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update active preview image
        previewImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        
        // Video performance optimization
        const videos = carousel.querySelectorAll('video');
        videos.forEach((video, i) => {
            if (i === index) {
                // Load and play current video
                if (video.readyState < 2) {
                    video.load();
                }
                video.setAttribute('data-loaded', 'true');
                // Auto-play current video (muted)
                if (video.paused) {
                    video.play().catch(e => console.log('Autoplay prevented:', e));
                }
            } else {
                // Pause other videos to save bandwidth
                video.pause();
            }
        });
        
        currentIndex = index;
    }

    // Add click listeners to preview images
    previewImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showSlide(index);
        });
    });

});
</script>

<h2 id="interactive-demo" class="title is-2" style="text-align: left; margin-bottom: 2rem;">Interactive Demo (Coming Soon)</h2>
<div class="demo-section">
    <p style="text-align: center; font-size: 1.1rem; margin-bottom: 30px;">
        Try TartanIMU with our curated sample trajectories! Select a platform and trajectory below to test with our live model on Hugging Face.
    </p>
    
    <div class="platform-selector">
        <div class="platform-tabs">
            <button class="platform-tab active" data-platform="quadruped">
                <i class="fas fa-dog"></i>
                <span>Quadruped</span>
            </button>
            <button class="platform-tab" data-platform="drone">
                <i class="fas fa-helicopter"></i>
                <span>Drone</span>
            </button>
            <button class="platform-tab" data-platform="human">
                <i class="fas fa-walking"></i>
                <span>Human</span>
            </button>
            <button class="platform-tab" data-platform="ugv">
                <i class="fas fa-truck"></i>
                <span>UGV</span>
            </button>
        </div>
    </div>
    
    <div class="trajectory-container">
        <!-- Quadruped Trajectories -->
        <div class="trajectory-group active" data-platform="quadruped">
            <h3 class="platform-title">Quadruped Robot Trajectories</h3>
            <div class="trajectory-grid">
                <div class="trajectory-card" data-trajectory="quadruped_outdoor_1">
                    <div class="trajectory-preview">
                        <img src="/img/tartanimu/outdoor_spot.png" alt="Outdoor Navigation" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Outdoor Navigation</h4>
                                <p>Duration: 120s | Terrain: Rough outdoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Spot Robot - Outdoor Exploration</h5>
                        <p>Boston Dynamics Spot navigating challenging outdoor terrain with rocks and vegetation.</p>
                        <ul>
                            <li><strong>Environment:</strong> Rocky outdoor terrain</li>
                            <li><strong>Challenges:</strong> Uneven ground, obstacles</li>
                            <li><strong>Data:</strong> 200Hz IMU, 120 seconds</li>
                        </ul>
                    </div>
                </div>

                <div class="trajectory-card" data-trajectory="quadruped_stairs">
                    <div class="trajectory-preview">
                        <img src="/img/tartanimu/spot_stairs_preview.png" alt="Stair Climbing" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Stair Climbing</h4>
                                <p>Duration: 90s | Terrain: Urban stairs</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Spot Robot - Stair Navigation</h5>
                        <p>Complex stair climbing and descending with dynamic gait adjustments.</p>
                        <ul>
                            <li><strong>Environment:</strong> Multi-level stairs</li>
                            <li><strong>Challenges:</strong> Height changes, gait adaptation</li>
                            <li><strong>Data:</strong> 200Hz IMU, 90 seconds</li>
                        </ul>
                    </div>
                </div>

                <div class="trajectory-card" data-trajectory="quadruped_indoor">
                    <div class="trajectory-preview">
                        <img src="img/superloc/preview2.png" alt="Indoor Navigation" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Indoor Navigation</h4>
                                <p>Duration: 150s | Environment: Office</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Spot Robot - Indoor Office</h5>
                        <p>Precise navigation through indoor office spaces with furniture obstacles.</p>
                        <ul>
                            <li><strong>Environment:</strong> Indoor office space</li>
                            <li><strong>Challenges:</strong> Tight spaces, furniture</li>
                            <li><strong>Data:</strong> 200Hz IMU, 150 seconds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Drone Trajectories -->
        <div class="trajectory-group" data-platform="drone">
            <h3 class="platform-title">Drone Flight Trajectories</h3>
            <div class="trajectory-grid">
                <div class="trajectory-card" data-trajectory="drone_indoor_3d">
                    <div class="trajectory-preview">
                        <img src="/img/tartanimu/indoor_flight.png" alt="3D Maneuvers" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>3D Maneuvers</h4>
                                <p>Duration: 90s | Type: Complex flight</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Quadcopter - Indoor 3D Flight</h5>
                        <p>Complex 3D maneuvers including loops, spirals, and rapid direction changes.</p>
                        <ul>
                            <li><strong>Environment:</strong> Indoor flight space</li>
                            <li><strong>Challenges:</strong> 3D motion, rapid acceleration</li>
                            <li><strong>Data:</strong> 200Hz IMU, 90 seconds</li>
                        </ul>
                    </div>
                </div>

                <div class="trajectory-card" data-trajectory="drone_outdoor_wind">
                    <div class="trajectory-preview">
                        <img src="/img/superloc/preview3.png" alt="Windy Conditions" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Windy Conditions</h4>
                                <p>Duration: 180s | Environment: Outdoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Drone - Wind Disturbance</h5>
                        <p>Outdoor flight in windy conditions with constant stabilization adjustments.</p>
                        <ul>
                            <li><strong>Environment:</strong> Outdoor with wind</li>
                            <li><strong>Challenges:</strong> Wind disturbance, stability</li>
                            <li><strong>Data:</strong> 200Hz IMU, 180 seconds</li>
                        </ul>
                    </div>
                </div>

                <div class="trajectory-card" data-trajectory="drone_precision_hover">
                    <div class="trajectory-preview">
                        <img src="img/tartanimu/precise_hovering.png" alt="Precision Hover" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Precision Hover</h4>
                                <p>Duration: 60s | Type: Stationary</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Drone - Precision Hovering</h5>
                        <p>High-precision hovering with micro-adjustments and position holding.</p>
                        <ul>
                            <li><strong>Environment:</strong> Indoor controlled</li>
                            <li><strong>Challenges:</strong> Micro-movements, stability</li>
                            <li><strong>Data:</strong> 200Hz IMU, 60 seconds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Human Trajectories -->
        <div class="trajectory-group" data-platform="human">
            <h3 class="platform-title">Human Locomotion Trajectories</h3>
            <div class="trajectory-grid">
                <div class="trajectory-card" data-trajectory="human_walking_urban">
                    <div class="trajectory-preview">
                        <img src="img/superloc/preview2.png" alt="Urban Walking" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Urban Walking</h4>
                                <p>Duration: 180s | Environment: City</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Human - Urban Sidewalk</h5>
                        <p>Natural walking patterns on urban sidewalks with turns and speed changes.</p>
                        <ul>
                            <li><strong>Environment:</strong> Urban sidewalk</li>
                            <li><strong>Challenges:</strong> Variable speed, direction changes</li>
                            <li><strong>Data:</strong> 200Hz IMU, 180 seconds</li>
                        </ul>
                    </div>
                </div>

                <div class="trajectory-card" data-trajectory="human_jogging">
                    <div class="trajectory-preview">
                        <img src="img/superloc/preview1.png" alt="Jogging" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Jogging</h4>
                                <p>Duration: 240s | Activity: Running</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Human - Jogging Path</h5>
                        <p>Continuous jogging with varying pace and directional changes along park paths.</p>
                        <ul>
                            <li><strong>Environment:</strong> Park jogging path</li>
                            <li><strong>Challenges:</strong> Higher frequency motion, pace changes</li>
                            <li><strong>Data:</strong> 200Hz IMU, 240 seconds</li>
                        </ul>
                    </div>
                </div>

                <div class="trajectory-card" data-trajectory="human_indoor_nav">
                    <div class="trajectory-preview">
                        <img src="img/superloc/preview3.png" alt="Indoor Navigation" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Indoor Navigation</h4>
                                <p>Duration: 120s | Environment: Building</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>Human - Building Navigation</h5>
                        <p>Walking through multi-level building with stairs and corridor navigation.</p>
                        <ul>
                            <li><strong>Environment:</strong> Multi-story building</li>
                            <li><strong>Challenges:</strong> Stairs, elevation changes</li>
                            <li><strong>Data:</strong> 200Hz IMU, 120 seconds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- UGV Trajectories -->
        <div class="trajectory-group" data-platform="ugv">
            <h3 class="platform-title">UGV Navigation Trajectories</h3>
            <div class="trajectory-grid">
                <div class="trajectory-card" data-trajectory="ugv_offroad_forest">
                    <div class="trajectory-preview">
                        <img src="img/superloc/preview3.png" alt="Forest Trail" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Forest Trail</h4>
                                <p>Duration: 200s | Terrain: Off-road</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>UGV - Forest Navigation</h5>
                        <p>Off-road navigation through forest trails with varying terrain and obstacles.</p>
                        <ul>
                            <li><strong>Environment:</strong> Forest trail</li>
                            <li><strong>Challenges:</strong> Bumpy terrain, speed variation</li>
                            <li><strong>Data:</strong> 200Hz IMU, 200 seconds</li>
                        </ul>
                    </div>
                </div>

                <div class="trajectory-card" data-trajectory="ugv_urban_street">
                    <div class="trajectory-preview">
                        <img src="img/superloc/preview1.png" alt="Urban Street" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Urban Street</h4>
                                <p>Duration: 300s | Environment: City</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>UGV - City Navigation</h5>
                        <p>Autonomous navigation through urban streets with traffic and intersections.</p>
                        <ul>
                            <li><strong>Environment:</strong> Urban streets</li>
                            <li><strong>Challenges:</strong> Traffic, stop-and-go motion</li>
                            <li><strong>Data:</strong> 200Hz IMU, 300 seconds</li>
                        </ul>
                    </div>
                </div>

                <div class="trajectory-card" data-trajectory="ugv_parking_lot">
                    <div class="trajectory-preview">
                        <img src="img/superloc/preview2.png" alt="Parking Maneuvers" class="trajectory-image">
                        <div class="trajectory-overlay">
                            <div class="trajectory-info">
                                <h4>Parking Maneuvers</h4>
                                <p>Duration: 90s | Type: Precision</p>
                            </div>
                        </div>
                    </div>
                    <div class="trajectory-details">
                        <h5>UGV - Parking Precision</h5>
                        <p>Complex parking maneuvers including parallel parking and tight turns.</p>
                        <ul>
                            <li><strong>Environment:</strong> Parking lot</li>
                            <li><strong>Challenges:</strong> Precision maneuvers, tight spaces</li>
                            <li><strong>Data:</strong> 200Hz IMU, 90 seconds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="demo-controls">
        <div class="selected-trajectory">
            <h3 id="selected-title">Select a trajectory above to get started</h3>
            <p id="selected-description">Choose any platform and trajectory to see detailed information and try it with our model.</p>
        </div>
        
        <div class="demo-buttons">
            <button id="try-demo-btn" class="demo-button primary" disabled>
                <i class="fas fa-play"></i>
                Try with TartanIMU Model
            </button>
            <button id="download-data-btn" class="demo-button secondary" disabled>
                <i class="fas fa-download"></i>
                Download Sample Data
            </button>
            <button id="view-results-btn" class="demo-button secondary" disabled>
                <i class="fas fa-chart-line"></i>
                View Expected Results
            </button>
        </div>
    </div>

    <div class="demo-info">
        <div class="info-card">
            <h4><i class="fas fa-info-circle"></i> How it works</h4>
            <ol>
                <li>Select a platform (Quadruped, Drone, Human, or UGV)</li>
                <li>Choose a specific trajectory from the available options</li>
                <li>Click "Try with TartanIMU Model" to launch our Hugging Face demo</li>
                <li>The selected trajectory data will be automatically loaded</li>
                <li>See real-time pose estimation results and compare with ground truth</li>
            </ol>
        </div>
        
        <div class="info-card">
            <h4><i class="fas fa-upload"></i> Upload your own data</h4>
            <p>Want to test with your own IMU data? Our Hugging Face demo also supports custom NPZ file uploads.</p>
            <p><strong>Required format:</strong> NPZ file containing IMU data at 200Hz with keys: 'acc', 'gyro', 'timestamp'</p>
            <a href="#" class="demo-button tertiary" id="custom-upload-btn">
                <i class="fas fa-external-link-alt"></i>
                Open Hugging Face Demo
            </a>
        </div>
    </div>
</div>

<style>
.demo-section {
    max-width: 1200px;
    margin: 0 auto 20px auto;
    padding: 0 20px;
}

.platform-selector {
    margin-bottom: 30px;
}

.platform-tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.platform-tab {
    background: white;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    padding: 15px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 120px;
}

.platform-tab:hover {
    border-color: #6366f1;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.22);
}

.platform-tab.active {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
    border-color: #6366f1;
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
}

.platform-tab i {
    font-size: 1.5rem;
}

.platform-tab span {
    font-weight: 600;
    font-size: 0.9rem;
}

.trajectory-container {
    position: relative;
    min-height: 600px;
}

.trajectory-group {
    display: none;
    animation: fadeIn 0.3s ease;
    margin-bottom: 0;
    padding-bottom: 0;
}

.trajectory-group.active {
    display: block;
}


@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.platform-title {
    text-align: center;
    color: #2c3e50;
    font-size: 1.4rem;
    margin-bottom: 25px;
    padding-bottom: 10px;
    border-bottom: 2px solid #6366f1;
}

.trajectory-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
    margin-bottom: 0;
}

.trajectory-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
}

.trajectory-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.trajectory-card.selected {
    border-color: #6366f1;
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.32);
}

.trajectory-preview {
    position: relative;
    height: 160px;
    overflow: hidden;
}

.trajectory-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.trajectory-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 15px;
}

.trajectory-info h4 {
    margin: 0 0 3px 0;
    font-size: 1.1rem;
    font-weight: 600;
}

.trajectory-info p {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.9;
}

.trajectory-details {
    padding: 20px;
}

.trajectory-details h5 {
    margin: 0 0 8px 0;
    color: #2c3e50;
    font-size: 1rem;
    font-weight: 600;
}

.trajectory-details p {
    margin: 0 0 12px 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
}

.trajectory-details ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
}

.trajectory-details li {
    margin: 4px 0;
    font-size: 0.85rem;
    color: #555;
}

.demo-controls {
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 12px;
    padding: 15px 30px 30px 30px;  /* top right bottom left */
    margin-top: 10px;              /* previously might have been larger or missing */
    margin-bottom: 30px;
    text-align: center;
}

.selected-trajectory h3 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.selected-trajectory p {
    color: #666;
    margin-bottom: 25px;
}

.demo-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.demo-button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 1rem;
}

.demo-button.primary {
    background-color: #6366f1;
    color: white;
}

.demo-button.primary:hover:not(:disabled) {
    background-color: #4f46e5;
    transform: translateY(-2px);
}

.demo-button.secondary {
    background-color: #95a5a6;
    color: white;
}

.demo-button.secondary:hover:not(:disabled) {
    background-color: #7f8c8d;
    transform: translateY(-2px);
}

.demo-button.tertiary {
    background-color: #e74c3c;
    color: white;
}

.demo-button.tertiary:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
}

.demo-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.demo-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.info-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    border-left: 4px solid #6366f1;
}

.info-card h4 {
    color: #2c3e50;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.info-card ol {
    padding-left: 20px;
}

.info-card ol li {
    margin: 8px 0;
    color: #555;
}

.info-card p {
    color: #666;
    margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
    .platform-tabs {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
    }
    
    .platform-tab {
        min-width: unset;
        padding: 12px 15px;
    }
    
    .platform-tab i {
        font-size: 1.2rem;
    }
    
    .platform-tab span {
        font-size: 0.8rem;
    }
    
    .trajectory-grid {
        grid-template-columns: 1fr;
    }
    
    .demo-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .demo-button {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
    
    .demo-info {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const platformTabs = document.querySelectorAll('.platform-tab');
    const trajectoryGroups = document.querySelectorAll('.trajectory-group');
    const trajectoryCards = document.querySelectorAll('.trajectory-card');
    const selectedTitle = document.getElementById('selected-title');
    const selectedDescription = document.getElementById('selected-description');
    const tryDemoBtn = document.getElementById('try-demo-btn');
    const downloadDataBtn = document.getElementById('download-data-btn');
    const viewResultsBtn = document.getElementById('view-results-btn');
    const customUploadBtn = document.getElementById('custom-upload-btn');
    
    let selectedTrajectory = null;
    
    // Trajectory data - organized by platform
    const trajectoryData = {
        // Quadruped trajectories
        'quadruped_outdoor_1': {
            title: 'Quadruped - Outdoor Navigation',
            description: 'Boston Dynamics Spot robot navigating challenging outdoor terrain with rocks and vegetation.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=quadruped_outdoor_1',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        'quadruped_stairs': {
            title: 'Quadruped - Stair Climbing',
            description: 'Complex stair climbing and descending with dynamic gait adjustments and height changes.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=quadruped_stairs',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        'quadruped_indoor': {
            title: 'Quadruped - Indoor Navigation',
            description: 'Precise navigation through indoor office spaces with furniture obstacles and tight spaces.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=quadruped_indoor',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        
        // Drone trajectories
        'drone_indoor_3d': {
            title: 'Drone - 3D Maneuvers',
            description: 'Complex 3D maneuvers including loops, spirals, and rapid direction changes in indoor space.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=drone_indoor_3d',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        'drone_outdoor_wind': {
            title: 'Drone - Windy Conditions',
            description: 'Outdoor flight in windy conditions with constant stabilization adjustments and disturbances.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=drone_outdoor_wind',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        'drone_precision_hover': {
            title: 'Drone - Precision Hovering',
            description: 'High-precision hovering with micro-adjustments and position holding in controlled environment.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=drone_precision_hover',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        
        // Human trajectories
        'human_walking_urban': {
            title: 'Human - Urban Walking',
            description: 'Natural walking patterns on urban sidewalks with turns, speed changes, and typical pedestrian motion.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=human_walking_urban',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        'human_jogging': {
            title: 'Human - Jogging',
            description: 'Continuous jogging with varying pace and directional changes along park paths.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=human_jogging',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        'human_indoor_nav': {
            title: 'Human - Indoor Navigation',
            description: 'Walking through multi-level building with stairs, elevators, and corridor navigation.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=human_indoor_nav',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        
        // UGV trajectories
        'ugv_offroad_forest': {
            title: 'UGV - Forest Trail',
            description: 'Off-road navigation through forest trails with varying terrain, obstacles, and bumpy surfaces.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=ugv_offroad_forest',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        'ugv_urban_street': {
            title: 'UGV - Urban Street Navigation',
            description: 'Autonomous navigation through urban streets with traffic, intersections, and stop-and-go motion.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=ugv_urban_street',
            downloadUrl: '#',
            resultsUrl: '#'
        },
        'ugv_parking_lot': {
            title: 'UGV - Parking Maneuvers',
            description: 'Complex parking maneuvers including parallel parking, tight turns, and precision movements.',
            huggingfaceUrl: 'https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo?trajectory=ugv_parking_lot',
            downloadUrl: '#',
            resultsUrl: '#'
        }
    };
    
    // Handle platform tab switching
    platformTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const platform = this.dataset.platform;
            
            // Update active tab
            platformTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding trajectory group
            trajectoryGroups.forEach(group => {
                group.classList.remove('active');
                if (group.dataset.platform === platform) {
                    group.classList.add('active');
                }
            });
            
            // Clear selection
            clearSelection();
        });
    });
    
    // Handle trajectory selection
    trajectoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selection from all cards
            trajectoryCards.forEach(c => c.classList.remove('selected'));
            
            // Select current card
            this.classList.add('selected');
            
            // Get trajectory data
            const trajectoryKey = this.dataset.trajectory;
            selectedTrajectory = trajectoryData[trajectoryKey];
            
            // Update UI
            selectedTitle.textContent = selectedTrajectory.title;
            selectedDescription.textContent = selectedTrajectory.description;
            
            // Enable buttons
            tryDemoBtn.disabled = false;
            downloadDataBtn.disabled = false;
            viewResultsBtn.disabled = false;
        });
    });

    // Clear selection helper
    function clearSelection() {
        trajectoryCards.forEach(c => c.classList.remove('selected'));
        selectedTrajectory = null;
        selectedTitle.textContent = 'Select a trajectory above to get started';
        selectedDescription.textContent = 'Choose any platform and trajectory to see detailed information and try it with our model.';
        tryDemoBtn.disabled = true;
        downloadDataBtn.disabled = true;
        viewResultsBtn.disabled = true;
    }
    
    // Handle demo button clicks
    tryDemoBtn.addEventListener('click', function() {
        if (selectedTrajectory) {
            window.open(selectedTrajectory.huggingfaceUrl, '_blank');
        }
    });
    
    downloadDataBtn.addEventListener('click', function() {
        if (selectedTrajectory) {
            window.open(selectedTrajectory.downloadUrl, '_blank');
        }
    });
    
    viewResultsBtn.addEventListener('click', function() {
        if (selectedTrajectory) {
            window.open(selectedTrajectory.resultsUrl, '_blank');
        }
    });
    
    customUploadBtn.addEventListener('click', function() {
        window.open('https://huggingface.co/spaces/raphael-blanchard/tartanimu-demo', '_blank');
    });
});
</script>

<h2 id="dataset" class="title is-2" style="text-align: left; margin-bottom: 2rem;">Dataset (Release Soon)</h2>
<div class="dataset-section">
    <p style="text-align: center; font-size: 1.1rem; margin-bottom: 30px;">
        The TartanIMU dataset contains over 100 hours of diverse IMU data across multiple robotic platforms, environments, and motion patterns. This comprehensive collection enables robust foundation model training and evaluation.
    </p>
    
    <h2>Platform Statistics</h2>
    <table class="dataset-table">
        <thead>
            <tr>
                <th>Platform</th>
                <th>Robot Types</th>
                <th>Environments</th>
                <th>Trajectories</th>
                <th>Total Duration</th>
                <th>Data Rate</th>
                <th>Download</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Quadruped</strong></td>
                <td>Boston Dynamics Spot, ANYmal</td>
                <td>Indoor, Outdoor, Stairs, Rough Terrain</td>
                <td>45</td>
                <td>28.5 hours</td>
                <td>200 Hz</td>
                <td><a href="https://huggingface.co/datasets/raphael-blanchard/TartanIMU/tree/main/data/samples/dog/test" target="_blank">Hugging Face</a></td>
            </tr>
            <tr>
                <td><strong>Drone</strong></td>
                <td>DJI M100, Custom Quadcopter</td>
                <td>Indoor Flight, Outdoor, Windy Conditions</td>
                <td>38</td>
                <td>22.7 hours</td>
                <td>200 Hz</td>
                <td><a href="https://huggingface.co/datasets/raphael-blanchard/TartanIMU/tree/main/data/samples/drone/test" target="_blank">Hugging Face</a></td>
            </tr>
            <tr>
                <td><strong>Human</strong></td>
                <td>Handheld Device, Body-worn IMU</td>
                <td>Urban Walking, Jogging, Indoor Navigation</td>
                <td>52</td>
                <td>31.2 hours</td>
                <td>200 Hz</td>
                <td><a href="https://huggingface.co/datasets/raphael-blanchard/TartanIMU/tree/main/data/samples/human/test" target="_blank">Hugging Face</a></td>
            </tr>
            <tr>
                <td><strong>UGV</strong></td>
                <td>RC Car, Autonomous Vehicle, SubT Robot</td>
                <td>Off-road, Urban Streets, Forest Trails</td>
                <td>42</td>
                <td>25.4 hours</td>
                <td>200 Hz</td>
                <td><a href="https://huggingface.co/datasets/raphael-blanchard/TartanIMU/tree/main/data/samples/car/testv" target="_blank">Hugging Face</a></td>
            </tr>
        </tbody>
        <tfoot>
            <tr style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; font-weight: 600;">
                <td><strong>Total</strong></td>
                <td>12 Robot Types</td>
                <td>15+ Environments</td>
                <td><strong>177</strong></td>
                <td><strong>107.8 hours</strong></td>
                <td>200 Hz</td>
                <td><a href="https://huggingface.co/datasets/raphael-blanchard/TartanIMU/tree/main" target="_blank" rel="noopener noreferrer">Complete Dataset <i class="fas fa-external-link-alt fa-xs" aria-hidden="true"></i></a></td>
            </tr>
        </tfoot>
    </table>

    <h2>Data Format and Usage</h2>
    <div class="data-format-info">
        <div class="format-card">
            <h3><i class="fas fa-file-archive"></i> File Format</h3>
            <p><strong>NPZ files</strong> containing synchronized IMU data:</p>
            <ul>
                <li><code>acc</code>: 3D accelerometer data (m/s²)</li>
                <li><code>gyro</code>: 3D gyroscope data (rad/s)</li>
                <li><code>timestamp</code>: High-precision timestamps</li>
                <li><code>pose_gt</code>: Ground truth poses (when available)</li>
            </ul>
        </div>
        
        <div class="format-card">
            <h3><i class="fas fa-cogs"></i> Pre-processing</h3>
            <p>All data is:</p>
            <ul>
                <li>Temporally synchronized across platforms</li>
                <li>Calibrated and bias-corrected</li>
                <li>Resampled to consistent 200Hz</li>
                <li>Segmented into motion-coherent sequences</li>
            </ul>
        </div>
        
        <div class="format-card">
            <h3><i class="fas fa-rocket"></i> Quick Start</h3>
            <p>Load and use the data:</p>
            <pre><code>import numpy as np
data = np.load('trajectory.npz')
acc = data['acc']    # Shape: (N, 3)
gyro = data['gyro']  # Shape: (N, 3)
timestamps = data['timestamp']</code></pre>
        </div>
    </div>

    <div class="dataset-highlights">
        <h2>Key Features</h2>
        <div class="highlights-grid">
            <div class="highlight-item">
                <h4><i class="fas fa-globe"></i> Multi-Environment</h4>
                <p>Indoor offices, outdoor terrains, underground caves, urban streets, forest trails</p>
            </div>
            <div class="highlight-item">
                <h4><i class="fas fa-robot"></i> Cross-Platform</h4>
                <p>Legged robots, drones, ground vehicles, handheld devices</p>
            </div>
            <div class="highlight-item">
                <h4><i class="fas fa-clock"></i> Synchronized</h4>
                <p>Hardware-synchronized IMU data at 200Hz across all platforms</p>
            </div>
            <div class="highlight-item">
                <h4><i class="fas fa-chart-line"></i> Diverse Motion</h4>
                <p>Walking, flying, driving, climbing, hovering, maneuvering</p>
            </div>
        </div>
    </div>
</div>

<style>
.dataset-section {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
}

.dataset-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.dataset-table th {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: #fff !important;
    padding: 15px 12px;
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
}

.dataset-table thead th a,
.dataset-table tfoot td,
.dataset-table tfoot td strong,
.dataset-table tfoot td a,
.dataset-table tfoot td a:visited {
    color: #fff !important;
}

.dataset-table tfoot td a:hover {
    color: #e0e7ff !important;
}

.dataset-table tfoot td a i,
.dataset-table tfoot td a .icon {
    color: inherit !important;
}

.dataset-table tfoot td a i {
    margin-left: 0.35em;
    vertical-align: middle;
    opacity: 0.95;
}

.content table.dataset-table tfoot td,
.content table.dataset-table tfoot td strong,
.content table.dataset-table tfoot td a {
    color: #fff !important;
}

.content table.dataset-table tfoot td a[target="_blank"]::after {
    content: none !important;
}

.dataset-table td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #e9ecef;
    font-size: 0.9rem;
}

.dataset-table tbody tr:nth-child(even) {
    background-color: #f8f9fa;
}

.dataset-table tbody tr:hover {
    background-color: #eef2ff;
}

.dataset-table tbody td a {
    color: #6366f1;
    text-decoration: none;
    font-weight: 500;
}

.dataset-table tbody td a:hover {
    color: #4f46e5;
    text-decoration: underline;
}

.dataset-table tfoot td {
    border-bottom: none;
    padding: 15px 12px;
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: #fff !important;
    font-weight: 600;
}

.data-format-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin: 40px 0;
}

.format-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    border-left: 4px solid #6366f1;
}

.format-card h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.format-card i {
    color: #6366f1;
}

.format-card ul {
    margin: 10px 0;
    padding-left: 20px;
}

.format-card li {
    margin: 5px 0;
    color: #555;
}

.format-card pre {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 0.85rem;
    border: 1px solid #e9ecef;
}

.format-card code {
    font-family: 'Courier New', monospace;
    color: #2c3e50;
}

.dataset-highlights {
    margin-top: 50px;
}

.dataset-highlights h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.highlight-item {
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    border-left: 4px solid #6366f1;
}

.highlight-item h4 {
    color: #2c3e50;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.highlight-item i {
    color: #6366f1;
}

.highlight-item p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
}

@media screen and (max-width: 768px) {
    .dataset-table {
        font-size: 0.8rem;
    }
    
    .dataset-table th,
    .dataset-table td {
        padding: 8px 6px;
    }
    
    .data-format-info {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .format-card {
        padding: 20px;
    }
    
    .highlights-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<h2 id="limitations" class="title is-2" style="text-align: left; margin-bottom: 2rem;">Limitations</h2>
<div class="limitations-section">
    <p style="text-align: center; font-size: 1.1rem; margin-bottom: 40px;">
 While TartanIMU exhibits strong generalization across vehicles, drones, and legged robots, it still cannot support arbitrary robotic platforms. However, our experiments show
that the car motion head generalizes well to TartanDrive and
SubT vehicles. We believe our categories—car, humanoid,
quadruped, and drone—encompass most robots. For unseen
platforms, introducing a new motion head or leveraging a
mixture of existing experts (MoE) presents a promising
future direction.
    </p>

    <div class="future-work">
        <h2>Future Research Directions</h2>
        <p>We are actively working to address these limitations through:</p>
        <ul>
            <li><strong>Multi-modal fusion:</strong> Integrating visual and LiDAR data for drift correction and scale recovery</li>
            <li><strong>Adaptive learning:</strong> Developing methods for continuous learning from deployment data</li>
            <li><strong>Hardware optimization:</strong> Creating efficient model variants for edge computing platforms</li>
            <li><strong>Robust estimation:</strong> Improving resilience to sensor failures and environmental disturbances</li>
            <li><strong>Extended datasets:</strong> Collecting data from more diverse platforms and challenging scenarios</li>
        </ul>
    </div>
</div>

<style>
.limitations-section {
    max-width: 1200px;
    margin: 0 auto 40px auto;
    padding: 0 20px;
}

.future-work {
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 12px;
    padding: 30px;
    border-left: 4px solid #6366f1;
}

.future-work h2 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.future-work p {
    color: #555;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.future-work ul {
    list-style: none;
    padding-left: 0;
}

.future-work li {
    margin: 12px 0;
    padding-left: 25px;
    position: relative;
    color: #555;
    line-height: 1.6;
}

.future-work li:before {
    content: "🔬";
    position: absolute;
    left: 0;
    top: 0;
}

.future-work li strong {
    color: #6366f1;
    font-weight: 600;
}

@media screen and (max-width: 768px) {
    .future-work {
        padding: 25px 20px;
    }
    
    .future-work h2 {
        font-size: 1.3rem;
    }
}
</style>

<!-- Citation block (same layout as index.md bibtex) -->
<h2 class="title is-2" style="text-align: left; margin-top: 5.5rem;">Citation</h2>
<section class="section content-section" id="Citations">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <pre style="background: #2d2d2d; color: #f8f8f2; padding: 1.5rem; border-radius: 10px; font-size: 0.9rem; line-height: 1.5; border: 1px solid #111; overflow-x: auto;"><code>@inproceedings{zhao2025tartan,
  title={Tartan IMU: A Light Foundation Model for Inertial Positioning in Robotics},
  author={Zhao, Shibo and Zhou, Sifan and Blanchard, Raphael and Qiu, Yuheng and Wang, Wenshan and Scherer, Sebastian},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={22520--22529},
  year={2025}
}
</code></pre>
      </div>
    </div>
  </div>
</section>

<!-- JavaScript for TOC Scroll Behavior -->
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
        const sectionId = href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          sections.push({
            id: sectionId,
            element: el,
            link: link
          });
        }
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
          const section = sections[i];
          const rect = section.element.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section;
            break;
          }
        }

        if (!currentSection) {
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const sectionTop = section.element.getBoundingClientRect().top + window.scrollY;
            if (sectionTop <= scrollPosition) {
              currentSection = section;
              break;
            }
          }
        }
      }

      tocLinks.forEach(link => {
        link.classList.remove('active');
      });

      if (currentSection) {
        currentSection.link.classList.add('active');
      }
    }

    window.addEventListener('scroll', updateActiveTocLink);
    updateActiveTocLink();
  });
</script>
