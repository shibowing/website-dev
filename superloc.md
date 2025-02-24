---
title: SuperLoc
subtitle: The Key to Robust LiDAR-Inertial Localization Lies in Predicting Alignment Risks
layout: page
show_sidebar: false
hide_footer: false
hero_height: is-large
hero_image: img/superloc/superloc_title.gif
---

<script>
    window.onload = function () {
        let p = document.getElementsByClassName("title is-2")[0].parentElement;
        p.style.background = "rgba(10, 10, 10, 0.5)";
        p.style.borderRadius = "20px";
        p.style.padding = "20px";
        p.style.width = "fit-content";
        p.style.margin = "0px";
    }

    let p = document.getElementsByClassName("title is-2")[0].parentElement;
    p.style.background = "rgba(10, 10, 10, 0.5)";
    p.style.borderRadius = "20px";
    p.style.padding = "20px";
    p.style.width = "fit-content";
    p.style.margin = "0px";
</script>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuperLoc</title>
    <style>
        .centered-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .links {
            display: flex;
            justify-content: center;
            gap: 10px;
        }
        .figure-container {
            display: flex;
            justify-content: center;
            width: 100%;
            margin: 20px 0;
        }
        .figure-container img {
            width: 100%;
            height: auto;
            max-width: 800px; /* Adjust this value to make the GIF smaller or larger */
        }
        .video-container {
            width: 100%;
            max-width: 800px; /* Adjust this value to make the video smaller */
            margin: 0 auto;
        }
        .bonus-video h4 {
            text-align: center;
            margin-top: 10px;
            font-size: 1em;
        }
        .video-container video {
            width: 100%;
            height: auto;
        }
        .centered-title {
            text-align: center;
            width: 100%;
        }
        .bonus-videos {
            display: flex;
            justify-content: space-between;
            max-width: 1200px;
            margin: 20px auto;
        }
        .bonus-video {
            width: 48%;
        }
        .bonus-video h3 {
            text-align: center;
            margin-top: 10px;
            font-size: 1.17em;
        }
        .bonus-video video {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 5px;
        }
        .figure-container img {
            width: 90%;
            max-width: 1000px; 
            height: auto;
        }
        .figure-description {
            margin-top: 20px;
            text-align: justify;
            font-style: italic;
            color: #555;
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
        }
        body, html {
            background-color: white;
        }
        .hero.is-light {
            background-color: white;
        }
        .carousel-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            overflow: hidden;
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
            object-fit: contain;
        }
        .item img {
            width: 100%;
            height: auto;
            max-height: 600px;
            object-fit: contain;
        }
        .nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            z-index: 10;
        }
        .nav-button.prev {
            left: 10px;
        }
        .nav-button.next {
            right: 10px;
        }
        .item-description {
            text-align: center;
            margin-top: 1rem;
            padding: 0 1rem;
            font-size: 1.6rem;
            color: #333;
        }
        .columns {
            display: flex;
            flex-wrap: wrap;
            margin: -0.75rem;
        }
        .column {
            flex: 1 1 45%;
            padding: 0.75rem;
        }
        @media screen and (max-width: 768px) {
            .column {
                flex: 1 1 100%;
            }
        }
        .comparison-video {
            width: 100%;
            height: auto;
            max-height: 450px;
            object-fit: contain;
        }
        .drag-bar {
            position: relative;
            width: 100%;
            height: 120px;
            background-color: #f0f0f0;
            margin-top: 20px;
            border-radius: 30px;
            overflow: hidden;
        }
        .preview-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            padding: 0 30px;
        }
        .preview-image {
            width: 200px;
            height: 200px;
            object-fit: contain;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .preview-image:hover, .preview-image.active {
            transform: scale(1.1);
        }
        .drag-handle {
            position: absolute;
            top: 0;
            left: 0;
            width: 33.33%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 30px;
            cursor: grab;
            transition: left 0.3s ease;
        }
        .drag-handle:active {
            cursor: grabbing;
        }
        .preview-wrapper {
        width: 33.33%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        .expandable-section {
            width: 100%;
            margin: 20px 0;
        }

        .expandable-header {
            background-color: #f5f5f5;
            padding: 15px 20px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #e0e0e0;
        }

        .expandable-header:hover {
            background-color: #ebebeb;
        }

        .expandable-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out;
            background-color: white;
            border: 1px solid #e0e0e0;
            border-top: none;
            border-radius: 0 0 8px 8px;
        }

        .expandable-content.active {
            max-height: 10000px;
            padding: 20px;
        }

        .arrow {
            transition: transform 0.3s ease;
        }

        .arrow.active {
            transform: rotate(180deg);
        }

        .math-content {
            overflow-x: auto;
            padding: 15px;
            margin: 10px 0;
            background-color: #f8f9fa;
            border-radius: 4px;
        }

        .image-container {
            text-align: center;
            margin: 20px 0;
        }

        .image-container img {
            max-width: 100%;
            height: auto;
        }

        .image-caption {
            text-align: center;
            font-style: italic;
            color: #666;
            margin-top: 10px;
        }

        .reference-section {
            margin-top: 40px;
            border-top: 2px solid #eee;
            padding-top: 20px;
        }

        .equation {
            display: block;
            text-align: center;
            margin: 15px 0;
        }
        #references {
            counter-reset: ref-counter;
        }
        #references .reference-item {
            position: relative;
            padding-left: 35px;
            margin-bottom: 10px;
        }
        #references .reference-item:before {
            counter-increment: ref-counter;
            content: "[" counter(ref-counter) "]";
            position: absolute;
            left: 0;
            font-weight: bold;
        }
        
    </style>
