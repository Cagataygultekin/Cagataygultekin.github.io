---
layout: page
lang: en
translation_key: earlier-projects
title: earlier projects
permalink: /projects/earlier/
description: Selected earlier work in software analytics, relational database engineering, and application development.
nav: false
---

<p>
  Selected projects from my Computer Engineering studies that established the foundations for my later work in software systems, data engineering, and applied machine learning.
</p>

<div class="projects mt-4">
  {% assign earlier_projects = site.projects | where: "category", "earlier" | where: "lang", page.lang | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in earlier_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

<div class="text-center mt-4">
  <a class="btn btn-outline-primary" href="{{ '/projects/' | relative_url }}">
    <i class="fa-solid fa-arrow-left mr-2"></i> Back to selected projects
  </a>
</div>
