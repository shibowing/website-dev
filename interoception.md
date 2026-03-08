---
title: "IROS'26 Workshop: Beyond Exteroception"
subtitle: "Interoceptive Perception for Resilient Robotics — Sep 27, 2026"
layout: page
show_sidebar: false
hide_footer: true
hero_height: is-large
hero_image: /img/IROS_2026_tab/pittsburgh_from_pdf.jpg
---

<!-- Additional fonts and styles -->
<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<style>
  body {
    font-family: 'Google Sans', 'Noto Sans', sans-serif;
  }

  /* Full-width hero banner */
  .hero[style*="background"] {
    width: 100vw !important;
    max-width: 100vw !important;
    margin-left: calc(50% - 50vw) !important;
    margin-right: calc(50% - 50vw) !important;
    padding: 0 !important;
    border-radius: 0 !important;
    overflow: hidden !important;
    background-size: cover !important;
    background-position: center 85% !important;
    background-repeat: no-repeat !important;
    min-height: 400px !important;
    aspect-ratio: 2.5 / 1;
    position: relative !important;
    left: 0 !important;
  }

  .hero:not([style*="background-image"]) {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 1.5rem 0 !important;
  }

  .hero.is-large[style*="background-image"] {
    height: auto !important;
    min-height: 300px !important;
    max-height: 50vh !important;
  }

  @media (max-width: 768px) {
    .hero[style*="background-image"] {
      aspect-ratio: 16 / 9;
    }
  }

  .hero[style*="background-image"] .hero-body,
  .hero[style*="background-image"] .container {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  body, html {
    overflow-x: hidden;
  }

  .layout--page .hero,
  .layout--default .hero {
    margin-top: 0 !important;
    margin-bottom: 2rem !important;
    left: 0 !important;
    right: 0 !important;
  }

  .hero .hero-body {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    padding-top: 8rem !important;
  }

  .hero .container {
    text-align: left !important;
    padding-left: 15% !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  /* Title styling */
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

  @media (max-width: 768px) {
    #main-title {
      font-size: clamp(1.5rem, 8vw, 2.2rem) !important;
      line-height: 1.2 !important;
      letter-spacing: -0.5px !important;
    }
  }

  /* Section styles */
  .title-section,
  .content-section,
  section.section {
    max-width: 1200px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
    padding: 2rem 1rem !important;
  }

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

  .section {
    padding: 1.5rem 1.5rem;
  }

  .section p {
    text-align: justify;
  }

  /* TOC sidebar */
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

  @media (max-width: 1399px) {
    .toc {
      display: none !important;
    }
  }

  /* Card styles */
  .workshop-card {
    background: #fdfdfd;
    border: 1px solid #eee;
    padding: 2.5rem;
    border-radius: 20px;
    margin: 2rem 0;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    position: relative;
  }

  .workshop-card-label {
    position: absolute;
    top: -15px;
    left: 30px;
    background: #76b900;
    color: white;
    padding: 5px 20px;
    border-radius: 20px;
    font-weight: 800;
    font-family: monospace;
  }

  /* Schedule table */
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .schedule-table th {
    background: #1a1a1a;
    color: #fff;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 0.95rem;
    text-align: center;
  }

  .schedule-table td {
    padding: 12px 16px;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
    font-size: 0.95rem;
  }

  .schedule-table tr:hover {
    background-color: #f9f9f9;
  }

  .schedule-table tr.break-row {
    background-color: #f0f4e8;
  }

  .schedule-table tr.break-row:hover {
    background-color: #e8eee0;
  }

  /* Speaker grid */
  .speaker-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    .speaker-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  .speaker-card {
    text-align: center;
  }

  .speaker-card img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .speaker-card .speaker-name {
    font-weight: 700;
    margin-bottom: 2px;
  }

  .speaker-card .speaker-name a {
    color: #333;
    text-decoration: none;
  }

  .speaker-card .speaker-name a:hover {
    color: #76b900;
    text-decoration: underline;
  }

  .speaker-card .speaker-role {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 2px;
  }

  .speaker-card .speaker-affiliation {
    font-size: 0.85rem;
    color: #999;
  }

  .speaker-card .speaker-topic {
    font-size: 0.8rem;
    color: #76b900;
    font-style: italic;
    margin-top: 4px;
  }

  /* Topic list */
  .topic-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    .topic-list {
      grid-template-columns: 1fr;
    }
  }

  .topic-list li {
    padding: 10px 16px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #76b900;
    font-size: 0.95rem;
    color: #333;
  }

  /* Responsive hero body */
  .hero-body {
    padding: 2rem 1rem !important;
  }

  @media (min-width: 769px) {
    .hero-body {
      padding: 3rem 1.5rem !important;
    }
  }
</style>

