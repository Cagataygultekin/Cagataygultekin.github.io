---
layout: page
title: Simulation-Efficient Evacuation Prediction
description: An end-to-end machine learning pipeline for predicting multi-story evacuation times with far fewer crowd simulations.
img: assets/img/projects/master-thesis/prediction-results.png
importance: 1
category: professional
technologies: [Python, PyTorch, SWIM, "crowd:it"]
permalink: /projects/evacuation-prediction/
github: https://github.com/Cagataygultekin/Predicting-Macroscopic-Crowd-Properties-Using-the-SWIM-Algorithm
---

I built a machine learning workflow at **accu:rate GmbH**, in collaboration with the **Technical University of Munich (TUM)**, to reduce the cost of repeated evacuation simulations. The system connects crowd:it simulation data to neural surrogate models and predicts total evacuation time for previously unseen building configurations.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3">
    <h3>17,410</h3>
    <p class="mb-0">simulation runs in the full Gd99-derived dataset</p>
  </div>
  <div class="col-sm-4 mb-3">
    <h3>R² = 0.993</h3>
    <p class="mb-0">test accuracy on the multi-story scenario</p>
  </div>
  <div class="col-sm-4 mb-3">
    <h3>9 runs</h3>
    <p class="mb-0">needed to reach R² = 0.95 on unseen configurations</p>
  </div>
</div>

## The engineering challenge

Microscopic crowd simulations provide detailed and reliable evacuation results, but a single building design can require many runs because layout and population parameters vary and each configuration contains stochastic behavior. This becomes expensive during parameter studies or iterative design work.

I approached the problem as a system optimization task rather than only a model-training exercise:

1. Build a reproducible pipeline from simulation output to model evaluation.
2. Train a fast surrogate model that reproduces the simulator's macroscopic output.
3. Identify which simulations are actually worth running when the data-generation budget is limited.
4. Validate performance on configurations that were not used for training or model selection.

## What I delivered

- A modular Python pipeline for ingesting and normalizing crowd:it results
- Configuration-driven experiments across model depth, width, activation, and regularization
- Consistent train, validation, and test workflows for SWIM and conventional neural network baselines
- Automated evaluation using R², MSE, training time, and generalization performance
- Sampling experiments covering QMC, randomized QMC, entropy-based selection, sparse grids, and KMeans
- Visual analysis for prediction quality, parameter coverage, runtime, and failure cases

## Main use case: Gd99-based multi-story evacuation

I first validated the workflow on a small synthetic three-room scenario. That baseline helped me test simulation ingestion, feature handling, and model evaluation, but it was not the main engineering use case.

The core work used a vertical evacuation dataset derived from the Gd99 expert study and implemented in crowd:it. It represents multi-story buildings in which occupants from several floors enter shared corridors and stairwells. As the building becomes taller or the number of people increases, congestion can form at stairwell entrances and propagate across floors.

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/master-thesis/gd99-multistory-evacuation.jpg" title="Gd99 multi-story evacuation scenario showing crowd movement across three levels" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The Gd99 source study illustrates the initial distribution, corridor congestion after 15 seconds, and movement across three building levels after 30 seconds. My dataset extended this setup into a parameterized family of multi-story configurations. Source: Kneidl and Könnecke (2020), BAuA.
</div>

Each configuration is defined by three inputs:

- **E - floors:** 3 to 8 floors above the ground-level exit
- **T - stair width:** 90 to 240 cm
- **P - people per floor:** 20 to 100 occupants

The simulations were repeated to capture stochastic variation. I retained the configuration, replicate identifier, and total evacuation time, producing **17,410 simulation runs** for modeling and evaluation.

## From simulation output to a tested prediction service

I implemented the workflow that turns raw simulation results into repeatable model experiments:

1. Parse and normalize crowd:it output files.
2. Build consistent feature and target datasets.
3. Create fixed 80/10/10 train, validation, and test splits.
4. Run architecture and hyperparameter experiments for SWIM-based models.
5. Benchmark against conventional PyTorch neural networks.
6. Evaluate the selected configuration on held-out and previously unseen parameter combinations.

