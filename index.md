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
      <li><a href="#abstract">Abstract</a></li>
      <li><a href="#method">The Evolution: Hierarchical Adaptation</a></li>
      <li><a href="#results">Survival in All-Degraded Environments</a></li>
      <li><a href="#generalization">Platform Generalization Matrix</a></li>
      <li><a href="#bibtex">BibTeX</a></li>
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
              <a href="https://arxiv.org/abs/2104.14938" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon">
                  <i class="fas fa-file-pdf"></i>
                </span>
                <span>PDF</span>
              </a>
            </span>
            <span class="link-block">
              <a href="https://arxiv.org/abs/2104.14938" class="external-link button is-normal is-rounded is-dark" target="_blank">
                <span class="icon">
                  <i class="ai ai-arxiv"></i>
                </span>
                <span>ArXiv</span>
              </a>
            </span>
            <span class="link-block">
              <a href="https://www.youtube.com/watch?v=4rnRwhJS714" class="external-link button is-normal is-rounded is-dark" target="_blank">
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
                <span>Code</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Main Teaser Video -->
<section class="section content-section">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-four-fifths">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/4rnRwhJS714" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Abstract Section -->
<section class="section content-section" id="abstract">
  <div class="container">
    <h2 class="title is-2" id="abstract-title">Abstract</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="content has-text-justified">
          <h3 class="title is-4">The Motivation: Human-Inspired "Inner Sense"</h3>
          <p>
            Just as humans use vestibular and proprioceptive feedback to navigate in total darkness (path integration), <strong>Super Odometry</strong> introduces a learned inertial module. This serves as a robotic <strong>"inner sense,"</strong> providing a reliable motion prior when external sensors like LiDAR and cameras are blinded by smoke, fog, or darkness.
          </p>

          <h3 class="title is-4">Reciprocal Fusion Strategy</h3>
          <p>
            Rather than treating sensors as static inputs, Super Odometry employs a reciprocal learning approach:
          </p>
          <ul>
            <li><strong>Nominal Conditions:</strong> Traditional model-based estimators refine the inertial network with high-accuracy pose data, allowing the system to adapt online.</li>
            <li><strong>Degraded Conditions:</strong> The learned IMU network takes over, leveraging captured motion dynamics to maintain estimation when external perception fails.</li>
          </ul>

          <h3 class="title is-4">Hierarchical Adaptation Framework</h3>
          <p>
            To balance efficiency and robustness, the system uses a multi-level scheme to manage environmental stress:
          </p>
          <ul>
            <li><strong>Lower Levels:</strong> Provide rapid, resource-efficient adjustments for mild disturbances.</li>
            <li><strong>Higher Levels:</strong> Trigger complex, computationally intensive interventions for state estimation recovery during severe failure.</li>
          </ul>

          <h3 class="title is-4">Key Value</h3>
          <p>
            This tiered design ensures the robot remains computationally efficient under normal conditions while staying robust under extreme scenarios, allowing it to generalize across diverse aerial, wheeled, and legged platforms.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Methodology Section -->
<section class="section content-section" id="method">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">The Evolution: Hierarchical Adaptation</h2>
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <div class="content has-text-justified">
      <div class="method-card">
        <span class="method-level">L1</span> <strong>Adaptive Feature Selection:</strong> Real-time rejection of degraded Lidar/Visual landmarks using spatial-temporal consistency.
      </div>
      <div class="method-card">
        <span class="method-level">L2</span> <strong>State Direction Adaptation:</strong> Constraining optimization to reliable geometric axes in degenerate environments like long corridors.
      </div>
      <div class="method-card">
        <span class="method-level">L3</span> <strong>Estimation Engine Selection:</strong> Intelligent health-based switching between VIO, LIO, and Wheel-Inertial engines to maintain lock.
      </div>
      <div class="method-card">
        <span class="method-level">L4</span> <strong>Learned IMU Prior:</strong> A data-driven fallback providing robust motion estimates during complete sensor blackout (smoke, darkness).
      </div>
    </div>
  </div>
    </div>
  </div>
</section>

