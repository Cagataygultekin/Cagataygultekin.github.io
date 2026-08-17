---
layout: page
title: Predicting Macroscopic Crowd Properties Using the SWIM Algorithm
permalink: /academic-work/master-thesis/
description: Master's thesis in Informatics at the Technical University of Munich.
nav: false
---

<div class="mb-4">
  <a class="btn btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download the full thesis
  </a>
</div>

## Overview

Microscopic crowd simulators provide detailed insight into evacuation behavior, but their computational cost makes large parameter studies and iterative building design expensive. This thesis investigates whether neural surrogate models can predict total evacuation times accurately while requiring far fewer crowd simulations.

The work was completed as a Master's Thesis in Informatics at the Technical University of Munich in collaboration with accu:rate GmbH. Prof. Dr. Felix Dietrich was the thesis supervisor, and Ana Cukarska was the advisor. At accu:rate GmbH, I worked with Dr. Angelika Kneidl and Johannes Hölscher. I presented the completed work at the accu:rate office on 1 October 2025.

## Research questions

The thesis addresses three connected questions:

1. Can neural surrogate models trained with the SWIM algorithm reproduce macroscopic evacuation outcomes accurately?
2. Which sampling strategies provide the strongest models under a very limited simulation budget?
3. Does the approach remain effective across both a controlled synthetic setup and a regulation-based evacuation scenario?

## Methodology

The experimental workflow connects simulation data generation, data preparation, model training, validation, and sampling analysis in a reproducible Python pipeline.

### Scenario 1: controlled room evacuation

The first scenario uses three origin rooms that evacuate into a shared target area. Crowd configurations were generated automatically and simulated with crowd:it. This controlled setting was used to establish a baseline, study feature behavior, and validate the SWIM-based regression approach.

### Scenario 2: vertical evacuation

The second scenario uses a regulation-derived vertical evacuation dataset based on the Gd99 guideline. Its parameters describe building and population characteristics such as the number of floors, stair width, and people per floor. This scenario provides a more realistic benchmark for evaluating predictive performance and practical applicability.

### Sampling study

The sampling experiments compare several strategies under fixed simulation budgets:

- Quasi-Monte Carlo sampling
- Randomized Quasi-Monte Carlo sampling
- Entropy-based sampling
- Sparse-grid sampling
- KMeans-based sampling

Each sampled subset was used to train a SWIM surrogate, followed by validation, testing, and evaluation on the unseen portion of the full dataset.

## Key results

| Result                    | Outcome                                                           |
| ------------------------- | ----------------------------------------------------------------- |
| Synthetic room scenario   | Predictive performance: R² up to 0.89                             |
| Regulation-based scenario | Predictive performance: R² above 0.99 with the full dataset       |
| Best low-budget method    | Randomized Quasi-Monte Carlo sampling                             |
| Low-budget performance    | R² between 0.95 and 0.97 with only 9 to 14 simulations            |
| Practical impact          | More than an order-of-magnitude reduction in required simulations |

Randomized Quasi-Monte Carlo sampling provided the most reliable performance-cost trade-off. It generalized strongly with very small training sets, while entropy-based and sparse-grid methods required more simulations for comparable performance. KMeans sampling was less stable in the evaluated configurations.

## Main contributions

- A synthetic crowd evacuation dataset and automated simulation workflow for controlled evaluation
- Adaptation of SWIM-based neural surrogate modeling to two evacuation scenarios
- A reproducible training and evaluation pipeline for simulation-driven machine learning
- A systematic comparison of sampling strategies under strict simulation budgets
- Evidence that carefully selected simulation inputs can reduce computational cost without sacrificing predictive quality

## Future work

The thesis proposes extending the approach to unseen building types, richer behavioral variables, and adaptive sampling methods. A practical next step would be direct integration into crowd:it, where a small number of simulations could train and cache a surrogate model for rapid predictions during iterative design.
