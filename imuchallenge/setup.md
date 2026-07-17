---
title: IMU Odometry Challenge Setup
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/setup/
---

<h1 class="imu-page-title">{% include imu-bot.html %}Setup</h1>

## Quick Start

<div class="imu-steps" markdown="1">

<div class="imu-step" markdown="1">
**Register your team.** [Fill out the registration form.](https://forms.gle/oRr4rCNxqTP1U6uS8){:target="_blank" rel="noopener"} Then join the competition on Kaggle: [TartanIMU Challenge: Multi-Platform Inertial Odometry](https://www.kaggle.com/competitions/tartanimu-iros2026){:target="_blank" rel="noopener"}.
</div>

<div class="imu-step" markdown="1">
**Download the train/val splits.** Get the data from the [IROS Tartan IMU Challenge dataset](https://huggingface.co/datasets/Tartan-IMU/IROS-Tartan-IMU-Challenge){:target="_blank" rel="noopener"} on Hugging Face, or from the [Kaggle competition Data tab](https://www.kaggle.com/competitions/tartanimu-iros2026/data){:target="_blank" rel="noopener"} (which also has `index/test_windows.csv` and `sample_submission.csv`).
</div>

<div class="imu-step" markdown="1">
**Clone the baseline repository.** [superxslam/TartanIMU](https://github.com/superxslam/TartanIMU){:target="_blank" rel="noopener"}.

```bash
git clone https://github.com/superxslam/TartanIMU
```
</div>

<div class="imu-step" markdown="1">
**Write a basic config file.** For details on the available fields, see `TartanIMU/config/datasets`. A minimal example you can start from:

<details markdown="1">
<summary><strong>Show example config</strong> (<code>minimal_example_config.yaml</code>)</summary>

```yaml
# =============================================================================
# Minimal Example Configuration for Neural Inertial Tracking
# =============================================================================
#
# This configuration file provides a complete setup for:
# 1. Model inference on pre-trained neural inertial tracking models
# 2. Fine-tuning covariance heads for sensor fusion applications
# 3. Evaluation using the same metrics as the main test.py script
#
# Usage:
#   python minimal_example.py --config config/datasets/minimal_example/minimal_example_config.yaml
# =============================================================================

# =============================================================================
# MODEL ARCHITECTURE PARAMETERS
# =============================================================================
model_param:
  # Input/Output Configuration
  input_dim: 6                    # IMU channels: [acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z]
  output_dim: 3                   # Position output: [x, y, z]

  # LSTM Network Configuration
  lstm_size: 256                  # Hidden size of LSTM layers
  lstm_dropout: 0.0              # Dropout rate for LSTM layers (0.0 for inference)
  lstm_layers: 1                  # Number of LSTM layers
  num_layers: 2                   # Number of ResNet layers
  bidirectional: False            # Whether to use bidirectional LSTM

  # Output Head Configuration
  drop_ratio: 0.5                 # Dropout ratio for output heads
  split_z: True                   # Separate Z-axis prediction (recommended for 3D tracking)

  # ResNet Backbone Configuration
  layer_sizes: [2, 2, 2, 2]       # ResNet layer sizes for feature extraction

  # Time Window Configuration
  past_time: 0.0                  # Past time window (seconds)
  window_time: 1.0                # Current time window (seconds) - main prediction window
  future_time: 0.0                # Future time window (seconds)

  # Transformer Configuration (Advanced - usually not needed)
  use_transformer: False          # Whether to use transformer layers
  embed_dim: 256                  # Embedding dimension for transformer
  num_heads: 8                    # Number of attention heads
  num_blocks: 4                   # Number of transformer blocks

# =============================================================================
# TRAINING CONFIGURATION
# =============================================================================
train:
  # Sequence and Batch Configuration
  seq_len: 10                     # Sequence length for training (frames)
  batch_size: 32                  # Batch size for training
  debug: False
  learning_rate: 0.0001           # Learning rate (1e-4)
  epochs: 50                      # Number of training epochs

  # Hardware and Performance Configuration
  use_multi_gpu: False            # Whether to use multi-GPU training
  use_amp: True                   # Whether to use automatic mixed precision (recommended)

  # Training Strategy Configuration
  add_noise: True                 # Whether to add noise during training
  predict_start: 0                # Prediction start frame
  predict_end: 10                 # Prediction end frame

  # Covariance Training Configuration
  start_cov_epochs: 0             # Epoch to start covariance training (0 = from beginning)

  # Output Configuration
  out_dir: "/result/minimal_example"

  # Scheduler Configuration
  scheduler:
    factor: 0.5                   # Learning rate reduction factor
    patience: 10                  # Number of epochs without improvement before reducing LR
    min_lr: 1e-6                  # Minimum learning rate

# =============================================================================
# VALIDATION CONFIGURATION
# =============================================================================
val:
  batch_size: 32                  # Batch size for validation
  eval_freq: 5                    # Validation frequency (every N epochs)

# =============================================================================
# TEST CONFIGURATION
# =============================================================================
test:
  batch_size: 32                  # Batch size for testing
  out_dir: "/result/minimal_example_test"

  # Evaluation Configuration
  segment_length: 5.0             # Length of trajectory segments for evaluation (meters)
  compute_ate: True               # Whether to compute Absolute Trajectory Error
  compute_rte: True               # Whether to compute Relative Trajectory Error
  save_plots: True                # Whether to save evaluation plots

# =============================================================================
# LOGGING CONFIGURATION
# =============================================================================
logging:
  wandb_project: Neural_Inertial_Tracking_AirLab
  wandb_run_name: minimal_example

# =============================================================================
# DATA AUGMENTATION CONFIGURATION
# =============================================================================
augment:
  # IMU Noise Configuration
  feat_acc_sigma: 0.0001          # Accelerometer noise standard deviation
  feat_gyr_sigma: 0.00001         # Gyroscope noise standard deviation

  # Bias Configuration
  add_bias_noise: False           # Whether to add bias noise
  accel_bias_range: 0.1           # Accelerometer bias range
  gyro_bias_range: 0.002          # Gyroscope bias range

  # Gravity Configuration
  add_gravity_noise: False        # Whether to add gravity noise
  gravity_noise_theta_range: 5    # Gravity noise angle range (degrees)

# =============================================================================
# MODEL CONFIGURATION
# =============================================================================
model:
  model_name: "Foundation_Model"  # Model name for logging and identification
  model_yaml: "/neural_inertial_tracking/config/resnet_lstm_multihead.yaml"
  pred_velocity: True             # Whether to predict velocity (recommended)
  adapter: False                  # Whether to use adapter layers (for domain adaptation)

# =============================================================================
# DATA CONFIGURATION
# =============================================================================
data:
  # Dataset Configuration
  dataset: "AirLab"               # Dataset type (AirLab, KITTI, etc.)

  # Frequency Configuration
  imu_freq: 200.0                 # IMU frequency in Hz
  sample_freq: 40                 # Sampling frequency for training

  # Coordinate System Configuration
  use_local_coord: True           # Use local coordinate system (recommended for IMU)

  # Data Partitioning Configuration
  random_partition: False         # Whether to randomly partition data
  train_rate: 0.7                 # Training data ratio
  valid_rate: 0.15                # Validation data ratio
  test_rate: 0.15                 # Test data ratio
  data_rate: 1.0                  # Data usage ratio (1.0 = use all data)

# =============================================================================
# MOTION TYPE CONFIGURATION
# =============================================================================
motion_types:
  car: 1                          # Car motion type ID
  dog: 2                          # Dog motion type ID
  drone: 3                        # Drone motion type ID (most common)
  human: 4                        # Human motion type ID

# =============================================================================
# FINE-TUNING CONFIGURATION
# =============================================================================
finetune:
  # Covariance Head Fine-tuning
  covariance_lr: 1e-5             # Learning rate for covariance head fine-tuning
  covariance_epochs: 5            # Number of epochs for covariance fine-tuning

  # Debug Mode Configuration
  debug_mode: False               # Whether to enable debug mode (freeze velocity head)
  gradient_clip_norm: 1.0         # Gradient clipping norm for stability

  # Loss Configuration
  use_simple_loss: True           # Use simple MSE loss instead of complex loss
  covariance_target: 0.1          # Target covariance value for simple loss
```

</details>
</div>

<div class="imu-step" markdown="1">
**Verify the model runs.** Run an overfitting experiment on a small subset to confirm the training loop, data loading, and metrics are working end to end before scaling up.
</div>

<div class="imu-step" markdown="1">
**Improve and [submit](https://www.kaggle.com/competitions/tartanimu-iros2026/submissions){:target="_blank" rel="noopener"}.** Experiment with your own methods to push performance on the leaderboard.
</div>

</div>

<div class="imu-note" markdown="1">
**Submission format:** one predicted body-frame velocity per test window, as a CSV with a header row:

```
window_id,vx,vy,vz
1,0.50,0.01,0.00
2,0.49,-0.00,-0.01
```

`window_id` values come from `index/test_windows.csv`; see `sample_submission.csv` on the [Kaggle Data tab](https://www.kaggle.com/competitions/tartanimu-iros2026/data){:target="_blank" rel="noopener"} for the exact rows to fill in.
</div>

## Reference Models

We provide per-platform "specialist" checkpoints trained internally as a benchmarking reference, so you can gauge what good performance looks like before submitting. You can also try them interactively in the [live demo](https://huggingface.co/spaces/Tartan-IMU/imu_odometry_challenge_demo){:target="_blank" rel="noopener"}.

<div class="imu-note" markdown="1">
**These specialists are a reference, not a submission strategy.** The competition requires **one unified model scored on all four platforms** — the test set is anonymized with no platform label, so switching between per-platform experts at inference time isn't possible. Use these checkpoints to sanity-check per-platform performance during development, not as your final submission.
</div>

- [Car specialist](https://huggingface.co/Tartan-IMU/IROS_workshop_car_specialist){:target="_blank" rel="noopener"}
- [Quadruped specialist](https://huggingface.co/Tartan-IMU/IROS_workshop_quadruped_specialist){:target="_blank" rel="noopener"}
- [Drone specialist](https://huggingface.co/Tartan-IMU/IROS_workshop_drone_specialist){:target="_blank" rel="noopener"}
- [Handheld specialist](https://huggingface.co/Tartan-IMU/IROS_workshop_human_specialist){:target="_blank" rel="noopener"}

## Recommended Workflow

1. Start from a known baseline.
2. Validate per platform first, then converge on a single unified model — final submissions must be one model scored across all four platforms with no platform label at test time.
3. Profile both aggregate (macro-averaged ATE) and per-platform failure modes.
4. Freeze your final model and produce reproducible inference logs.

## System Requirements (Preliminary)

- Linux or macOS development environment
- Python + PyTorch toolchain
- GPU required for both training and evaluation

## Organizer Reference System

Results reported by the organizers were produced on the following hardware:

| Component | Specification |
|---|---|
| CPU | AMD Ryzen 9 7950X (16-core / 32-thread) |
| Memory | 128 GB DDR5 |
| GPU | NVIDIA RTX A6000 (48 GB VRAM) |
| Driver | 535.183.01 |
| CUDA | 12.1 |
| PyTorch | 2.5.1+cu121 |

