---
layout: page
published: true
title: Historical Company Registry Data Platform
description: A FastAPI backend for retrieving, normalizing, storing, and searching current and historical data from the Danish Business Register.
img: assets/img/projects/legalian/registry-data-platform.png
importance: 2
category: professional
permalink: /projects/company-registry-data-platform/
github: https://github.com/Cagataygultekin/danish-business-register
---

I built a backend platform at **Legalian GmbH** that turns complex data from the Danish Business Register into structured, queryable information for compliance workflows. The system retrieves current and historical company data through system-to-system access, normalizes inconsistent nested responses, and preserves ownership relationships over time.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3">
    <h3>Current + historical</h3>
    <p class="mb-0">registry states retained in one structured data layer</p>
  </div>
  <div class="col-sm-4 mb-3">
    <h3>3 core domains</h3>
    <p class="mb-0">companies, production units, and ownership records</p>
  </div>
  <div class="col-sm-4 mb-3">
    <h3>&lt; 1 second</h3>
    <p class="mb-0">typical response time in the documented test scenarios</p>
  </div>
</div>

## The engineering problem

The public CVR interface is useful for checking a company in its current state, but compliance work often depends on what changed before that point. Ownership relationships begin and end, company details evolve, and legal structures can be reorganized. A current snapshot alone does not provide that history.

The system therefore needed to do more than proxy an external API. It had to:

- Access both near real-time and historical registry data
- Handle deeply nested and inconsistent JSON structures
- Model company, production unit, and ownership records relationally
- Preserve active and terminated ownership relationships
- Support exact lookups as well as flexible company search
- Remain reliable under authentication restrictions, rate limits, and missing fields
- Provide reproducible deployment and clear operational documentation

## What I delivered

- A FastAPI microservice integrating with the Danish Business Authority's CVR system-to-system API
- Authenticated endpoints for company search, general company information, ownership details, key individuals, and document retrieval
- Parsing and validation logic for optional, incomplete, and structurally different API responses
- A MySQL data model covering companies, production units, and ownership history
- Elasticsearch-backed search for partial names and flexible registry lookup
- Secure configuration through environment variables and protected application endpoints
- A Selenium workflow for company PDF retrieval where a direct API route was not available
- Docker-based setup and technical documentation for deployment and handover

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/legalian/registry-data-platform.png" title="Architecture of the historical company registry data platform" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The FastAPI layer coordinates authenticated CVR requests, defensive parsing, relational storage, and search. Historical ownership data remains queryable instead of being overwritten by the latest registry response.
</div>

## Designing for history, not only the latest response

The most important design decision was to treat registry data as a timeline rather than a single company object. I created separate relational structures for:

- **Companies:** CVR number, registered name, address, status, business type, and start date
- **Production units:** operating-unit details, industry classification, employee counts, and the related company
- **Ownership:** legal owners, beneficial owners, terminated owners, ownership percentages, voting percentages, and relationship dates

Both active and terminated ownership records are retained. The platform does not infer that a change occurred by itself. Instead, it stores the underlying start and end dates so a user can reconstruct the ownership state at a chosen point in time and see when a relationship appeared or ended.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/legalian/ownership-history-model.png" title="Relational data model and historical ownership timeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Separate company, production-unit, and ownership records make historical relationships explicit. An ended relationship remains part of the data model and can still be used during a later compliance review.
</div>

## Building a resilient integration layer

CVR responses differ between company types and frequently contain optional or missing fields. I implemented defensive parsers that extract relevant values, normalize nested objects, validate the result, and return consistent response structures. This kept API consumers independent from many irregularities in the upstream format.

The service also accounted for operational failure modes:

- Authentication credentials were loaded from environment variables rather than embedded in code.
- API failures and rate-limit conditions were handled without crashing the application flow.
- Edge cases included companies without owners, terminated relationships, international connections, and large ownership structures.
- Endpoint and data-validation tests covered successful responses, incomplete data, error handling, and performance behavior.

## Search and document workflows

The API supports direct lookups by CVR number as well as partial-name searches. Elasticsearch provides a flexible search layer over company data, while the relational database remains the structured source for company details and historical relationships.

Company documents required a different integration path. Because document downloads were exposed through a browser flow with automation restrictions, I implemented a Selenium-based process that opens the relevant CVR page, triggers the download, monitors completion, and returns the resulting file metadata. I documented the required Chrome and ChromeDriver compatibility so the workflow could be reproduced in another environment.

## Delivery and outcome

I owned the backend design and implementation from external API research through data modeling, endpoint development, testing, containerization, and documentation. The result was a reusable company-data service rather than a collection of one-off registry requests.

The platform established a practical foundation for compliance workflows that need to combine current company information with historical ownership context. It also separated external registry complexity from internal consumers, making future reporting, due-diligence, and business-intelligence features easier to build.

## Technical stack

`Python` · `FastAPI` · `REST` · `MySQL` · `Elasticsearch` · `pandas` · `Pydantic` · `Docker` · `Selenium` · `JWT` · `Environment-based configuration`

## Project context

I delivered this system at **Legalian GmbH** as part of an interdisciplinary software engineering project focused on compliance automation under the German Money Laundering Act.

<div class="mt-4">
  <a class="btn btn-sm btn-primary" href="https://github.com/Cagataygultekin/danish-business-register" target="_blank" rel="noopener">View source code on GitHub</a>
</div>
