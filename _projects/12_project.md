---
layout: page
published: true
title: Java/Spring E-commerce Service and Desktop Client
description: A Java/Spring web service with a GUI desktop client for browsing and managing computer and phone products.
importance: 12
category: earlier
technologies: [Java, Spring, Spring Web, Spring Data JPA, Lombok, MySQL]
visual: ecommerce-service
visual_icon: fa-solid fa-cart-shopping
visual_kicker: Service-oriented application
visual_label: Web Service and GUI Client
permalink: /projects/java-spring-ecommerce-service/
---

This project implemented an e-commerce system for selling computers and phones through two connected application layers: a Java/Spring web service and a GUI desktop client that consumed the service.

## Service and client separation

The architecture separated product and persistence operations from the user-facing application. The web service exposed machine-to-machine functionality over the network, while the desktop client used that service to support the e-commerce workflow.

This separation kept the interface independent from direct database access and provided a clear boundary between presentation, application logic, and persistence.

## Backend and persistence

The implementation used:

- **Java and Spring** for the application structure,
- **Spring Web** for the network-facing service layer,
- **Spring Data JPA** for persistence operations,
- **MySQL** as the relational database,
- **Lombok** to reduce repetitive Java model code.

The project gave me early practical experience with service-oriented design, object-relational persistence, dependency-based Java development, and the interaction between a backend service and a separate client application.

## Core stack

`Java` / `Spring` / `Spring Web` / `Spring Data JPA` / `Lombok` / `MySQL` / `Desktop client integration`

## Project context

This application was completed during my Computer Engineering studies at **Middle East Technical University Northern Cyprus Campus**. The source code is not currently public.
