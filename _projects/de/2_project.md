---
layout: page
lang: de
translation_key: project-company-registry
published: true
title: Plattform für historische Unternehmensregisterdaten
description: Ein FastAPI-Backend zum Abrufen, Normalisieren, Speichern und Durchsuchen aktueller und historischer Daten aus dem dänischen Unternehmensregister.
img: assets/img/projects/legalian/registry-data-platform.png
importance: 2
category: professional
technologies: [Python, FastAPI, Sichere API-Integration, Data Engineering, MySQL + Elasticsearch]
permalink: /de/projects/company-registry-data-platform/
github: https://github.com/Cagataygultekin/danish-business-register
---

Bei der **Legalian GmbH** entwickelte ich eine Backend-Plattform, die komplexe Daten aus dem dänischen Unternehmensregister in strukturierte, abfragbare Informationen für Compliance-Workflows überführt. Das System ruft aktuelle und historische Unternehmensdaten über einen System-zu-System-Zugang ab, normalisiert uneinheitliche verschachtelte Antworten und bewahrt Eigentumsverhältnisse im zeitlichen Verlauf.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3"><h3>Aktuell + historisch</h3><p class="mb-0">Registerzustände in einer strukturierten Datenschicht</p></div>
  <div class="col-sm-4 mb-3"><h3>3 Kerndomänen</h3><p class="mb-0">Unternehmen, Produktionsstätten und Eigentumsdatensätze</p></div>
  <div class="col-sm-4 mb-3"><h3>&lt; 1 Sekunde</h3><p class="mb-0">beobachtete Antwortzeit in den dokumentierten Testszenarien</p></div>
</div>

## Die technische Problemstellung

Die öffentliche CVR-Oberfläche eignet sich zur Prüfung des aktuellen Zustands eines Unternehmens. Compliance-Arbeit hängt jedoch häufig davon ab, was sich zuvor verändert hat. Eigentumsverhältnisse beginnen und enden, Unternehmensdaten entwickeln sich weiter und rechtliche Strukturen können neu organisiert werden. Eine aktuelle Momentaufnahme bildet diese Historie nicht ab.

Das System musste daher mehr leisten als eine externe API weiterzuleiten. Es sollte:

- nahezu aktuelle und historische Registerdaten abrufen,
- tief verschachtelte und uneinheitliche JSON-Strukturen verarbeiten,
- Unternehmen, Produktionsstätten und Eigentumsdatensätze relational modellieren,
- aktive und beendete Eigentumsverhältnisse erhalten,
- exakte Abfragen sowie flexible Unternehmenssuche unterstützen,
- trotz Authentifizierungsbeschränkungen, Rate Limits und fehlender Felder zuverlässig bleiben,
- reproduzierbares Deployment und klare Betriebsdokumentation bieten.

## Meine Umsetzung

- FastAPI-Microservice mit Integration der System-zu-System-API des dänischen Unternehmensregisters
- Authentifizierte Endpunkte für Unternehmenssuche, allgemeine Unternehmensdaten, Eigentumsdetails, Schlüsselpersonen und Dokumentabruf
- Parsing- und Validierungslogik für optionale, unvollständige und strukturell unterschiedliche API-Antworten
- MySQL-Datenmodell für Unternehmen, Produktionsstätten und Eigentumshistorie
- Elasticsearch-basierte Suche für Teilnamen und flexible Registerabfragen
- Sichere Konfiguration über Umgebungsvariablen und geschützte Anwendungsendpunkte
- Selenium-Workflow zum Abruf von Unternehmens-PDFs, wenn kein direkter API-Pfad verfügbar war
- Docker-basierte Einrichtung sowie technische Dokumentation für Deployment und Übergabe

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="eager" path="assets/img/projects/legalian/registry-data-platform.png" title="Architektur der Plattform für historische Unternehmensregisterdaten" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Die FastAPI-Schicht koordiniert authentifizierte CVR-Anfragen, defensives Parsing, relationale Speicherung und Suche. Historische Eigentumsdaten bleiben abfragbar, anstatt durch die jeweils neueste Registerantwort überschrieben zu werden.</div>

## Daten als Historie statt nur als letzter Zustand

Die wichtigste Designentscheidung bestand darin, Registerdaten als Zeitverlauf und nicht als einzelnes Unternehmensobjekt zu behandeln. Ich entwickelte getrennte relationale Strukturen für:

