---
layout: page
lang: de
translation_key: project-legal-ai
published: true
title: Legal-AI-Plattform zur Datenannotation
description: Eine React/TypeScript- und Flask-Plattform für Dokument-Upload, OCR, ML-gestützte Klassifikation, Annotationsworkflows und sicheren Zugriff auf geschützte Legal-Data-Dienste.
img: assets/img/projects/legal-ai/legal-ai-dashboard-v2.png
importance: 5
category: professional
technologies: [React + TypeScript, Flask, OCR-Workflows, JWT-Sicherheit, Docker]
permalink: /de/projects/legal-ai-data-labelling-platform/
---

In Zusammenarbeit mit **Legalian GmbH** arbeitete ich an einer internen Plattform zum Extrahieren, Klassifizieren, Prüfen und Annotieren von Informationen aus juristischen Dokumenten. Das Projekt adressierte ein wiederkehrendes Legal-Tech-Problem: Große Dokumentbestände enthalten wertvolle strukturierte Daten, während die manuelle Extraktion und Kategorisierung langsam, uneinheitlich und schwer skalierbar ist.

Ich arbeitete über zwei Architekturphasen hinweg. Die Plattform begann mit einem Expo-basierten Oberflächenprototyp zur Erprobung des Annotationsworkflows und entwickelte sich anschließend zu einer React/TypeScript-Webanwendung mit Flask-Backend. Meine Arbeit umfasste Prototyping der Oberfläche, Frontend-Entwicklung, Backend-Integration, Verträge zwischen Frontend und Backend, Docker-basiertes Setup und den sicheren Zugriff auf geschützte OCR- und Machine-Learning-Dienste.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Zwei Architekturphasen</h3><p class="mb-0">Begleitete den Übergang vom schnellen Expo-Prototyping zu einer strukturierten React/TypeScript- und Flask-Webplattform.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Sichere Dienstintegration</h3><p class="mb-0">Integrierte signierte JWT-Anfragen und ein Flask-Gateway mit geschützten OCR- und ML-Diensten.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Einzel- und Stapelprozesse</h3><p class="mb-0">Arbeitete an Dokumentprüfung, Drag-and-Drop-Upload, ZIP-Vorverarbeitung, Klassifikation und Annotation.</p></div></div>
</div>

## Das Produktproblem

Juristische Fachkräfte müssen Personen, Unternehmen, Eigentumsbeziehungen, Daten, Adressen und weitere strukturierte Entitäten in Dokumenten mit sehr unterschiedlichen Layouts erkennen. Für die Automatisierung reicht eine reine Textextraktion nicht aus. Originaldokument, vorhergesagte Entitäten, Klassifikationsergebnisse und menschliche Korrekturen müssen während des gesamten Prüfprozesses miteinander verbunden bleiben.

Die Plattform unterstützte einen Workflow für:

1. den Upload einzelner Dokumente oder ZIP-Pakete,
2. die Vorverarbeitung und OCR-Ausführung,
3. die Klassifikation von Dokumenten und extrahierten Entitäten,
4. die Prüfung und Korrektur von Labels in einer Annotationsoberfläche,
5. die sichere Speicherung strukturierter Ergebnisse und Dokumentmetadaten.

## Phase 1: Interaktionsmodell validieren

Ich arbeitete mit einer Expo- und React-Native-Implementierung, um Navigation, Dokumentdarstellung, Kategorieauswahl und erste Annotationsinteraktionen zu erproben. Figma-Entwürfe halfen uns, den Workflow zu bewerten und Oberflächenentscheidungen zu diskutieren, bevor wir zu einer stärker strukturierten Webarchitektur übergingen.

<div class="row"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/legal-ai-dashboard-v2.png" title="Rekonstruiertes Dashboard für Legal-AI-Datensätze und Verarbeitung" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Eine ausgearbeitete Portfolio-Rekonstruktion auf Basis des frühen Figma-Workflows. Sie erklärt Datensatznavigation, Upload, Verarbeitungsstatus und Prüfwarteschlangen, ohne die ursprüngliche Unternehmensoberfläche oder personenbezogene Dokumentdaten zu reproduzieren.</div>

Diese Phase ermöglichte Tests der Navigation zwischen Datensätzen, Dokumenten, Klassifikationsergebnissen und Annotationsaufgaben. Zugleich wurden Interaktionsmuster sichtbar, die beim späteren Architekturwechsel erhalten bleiben mussten.

## Phase 2: Strukturierte Full-Stack-Architektur

