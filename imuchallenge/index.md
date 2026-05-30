---
title: IMU Challenge
subtitle: Cross-Platform Inertial Positioning Benchmark
layout: page
show_sidebar: false
hide_footer: false
hide_hero: false
hero_height: is-medium
hero_image: /img/place_holder_01.png
permalink: /imuchallenge/
---

## What This Challenge Is

The IMU Challenge is a CMU AirLab competition and benchmark for cross-platform inertial positioning.

Participants train and evaluate models on shared train/validation splits and are ranked on held-out test sets. The benchmark is motivated by the Tartan IMU direction: large-scale pretraining, efficient adaptation, and robust generalization across platforms.

## Dataset At A Glance

<div class="imu-metrics">
  <div class="imu-metric"><span class="value">5</span><span class="label">Platform Tracks</span></div>
  <div class="imu-metric"><span class="value">100+ h</span><span class="label">Multi-Platform IMU Data</span></div>
  <div class="imu-metric"><span class="value">3</span><span class="label">Primary Splits (Train/Val/Test)</span></div>
  <div class="imu-metric"><span class="value">1</span><span class="label">Unified Benchmark Hub</span></div>
</div>

<div class="imu-note">
All official dataset packages, download links, and split details are published on <a href="/imuchallenge/data/"><strong>/imuchallenge/data</strong></a>.
</div>

## Challenge Goal

Build IMU models that improve cross-platform robustness and beat current state-of-the-art transfer performance under a common benchmark protocol.

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

## Reference

- Tartan IMU (CVPR 2025): https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_Positioning_in_CVPR_2025_paper.pdf
- TartanIMU project page: https://superodometry.com/tartanimu
