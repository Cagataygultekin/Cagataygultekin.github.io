---
layout: page
lang: en
translation_key: project-legal-ai
published: true
title: Legal AI Data Labelling Platform
description: A React/TypeScript and Flask platform for document upload, OCR, ML-assisted classification, annotation workflows, and secure access to protected legal-data services.
img: assets/img/projects/legal-ai/legal-ai-dashboard-v2.png
importance: 5
category: professional
technologies: [React + TypeScript, Flask, OCR Workflows, JWT Security, Docker]
permalink: /projects/legal-ai-data-labelling-platform/
---

In collaboration with **Legalian GmbH**, I worked on an internal platform for extracting, classifying, reviewing, and labelling information from legal documents. The project addressed a recurring legal-tech problem: large document collections contain valuable structured data, while manual extraction and categorization are slow, inconsistent, and difficult to scale.

I worked across two architectural phases. The platform began with an Expo-based interface prototype used to explore the annotation workflow and later moved to a React/TypeScript web application supported by a Flask backend. My work covered interface prototyping, frontend development, backend integration, frontend-backend contracts, Docker-based setup, and secure access to protected OCR and machine-learning services.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Two architecture phases</h3>
      <p class="mb-0">Worked across the transition from rapid Expo prototyping to a structured React/TypeScript and Flask web platform.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Secure service integration</h3>
      <p class="mb-0">Integrated signed JWT requests and a Flask gateway with protected OCR and machine-learning services.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Single and batch workflows</h3>
      <p class="mb-0">Worked on document review, drag-and-drop upload, ZIP preprocessing, classification, and annotation workflows.</p>
    </div>
  </div>
</div>

## The product problem

Legal professionals need to identify people, companies, ownership relationships, dates, addresses, and other structured entities inside documents with substantially different layouts. Automating this process requires more than extracting text. The original document, predicted entities, classification results, and human corrections must remain connected throughout the review process.

The platform supported a workflow for:

1. uploading individual documents or ZIP batches,
2. preprocessing files and running OCR,
3. classifying documents and extracted entities,
4. reviewing and correcting labels through an annotation interface,
5. storing structured results and document metadata securely.

## Phase 1: validating the interaction model

I worked with an Expo and React Native implementation to explore navigation, document display, category selection, and initial labelling interactions. We used Figma designs to evaluate the workflow and discuss interface decisions before moving toward a more structured web architecture.

<div class="row">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/legal-ai-dashboard-v2.png" title="Reconstructed Legal AI dataset and processing dashboard" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A polished portfolio reconstruction based on the early Figma workflow. It explains dataset navigation, upload, processing status, and review queues without reproducing the original company interface or personal document data.
</div>

This phase made it possible to test how users would move between datasets, documents, classification results, and annotation tasks. It also helped identify the interaction patterns that needed to be preserved when the platform architecture changed.

## Phase 2: structured full-stack architecture

I subsequently worked on the platform's transition to a React/TypeScript frontend supported by a Flask backend. This architecture introduced clearer boundaries between the user interface, application logic, authentication, document processing, and protected machine-learning services.

### React and TypeScript frontend

My frontend work covered routes and reusable components for:

- drag-and-drop document and ZIP upload,
- dataset and document listing,
- OCR-result visualization,
- bulk classification,
- document-level annotation,
- label validation and user feedback.

TypeScript provided stronger contracts for complex annotation data and API responses. The interface followed the established Figma workflows while replacing exploratory screens with more reusable and maintainable components.

<div class="row">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/legal-ai-annotation-workspace-v2.png" title="Reconstructed document annotation and validation workspace" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The reconstructed review workspace keeps the source document, extracted fields, confidence values, validation state, and page navigation visible together. All displayed document content is synthetic and anonymous.
</div>

### Flask gateway and protected ML services

I worked on integrating the frontend with protected OCR and machine-learning services through a Flask gateway. The backend generated signed JWT tokens from service-account credentials, called secured gateway endpoints, handled OCR and ZIP-preprocessing requests, and returned structured responses to the frontend.

Keeping protected services behind the Flask gateway isolated credentials from the browser and prevented the frontend from depending directly on internal infrastructure. It also provided a central integration point for authentication, authorization, error handling, and API behavior.

### Data management

The architecture used a structured MySQL data model for user inputs, document metadata, extracted entities, and classification results. Raw document context and processed information were handled separately, allowing normalized results to remain queryable without losing their connection to the original documents.

## Security, testing, and deployment

Because the platform handled legal documents and protected services, my work also involved:

- JWT-based authentication and authorization,
- input validation and structured error handling,
- unit and integration testing for processing and API flows,
- Docker and Docker Compose environments for the frontend and backend,
- preparation for CI/CD-based testing and deployment.

## Outcome

I worked across the platform's prototype and full-stack development phases, contributing to the interaction model, React/TypeScript frontend, Flask gateway integration, frontend-backend contracts, Docker setup, and secure API access.

Together, these components supported document upload, OCR, ML-assisted classification, annotation, and secure service integration. The work gave me practical experience in evolving an exploratory prototype into a more structured application while preserving the workflows already validated through the initial interface.

The most valuable engineering lesson was recognizing when rapid prototyping had served its purpose and stronger separation between the frontend, backend, security, and processing layers had become necessary.

## Technical stack

`React` · `TypeScript` · `Expo` · `React Native` · `Flask` · `REST APIs` · `JWT` · `Google service accounts` · `OCR` · `ML-assisted classification` · `MySQL` · `Figma` · `Docker Compose` · `CI/CD`

## Project context

I worked on the platform from March to June 2024. The source code and internal application are not public, so this page uses portfolio reconstructions to explain the product without exposing proprietary implementation details or legal data.
