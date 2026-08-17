---
layout: page
lang: de
translation_key: project-ykt
published: true
title: Workflow für Sprint-Reporting und Produktivität
description: Ein internes Full-Stack-System, das die Qualität von Sprint-Daten verbesserte und Teamangaben in einheitliche Newsletter und monatliche Produktivitätsberichte überführte.
img: assets/img/projects/ykt/sprint-reporting-workflow.png
importance: 7
category: professional
technologies: [Java + Spring Boot, React, Jira API, Workflow-Automatisierung, Reporting]
permalink: /de/projects/sprint-reporting-productivity-workflow/
---

Während meines Praktikums als Software Engineer bei **Yapı Kredi Teknoloji A.Ş.** von Juli bis September 2021 arbeitete ich an einer internen Full-Stack-Anwendung für agile Teams. Das System verband von den Teams gepflegte Sprint-Informationen mit Projektmanagementdaten und überführte sie in strukturierte Sprint-Newsletter und monatliche Produktivitätsübersichten.

Im Mittelpunkt stand die Datenqualität. Mitarbeitende dokumentierten Angaben wie Tags, erwartete Dauer und mögliche Verlängerungen. Fehlende oder uneinheitliche Einträge führten zu unvollständigen Berichten und machten Vergleiche zwischen Teams oder Zeiträumen weniger verlässlich.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Konsistente Eingaben</h3>
      <p class="mb-0">Unvollständige oder uneinheitliche Sprint-Metadaten wurden sichtbar, bevor sie nachgelagerte Berichte beeinflussten.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Automatisierte Newsletter</h3>
      <p class="mb-0">Strukturierte Teamangaben und Jira-Daten reduzierten den manuellen Aufwand für Sprint-Zusammenfassungen.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Monatliche Transparenz</h3>
      <p class="mb-0">Wiederkehrende Ansichten machten Produktivitätsmuster und Lücken in der Berichterstattung leichter überprüfbar.</p>
    </div>
  </div>
</div>

## Das operative Problem

Das Sprint-Reporting hing von Angaben vieler Personen ab. Die einzelnen Felder wirkten einfach, doch die Qualität des fertigen Newsletters setzte einheitliche Tags, realistische Zeitangaben und korrekt gepflegte Verlängerungen voraus.

Die Anwendung schuf einen kontrollierteren Weg von den verteilten Eingaben zu einem wiederverwendbaren Bericht. Ziel war nicht nur die Erstellung eines Newsletters, sondern auch eine verlässlichere Datengrundlage und aussagekräftigere monatliche Ergebnisse.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/ykt/sprint-reporting-workflow.png" title="Konzeptioneller Workflow für Sprint-Reporting und Produktivität" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Konzeptionelle Rekonstruktion des Workflows, keine originale Unternehmensoberfläche. Von Teams erfasste Sprint-Metadaten durchlaufen Qualitätsprüfungen, werden mit Projektmanagementdaten verbunden und fließen in Newsletter und monatliche Produktivitätsübersichten ein.
</div>

## Von Teamangaben zum monatlichen Reporting

Der Workflow bündelte mehrere Schritte in einer Anwendung:

1. Mitarbeitende pflegten Sprint-Details in Confluence, darunter Kategorisierungs-Tags, geplante Dauer und Angaben zu Verlängerungen.
2. Das Java/Spring-Boot-Backend rief relevante Sprint- und Arbeitspaketdaten über die Atlassian Jira API ab.
3. Die Anwendung brachte beide Quellen in eine einheitliche Struktur und machte fehlende oder inkompatible Werte sichtbar.
4. Frontend-Ansichten unterstützten die Prüfung der Sprint-Inhalte vor ihrer Verwendung in der Kommunikation.
5. Die vorbereiteten Daten wurden in Sprint-Newsletter überführt und zu monatlichen Produktivitätsergebnissen zusammengefasst.

Diese Trennung hielt Erfassung, Validierung, Darstellung und Reporting als eigenständige Verantwortlichkeiten auseinander. Ein Problem im Bericht ließ sich dadurch bis zur ursprünglichen Eingabe zurückverfolgen, statt erst im fertigen Newsletter manuell korrigiert zu werden.

## Full-Stack-Implementierung

Ich arbeitete am Java/Spring-Boot-Backend sowie an React- und Angular-Komponenten im Frontend. Das Backend übernahm Integration und berichtsorientierte Datenaufbereitung, während die Benutzeroberflächen Sprint-Details in einer für Teams prüfbaren Form darstellten.

Das Projekt vermittelte mir praktische Erfahrung mit einer internen Anwendung, deren Nutzen nicht nur von technischer Korrektheit, sondern auch von Akzeptanz und Datendisziplin abhing. Die Oberfläche musste erwartete Eingaben verständlich machen, und das Backend musste ausreichend Struktur für wiederkehrende Berichte erhalten.

Ergänzend zur Hauptanwendung trug ich zu PL/SQL-Automatisierungswerkzeugen für verwandte interne Abläufe bei.

## Ergebnis

Der Workflow verringerte die Distanz zwischen täglicher Sprint-Verwaltung und Management-Reporting. Er half Teams, Datenqualitätsprobleme früher zu erkennen, automatisierte wiederkehrende Schritte bei der Newsletter-Erstellung und schuf eine klarere Grundlage für die Auswertung monatlicher Produktivitätsergebnisse.

## Technischer Stack

`Java` · `Spring Boot` · `React` · `Angular` · `Atlassian Jira API` · `Confluence` · `REST` · `PL/SQL` · `Full-Stack-Entwicklung`

## Projektkontext

Da es sich um ein internes Unternehmenssystem handelt, sind Quellcode und Originaloberfläche nicht öffentlich. Die Abbildung auf dieser Seite erklärt den Workflow, ohne proprietäres Material wiederzugeben.