</head>
<body>
    <div class="centered-content">
        <h1>SuperLoc: The Key to Robust LiDAR-Inertial Localization Lies in Predicting Alignment Risks</h1>
        <p class="authors">
            Shibo Zhao*, Honghao Zhu*, Yuanjun Gao, Beomsoo Kim, Yuheng Qiu, Aaron M. Johnson, Sebastian Scherer
        </p>
        <p class="affiliation">
            *Equal contribution<br>
            Carnegie Mellon University
        </p>
        <p class="affiliation">
            <b>Code will be released in early March</b>
        </p>
        <center>
        <a href="#" class="button is-info"> &nbsp;📄Paper</a >
        &nbsp;
        <a href="https://arxiv.org/abs/2412.02901" class="button is-info"> &nbsp;<img src="/img/logos/arxiv.png" class="small-logo">arXiv</a >
        &nbsp;
        <a href="#" class="button is-info"> &nbsp;<i class="fab fa-github" style="font-size:24px"></i>Code</a >
        &nbsp;
        <a href="https://github.com/adrienzhh/Robustness_Metric" class="button is-info"> &nbsp;<i class="fab fa-github" style="font-size:24px"></i>Robustness Metrics</a >
        &nbsp;
        </center>

    </div>
</body>
<style>
.small-logo {
  width: 16px;
  height: auto;
}
</style>
</html>
<body>

<section class="hero is-light is-small">
    <div class="hero-body">
        <div class="container">
            <div class="carousel-container">
                <div id="results-carousel" class="carousel">
                    <div class="item">
                        <video muted loop playsinline controls>
                            <source src="video/superloc/website_intro3.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <p class="item-description">Predict Alignment Risks✅</p>
                    </div>
                    <div class="item">
                        <video muted loop playsinline controls>
                            <source src="video/superloc/website_intro1.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <p class="item-description">Real World Degraded Environment❓</p>
                    </div>
                    <div class="item">
                        <video muted loop playsinline controls>
                            <source src="video/superloc/website_intro2.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <p class="item-description">ICP Failure under Degeneracy❓</p>
                    </div>
                </div>
            </div>
            <div class="drag-bar">
                <div class="preview-container">
                    <div class="preview-wrapper">
                        <img src="img/superloc/preview3.png" alt="Preview 1" class="preview-image active" data-index="0">
                    </div>
                    <div class="preview-wrapper">
                        <img src="img/superloc/preview1.png" alt="Preview 2" class="preview-image" data-index="1">
                    </div>
                    <div class="preview-wrapper">
                        <img src="img/superloc/preview2.png" alt="Preview 3" class="preview-image" data-index="2">
                    </div>
                </div>
                <div class="drag-handle"></div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#results-carousel');
    const dragBar = document.querySelector('.drag-bar');
    const dragHandle = document.querySelector('.drag-handle');
    const previewImages = document.querySelectorAll('.preview-image');
    const items = carousel.querySelectorAll('.item');
    const videos = carousel.querySelectorAll('video');
    let isDragging = false;
    let startX, startLeft;

    function showItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
        videos[index].play().catch(e => console.error("Error playing video:", e));
        previewImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        dragHandle.style.left = `${index * 33.33}%`;
    }

    dragHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - dragHandle.offsetLeft;
        startLeft = dragHandle.offsetLeft;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        let newLeft = e.clientX - startX;
        newLeft = Math.max(0, Math.min(newLeft, dragBar.offsetWidth - dragHandle.offsetWidth));
        dragHandle.style.left = `${newLeft}px`;
        
        const progress = newLeft / (dragBar.offsetWidth - dragHandle.offsetWidth);
        const index = Math.round(progress * (items.length - 1));
        showItem(index);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    previewImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showItem(index);
        });
    });

    // Initialize
    showItem(0);
});
</script>
</body>

<h1 class="centered-title">Overview Video</h1>
<div>
<br>
    <iframe width="100%" height="400" style="display: block; margin-left: auto; margin-right: auto; width: 50%;"  src="https://www.youtube.com/embed/HqoDL2xiaZA" title="Website - Sensor Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

 <h1 class="centered-title">About SuperLoc</h1>
<div class="about-section">
    <p>Map-based LiDAR localization, while widely used in autonomous systems, faces significant challenges in degraded environments due to lacking distinct geometric features. This paper introduces SuperLoc, a robust LiDAR localization package that addresses key limitations in existing methods. SuperLoc features a novel predictive alignment risk assessment technique, enabling early detection and mitigation of potential failures before optimization (check out Why Predictive Alignment Risk). This approach significantly improves performance in challenging scenarios such as corridors, tunnels, and caves. Unlike existing degeneracy mitigation algorithms that rely on post-optimization analysis and heuristic thresholds, SuperLoc evaluates the localizability of raw sensor measurements. Experimental results demonstrate significant performance improvements over state-of-the-art methods across various degraded environments. Our approach achieves a 49.7% increase in accuracy and exhibits the highest robustness. To facilitate further research, we will release our implementation along with datasets from eight challenging scenarios.</p>
    <div class="figure-container">
        <img src="/img/superloc/first_figure_compress.png" alt="SuperLoc Figure" />
    </div>
    <p class="figure-description">
    SuperLoc is to our knowledge the first open-source LiDAR-inertial localization system that not only predicts alignment
    risks, and estimates the observability of scan, but also can actively incorporate pose priors from other odometry sources
    before failure occurs. The entire process doesn't require predefined heuristic thresholds to detect degeneration and it has
    been evaluated in various challenging environments including caves, long corridors, flat open areas, and staircases.
    </p>
