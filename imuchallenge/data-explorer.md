---
title: Data Explorer
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/data/explorer/
---

<h1 class="imu-page-title">{% include imu-bot.html %}Data Explorer</h1>

<p>Browse every trajectory in the dataset — filter by platform or split, sort any column, and open a live model preview. See the <a href="/imuchallenge/data/">Data page</a> for schema, sensor specs, and split counts.</p>

<p>All trajectories are sampled at <strong>200 Hz</strong>. Each 1-second window contains exactly 200 IMU samples.</p>

<div class="imu-note" style="margin:0.5rem 0 1rem 0;font-size:0.85rem;">
  <strong>Tip:</strong> click any row's <strong>Trajectory file</strong> link to see a live model preview in action.
</div>

<div class="imu-table-toolbar">
  <div id="imu-row-count">Loading metadata...</div>
</div>

<div class="imu-table-wrap">
  <table class="imu-data-table" id="imu-data-table" data-endpoint="{{ site.baseurl }}/assets/data/imuchallenge_metadata.json">
    <thead>
      <tr>
        <th data-col="platform">Platform</th>
        <th data-col="split">Split</th>
        <th data-col="traj_id">Trajectory</th>
        <th data-col="npz_relpath">Trajectory file</th>
        <th data-col="inferred_source">Source</th>
        <th data-col="n_samples">Samples</th>
        <th data-col="duration_s">Duration</th>
        <th data-col="file_size_bytes">File size</th>
      </tr>
      <tr class="imu-filter-row" id="imu-filter-row"></tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script src="{{ site.baseurl }}/assets/js/imuchallenge-data-explorer.js"></script>
