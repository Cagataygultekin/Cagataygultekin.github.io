---
layout: page
lang: de
translation_key: project-zorluteks
published: true
title: Desktop-App für Material- und Datenbankprozesse
description: Eine C#/.NET-Desktop-Anwendung, die tabellenbasierte Materialdaten in eine übersichtlichere Oberfläche mit kontrollierten SQL-Aktualisierungen und Datenbankoperationen überführte.
img: assets/img/projects/zorluteks/material-operations-workflow.png
importance: 8
category: professional
technologies: [C# + .NET, SQL Server, Desktop-Anwendungen, Datenmigration, Prozessautomatisierung]
permalink: /de/projects/material-database-operations-app/
---

Bei **Zorluteks Tekstil Ticaret ve Sanayi A.Ş.** entwickelte ich eine interne C#/.NET-Desktop-Anwendung für Material-, Bestands- und Versanddaten. Die vorhandenen Informationen waren über große Excel-Dateien mit zahlreichen Zeilen und Spalten verteilt, in denen binäre Statusfelder, beschreibende Texte und operative Details nebeneinander standen.

Ich überführte diesen Ablauf in eine übersichtlichere Anwendungsoberfläche und verband sie mit der Unternehmensdatenbank. Nutzer konnten relevante Datensätze einsehen und Aktualisierungen oder andere Datenbankoperationen über eindeutige Aktionen auslösen, statt Tabellenzellen zu bearbeiten oder direkt mit Datenbankbefehlen zu arbeiten.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Migration aus Tabellen</h3><p class="mb-0">Überführte operative Datensätze aus umfangreichen Excel-Dateien in strukturierte Unternehmensdatenbanken.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Bedienungsorientierte Ansicht</h3><p class="mb-0">Stellte Bestands-, Material-, Status- und Versandinformationen in einer für den täglichen Einsatz ausgelegten Desktop-Oberfläche dar.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Kontrollierte Operationen</h3><p class="mb-0">Überführte wiederkehrende Aktualisierungen und Datenbankaufgaben in klare, schaltflächengesteuerte Aktionen.</p></div></div>
</div>

## Ausgangssituation

Die Tabellen enthielten große Mengen operativer Informationen. Einige Spalten bildeten Ja-Nein-Zustände ab, andere Namen, Beschreibungen, Mengen, Bestände oder Versanddetails. Die Daten waren zwar vorhanden, doch für Verständnis und Aktualisierung mussten Nutzer durch ein breites Raster navigieren und wissen, welche Spalten den jeweiligen Prozess steuerten.

Daraus entstanden zwei zusammenhängende Probleme: Die Datensätze ließen sich nur schwer als vollständiges operatives Bild erfassen, und routinemäßige Datenbankänderungen beruhten auf manuellen Schritten, die uneinheitlich ausgeführt werden konnten.

<div class="row justify-content-center"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/zorluteks/material-operations-workflow.png" title="Konzeptioneller Workflow für Material- und Datenbankprozesse" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Konzeptionelle Rekonstruktion des Systems, kein originaler Unternehmens-Screenshot. Umfangreiche Tabellendaten werden in einer SQL-Datenbank normalisiert und über eine praktische Desktop-Anwendung für Material-, Bestands-, Versand- und Aktualisierungsprozesse zugänglich gemacht.</div>

## Von Zeilen und Spalten zur Anwendung

Ich überführte die Tabellenstruktur in einen anwendungsorientierten Datenfluss:

1. Bestehende Excel-Spalten prüfen und die operative Bedeutung binärer, textlicher, bestands- und versandbezogener Felder bestimmen.
2. Tabellendaten für die Migration vorbereiten und in Unternehmensdatenbanken übertragen.
3. Relevante Datensätze per SQL abrufen und in einer klareren Desktop-Oberfläche darstellen.
4. Zusammengehörige Informationen gruppieren, damit Nutzer den Zustand eines Materials oder einer Sendung ohne Durchsicht der gesamten Tabelle erfassen konnten.
5. Explizite Oberflächenaktionen mit Aktualisierungs- und Datenbankoperationen verbinden, sodass Nutzer sie per Schaltfläche starten konnten.

Die Desktop-Anwendung bildete eine Grenze zwischen Nutzern und Datenbank. Sie stellte Informationen in fachlichen Begriffen dar und verbarg SQL-Operationen hinter kontrolliertem Anwendungsverhalten.

## Gestaltung für Routineprozesse

Das zentrale Designziel war Klarheit statt visueller Komplexität. Nutzer mussten die für ihre Aufgabe relevanten Felder sehen, den Status eines Datensatzes verstehen und erkennen, welche Aktion ihn aktualisiert.

Die Verlagerung in eine Anwendung machte Datenbankoperationen zudem bewusster. Statt direkter Änderungen in Tabellen folgten Nutzer für häufige Vorgänge demselben Oberflächenpfad. Dadurch wurde der Prozess verständlicher und erforderte weniger Wissen über die zugrunde liegenden Tabellen.

## Ergebnis

Das Projekt ersetzte die tabellenzentrierte Sicht auf operative Daten durch einen zugänglicheren Desktop-Workflow. Material-, Bestands- und Versanddaten wurden leichter prüfbar, vorhandene Tabellenbestände in Unternehmensdatenbanken migriert und wiederkehrende Aktualisierungen für Nutzer vereinfacht.

## Technischer Stack

`C#` · `.NET` · `Visual Studio` · `SQL` · `Microsoft SQL Server` · `Excel-Datenmigration` · `Desktop-Anwendungsentwicklung`

## Projektkontext

Ich führte diese Arbeit während meines IT-Praktikums bei **Zorluteks Tekstil Ticaret ve Sanayi A.Ş.** von August bis September 2019 durch. Anwendung und Quellcode sind intern. Die Abbildung erklärt die Systemarchitektur, ohne Unternehmensdaten oder proprietäre Oberflächen offenzulegen.