<!-- Main Title Section -->
<section class="section title-section">
  <!-- Table of Contents -->
  <div class="toc">
    <h3>Content</h3>
    <hr>
    <ul>
      <li><a href="#abstract">Abstract</a></li>
      <li><a href="#content">Content of the Workshop</a></li>
      <li><a href="#program">Program</a></li>
      <li><a href="#organizers">Organizers</a></li>
      <li><a href="#student-organizers">Student Organizers</a></li>
      <li><a href="#attendance">Estimated Attendance</a></li>
      <li><a href="#structure">Structure of the Event</a></li>
      <li><a href="#format">Format</a></li>
    </ul>
  </div>

  <div class="container">
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <h1 class="title is-1 publication-title" id="main-title"><span style="color:#76b900;">Beyond Exteroception</span>: Interoceptive Perception <br>for Resilient Robotics</h1>
        <p style="font-size: 1.3rem; color: #555; margin-bottom: 0.5rem;">IROS 2026 Workshop &mdash; September 27, 2026 &mdash; Pittsburgh, PA</p>
      </div>
    </div>
  </div>
</section>

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

<!-- Content of the Workshop Section -->
<section class="section content-section" id="content" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Content of the Workshop</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          Humans and animals rely on both internal and external perception to understand the world: vision and hearing are complemented by vestibular and proprioceptive feedback that continually informs self-motion and body state. This always-on internal sensing is the foundation of resilience in the face of degradation, ambiguity, motion, and occlusion.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          In robotics, however, decades of progress have prioritized exteroceptive models, while internal perception is often relegated to a secondary signal that stabilizes visual or geometric pipelines. We argue that this imbalance is a core vulnerability: when external sensors degrade due to darkness, dust, smoke, featureless terrain, or dynamic occlusion, the entire state estimation stack can fail catastrophically. Internal perception should be elevated to an important role alongside external sensing if we want robots that remain reliable in the real world.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          Historically, IMU and proprioceptive signals have been challenging to use as primary sources for state estimation because of drift over time and limited generalization in learning-based inertial odometry. These challenges stem from several factors, including insufficient data diversity, limited scale, and model design constraints. The central theme of this workshop is to investigate whether internal sensing (IMU and proprioception) can serve as an independent and robust source of state estimation, and to push the limits of internal perception. This includes developing learning-based inertial models that generalize across motions, platforms, and environments; designing sensor fusion frameworks that adapt to degradation; and understanding the limits and failure modes of internal sensing. We will highlight learning-based IMU odometry, network design, proprioceptive state estimation, and cross-embodiment transfer as key technical pillars.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          The speakers will each share their recent work and perspectives on internal perception from the viewpoints of state estimation, legged locomotion, learning-based inertial navigation, and robust autonomy. Their talks and subsequent discussions will give a concrete picture of the current research landscape and promote new insights and directions for future work. Q&A sessions after each talk as well as a panel discussion at the end of the workshop will allow the audience to engage with speakers and discuss ideas.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          Another key element of this workshop is the <strong>Learning IMU Odometry Challenge</strong>. We will provide large-scale IMU datasets across multiple robot platforms, including quadrupeds, humanoids, UAVs, and UGVs. The challenge will identify robust solutions for learning IMU odometry across diverse motion patterns and investigate network designs that generalize across platforms and behaviors. In particular, the humanoid subset will include paired IMU and proprioceptive data to study accurate root-velocity regression across highly dynamic motions, including forward and backward walking, running, dancing, and large-scale locomotion.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          Challenge participants are evaluated across four scenarios: <strong>quadruped motion estimation</strong>, <strong>humanoid motion estimation</strong>, <strong>UAV/UGV motion estimation</strong>, and <strong>cross-robot generalization</strong>. All datasets, evaluation tools, and starter code are open-sourced, and the challenge is open to anyone. We plan to present the results during this workshop alongside spotlight talks from the top teams. We will also release a public leaderboard and invite participants to submit short papers describing their final solutions. Finally, we will synthesize lessons across different motion types and discuss limitations and future directions for this research area.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          This not only gives top participants—often students—a chance to spotlight their work to a diverse and global workshop audience, but also helps garner interest in the months leading up to the workshop.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          We have prior evidence of strong community interest: our ICCV 2023 SLAM Challenge workshop attracted approximately 120 attendees. To further differentiate this event, the IMU odometry competition will be held asynchronously in the months leading up to the workshop, with results announced and showcased during the workshop program.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          In summary, the workshop will feature eight invited leading researchers presenting their relevant work, spotlight talks and poster presentations from top challenge teams, an interactive poster session for contributed abstracts, and a panel discussion on the future of internal perception. The workshop will conclude with an <strong>open networking session</strong> and the option for attendees to share their profiles in a compiled contact book to encourage connections beyond the workshop.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          Topics of discussion and open questions include but are not limited to the following:
        </p>
        <ul class="topic-list" style="margin-top: 1rem;">
          <li>Learning-based inertial odometry and navigation</li>
          <li>IMU foundation models and cross-platform generalization</li>
          <li>Proprioceptive state estimation for legged and humanoid robots</li>
          <li>Multi-IMU fusion and automatic spatial-temporal calibration</li>
          <li>Adaptive sensor fusion under environmental degradation</li>
          <li>Self-supervised and bilevel optimization for online IMU adaptation</li>
          <li>Vestibular and proprioceptive inspiration from neuroscience</li>
          <li>Sim-to-real transfer for inertial and proprioceptive models</li>
          <li>Benchmarks and metrics for internal perception robustness</li>
          <li>Contact-rich perception and force-aware state estimation</li>
          <li>Differentiable factor graphs for learning to optimize</li>
          <li>Integration of internal sensing with visual/geometric foundation models</li>
        </ul>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          Overall, this workshop will provide a common meeting point for researchers and stakeholders working on internal perception to communicate about how their approaches are shaping the field. In doing so, it will not only provide new ideas and insights for established researchers but also motivate early-career students and researchers to get more involved. This, in turn, will be reflected in the improvement of application areas that internal perception can enable, such as search and rescue, infrastructure inspection, planetary exploration, humanoid locomotion, and industrial automation.
        </p>
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
            <td><strong>Luca Carlone</strong><br><span style="color:#999; font-size:0.85rem;">MIT</span></td>
            <td>Certifiable Perception and Robust State Estimation</td>
          </tr>
          <tr>
            <td>9:10 - 9:40 AM</td>
            <td><strong>Davide Scaramuzza</strong><br><span style="color:#999; font-size:0.85rem;">University of Zurich</span></td>
            <td>Proprioceptive State Estimation for Legged Robots</td>
          </tr>
          <tr>
            <td>9:40 - 10:10 AM</td>
            <td><strong>Carmelo Sferrazza</strong><br><span style="color:#999; font-size:0.85rem;">Amazon FAR</span></td>
            <td>TBD</td>
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
            <td><strong>TBD Speaker 0</strong></td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>11:30 - 12:00 PM</td>
            <td><strong>TBD Speaker 1</strong></td>
            <td>TBD</td>
          </tr>
          <tr class="break-row">
            <td>12:00 - 1:30 PM</td>
            <td colspan="2"><strong>Lunch Break</strong> — Lunch and networking</td>
          </tr>
          <tr>
            <td>1:30 - 2:00 PM</td>
            <td><strong>TBD Speaker 2</strong></td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>2:00 - 2:30 PM</td>
            <td><strong>TBD Speaker 3</strong></td>
            <td>TBD</td>
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
            <td><strong>TBD Speaker 4</strong></td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>4:00 - 4:30 PM</td>
            <td><strong>Daniel Gehrig</strong><br><span style="color:#999; font-size:0.85rem;">University of Pennsylvania</span></td>
            <td>TBD</td>
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
        <div class="speaker-grid">
          <div class="speaker-card">
            <img src="/img/team/shibozNew.png" alt="Shibo Zhao"/>
            <p class="speaker-name"><a href="https://shibowing.github.io/">Shibo Zhao</a></p>
            <p class="speaker-role">Ph.D. Candidate, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
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
            <img src="/img/IROS_2026_tab/Muqing_Cao.jpg" alt="Muqin Cao"/>
            <p class="speaker-name"><a href="https://caomuqing.github.io/">Muqin Cao</a></p>
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
            <img src="/img/invited_speakers/chenwang.jpg" alt="Chen Wang"/>
            <p class="speaker-name"><a href="https://chenwang.site/">Chen Wang</a></p>
            <p class="speaker-role">Assistant Professor, CSE</p>
            <p class="speaker-affiliation">University at Buffalo</p>
          </div>
          <div class="speaker-card">
            <img src="/img/invited_speakers/basti.jpg" alt="Sebastian Scherer"/>
            <p class="speaker-name"><a href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</a></p>
            <p class="speaker-role">Research Professor, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Student Organizers Section -->
