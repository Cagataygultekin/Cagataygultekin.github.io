---
layout: page
title: Understanding Linear Regions of the ReLU Networks
permalink: /academic-work/seminar-paper/
description: Master's seminar paper on the geometry, robustness, and expressivity of ReLU networks.
nav: false
---

<div class="mb-4">
  <a class="btn btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Seminar_Paper_ReLU_Linear_Regions.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download the full seminar paper
  </a>
</div>

## Overview

ReLU networks are piecewise linear functions. Their input space is divided into regions in which the network behaves like an affine function, with changes in activation patterns defining the boundaries between regions. This seminar paper reviews how that geometric structure helps explain several aspects of neural network behavior.

The paper was written and presented on 17 July 2023 as part of the Selected Topics in Machine Learning Research master's seminar at the Technical University of Munich under Prof. Dr. Stephan Günnemann.

## Main questions

The paper focuses on four connected questions:

1. How are linear regions and activation patterns defined and counted?
2. How does the geometry of linear regions relate to adversarial robustness?
3. What do linear regions reveal about network expressivity and trainability?
4. How do depth, shallow univariate settings, and over-parameterization change the conclusions we can draw?

## Linear regions and activation patterns

Each ReLU activation changes regime according to the sign of its preactivation. The resulting activation patterns partition the network's input space into piecewise-affine regions, with a different affine mapping active in each region. Theoretical upper bounds can be very large, especially for deep networks, but empirical work shows that trained networks often use far fewer activation patterns than their architecture could theoretically express.

This distinction between theoretical capacity and learned behavior is central to the paper. A network may be able to represent a very large family of functions, while initialization and gradient-based optimization explore only a smaller subset of that space.

## Robustness

The paper reviews the relationship between piecewise linear geometry and adversarial robustness. Within a linear region, the classifier can be analyzed using its local affine representation. This allows lower and upper bounds to be derived for the perturbation required to change a prediction.

The paper discusses a regularization scheme that improves provable robustness by enlarging linear regions around data points and increasing their distance from the decision boundary, while maintaining competitive test performance. The paper also emphasizes that linear-region geometry is only one part of robustness and should be combined with broader evaluation and training strategies.

## Expressivity and performance

Linear regions are frequently used as a measure of expressive capacity. Depth can increase the number of functions a ReLU network can represent, but the number of regions actually learned depends on the task and optimization process. Memorization experiments illustrate that region counts can grow when the task benefits from highly oscillatory decision boundaries.

The paper separates three concepts:

- Functions the architecture can express
- Functions represented near initialization
- Functions that training can reach with non-negligible probability

This separation helps explain why theoretical expressivity does not automatically translate into practical performance.

## Shallow networks and over-parameterization

Results for shallow univariate ReLU networks provide useful convergence and implicit-bias guarantees, but they do not transfer directly to deeper multivariate architectures. Differences in dimensionality, bias terms, depth, and optimization assumptions limit direct comparison.

The paper also discusses how mild over-parameterization changes the optimization landscape. Adding neurons does not necessarily make the objective locally convex, but it can provide additional directions that help local optimization methods avoid poor solutions and move toward global minima.

## Main takeaway

Linear-region analysis is a useful lens for understanding ReLU networks, but region count alone is not a complete measure of model quality. Robustness, generalization, depth, optimization dynamics, and the difference between theoretical and effective capacity must be considered together.

## Further directions

The paper identifies several directions for future research:

- Better understanding of depth-width trade-offs
- Local rather than global region-count estimates
- Specialized regularization based on activation geometry
- Stronger links between linear regions and interpretability
- Empirical validation on larger datasets and architectures
