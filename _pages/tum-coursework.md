---
layout: page
title: TUM coursework
permalink: /academic-work/tum-coursework/
description: Completed coursework from the M.Sc. Informatics programme at the Technical University of Munich.
nav: false
---

<div class="coursework-hero">
  <p class="coursework-eyebrow">Technical University of Munich</p>
  <h1>M.Sc. Informatics coursework</h1>
  <p class="coursework-lead">A focused view of the taught modules behind my work in machine learning, software systems, and scientific computing. Grades are intentionally omitted; the emphasis here is on technical scope and the areas I studied.</p>
  <div class="coursework-facts">
    <div><strong>146</strong><span>completed ECTS</span></div>
    <div><strong>3 years</strong><span>full-time study</span></div>
    <div><strong>A1.2-B2.2</strong><span>German progression</span></div>
  </div>
  <p class="coursework-record-note">The M.Sc. requires 120 ECTS. I completed 26 ECTS beyond that requirement, bringing my recorded study load to 146 ECTS. Thesis, seminar, and project work remain documented on the Academic Work and Projects pages.</p>
</div>

<section class="applied-coursework-callout">
  <div>
    <p class="coursework-section-kicker">Applied coursework</p>
    <h2>Machine Learning in Crowd Modeling &amp; Simulation</h2>
    <p>This 10 ECTS practical module connected data processing, crowd dynamics, and machine learning. In a group project, I worked across the full task set: preparing ring-corridor and bottleneck trajectory data, engineering nearest-neighbour features, fitting fundamental-diagram models, and implementing PyTorch neural networks for pedestrian-speed prediction.</p>
    <p>The final comparison used cross-validation and mixed-geometry experiments to evaluate whether learned models could distinguish crowd behaviour across different spatial layouts. The neural-network models consistently reduced prediction error relative to the physics-based baseline, while the modified network improved or matched the earlier architecture across the evaluated dataset combinations.</p>
    <div class="mt-3">
      <a class="btn btn-primary mr-2 mb-2" href="https://github.com/Cagataygultekin/Machine-Learning-in-Crowd-Modeling---Simulation-Praktikum" target="_blank" rel="noopener">
        <i class="fa-brands fa-github"></i>&nbsp; View coursework repository
      </a>
      <a class="btn btn-outline-primary mb-2" href="{{ '/projects/' | relative_url }}">View project portfolio</a>
    </div>
  </div>
  <div class="applied-coursework-stack" aria-label="Main technologies">
    <span>Python</span><span>PyTorch</span><span>Pandas</span><span>scikit-learn</span><span>Cross-validation</span><span>Crowd modelling</span>
  </div>
</section>

<p class="coursework-interaction-note"><i class="fa-regular fa-hand-pointer"></i> Select a course to open its content summary and official catalog source.</p>

{% include coursework_catalog.liquid sections=site.data.coursework.tum institution="tum" catalog_url="https://www.cit.tum.de/en/cit/studies/degree-programs/master-informatics/" %}

<div class="coursework-sources">
  <h2>Official course references</h2>
  <p>Course titles and credits are based on my completed TUM record. Public descriptions were cross-checked against official TUM programme and teaching pages.</p>
  <a href="https://www.cit.tum.de/en/cit/studies/degree-programs/master-informatics/" target="_blank" rel="noopener">M.Sc. Informatics programme</a>
  <a href="https://www.cs.cit.tum.de/daml/lehre/wintersemester-201718/machine-learning/" target="_blank" rel="noopener">Machine Learning</a>
  <a href="https://cvg.cit.tum.de/teaching/ws2024/i2dl" target="_blank" rel="noopener">Introduction to Deep Learning</a>
  <a href="https://www.cs.cit.tum.de/cmm/training-and-teaching/winter-term-2018/data-analysis-and-visualization-in-r/" target="_blank" rel="noopener">Data Analysis and Visualization</a>
  <a href="https://www.cs.cit.tum.de/en/ercs/teaching/lecture-engineering-resilient-cognitive-systems/" target="_blank" rel="noopener">Engineering Resilient Cognitive Systems</a>
  <a href="https://www.cs.cit.tum.de/en/sse/teaching/" target="_blank" rel="noopener">Software testing and requirements courses</a>
</div>

<div class="coursework-back-link">
  <a href="{{ '/academic-work/' | relative_url }}"><i class="fa-solid fa-arrow-left"></i> Back to academic work</a>
</div>