<section class="section content-section" id="student-organizers" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Student Organizers</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="speaker-grid">
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/yuheng2024.jpg" alt="Yuheng Qiu"/>
            <p class="speaker-name"><a href="http://yuhengqiu.com/">Yuheng Qiu</a></p>
            <p class="speaker-role">Ph.D. Student</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Sifan Zhou.jpg" alt="Sifan Zhou"/>
            <p class="speaker-name"><a href="https://scholar.google.com/citations?hl=en&user=kSdqoi0AAAAJ">Sifan Zhou</a></p>
            <p class="speaker-role">Ph.D. Student</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/junbin.jpg" alt="Junbin Yuan"/>
            <p class="speaker-name"><a href="https://theairlab.org/team/junbiny/">Junbin Yuan</a></p>
            <p class="speaker-role">Ph.D. Student</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Estimated Attendance Section -->
<section class="section content-section" id="attendance" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Estimated Attendance</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          The workshop would be beneficial to a wide range of people. This includes academic researchers, both students and senior researchers, specializing in state estimation, inertial navigation, legged robotics, and robot learning; industry professionals working on autonomous systems, particularly those deploying robots in GPS-denied or degraded environments; and robotics developers and newcomers interested in the emerging field of internal perception.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          While an audience with a strong background in state estimation, resilient robotics, and humanoid robotics would benefit most, we believe that the presented material will also give the general robotics community a complete picture of current work and inspire them to learn more about this field. The workshop is designed to be self-contained, so no specific background knowledge is assumed. However, it would be advantageous for attendees to know basic sensor fusion, deep learning technologies, and inertial measurement principles. We will provide a suggested reading list and dataset samples on our website.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          Given the strong and growing interest in internal perception (evidenced by recent publications in <em>Science Robotics</em>, CVPR, and ICRA on this topic), and the broad appeal across state estimation, locomotion, and learning communities, we expect the workshop to attract <strong>80–120 in-person attendees</strong>. The Learning IMU Odometry Challenge is expected to attract additional participation from teams worldwide, further increasing attendance.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          The main targeted RAS Technical Committees include <em>Autonomous Ground Vehicles and Intelligent Transportation Systems</em>, <em>Humanoid Robotics</em>, <em>Robot Learning</em>, <em>Cognitive Robotics</em>, <em>Computer and Robot Vision</em>, <em>Machine Learning for Automation</em>, <em>Search and Rescue Robotics</em>, <em>Sensor Fusion</em>, and <em>Mobile Manipulation</em>.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Structure of the Event Section -->
<section class="section content-section" id="structure" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Structure of the Event</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          This workshop will be a one-day workshop. The workshop aims to bring together five distinguished speakers from various universities and industry to share their expertise and insights on internal perception, inertial intelligence, and proprioceptive state estimation for resilient robotics. Additionally, we will present a comprehensive summary of results from our learning IMU Odometry Challenge and highlight the top-performing systems.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          The workshop aims to foster discussion, share insights, and encourage collaborations among attendees from academia, industry, and government research institutions, as well as to identify the key challenges and opportunities in the advancement of internal perception for autonomous robots. To promote active discussion between established experts and early-career researchers, we have put together a diverse Organizing Committee with individuals from academia spanning from early-stage graduate students to senior experts in robotics who will work together to ensure an inclusive workshop that engages participants at varying levels of seniority and one that is welcoming for newcomers. Throughout the workshop presentations and talks, we will have opportunities for all participants to ask questions and engage in discussion with speakers. Each invited talk (20 minutes) is followed by a dedicated 10-minute Q&A, moderated by an organizer to ensure diverse voices are heard. The open panel discussion at the end will further promote open-ended discussion by participants, and we will have prompt questions prepared to use as guidance. Key discussion topics include: <em>Can IMU-centric perception replace visual odometry in specific regimes? What are the fundamental limits of inertial intelligence? How should we benchmark proprioceptive systems across embodiments?</em>
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          By providing opportunities for challenge teams to present their work, we are able to spotlight individuals who may be early-career researchers or students in addition to established senior researchers in the field. The workshop will conclude with an <strong>open networking session</strong> where participants can engage with one another, exchange contacts in a contact book we compile, and chat with speakers and organizers. From community feedback, we know that attendees—especially those in early career stages—value networking opportunities. We hope that setting aside explicit time for this at the end will encourage more interaction among participants. We will also compile an opt-in contact book for attendees that will be shared with other workshop attendees.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          We have designed the workshop to prioritize in-person attendance. As of now, all organizers plan to attend IROS in person, and all speakers will be confirmed for in-person attendance.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Format Section -->
<section class="section content-section" id="format" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Format</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          This workshop will be a one-day workshop. The preferred date is September 27, 2026.
        </p>
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
        const section = document.getElementById(sectionId);
        if (section) {
          sections.push({ id: sectionId, element: section, link: link });
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
            const sectionTop = sections[i].element.getBoundingClientRect().top + window.scrollY;
            if (sectionTop <= scrollPosition) {
              currentSection = sections[i];
              break;
            }
          }
        }
      }

      tocLinks.forEach(link => link.classList.remove('active'));
      if (currentSection) {
        currentSection.link.classList.add('active');
      }
    }

    window.addEventListener('scroll', updateActiveTocLink);
    updateActiveTocLink();
  });
</script>
