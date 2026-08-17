---
layout: page
lang: tr
translation_key: earlier-projects
title: önceki projeler
permalink: /tr/projects/earlier/
description: Yazılım analitiği, ilişkisel veri tabanı mühendisliği ve uygulama geliştirme alanlarından seçili önceki çalışmalar.
nav: false
---

<p>
  Bilgisayar Mühendisliği eğitimim sırasında gerçekleştirdiğim ve daha sonraki yazılım sistemleri, veri mühendisliği ve uygulamalı makine öğrenmesi çalışmalarımın temelini oluşturan seçili projeler.
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
  <a class="btn btn-outline-primary" href="{{ '/tr/projects/' | relative_url }}">
    <i class="fa-solid fa-arrow-left mr-2"></i> Seçili projelere dön
  </a>
</div>
