---
title: HERO
subtitle: "Hierarchical Adaptation Enables Robust Odometry Towards All-degraded Environments"
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
mathjax: true
---
<style>
  /* HERO page YouTube embeds */
  .publication-video {
    width: 100%;
    max-width: 1200px;   /* bump this up (e.g., 1400px) for larger videos */
    margin: 0 auto;
    aspect-ratio: 16 / 9;
  }
  .publication-video iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
<!-- Include Bulma CSS and other dependencies -->
<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-slider@2.0.4/dist/css/bulma-slider.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<!-- Include JavaScript libraries -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bulma-slider@2.0.4/dist/js/bulma-slider.min.js"></script>

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PYVRSFMDRL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PYVRSFMDRL');
</script>

<section class="hero">
    <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="title is-1 publication-title" style="font-size: 2.5rem;">Hierarchical Adaptation Enables Robust Odometry Towards All-degraded Environments</h1>
          <div class="is-size-5 publication-authors">
            <span class="author-block">
              <a href="https://shibowing.github.io">Shibo Zhao</a><sup>1</sup>,</span>
            <span class="author-block">
              <a href="https://github.com/StiphyJay">Sifan Zhou</a><sup>1</sup>,</span>
            <span class="author-block">
              <a href="https://www.ri.cmu.edu/ri-people/yuchen-zhang/">Yuchen Zhang</a><sup>1</sup>,
            </span>
            <span class="author-block">
              <a href="https://frc.ri.cmu.edu/~zhangji/">Ji Zhang</a><sup>1</sup>,
            </span>
            <span class="author-block">
              <a href="https://sairlab.org/chenw/">Chen Wang</a><sup>2</sup>,
            </span>
            <span class="author-block">
              <a href="https://www.ri.cmu.edu/ri-faculty/wenshan-wang/">Wenshan Wang</a><sup>1</sup>,
            </span>
            <span class="author-block">
              <a href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</a><sup>1</sup>
            </span>
                    </div>

          <div class="is-size-5 publication-authors">
            <span class="author-block"><sup>1</sup>Carnegie Mellon University,</span>
            <span class="author-block"><sup>2</sup>University at Buffalo</span>
        </div>

          <div class="column has-text-centered">
            <div class="publication-links">
              <span class="link-block">
                <a href="https://www.youtube.com/watch?v=qvNUIT0R_HM"
                   class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                      <i class="fab fa-youtube"></i>
                  </span>
                  <span>Video</span>
                </a>
              </span>
              <span class="link-block">
                <a href="https://drive.google.com/file/d/1V-CKhkH2yZUvSrWUlQGQjwiiDlfUKcj4/view?usp=sharing"
                   class="external-link button is-normal is-rounded is-dark">
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
</div>
</section>

<section class="section">
  <div class="container is-max-desktop">
    <!-- Abstract. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
          <p>
            Robust odometry is essential for autonomous systems operating in complex and dynamic environments. Existing odometry systems often struggle with severe sensory degradations and extreme conditions such as smoke, sandstorms, snow, or low light, compromising both safety and functionality. To address these challenges, we present Super Odometry, a sensor fusion framework that dynamically adapts to varying levels of environmental degradation.
          </p>
          <p>
            Organized hierarchically from lower-level to higher-level adaptability, the framework integrates four modules: feature selection, state direction selection, engine selection, and a novel data-driven inertial odometry. The inertial odometry, trained on over 100 hours of heterogeneous robotic platforms, captures comprehensive motion dynamics, providing a reliable fallback when exteroceptive sensors fail. Notably, Super Odometry elevates inertial measurement unit (IMU) to the same significance as camera and LiDAR within our sensor fusion framework, enabling independent inertial odometry to overcome extreme environments.
        </p>
        <p>
            Super Odometry has been rigorously validated across 200 kilometers and 800 operational hours on a fleet of aerial, wheeled, and legged robots, under diverse sensor configurations, environmental conditions, and motion profiles. This work represents a significant advancement toward safe, autonomous navigation in all-degraded environments.
        </p>
        </div>
        </div>
        </div>
    <!--/ Abstract. -->

    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video1: Summary Video of <b>Hierarchical Adaptation Enables Robust Odometry Towards All-degraded Environments</b></h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/Q5or_9Tvwy8?list=PLosI3Br8CWkZlTRC8uIjTPo8onkRgswFe"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
        </div>
        </div>
    <!--/ Paper video. -->

    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video2: Robust odometry across diverse conditions with various sensors and robots</h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/qvNUIT0R_HM?list=PLosI3Br8CWkZlTRC8uIjTPo8onkRgswFe"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
                            </div>
    <!--/ Paper video. -->

    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video3: Evaluation of 13 types of degradation in a single run</h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/8GMSLLNDnvs?list=PLosI3Br8CWkZlTRC8uIjTPo8onkRgswFe"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
    <!--/ Paper video. -->

    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video4: Adaptive State Direction in a Long Corridor Environments</h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/Wfw755BuXjQ?list=PLosI3Br8CWkZlTRC8uIjTPo8onkRgswFe"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
    <!--/ Paper video. -->

    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video5: Performance of IMU Pretrained Model</h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/zh3XF7ja43o?list=PLosI3Br8CWkZlTRC8uIjTPo8onkRgswFe"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
    <!--/ Paper video. -->

    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video6: Robust Performance in Smoke Scenario</h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/km-ZMGyVzFA?list=PLosI3Br8CWkZlTRC8uIjTPo8onkRgswFe"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
    <!--/ Paper video. -->

    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video7: Multi-Robot State Estimation in Challenging Environments</h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/ENqY8wNZ5yw?list=PLosI3Br8CWkZlTRC8uIjTPo8onkRgswFe"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
    <!--/ Paper video. -->

    <!-- Paper video. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Video8: Robust Odometry Performance for Exploration Tasks Using Onboard Device</h2>
        <div class="publication-video">
          <iframe src="https://www.youtube.com/embed/jNScYUnP-TQ?list=PLosI3Br8CWkZlTRC8uIjTPo8onkRgswFe"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
    <!--/ Paper video. -->
                    </div>
