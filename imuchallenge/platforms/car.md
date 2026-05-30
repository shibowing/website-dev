---
title: IMU Challenge Platform - Car
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/platforms/car/
---

# Car Track

## Example Data Clip

<div class="imu-video-placeholder">CAR VIDEO PLACEHOLDER</div>

## Scope

Car-platform inertial odometry and motion estimation under realistic driving patterns.

## IMU Sensor Notes (Draft)

<div class="imu-card">
<strong>Sensor Type:</strong> onboard MEMS IMU (accelerometer + gyroscope)
<br><strong>Expected Fields:</strong> timestamp, accel xyz, gyro xyz
<br><strong>Typical Rates:</strong> high-rate IMU stream synchronized with trajectory timestamps
</div>

## Focus Areas

- Straight-line and turning stability
- Stop-and-go behavior
- Bias and scale robustness over long horizons