</div>

<div class="expandable-section">
    <div class="expandable-header">
        <h2 style="margin: 0;">Why Predictive Alignment Risk?</h2>
        <span class="arrow">▼</span>
    </div>
    <div class="expandable-content">
        <p>Dealing degeneracy with LiDAR-Inertial localization in SLAM (Simultaneous localization and mapping) community has been an active research topic for more than a decade. The motivation behind such research is to investigate failures in ICP (Iterative Closest Point), the principal algorithm used for LiDAR-Inertial localization. ICP calculates the optimal transformation between two sets of point clouds. As Censi<sup>[1]</sup> concluded, ICP failures occur due to three main reasons:</p>
        <ol>
            <li>Bad initial guess for ICP optimization</li>
            <li>Sensor Noise</li>
            <li><b>Degeneracy</b></li>
        </ol>
        <p>To address the question <b>Why Predict Alignment Risk?</b>, we examine common approaches to detecting and preventing degeneracy in robotics and their limitations. Approaches from previous literature can be best categorized into two methods:</p>
        <ol>
            <li>Detect ICP failures under degeneracy through ICP hessian analysis<sup>[2][4][5]</sup> and use this analysis to constrain ICP pose solving.</li>
            <li>Fuse external sensor sources using pre-defined or ICP covariance<sup>[8]</sup> to prevent failures.</li>
        </ol>
        <p>However, there are two limitations associate with using ICP hessian analysis and covariance-based sensor fusion:</p>
        <ol>
            <li><b>Degeneracy detection using ICP hessian is difficult to generalize across different sensor modalities and environments.</b></li>
            <li><b>Covariance under degeneracy is non-Gaussian.</b></li>
        </ol>
        <p>This article will unfold these limitations in more details. But first, let's revisit how can we obtain ICP covariance and its hessian to detect degeneracy, using Prakhya et al.<sup>[4]</sup> and Tuna et al.<sup>[3]</sup> as reference. </p>
        <h3>ICP Covariance Modeling and Hessian Analysis</h3>
        <p>Let assume z be the measurements and x be the output of an function A that minimizes an objective function J i.e.,</p>
        <div class="equation">
            \[\mathbf{x}=A(\mathbf{z})=\operatorname{argmin}_{\mathbf{X}} J(\mathbf{z}, \mathbf{x}) \tag{1}\]
        </div>
        <p>Then the approximate value of the covariance of \(\mathbf{x}\) in terms of \(A(\mathbf{z})\) will be,</p>
        <div class="equation">
            \[\operatorname{cov}(\mathbf{x})=\operatorname{cov}\left(\left.A(\mathbf{z})\right|_{\mathbf{z}=\mathbf{z}_o}\right) \approx \frac{\partial A}{\partial \mathbf{z}_o} \operatorname{cov}(\mathbf{z}) \frac{\partial A^T}{\partial \mathbf{z}_o}\tag{2}\]
        </div>
        <p>Using the implicit function theorem:</p>
        <div class="equation">
            \[\frac{\partial A}{\partial \mathbf{z}_o}=-\left(\frac{\partial^2 J}{\partial \mathbf{x}^2}\right)^{-1}\left(\frac{\partial^2 J}{\partial \mathbf{z} \partial \mathbf{x}}\right)\tag{3}\]
        </div>
        <p>Rewrite the equation into:</p>
        <div class="equation">
            \[\operatorname{cov}(\mathbf{x})=\left(\frac{\partial^2 J}{\partial \mathbf{x}^2}\right)^{-1}\left(\frac{\partial^2 J}{\partial \mathbf{z} \partial \mathbf{x}}\right) \operatorname{cov}(\mathbf{z})\left(\frac{\partial^2 J}{\partial \mathbf{z} \partial \mathbf{x}}\right)^T\left(\frac{\partial^2 J}{\partial \mathbf{x}^2}\right)^{-1}\tag{4}\]
        </div>
        <p>The objective function for point-to-point ICP is formulated as:</p>
        <div class="equation">
            \[J=\sum_{i=1}^n\left\|\mathbf{R} \mathbf{P}_{\mathbf{i}}+\mathbf{T}-\mathbf{Q}_{\mathbf{i}}\right\|^{\mathbf{2}}\tag{5}\]
        </div>
        <p>where \(\{\mathbf{P}_{\mathbf{i}},\mathbf{Q}_{\mathbf{i}}\}\) are the point cloud correspondences, and \([\mathbf{R}, \mathbf{T}]\) is the homogeneous transformation estimated by ICP. <b>The ICP covariance</b> can be calculated using the above equation, where \(\mathbf{x}=\left[\begin{array}{@{}llllll@{}}x & y & z & r & p & y\end{array}\right]\) and \(\mathbf{z}\) represents \(n\) sets of correspondences \(\{\mathbf{P}_{\mathbf{i}},\mathbf{Q}_{\mathbf{i}}\}\). \(\frac{\partial^2 \mathbf{J}}{\partial \mathbf{x}^2}\) is the <b>ICP hessian matrix \(\mathbf{H} \in \mathbb{R}^{6\times6}\)</b>.</p>
        <p>Apply eigen-decomposition to \(\mathbf{H}\):</p>
        <div class="equation">
            \[\boldsymbol{H}=\boldsymbol{V} \Sigma \boldsymbol{V}\tag{6}\]
        </div>
        <p>where diagonal element of \(\Sigma \in\left\{\operatorname{diag}(\boldsymbol{v}): \boldsymbol{v} \in \mathbb{R}_{\geq 0}^n\right\}\) are eigenvalues and \(\boldsymbol{V} \in \mathbb{R}^{6 \times 6}\) are the eigenvectors in matrix form. The idea of degeneracy detection is to observe the null space of \(\mathbf{H}\). By examining \(\Sigma\), one can identify the <b>least-constrained pose elements of \(\mathbf{x}\)</b> by looking at the lowest eigenvalues.</p>
        <h3>Degeneracy detection using ICP hessian is difficult to generalize</h3>
        <p>The effectiveness of ICP hessian analysis for degeneracy detection varies significantly across different LiDAR sensors and environments. Nubert et al. <sup>[6]</sup> demonstrated this variability through an experiment comparing the lowest eigenvalues from two LiDAR sensors: Velodyne and Ouster, as shown in Fig. 1. Additional validation using the <a href="#dataset">SuperLoc dataset (Cave03 and Floor01)</a> revealed similar variations across different environments, as shown in Fig. 2. These large differences in lowest eigenvalues indicate that eigenvalue-based parameters cannot be over-applied across different sensor modalities or environments, limiting the Hessian’s generalizability. This makes constrained ICP using eigenvalue-based appraoch <sup>[5][6]</sup> less durable.</p>
        <div class="image-container">
            <img src="img/superloc/eigenvalue_sensor.png" alt="Eigenvalue comparison">
            <p class="image-caption">Figure 1: Comparison between different LiDAR sensors (Nubert et al.)</p>
        </div>
        <div class="image-container">
            <img src="img/superloc/eigenvalue_environment3.png" alt="Environment comparison">
            <p class="image-caption">Figure 2: Comparison between different environments: Degeneracy period indicates the most degraded section of each dataset.</p>
        </div>
        <h3>Covariance under degeneracy is non-Gaussian</h3>
        <p>A Gaussian noise model is crucial for performing sensor fusion. As mentioned earlier, sensor fusion with external sources such as visual odometry, GPS, etc. is a common method to prevent degeneracy. Sensor fusion is typically implemented using either Factor Graphs (<a href="https://gtsam.org/">GTSAM</a>)<sup>[7]</sup> or Extended Kalman Filters (EKF). Both approaches solve for pose estimates based on the assumption that all sensor measurements follow a Gaussian noise model. In other words, <b>the covariance matrix for each measurement needs to be non-singular or full rank</b>. In SuperLoc, we use Factor Graphs, which inference Maximum a Posteriori (MAP) estimation with Gaussian noise models into a nonlinear least-squares problem.</p>
        <div class="image-container">
            <img src="img/superloc/factor_graph.png" alt="Factor graph">
            <p class="image-caption">Figure 3: Factor graph for the toy SLAM problem</p>
        </div>
        <div class="equation">
            \[X^{\text {MAP }} =\underset{X}{\operatorname{argmax}} \phi(X) =\underset{X}{\operatorname{argmax}} \prod_i \phi_i\left(X_i\right)\tag{7}\]
        </div>
        <p>Here, \(\phi_i\left(X_i\right)\) are factors, represented by black dot in Fig. 3. Each factor is a function of state variable \(x_i\) and measurement \(z_i\). \(h_i\) is the measurement function that remap state variable \(x_i\) into measurement space.</p>
        <div class="equation">
            \[\phi_i\left(X_i\right) \propto \exp \left\{-\frac{1}{2}\left\|h_i\left(X_i\right)-z_i\right\|_{\Sigma_i}^2\right\}\tag{8}\]
        </div>
        <p>Take negative log of \(\underset{X}{\operatorname{argmax}}\) of Eq. 6, and drop \(\frac{1}{2}\) factor,</p>
        <div class="equation">
            \[X^{\text {MAP }}=\underset{X}{\operatorname{argmin}} \sum_i\left\|h_i\left(X_i\right)-z_i\right\|_{\Sigma_i}^2\tag{9}\]
        </div>
        <p>Rewrite the Mahalanobis norm as some term e:</p>
        <div class="equation">
            \[\|e\|_{\Sigma}^2 \triangleq e^{\top} \Sigma^{-1} e=\left(\Sigma^{-1 / 2} e\right)^{\top}\left(\Sigma^{-1 / 2} e\right)=\left\|\Sigma^{-1 / 2} e\right\|_2^2\tag{10}\]
        </div>
        <p>And with linearization of nonlinear problem,</p>
        <div class="equation">
            \[h_i\left(X_i\right)=h_i\left(X_i^0+\Delta_i\right) \approx h_i\left(X_i^0\right)+H_i \Delta_i\tag{11}\]
        </div>
        <p>where Jacobian \(H_i\) is \(\frac{\partial h_i\left(X_i\right)}{\partial X_i}\), and we can rewrite Eq. 9 into,</p>
        <div class="equation">
            \[\begin{aligned}
            \Delta^* & =\underset{\Delta}{\operatorname{argmin}} \sum_i\left\|h_i\left(X_i^0\right)+H_i \Delta_i-z_i\right\|_{\Sigma_i}^2 \\
            & =\underset{\Delta}{\operatorname{argmin}} \sum_i\left\|H_i \Delta_i-\left\{z_i-h_i\left(X_i^0\right)\right\}\right\|_{\Sigma_i}^2
            \end{aligned}\tag{12}\]
        </div>
        <p>Pre-multiply Jacobian \(H_i\) and prediction error by \(\Sigma^{-1 / 2}\) using Eq. 10,</p>
        <div class="equation">
            \[\begin{aligned}
            A_i & =\Sigma_i^{-1 / 2} H_i \\
            b_i & =\Sigma_i^{-1 / 2}\left(z_i-h_i\left(X_i^0\right)\right)
            \end{aligned}\tag{13}\]
        </div>
        <p>The final standard least-squares problem,</p>
        <div class="equation">
            \[\begin{aligned}
            \Delta^* & =\underset{\Delta}{\operatorname{argmin}} \sum_i\left\|A_i \Delta_i-b_i\right\|_2^2 \\
            & =\underset{\Delta}{\operatorname{argmin}}\|A \Delta-b\|_2^2
            \end{aligned}\tag{14}\]
        </div>
        <p>To calculate Equation 10, one can either use a pre-defined covariance or ICP covariance. However, this covariance becomes non-Gaussian or rank-deficient under degeneracy. Our cave dataset demonstrates this through high condition numbers in the ICP covariance matrix just before localization failures, as shown in Fig. 4. This indicates imminent rank deficiency during degeneracy. Using rank-deficient covariance in factor graph optimization results in unconstrained pose estimates along the degenerate direction, as shown in Fig. 5. Therefore, maintaining a well-ranked ICP covariance is crucial for optimal sensor fusion.</p>
        <div class="image-container">
            <img src="img/superloc/condition_number.png" alt="Condition number">
            <p class="image-caption">Figure 4: Large conditional number is present when degeneracy happened</p>
        </div>
        <div class="image-container">
            <img src="img/superloc/cost_function.png" alt="Cost function">
            <p class="image-caption">Figure 5: Visual representation of factor graph objective function: The red arrow indicates an unconstrained direction in the solution space for rank-deficient cases.</p>
        </div>
        <h3>Conclusion</h3>
        <p>We have examined key limitations in using ICP hessian its covariance for degeneracy detection and prevention in LiDAR-inertial localization. First, we demonstrated that eigenvalue-based degeneracy detection lacks generalizability across different sensor modalities and environments, as evidenced by significantly varying eigenvalue patterns between different LiDAR sensors and testing environments. Second, we showed that ICP covariance becomes non-Gaussian under degeneracy, leading to unconstrained solutions in factor graph optimization. For our <b>Predict Alignment Risk</b>, we first detect degeneracy at front end rather then during ICP. Our method analyzes the geometric contribution of pointcloud features and quantify a scale between [0, 1], making it more applicable to different cases compared to eigenvalues. Next, we use this risk to formulate full rank covariance to allow sensor fusion with other sensors using our <b>Active Sensor Fusion</b>. This makes our Predict Alignment Risk more robust and reliable compare to ICP analysis approach.</p>
        <div class="reference-section">
            <h4>References</h4>
            <div id="references">
                <div class="reference-item">
                    A. Censi, "An accurate closed-form estimate of icp's covariance", in Proceedings 2007 IEEE international conference on robotics and automation
                </div>
                <div class="reference-item">
                    J. Zhang, M. Kaess, and S. Singh, "On degeneracy of optimization-based state estimation problems", in 2016 IEEE International Conference on Robotics and Automation (ICRA)
                </div>
                <div class="reference-item">
                    S. M. Prakhya, L. Bingbing, Y. Rui and W. Lin, "A closed-form estimate of 3D ICP covariance", 2015 14th IAPR International Conference on Machine Vision Applications (MVA), Tokyo, Japan
                </div>
                <div class="reference-item">
                    Tuna, T., Nubert, J., Nava, Y., Khattak, S., & Hutter, M. (2022). "X-ICP: Localizability-Aware LiDAR Registration for Robust Localization in Extreme Environments", arXiv preprint arXiv:2211.16335
                </div>
                <div class="reference-item">
                    W. Talbot et al., "Principled ICP Covariance Modelling in Perceptually Degraded Environments for the EELS Mission Concept," 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Detroit, MI, USA
                </div>
                <div class="reference-item">
                    J. Nubert, E. Walther, S. Khattak and M. Hutter, "Learning-based Localizability Estimation for Robust LiDAR Localization," 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Kyoto, Japan, 2022
                </div>
                <div class="reference-item">
                    M. Kaess, H. Johannsson, R. Roberts, V. Ila, J. Leonard and F. Dellaert, "iSAM2: Incremental smoothing and mapping with fluid relinearization and incremental variable reordering," 2011 IEEE International Conference on Robotics and Automation, Shanghai, China, 2011
                </div>
                <div class="reference-item">
                    W. Xu and F. Zhang, "FAST-LIO: A Fast, Robust LiDAR-Inertial Odometry Package by Tightly-Coupled Iterated Kalman Filter," in IEEE Robotics and Automation Letters, vol. 6, no. 2, pp. 3317-3324, April 2021
                </div>
            </div>   
        </div>
    </div>
