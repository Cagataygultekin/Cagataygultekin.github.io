---
layout: page
published: true
title: Sprint Reporting and Productivity Workflow
description: A full-stack internal workflow that improved sprint-data quality and turned team inputs into consistent newsletters and monthly productivity reporting.
img: assets/img/projects/ykt/sprint-reporting-workflow.png
importance: 7
category: professional
technologies: [Java + Spring Boot, React, Jira API, Workflow Automation, Reporting]
permalink: /projects/sprint-reporting-productivity-workflow/
---

{% include project_context.liquid role="Software Engineer Intern" organization="Yapı Kredi Teknoloji A.Ş." period="Jul 2021 to Sep 2021" project_type="Internal team project" visibility="Internal, conceptual reconstruction" %}

At **Yapı Kredi Teknoloji A.Ş.**, I worked on an internal full-stack application for agile teams. The system connected team-maintained sprint information with project-management data and turned it into structured sprint newsletters and monthly productivity views.

The central problem was data quality. Employees documented details such as tags, expected duration, and whether a task had received an extension. When these fields were missing or entered inconsistently, the resulting reports were incomplete and comparisons between teams or periods became less reliable.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Consistent inputs</h3>
      <p class="mb-0">Made incomplete or inconsistent sprint metadata easier to identify before it affected downstream reporting.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Automated newsletters</h3>
      <p class="mb-0">Combined structured team inputs with Jira data to reduce the manual work behind sprint summaries.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Monthly visibility</h3>
      <p class="mb-0">Organized results into recurring views that made productivity patterns and reporting gaps easier to review.</p>
    </div>
  </div>
</div>

## The operational problem

Sprint reporting depended on information entered by many people. The individual fields looked simple, but the quality of the final newsletter depended on every contributor using the same tags, recording realistic durations, and updating extension information correctly.

The application provided a more controlled path from those distributed inputs to a reusable report. The aim was not only to produce a newsletter, but also to improve the reliability of the source data and make recurring monthly results more useful.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/ykt/sprint-reporting-workflow.png" title="Conceptual sprint reporting and productivity workflow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Conceptual reconstruction of the workflow, not an original company interface. Team-entered sprint metadata passes through data-quality checks, is combined with project-management information, and becomes a newsletter and monthly productivity view.
</div>

## From team input to monthly reporting

The workflow brought several steps into one application:

1. Employees maintained sprint details in Confluence, including categorization tags, planned duration, and extension information.
2. The Java/Spring Boot backend integrated with the Atlassian Jira API to retrieve relevant sprint and work-item data.
3. The application organized the combined information into a consistent structure and made missing or incompatible values visible.
4. Front-end views supported the review of sprint content before it was used in communication.
5. The prepared data was turned into sprint newsletters and aggregated into monthly productivity results.

This separation mattered because it kept collection, validation, presentation, and reporting as distinct responsibilities. A reporting problem could be traced back to its input instead of being corrected manually in the final newsletter.

## Full-stack implementation

I worked across the Java/Spring Boot backend and React and Angular front-end components. The backend handled integration and report-oriented data preparation, while the user-facing layers presented sprint details in a form that teams could review and use.

The project gave me practical experience with an internal application whose value depended on adoption and data discipline, not only on technical correctness. The interface had to make the expected inputs understandable, and the backend had to preserve enough structure for recurring reports.

Alongside the main application, I also contributed to PL/SQL automation tools used in related internal workflows.

## Outcome

The resulting workflow reduced the distance between day-to-day sprint administration and management reporting. It helped teams identify data-quality issues earlier, automated repeated newsletter preparation steps, and provided a clearer basis for reviewing monthly productivity results.

## Technical stack

`Java` · `Spring Boot` · `React` · `Angular` · `Atlassian Jira API` · `Confluence` · `REST` · `PL/SQL` · `Full-stack development`

## Project context

I completed this work during my Software Engineer Internship at **Yapı Kredi Teknoloji A.Ş.** from July to September 2021. The project was an internal company system, so its source code and original interface are not public. The illustration on this page was created to explain the workflow without reproducing proprietary material.