<!-- Results Section -->
<section class="section content-section" id="results">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">Survival in All-Degraded Environments</h2>
  <div class="columns is-multiline">
    <div class="column is-6">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/km-ZMGyVzFA"></iframe>
      </div>
      <p class="is-size-6 has-text-centered"><strong>Obscurants:</strong> Navigating through thick smoke where traditional exteroceptive sensors fail.</p>
    </div>
    <div class="column is-6">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/Wfw755BuXjQ"></iframe>
      </div>
      <p class="is-size-6 has-text-centered"><strong>Geometry:</strong> State-direction adaptation in infinite, featureless corridors.</p>
    </div>
    <div class="column is-6">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/ENqY8wNZ5yw"></iframe>
      </div>
      <p class="is-size-6 has-text-centered"><strong>Multi-Robot:</strong> Collaborative SO2 deployment in diverse DARPA SubT environments.</p>
    </div>
    <div class="column is-6">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/8GMSLLNDnvs"></iframe>
      </div>
      <p class="is-size-6 has-text-centered"><strong>Stress Test:</strong> Evaluating 13 consecutive types of hardware and environmental failure in a single run.</p>
    </div>
  </div>
  </div>
</section>

<!-- Generalization Section -->
<section class="section content-section" id="generalization">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">Platform Generalization Matrix</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
  <p class="has-text-centered" style="margin-bottom: 2rem;">Comparing SO2 against domain-specific experts across heterogeneous robotics platforms.</p>
  <div class="table-container" style="margin-bottom: 4rem;">
    <table class="table is-bordered is-striped is-fullwidth is-hoverable">
      <thead>
        <tr class="is-selected" style="background: #1a1a1a;">
          <th>Robotic Platform</th>
          <th>Domain Expert Model</th>
          <th><strong>Super Odometry 2 (Ours)</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="fas fa-car"></i>&nbsp; Wheeled UGV</td>
          <td>AI-IMU (Relatively Robust)</td>
          <td><span class="has-text-success"><i class="fas fa-check-circle"></i></span> <strong>Robust (High Fidelity)</strong></td>
        </tr>
        <tr>
          <td><i class="fas fa-dog"></i>&nbsp; Legged Robot</td>
          <td>RNIN (Robust in Legged)</td>
          <td><span class="has-text-success"><i class="fas fa-check-circle"></i></span> <strong>Robust (Cross-Domain)</strong></td>
        </tr>
        <tr>
          <td><i class="fas fa-plane"></i>&nbsp; Aerial UAV</td>
          <td>IMO (Robust in Flight)</td>
          <td><span class="has-text-success"><i class="fas fa-check-circle"></i></span> <strong>Robust (High Dynamics)</strong></td>
        </tr>
        <tr>
          <td><i class="fas fa-user"></i>&nbsp; Handheld/Human</td>
          <td>TLIO (Inertial-only)</td>
          <td><span class="has-text-success"><i class="fas fa-check-circle"></i></span> <strong>Robust (General Motion)</strong></td>
        </tr>
      </tbody>
    </table>
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
        <h2 class="title is-2" style="text-align: left;">BibTeX</h2>
  <pre style="background: #2d2d2d; color: #f8f8f2; padding: 1.5rem; border-radius: 10px; font-size: 0.9rem; line-height: 1.5; border: 1px solid #111;"><code>@article{zhao2024Hero,
  author    = {Shibo Zhao, Sifan Zhou, Yuchen Zhang, Ji Zhang, Chen Wang, Wenshan Wang and Sebastian Scherer},
  title     = {Hierarchical Adaptation Enables Robust Odometry Towards All-degraded Environments},
  journal   = {IEEE Transactions on Robotics (Under Review)},
  year      = {2024},
}</code></pre>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="section content-section" id="contact">
  <div class="container">
    <h2 class="title is-2" style="text-align: left;">Stay Updated</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
  <div class="has-text-centered">
    <p>If you want to get the latest updates from Super Odometry, feel free to sign up our mail list!</p>
    <iframe src="https://forms.gle/g9pqfxsUfDuTAQp36" width="100%" height="684" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
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
