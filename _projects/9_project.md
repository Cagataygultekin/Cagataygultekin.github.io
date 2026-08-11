---
layout: page
published: true
title: Issue-Tracking Analytics for Software Teams
description: A bachelor's thesis that extracted issue-tracking data, engineered process metrics, and used unsupervised clustering to discover team usage profiles.
img: assets/img/projects/bachelors-thesis/issue-tracking-analytics.png
importance: 9
category: professional
technologies: [Python, Data Mining, Unsupervised Learning, Clustering, Software Analytics]
permalink: /projects/issue-tracking-team-analytics/
---

For my bachelor's thesis in Computer Engineering at **Middle East Technical University Northern Cyprus Campus**, I investigated how software development teams use issue-tracking systems during collaborative work. The project, originally titled **Discovering Issue-Tracking Profiles of Software Development Teams**, combined software engineering data with unsupervised machine learning.

The central idea was that an issue tracker contains more than task records. Assignment changes, issue states, resolution behavior, activity patterns, and other process signals can be transformed into metrics that describe how a team organizes and executes its work.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Data extraction</h3>
      <p class="mb-0">Collected issue-related records from a software development platform and prepared them for analysis.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Metric engineering</h3>
      <p class="mb-0">Converted raw activity into structured measures that describe issue-tracking behavior.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Team profiles</h3>
      <p class="mb-0">Applied clustering to identify recurring patterns across collaborative development teams.</p>
    </div>
  </div>
</div>

## From issue records to interpretable profiles

The analysis followed a complete data workflow:

1. extract issue-related data from a software development platform,
2. clean and structure the records,
3. derive metrics representing team behavior,
4. apply unsupervised clustering methods,
5. interpret the resulting groups as issue-tracking profiles,
6. translate the findings into guidance for teams adopting or improving issue-tracking practices.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/bachelors-thesis/issue-tracking-analytics.png" title="Conceptual issue-tracking analytics pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A portfolio reconstruction of the analytical workflow. It shows the progression from raw issue data through metric engineering and clustering to interpretable team profiles and recommendations.
</div>

## Engineering and analytical scope

The project required both software and analytical thinking. The input data came from a real development workflow, but the research question could not be answered directly from raw issue records. I had to define a useful representation, convert activity into comparable features, and make the clustering results understandable in the context of team productivity and process quality.

The intended outcome was practical as well as analytical. The resulting profiles could support learners, small companies, and teams that wanted to use issue-tracking systems more deliberately instead of treating them only as task lists.

## Why this project still matters

This was one of my earliest large projects connecting software systems, structured data, and machine learning. It established a pattern that continued in my later work: begin with operational data, build a reproducible processing workflow, and turn the result into information that supports engineering decisions.

## Core stack and methods

`Python` · `Data preprocessing` · `Metric engineering` · `Unsupervised learning` · `Clustering` · `Software analytics` · `Issue-tracking systems`

## Project context

The work was completed as my bachelor's thesis at **Middle East Technical University Northern Cyprus Campus**. The original implementation and dataset are not published, so the visual on this page is a conceptual reconstruction of the workflow.
