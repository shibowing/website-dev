---
title: IMU Odometry Challenge Data
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/data/
---

<h1 class="imu-page-title">{% include imu-bot.html %}Data</h1>

## Downloads

<ul class="imu-link-list">
  <li><a href="https://huggingface.co/datasets/Tartan-IMU/IROS-Tartan-IMU-Challenge" target="_blank" rel="noopener">IROS Tartan IMU Challenge Dataset (all platforms)</a></li>
</ul>

## Dataset Schema

Each trajectory is a `.npz` file organized as `{split}/{platform}/{platform}_{split}_{i}.npz`. The task is to predict the mean body-frame velocity `(v_x, v_y, v_z)` in m/s for each 1.0 s window (200 samples @ 200 Hz) of IMU data.

<table class="imu-schema-table">
  <thead>
    <tr><th>Key</th><th>Shape</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>imu</code></td><td><code>(N,&nbsp;6)</code></td><td>6-axis IMU in <strong>body frame, SI units</strong>: columns <code>[acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z]</code>. Accelerometer retains gravity (‖accel‖ ≈ 9.8 m/s² at rest). Gyroscope in rad/s.</td></tr>
    <tr><td><code>ts</code></td><td><code>(N,)</code></td><td>Timestamps in seconds at 200 Hz.</td></tr>
    <tr><td><code>pos</code></td><td><code>(N,&nbsp;3)</code></td><td>Ground-truth position in metres (world frame).</td></tr>
    <tr><td><code>quat</code></td><td><code>(N,&nbsp;4)</code></td><td>Ground-truth orientation as quaternion <code>[x, y, z, w]</code>.</td></tr>
    <tr><td><code>vel_body</code></td><td><code>(N,&nbsp;3)</code></td><td>Body-frame velocity target <code>[v_x, v_y, v_z]</code> in m/s, derived from <code>pos</code>/<code>quat</code>. This is the prediction target.</td></tr>
    <tr><td><code>platform_id</code></td><td>scalar</td><td>Platform label: <code>0</code>=car, <code>1</code>=dog (quadruped), <code>2</code>=drone, <code>3</code>=human (handheld).</td></tr>
    <tr><td><code>fs</code></td><td>scalar</td><td>Sample rate — always <code>200</code> Hz.</td></tr>
  </tbody>
</table>

Window indices and per-window targets are in `index/`: `train_windows.csv` / `val_windows.csv` (window_id → trajectory + start sample) and `train_targets.csv` / `val_targets.csv` (window_id → `vx, vy, vz`).

**Primary metric:** macro-averaged velocity RMSE (mean of per-platform RMSEs, so platform size imbalance cannot be gamed).

**Secondary metric:** ATE — organizer integrates per-window velocity with ground-truth orientation over 5 m drift-corrected segments (position RMSE).

Splits are deduplicated at the trajectory level (SHA-256 of raw IMU content); train/val/test share no recording.

## Sensors Used

Recordings across the four platforms come from two IMU models: the **Xsens MTi-100** and the **Epson M-G365**. Expand for full specs.

<details class="imu-sensors-toggle">
<summary>Show IMU sensor specs</summary>

<div class="imu-sensor-grid">
  <div class="imu-sensor-card">
    <div class="imu-sensor-card-header">
      {% include imu-chip-icon.html %}
      <div>
        <span class="imu-sensor-card-name">Xsens MTi-100</span>
        <span class="imu-sensor-card-maker">Movella / Xsens</span>
      </div>
    </div>
    <table class="imu-sensor-specs">
      <tr><td>Gyro range</td><td>&plusmn;450 &deg;/s</td></tr>
      <tr><td>Gyro bias instability</td><td>10 &deg;/h</td></tr>
      <tr><td>Accel range</td><td>&plusmn;20 g</td></tr>
      <tr><td>Accel bias instability</td><td>15 &micro;g</td></tr>
      <tr><td>Output rate</td><td>up to 2 kHz</td></tr>
      <tr><td>Interface</td><td>USB, RS232, RS422, UART</td></tr>
      <tr><td>Dimensions</td><td>57 &times; 41.9 &times; 23.6 mm</td></tr>
      <tr><td>Weight</td><td>55 g</td></tr>
      <tr><td>Operating temp.</td><td>&minus;40 to 85&deg;C</td></tr>
    </table>
    <span class="imu-sensor-card-source">Source: <a href="https://www.xsens.com/hubfs/Downloads/Leaflets/MTi-100.pdf" target="_blank" rel="noopener">Movella MTi-100 datasheet</a> (now EOL, replaced by Xsens Sirius)</span>
  </div>
  <div class="imu-sensor-card">
    <div class="imu-sensor-card-header">
      {% include imu-chip-icon.html %}
      <div>
        <span class="imu-sensor-card-name">Epson M-G365</span>
        <span class="imu-sensor-card-maker">Seiko Epson</span>
      </div>
    </div>
    <table class="imu-sensor-specs">
      <tr><td>Gyro range</td><td>&plusmn;450 &deg;/s</td></tr>
      <tr><td>Gyro bias instability</td><td>1.2 &deg;/h</td></tr>
      <tr><td>Accel range</td><td>&plusmn;4 g (PDC1) / &plusmn;10 g (PDF1)</td></tr>
      <tr><td>Accel bias instability</td><td>14&ndash;16 &micro;g</td></tr>
      <tr><td>Output rate</td><td>up to 2k Sps</td></tr>
      <tr><td>Interface</td><td>SPI, UART</td></tr>
      <tr><td>Dimensions</td><td>24 &times; 24 &times; 10 mm</td></tr>
      <tr><td>Weight</td><td>10 g</td></tr>
      <tr><td>Operating temp.</td><td>&minus;40 to 85&deg;C</td></tr>
    </table>
    <span class="imu-sensor-card-source">Source: <a href="https://www.epsondevice.com/sensing/en/pdf/m-g365pdc1_pdf1_briefsheet_e_rev20230630.pdf" target="_blank" rel="noopener">Epson M-G365PDC1/PDF1 datasheet</a></span>
  </div>
</div>

</details>

## Split Counts

| Platform | Train | Val |
|---|---|---|
| Car | 44 | 12 |
| Quadruped | 36 | 13 |
| Drone | 61 | 17 |
| Handheld | 26 | 7 |
| **Total** | **167** | **49** |

## Data Explorer

All trajectories are sampled at **200 Hz**. Each 1-second window contains exactly 200 IMU samples.

<div class="imu-table-toolbar">
  <div id="imu-row-count">Loading metadata...</div>
</div>

<div class="imu-table-wrap">
  <table class="imu-data-table" id="imu-data-table" data-endpoint="{{ site.baseurl }}/assets/data/imuchallenge_metadata.json">
    <thead>
      <tr>
        <th data-col="platform">platform</th>
        <th data-col="split">split</th>
        <th data-col="traj_id">traj_id</th>
        <th data-col="npz_relpath">npz_relpath</th>
        <th data-col="inferred_source">source</th>
        <th data-col="n_samples">n_samples</th>
        <th data-col="duration_s">duration_s</th>
        <th data-col="file_size_bytes">file_size_bytes</th>
      </tr>
      <tr class="imu-filter-row" id="imu-filter-row"></tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script src="{{ site.baseurl }}/assets/js/imuchallenge-data-explorer.js"></script>
