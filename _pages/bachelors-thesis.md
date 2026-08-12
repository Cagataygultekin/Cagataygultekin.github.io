---
layout: page
title: Discovering Issue-Tracking Profiles of Software Development Teams
permalink: /academic-work/bachelors-thesis/
description: Bachelor's thesis on measurable issue-tracking practices and repository-based software process analysis.
nav: false
---

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Bachelors_Thesis_DIP_User_Manual.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i>&nbsp; Download the thesis document
  </a>
  <a class="btn btn-outline-primary mb-2" href="https://github.com/DIP-Group/GithubTracker" target="_blank" rel="noopener">
    <i class="fa-brands fa-github"></i>&nbsp; View research tool
  </a>
</div>

## Overview

Issue trackers are central to collaborative software development, but their effective use depends on more than recording tasks. Teams make different choices about assignment, labels, milestones, comments, response behavior, and issue completion. When these practices are inconsistent, the tracker becomes less useful as both an operational system and a source of research data.

My bachelor's thesis, completed in June 2021 with Ilbey Evcil, Burak Kaan Kahraman, and Muhammed Didin at **Middle East Technical University Northern Cyprus Campus**, investigated how these practices could be represented through measurable repository indicators. The work was supervised by Dr. Sukru Eraslan.

## Research objective

The project examined how issue-tracking activity can be transformed into interpretable profiles of software-development practice. Its goal was to move from dispersed GitHub records to a structured set of metrics and questions that can help characterize how consistently a team uses its issue tracker.

The intended outcome was practical as well as analytical. The resulting framework could support researchers studying software processes and provide smaller teams or learners with guidance on issue-tracking practices that are often left implicit.

## Analytical framework

The study considered several dimensions of issue-tracking behavior:

- the balance between opened and closed issues,
- distribution of issues and comments across contributors,
- use and consistency of labels,
- assignment of responsibility,
- response and issue-completion times,
- milestone adoption and completion behavior,
- communication after an issue has been closed.

These measures were complemented by process questions such as whether labels are used consistently, whether responsibilities are distributed across contributors, and whether milestone-based issues are completed differently from issues without milestones.

## Method and research tool

To make the framework executable, the thesis team developed a Python research tool that retrieves GitHub repository data, stores it for repeatable analysis, calculates selected metrics, answers structured process questions, and visualizes the findings. Results can also be exported to CSV for further analysis.

The method follows five stages:

1. collect repository and issue-tracking data through the GitHub API,
2. derive quantitative indicators from issues, contributors, labels, comments, assignees, and milestones,
3. evaluate practice-oriented questions against the observed activity,
4. inspect the outputs as visualizations, tables, and summary measures,
5. export the results for comparison and profile development.

## Contribution

The main contribution is an operational bridge between software-process questions and observable repository data. Instead of relying only on general recommendations, the framework makes issue-tracking behavior inspectable through explicit metrics and repeatable calculations.

The thesis also produced a working desktop application rather than only a conceptual model. The engineering implementation is described separately on the [project page]({{ '/projects/issue-tracking-team-analytics/' | relative_url }}), where the focus is on the GitHub integration, desktop workflow, visualization, and export pipeline.

## Main takeaway

Issue-tracking quality is visible in the structure and timing of repository activity. By translating that activity into a consistent analytical framework, teams and researchers can evaluate practices that would otherwise remain informal and difficult to compare.
