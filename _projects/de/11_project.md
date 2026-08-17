---
layout: page
lang: de
translation_key: project-fruit-tree
published: true
title: Erkennungssystem für Obstbäume
description: Eine klassische Computer-Vision-Pipeline mit Form-, Moment- und Farbmerkmalen sowie K-Fold-Validierung zur Bilderkennung.
importance: 11
category: earlier
technologies: [Computer Vision, Merkmalsextraktion, Chain Codes, Statistische Momente, K-Fold-Validierung]
visual: fruit-vision
visual_icon: fa-solid fa-tree
visual_kicker: Klassische Computer Vision
visual_label: Von Merkmalen zur Erkennung
permalink: /de/projects/fruit-tree-recognition/
---

Das **Erkennungssystem für Obstbäume** war ein Computer-Vision-Projekt im Bachelorstudium. Es überführte Rohbilder in strukturierte Form- und Farbbeschreibungen und bewertete deren Nutzen für die Erkennung.

## Erkennungspipeline

Das System bestand aus fünf Schritten:

1. Bilddaten erfassen,
2. Chain Codes und Shape Numbers extrahieren,
3. statistische Momente und Farbinformationen berechnen,
4. den Erkennungsprozess mit K-Fold-Cross-Validation validieren,
5. die Erkennungsleistung messen.

Das Projekt setzte auf interpretierbares Feature Engineering. Statt ein Bild als undurchsichtige Eingabe zu behandeln, beschrieb es die visuellen Eigenschaften der Bäume mit expliziten geometrischen, statistischen und farbbasierten Maßen.

## Technischer Schwerpunkt

Die zentrale Aufgabe war, visuelle Informationen in Merkmale zu überführen, die über verschiedene Stichproben hinweg konsistent vergleichbar waren. Chain Codes beschrieben Objektgrenzen, Shape Numbers fassten die Geometrie zusammen, statistische Momente erfassten Verteilungseigenschaften und Farbmerkmale ergänzten weitere Information.

K-Fold-Cross-Validation entkoppelte die Bewertung von einer einzelnen Train-Test-Aufteilung und lieferte ein verlässlicheres Bild der Erkennungsleistung über die verfügbaren Beispiele.

## Kernmethoden

`Bilderfassung` / `Chain Codes` / `Shape Numbers` / `Statistische Momente` / `Farbmerkmale` / `K-Fold-Cross-Validation` / `Performance-Auswertung`

## Projektkontext

Das Projekt entstand im Kurs **CNG466 Fundamental Image Processing Techniques** während meines Computer-Engineering-Studiums an der **Middle East Technical University Northern Cyprus Campus**. Implementierung und Datensatz sind nicht öffentlich.