</div>


<h1>Cave</h1>
<div class="about-section">
</div>
<div class="bonus-videos">
    <div class="bonus-video">
        <video class="lazy-video" data-src="./video/superloc/cave_website1.mp4" muted loop playsinline controls>
        </video>
    </div>
    <div class="bonus-video">
        <video class="lazy-video" data-src="./video/superloc/cave_comparsion_website.mp4" muted loop playsinline controls>
        </video>
    </div>
</div>

<h1>Multi-floor</h1>
<div class="about-section">
</div>
<div class="bonus-videos">
    <div class="bonus-video">
        <video class="lazy-video" data-src="./video/superloc/multi_floor_website1.mp4" muted loop playsinline controls>
        </video>
    </div>
    <div class="bonus-video">
        <video class="lazy-video" data-src="./video/superloc/multi_floor_comparsion_wesbite.mp4" muted loop playsinline controls>
        </video>
    </div>
</div>


<h1>Long Corridor</h1>
<div class="about-section">
</div>
<div class="bonus-videos">
    <div class="bonus-video">
        <video class="lazy-video" data-src="./video/superloc/long_corridor_website1.mp4" muted loop playsinline controls>
        </video>
    </div>
    <div class="bonus-video">
        <video class="lazy-video" data-src="./video/superloc/long_corridor_comparsion_website.mp4" muted loop playsinline controls>
        </video>
    </div>
