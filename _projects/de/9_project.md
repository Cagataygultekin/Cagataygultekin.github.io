---
layout: page
lang: de
translation_key: project-issue-tracking
published: true
title: Forschungswerkzeug für GitHub Issue Tracking
description: Eine Python-Desktop-Anwendung, die GitHub-Issue-Aktivitäten in Prozessmetriken, visuelle Analysen und exportierbare Forschungsdaten überführt.
img: assets/img/projects/bachelors-thesis/issue-tracking-analytics.png
importance: 9
category: professional
technologies: [Python, PyGithub, GitHub API, Tkinter, Matplotlib]
github: https://github.com/DIP-Group/GithubTracker
permalink: /de/projects/issue-tracking-team-analytics/
---

Dieses Projekt lieferte ein Desktop-Forschungswerkzeug zur Untersuchung der Nutzung von GitHub Issue Tracking in Softwareteams. Statt Issues als isolierte Aufgaben zu betrachten, überführt die Anwendung Repository-Aktivitäten in messbare Signale zu Zuweisung, Kommunikation, Labels, Meilensteinen, Reaktionszeiten und Abschluss von Issues.

Das System entstand im Rahmen meiner Bachelorarbeit in Computer Engineering an der **Middle East Technical University Northern Cyprus Campus**. Diese Seite stellt es als Softwareprodukt vor. Die zugehörige [Academic-Work-Seite]({{ '/de/academic-work/bachelors-thesis/' | relative_url }}) beschreibt Forschungsfrage und Analysemodell ausführlicher.

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="https://github.com/DIP-Group/GithubTracker" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Quellcode ansehen</a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Bachelors_Thesis_Final_Report.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Abschlussbericht herunterladen</a>
</div>

## Produktworkflow

Die Anwendung unterstützt einen vollständigen Workflow zur Repository-Analyse:

1. ein öffentliches GitHub-Repository über seine URL abrufen,
2. die geladenen Repository-Daten für spätere Analysen speichern,
3. Metriken und Prozessfragen über eine Desktop-Oberfläche auswählen,
4. Ergebnisse aus Issues, Mitwirkenden, Labels, Kommentaren, Zuständigkeiten und Meilensteinen berechnen,
5. Resultate als Diagramme, Kennzahlen oder strukturierte Antworten darstellen,
6. ausgewählte Ergebnisse für weitere Analysen als CSV exportieren.

Die implementierte Analyseschicht stellt **15 Repository-Metriken** und **13 strukturierte Prozessfragen** bereit. Sie decken Issue-Status, Verantwortung, Labels, Meilensteine, Kommentare, Reaktionsverhalten und Abschlussmuster ab.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Repository-Aufnahme</h3><p class="mb-0">Ruft Repository- und Issue-Daten über die GitHub API ab und speichert eine lokale Repräsentation für wiederholbare Analysen.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Metrik-Engine</h3><p class="mb-0">Berechnet Kennzahlen zu Issue-Status, Verantwortungsverteilung, Labels, Kommentaren, Meilensteinen, Zuständigkeiten und Reaktionsverhalten.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Forschungsergebnisse</h3><p class="mb-0">Macht Ergebnisse in Diagrammen und Tabellen prüfbar und exportiert Werte und Antworten für nachgelagerte Auswertungen.</p></div></div>
</div>

## Technischer Umfang

Die Implementierung ist eine Python-Desktop-Anwendung mit Tkinter. PyGithub übernimmt den Repository-Zugriff, Matplotlib die visuelle Analyse und CSV den portablen Export. Repository-Objekte können mit pickle lokal serialisiert werden, um wiederholte GitHub-API-Anfragen zu reduzieren. Der Code trennt Repository-Abruf, Metrikberechnung, Fragenbewertung, Visualisierung und Export in einem gemeinsamen nutzerorientierten Workflow.

Das Werkzeug wertet quantitative Maße und praktische Prozessfragen aus. Beispiele sind die Verteilung von Issues auf Mitwirkende, die Nutzung von Labels, Konsistenz der Kommentare, Verwendung von Meilensteinen, durchschnittliche Reaktions- und Abschlusszeiten sowie die einheitliche Zuweisung von Verantwortlichkeiten.

Der Abschlussbericht dokumentiert außerdem Unit-, Integrations-, System-, Last- und Stresstests. Der Repository-Abruf wurde gegen die GitHub API geprüft, erzeugte CSV-Dateien dienten End-to-End-Systemtests, und Repositories verschiedener Größen machten die praktischen Auswirkungen von API-Ratenlimits sichtbar.

<div class="row justify-content-center"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/bachelors-thesis/issue-tracking-analytics.png" title="Forschungsworkflow für Issue Tracking" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Der technische Workflow von GitHub-Issue-Daten über berechnete Kennzahlen bis zu interpretierbaren Prozessbefunden und wiederverwendbaren Forschungsergebnissen.</div>

## Bedeutung des Projekts

Dies war eines meiner ersten durchgängigen Projekte im Bereich Software Analytics. Es verband API-Integration, Desktop-Anwendungsentwicklung, domänenspezifischen Metrikentwurf, Visualisierung und exportierbare Datenverarbeitung in einem funktionierenden Werkzeug. Dasselbe Muster findet sich in vielen meiner späteren Arbeiten: operative Daten erfassen, eine reproduzierbare Verarbeitungsschicht entwickeln und daraus Informationen für technische Entscheidungen gewinnen.

## Technischer Kern

`Python` / `PyGithub` / `GitHub API` / `Tkinter` / `Matplotlib` / `pickle` / `Repository Analytics` / `CSV-Export`
