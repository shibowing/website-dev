---
title: IMU Odometry Challenge
subtitle: Cross-Platform Inertial Positioning Benchmark
layout: page
show_sidebar: false
hide_footer: false
hide_hero: false
hero_height: is-medium
hero_image: /img/datasets/dataset_video_short.gif
hero_link: /imuchallenge/setup/
hero_link_text: GET STARTED
hero_link2: /imuchallenge/data/
hero_link_text2: DATASET
hero_announcement_text: "Held in conjunction with the \"Beyond Exteroception: Interoceptive Perception for Resilient Robotics\" Workshop at IROS 2026"
hero_announcement_link: /interoception/
hero_announcement_link_text: VIEW WORKSHOP
permalink: /imuchallenge/
---

## What This Challenge Is

The IMU Odometry Challenge is a CMU AirLab competition and benchmark for neural inertial odometry.

Participants train and evaluate models on shared train/validation splits and are ranked on held-out test sets. The benchmark is motivated by the Tartan IMU direction: large-scale pretraining, efficient adaptation, and robust generalization across platforms.

This challenge is held in conjunction with the [IROS'26 Workshop: "Beyond Exteroception: Interoceptive Perception for Resilient Robotics"](/interoception/).

## Intro Video: Learning IMU Odometry

<video controls preload="metadata" style="display:block; width:100%; border-radius:12px; border:1px solid #d8ebf9; margin:0 0 1rem 0;">
  <source src="/img/science_robotics/learning_imu_odometry_intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<div class="imu-note">
All official dataset packages, download links, and the live metadata explorer are published on <a href="/imuchallenge/data/"><strong>/imuchallenge/data</strong></a>.
</div>

## Challenge Goal

Build IMU models that improve cross-platform performance and beat current state-of-the-art multi-platform performance under a common benchmark protocol, while surfacing research questions for the workshop discussion on interoceptive robot perception.

## Benchmark Structure

<div class="imu-card"><strong>Train:</strong> development data for model fitting and ablation.</div>
<div class="imu-card"><strong>Validation:</strong> public split for model selection and error analysis.</div>
<div class="imu-card"><strong>Test:</strong> held-out benchmark split for official ranking.</div>

## Start Here

- [Setup](/imuchallenge/setup/)
- [Platforms](/imuchallenge/platforms/)
- [Data](/imuchallenge/data/)
- [Announcements](/imuchallenge/announcements/)
- [About](/imuchallenge/about/)

## BibTeX

```bibtex
@inproceedings{zhao2025tartanimu,
  title={Tartan IMU: A Light Foundation Model for Inertial Positioning in Robotics},
  author={Zhao, Shibo and Yagnyatinskiy, Maxim and others},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2025},
  url={https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_Positioning_in_CVPR_2025_paper.pdf}
}
```

```bibtex
@misc{imuchallenge2026,
  title={IMU Odometry Challenge: Cross-Platform Inertial Positioning Benchmark},
  author={CMU AirLab and Super Odometry Group},
  year={2026},
  howpublished={\url{https://superodometry.com/imuchallenge}},
  note={Dataset and benchmark challenge page}
}
```
