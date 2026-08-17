---
layout: page
lang: de
translation_key: project-antipattern
published: true
title: Java Performance Anti-Pattern Analyzer
description: Ein Werkzeug für statische und dynamische Analyse, das Repository-Aufrufe durch Java-Aufrufketten verfolgt und nach Schweregrad geordnete Befunde in IntelliJ IDEA bereitstellt.
img: assets/img/projects/itestra/anti-pattern-analysis-pipeline.png
importance: 3
category: professional
technologies: [Java, Statische Analyse, Eclipse JDT, Call Graphs, IntelliJ Plugin]
permalink: /de/projects/java-performance-antipattern-analyzer/
github: https://github.com/DigitalProductInnovationAndDevelopment/Anti-Pattern-Analysis
---

Bei der **itestra GmbH** arbeitete ich an einem Entwicklerwerkzeug zur Erkennung von Performance-Anti-Patterns in Java-Unternehmensanwendungen. Im Mittelpunkt stand ein häufiges und kostspieliges Muster: Repository- oder Datenbankaufrufe, die wiederholt innerhalb einer Schleife ausgeführt werden, auch wenn Schleife und Datenbankaufruf durch mehrere Methodenaufrufe getrennt sind.

Das System verbindet Quellcodestruktur mit optionalem Runtime-Sampling und stellt das Ergebnis über ein IntelliJ-IDEA-Plugin bereit. Entwickler erhalten strukturierte Befunde mit betroffenem Aufrufpfad, Quellposition, Analysetyp, Ausführungszeit und Schweregrad.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3"><h3>Java 17</h3><p class="mb-0">eigenständige Analyse-Engine auf Basis von Eclipse JDT</p></div>
  <div class="col-sm-4 mb-3"><h3>2 Analyseebenen</h3><p class="mb-0">statische Aufrufkettenerkennung und Runtime-Validierung</p></div>
  <div class="col-sm-4 mb-3"><h3>Direkt in der IDE</h3><p class="mb-0">Konfiguration und Ausführung über ein IntelliJ-Plugin</p></div>
</div>

## Die technische Problemstellung

Eine einfache Regel kann einen direkten Datenbankaufruf innerhalb einer sichtbaren Schleife markieren. Reale Unternehmenssoftware ist weniger direkt: Eine Servicemethode ruft einen weiteren Service auf, dieser einen Helper und erst später wird eine Hibernate-Repository-Methode erreicht. Eine Betrachtung einzelner Methoden übersieht diese indirekten Pfade und erzeugt False Negatives.

Das Werkzeug musste mehrere Fragen gemeinsam beantworten:

1. Welche Methoden existieren im Projekt und welche rufen einander auf?
2. Kommt eine konfigurierte Datenbank- oder Drittanbietermethode irgendwo in einer Aufrufkette vor?
3. Wurde dieser Aufruf aus einer Schleife in einer vorgelagerten Methode erreicht?
4. Bestätigt Runtime-Sampling den statischen Befund?
5. Wie lässt sich das Ergebnis in den normalen IDE-Workflow integrieren?

## Meine Umsetzung

- Java-Quellcode-Parsing und AST-Erzeugung mit Eclipse JDT
- Methodensammlung, Extraktion von Aufrufen und Aufbau eines Call Graphs
- Mehrstufiges Verfolgen indirekter Methodenbeziehungen
- Erkennung von Schleifenkontexten, die zu konfigurierten Repository-Methoden führen
- Strukturierte JSON-Ausgabe mit Quellposition, aufgerufenen Unterfunktionen, Analysetyp und Schweregrad
- Optionale dynamische Analyse auf Basis von Ausführungszeit-Snapshots
- Kontrollierte Test-Repositories für direkte Schleifen, Methodenketten und Stream-Szenarien
- IntelliJ-IDEA-Plugin in Kotlin für lokale Konfiguration und Ausführung
- CI-basierte Regressionstests, Pull-Request-Reviews und getrennte Delivery-Workflows für Analyzer und Plugin

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="eager" path="assets/img/projects/itestra/anti-pattern-analysis-pipeline.png" title="Pipeline für statische und dynamische Analyse mit IntelliJ-Integration" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Java-Quellcode wird in ASTs und einen projektweiten Call Graph überführt. Statische Befunde können mit Runtime-Snapshot-Daten ergänzt und über den IntelliJ-Workflow an Entwickler zurückgegeben werden.</div>

## Statische Analyse über die aktuelle Methode hinaus

Die Analyse-Engine parst Java-Compilation-Units mit Eclipse JDT, sammelt Methodendeklarationen, extrahiert Aufrufe und erstellt einen projektweiten Call Graph. Repository- oder andere Drittanbietermethoden werden konfiguriert, sodass die Regel an die jeweilige Codebasis angepasst werden kann.

