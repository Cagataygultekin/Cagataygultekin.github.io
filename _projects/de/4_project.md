---
layout: page
lang: de
translation_key: project-chemcpa
published: true
title: Reproduzierbare ML-Workflows für chemCPA
description: Research Engineering für ein Python/PyTorch-System zur Vorhersage zellulärer Reaktionen auf unbekannte Wirkstoffperturbationen mit Schwerpunkt auf Fehlerdiagnose, Datenworkflows und reproduzierbaren Experimenten.
img: assets/img/projects/helmholtz/chemcpa-architecture.png
importance: 6
category: professional
technologies: [Python, PyTorch, Scientific ML, Reproduzierbare Forschung, Fehlerdiagnose]
permalink: /de/projects/chemcpa-research-engineering/
github: https://github.com/theislab/chemcpa
---

Am **Helmholtz Zentrum München - Deutsches Forschungszentrum für Gesundheit und Umwelt (GmbH)** und an der **Technischen Universität München (TUM)** unterstützte ich als wissenschaftliche Hilfskraft die öffentliche chemCPA-Forschungscodebasis. Meine Arbeit konzentrierte sich auf das Verstehen, Reproduzieren und Diagnostizieren von Problemen in einem bestehenden Python/PyTorch-System zur Vorhersage zellulärer Arzneimittelreaktionen.

Die Tätigkeit verband Machine-Learning-Forschung und Software Engineering. Forschende mussten Experimente ausführen, biologische Datensätze aufbereiten, Konfigurationen vergleichen und Ergebnisse über verschiedene Umgebungen hinweg reproduzieren. Ich arbeitete entlang dieser Workflows und übersetzte gemeldetes Verhalten in konkrete technische Erkenntnisse für das Entwicklungsteam.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Bestehendes Forschungssystem</h3><p class="mb-0">Arbeit in einer gewachsenen Codebasis mit Modell-, Daten-, Experiment- und Analyseschichten statt an einem isolierten Prototyp.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Reproduzierbare Ausführung</h3><p class="mb-0">Unterstützung konfigurationsgesteuerter Experimente und konsistenter Umgebungen mit YAML, seml, Conda, Docker, Jupyter und jupytext.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Domänenübergreifende Diagnose</h3><p class="mb-0">Untersuchung von Fehlern, deren Ursache in Modellcode, Experimentkonfiguration, biologischen Daten oder lokalen Abhängigkeiten liegen konnte.</p></div></div>
</div>

## Technischer Kontext

chemCPA ist ein Deep-Learning-System zur Vorhersage der Reaktion von Zellen auf zuvor unbekannte Wirkstoffperturbationen. Es kombiniert gelernte Repräsentationen des basalen Zellzustands, des zellulären Kontexts, der Dosierung und der Molekülstruktur. Graph- oder sprachbasierte molekulare Encoder repräsentieren Wirkstoffe über ihre chemische Struktur statt als feste Kategorie.

Diese wissenschaftliche Fähigkeit hängt von mehr als der Modelldefinition ab. Ein vollständiges Experiment umfasst rohe und verarbeitete Single-Cell-Daten, molekulare Embeddings, PyTorch-Trainingscode, YAML-Konfigurationen, Umgebungsverwaltung, Experiment-Tracking und Analyse-Notebooks. Ein gemeldetes Problem konnte daher mehrere technische Ursachen haben.

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/helmholtz/chemcpa-architecture.png" title="Die chemCPA-Modellarchitektur" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Das offizielle chemCPA-Architekturdiagramm aus dem Projekt-Repository und der NeurIPS-2022-Arbeit von Hetzel et al. Es zeigt Encoder-Decoder, Attribute Embeddings, das molekulare Perturbationsnetz und adversariale Klassifikatoren. Das Bild wird unter der MIT-Lizenz des Repositorys verwendet.</div>

## Arbeit über mehrere Schichten der Codebasis

<div class="row my-3">
  <div class="col-md-6 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Datenvorverarbeitung</h3><p class="mb-0">Arbeit an den Pfaden, die rohe und aufbereitete biologische Datensätze in Eingaben für Training und Evaluation überführen.</p></div></div>
  <div class="col-md-6 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Experimentkonfiguration</h3><p class="mb-0">Prüfung YAML-basierter Einstellungen, Datensatzreferenzen, Modellparameter und seml-Ausführungspfade beim Reproduzieren gemeldeten Verhaltens.</p></div></div>
  <div class="col-md-6 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Modell- und Trainingsworkflows</h3><p class="mb-0">Analyse von PyTorch-Modellen und Trainingsschleifen, um Codeverhalten, Konfiguration und Eingabedaten als mögliche Ursache zu unterscheiden.</p></div></div>
  <div class="col-md-6 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Analyse und Reporting</h3><p class="mb-0">Verwendung von Notebooks und Experimentausgaben zur Verifikation, Dokumentation und Überführung gemeldeter Probleme in umsetzbare Befunde.</p></div></div>
