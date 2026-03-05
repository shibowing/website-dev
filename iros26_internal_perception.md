---
title: "IROS'26 Workshop: Beyond Exteroception"
subtitle: "Interoceptive Perception for Resilient Robotics — Sep 27, 2026"
layout: page
show_sidebar: false
hide_footer: true
hero_height: is-medium
hero_image: /img/iccv/iccv2023_background.jpg
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


Modern robots increasingly rely on external sensors—cameras, LiDARs, and radars—as their primary perceptual modality. Yet biological organisms evolved a fundamentally different strategy: they first understand their own body through vestibular and proprioceptive feedback before interpreting the external world. This workshop explores **internal perception**, the use of inertial measurement units (IMUs), joint encoders, force/torque sensors, and other body-mounted proprioceptive sensors, as a primary, not auxiliary, source of perceptual intelligence for resilient robotics.

We argue that robust autonomy demands perception systems that are not only world-facing but also self-aware of their motion, dynamics, and physical state. Topics span learning-based inertial odometry, cross-embodiment proprioceptive motion models, adaptive sensor fusion under degradation, and the emerging role of humanoid robots as testbeds for internal-sensing research. The workshop brings together researchers from state estimation, legged locomotion, inertial navigation, and neuroscience-inspired robotics to define the foundations of this underexplored paradigm. Featuring invited talks, a contributed poster session, a panel discussion, and the inaugural **Learning IMU Odometry Challenge**, this workshop aims to catalyze a community around instinct-like perception for resilient robots.

<br>

## Topics

- Learning-based inertial odometry and navigation
- IMU foundation models and cross-platform generalization
- Proprioceptive state estimation for legged and humanoid robots
- Multi-IMU fusion and automatic spatial-temporal calibration
- Adaptive sensor fusion under environmental degradation
- Self-supervised and bilevel optimization for online IMU adaptation
- Vestibular and proprioceptive inspiration from neuroscience
- Sim-to-real transfer for inertial and proprioceptive models
- Benchmarks and metrics for internal perception robustness
- Contact-rich perception and force-aware state estimation
- Differentiable factor graphs for learning to optimize
- Integration of internal sensing with visual/geometric foundation models

<br>

## Invited Speakers

<hr>
 <table class="customFormat" style="width:100%border-collapse: collapse; border: none;">
  <tr>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/invited_speakers/lucacarlone.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://lucacarlone.mit.edu/">Luca Carlone</a>
      </p>
      <p style="margin-bottom: 3px;">Associate Professor</p>
      <p>Massachusetts Institute of Technology</p>
      <p style="margin-bottom: 3px; font-style: italic;">Certifiable Perception and Robust State Estimation</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://rpg.ifi.uzh.ch/people_scaramuzza.html">Davide Scaramuzza</a>
      </p>
      <p style="margin-bottom: 3px;">Professor of Robotics and Perception</p>
      <p>University of Zurich</p>
      <p style="margin-bottom: 3px; font-style: italic;">Proprioceptive State Estimation for Legged Robots</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/invited_speakers/ayong_kim.jpg" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://ayoungk.github.io/">Ayoung Kim</a>
      </p>
      <p style="margin-bottom: 3px;">Professor</p>
      <p>Seoul National University</p>
      <p style="margin-bottom: 3px; font-style: italic;">Robust Localization in Degraded Environments via Internal Sensing</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://jakobengel.github.io/">Jakob Engel</a>
      </p>
      <p style="margin-bottom: 3px;">Director of Research</p>
      <p>Meta Reality Labs</p>
      <p style="margin-bottom: 3px; font-style: italic;">Egocentric Machine Perception and Spatial AI</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://www.seas.upenn.edu/~gehMDrig/">Daniel Gehrig</a>
      </p>
      <p style="margin-bottom: 3px;">Researcher</p>
      <p>University of Pennsylvania</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">TBD Speaker</p>
      <p style="margin-bottom: 3px;"></p>
      <p>TBD</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">TBD Speaker</p>
      <p style="margin-bottom: 3px;"></p>
      <p>TBD</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">TBD Speaker</p>
      <p style="margin-bottom: 3px;"></p>
      <p>TBD</p>
    </td>
  </tr>
</table>

<br>

## Schedule