Der Call-Chain-Analyzer verfolgt Pfade zu diesen Methoden und prüft für jeden Pfad, ob eine vorgelagerte Methode ihr Kind innerhalb einer Schleife aufruft. Dadurch kann beispielsweise folgendes Muster erkannt werden:

`updateCatalog()` -> `syncInventory()` -> Schleife -> `persistProduct()` -> `repository.save()`

Dies funktioniert auch dann, wenn der Datenbankaufruf nicht direkt in der Methode mit der Schleife steht.

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/itestra/call-chain-detection.png" title="Mehrstufige Verfolgung einer Aufrufkette von einer Schleife bis zur Repository-Methode" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Der Analyzer bewahrt den vollständigen Pfad von der Einstiegsmethode bis zum konfigurierten Datenbankaufruf. Das liefert nützlicheres Feedback als eine Regel, die nur den letzten Repository-Aufruf markiert.</div>

## Statische Struktur und Runtime-Evidenz

Statische Analyse erkennt eine riskante Struktur, kann deren tatsächliche Laufzeitkosten jedoch nicht allein bestimmen. Ich arbeitete zusätzlich an einer dynamischen Analyseschicht, die gesampelte Methodenausführungsdaten aus CSV-Snapshots liest. Sind Runtime-Daten vorhanden, vergleicht der Analyzer die durchschnittliche Ausführungszeit mit einem konfigurierbaren Schwellenwert und erweitert den Befund zu einem kombinierten Ergebnis.

Die strukturierte Ausgabe enthält Einstiegsmethode und Klasse, Quellzeile und Spalte, Repository-Aufruf und schleifenführende Methode, statischen oder kombinierten Analysetyp, gemessene Ausführungszeit sowie den daraus abgeleiteten Schweregrad.

Diese Trennung ermöglicht zwei Betriebsarten: reine Quellcodeanalyse oder Anreicherung derselben strukturellen Analyse mit Messwerten aus Profiling und Snapshot-Export.

## IntelliJ-IDEA-Integration

Der eigenständige Analyzer wird als JAR paketiert und in ein Kotlin-basiertes IntelliJ-Plugin eingebettet. Das Plugin erkennt das aktuelle Projektverzeichnis, nimmt projektspezifische Konfiguration entgegen, führt die Analyse lokal aus und zeigt die Ergebnisse direkt in der IDE.

Die Konfiguration unterstützt Pfade mit Datenbank- oder Drittanbietermethoden, Ausschlüsse für Pakete, Klassen oder Methoden über Pattern Matching, eine optionale Runtime-Snapshot-CSV sowie einen Schwellenwert für die dynamische Schweregradberechnung. Der Quellcode bleibt dabei vollständig auf dem Rechner des Entwicklers.

## Tests und Delivery-Prozess

Das Projekt wurde mit einem produktionsorientierten Workflow entwickelt. Die Arbeit war in Epics und GitHub Issues gegliedert, wurde über Feature Branches umgesetzt, in Pull Requests geprüft und durch getrennte CI-Workflows für Analyzer und Plugin abgesichert.

Gezielte Test-Repositories deckten direkte Repository-Aufrufe in Schleifen, mehrstufige Methodenketten, Stream-basierte Muster sowie gültige und ungültige Runtime-Snapshot-Daten ab. Diese reproduzierbaren Fixtures verhinderten Erkennungsregressionen bei der Weiterentwicklung von Call Graph und Plugin.

## Ergebnis

Das Ergebnis war ein vollständiger Developer-Tooling-Workflow aus Java-Parsing, projektweiter Beziehungsanalyse, Runtime-Evidenz, strukturierter Ausgabe, automatisierten Tests und IntelliJ-Integration. Das Projekt zeigte, wie eine eng umrissene Performance-Regel konfigurierbar, testbar und in einer realen Entwicklungsumgebung nutzbar umgesetzt werden kann.

## Technischer Stack

`Java 17` · `Kotlin` · `Eclipse JDT` · `JGraphT` · `Jackson` · `Maven` · `Gradle` · `IntelliJ Platform SDK` · `JUnit` · `GitHub Actions` · `VisualVM`

## Projektkontext und Quellcode

Ich realisierte diese Arbeit in einem Technologieberatungsprojekt mit der **itestra GmbH** und der **Technischen Universität München (TUM)**. Analyzer und IntelliJ-Plugin stehen im öffentlichen Projekt-Repository zur Verfügung.

<div class="mt-4"><a class="btn btn-sm btn-primary" href="https://github.com/DigitalProductInnovationAndDevelopment/Anti-Pattern-Analysis" target="_blank" rel="noopener">Quellcode auf GitHub ansehen</a></div>