</div>

## Reproduktion und Diagnose von Problemen

Mein Hauptbeitrag war die systematische Untersuchung von Problemen, die Forschende meldeten. Statt jeden Fehler als Modellbug anzunehmen, verfolgte ich den vollständigen Ausführungspfad und isolierte die verantwortliche Schicht.

1. Reproduktion mit demselben Datensatz, derselben Experimentkonfiguration und demselben Ausführungspfad
2. Prüfung von Eingabedateien, Vorverarbeitungsannahmen sowie Beziehungen zwischen rohen und verarbeiteten Daten
3. Vergleich von YAML-Einstellungen und Modellparametern mit einem funktionierenden Experiment
4. Untersuchung des relevanten Modell-, Trainings- oder Analysecodes, nachdem Konfigurations- und Datenprobleme ausgeschlossen waren
5. Prüfung von Paketversionen, Conda-Umgebungen, Docker-Setup und Notebook-Synchronisation bei Abweichungen zwischen Rechnern
6. Dokumentation von Ursache, Reproduktionsschritten und technischen Erkenntnissen über GitHub und Projektkommunikation

Dieser Prozess war besonders wichtig, weil Fehler in Forschungssoftware häufig indirekt sind. Ein fehlender Datenpfad, eine inkompatible Abhängigkeit, ein veraltetes Notebook oder eine abweichende Konfiguration kann erst später als Trainings- oder Evaluationsproblem sichtbar werden.

## Reproduzierbarkeit als Engineering-Anforderung

chemCPA verwendet mehrere Mechanismen für wiederholbare Experimente: Konfigurationsdateien definieren Varianten, seml verwaltet Ausführungen, Conda und Docker erfassen Abhängigkeiten und jupytext hält Notebooks mit textbasierten Quelldateien synchron. Mit diesen Schichten arbeitete ich bei der Reproduktion von Experimenten und beim Vergleich verschiedener Umgebungen.

Ziel war, den vollständigen Weg von einer Forschungsfrage bis zu einem ausführbaren Experiment zu bewahren. Datenauswahl, Umgebung, Konfiguration und Ergebnisanalyse wurden daher als Teile eines Systems behandelt.

## Ergebnis

Das Projekt stärkte meine Fähigkeit, mich in eine unbekannte Machine-Learning-Codebasis einzuarbeiten, Abhängigkeiten über mehrere technische Schichten zu verfolgen und mit Personen aus unterschiedlichen Domänen klar zu kommunizieren. Ich lernte, wissenschaftliche Annahmen von Softwarefehlern zu trennen und unvollständige Issue-Berichte in reproduzierbare Engineering-Probleme zu überführen.

## Technischer Stack

`Python` · `PyTorch` · `Jupyter` · `jupytext` · `YAML` · `seml` · `Conda` · `Docker` · `Git` · `GitHub` · `Single-Cell-Datenworkflows` · `Graphbasierte Molekülrepräsentationen`

## Projektkontext und Attribution

Ich arbeitete von Februar bis August 2023 im Rahmen einer Zusammenarbeit zwischen dem **Helmholtz Zentrum München - Deutsches Forschungszentrum für Gesundheit und Umwelt (GmbH)** und der **Technischen Universität München (TUM)** an dem Projekt. chemCPA, die Modellarchitektur und die publizierten wissenschaftlichen Ergebnisse stammen von den Autoren der Arbeit. Meine Rolle umfasste Research Engineering, Unterstützung der Reproduzierbarkeit, Issue-Untersuchung und Kommunikation rund um die bestehende Codebasis.

<div class="mt-4"><a class="btn btn-sm btn-primary" href="https://github.com/theislab/chemcpa" target="_blank" rel="noopener">chemCPA auf GitHub ansehen</a> <a class="btn btn-sm btn-outline-primary" href="https://arxiv.org/abs/2204.13545" target="_blank" rel="noopener">Forschungsarbeit lesen</a></div>
