---
title: IMU Odometry Challenge Setup
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/setup/
---

# Setup

## Quick Start

<div class="imu-card">
<strong>Step 1: Register your team.</strong> <a href="/imuchallenge/about/">Sign up on the About page.</a>
</div>

<div class="imu-card">
<strong>Step 2: Download the train/val splits.</strong> Get the data from the <a href="https://huggingface.co/datasets/Tartan-IMU/IROS-Tartan-IMU-Challenge" target="_blank" rel="noopener">IROS Tartan IMU Challenge dataset</a> on Hugging Face.
</div>

<div class="imu-card" markdown="1">
<strong>Step 3: Clone the baseline repository.</strong> <a href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener">superxslam/TartanIMU</a>.

```bash
git clone https://github.com/superxslam/TartanIMU
```
</div>

<div class="imu-card">
<strong>Step 4: Write a basic config file.</strong> For details on the available fields, see <code>TartanIMU/config/datasets</code>. A minimal example you can start from:
</div>

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

<div class="imu-card">
<strong>Step 5: Verify the model runs.</strong> Run an overfitting experiment on a small subset to confirm the training loop, data loading, and metrics are working end to end before scaling up.
</div>

<div class="imu-card">
<strong>Step 6: Improve and submit.</strong> Experiment with your own methods to push performance on the leaderboard.
</div>

## Recommended Workflow

1. Start from a known baseline.
2. Validate per platform first, then test cross-platform transfer.
3. Platform both aggregate and per-platform failure modes.
4. Freeze your final model and produce reproducible inference logs.

## System Requirements (Preliminary)

- Linux or macOS development environment
- Python + PyTorch toolchain
- GPU recommended for training; CPU acceptable for evaluation tooling

