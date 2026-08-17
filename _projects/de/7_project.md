---
layout: page
lang: de
translation_key: project-hpc
published: true
title: Parallele HDF5-Ausgabe für CFD-Simulationen
description: Eine C++/MPI-Erweiterung für NS-EOF mit strukturierter HDF5-Ausgabe und XDMF-Metadaten für schnellere, kleinere und direkt in ParaView nutzbare Simulationsdaten.
img: assets/img/projects/hpc/hdf5-data-layout.png
importance: 4
category: professional
technologies: [C++, MPI, Parallele Ein-/Ausgabe, HDF5, Performance-Profiling]
github: https://github.com/Cagataygultekin/parallel-navier-stokes-solver-hdf5
permalink: /de/projects/parallel-hdf5-cfd-output/
---

An der **Technischen Universität München (TUM)** nahm ich an einem zusätzlichen High-Performance-Computing-Projekt auf Basis von NS-EOF teil, einem C++-Framework mit verteiltem Speicher für inkompressible Navier-Stokes-Simulationen. Als Projektmitarbeiter verband ich individuelle Aufgaben an Solver und Profiling mit der Teamarbeit an einer Neugestaltung der Simulationsausgabe.

Meine neueren Entwicklungsarbeiten hatten sich vor allem auf Python und Java konzentriert. Dieses Projekt bot mir deshalb einen praktischen Wiedereinstieg in C/C++ und systemnahe Entwicklung. Dazu gehörten die Koordination von MPI-Prozessen, parallele Ein-/Ausgabe, speicherbewusste Datenstrukturen, Build-Konfiguration, Profiling und die direkte Arbeit mit wissenschaftlichen Dateiformaten.

Das fertige System ergänzte eine parallele HDF5-Ausgabe über die HDF5 C API und erzeugte XDMF-Metadaten für ParaView. VTK blieb als Laufzeitoption erhalten, während HDF5 einen besser skalierbaren binären Pfad für größere 2D-, 3D- und parallele Simulationen bereitstellte.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Etwa 50 % schneller</h3><p class="mb-0">Gemessene Verbesserung der I/O-Performance über die ausgewerteten Simulationsszenarien.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Etwa 50 % kleiner</h3><p class="mb-0">Die binäre HDF5-Ausgabe reduzierte den Speicherbedarf gegenüber dem bisherigen Ausgabepfad.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">2D, 3D und parallel</h3><p class="mb-0">Die Benchmarks umfassten Cavity- und Channel-Simulationen mit mehreren Domänengrößen.</p></div></div>
</div>

## Die technische Aufgabe

Wissenschaftliche Simulationen erzeugen für jeden Zeitschritt große numerische Felder, darunter Gitterpunkte, Druck und Geschwindigkeit. Die bisherige VTK- und ASCII-orientierte Ausgabe verteilte diese Daten auf zahlreiche Dateien und Prozesse. Mit wachsender Problemgröße stiegen dadurch Speicheraufwand und Kosten der Nachbearbeitung.

Das Projekt verfolgte drei praktische Ziele:

- I/O-Zeit der Simulation reduzieren,
- Anzahl und Größe der erzeugten Dateien verringern,
- eine Struktur bereitstellen, die ParaView effizient zur Nachbearbeitung laden kann.

Dabei ging es um mehr als eine Konvertierung des Dateiformats. Das Datenmodell musste Zeitschritte, MPI-Ränge und numerische Felder einheitlich darstellen und zugleich mit paralleler Ausführung kompatibel bleiben.

## Entwurf der HDF5-Hierarchie

Wir bewerteten verschiedene Organisationsformen für die Simulationsdaten. Ein Layout trennte Dateien nach Zeitschritt und gruppierte Werte nach MPI-Rang. Der stärker konsolidierte Entwurf legte Zeitschritte und rangspezifische Daten in einer gemeinsamen HDF5-Struktur ab. Dadurch wurden Dateifragmentierung und Aufwand beim späteren Zugriff reduziert.

<div class="row justify-content-center"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/hpc/hdf5-data-layout.png" title="Alternativen für das HDF5-Layout der MPI-Simulationsausgabe" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Datenlayout-Alternativen aus der Abschlusspräsentation. Die Hierarchie organisiert Zeitschritte, MPI-Ränge und Simulationsfelder wie Punkte, Druck und Geschwindigkeit in HDF5-Gruppen und -Datensätzen.</div>

## Implementierung

Das Team integrierte den neuen Ausgabepfad direkt in das bestehende Simulationssystem, statt einen separaten Konverter zu entwickeln.

### Build- und Konfigurationsintegration