</div>

<h1 class="centered-title">Comparison with other methods</h1>
<div class="about-section">
</div>
<div class="carousel-container">
    <div id="comparison-carousel" class="carousel">
        <div class="item">
            <video class="comparison-video" muted loop playsinline controls>
                <source src="./video/superloc/cave_failure_website.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="item-description">Cave</p>
        </div>
        <div class="item">
            <video class="comparison-video" muted loop playsinline controls>
                <source src="./video/superloc/multi_floor_failure_website.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="item-description">Multi-Floor</p>
        </div>
        <div class="item">
            <video class="comparison-video" muted loop playsinline controls>
                <source src="./video/superloc/long_corridor_failure_website.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="item-description">Long Corridor</p>
        </div>
    </div>
    <button class="nav-button prev" id="comparison-prev">&#10094;</button>
    <button class="nav-button next" id="comparison-next">&#10095;</button>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#comparison-carousel');
    const items = carousel.querySelectorAll('.item');
    const prevButton = document.querySelector('#comparison-prev');
    const nextButton = document.querySelector('#comparison-next');
    const videos = carousel.querySelectorAll('video');
    let currentIndex = 0;

    function showItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        videos.forEach(video => {
            video.pause();
        });
        videos[index].play().catch(e => console.error("Error playing video:", e));
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

    videos.forEach(video => {
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    showItem(currentIndex);
});
document.querySelector('.expandable-header').addEventListener('click', function() {
    const content = document.querySelector('.expandable-content');
    const arrow = document.querySelector('.arrow');
    content.classList.toggle('active');
    arrow.classList.toggle('active');
});