<a name="schedule"></a>

 <table class="customFormat" style="width:100%border-collapse: collapse; border: none;">
  <tr>
    <b>
    <th style="width:15%;text-align: center;">Time</th>
    <th style="width:25%;text-align: center;">Speaker</th>
    <th style="width:60%;text-align: center;">Topic</th>
    </b>
  </tr>
  <tr style="height: 50px;">
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">8:30 - 8:40 AM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Shibo Zhao</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Opening Address & Challenge Introduction</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">8:40 - 9:10 AM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Luca Carlone</b></p>
      <p>Massachusetts Institute of Technology</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Certifiable Perception and Robust State Estimation</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">9:10 - 9:40 AM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Davide Scaramuzza</b></p>
      <p>University of Zurich</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Proprioceptive State Estimation for Legged Robots</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">9:40 - 10:10 AM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Ayoung Kim</b></p>
      <p>Seoul National University</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Robust Localization in Degraded Environments via Internal Sensing</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">10:10 - 10:30 AM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Challenge Spotlight</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Top 3 team spotlight talks (5 min presentation + 2 min Q&A each)</p>
    </td>
  </tr>
  <tr style="background-color: #f5f5f5;">
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">10:30 - 11:00 AM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;" colspan="2">
      <p style="margin-bottom: 3px;"><b>Coffee Break</b> — Poster session from challenge teams and contributed papers</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">11:00 - 11:30 AM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Jakob Engel</b></p>
      <p>Meta Reality Labs</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Egocentric Machine Perception and Spatial AI for Grounded 3D Understanding</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">11:30 - 12:00 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>TBD Speaker 1</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">TBD</p>
    </td>
  </tr>
  <tr style="background-color: #f5f5f5;">
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">12:00 - 1:30 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;" colspan="2">
      <p style="margin-bottom: 3px;"><b>Lunch Break</b> — Lunch and networking</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">1:30 - 2:00 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>TBD Speaker 2</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">TBD</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">2:00 - 2:30 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>TBD Speaker 3</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">TBD</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">2:30 - 3:00 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Poster Session</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Contributed abstracts and demos</p>
    </td>
  </tr>
  <tr style="background-color: #f5f5f5;">
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">3:00 - 3:30 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;" colspan="2">
      <p style="margin-bottom: 3px;"><b>Coffee Break</b> — Networking and posters</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">3:30 - 4:00 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>TBD Speaker 4</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">TBD</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">4:00 - 4:30 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Daniel Gehrig</b></p>
      <p>University of Pennsylvania</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">TBD</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">4:30 - 5:00 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Panel Discussion</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Future of Internal Perception</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">5:00 - 5:15 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;"><b>Shibo Zhao</b></p>
    </td>
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">Closing Remarks</p>
    </td>
  </tr>
  <tr style="background-color: #f5f5f5;">
    <td style="text-align: center;vertical-align: middle;">
      <p style="margin-bottom: 3px;">5:15 - 5:45 PM</p>
    </td>
    <td style="text-align: center;vertical-align: middle;" colspan="2">
      <p style="margin-bottom: 3px;"><b>Open Networking</b> — Networking among attendees</p>
    </td>
  </tr>
</table>

<br>

## Challenge

### Learning IMU Odometry Challenge

We will provide large-scale IMU datasets across multiple robot platforms, including quadrupeds, humanoids, UAVs, and UGVs. The challenge will identify robust solutions for learning IMU odometry across diverse motion patterns and investigate network designs that generalize across platforms and behaviors.

Challenge participants are evaluated across four scenarios:
- **Quadruped motion estimation**
- **Humanoid motion estimation**
- **UAV/UGV motion estimation**
- **Cross-robot generalization**

All datasets, evaluation tools, and starter code are open-sourced, and the challenge is open to anyone. Top teams will present spotlight talks during the workshop. A public leaderboard will be available, and participants are invited to submit short papers describing their solutions.

<!-- Challenge links will be added here -->

<br>

## Workshop Organizers

<hr>
 <table class="customFormat" style="width:100%border-collapse: collapse; border: none;">
  <tr>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/team/shibozNew.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://shibowing.github.io/">Shibo Zhao</a>
      </p>
      <p style="margin-bottom: 3px;">Ph.D. Candidate, Robotics Institute</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/iccv_organizers/yuhengqiu.jpeg" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://yuhengqiu.com">Yuheng Qiu</a>
      </p>
      <p style="margin-bottom: 3px;">Ph.D. Student, Mechanical Engineering</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://sifanzhou.github.io/">Sifan Zhou</a>
      </p>
      <p style="margin-bottom: 3px;">Visiting Student, Robotics Institute</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://caomuqing.github.io/">Muqin Cao</a>
      </p>
      <p style="margin-bottom: 3px;">Postdoc, Robotics Institute</p>
      <p>Carnegie Mellon University</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://yuanjunbin.github.io/">Junbin Yuan</a>
      </p>
      <p style="margin-bottom: 3px;">Ph.D. Student, Mechanical Engineering</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://ari-psu.github.io/">Junyi Geng</a>
      </p>
      <p style="margin-bottom: 3px;">Assistant Professor, Aerospace Engineering</p>
      <p>Pennsylvania State University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/iccv_organizers/wenshan_wang.jpg" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://www.ri.cmu.edu/ri-faculty/wenshan-wang/">Wenshan Wang</a>
      </p>
      <p style="margin-bottom: 3px;">Systems Scientist, Robotics Institute</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/invited_speakers/chenwang.jpg" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://chenwang.site/">Chen Wang</a>
      </p>
      <p style="margin-bottom: 3px;">Assistant Professor, CSE</p>
      <p>University at Buffalo</p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/place_holder_01.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://guanyashi.com/">Guanya Shi</a>
      </p>
      <p style="margin-bottom: 3px;">Assistant Professor, Robotics Institute</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/invited_speakers/basti.jpg" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</a>
      </p>
      <p style="margin-bottom: 3px;">Research Professor, Robotics Institute</p>
      <p>Carnegie Mellon University</p>
    </td>
  </tr>
</table>

<br>

## Acknowledgment

This workshop is part of [IROS 2026](https://iros2026.org/). For questions, please contact [shiboz@andrew.cmu.edu](mailto:shiboz@andrew.cmu.edu).