- HDF5-Abhängigkeiten in den vorhandenen CMake-Build aufgenommen.
- XML-Konfiguration um die Laufzeitauswahl zwischen VTK- und HDF5-Ausgabe erweitert.
- Ausgabewahl von der numerischen Simulationskonfiguration getrennt gehalten.

### Paralleles Schreiben von Daten

- Mit der HDF5 C API Dateien, Gruppen, Datensätze und Attribute angelegt sowie numerische Werte geschrieben.
- Gitterpunkte, Druck, Geschwindigkeit, Zeitschritte und prozessspezifische Daten in einer vorhersagbaren Hierarchie organisiert.
- Mehrere MPI-Prozesse am Ausgabe-Workflow beteiligt.
- Eine einheitliche binäre Repräsentation für größere verteilte Simulationen erzeugt.

### Interoperabilität mit ParaView

HDF5 speichert die numerischen Arrays, XDMF beschreibt ihre Struktur und Bedeutung. Die erzeugten XDMF-Metadaten ermöglichten ParaView, HDF5-Datensätze zu interpretieren, ohne die numerischen Daten in einem zweiten Format zu duplizieren.

Wir verglichen die neue Ausgabe mit den bestehenden VTK-Ergebnissen, um sicherzustellen, dass der binäre Pfad die erwarteten Simulationsfelder korrekt erhielt.

## Benchmarking der Ausgabepipeline

Die Auswertung verglich VTK/ASCII und HDF5 für Cavity- und Channel-Simulationen. Die Tests umfassten mehrere 2D- und 3D-Domänengrößen sowie parallele 3D-Läufe.

<div class="row">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/hpc/runtime-reduction-parallel.png" title="Laufzeitreduktion für parallele 3D-Simulationen" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/hpc/file-size-reduction.png" title="Reduktion der Dateigröße über verschiedene Simulationsfälle" class="img-fluid rounded z-depth-1" %}</div>
</div>
<div class="caption">Benchmark-Ergebnisse aus der Abschlusspräsentation. Die genaue Verbesserung hängt von Simulation und Domänengröße ab, insgesamt zeigte die Auswertung jedoch deutliche Einsparungen bei I/O und Speicher.</div>

Entscheidend war nicht ein einzelner Messpunkt. Der HDF5-Pfad bewährte sich über mehrere Simulationsarten und Problemgrößen hinweg und war damit nicht auf einen eng ausgewählten Fall zugeschnitten.

## Debugging paralleler Ein-/Ausgabe

Fehler in parallelem HDF5 lieferten nicht immer klare Meldungen. Ursachen konnten in der MPI-Koordination, HDF5-Aufrufen, der Gruppen- und Datensatzstruktur oder widersprüchlichen Annahmen über die erzeugte Datei liegen.

Wir untersuchten Hierarchie und Werte direkt mit `h5dump`, verglichen die Ausgabe mit der VTK-Baseline und verbesserten die Dateistruktur schrittweise. Damit wurden Dateilayout und Beobachtbarkeit zu einem Teil der technischen Aufgabe, statt die Ausgabe nur als letzten Serialisierungsschritt zu behandeln.

## Ergebnis

Das Projekt lieferte eine konfigurierbare, ParaView-kompatible HDF5-Ausgabepipeline für NS-EOF. Sie verbesserte die Nachbearbeitungsleistung, reduzierte Dateigröße und Fragmentierung und machte die Ausgabearchitektur besser für HPC-Workloads geeignet. Die entstandene HDF5-Pipeline wird heute an einem Lehrstuhl für Maschinenbau der TUM eingesetzt.

## Technischer Stack

`C++` · `MPI` · `PETSc` · `HDF5 C API` · `XDMF` · `CMake` · `XML-Konfiguration` · `ParaView` · `h5dump` · `CFD` · `Performance-Profiling`

## Projektkontext

Ich arbeitete als zusätzlicher Projektmitarbeiter mit dem **TUM-Lehrstuhl für Scientific Computing** zusammen. Die Tätigkeit lag außerhalb der regulären Anforderungen meines Studiengangs und gehörte zu mehreren zusätzlichen technischen Projekten, mit denen ich 26 zusätzliche ECTS erwarb. Mein Beitrag umfasste individuelle Verbesserungen am Solver und Profiling, gefolgt von der beschriebenen HDF5-Integration und dem Benchmarking im Team.

Implementierung und Projektdokumentation stehen im unten verlinkten öffentlichen GitHub-Repository zur Verfügung.

<div class="mt-4"><a class="btn btn-sm btn-primary" href="https://github.com/Cagataygultekin/parallel-navier-stokes-solver-hdf5" target="_blank" rel="noopener">Quellcode auf GitHub ansehen</a></div>
