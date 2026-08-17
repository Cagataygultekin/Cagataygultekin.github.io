---
layout: page
lang: de
translation_key: projects
title: Projekte
permalink: /de/projects/
description: Ausgewählte Projekte aus Software Engineering, Machine Learning und Scientific Computing.
nav: true
nav_order: 2
display_categories: [professional]
horizontal: false
---

<div class="projects">
{% for category in page.display_categories %}
  {% assign categorized_projects = site.projects | where: "category", category | where: "lang", page.lang %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endfor %}
</div>

{% assign earlier_projects = site.projects | where: "category", "earlier" | where: "lang", page.lang %}
{% if earlier_projects.size > 0 %}
  <div class="earlier-projects-cta mt-4">
    <a class="btn btn-outline-primary" href="{{ '/de/projects/earlier/' | relative_url }}">
      Frühere Projekte <i class="fa-solid fa-arrow-right ml-2"></i>
    </a>
  </div>
{% endif %}
