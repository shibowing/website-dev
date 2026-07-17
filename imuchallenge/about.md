---
title: IMU Odometry Challenge About
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/about/
---

<h1 class="imu-page-title">{% include imu-bot.html %}About</h1>

The IMU Odometry Challenge — run on Kaggle as the [**TartanIMU Challenge: Multi-Platform Inertial Odometry**](https://www.kaggle.com/competitions/tartanimu-iros2026){:target="_blank" rel="noopener"} — is hosted by **CMU AirLab**, with organization led by the TartanIMU and Super Odometry contributors.

The challenge is the official benchmark of the [IROS 2026 Workshop: "Beyond Exteroception: Interoceptive Perception for Resilient Robotics"](/interoception/) (Sept 27 – Oct 1, 2026, Pittsburgh). Top entries will be invited to present their methods at the workshop. The competition does not award a cash prize — it's scored on Kudos rather than points or medals.

## Motivation

Learning-based inertial methods have shown strong progress, but almost always on a single platform, typically a pedestrian carrying a phone. Whether one inertial-perception method can generalize across embodiments with completely different dynamics, frequency content, and motion priors is still an open question.

**The twist that defines this challenge: you must submit one unified model that handles all four platforms at once.** The test set is anonymized — no platform label, no platform-revealing trajectory ids — so per-platform experts switched at inference time are not an option. This is a cross-embodiment generalization benchmark, not four separate regressions.

This challenge is designed to provide:

- A common benchmark for cross-platform, single-model inertial odometry
- Shared train/val resources (with platform labels) and an anonymized, platform-blind test evaluation
- A transparent evaluation path for comparing new methods

## Technical Context

This challenge is aligned with the Tartan IMU direction:

- Large-scale multi-platform IMU pretraining
- Efficient adaptation to unseen domains
- Online adaptation for deployment-time robustness

The benchmark is intended to surface concrete modeling, adaptation, and evaluation questions that can feed into the workshop discussion around robot self-sensing and robustness beyond exteroceptive perception alone.

## Organizing Team

Challenge organization is coordinated by **CMU AirLab**, with benchmark, dataset, and baseline development led by **TartanIMU** and **Super Odometry** contributors. The effort brings together researchers from **Carnegie Mellon University** and **Amazon FAR**.

## Contact

For questions, reach out to the CMU AirLab organizers via the challenge registration page.
