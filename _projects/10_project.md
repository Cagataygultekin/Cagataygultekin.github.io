---
layout: page
published: true
title: Career Diaries Multi-Role Career Community
description: A Python/Tkinter and MySQL application connecting students, alumni, academics, workplaces, and career reviews through a multi-role relational model.
img: assets/img/projects/career-diaries/career-diaries-platform.png
importance: 10
category: professional
technologies: [Python, Tkinter, MySQL, EER Modeling, Database Normalization, SQL Query Design]
permalink: /projects/career-diaries-community-platform/
---

**Career Diaries** was a career community application for connecting undergraduate students with alumni, graduate students, academics, and professionals. In a two-person team, I co-designed and implemented the system from requirements analysis and EER modeling through SQL development and a working Python desktop interface.

The project went beyond a conventional alumni directory. Its data model recognized that professional and academic identities overlap. An alumnus could be a graduate student and an industry professional at the same time. The system preserved one shared identity while storing the relationships and attributes specific to each role.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Multi-role identity</h3>
      <p class="mb-0">Represented undergraduate students, alumni, graduate students, academics, and industry professionals without duplicating shared identity data.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Relational design</h3>
      <p class="mb-0">Mapped specializations, one-to-many relationships, many-to-many relationships, and multivalued attributes from an EER model into SQL tables.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Working application</h3>
      <p class="mb-0">Delivered account, search, review, workplace, settings, update, and deletion workflows through a Python/Tkinter interface backed by MySQL.</p>
    </div>
  </div>
</div>

## Designing the data model

The platform organized several connected domains:

- people and their simultaneous roles,
- academic programs and education history,
- graduate supervision, assisted courses, research areas, and papers,
- industry roles, workplaces, job types, and experience levels,
- workplace reviews with ratings, comments, and job context,
- companies, schools, departments, and societies,
- administrators and auditable user blocking relationships.

This required more than a single user table with a role column. The EER model separated common user data from role-specific entities, supported overlapping alumni roles, and captured the relationships between people, workplaces, schools, reviews, and administrators.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/career-diaries/career-diaries-platform.png" title="Conceptual Career Diaries community platform" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A portfolio reconstruction of the platform concept. The profile demonstrates how one identity can hold multiple academic and professional roles while remaining connected to workplaces, courses, publications, and reviews.
</div>

## From model to working workflows

The application implemented the main data lifecycle through a Python/Tkinter desktop interface:

1. create and authenticate user accounts,
2. capture role-specific data for undergraduate students, alumni, graduate students, academics, and industry professionals,
3. create schools, companies, and other workplaces,
4. add workplace reviews with ratings and professional context,
5. filter and query data across academic and career relationships,
6. update settings and related records,
7. delete accounts and dependent records while preserving referential integrity.

The search workflows turned the relational model into practical questions. Examples included finding professionals at large companies, reviewing feedback from software engineers with a specific academic background, locating academic members by department and research area, and exploring school societies.

## Database engineering

The database work covered the complete relational lifecycle:

- requirements and transaction analysis,
- EER diagram design,
- mapping specializations and relationships into tables,
- functional dependency analysis,
- normalization through BCNF,
- targeted denormalization where additional joins would add unnecessary cost,
- primary and foreign key design with cascading updates and deletions,
- SQL data creation, manipulation, deletion, and multi-table query development.

The multi-role model was the central design challenge. It kept shared user data consistent while allowing graduate student, academic, and industry-specific information to evolve independently. The implementation also treated administration as part of the data model, including the reason and start date for an account block and the administrator responsible for it.

## Core stack and methods

`Python` / `Tkinter` / `MySQL` / `SQL` / `EER modeling` / `BCNF normalization` / `Referential integrity` / `Desktop application workflows`

## Project context

Career Diaries was completed during my Computer Engineering studies at **Middle East Technical University Northern Cyprus Campus**. The original application and database are not public, so the visual on this page reconstructs the product concept without reproducing the original interface or data.
