---
layout: page
lang: de
translation_key: academic-work
permalink: /de/academic-work/
title: akademische Arbeiten
description: Ausgewählte Forschungs- und Studienarbeiten zu Machine Learning und Softwaresystemen.
nav: true
nav_order: 3
---

## Masterarbeit

### Predicting Macroscopic Crowd Properties Using the SWIM Algorithm

<p class="mb-3">
  <strong>Präsentiert:</strong> 1. Oktober 2025 bei der accu:rate GmbH<br>
  <strong>Betreuer:</strong> Prof. Dr. Felix Dietrich<br>
  <strong>Fachliche Begleitung:</strong> Ana Cukarska<br>
  <strong>Zusammenarbeit bei der accu:rate GmbH:</strong> Dr. Angelika Kneidl und Johannes Hölscher
</p>

Diese Arbeit untersucht, wie neuronale Surrogatmodelle Evakuierungsanalysen beschleunigen können. Mikroskopische Personensimulationen liefern detaillierte Ergebnisse, sind jedoch bei großen Parameterstudien oder iterativer Gebäudeplanung mit hohen Rechenkosten verbunden. Die Arbeit kombiniert crowd:it-Simulationsdaten, den SWIM-Trainingsalgorithmus für neuronale Netze und mehrere Sampling-Strategien, um Gesamtevakuierungszeiten mit deutlich weniger Simulationen vorherzusagen.

Die Evaluation umfasst ein kontrolliertes Raum-Szenario und ein aus einer Richtlinie abgeleitetes vertikales Evakuierungsszenario. Mit dem vollständigen Datensatz erreichten die Surrogatmodelle eine starke Vorhersageleistung mit R²-Werten über 0,99. Unter strikten Simulationsbudgets erzielte Randomized Quasi-Monte Carlo Sampling mit nur 9 bis 14 Simulationen R²-Werte zwischen 0,95 und 0,97.

<div class="mt-3 mb-5">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/de/academic-work/master-thesis/' | relative_url }}">Ausführliche Übersicht lesen</a>
  <a class="btn btn-outline-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Masterarbeit herunterladen</a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/de/academic-work/tum-coursework/' | relative_url }}">TUM-Lehrveranstaltungen ansehen</a>
</div>

## Seminararbeit

### Understanding Linear Regions of the ReLU Networks

**Präsentiert:** 17. Juli 2023

Diese Seminararbeit untersucht, wie ReLU-Netze ihren Eingaberaum in lineare Regionen unterteilen und wie diese geometrische Struktur mit Ausdrucksfähigkeit, Robustheit, Trainierbarkeit und Überparametrisierung zusammenhängt. Sie unterscheidet zwischen der großen theoretischen Kapazität tiefer Netze und der geringeren Zahl von Aktivierungsmustern, die in der Praxis häufig erreicht werden.

Die Arbeit behandelt außerdem Robustheitsgarantien auf Grundlage lokalen affinen Verhaltens, die Grenzen der Übertragbarkeit von Ergebnissen flacher univariater Netze auf tiefere Architekturen sowie die Rolle moderater Überparametrisierung in der Optimierungslandschaft.

<div class="mt-3 mb-5">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/de/academic-work/seminar-paper/' | relative_url }}">Ausführliche Übersicht lesen</a>
  <a class="btn btn-outline-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Seminar_Paper_ReLU_Linear_Regions.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Seminararbeit herunterladen</a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/de/academic-work/tum-coursework/' | relative_url }}">TUM-Lehrveranstaltungen ansehen</a>
</div>

## Bachelorarbeit

### Discovering Issue-tracking Profiles of Software Development Teams

Diese Arbeit untersucht, wie GitHub-Issue-Aktivität in messbare Indikatoren für die Arbeitsweise von Softwareteams überführt werden kann. Der Abschlussbericht behandelt Forschungsfrage, Anforderungen, ereignisgesteuerte Architektur, Implementierung und Validierung einer funktionsfähigen Anwendung zur Repository-Analyse.

Das Python-Werkzeug ruft Repository-Daten über die GitHub API ab, wertet 15 Metriken und 13 strukturierte Prozessfragen aus, visualisiert die Ergebnisse und exportiert sie als CSV. Das Projekt verbindet damit eine Forschungsfrage aus dem Software Engineering mit einem ausführbaren und getesteten Analyse-Workflow.

<div class="mt-3 mb-5">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/de/academic-work/bachelors-thesis/' | relative_url }}">Ausführliche Übersicht lesen</a>
  <a class="btn btn-outline-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Bachelors_Thesis_Final_Report.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Bachelorarbeit herunterladen</a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/de/academic-work/metu-coursework/' | relative_url }}">METU-Lehrveranstaltungen ansehen</a>
</div>
