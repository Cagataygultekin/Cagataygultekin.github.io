---
layout: page
lang: de
translation_key: bachelors-thesis
title: Discovering Issue-tracking Profiles of Software Development Teams
permalink: /de/academic-work/bachelors-thesis/
description: Bachelorarbeit über messbare Issue-Tracking-Praktiken und repositorybasierte Softwareprozessanalyse.
nav: false
---

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Bachelors_Thesis_Final_Report.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Abschlussbericht herunterladen</a>
  <a class="btn btn-outline-primary mb-2" href="https://github.com/DIP-Group/GithubTracker" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Forschungswerkzeug ansehen</a>
</div>

## Überblick

Issue Tracker sind zentral für kollaborative Softwareentwicklung. Ihre wirksame Nutzung erfordert jedoch mehr als das Erfassen von Aufgaben. Teams treffen unterschiedliche Entscheidungen zu Zuweisungen, Labels, Meilensteinen, Kommentaren, Reaktionsverhalten und Issue-Abschluss. Bei uneinheitlicher Nutzung verliert der Tracker sowohl als operatives System als auch als Forschungsdatenquelle an Wert.

Meine Bachelorarbeit entstand im Juni 2021 gemeinsam mit İlbey Evcil, Burak Kaan Kahraman und Muhammed Didin an der **Middle East Technical University Northern Cyprus Campus**. Sie untersuchte, wie diese Praktiken mit messbaren Repository-Indikatoren beschrieben werden können. Betreut wurde die Arbeit von Dr. Sukru Eraslan.

## Forschungsziel

Das Projekt untersuchte, wie Issue-Tracking-Aktivitäten in interpretierbare Profile von Softwareentwicklungspraktiken überführt werden können. Ziel war, aus verteilten GitHub-Datensätzen eine strukturierte Sammlung von Metriken und Fragen abzuleiten, die zeigt, wie konsistent ein Team seinen Issue Tracker nutzt.

Das gewünschte Ergebnis war praktisch und analytisch. Das Framework sollte Forschung zu Softwareprozessen unterstützen und kleineren Teams oder Lernenden Orientierung für oft implizit bleibende Issue-Tracking-Praktiken geben.

## Analytisches Framework

Das implementierte Framework enthält 15 Repository-Metriken und 13 strukturierte Prozessfragen. Es betrachtet mehrere Dimensionen:

- Verhältnis zwischen geöffneten und geschlossenen Issues,
- Verteilung von Issues und Kommentaren auf Mitwirkende,
- Nutzung und Konsistenz von Labels,
- Zuweisung von Verantwortung,
- Reaktions- und Abschlusszeiten,
- Verwendung und Abschlussverhalten von Meilensteinen,
- Kommunikation nach dem Schließen eines Issues.

Ergänzt wurden diese Maße durch Fragen, etwa ob Labels konsistent genutzt werden, Verantwortlichkeiten über Mitwirkende verteilt sind und Issues mit Meilenstein anders abgeschlossen werden als solche ohne Meilenstein.

## Methode und Forschungswerkzeug

Um das Framework ausführbar zu machen, entwickelte das Team eine Python-Desktop-Anwendung mit Tkinter, PyGithub und Matplotlib. Sie ruft GitHub-Repository-Daten ab, speichert Objekte für wiederholbare Analysen lokal, berechnet ausgewählte Metriken, beantwortet strukturierte Prozessfragen und visualisiert die Ergebnisse. Resultate können zudem als CSV exportiert werden.

Die Methode umfasst fünf Schritte:

1. Repository- und Issue-Daten über die GitHub API sammeln,
2. quantitative Indikatoren aus Issues, Mitwirkenden, Labels, Kommentaren, Zuständigkeiten und Meilensteinen ableiten,
3. praxisorientierte Fragen anhand der beobachteten Aktivität bewerten,
4. Ergebnisse als Visualisierungen, Tabellen und Kennzahlen prüfen,
5. Resultate für Vergleich und Profilbildung exportieren.

## Beitrag

Der Hauptbeitrag ist eine operative Verbindung zwischen Fragen zu Softwareprozessen und beobachtbaren Repository-Daten. Statt sich allein auf allgemeine Empfehlungen zu stützen, macht das Framework Issue-Tracking-Verhalten durch explizite Metriken und wiederholbare Berechnungen prüfbar.

Die Arbeit lieferte außerdem eine funktionierende Desktop-Anwendung und nicht nur ein konzeptionelles Modell. Die technische Implementierung wird auf der [Projektseite]({{ '/de/projects/issue-tracking-team-analytics/' | relative_url }}) mit Fokus auf GitHub-Integration, Desktop-Workflow, Visualisierung und Export beschrieben.

## Validierung und dokumentierte Grenzen

Der Abschlussbericht dokumentiert Unit-Tests für Metrik- und Fragenberechnung, einen Integrationstest des GitHub-API-Abrufs, Systemprüfungen anhand erzeugter CSV-Dateien sowie Performance- und Stresstests mit Repositories verschiedener Größen. Die Tests machten auch die wichtigste operative Grenze sichtbar: Bei wachsenden Repository- und Issue-Zahlen werden GitHub-API-Ratenlimits relevant. Lokale Serialisierung reduzierte wiederholte API-Aufrufe, während größere Analysen vom verfügbaren Anfragebudget abhängig blieben.

## Zentrale Aussage

Die Qualität von Issue Tracking zeigt sich in Struktur und Timing der Repository-Aktivität. Durch die Überführung dieser Aktivität in ein konsistentes Analyseframework können Teams und Forschende Praktiken bewerten, die sonst informell und schwer vergleichbar bleiben.
