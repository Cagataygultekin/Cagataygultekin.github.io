---
layout: page
published: true
title: Material and Database Operations Desktop App
description: A C#/.NET desktop application that moved spreadsheet-based material records into a clearer interface with controlled SQL updates and database operations.
img: assets/img/projects/zorluteks/material-operations-workflow.png
importance: 8
category: professional
technologies: [C# + .NET, SQL Server, Desktop Applications, Data Migration, Operations Automation]
permalink: /projects/material-database-operations-app/
---

At **Zorluteks Tekstil Ticaret ve Sanayi A.Ş.**, I developed an internal C#/.NET desktop application for working with material, stock, and shipment records. The existing information was distributed across large Excel files with many rows and columns, mixing binary status fields with descriptive text and operational details.

I moved that workflow into a clearer application interface and connected it to the company database. Users could inspect the relevant records and trigger updates or other database operations through explicit application actions instead of editing spreadsheet cells or working directly with database commands.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Spreadsheet migration</h3>
      <p class="mb-0">Transferred operational records from dense Excel sheets into structured company database tables.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Operator-focused view</h3>
      <p class="mb-0">Presented stock, material, status, and shipment information through a desktop interface designed for everyday use.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Controlled operations</h3>
      <p class="mb-0">Converted repeated update and database tasks into clear button-driven application actions.</p>
    </div>
  </div>
</div>

## The starting point

The spreadsheet files contained a large amount of operational information. Some columns represented yes-or-no states, while others contained names, descriptions, quantities, stock information, or shipment details. Although the data existed, understanding and updating it required navigating a wide grid and knowing which columns controlled each process.

This created two related problems. The records were difficult to read as a complete operational picture, and routine database changes depended on manual steps that were easy to perform inconsistently.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/zorluteks/material-operations-workflow.png" title="Conceptual material and database operations workflow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Conceptual reconstruction of the system, not an original company screenshot. Dense spreadsheet records are normalized into a SQL database and exposed through a practical desktop application for material, stock, shipment, and update workflows.
</div>

## Turning rows and columns into an application

I translated the spreadsheet structure into an application-oriented data flow:

1. Review the existing Excel columns and identify the operational meaning of binary, textual, stock, and shipment fields.
2. Prepare and migrate the spreadsheet records into company database structures.
3. Retrieve the relevant records through SQL and present them in a clearer desktop interface.
4. Group related information so users could understand the state of a material or shipment without scanning the entire spreadsheet.
5. Connect explicit interface actions to update and database operations so the user could start them with a button.

The desktop application acted as a boundary between users and the database. It presented the information in domain terms while keeping SQL operations behind controlled application behavior.

## Designing for routine operations

The key design goal was clarity rather than visual complexity. Users needed to see the fields that mattered for the current task, understand the status of a record, and know which action would update it.

Moving the workflow into an application also made database operations more deliberate. Instead of depending on direct spreadsheet edits, users followed the same interface path for common actions. This made the process easier to understand and reduced reliance on knowledge of the underlying tables.

## Outcome

The project replaced a spreadsheet-centered view of operational data with a more accessible desktop workflow. It made material, inventory, and shipment records easier to inspect, supported the migration of existing spreadsheet data into company databases, and simplified recurring update operations for users.

## Technical stack

`C#` · `.NET` · `Visual Studio` · `SQL` · `Microsoft SQL Server` · `Excel data migration` · `Desktop application development`

## Project context

I completed this work during my Information Technology Internship at **Zorluteks Tekstil Ticaret ve Sanayi A.Ş.** from August to September 2019. The application and its source code are internal. The illustration on this page communicates the system architecture without exposing company records or proprietary interfaces.
