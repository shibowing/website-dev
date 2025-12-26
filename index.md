---
title: "Super Odometry"
subtitle: "Resilient Odometry via Hierarchical Adaptation"
layout: page
show_sidebar: false
hide_hero: false
hide_footer: false
hero_height: is-large
hero_image: img/super_odometry/superodom_video.gif
hero_link: https://github.com/superxslam/SuperOdom
hero_link_text: See Our Code
---

<!-- Additional fonts and styles (loaded after theme's default styles) -->
<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<!-- CSS for VIRAL-style layout -->
<style>
  body {
    font-family: 'Google Sans', 'Noto Sans', sans-serif;
  }
  
  /* Updated top hero breakout - ONLY for the background image hero */
  .hero[style*="background-image"] {
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
  }
  
  /* Reset general hero class so it doesn't break layout for non-top-heros */
  .hero:not([style*="background-image"]) {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 1.5rem 0 !important;
  }
  
  /* Hero height constraints for the top hero */
  .hero.is-large[style*="background-image"] {
    height: auto !important;
    min-height: 400px !important;
    max-height: 70vh !important;
  }
  
  /* If the screen is very narrow (mobile), use a taller ratio for top hero */
  @media (max-width: 768px) {
    .hero[style*="background-image"] {
      aspect-ratio: 16 / 9;
    }
  }
  
  /* Ensure the container inside the top hero is also full width */
  .hero[style*="background-image"] .hero-body,
  .hero[style*="background-image"] .container {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
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

  /* --- ADJUST HERO TEXT POSITION HERE --- */
  .hero .hero-body {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    /* Increase this to move text DOWNWARDS */
    padding-top: 8rem !important; 
  }

  .hero .container {
    text-align: left !important;
    /* Increase this to move text to the RIGHT */
    padding-left: 15% !important; 
    max-width: 100% !important;
    width: 100% !important;
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
    color: #76b900;
    font-weight: 700;
    position: relative;
    padding-left: 12px;
  }
  
  .toc a.active::before {
    content: "|";
    position: absolute;
    left: 0;
    color: #76b900;
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

<!-- Main Content Section -->
<section class="section title-section">
  <!-- Table of Contents -->
  <div class="toc">
    <h3>Content</h3>
    <hr>
    <ul>
     <li><a href="#news">News</a></li>
      <li><a href="#summary-video">Summary</a></li>
      <li><a href="#abstract">Motivation</a></li>
      <li><a href="#method">Method</a></li>
      <li><a href="#highlights">Highlights</a></li>
      <li><a href="#results">Experiment Result</a></li>
      <li><a href="#limitations">Limitations & Future Work</a></li>
      <li><a href="#generalization">Acknowledgement</a></li>
      <li><a href="#bibtex">Citation</a></li>
    </ul>
  </div>

  <div class="container">
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <h1 class="title is-1 publication-title" id="main-title"><span style="color:rgb(105, 204, 0);">SUPER ODOMETRY</span>: Resilient Odometry <br> via Hierarchical Adaptation</h1>

        <div class="is-size-4 publication-authors" style="margin-top: 1.5rem; margin-bottom: 0.5rem;">
          <span class="author-block" style="font-size: 95%;">
            <a href="https://shibowing.github.io">Shibo Zhao</a><sup>1</sup>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/StiphyJay">Sifan Zhou</a><sup>1</sup>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.ri.cmu.edu/ri-people/yuchen-zhang/">Yuchen Zhang</a><sup>1</sup>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://frc.ri.cmu.edu/~zhangji/">Ji Zhang</a><sup>1</sup>
            <br>
            <a href="https://sairlab.org/chenw/">Chen Wang</a><sup>2</sup>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.ri.cmu.edu/ri-faculty/wenshan-wang/">Wenshan Wang</a><sup>1</sup>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</a><sup>1</sup>
          </span>
    </div>

        <div class="is-size-5 publication-authors">
          <span class="author-block"><sup>1</sup>Carnegie Mellon University;&nbsp;&nbsp;</span>
          <span class="author-block"><sup>2</sup>University at Buffalo</span>
    </div>

        <div class="column has-text-centered">
    <div class="publication-links">
            <span class="link-block">
              <a href="https://www.science.org/stoken/author-tokens/ST-3125/full" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon">
                  <i class="fas fa-file-pdf"></i>
                </span>
                <span>PDF</span>
              </a>
            </span>
            <span class="link-block">
              <a href="https://x.com/ShiboZhaoSLAM" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon">
                  <i class="ai ai-arxiv"></i>
                </span>
                <span>Twitter</span>
              </a>
            </span>
            <span class="link-block">
              <a href="https://youtu.be/xpRZGgGaFRA" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon">
                  <i class="fab fa-youtube"></i>
                </span>
                <span>Video</span>
              </a>
            </span>
            <span class="link-block">
              <a href="https://github.com/superxslam/SuperOdom" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Code Stay Tuned</span>
              </a>
            </span>
            <span class="link-block">
              <a href="#bibtex" class="external-link button is-normal is-rounded is-dark">
                <span class="icon">
                  <i class="fas fa-quote-left"></i>
                </span>
                <span>Citation</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- News Section -->
<section class="section content-section" id="news" style="padding-top: 1rem !important;">
 <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">News</h2>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-10">
        <img src="/img/science_robotics/science_feature_image.png" alt="Science Robotics Feature" style="width: 100%; border-radius:10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);" />
        <p style="font-size: 1.3rem; color: #222; line-height: 1.5; text-align: center; margin-top: 1.5rem;">
          Super Odometry selected as a <strong style="color: #76b900;">top feature article</strong> on <strong>Science Robotics</strong>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Summary Video Section -->
<section class="section content-section" id="summary-video" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Summary</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h3 class="title is-4" style="text-align: center; margin-bottom: 1rem;">Performance Summary</h3>
            <div class="video-container">
              <iframe src="https://www.youtube.com/embed/7yWl22Pa9Ew" allowfullscreen></iframe>
            </div>
          </div>
           <div style="text-align: center; margin-top: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 15px; border-left: 5px solid #76b900;">
          <p style="font-size: 1.2rem; color: #333; font-style: italic; font-weight: 500; line-height: 1.6;">
            "The goal of super odometry is to achieve resilience, adaptation, and generalization across all-degraded environments"
          </p>
        </div>
          <div class="column is-12">
            <h3 class="title is-4" style="text-align: center; margin-top: 2rem; margin-bottom: 1rem;">Method Summary</h3>
  <div class="video-container">
              <iframe src="https://www.youtube.com/embed/xpRZGgGaFRA" allowfullscreen></iframe>
            </div>
          </div>

           <div style="text-align: center; margin-top: 1rem; padding: 2rem; background: #f8f9fa; border-radius: 15px; border-left: 5px solid #76b900;">
          <p style="font-size: 1.2rem; color: #333; font-style: italic; font-weight: 500; line-height: 1.6;">
            "For decades, odometry and SLAM have relied heavily on external sensors such as cameras and LiDAR. Super Odometry rethinks this paradigm by elevating inertial sensing to the core of state estimation, enabling robots to maintain reliable motion awareness even under extreme motion and severe perception degradation".
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Abstract Section -->
<section class="section content-section" id="abstract">
  <div class="container">
    <h2 class="title is-2" id="abstract-title">Motivation</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="content">
          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #76b900; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Why Robotics Need Internal Sense ?</div>
             <div class="columns is-centered">
            <div class="column is-four-fifths">
              <video 
                muted 
                autoplay 
                loop 
                playsinline 
                controls 
                preload="metadata"
                style="border-radius:10px; background-color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 100%;"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <source src="/img/science_robotics/motivation2.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <p style="display:none; color: #cc0000; text-align: center; padding: 1rem;">Video failed to load. Please check your connection or try refreshing the page.</p>
            </div>
          </div>
            <p style="font-size: 1.0rem; font-style: italic; color: #222; line-height: 1.6;">
              When we walk through smoke or darkness, our body still knows where we are. This innate sense of motion, guided by vestibular and inertial perception known as path integration, reveals a profound truth: <span style="color: #000; font-weight: 700;">robust motion tracking begins not with vision, but with the body's internal sensing of movement.</span>
            </p>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Followed by this insight, we believe robotics systems also need a complementary sensing mechanism as "internal sense". Specifically, we developed a learned inertial module that learns robotics internal dynaimics and provides motion prior as fallback solution when external sensors like LiDAR and camera become unreliable. A key design goal behind Super Odometry is to unify resilience, adaptation, and generalization within a single odometry system.
    </p>
  </div>

        </div>
      </div>
    </div>
  </div>
</section>

<!-- Methodology Section -->
<section class="section content-section" id="method">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">Method</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="content">
          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #76b900; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Reciprocal Fusion Strategy</div>
                   <div class="columns is-centered">
            <div class="column is-four-fifths">
              <video 
                muted 
                autoplay 
                loop 
                playsinline 
                controls 
                preload="metadata"
                style="border-radius:10px; background-color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 100%;"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <source src="/img/science_robotics/method2.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <p style="display:none; color: #cc0000; text-align: center; padding: 1rem;">Video failed to load. Please check your connection or try refreshing the page.</p>
            </div>
          </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6;">
            We propose a reciprocal fusion that combines traditional factor graph with the learned inertial module. 
            </p>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              <strong>Nominal Conditions:</strong> The IMU network learns motion patterns from free pose labels generated by a lower-level factor graph.
            </p>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              <strong>Degraded Conditions:</strong> The learned IMU network take over, leveraging captured motion dynamics to maintain reliable state estimation when external perception fails.
            </p>
              
            In this way, robustness becomes adaptive, evolving with the robot’s operating conditions.

          </div>

     
          
          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #76b900; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Hierarchical Adaptation Framework</div>

               <div class="columns is-centered">
            <div class="column is-four-fifths">
              <img src="/img/science_robotics/method1.jpg" alt="Hierarchical Adaptation Framework" style="width: 120%; border-radius:10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" />
            </div>
          </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6;">
              To balance efficiency and robustness, the system uses a multi-level scheme to manage environmental degradation:
            </p>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              <strong>Lower Levels:</strong> Provide rapid, resource-efficient adjustments for mild disturbances.
            </p>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              <strong>Higher Levels:</strong>  Provide more complex and computationally intensive interventions to support state estimation recovery.
            </p>
             <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
            This layered design enables the system to maintain efficiency under nominal conditions and robustness under extreme scenarios to meet the demands of diverse environments.
             </p>
          </div>

          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #76b900; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Heterogeneous Learning-Based Inertial Odometry</div>
            <div class="columns is-centered">
              <div class="column is-four-fifths">
                <video 
                  muted 
                  autoplay 
                  loop 
                  playsinline 
                  controls 
                  preload="metadata"
                  style="border-radius:10px; background-color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 100%;"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                  <source src="/img/science_robotics/learning_imu_odometry_intro.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <p style="display:none; color: #cc0000; text-align: center; padding: 1rem;">Video failed to load. Please check your connection or try refreshing the page.</p>
              </div>
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              The learned inertial module is trained on more than 100 hours of heterogeneous robotic platform data, capturing comprehensive motion dynamics across aerial, wheeled, and legged robots. This enables the system to provide reliable motion priors when external sensors fail. Our IMU model outperforms different specialized IMU model across various robot platforms.

            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Highlights Section -->
<section class="section content-section" id="highlights" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">Highlights</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="content">
          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #76b900; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">13 Types of Degradation</div>
            <div class="columns is-centered">
              <div class="column is-four-fifths">
                <img src="/img/science_robotics/13_degradation.png" alt="13 Types of Degradation" style="width: 100%; border-radius:10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" />
              </div>
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Super Odometry is evaluated under 13 consecutive types of hardware and environmental degradation in a single run including visual degradation, geometric degradation, mixed degradation and complete degradation. For more detail, please refer to <a href="https://www.youtube.com/watch?v=8GMSLLNDnvs" target="_blank" style="color: #76b900; text-decoration: underline;">this video</a>.
            </p>
          </div>

          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #76b900; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Performance Under 13 Degradation</div>
            <div class="columns is-centered">
              <div class="column is-four-fifths">
                <img src="/img/science_robotics/13_degradation_result.png" alt="13 Degradation Results" style="width: 100%; border-radius:10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);" />
              </div>
            </div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              The color-coded trajectory depicts our estimated odometry of a legged robot navigating through more than 13 complex degradation scenarios. Despite these difficulties, the final end-point drift was only 20 cm over a total distance of 2966 m.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




  
<!-- Results Section -->
<section class="section content-section" id="results">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">Experiment Results</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="content">
          <div class="columns is-multiline">
    <div class="column is-6">
      <div class="video-container">
          <iframe src="https://www.youtube.com/embed/8GMSLLNDnvs" allowfullscreen></iframe>
        </div>
        <p class="is-size-6 has-text-centered"><strong>Stress Test:</strong> Evaluation of 13 types of degradation in a single run.</p>
      </div>
      <div class="column is-6">
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/qvNUIT0R_HM" allowfullscreen></iframe>
        </div>
        <p class="is-size-6 has-text-centered"><strong>Generalization: </strong>Robust odometry across diverse conditions with various sensors and robots.</p>
    </div>
    <div class="column is-6">
      <div class="video-container">
          <iframe src="https://www.youtube.com/embed/Wfw755BuXjQ" allowfullscreen></iframe>
        </div>
        <p class="is-size-6 has-text-centered"><strong>Geometry Degradation:</strong> State-direction adaptation in long corridors.</p>
      </div>
      <div class="column is-6">
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/zh3XF7ja43o" allowfullscreen></iframe>
        </div>
        <p class="is-size-6 has-text-centered"><strong>Learning Inertial Network:</strong> Performance of IMU Pretrained Model.</p>
    </div>
    <div class="column is-6">
      <div class="video-container">
          <iframe src="https://www.youtube.com/embed/km-ZMGyVzFA" allowfullscreen></iframe>
      </div>
        <p class="is-size-6 has-text-centered"><strong>Fallback Solution:</strong> Robust Performance in Smoke Scenario</p>
    </div>
    <div class="column is-6">
      <div class="video-container">
          <iframe src="https://www.youtube.com/embed/jNScYUnP-TQ" allowfullscreen></iframe>
        </div>
        <p class="is-size-6 has-text-centered"><strong>Onboard Performance:</strong> Robust Odometry Performance for Exploration Tasks Using Onboard Device</p>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Limitations and Future Work Section -->
<section class="section content-section" id="limitations">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">Limitations & Future Work</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="content">
          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #76b900; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Improving Generalizability of the IMU Model</div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              The learning-based IMU model requires faster adaptation to new robots and environments. Despite generalizing well across platforms, it struggles with unseen domains because of distribution gaps between training and testing data. Incorporating both real-world and simulated IMU data could reduce this gap and improve generalization.
            </p>
          </div>

          <div style="margin: 2rem 0; padding: 2.5rem; background: #fdfdfd; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
            <div style="position: absolute; top: -15px; left: 30px; background: #76b900; color: white; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-family: monospace;">Online Learning & Adaptive Switching</div>
            <p style="font-size: 1.0rem; color: #222; line-height: 1.6; margin-top: 1rem;">
              Better online learning techniques are still required to achieve a balance between overfitting and catastrophic forgetting problems. We also need better strategies to achieve the switch scheme between learning IMU odometry and factor graph optimization. The current solution is a little heuristic, and we hope to convert this hierarchical adaptation into a completely learning-based solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 


<!-- Generalization Section -->
<section class="section content-section" id="generalization">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">Acknowledgement</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="content" style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 15px; border-left: 5px solid #76b900; margin-bottom: 2rem;">
            <h3 class="title is-4" style="color: #333; margin-bottom: 1rem;">Relation of Previous Work</h3>
            <p style="margin-bottom: 0;">
              The current journal version of Super Odometry builds upon the previously released <a href="/superodom_v1#acknowledgments" style="color: #76b900; text-decoration: underline; font-weight: 600;">Super Odometry v1</a> system. Readers are referred to <a href="/superodom_v1#acknowledgments" style="color: #76b900; text-decoration: underline; font-weight: 600;">Super Odometry v1</a> and <a href="/superloc#acknowledgments" style="color: #76b900; text-decoration: underline; font-weight: 600;">SuperLoc</a> for additional background and implementation details.
            </p>
  </div>

          <div style="background: #f8f9fa; padding: 2rem; border-radius: 15px; border-left: 5px solid #76b900; margin-bottom: 2rem;">
            <h3 class="title is-4" style="color: #333; margin-bottom: 1rem;">Manuscript Reviewers</h3>
            <p style="margin-bottom: 0;">
              We thank <strong>Yuheng Qiu</strong>, <strong>Michael Kaess</strong>, <strong>Sudharshan Suresh</strong>, and <strong>Shubham Tulsiani</strong> for their valuable suggestions for the manuscript.
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 15px; border-left: 5px solid #76b900;">
            <h3 class="title is-4" style="color: #333; margin-bottom: 1rem;">Real-World Experiments</h3>
            <p style="margin-bottom: 0;">
              We sincerely appreciate the work of <strong>Honghao Zhu</strong>, <strong>Rushan Jiang</strong>, <strong>Haoxiang Sun</strong>, <strong>Tianhao Wu</strong>, <strong>Yuanjun Gao</strong>, <strong>Damanpreet Singh</strong>, <strong>Lucas Nogueira</strong>, <strong>Guofei Chen</strong>, <strong>Parv Maheshwari</strong>, <strong>Matthew Sivaprakasam</strong>, <strong>Sam Triest</strong>, <strong>Micah Nye</strong>, <strong>Yifei Liu</strong>, <strong>Steve Willits</strong>, <strong>John Keller</strong>, <strong>Jay Karhade</strong>, <strong>Yao He</strong>, <strong>Mukai Yu</strong>, <strong>Andrew Jong</strong>, and <strong>John Rogers</strong> for their help in real-world experiments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- BibTeX Section -->
<section class="section content-section" id="bibtex">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-2" style="text-align:;">Citation</h2>
        <pre style="background: #2d2d2d; color: #f8f8f2; padding: 1.5rem; border-radius: 10px; font-size: 0.9rem; line-height: 1.5; border: 1px solid #111; overflow-x: auto;"><code>
  @article{zhao2025resilient,
  doi = {10.1126/scirobotics.adv1818},
  author = {Shibo Zhao and Sifan Zhou and Yuchen Zhang and Ji Zhang and Chen Wang and Wenshan Wang and Sebastian Scherer},
  title = {Resilient odometry via hierarchical adaptation},
  journal = {Science Robotics},
  volume = {10},
  number = {109},
  pages = {eadv1818},
  year = {2025},
  url = {https://www.science.org/doi/abs/10.1126/scirobotics.adv1818},
  eprint = {https://www.science.org/doi/pdf/10.1126/scirobotics.adv1818}
}


@inproceedings{zhao2021super,
  title={Super odometry: IMU-centric LiDAR-visual-inertial estimator for challenging environments},
  author={Zhao, Shibo and Zhang, Hengrui and Wang, Peng and Nogueira, Lucas and Scherer, Sebastian},
  booktitle={2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages={8729--8736},
  year={2021},
  organization={IEEE}
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

    // Active section highlighting in TOC
    const tocLinks = document.querySelectorAll('.toc a');
    const sections = [];
    
    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const sectionId = href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          sections.push({
            id: sectionId,
            element: section,
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
