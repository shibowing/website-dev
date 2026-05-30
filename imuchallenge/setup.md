---
title: IMU Challenge Setup
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/setup/
---

# Setup

## Quick Start (Draft)

<div class="imu-card">
<strong>Step 1:</strong> Register your team (form/link coming soon).
</div>

<div class="imu-card">
<strong>Step 2:</strong> Download train/val splits from the Data page.
</div>

<div class="imu-card">
<strong>Step 3:</strong> Run baseline scripts and verify local metrics.
</div>

<div class="imu-card">
<strong>Step 4:</strong> Submit prediction files to the evaluation server.
</div>

## Recommended Workflow

1. Start from a known baseline.
2. Validate per platform first, then test cross-platform transfer.
3. Track both aggregate and per-platform failure modes.
4. Freeze your final model and produce reproducible inference logs.

## System Requirements (Preliminary)

- Linux or macOS development environment
- Python + PyTorch toolchain
- GPU recommended for training; CPU acceptable for evaluation tooling

## Coming Soon

- Official starter kit repository
- Detailed data schema and calibration notes
- Submission portal instructions