if (!window.MathJax) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
    document.head.appendChild(script);
}
</script>

<br>

<h4>To benefit the open community, our localization package also includes following features,</h4>
<div class="about-section">
</div>
<div class="bonus-videos">
    <div class="bonus-video">
        <h3>Robust Initialization</h3>
        <video class="lazy-video" data-src="./video/superloc/cic_robust_initialization_10.mp4" muted loop playsinline controls>
        </video>
    </div>
    <div class="bonus-video">
        <h3>Transition between mapped and unmapped region</h3>
        <video class="lazy-video" data-src="./video/superloc/cic_mapped_unmapped_4.mp4" muted loop playsinline controls>
        </video>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy-video"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    video.target.src = video.target.dataset.src;
                    video.target.load();
                    video.target.play(); // Auto-play when in view
                    video.target.classList.remove("lazy-video");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});
</script>

## Ground Truth Map 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ground Truth Maps</title>
    <style>
        .map-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .map-item {
            width: 48%;
            min-width: 300px;
            margin-bottom: 20px;
        }
        h3 {
            text-align: center;
        }
        @media (max-width: 768px) {
            .map-item {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <h4>To benefit the open community, we release the following ground truth maps for localization:</h4>
    <div class="map-container">
        <div class="map-item">
            <h3><a href="https://hawkins-gt-map.s3.us-east-2.amazonaws.com/hawkins.html" target="_blank">Hawkins</a></h3>
            <iframe src="https://hawkins-gt-map.s3.us-east-2.amazonaws.com/hawkins.html" width="100%" height="600"></iframe>
        </div>
        <div class="map-item">
            <h3><a href="https://laurel-craven-gt-map.s3.us-east-2.amazonaws.com/laurel_craven.html" target="_blank">Laurel Craven</a></h3>
            <iframe src="https://laurel-craven-gt-map.s3.us-east-2.amazonaws.com/laurel_craven.html" width="100%" height="600"></iframe>
        </div>
    </div>
</body>


<h2 id="dataset">Dataset</h2>

All datasets from our paper is released as follow, 

| Name | Source    | Location  | Robot     |Sensor     | Trajectory | Duration  |  Rosbag | Calibration (Extrinsics) | Calibration (Intrinsics) | GT Map | GT Traj. |
|------|-----------|-----------|-----------|-----------|-------------|-----------|-------------|-----------|---------------|--------------|--------------|
|Cave01    |SuperLoc|Laurel Craven|Handheld|RGB,LiDAR,IMU|416|838|[link](https://drive.google.com/file/d/1cyHbmxmJQGuK5UCm_f7SXomr8Gd6GEww/view?usp=sharing)| [Google](https://drive.google.com/file/d/1TzIvJuJ3ulYSOdrXRy9wRm1E2Y5AE7g1/view?usp=sharing) Baidu | [Google](https://drive.google.com/file/d/1XfWfpjMqfPHUO8JNy1u9Ysky6vvTpn8_/view?usp=sharing) Baidu | [link](https://drive.google.com/file/d/1JYSVgunLJj6Fj-MsDoNIDHRDx51YWsQP/view?usp=sharing) | [link](https://drive.google.com/file/d/17JiwUXJ6xZMkL7GSNQg_kV-ZJfKczxak/view?usp=sharing)
|Cave02    |SuperLoc|Laurel Craven|Handheld|RGB,LiDAR,IMU|475|986|[link](https://drive.google.com/file/d/1HwUYboHbCh4_GfyvZYQn25KmA12yiuMR/view?usp=sharing)| [Google](https://drive.google.com/file/d/1TzIvJuJ3ulYSOdrXRy9wRm1E2Y5AE7g1/view?usp=sharing) Baidu | [Google](https://drive.google.com/file/d/1XfWfpjMqfPHUO8JNy1u9Ysky6vvTpn8_/view?usp=sharing) Baidu | [link](https://drive.google.com/file/d/1JYSVgunLJj6Fj-MsDoNIDHRDx51YWsQP/view?usp=sharing) | [link](https://drive.google.com/file/d/1_7D70MVcUbaJqlzN_xlDkguF1qiyZCqF/view?usp=sharing)
|Cave03    |SubT-MRS|Laurel Craven|Handheld|RGB,LiDAR,IMU|490|768|[link](https://drive.google.com/file/d/1cO5fStkj1oKpQojfrF8sji-Pbu8LqxPF/view?usp=drive_link)| [Google](https://drive.google.com/file/d/1TzIvJuJ3ulYSOdrXRy9wRm1E2Y5AE7g1/view?usp=sharing) Baidu | [Google](https://drive.google.com/file/d/1XfWfpjMqfPHUO8JNy1u9Ysky6vvTpn8_/view?usp=sharing) Baidu | [link](https://drive.google.com/file/d/1JYSVgunLJj6Fj-MsDoNIDHRDx51YWsQP/view?usp=sharing) | [link](https://drive.google.com/file/d/1Rgm5JC4Nq2mm8s6tafY5w-LvxLrt1oPG/view?usp=sharing)
|Cave04    |SuperLoc|Laurel Craven|Handheld|RGB,LiDAR,IMU|597|959|[link](https://drive.google.com/file/d/19DXx6mspWBXiEqqZOa34b2bHz7cc1jTN/view?usp=sharing)| [Google](https://drive.google.com/file/d/1TzIvJuJ3ulYSOdrXRy9wRm1E2Y5AE7g1/view?usp=sharing) Baidu | [Google](https://drive.google.com/file/d/1XfWfpjMqfPHUO8JNy1u9Ysky6vvTpn8_/view?usp=sharing) Baidu | [link](https://drive.google.com/file/d/1JYSVgunLJj6Fj-MsDoNIDHRDx51YWsQP/view?usp=sharing) | [link](https://drive.google.com/file/d/11EnNKVYfHJV3P9i0MUrbV4tYqC5z-PSM/view?usp=sharing)
|Corridor01  |SubT-MRS|Hawkins|RC2     |RGB,LiDAR IMU|617|279|[link](https://drive.google.com/file/d/1aIIqPiE10nX3IhidpxKhc4Psq-AMER1X/view?usp=drive_link)| [Google](https://drive.google.com/file/d/13WmYOrqbT6VNkIGL13cRuLiENeanI6oY/view?usp=sharing) Baidu | [Google](https://drive.google.com/file/d/1guy4Sa1jdfOdxmqBIGFiXX-X2qvXQLGa/view?usp=sharing) Baidu |[link](https://drive.google.com/file/d/1EH4NzINNLkHrneIxstrzkY9XTZ1JP5bf/view?usp=sharing) | [link](https://drive.google.com/file/d/1QbQamSktPAzJkf0GduAPTqQlxuxM0DBK/view?usp=sharing)
|Corridor02  |SuperLoc|Hawkins|RC1     |RGB,LiDAR IMU|690|893|[link](https://drive.google.com/file/d/1fbQIjza6zCVZ719VvXfNhAONDZflqGnf/view?usp=sharing)| [Google](https://drive.google.com/file/d/1FzepVzxan_9GjS0Rg_3f1LIjjwm2VZrR/view?usp=sharing) Baidu | [Google](https://drive.google.com/file/d/1gCjmOVcwhm55Rwosel79FMxG_WzvnV8g/view?usp=sharing) Baidu | [link](https://drive.google.com/file/d/1d5vv4kfrTyntZw-82fGeTyih3H7DWxg5/view?usp=sharing) | [link](https://drive.google.com/file/d/1hb3IVu1OqyPZA61kBZG1raGTBcTv_h3H/view?usp=sharing)
|Floor01    |SubT-MRS|Hawkins|SP1|RGB,LiDAR,IMU|270|480|[link](https://drive.google.com/file/d/13QQ8a-dEy56aHg8D0RNW0bfywWz6LKn9/view?usp=drive_link)| [Google](https://drive.google.com/file/d/1FAtf5IkUzNNrwxyqVAV6Vre5Pmvbp8Mj/view?usp=sharing) Baidu | [Google](https://drive.google.com/file/d/1uH4wFmLeQNrIGlsUsO--PQuyEIOSOGvR/view?usp=drive_link) Baidu | [link](https://drive.google.com/file/d/1F46g0wnJVSedTJubFD_Ne1IwgZAGYvsU/view?usp=sharing) | [link](https://drive.google.com/file/d/1T-p9TgDwD_9us7U94cT0guwPNTvx3KkI/view?usp=sharing)
|Floor02 (bonus)    |SuperLoc|Hawkins|SP1|RGB,LiDAR,IMU|410|2190|[link](https://drive.google.com/file/d/1RnlqpHVG1I-BD0T7pxNkKELAGy_Vp0oI/view?usp=sharing)| [Google](https://drive.google.com/file/d/1FAtf5IkUzNNrwxyqVAV6Vre5Pmvbp8Mj/view?usp=sharing) Baidu | [Google](https://drive.google.com/file/d/1uH4wFmLeQNrIGlsUsO--PQuyEIOSOGvR/view?usp=drive_link) Baidu | [link](https://drive.google.com/file/d/1F46g0wnJVSedTJubFD_Ne1IwgZAGYvsU/view?usp=sharing) | link

We also provide initialization poses for each dataset to support localization modules that allows initial pose configuration. <b>You can find corresponding initial pose config for each dataset [here](https://drive.google.com/drive/folders/1WZsyEYyU-_8ps1CUqRq3YO7IaARMdGNm?usp=sharing)</b>. 

<b>Ground truth trajecotry</b> follows [TUM](https://github.com/MichaelGrupp/evo/wiki/Formats) format, 
<pre><code>timestamp x y z q_x q_y q_z q_w</code></pre>

## Acknowledgments

The authors would like to express sincere thanks to [Guofei Chen](https://gfchen01.cc/) for helping us collect the dataset. The authors would like to thank Professor [Ji Zhang](https://frc.ri.cmu.edu/~zhangji/) for letting us borrow the Diablo platform and offering constructive advice.

## Citation

Zhao & Zhu, et al. "SuperLoc: The Key to Robust LiDAR-Inertial Localization Lies in Predicting Alignment Risks." 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025. [Paper](https://arxiv.org/abs/2412.02901)
```
@inproceedings{zhao2025superloc,
  title = {SuperLoc: The Key to Robust LiDAR-Inertial Localization Lies in Predicting Alignment Risks},
  author = {Zhao, Shibo and Zhu, Honghao and Gao, Yuanjun and Kim, Beomsoo and Qiu, Yuheng and Johnson, Aaron M. and Scherer, Sebastian},
  year = {2025},
  booktitle = {2025 IEEE International Conference on Robotics and Automation (ICRA)},
  url = {https://arxiv.org/abs/2412.02901}
}
```
Zhao, et al. "SubT-MRS Dataset: Pushing SLAM Towards All-weather Environments." 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR). IEEE, 2024. [Paper](https://arxiv.org/abs/2307.07607)

```
@inproceedings{zhao2024subt-mrs,
  title = {SubT-MRS Dataset: Pushing SLAM Towards All-weather Environments},
  author = {Zhao, Shibo and Gao, Yuanjun and Wu, Tianhao and Singh, Damanpreet and Jiang, Rushan and Sun, Haoxiang and Sarawata, Mansi and Whittaker, Warren C and Higgins, Ian and Su, Shaoshu and Du, Yi and Xu, Can and Keller, John and Karhade, Jay and Nogueira, Lucas and Saha, Sourojit and Qiu, Yuheng and Zhang, Ji and Wang, Wenshan and Wang, Chen and Scherer, Sebastian},
  year = {2024},
  booktitle = {IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  doi = {10.1109/CVPR52733.2024.02137},
  url = {https://superodometry.com/datasets},
  video = {https://youtu.be/mkN72Lv8S7A}
}
```

## Contacts

If you have any question or want to contribute this work, please feel free to send email to Shibo Zhao (shiboz@andrew.cmu.edu).  Thank you! :)