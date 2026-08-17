---
layout: page
lang: de
translation_key: project-evacuation
title: Simulationseffiziente Vorhersage von Evakuierungszeiten
description: Eine durchgängige Machine-Learning-Pipeline zur Vorhersage von Evakuierungszeiten in mehrstöckigen Gebäuden mit deutlich weniger Personensimulationen.
img: assets/img/projects/master-thesis/prediction-results.png
importance: 1
category: professional
technologies: [Python, PyTorch, End-to-End ML, Surrogate Modeling, Experimentautomatisierung]
permalink: /de/projects/evacuation-prediction/
github: https://github.com/Cagataygultekin/Predicting-Macroscopic-Crowd-Properties-Using-the-SWIM-Algorithm
---

Bei **accu:rate GmbH** entwickelte ich in Zusammenarbeit mit der **Technischen Universität München (TUM)** einen Machine-Learning-Workflow, der die Kosten wiederholter Evakuierungssimulationen reduziert. Das System verbindet Simulationsdaten aus crowd:it mit neuronalen Surrogatmodellen und sagt die gesamte Evakuierungszeit für bisher ungesehene Gebäudekonfigurationen voraus.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3"><h3>17.410</h3><p class="mb-0">Simulationsläufe im vollständigen, aus Gd99 abgeleiteten Datensatz</p></div>
  <div class="col-sm-4 mb-3"><h3>R² = 0,993</h3><p class="mb-0">R² auf dem zurückgehaltenen mehrstöckigen Testdatensatz</p></div>
  <div class="col-sm-4 mb-3"><h3>9 Läufe</h3><p class="mb-0">genügten für R² = 0,95 auf ungesehenen Konfigurationen</p></div>
</div>

## Die technische Herausforderung

Mikroskopische Personensimulationen liefern detaillierte und verlässliche Evakuierungsergebnisse. Für einen einzelnen Gebäudeentwurf sind jedoch viele Läufe nötig, weil Layout- und Populationsparameter variieren und jede Konfiguration stochastisches Verhalten enthält. Bei Parameterstudien und iterativer Planung wird dies schnell aufwendig.

Ich behandelte das Problem als Systemoptimierung und nicht nur als Modelltraining:

1. Eine reproduzierbare Pipeline von der Simulationsausgabe bis zur Modellbewertung aufbauen.
2. Ein schnelles Surrogatmodell trainieren, das die makroskopische Ausgabe des Simulators reproduziert.
3. Bestimmen, welche Simulationen bei begrenztem Budget tatsächlich ausgeführt werden sollten.
4. Die Vorhersageleistung auf Konfigurationen validieren, die weder für Training noch Modellauswahl verwendet wurden.

## Meine Ergebnisse

- Eine modulare Python-Pipeline zum Einlesen und Normalisieren von crowd:it-Ergebnissen
- Konfigurationsgesteuerte Experimente zu Tiefe, Breite, Aktivierung und Regularisierung
- Einheitliche Trainings-, Validierungs- und Testabläufe für SWIM und klassische neuronale Baselines
- Automatisierte Auswertung mit R², MSE, Trainingszeit und Generalisierung
- Sampling-Experimente mit QMC, randomisiertem QMC, entropiebasierter Auswahl, Sparse Grids und KMeans
- Visuelle Analysen von Vorhersagequalität, Parameterabdeckung, Laufzeit und Fehlerfällen

## Hauptanwendungsfall: Mehrstöckige Evakuierung auf Basis von Gd99

Zunächst validierte ich den Workflow an einem kleinen synthetischen Drei-Raum-Szenario. Diese Baseline half beim Test von Simulationsimport, Feature-Verarbeitung und Modellbewertung, war jedoch nicht der zentrale Anwendungsfall.

