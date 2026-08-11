---
layout: page
published: true
title: GitHub Issue-Tracking Research Tool
description: A Python desktop application that turns GitHub issue activity into process metrics, visual analyses, and exportable research data.
img: assets/img/projects/bachelors-thesis/issue-tracking-analytics.png
importance: 9
category: professional
technologies: [Python, GitHub API, Repository Analytics, Tkinter, CSV Export]
github: https://github.com/DIP-Group/GithubTracker
permalink: /projects/issue-tracking-team-analytics/
---

This project delivered a desktop research tool for examining how software teams use GitHub issue tracking. Instead of treating issues as isolated task records, the application converts repository activity into measurable signals about assignment, communication, labels, milestones, response times, and issue completion.

The system was developed as part of my bachelor's thesis in Computer Engineering at **Middle East Technical University Northern Cyprus Campus**. This page presents it as a software product. The corresponding [Academic Work page]({{ '/academic-work/bachelors-thesis/' | relative_url }}) discusses the research problem and analytical framework in more detail.

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="https://github.com/DIP-Group/GithubTracker" target="_blank" rel="noopener">
    <i class="fa-brands fa-github"></i>&nbsp; View source code
  </a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Bachelors_Thesis_DIP_User_Manual.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download project document
  </a>
</div>

## Product workflow

The application supports a complete repository-analysis workflow:

1. retrieve a public GitHub repository through its URL,
2. store the retrieved repository data for later analysis,
3. select metrics and process questions through a desktop interface,
4. calculate results from issue, contributor, label, comment, assignee, and milestone data,
5. present the results as charts, summary values, or structured answers,
6. export the selected outputs to CSV for further analysis.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Repository ingestion</h3>
      <p class="mb-0">Uses the GitHub API to retrieve repository and issue-tracking data and preserves a local representation for repeatable analysis.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Metric engine</h3>
      <p class="mb-0">Calculates indicators covering issue state, responsibility distribution, labels, comments, milestones, assignees, and response behavior.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Research output</h3>
      <p class="mb-0">Makes findings inspectable through charts and tables, then exports metric values and answers for downstream evaluation.</p>
    </div>
  </div>
</div>

## Engineering scope

The implementation is a Python desktop application built with Tkinter. It uses PyGithub for repository access, Matplotlib for visual analysis, and CSV output for portable results. The code separates repository retrieval, metric calculation, question evaluation, visualization, and export operations within one user-facing workflow.

The tool evaluates both quantitative measures and practical process questions. Examples include the distribution of issues across contributors, label adoption, comment consistency, milestone usage, average issue response and completion times, and whether responsibilities are assigned consistently.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/bachelors-thesis/issue-tracking-analytics.png" title="Issue-tracking research workflow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The engineering workflow from GitHub issue data to calculated indicators, interpretable process findings, and reusable research output.
</div>

## Why this project matters

This was one of my earliest end-to-end software analytics projects. It connected API integration, desktop application development, domain-specific metric design, visualization, and exportable data processing in a single working tool. The same pattern appears throughout my later work: collect operational data, create a reproducible processing layer, and turn the result into information that supports engineering decisions.

## Core stack

`Python` / `PyGithub` / `GitHub API` / `Tkinter` / `Matplotlib` / `Repository analytics` / `CSV export`
