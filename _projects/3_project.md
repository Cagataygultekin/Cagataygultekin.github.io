---
layout: page
lang: en
translation_key: project-antipattern
published: true
title: Java Performance Anti-Pattern Analyzer
description: A static and dynamic analysis tool that traces repository calls through Java call chains and delivers severity-ranked findings inside IntelliJ IDEA.
img: assets/img/projects/itestra/anti-pattern-analysis-pipeline.png
importance: 3
category: professional
technologies: [Java, Static Analysis, Eclipse JDT, Call Graphs, IntelliJ Plugin]
permalink: /projects/java-performance-antipattern-analyzer/
github: https://github.com/DigitalProductInnovationAndDevelopment/Anti-Pattern-Analysis
---

I worked at **itestra GmbH** on a developer tool for detecting performance anti-patterns in enterprise Java applications. The main target was a common but costly pattern: repository or database calls executed repeatedly from inside a loop, including cases where the loop and the database call are separated by several method calls.

The delivered system combines source-code structure with optional runtime sampling and exposes the result through an IntelliJ IDEA plugin. Developers receive a structured finding with the affected call path, source location, analysis type, execution time, and severity.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3">
    <h3>Java 17</h3>
    <p class="mb-0">standalone analysis engine built with Eclipse JDT</p>
  </div>
  <div class="col-sm-4 mb-3">
    <h3>2 analysis layers</h3>
    <p class="mb-0">static call-chain detection and runtime validation</p>
  </div>
  <div class="col-sm-4 mb-3">
    <h3>In-IDE delivery</h3>
    <p class="mb-0">configuration and execution through an IntelliJ plugin</p>
  </div>
</div>

## The engineering problem

A simple rule can flag a direct database call written inside a visible loop. Real enterprise code is less direct. A service method may call another service, which calls a helper, which eventually reaches a Hibernate repository method. Looking only at one method body misses these indirect paths and produces false negatives.

The tool therefore needed to answer several questions together:

1. Which methods exist in the project, and which methods invoke each other?
2. Does a configured database or third-party method appear anywhere in a call chain?
3. Was that call reached from a loop in an upstream method?
4. Does runtime sampling support the static finding?
5. How can the result be delivered inside the developer's normal IDE workflow?

## What I delivered

- Java source parsing and AST generation with Eclipse JDT
- Method collection, invocation extraction, and call-graph construction
- Multi-level call-chain tracing across indirect method relationships
- Detection of loop contexts that lead to configured repository methods
- Structured JSON output with source location, invoked sub-method details, analysis type, and severity
- Optional dynamic analysis based on sampled execution-time snapshots
- Controlled test repositories for direct-loop, method-chain, and stream scenarios
- An IntelliJ IDEA plugin written in Kotlin for local configuration and execution
- CI-driven regression testing, pull-request reviews, and separate tool and plugin delivery workflows

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/itestra/anti-pattern-analysis-pipeline.png" title="Static and dynamic analysis pipeline with IntelliJ delivery" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Java source is converted into ASTs and a project-level call graph. Static findings can be enriched with runtime snapshot data before they are returned to the developer through the IntelliJ workflow.
</div>

## Static analysis beyond the current method

The analysis engine begins by parsing Java compilation units with Eclipse JDT. It collects method declarations, extracts invocations, and builds a project-level call graph. Repository or other third-party methods are supplied through configuration so the rule can be adapted to the codebase being analyzed.

The call-chain analyzer then traces paths toward those configured methods. For each path, it checks whether an upstream method invokes its child from inside a loop. This makes it possible to detect a pattern such as:

`updateCatalog()` -> `syncInventory()` -> loop -> `persistProduct()` -> `repository.save()`

even when the database call is not written directly in the method that contains the loop.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/itestra/call-chain-detection.png" title="Multi-level call-chain tracing from a loop to a repository method" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The analyzer preserves the full path from the entry method to the configured database call. This provides more useful feedback than a rule that only marks the final repository invocation.
</div>

## Combining static structure with runtime evidence

Static analysis identifies a risky structure, but it cannot determine the real execution cost by itself. I also worked with a dynamic-analysis layer that reads sampled method-execution data from CSV snapshots. When runtime data is provided, the analyzer compares average execution time with a configurable threshold and upgrades the finding from static-only to a combined result.

The structured output records:

- Entry method and declaring class
- Source line and column
- Invoked repository method and the loop-containing method
- Static or combined analysis type
- Measured execution time when sampling data is available
- Severity derived from the runtime threshold

This separation keeps the tool useful in two modes. It can run with source code alone, or it can enrich the same structural analysis with runtime measurements captured through profiling and snapshot export.

## IntelliJ IDEA integration

The standalone analyzer is packaged as a JAR and embedded in a Kotlin-based IntelliJ plugin. The plugin obtains the current project directory, accepts project-specific configuration, runs the analysis locally, and displays the results without requiring developers to leave the IDE.

Configuration supports:

- Paths containing database or other third-party method definitions
- Package, class, or method exclusions with pattern matching
- An optional runtime snapshot CSV
- A method-execution threshold for dynamic severity calculation

The analysis remains local to the developer's machine. No project source code is sent to an external service.

## Testing and delivery process

The project was developed with a production-oriented workflow rather than as an isolated prototype. Work was split into epics and GitHub issues, implemented through feature branches, reviewed in pull requests, and checked by separate CI workflows for the analyzer and the plugin.

I tested the engine against controlled repositories designed around different execution structures:

- A repository call written directly inside a loop
- A repository call reached through a multi-method chain
- Stream-based invocation patterns
- Snapshot data with valid and invalid runtime conditions

These focused fixtures made the rule behavior reproducible and helped prevent detection regressions as the call-graph and plugin layers evolved.

## Outcome

The final result was a complete developer-tooling workflow: Java source parsing, project-level relationship analysis, runtime evidence, structured output, automated tests, and an IntelliJ integration. The project demonstrated how a narrow performance rule can be implemented in a way that is configurable, testable, and usable inside a real development environment.

## Technical stack

`Java 17` · `Kotlin` · `Eclipse JDT` · `JGraphT` · `Jackson` · `Maven` · `Gradle` · `IntelliJ Platform SDK` · `JUnit` · `GitHub Actions` · `VisualVM`

## Project context and source code

I delivered this work in a technology consulting project with **itestra GmbH** and the **Technical University of Munich (TUM)**. The analyzer and IntelliJ plugin are available in the public project repository.

<div class="mt-4">
  <a class="btn btn-sm btn-primary" href="https://github.com/DigitalProductInnovationAndDevelopment/Anti-Pattern-Analysis" target="_blank" rel="noopener">View source code on GitHub</a>
</div>
