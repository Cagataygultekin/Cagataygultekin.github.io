---
layout: page
lang: de
translation_key: seminar-paper
title: Understanding Linear Regions of the ReLU Networks
permalink: /de/academic-work/seminar-paper/
description: Master-Seminararbeit über Geometrie, Robustheit und Ausdrucksfähigkeit von ReLU-Netzen.
nav: false
---

<div class="mb-4"><a class="btn btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Seminar_Paper_ReLU_Linear_Regions.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Vollständige Seminararbeit herunterladen</a></div>

## Überblick

ReLU-Netze sind stückweise lineare Funktionen. Ihr Eingaberaum wird in Regionen geteilt, in denen sich das Netz wie eine affine Funktion verhält. Änderungen der Aktivierungsmuster definieren die Grenzen zwischen diesen Regionen. Die Seminararbeit untersucht, wie diese geometrische Struktur verschiedene Aspekte des Verhaltens neuronaler Netze erklärt.

Die Arbeit entstand im Masterseminar Selected Topics in Machine Learning Research an der Technischen Universität München unter Prof. Dr. Stephan Günnemann und wurde am 17. Juli 2023 präsentiert.

## Leitfragen

1. Wie werden lineare Regionen und Aktivierungsmuster definiert und gezählt?
2. Wie hängt die Geometrie linearer Regionen mit adversarial Robustness zusammen?
3. Was zeigen lineare Regionen über Ausdrucksfähigkeit und Trainierbarkeit?
4. Wie verändern Tiefe, flache univariate Netze und Überparametrisierung die möglichen Schlussfolgerungen?

## Lineare Regionen und Aktivierungsmuster

Jede ReLU-Aktivierung wechselt ihren Zustand entsprechend dem Vorzeichen ihrer Pre-Activation. Die entstehenden Aktivierungsmuster teilen den Eingaberaum des Netzes in stückweise affine Regionen, in denen jeweils eine andere affine Abbildung aktiv ist. Theoretische Obergrenzen können insbesondere für tiefe Netze sehr groß sein. Empirische Arbeiten zeigen jedoch, dass trainierte Netze oft deutlich weniger Aktivierungsmuster nutzen, als ihre Architektur theoretisch ausdrücken könnte.

Die Unterscheidung zwischen theoretischer Kapazität und gelerntem Verhalten ist zentral. Ein Netz kann eine sehr große Funktionsfamilie darstellen, während Initialisierung und gradientenbasierte Optimierung nur einen kleineren Teil dieses Raums erkunden.

## Robustheit

Die Arbeit betrachtet den Zusammenhang zwischen stückweise linearer Geometrie und adversarial Robustness. Innerhalb einer linearen Region lässt sich ein Klassifikator über seine lokale affine Darstellung analysieren. Daraus können untere und obere Grenzen für die zur Änderung einer Vorhersage erforderliche Störung abgeleitet werden.

Diskutiert wird ein Regularisierungsverfahren, das nachweisbare Robustheit verbessert, indem es lineare Regionen um Datenpunkte vergrößert und ihren Abstand zur Entscheidungsgrenze erhöht, während eine wettbewerbsfähige Testleistung erhalten bleibt. Zugleich betont die Arbeit, dass die Geometrie linearer Regionen nur einen Teil von Robustheit beschreibt und mit breiteren Auswertungs- und Trainingsstrategien kombiniert werden sollte.

## Ausdrucksfähigkeit und Performance

Lineare Regionen dienen häufig als Maß für expressive Kapazität. Tiefe kann die Zahl darstellbarer Funktionen erhöhen, doch die tatsächlich gelernten Regionen hängen von Aufgabe und Optimierung ab. Memorisationsexperimente zeigen, dass Regionszahlen wachsen können, wenn die Aufgabe stark oszillierende Entscheidungsgrenzen begünstigt.

Die Arbeit trennt drei Konzepte:

- Funktionen, die eine Architektur ausdrücken kann
- Funktionen, die nahe der Initialisierung repräsentiert werden
- Funktionen, die Training mit nicht vernachlässigbarer Wahrscheinlichkeit erreichen kann

Diese Trennung erklärt, warum theoretische Ausdrucksfähigkeit nicht automatisch praktische Performance bedeutet.

## Flache Netze und Überparametrisierung

Ergebnisse für flache univariate ReLU-Netze liefern nützliche Konvergenz- und Implicit-Bias-Garantien, lassen sich aber nicht direkt auf tiefere multivariate Architekturen übertragen. Unterschiede in Dimension, Bias-Termen, Tiefe und Optimierungsannahmen begrenzen den direkten Vergleich.

Die Arbeit diskutiert außerdem, wie milde Überparametrisierung die Optimierungslandschaft verändert. Zusätzliche Neuronen machen das Ziel nicht zwangsläufig lokal konvex, können jedoch weitere Richtungen bereitstellen, durch die lokale Optimierungsverfahren schlechte Lösungen vermeiden und sich globalen Minima annähern.

## Zentrale Aussage

Die Analyse linearer Regionen ist eine hilfreiche Perspektive auf ReLU-Netze, doch die Anzahl der Regionen allein ist kein vollständiges Qualitätsmaß. Robustheit, Generalisierung, Tiefe, Optimierungsdynamik und der Unterschied zwischen theoretischer und effektiver Kapazität müssen gemeinsam betrachtet werden.

## Weiterführende Fragen

- Besseres Verständnis von Kompromissen zwischen Tiefe und Breite
- Lokale statt globale Schätzungen der Regionsanzahl
- Spezialisierte Regularisierung auf Basis der Aktivierungsgeometrie
- Stärkere Verbindungen zwischen linearen Regionen und Interpretierbarkeit
- Empirische Validierung auf größeren Datensätzen und Architekturen
