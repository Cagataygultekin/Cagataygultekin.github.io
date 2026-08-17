---
layout: page
lang: de
translation_key: earlier-projects
title: frühere Projekte
permalink: /de/projects/earlier/
description: Ausgewählte frühere Arbeiten aus Softwareanalyse, relationalem Datenbankentwurf und Anwendungsentwicklung.
nav: false
---

<p>
  Ausgewählte Projekte aus meinem Computer-Engineering-Studium, die die Grundlage für meine spätere Arbeit an Softwaresystemen, Data Engineering und angewandtem Machine Learning bildeten.
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
  <a class="btn btn-outline-primary" href="{{ '/de/projects/' | relative_url }}">
    <i class="fa-solid fa-arrow-left mr-2"></i> Zurück zu den ausgewählten Projekten
  </a>
</div>