Die Hauptarbeit nutzte einen vertikalen Evakuierungsdatensatz, der aus der Gd99-Expertenstudie abgeleitet und in crowd:it umgesetzt wurde. Er beschreibt mehrstöckige Gebäude, in denen Personen aus mehreren Etagen gemeinsame Korridore und Treppenhäuser betreten. Mit zunehmender Gebäudehöhe oder Personenzahl kann sich Stau an Treppenhauseingängen bilden und über mehrere Etagen ausbreiten.

<div class="row justify-content-center"><div class="col-md-10 mt-3">
{% include figure.liquid loading="eager" path="assets/img/projects/master-thesis/gd99-multistory-evacuation.jpg" title="Gd99-Szenario einer mehrstöckigen Evakuierung mit Personenbewegungen über drei Ebenen" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Die Gd99-Quellstudie zeigt Ausgangsverteilung, Stau im Korridor nach 15 Sekunden und Bewegung über drei Gebäudeebenen nach 30 Sekunden. Mein Datensatz erweiterte diesen Aufbau zu einer parametrisierten Familie mehrstöckiger Konfigurationen. Quelle: Kneidl und Könnecke (2020), BAuA.</div>

Jede Konfiguration wird durch drei Eingaben beschrieben:

- **E - Etagen:** 3 bis 8 Etagen über dem Ausgang im Erdgeschoss
- **T - Treppenbreite:** 90 bis 240 cm
- **P - Personen pro Etage:** 20 bis 100 Personen

Die Simulationen wurden wiederholt, um stochastische Variation zu erfassen. Ich speicherte Konfiguration, Replikat-ID und gesamte Evakuierungszeit. Daraus entstanden **17.410 Simulationsläufe** für Modellierung und Bewertung.

## Von Simulationsdaten zu einer validierten Experimentpipeline

Ich implementierte den Workflow, der Rohdaten in wiederholbare Modellexperimente überführt:

1. crowd:it-Ausgabedateien parsen und normalisieren.
2. Einheitliche Feature- und Zieldatensätze erstellen.
3. Feste 80/10/10-Aufteilungen für Training, Validierung und Test erzeugen.
4. Architektur- und Hyperparameterexperimente für SWIM-Modelle durchführen.
5. Mit klassischen neuronalen Netzen in PyTorch vergleichen.
6. Die gewählte Konfiguration auf zurückgehaltenen und zuvor ungesehenen Parameterkombinationen prüfen.

Die beste SWIM-Konfiguration nutzte eine breite verdeckte Schicht mit 512 Einheiten und erreichte **R² = 0,997 auf Validierungsdaten und R² = 0,993 auf dem zurückgehaltenen Testdatensatz**. Im Laufzeitvergleich trainierte SWIM etwa **50-mal schneller** als die klassische neuronale Baseline bei vergleichbarer Vorhersageleistung.

<div class="row justify-content-center"><div class="col-md-9 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/master-thesis/prediction-results.png" title="SWIM-Vorhersagen für ungesehene mehrstöckige Evakuierungskonfigurationen" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Vorhergesagte und simulierte Evakuierungszeiten auf dem zurückgehaltenen Testdatensatz. Die Nähe zur idealen Regressionslinie zeigt, dass das Surrogat über die Trainingsdaten hinaus generalisierte.</div>

## Sampling als wichtigster Performance-Hebel

Ein präzises Surrogat ist nur dann nützlich, wenn für seine Trainingsdaten nicht der gesamte Simulationsraum berechnet werden muss. Deshalb verlagerte ich das zentrale Optimierungsziel von der Modellarchitektur auf die **Auswahl der Trainingsdaten**.

Ich verglich fünf Familien von Sampling-Strategien unter strikten Simulationsbudgets:

- Quasi-Monte Carlo mit Sobol-Sequenzen
- Randomisiertes Quasi-Monte Carlo mit Owen Scrambling
- Entropiebasiertes informatives Sampling
- Sparse-Grid-Sampling
- Repräsentatives Sampling mit KMeans

Randomisiertes QMC zeigte die stärkste Generalisierung bei sehr kleinem Budget. Seine Punkte deckten den dreidimensionalen Gebäuderaum ab, ohne sich stark in bereits dichten Regionen zu bündeln.

<div class="row justify-content-center"><div class="col-md-10 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/master-thesis/sampling-coverage.png" title="Abdeckung durch randomisiertes QMC über Etagenzahl, Treppenbreite und Personen pro Etage" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Neun mit RQMC ausgewählte Simulationen vor dem vollständigen Gd99-basierten Parameterraum. Die Auswahl deckt verschiedene Etagenzahlen, Treppenbreiten und Personenzahlen ab, statt sich auf die häufigsten Konfigurationen zu konzentrieren.</div>

| Trainingsdesign | Simulationsläufe | Test-R² | Generalisierungs-R² |
|---|---:|---:|---:|
| RQMC-9 | 9 | 0,994 | 0,950 |
| RQMC-14 | 14 | 0,998 | 0,970 |

Mit nur **9 Simulationen** erreichte das Modell **R² = 0,95** auf den übrigen ungesehenen Konfigurationen. Vierzehn Simulationen erhöhten diesen Wert auf **R² = 0,97**. Der Trainingssatz mit 9 Läufen entspricht ungefähr **0,05 % des vollständigen Datensatzes mit 17.410 Läufen**.

## Wichtige technische Entscheidungen

- **Reproduzierbarkeit:** Einheitliche Datenaufteilungen und Bewertungsregeln für Architektur- und Sampling-Experimente.
- **Generalisierung zuerst:** Gesampelte Modelle wurden auf dem Komplement der Trainingsauswahl und nicht nur auf einem kleinen zufälligen Testsatz geprüft.
- **Baseline-Vergleich:** SWIM wurde mit klassischen neuronalen Netzen verglichen und nicht isoliert bewertet.
- **Durchgängige Verantwortung:** Ich übernahm Datenaufbereitung, Experimentsteuerung, Modelltraining, Auswertung, Visualisierung und technische Dokumentation.
- **Kostenbewusste Optimierung:** Die Zahl erforderlicher Personensimulationen war neben der Vorhersageleistung eine zentrale Systemmetrik.

## Ergebnis

Das Endergebnis war mehr als ein angepasstes Regressionsmodell. Es war ein reproduzierbarer Workflow zur Entscheidung, **welche Simulationen ausgeführt werden, wie daraus ein Surrogat trainiert wird und wie seine Zuverlässigkeit auf ungesehenen Gebäudekonfigurationen überprüft werden kann**.

Die Arbeit zeigte, dass eine sorgfältig ausgewählte Simulationsmenge die erschöpfende Datenerzeugung für schnelle Entwurfsanalysen ersetzen und dabei eine starke Vorhersageleistung bewahren kann. Ein sinnvoller nächster Schritt wäre die Integration in crowd:it, damit eine kleine Zahl von Simulationen erzeugt, zwischengespeichert und für nahezu sofortige Vorhersagen in iterativen Planungsprozessen wiederverwendet werden kann.

## Technischer Stack

`Python` · `PyTorch` · `SWIMNetworks` · `scikit-learn` · `SciPy` · `pandas` · `NumPy` · `Matplotlib` · `Seaborn` · `crowd:it`

## Projektkontext und Dokumentation

Das Projekt entstand bei **accu:rate GmbH** in Zusammenarbeit mit der **TUM** und diente zugleich als meine Masterarbeit in Informatik. Diese Projektseite konzentriert sich auf die technische Umsetzung, die akademische Seite auf Forschungsrahmen und formale Angaben.

<div class="mt-4">
  <a class="btn btn-sm btn-primary" href="{{ '/de/academic-work/master-thesis/' | relative_url }}">Akademische Übersicht</a>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener">Masterarbeit lesen (PDF)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/Cagataygultekin/Predicting-Macroscopic-Crowd-Properties-Using-the-SWIM-Algorithm" target="_blank" rel="noopener">Quellcode auf GitHub ansehen</a>
</div>
