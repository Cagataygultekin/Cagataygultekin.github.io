---
layout: page
lang: de
translation_key: master-thesis
title: Predicting Macroscopic Crowd Properties Using the SWIM Algorithm
permalink: /de/academic-work/master-thesis/
description: Masterarbeit in Informatik an der Technischen Universität München.
nav: false
---

<div class="mb-4"><a class="btn btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Vollständige Masterarbeit herunterladen</a></div>

## Überblick

Mikroskopische Personensimulatoren liefern detaillierte Einblicke in Evakuierungsverhalten, doch ihre Rechenkosten machen große Parameterstudien und iterative Gebäudeplanung aufwendig. Diese Arbeit untersucht, ob neuronale Surrogatmodelle die gesamte Evakuierungszeit mit hoher Vorhersageleistung und deutlich weniger Personensimulationen bestimmen können.

Die Arbeit entstand als Masterarbeit in Informatik an der Technischen Universität München in Zusammenarbeit mit accu:rate GmbH. Prof. Dr. Felix Dietrich betreute die Arbeit, Ana Cukarska war meine Beraterin. Bei accu:rate GmbH arbeitete ich mit Dr. Angelika Kneidl und Johannes Hölscher zusammen. Am 1. Oktober 2025 präsentierte ich die abgeschlossene Arbeit im Büro von accu:rate.

## Forschungsfragen

Die Arbeit behandelt drei zusammenhängende Fragen:

1. Können mit dem SWIM-Algorithmus trainierte neuronale Surrogatmodelle makroskopische Evakuierungsergebnisse zuverlässig reproduzieren?
2. Welche Sampling-Strategien liefern bei sehr begrenztem Simulationsbudget die stärksten Modelle?
3. Bleibt der Ansatz sowohl in einem kontrollierten synthetischen Aufbau als auch in einem regelbasierten Evakuierungsszenario wirksam?

## Methodik

Der experimentelle Workflow verbindet Simulationsdatenerzeugung, Datenaufbereitung, Modelltraining, Validierung und Sampling-Analyse in einer reproduzierbaren Python-Pipeline.

### Szenario 1: kontrollierte Raumevakuierung

Im ersten Szenario führen drei Ausgangsräume in einen gemeinsamen Zielbereich. Personenkonfigurationen wurden automatisch erzeugt und mit crowd:it simuliert. Dieser kontrollierte Aufbau diente als Baseline, zur Untersuchung der Features und zur Validierung der SWIM-basierten Regression.

### Szenario 2: vertikale Evakuierung

Das zweite Szenario nutzt einen aus der Gd99-Richtlinie abgeleiteten Datensatz zur vertikalen Evakuierung. Seine Parameter beschreiben Gebäude- und Populationseigenschaften wie Etagenzahl, Treppenbreite und Personen pro Etage. Das Szenario bildet eine realistischere Grundlage zur Bewertung von Vorhersageleistung und praktischer Anwendbarkeit.

### Sampling-Studie

Unter festen Simulationsbudgets wurden mehrere Strategien verglichen:

- Quasi-Monte-Carlo-Sampling
- Randomisiertes Quasi-Monte-Carlo-Sampling
- Entropiebasiertes Sampling
- Sparse-Grid-Sampling
- KMeans-basiertes Sampling

Mit jeder Stichprobe wurde ein SWIM-Surrogat trainiert und anschließend auf Validierungs-, Test- und ungesehenen Teilen des Gesamtdatensatzes bewertet.

## Zentrale Ergebnisse

| Ergebnis | Resultat |
|---|---|
| Synthetisches Raumszenario | Vorhersageleistung: R² bis 0,89 |
| Regelbasiertes Szenario | Vorhersageleistung: R² über 0,99 mit dem vollständigen Datensatz |
| Beste Methode bei kleinem Budget | Randomisiertes Quasi-Monte-Carlo-Sampling |
| Performance bei kleinem Budget | R² zwischen 0,95 und 0,97 mit nur 9 bis 14 Simulationen |
| Praktischer Effekt | Mehr als eine Größenordnung weniger erforderliche Simulationen |

Randomisiertes Quasi-Monte Carlo bot das verlässlichste Verhältnis zwischen Performance und Kosten. Es generalisierte mit sehr kleinen Trainingsmengen stark, während entropiebasierte und Sparse-Grid-Methoden mehr Simulationen für vergleichbare Ergebnisse benötigten. KMeans-Sampling war in den untersuchten Konfigurationen weniger stabil.

## Hauptbeiträge

- Ein synthetischer Evakuierungsdatensatz und ein automatisierter Simulationsworkflow für kontrollierte Auswertungen
- Anpassung SWIM-basierter neuronaler Surrogatmodelle an zwei Evakuierungsszenarien
- Eine reproduzierbare Trainings- und Auswertungspipeline für simulationsgetriebenes Machine Learning
- Systematischer Vergleich von Sampling-Strategien unter strikten Simulationsbudgets
- Nachweis, dass sorgfältig gewählte Simulationseingaben den Rechenaufwand ohne Verlust der Vorhersagequalität reduzieren können

## Weiterführende Arbeit

Die Arbeit schlägt Erweiterungen auf ungesehene Gebäudetypen, reichhaltigere Verhaltensvariablen und adaptive Sampling-Methoden vor. Ein praktischer nächster Schritt wäre die direkte Integration in crowd:it, wo wenige Simulationen ein Surrogatmodell trainieren und zwischenspeichern könnten, um in iterativen Planungsprozessen schnelle Vorhersagen zu liefern.