- **Unternehmen:** CVR-Nummer, registrierter Name, Adresse, Status, Geschäftsform und Gründungsdatum
- **Produktionsstätten:** Angaben zur Betriebsstätte, Branchenklassifikation, Beschäftigtenzahlen und zugehöriges Unternehmen
- **Eigentum:** rechtliche und wirtschaftlich Berechtigte, beendete Eigentumsverhältnisse, Eigentums- und Stimmrechtsanteile sowie Beziehungszeiträume

Aktive und beendete Eigentumsdatensätze bleiben erhalten. Die Plattform leitet Änderungen nicht selbstständig ab, sondern speichert die zugrunde liegenden Start- und Enddaten. Dadurch lässt sich der Eigentumszustand zu einem gewählten Zeitpunkt rekonstruieren und nachvollziehen, wann eine Beziehung begann oder endete.

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/legalian/ownership-history-model.png" title="Relationales Datenmodell und zeitlicher Verlauf von Eigentumsverhältnissen" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Getrennte Unternehmens-, Produktionsstätten- und Eigentumsdatensätze machen historische Beziehungen explizit. Auch ein beendetes Verhältnis bleibt Teil des Datenmodells und kann in späteren Compliance-Prüfungen verwendet werden.</div>

## Robuste Integrationsschicht

CVR-Antworten unterscheiden sich je nach Unternehmenstyp und enthalten häufig optionale oder fehlende Felder. Ich implementierte defensive Parser, die relevante Werte extrahieren, verschachtelte Objekte normalisieren, das Ergebnis validieren und konsistente Antwortstrukturen liefern. Dadurch bleiben API-Nutzer von vielen Unregelmäßigkeiten des Quellformats unabhängig.

Der Service berücksichtigt außerdem betriebliche Fehlerfälle:

- Zugangsdaten werden aus Umgebungsvariablen geladen und nicht im Code gespeichert.
- API-Fehler und Rate-Limit-Situationen werden behandelt, ohne den Anwendungsablauf zum Absturz zu bringen.
- Randfälle umfassen Unternehmen ohne Eigentümer, beendete Beziehungen, internationale Verbindungen und große Eigentumsstrukturen.
- Endpunkt- und Datenvalidierungstests decken erfolgreiche Antworten, unvollständige Daten, Fehlerbehandlung und Performance-Verhalten ab.

## Suche und Dokument-Workflows

Die API unterstützt direkte Abfragen über CVR-Nummern und Teilnamensuchen. Elasticsearch bildet eine flexible Suchschicht über Unternehmensdaten, während die relationale Datenbank die strukturierte Quelle für Unternehmensdetails und historische Beziehungen bleibt.

Unternehmensdokumente erforderten einen anderen Integrationsweg. Da Downloads über einen Browser-Ablauf mit Automatisierungsbeschränkungen bereitgestellt wurden, implementierte ich einen Selenium-Prozess, der die passende CVR-Seite öffnet, den Download auslöst, dessen Abschluss überwacht und die Metadaten der Datei zurückgibt. Die erforderliche Kompatibilität von Chrome und ChromeDriver dokumentierte ich für reproduzierbare Ausführung in anderen Umgebungen.

## Ergebnis

Ich verantwortete Design und Implementierung des Backends von der Recherche der externen API über Datenmodellierung, Endpunktentwicklung und Tests bis zu Containerisierung und Dokumentation. Das Ergebnis ist ein wiederverwendbarer Unternehmensdatenservice statt einer Sammlung einmaliger Registeranfragen.

Die Plattform schafft eine Grundlage für Compliance-Workflows, die aktuelle Unternehmensinformationen mit historischem Eigentumskontext verbinden. Gleichzeitig schirmt sie interne Nutzer von der Komplexität des externen Registers ab und erleichtert spätere Reporting-, Due-Diligence- und Business-Intelligence-Funktionen.

## Technischer Stack

`Python` · `FastAPI` · `REST` · `MySQL` · `Elasticsearch` · `pandas` · `Pydantic` · `Docker` · `Selenium` · `JWT` · `Umgebungsbasierte Konfiguration`

## Projektkontext

Ich realisierte das System bei der **Legalian GmbH** im Rahmen eines interdisziplinären Software-Engineering-Projekts zur Automatisierung von Compliance-Prozessen nach dem deutschen Geldwäschegesetz.

<div class="mt-4"><a class="btn btn-sm btn-primary" href="https://github.com/Cagataygultekin/danish-business-register" target="_blank" rel="noopener">Quellcode auf GitHub ansehen</a></div>
