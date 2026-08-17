---
layout: page
published: true
title: Reproducible ML Workflows for chemCPA
description: Research engineering for a Python/PyTorch system that predicts single-cell responses to unseen drug perturbations, with a focus on issue diagnosis, data workflows, and reproducible experiments.
img: assets/img/projects/helmholtz/chemcpa-architecture.png
importance: 6
category: professional
technologies: [Python, PyTorch, Scientific ML, Reproducible Research, Issue Diagnosis]
permalink: /projects/chemcpa-research-engineering/
github: https://github.com/theislab/chemcpa
---

{% include project_context.liquid role="Graduate Student Research Assistant" organization="Helmholtz Munich and TUM" period="Feb 2023 to Aug 2023" project_type="Research team" visibility="Public codebase" %}

At **Helmholtz Zentrum München - Deutsches Forschungszentrum für Gesundheit und Umwelt (GmbH)** and the **Technical University of Munich (TUM)**, I supported the chemCPA research codebase as a Graduate Student Research Assistant. My work focused on understanding, reproducing, and diagnosing issues across an existing Python/PyTorch system for single-cell drug-response prediction.

The role sat between machine learning research and software engineering. Researchers needed to run experiments, prepare biological datasets, compare configurations, and reproduce results across different environments. I worked across those workflows and translated reported behavior into concrete technical findings for the development team.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Existing research system</h3>
      <p class="mb-0">Worked inside a mature codebase with model, data, experiment, and analysis layers rather than building an isolated prototype.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Reproducible execution</h3>
      <p class="mb-0">Supported configuration-driven experiments and consistent environments using YAML, seml, Conda, Docker, Jupyter, and jupytext.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Cross-domain diagnosis</h3>
      <p class="mb-0">Investigated failures that could originate in model code, experiment settings, biological data, or local dependencies.</p>
    </div>
  </div>
</div>

## Engineering context

chemCPA is a deep learning system for predicting how cells respond to previously unseen drug perturbations. It combines learned representations of basal cell state, cellular context, dosage, and molecular structure. Graph-based or language-based molecular encoders allow the system to represent drugs through their chemical structure instead of treating each compound as a fixed category.

That scientific capability depends on more than the model definition. A complete experiment crosses several technical boundaries: raw and processed single-cell data, molecular embeddings, PyTorch training code, YAML configurations, environment management, experiment tracking, and analysis notebooks. A problem reported during an experiment could therefore have several possible sources.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/helmholtz/chemcpa-architecture.png" title="The chemCPA model architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The official chemCPA architecture diagram from the project repository and the NeurIPS 2022 paper by Hetzel et al. It shows the encoder-decoder, attribute embeddings, molecular perturbation network, and adversarial classifiers. The image is reused under the repository's MIT license.
</div>

## Working across the codebase

<div class="row my-3">
  <div class="col-md-6 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Data preprocessing</h3>
      <p class="mb-0">Worked with the paths that turn raw and processed biological datasets into the inputs expected by training and evaluation workflows.</p>
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Experiment configuration</h3>
      <p class="mb-0">Reviewed YAML-based experiment settings, dataset references, model parameters, and seml execution paths when reproducing reported behavior.</p>
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Model and training workflows</h3>
      <p class="mb-0">Navigated PyTorch model definitions and training loops to determine whether an issue came from code behavior, configuration, or input data.</p>
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Analysis and reporting</h3>
      <p class="mb-0">Used notebooks and experiment outputs to verify behavior, document findings, and make reported problems actionable for researchers and developers.</p>
    </div>
  </div>
</div>

## Issue reproduction and diagnosis

My main contribution was the disciplined investigation of problems reported by researchers. Instead of assuming every failure was a model bug, I traced the complete execution path and isolated the layer responsible.

1. Reproduce the reported behavior using the same dataset, experiment configuration, and execution path.
2. Check input files, preprocessing assumptions, and the relationship between raw and processed data.
3. Compare YAML settings and model parameters with a known working experiment.
4. Inspect the relevant model, training, or analysis code once configuration and data issues were excluded.
5. Verify package versions, Conda environments, Docker setup, and notebook synchronization when results differed between machines.
6. Document the cause, reproduction steps, and technical findings through GitHub and project communication.

This process was especially useful because failures in research software are often indirect. A missing dataset path, incompatible dependency, stale notebook, or mismatched configuration can surface much later as a training or evaluation problem.

## Reproducibility as an engineering requirement

chemCPA uses several mechanisms to make experiments repeatable: configuration files define experiment variants, seml manages experiment execution, Conda and Docker capture dependencies, and jupytext keeps notebooks aligned with text-based source files. I worked with these layers when helping researchers reproduce experiments and when comparing behavior across environments.

The practical goal was to preserve the full path from a reported research question to an executable experiment. That meant treating data selection, environment setup, configuration, and output analysis as parts of one system rather than unrelated setup tasks.

## Professional outcome

The project strengthened my ability to enter an unfamiliar machine learning codebase, follow dependencies across several technical layers, and communicate clearly with people working from different domain perspectives. I learned to separate scientific assumptions from software failures and to turn incomplete issue reports into reproducible engineering problems.

## Technical stack

`Python` · `PyTorch` · `Jupyter` · `jupytext` · `YAML` · `seml` · `Conda` · `Docker` · `Git` · `GitHub` · `Single-cell data workflows` · `Graph-based molecular representations`

## Project context and attribution

I worked on the project from February to August 2023 through a joint collaboration between **Helmholtz Zentrum München - Deutsches Forschungszentrum für Gesundheit und Umwelt (GmbH)** and the **Technical University of Munich (TUM)**. chemCPA, the model architecture, and the published scientific results were created by the paper's authors. My role focused on research engineering, reproducibility support, issue investigation, and communication around the existing codebase.

<div class="mt-4">
  <a class="btn btn-sm btn-primary" href="https://github.com/theislab/chemcpa" target="_blank" rel="noopener">View chemCPA on GitHub</a>
  <a class="btn btn-sm btn-outline-primary" href="https://arxiv.org/abs/2204.13545" target="_blank" rel="noopener">Read the research paper</a>
</div>
