---
layout: page
published: true
title: E-commerce Web Service and Desktop Client
description: A Spring Boot and MySQL product platform with a separate desktop client for computer and phone catalogue workflows.
importance: 12
category: earlier
technologies: [Java, Spring Boot, REST API, Spring Data JPA, MySQL]
github: https://github.com/457Proje-CSS/team6-cng457--webservice
visual: ecommerce-service
visual_icon: fa-solid fa-cart-shopping
visual_kicker: Service-oriented application
visual_label: Web Service and GUI Client
permalink: /projects/java-spring-ecommerce-service/
---

This project implemented an e-commerce product platform as two connected applications: a Spring Boot web service and a separate GUI desktop client that consumed the service. The system represented computers and phones together with reviews and configurable extra features.

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="https://github.com/457Proje-CSS/team6-cng457--webservice" target="_blank" rel="noopener">
    <i class="fa-brands fa-github"></i>&nbsp; Backend repository
  </a>
  <a class="btn btn-outline-primary mb-2" href="https://github.com/457Proje-CSS/team-6--cng457-desktopapp" target="_blank" rel="noopener">
    <i class="fa-brands fa-github"></i>&nbsp; Desktop client repository
  </a>
</div>

## Service-oriented architecture

The architecture kept presentation concerns out of the persistence layer. The backend exposed product operations over HTTP, while the desktop application acted as an independent consumer. This provided a clear boundary between user interaction, application logic, and database access.

The backend followed a layered Spring structure:

- controllers exposed operations for computers, phones, reviews, and extra features,
- services contained the application logic,
- Spring Data repositories handled persistence,
- JPA entities represented the product domain,
- MySQL provided relational storage.

## Product model and testing

Computers and phones were modeled as product types with supporting review and feature data. Controller and service tests covered the main computer and phone workflows, giving the project an early quality-assurance layer in addition to its application functionality.

The desktop client consumed the backend instead of connecting directly to the database. This separation made the system easier to reason about and provided practical experience with client-server integration, HTTP-based application boundaries, and persistence-backed Java development.

## Core stack

`Java` / `Spring Boot` / `Spring Web` / `Spring Data JPA` / `MySQL` / `Lombok` / `Desktop client integration`
