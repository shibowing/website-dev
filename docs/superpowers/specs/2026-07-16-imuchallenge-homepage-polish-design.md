# IMU Challenge Homepage Polish — Design

**Date:** 2026-07-16
**Page:** `/imuchallenge/` (`imuchallenge/index.md`)
**Branch:** `pr-37` (PR #37 `imu-challenge` merged with `origin/master`)

## Goal

One concise, clean, organized challenge landing page that meets a professional
standard. It combines the PR's visual landing structure with the previous
(master) template's technical substance, unified under the site's SuperX
orange branding.

## Background

Two templates exist for the challenge homepage:

- **Previous (master):** an informative document-style page — announcements,
  challenge description, problem formulation, evaluation metrics, benchmark
  structure, BibTeX. Content-complete but visually plain.
- **Current (PR #37):** a visual landing page modeled on
  grand-tour.leggedrobotics.com — hero video, stats band, feature grid,
  partners, announcements card, citation blocks. Looks modern but lost the
  technical detail, has a gray "illustration placeholder" band, dashed
  placeholder partner boxes, and mixes three accent colors (red, indigo,
  and the site's new orange).

## Page structure (top → bottom)

1. **Hero video banner** — unchanged content (`hero_preview.mp4`),
   registration pills, glass title, subtitle, 4 nav buttons
   (Setup / Platforms / Data Overview / About).
2. **Stats band** — Platforms 4 · Windows ~175K · Total Duration 29.5 hrs ·
   Sample Rate 200 Hz. Content unchanged; accents restyled.
3. **Platform preview strip** *(new — replaces the gray placeholder band)* —
   4 cards: Car, Drone, Quadruped, Handheld. Each shows a real trajectory
   preview image from `img/imuchallenge/previews/<platform>_train_*.png`
   (default `_0000.png`; substitute a visually clearer one from the same
   platform if `_0000` renders poorly), a label, and links to its platform
   page under `/imuchallenge/platforms/`.
4. **Key Features** — existing 4-icon grid, unchanged copy; icon tiles become
   orange.
5. **Task & Evaluation** *(new section)* — two side-by-side cards:
   - **The Task** — Input: raw 6-axis IMU (accel m/s², gyro rad/s) at 200 Hz;
     windows of 1 s (200 samples), sequences of 10 consecutive windows.
     Output: per-window 3D body-frame velocity v = (vx, vy, vz) in m/s.
   - **Scoring** — Macro-averaged Velocity RMSE (primary; mean of
     per-platform RMSEs), ATE (secondary; organizers integrate predicted
     velocities with ground-truth orientation), and train / validation / test
     split roles, one line each.
   Full protocol remains on the Setup page; this section is a compact summary.
6. **Organizers & Partners** — AirLab logo card plus clean solid-card
   typographic wordmarks for "Amazon FAR" and "Carnegie Mellon University"
   (no dashed placeholder borders). Real logos can be swapped in later
   without layout changes.
7. **Announcements** — existing card; the latest-item highlight becomes an
   orange tint instead of indigo.
8. **Citation** — existing Hugging Face demo + IROS'26 workshop sentence and
   the two BibTeX blocks, unchanged.

## Color system

Single accent: **SuperX orange `#C45A0E`**, replacing in the challenge-page
styles (`imu-gt-*`, `imu-*`, `body.imuchallenge-site` scope):

- red `#dc2626` — mascot (imu-bot), divider marks, feature icon tiles,
  section-title underlines, pill link color;
- indigo `#4f46e5` — nav buttons (border/hover), announcement latest-row
  tint, hero announcement button.

Neutral grays stay unchanged. Buttons: white background, orange border,
orange-tinted hover. Subpages (Setup / Platforms / Data / About) inherit the
orange through these shared styles automatically; their content and layout
are not touched in this pass.

KPI chips (`.imu-kpi-*`, the PR #37 merge-conflict site): resolve to the PR's
light style (light gray background, dark text, no hover rule). They are
currently rendered by no page (no `hero_kpis` front matter anywhere), so this
is style-only.

## Out of scope

- Subpage content/layout changes.
- New logo assets (wordmarks stand in until real files are provided).
- Site-wide (non-challenge) styles beyond what the merge already brings in.

## Cleanup before commit

Delete the temporary comparison pages `kpi-test.md` and
`imuchallenge-old-preview.md` from the repo root.

## Verification

With the running docker Jekyll server (`http://localhost:4000`):

1. Full-page screenshots of `/imuchallenge/` at desktop (1280px) and mobile
   (390px) widths.
2. Check: no placeholder text/boxes remain; all 4 preview images load; text
   contrast is readable; a single orange accent is used consistently.
3. Spot-check subpages (Setup, Data, one platform page) render correctly with
   inherited orange accents.
4. `git diff` review: no unintended changes outside `imuchallenge/index.md`,
   `_sass/custom.scss`, and the temp-page deletions.
