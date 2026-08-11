---
layout: page
published: true
title: Career Diaries University Community Platform
description: A relational platform connecting students, alumni, faculty, courses, publications, and career questions through a multi-role identity model.
img: assets/img/projects/career-diaries/career-diaries-platform.png
importance: 10
category: professional
technologies: [Relational Databases, EER Modeling, SQL, Role-Based Data Model, Full-Stack Design]
permalink: /projects/career-diaries-community-platform/
---

**Career Diaries** was a comprehensive university community and alumni platform designed to help people share professional experiences, discover academic connections, and ask career-related questions. I worked on the system from requirements analysis through database and interface implementation.

The project went beyond a conventional alumni directory. Its data model recognized that university identities overlap. A person could be a bachelor's alumnus, a current master's student, and a university employee at the same time. These relationships needed to coexist without duplicating the person or reducing them to a single role.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Multi-role identity</h3>
      <p class="mb-0">Represented students, alumni, faculty, and employees through roles that could overlap over time.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Academic relationships</h3>
      <p class="mb-0">Connected faculty members with courses, publications, programs, and community profiles.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">End-to-end design</h3>
      <p class="mb-0">Covered requirements, EER modeling, relational schema design, implementation, and interface workflows.</p>
    </div>
  </div>
</div>

## Designing a richer university data model

The platform organized several connected domains:

- people and their simultaneous roles,
- degree programs and education history,
- student and alumni status,
- faculty profiles and the courses they teach,
- faculty publications,
- career experiences and community questions,
- relationships between current students and alumni.

This required more than a single user table with a role column. The EER model separated identity from role-specific information and supported many-to-many relationships between people, programs, courses, and publications.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/career-diaries/career-diaries-platform.png" title="Conceptual Career Diaries community platform" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A portfolio reconstruction of the platform concept. The profile demonstrates how one account can hold multiple roles while remaining connected to courses, publications, and career questions.
</div>

## User workflows

The interface was designed to let users:

1. discover alumni and current students through shared academic relationships,
2. maintain multiple university roles within one identity,
3. explore faculty pages, courses, and publications,
4. share career experiences,
5. ask alumni questions about professional paths and further study.

Faculty profiles were not isolated directory entries. They were linked to the courses they taught and the papers they published, making the platform useful for both career exploration and academic discovery.

## Database engineering

I worked through the complete relational database lifecycle:

- requirement analysis,
- entity and relationship identification,
- EER diagram design,
- relational schema transformation,
- database implementation,
- interface integration.

The multi-role model was the most important part of the design. It kept shared identity data consistent while allowing each role to carry its own relationships and attributes.

## Core stack and methods

`Relational databases` · `SQL` · `EER modeling` · `Schema design` · `Data normalization` · `Role modeling` · `Interface implementation`

## Project context

Career Diaries was completed during my Computer Engineering studies at **Middle East Technical University Northern Cyprus Campus**. The original application is not public, so the visual on this page reconstructs the product concept without reproducing its original interface or data.
