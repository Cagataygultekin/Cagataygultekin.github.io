---
layout: page
lang: de
translation_key: project-mips
published: true
title: MIPS-Assembler in Python
description: Ein Python-Assembler, der zentrale MIPS-Instruktionen und ausgewählte Pseudoinstruktionen in hexadezimalen Maschinencode übersetzt.
importance: 13
category: earlier
technologies: [Python, MIPS Assembly, Instruktionskodierung, CLI, Stapelverarbeitung]
visual: mips-assembler
visual_icon: fa-solid fa-microchip
visual_kicker: Systemprogrammierung
visual_label: MIPS zu Hexadezimalcode
permalink: /de/projects/python-mips-assembler/
---

Dieses Projekt implementierte einen kompakten Assembler in Python, der einen Teil des MIPS-Befehlssatzes in hexadezimalen Maschinencode und Object Code übersetzt.

## Übersetzungsworkflow

Der Assembler nahm zentrale MIPS-Instruktionen entgegen, zerlegte ihre Operanden, ordnete sie dem korrekten Instruktionsformat zu und erzeugte die entsprechende hexadezimale Repräsentation. Ausgewählte Pseudoinstruktionen wurden vor der Kodierung in unterstützte Basisinstruktionen überführt.

## Interaktiver und Stapelmodus

Die Anwendung unterstützte zwei Ausführungswege:

- **Interaktiver Modus:** Eine Instruktion aus der Kommandozeile lesen, assemblieren und das hexadezimale Ergebnis ausgeben.
- **Stapelmodus:** Eine `.src`-Datei lesen, ihre Instruktionen assemblieren und eine `.obj`-Datei mit Object Code schreiben.

Beide Modi nutzten eine gemeinsame Übersetzungspipeline statt an eine einzelne Eingabequelle gebundener Logik. Das Projekt vertiefte mein Verständnis von Instruktionsformaten, Operandenparsing, bitgenauer Kodierung und der Beziehung zwischen Assemblersprache und Maschinendarstellung.

## Technischer Kern und Konzepte

`Python` / `MIPS Assembly` / `Instruktionsparsing` / `Maschinencode-Kodierung` / `Expansion von Pseudoinstruktionen` / `CLI` / `Dateiverarbeitung`

## Projektkontext

Der Assembler entstand im Kurs **CNG331 Computer Organization** während meines Computer-Engineering-Studiums an der **Middle East Technical University Northern Cyprus Campus**. Der Originalquellcode ist derzeit nicht öffentlich.
