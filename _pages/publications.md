---
layout: page
permalink: /academic-work/
title: academic work
description: Research and academic work completed at the Technical University of Munich.
nav: true
nav_order: 3
---

## Master's thesis

### Predicting Macroscopic Crowd Properties Using the SWIM Algorithm

This thesis investigates how neural surrogate models can accelerate evacuation analysis. Microscopic crowd simulations provide detailed results, but they are expensive to run repeatedly during large parameter studies or iterative building design. The work combines crowd:it simulation data, the SWIM neural network training algorithm, and several sampling strategies to predict total evacuation times with substantially fewer simulations.

The evaluation covers a controlled room-based scenario and a regulation-derived vertical evacuation scenario. With the full dataset, the surrogate models achieved predictive accuracy above R² = 0.99. Under strict simulation budgets, Randomized Quasi-Monte Carlo sampling reached R² values between 0.95 and 0.97 using only 9 to 14 simulations.

<div class="mt-3 mb-5">
  <a class="btn btn-primary mr-2" href="{{ '/academic-work/master-thesis/' | relative_url }}">
    Read detailed overview
  </a>
  <a class="btn btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download thesis PDF
  </a>
</div>

## Seminar paper

### Understanding Linear Regions of ReLU Networks

This seminar paper examines how ReLU neural networks partition their input space into linear regions and how this geometric structure relates to expressivity, robustness, trainability, and over-parameterization. It distinguishes the large theoretical capacity of deep networks from the smaller number of activation patterns that are often reached in practice.

The paper also reviews robustness guarantees based on local affine behavior, limitations of transferring results from shallow univariate networks to deeper architectures, and the role of mild over-parameterization in the optimization landscape.

<div class="mt-3 mb-5">
  <a class="btn btn-primary mr-2" href="{{ '/academic-work/seminar-paper/' | relative_url }}">
    Read detailed overview
  </a>
  <a class="btn btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Seminar_Paper_ReLU_Linear_Regions.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download seminar paper PDF
  </a>
</div>
