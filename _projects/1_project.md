---
layout: page
title: Industrial Master's Thesis - Evacuation Prediction with SWIM
description: A simulation-efficient machine learning pipeline developed at accu:rate GmbH for predicting evacuation times.
img: assets/img/projects/master-thesis-cover.jpg
importance: 1
category: professional
permalink: /projects/industrial-master-thesis/
---

## Project overview

I completed this industrial master's thesis at **accu:rate GmbH** in collaboration with the **Technical University of Munich**. The project explored whether neural surrogate models could predict macroscopic crowd properties, especially evacuation time, while reducing reliance on computationally expensive crowd simulations.

My work covered the complete experimental workflow: generating simulation configurations, processing crowd:it outputs, training SWIM-based surrogate models, comparing sampling strategies, evaluating generalization, and visualizing the results.

## The engineering problem

Crowd simulations are valuable for evacuation analysis, but running enough simulations to explore a large parameter space can be costly. The central question was therefore:

> How accurately can evacuation outcomes be approximated from a limited number of simulations, and which sampling strategy provides the most useful training data?

The project combined simulation engineering, machine learning, experiment design, and scientific evaluation in one reproducible Python workflow.

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

## Main result

Randomized quasi-Monte Carlo sampling produced the best balance between prediction quality and simulation cost. In the second scenario, it reached an R² of approximately **0.95 to 0.97 using only 9 to 14 simulations**, reducing the required simulation count by more than an order of magnitude compared with a dense experimental design.

These results show that carefully selected simulation samples can make surrogate modeling practical even when generating training data is expensive.

## Technical stack

`Python` · `PyTorch` · `SWIMNetworks` · `scikit-learn` · `SciPy` · `pandas` · `NumPy` · `Matplotlib` · `Seaborn` · `crowd:it`

## My contribution

I independently designed and implemented the experimental pipeline, conducted the model and sampling experiments, analyzed the results, and documented the methodology as my master's thesis. The work was carried out in an industrial research setting and was intended to support future simulation-efficient evacuation analysis workflows.

<div class="mt-4">
  <a class="btn btn-sm btn-primary" href="{{ '/academic-work/master-thesis/' | relative_url }}">Academic overview</a>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener">Read the thesis (PDF)</a>
</div>