Anschließend arbeitete ich am Übergang zu einem React/TypeScript-Frontend mit Flask-Backend. Die neue Architektur trennte Benutzeroberfläche, Anwendungslogik, Authentifizierung, Dokumentverarbeitung und geschützte Machine-Learning-Dienste klarer voneinander.

### React- und TypeScript-Frontend

Meine Frontend-Arbeit umfasste Routen und wiederverwendbare Komponenten für:

- Drag-and-Drop-Upload von Dokumenten und ZIP-Dateien,
- Auflistung von Datensätzen und Dokumenten,
- Visualisierung von OCR-Ergebnissen,
- Stapelklassifikation,
- Annotation auf Dokumentebene,
- Label-Validierung und Nutzerfeedback.

TypeScript lieferte stärkere Verträge für komplexe Annotationsdaten und API-Antworten. Die Oberfläche folgte den etablierten Figma-Workflows und ersetzte explorative Ansichten durch besser wiederverwendbare und wartbare Komponenten.

<div class="row"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/legal-ai-annotation-workspace-v2.png" title="Rekonstruierter Arbeitsbereich für Dokumentannotation und Validierung" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Der rekonstruierte Prüfbereich zeigt Quelldokument, extrahierte Felder, Konfidenzwerte, Validierungsstatus und Seitennavigation gemeinsam. Alle dargestellten Dokumentinhalte sind synthetisch und anonym.</div>

### Flask-Gateway und geschützte ML-Dienste

Ich arbeitete an der Integration des Frontends mit geschützten OCR- und Machine-Learning-Diensten über ein Flask-Gateway. Das Backend erzeugte signierte JWT-Tokens aus Service-Account-Zugangsdaten, rief geschützte Gateway-Endpunkte auf, verarbeitete OCR- und ZIP-Vorverarbeitungsanfragen und gab strukturierte Antworten an das Frontend zurück.

Die Abschirmung geschützter Dienste durch das Flask-Gateway hielt Zugangsdaten aus dem Browser heraus und verhinderte direkte Abhängigkeiten des Frontends von interner Infrastruktur. Zugleich entstand ein zentraler Integrationspunkt für Authentifizierung, Autorisierung, Fehlerbehandlung und API-Verhalten.

### Datenverwaltung

Die Architektur nutzte ein strukturiertes MySQL-Datenmodell für Nutzereingaben, Dokumentmetadaten, extrahierte Entitäten und Klassifikationsergebnisse. Rohkontext und verarbeitete Informationen wurden getrennt behandelt, damit normalisierte Ergebnisse abfragbar blieben, ohne ihre Verbindung zu den Originaldokumenten zu verlieren.

## Sicherheit, Tests und Deployment

Da die Plattform juristische Dokumente und geschützte Dienste verarbeitete, umfasste meine Arbeit außerdem:

- JWT-basierte Authentifizierung und Autorisierung,
- Eingabevalidierung und strukturierte Fehlerbehandlung,
- Unit- und Integrationstests für Verarbeitungs- und API-Abläufe,
- Docker- und Docker-Compose-Umgebungen für Frontend und Backend,
- Vorbereitung auf CI/CD-basiertes Testen und Deployment.

## Ergebnis

Ich arbeitete in der Prototyp- und Full-Stack-Entwicklungsphase der Plattform und trug zum Interaktionsmodell, React/TypeScript-Frontend, zur Flask-Gateway-Integration, zu Frontend-Backend-Verträgen, Docker-Setup und sicherem API-Zugriff bei.

Gemeinsam unterstützten diese Komponenten Dokument-Upload, OCR, ML-gestützte Klassifikation, Annotation und sichere Dienstintegration. Die Arbeit vermittelte mir praktische Erfahrung darin, einen explorativen Prototyp in eine strukturiertere Anwendung zu überführen und zugleich die bereits in der frühen Oberfläche validierten Workflows zu erhalten.

Die wichtigste technische Erkenntnis war, den Zeitpunkt zu erkennen, an dem schnelles Prototyping seinen Zweck erfüllt hatte und eine stärkere Trennung zwischen Frontend, Backend, Sicherheit und Verarbeitung notwendig wurde.

## Technischer Stack

`React` · `TypeScript` · `Expo` · `React Native` · `Flask` · `REST APIs` · `JWT` · `Google Service Accounts` · `OCR` · `ML-gestützte Klassifikation` · `MySQL` · `Figma` · `Docker Compose` · `CI/CD`

## Projektkontext

Ich arbeitete von März bis Juni 2024 an der Plattform. Quellcode und interne Anwendung sind nicht öffentlich. Deshalb verwendet diese Seite Portfolio-Rekonstruktionen, um das Produkt ohne Offenlegung proprietärer Implementierungsdetails oder juristischer Daten zu erklären.
