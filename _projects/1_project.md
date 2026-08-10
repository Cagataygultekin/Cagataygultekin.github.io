---
layout: page
title: Evacuation Prediction with Neural Surrogate Models
description: A master's thesis project developed with accu:rate GmbH and TUM to reduce the simulation cost of evacuation analysis.
img: assets/img/projects/master-thesis/prediction-results.png
importance: 1
category: professional
permalink: /projects/evacuation-prediction/
---

## Project overview

I completed this master's thesis project in collaboration with **accu:rate GmbH** and the **Technical University of Munich**. The project explored whether neural surrogate models could predict macroscopic crowd properties, especially evacuation time, while reducing reliance on computationally expensive crowd simulations.

My work covered the complete experimental workflow: generating simulation configurations, processing crowd:it outputs, training SWIM-based surrogate models, comparing sampling strategies, evaluating generalization, and visualizing the results.

## The engineering problem

Crowd simulations are valuable for evacuation analysis, but running enough simulations to explore a large parameter space can be costly. The central question was therefore:

> How accurately can evacuation outcomes be approximated from a limited number of simulations, and which sampling strategy provides the most useful training data?

The project combined simulation engineering, machine learning, experiment design, and scientific evaluation in one reproducible Python workflow.

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/master-thesis/scenario-geometry.png" title="Synthetic evacuation scenario used to generate training data" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Synthetic evacuation scenario with three origin rooms and a shared target area. The geometry and population parameters were varied automatically to generate simulation data.
</div>

## What I built

- An automated pipeline connecting crowd:it simulation results with SWIM neural surrogate models
- Data preparation and validation workflows for structured simulation outputs
- Reproducible training, validation, and test procedures
- Hyperparameter experiments for SWIM models and conventional neural network baselines
- A comparison of quasi-Monte Carlo, randomized quasi-Monte Carlo, entropy-based, sparse-grid, and KMeans sampling
- Generalization tests across two evacuation scenarios with different levels of complexity
- Evaluation and visualization tools for prediction quality, sampling efficiency, and runtime behavior

## Experimental scenarios

### Scenario 1: Synthetic room evacuation

The first scenario provided a controlled setting for studying how geometric and population-related parameters influence evacuation time. The strongest models reached an R² of approximately **0.89**.

### Scenario 2: Regulation-derived vertical evacuation

The second scenario was based on the Gd99 framework and represented a more complex vertical evacuation setting. With the full dataset, the surrogate models achieved an R² above **0.99**.

<div class="row justify-content-center">
  <div class="col-md-9 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/master-thesis/prediction-results.png" title="SWIM model predictions on the held-out test set" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Predictions on the held-out test set closely follow the ideal regression line, reaching R² = 0.993.
</div>

## Main result

Randomized quasi-Monte Carlo sampling produced the best balance between prediction quality and simulation cost. In the second scenario, it reached an R² of approximately **0.95 to 0.97 using only 9 to 14 simulations**, reducing the required simulation count by more than an order of magnitude compared with a dense experimental design.

These results show that carefully selected simulation samples can make surrogate modeling practical even when generating training data is expensive.

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/master-thesis/sampling-coverage.png" title="Sampling coverage in the evacuation parameter space" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Nine selected simulations distributed across the full parameter space. This experiment illustrates how randomized quasi-Monte Carlo sampling preserved strong predictive performance under a strict simulation budget.
</div>

## Technical stack

`Python` · `PyTorch` · `SWIMNetworks` · `scikit-learn` · `SciPy` · `pandas` · `NumPy` · `Matplotlib` · `Seaborn` · `crowd:it`

## My contribution

I independently designed and implemented the experimental pipeline, conducted the model and sampling experiments, analyzed the results, and documented the methodology as my master's thesis. The collaboration connected an applied engineering problem from accu:rate GmbH with machine learning research at TUM and was intended to support future simulation-efficient evacuation analysis workflows.

<div class="mt-4">
  <a class="btn btn-sm btn-primary" href="{{ '/academic-work/master-thesis/' | relative_url }}">Academic overview</a>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener">Read the thesis (PDF)</a>
</div>