The best SWIM configuration used a single wide hidden layer with 512 units and achieved **R² = 0.997 on validation data and R² = 0.993 on the held-out test set**. In the runtime benchmark, SWIM trained approximately **50 times faster** than the conventional neural network baseline while reaching comparable accuracy.

<div class="row justify-content-center">
  <div class="col-md-9 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/master-thesis/prediction-results.png" title="SWIM predictions for unseen multi-story evacuation configurations" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Predicted and simulated evacuation times on the held-out test set. The close alignment with the ideal regression line indicates that the surrogate generalized beyond its training data.
</div>

## Sampling became the main performance lever

A highly accurate surrogate is only useful if producing its training data does not require the entire simulation space. I therefore shifted the main optimization target from model architecture to **training-set selection**.

I compared five families of sampling strategies under strict simulation budgets:

- Quasi-Monte Carlo using Sobol sequences
- Randomized Quasi-Monte Carlo using Owen scrambling
- Entropy-based informative sampling
- Sparse-grid sampling
- KMeans-based representative sampling

Randomized QMC provided the strongest low-budget generalization. Its samples covered the three-dimensional building parameter space without clustering heavily in already dense regions.

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/master-thesis/sampling-coverage.png" title="Randomized QMC coverage across floors, stair width, and people per floor" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Nine RQMC-selected simulations shown against the full Gd99-derived parameter space. The sample set spans different floor counts, stair widths, and occupant loads instead of concentrating on the most common configurations.
</div>

| Training design | Simulation runs | Test R² | Generalization R² |
|---|---:|---:|---:|
| RQMC-9 | 9 | 0.994 | 0.950 |
| RQMC-14 | 14 | 0.998 | 0.970 |

With only **9 simulations**, the model reached **R² = 0.95** on the remaining unseen configurations. Fourteen simulations increased this to **R² = 0.97**. The 9-run training set represents roughly **0.05% of the full 17,410-run dataset**.

## Engineering decisions that mattered

- **Reproducibility:** I kept data splits and evaluation rules consistent across architecture and sampling experiments.
- **Generalization-first evaluation:** Sampled models were tested on the complement of the selected training set, not only on a small random test split.
- **Baseline comparison:** SWIM results were compared with conventional neural networks instead of being assessed in isolation.
- **Pipeline ownership:** I handled data preparation, experiment orchestration, model training, evaluation, visualization, and technical documentation end to end.
- **Cost-aware optimization:** I treated the number of required crowd simulations as a primary system metric alongside predictive accuracy.

## Outcome

The final result was more than a fitted regression model. It was a repeatable workflow for deciding **which simulations to run, how to train a surrogate from them, and how to verify that the model remains reliable on unseen building configurations**.

This showed that a carefully selected simulation set can replace exhaustive data generation for rapid design exploration while preserving strong predictive performance. A logical next step would be to integrate the workflow into crowd:it so that a small set of simulations can be generated, cached, and reused for near-instant predictions during iterative planning.

## Technical stack

`Python` · `PyTorch` · `SWIMNetworks` · `scikit-learn` · `SciPy` · `pandas` · `NumPy` · `Matplotlib` · `Seaborn` · `crowd:it`

## Project context and documentation

The project was completed at **accu:rate GmbH** in collaboration with **TUM** and also served as my master's thesis in Informatics. The project page focuses on the engineering work; the academic page contains the research framing and formal thesis details.

<div class="mt-4">
  <a class="btn btn-sm btn-primary" href="{{ '/academic-work/master-thesis/' | relative_url }}">Academic overview</a>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener">Read the thesis (PDF)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/Cagataygultekin/Predicting-Macroscopic-Crowd-Properties-Using-the-SWIM-Algorithm" target="_blank" rel="noopener">View source code on GitHub</a>
</div>