</section>

<section class="section">
  <div class="container is-max-desktop">
    <div class="columns is-centered">
      <div class="column is-full-width">
        <h2 class="title is-3">Learning-based IMU Odometry</h2>
        <p>
        Our IMU pre-trained model trained from large datasets and generalized across various robotics Platforms. 
        Qualitative pose comparison shows our method (last column) achieves the highest accuracy against Ground Truth.
        </p>
                    </div>
                </div>

    <div class="columns is-centered" style="display: flex; justify-content: center;">
      <div class="column is-half" style="display: flex; justify-content: center;">
        <video controls preload="metadata" style="max-width: 200%; height: auto; object-fit: contain;">
          <source src="{{ "/video/hero/learning_imu_odometry_comparsion.mp4" | relative_url }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
            </div>
        </div>

    <div class="columns is-centered">
      <div class="column is-full">
        <p>
          Detailed single trajectory comparision. <b>Better to view each video in full screen.</b>
        </p>
                    </div>
                </div>

    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" style="width: 100%;">
        <thead>
            <tr>
          <th></th> <!-- Empty corner cell -->
          <th>Car Expert Model (AI-IMU)</th>
          <th>Dog Expert Model (RNIN-VIO)</th>
          <th>Human Expert Model (TLIO)</th>
          <th>Drone Expert Model (IMO)</th>
          <th>IMU Pretrain Model (Our)</th>
            </tr>
        </thead>
        <tbody>
        <!-- Row 1 with images -->
        <tr>
          <td>
            <img src="{{ "/img/hero/car_robot.png" | relative_url }}" alt="Image 1" style="width: 2500px; height: auto;">
          </td>
          <td>
            <video id="matting-video-1" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/expert_car_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-4" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/dog_car_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-2" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/human_car_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-3" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/drone_car_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-5" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/FIMU_car_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
            </tr>
    
        <!-- Row 2 -->
        <tr>
          <td>
            <img src="{{ "/img/hero/dog_robot.png" | relative_url }}" alt="Image 2" style="width: 3000px; height: auto;">
          </td>
          <td>
            <video id="matting-video-6" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/car_dog_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-7" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/expert_dog_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-8" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/human_dog_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-9" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/drone_dog_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-10" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/FIMU_dog_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
            </tr>
    
        <!-- Row 3 -->
        <tr>
          <td>
            <img src="{{ "/img/hero/human_robot.png" | relative_url }}" alt="Image 3" style="width: 3000px; height: auto;">
          </td>
          <td>
            <video id="matting-video-11" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/car_human_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-12" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/dog_human_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-13" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/expert_human_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-14" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/drone_human_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-15" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/FIMU_human_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
            </tr>
    
        <!-- Row 4 -->
        <tr>
          <td>
            <img src="{{ "/img/hero/drone_robot.png" | relative_url }}" alt="Image 4" style="width: 3000px; height: auto;">
          </td>
          <td>
            <video id="matting-video-16" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/car_drone_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-17" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/dog_drone_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-18" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/human_drone_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-19" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/expert_drone_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
          <td>
            <video id="matting-video-20" controls playsinline preload="metadata" style="width: 100%; height: auto; object-fit: contain;">
              <source src="{{ "/video/hero/FIMU_drone_4K.mp4" | relative_url }}" type="video/mp4">
            </video>
          </td>
            </tr>
        </tbody>
    </table>

    <!-- Animation. -->
    <div class="columns is-centered">
      <div class="column is-full-width">
        <h2 class="title is-3">Online Adaptation of IMU Odometry</h2>
        <p>
          Our learning-based IMU odometry an perform an online adaptation scheme, 
          enabling it to adjust to novel environments continuously in a self-supervised manner with real-time refinement.
          To the best of our knowledge, this is the first IMU-based estimator that demonstrates such a 
          high level of generalization across diverse robot platforms, fast adaptation to unseen environments,
          and real-time predictions with minimal drift.
        </p>
    </div>
</div>

    <div class="columns is-centered" style="display: flex; justify-content: center;">
      <div class="column is-half" style="display: flex; justify-content: center;">
        <img src="{{ "/img/hero/animation.gif" | relative_url }}" alt="GIF 1" style="max-height: 300px; width: auto; object-fit: contain;">
</div>
      <div class="column is-half" style="display: flex; justify-content: center;">
        <img src="{{ "/img/hero/Ate_curveV2.gif" | relative_url }}" alt="GIF 2" style="max-height: 500px; width: auto; object-fit: contain;">
            </div>
        </div>
            </div>
</section>

<section class="section" id="BibTeX">
  <div class="container is-max-desktop content">
    <h2 class="title">BibTeX</h2>
    <pre><code>@article{zhao2024Hero,
  author    = {Shibo Zhao, Sifan Zhou, Yuchen Zhang, Ji Zhang, Chen Wang, Wenshan Wang and Sebastian Scherer},
  title     = {Hierarchical Adaptation Enables Robust Odometry Towards All-degraded Environments},
  year      = {2024},
}</code></pre>
            </div>
</section>

</div> -->