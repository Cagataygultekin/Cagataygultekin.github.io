---
layout: page
published: true
title: Legal AI Data Labelling Platform
description: A React/TypeScript and Flask platform for document upload, OCR, ML-assisted classification, annotation workflows, and secure access to protected legal-data services.
img: assets/img/projects/legal-ai/figma-overview.png
importance: 8
category: professional
permalink: /projects/legal-ai-data-labelling-platform/
---

At **Legalian GmbH**, I worked on an internal platform for extracting, classifying, reviewing, and labelling information from legal documents. The project addressed a recurring legal-tech problem: large document collections contain valuable structured data, but manual extraction and categorization are slow, inconsistent, and difficult to scale.

The solution evolved from an early Expo-based UI prototype into a React/TypeScript web application with a Flask backend. That transition allowed us to validate the annotation workflow quickly and then rebuild it around clearer frontend, backend, security, and deployment boundaries.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Two architecture phases</h3>
      <p class="mb-0">Moved from rapid Expo prototyping to a structured React/TypeScript and Flask web platform.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Secure service access</h3>
      <p class="mb-0">Used signed JWT requests and a Flask gateway to reach protected OCR and ML services.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Single and batch workflows</h3>
      <p class="mb-0">Supported document review, drag-and-drop upload, ZIP preprocessing, classification, and annotation.</p>
    </div>
  </div>
</div>

## The product problem

Legal professionals need to identify people, companies, ownership relationships, dates, addresses, and other structured entities inside documents whose layouts vary substantially. A useful labelling tool therefore needs to combine automated extraction with a review interface that keeps the original document and the structured result visible together.

The platform was designed to support the full flow:

1. upload individual documents or ZIP batches,
2. preprocess files and run OCR,
3. classify documents and extracted entities,
4. review and correct labels through an annotation interface,
5. store structured results and document metadata securely.

## Phase 1: validating the interaction model

The first implementation used Expo and React Native to test navigation, document display, category selection, and basic labelling interactions. Figma designs helped the team discuss workflows before committing to the final architecture.

<div class="row">
  <div class="col-md-6 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/figma-overview.png" title="Early Figma overview of datasets and annotation screens" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/figma-upload.png" title="Early drag-and-drop upload workflow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Early Figma prototypes used to validate navigation, dataset selection, preprocessing, and upload flows. These are design artifacts rather than screenshots of the final application.
</div>

This phase emphasized speed of learning. It helped identify what a document labelling workflow should feel like before the system was expanded into a more maintainable web architecture.

## Phase 2: structured full-stack architecture

The platform was rebuilt with a clearer separation of responsibilities.

### React and TypeScript frontend

The web interface included routes and components for:

- drag-and-drop document and ZIP upload,
- dataset and document listing,
- OCR-result visualization,
- bulk classification,
- document-level annotation,
- label validation and user feedback.

TypeScript provided stronger contracts for complex annotation data and API responses. The UI followed the Figma workflows while moving from exploratory screens toward reusable components.

<div class="row">
  <div class="col-md-6 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/figma-dataset.png" title="Figma dataset and document-listing view" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/figma-settings.png" title="Figma service-account configuration view" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The dataset concept provides a simple route from an uploaded file to document review. A separate settings view keeps service-account configuration outside the annotation workspace.
</div>

### Flask gateway and protected ML services

The Flask backend acted as a secure orchestration layer between the frontend and protected OCR and machine-learning services. It generated signed JWT tokens from service-account credentials, called secured gateway endpoints, handled OCR and ZIP-preprocessing requests, and returned structured responses to the frontend.

Keeping the ML services behind a dedicated gateway improved credential isolation and prevented the frontend from depending directly on protected infrastructure. It also centralized authentication, authorization, error handling, and API behavior.

### Data management

The system was designed around a structured MySQL data model for user inputs, document metadata, extracted entities, and classification results. Raw and processed information were separated so that the original document context could be retained while normalized results remained queryable.

## Security, testing, and deployment

Legal data requires controlled access and predictable processing. The engineering work therefore included:

- JWT-based authentication and authorization,
- input validation and structured error handling,
- unit and integration testing for processing and API flows,
- Docker and Docker Compose for reproducible frontend and backend environments,
- preparation for CI/CD-based testing and deployment.

## Outcome

The project produced an end-to-end workflow for document upload, OCR, ML-assisted classification, annotation, and secure service integration. My contribution spanned both architectural phases, from rapid UI validation to the React/TypeScript frontend, Flask gateway, frontend-backend contracts, Docker setup, and secure API integration.

The most valuable engineering lesson was knowing when to stop extending a prototype and introduce stronger separation of concerns. The rebuild made the system easier to reason about and provided a clearer foundation for annotation-heavy legal workflows.

## Technical stack

`React` · `TypeScript` · `Expo` · `React Native` · `Flask` · `REST APIs` · `JWT` · `Google service accounts` · `OCR` · `ML-assisted classification` · `MySQL` · `Figma` · `Docker Compose` · `CI/CD`

## Project context

I worked on the platform from March to June 2024 as part of an interdisciplinary project with **Legalian GmbH**. It preceded my later Danish Business Register work at the company. The source code and final application are internal, so this page uses early Figma designs to explain the workflow without exposing proprietary implementation details or legal data.
