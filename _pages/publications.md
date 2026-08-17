---
layout: page
lang: en
translation_key: academic-work
permalink: /academic-work/
title: academic work
description: Selected research and academic work in machine learning and software systems.
nav: true
nav_order: 3
---

## Master's thesis

### Predicting Macroscopic Crowd Properties Using the SWIM Algorithm

<p class="mb-3">
  <strong>Presented:</strong> 1 October 2025 at accu:rate GmbH<br>
  <strong>Supervisor:</strong> Prof. Dr. Felix Dietrich<br>
  <strong>Advisor:</strong> Ana Cukarska<br>
  <strong>accu:rate GmbH collaborators:</strong> Dr. Angelika Kneidl and Johannes Hölscher
</p>

This thesis investigates how neural surrogate models can accelerate evacuation analysis. Microscopic crowd simulations provide detailed results, but they are expensive to run repeatedly during large parameter studies or iterative building design. The work combines crowd:it simulation data, the SWIM neural network training algorithm, and several sampling strategies to predict total evacuation times with substantially fewer simulations.

The evaluation covers a controlled room-based scenario and a regulation-derived vertical evacuation scenario. With the full dataset, the surrogate models demonstrated strong predictive performance, with R² above 0.99. Under strict simulation budgets, Randomized Quasi-Monte Carlo sampling reached R² values between 0.95 and 0.97 using only 9 to 14 simulations.

<div class="mt-3 mb-5">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/academic-work/master-thesis/' | relative_url }}">
    Read detailed overview
  </a>
  <a class="btn btn-outline-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download thesis PDF
  </a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/academic-work/tum-coursework/' | relative_url }}">
    View TUM coursework
  </a>
</div>

## Seminar paper

### Understanding Linear Regions of the ReLU Networks

**Presented:** 17 July 2023

This seminar paper examines how ReLU neural networks partition their input space into linear regions and how this geometric structure relates to expressivity, robustness, trainability, and over-parameterization. It distinguishes the large theoretical capacity of deep networks from the smaller number of activation patterns that are often reached in practice.

The paper also reviews robustness guarantees based on local affine behavior, limitations of transferring results from shallow univariate networks to deeper architectures, and the role of mild over-parameterization in the optimization landscape.

<div class="mt-3 mb-5">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/academic-work/seminar-paper/' | relative_url }}">
    Read detailed overview
  </a>
  <a class="btn btn-outline-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Seminar_Paper_ReLU_Linear_Regions.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download seminar paper PDF
  </a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/academic-work/tum-coursework/' | relative_url }}">
    View TUM coursework
  </a>
</div>

## Bachelor's thesis

### Discovering Issue-tracking Profiles of Software Development Teams

This thesis investigates how GitHub issue activity can be translated into measurable indicators of software-team practice. The final report covers the research framing, requirements, event-driven architecture, implementation, and validation of a working repository-analysis application.

The Python tool retrieves repository data through the GitHub API, evaluates 15 metrics and 13 structured process questions, visualizes results, and exports them to CSV. The project therefore connects a software-engineering research question with an executable and tested analysis workflow.

<div class="mt-3 mb-5">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/academic-work/bachelors-thesis/' | relative_url }}">
    Read detailed overview
  </a>
  <a class="btn btn-outline-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Bachelors_Thesis_Final_Report.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download thesis PDF
  </a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/academic-work/metu-coursework/' | relative_url }}">
    View METU coursework
  </a>
</div>
