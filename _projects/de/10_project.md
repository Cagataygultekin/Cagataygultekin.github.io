---
layout: page
lang: de
translation_key: project-career-diaries
published: true
title: Career Diaries, Karriereplattform mit mehreren Rollen
description: Eine Python/Tkinter- und MySQL-Anwendung, die Studierende, Alumni, Forschende, Arbeitsplätze und Karrierebewertungen über ein relationales Mehrrollenmodell verbindet.
img: assets/img/projects/career-diaries/career-diaries-platform.png
importance: 10
category: professional
technologies: [Python, Tkinter, MySQL, EER-Modellierung, Datenbanknormalisierung, SQL-Abfragedesign]
permalink: /de/projects/career-diaries-community-platform/
---

**Career Diaries** war eine Karriere-Community-Anwendung zur Vernetzung von Bachelorstudierenden mit Alumni, Masterstudierenden, Forschenden und Berufstätigen. In einem Zweierteam entwarf und implementierte ich das System von Anforderungsanalyse und EER-Modellierung über SQL-Entwicklung bis zur funktionierenden Python-Desktop-Oberfläche. Es entstand als Projekt im Kurs **CNG352 Database Management Systems**.

Das Projekt ging über ein herkömmliches Alumni-Verzeichnis hinaus. Das Datenmodell berücksichtigte, dass berufliche und akademische Identitäten überlappen. Ein Alumnus konnte gleichzeitig Masterstudent und Berufstätiger sein. Das System bewahrte eine gemeinsame Identität und speicherte zugleich die rollenspezifischen Beziehungen und Attribute.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Mehrrollen-Identität</h3><p class="mb-0">Bildete Bachelorstudierende, Alumni, Masterstudierende, Forschende und Berufstätige ab, ohne gemeinsame Identitätsdaten zu duplizieren.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Relationaler Entwurf</h3><p class="mb-0">Überführte Spezialisierungen, Eins-zu-viele- und Viele-zu-viele-Beziehungen sowie mehrwertige Attribute aus einem EER-Modell in SQL-Tabellen.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Funktionierende Anwendung</h3><p class="mb-0">Realisierte Konto-, Such-, Bewertungs-, Arbeitsplatz-, Einstellungs-, Aktualisierungs- und Löschprozesse in einer Python/Tkinter-Oberfläche mit MySQL.</p></div></div>
</div>

## Entwurf des Datenmodells

Die Plattform organisierte mehrere verbundene Domänen:

- Personen und ihre gleichzeitigen Rollen,
- Studienprogramme und Bildungsverläufe,
- Betreuung von Masterstudierenden, unterstützte Lehrveranstaltungen, Forschungsgebiete und Publikationen,
- Branchenrollen, Arbeitsplätze, Beschäftigungsarten und Erfahrungsstufen,
- Arbeitsplatzbewertungen mit Ratings, Kommentaren und beruflichem Kontext,
- Unternehmen, Schulen, Fachbereiche und Hochschulgruppen,
- Administratoren und nachvollziehbare Beziehungen bei Kontosperrungen.

Dies erforderte mehr als eine einzelne Nutzertabelle mit Rollenfeld. Das EER-Modell trennte gemeinsame Nutzerdaten von rollenspezifischen Entitäten, unterstützte überlappende Alumni-Rollen und erfasste Beziehungen zwischen Personen, Arbeitsplätzen, Schulen, Bewertungen und Administratoren.

<div class="row justify-content-center"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/career-diaries/career-diaries-platform.png" title="Konzeptionelle Career-Diaries-Community-Plattform" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Eine Portfolio-Rekonstruktion des Plattformkonzepts. Das Profil zeigt, wie eine Identität mehrere akademische und berufliche Rollen einnehmen und zugleich mit Arbeitsplätzen, Kursen, Publikationen und Bewertungen verbunden bleiben kann.</div>

## Vom Modell zu funktionierenden Workflows

Die Python/Tkinter-Anwendung bildete den zentralen Datenlebenszyklus ab:

1. Nutzerkonten erstellen und authentifizieren,
2. rollenspezifische Daten für Bachelorstudierende, Alumni, Masterstudierende, Forschende und Berufstätige erfassen,
3. Schulen, Unternehmen und andere Arbeitsplätze anlegen,
4. Arbeitsplatzbewertungen mit Ratings und beruflichem Kontext erstellen,
5. Daten entlang akademischer und beruflicher Beziehungen filtern und abfragen,
6. Einstellungen und verbundene Datensätze aktualisieren,
7. Konten und abhängige Datensätze unter Wahrung referenzieller Integrität löschen.

Die Suchabläufe machten das relationale Modell für praktische Fragen nutzbar. Beispiele waren die Suche nach Fachkräften in großen Unternehmen, Bewertungen von Software Engineers mit bestimmtem akademischem Hintergrund, akademischen Mitgliedern nach Fachbereich und Forschungsgebiet sowie Hochschulgruppen.

## Datenbankentwicklung

Die Datenbankarbeit deckte den gesamten relationalen Lebenszyklus ab:

- Anforderungs- und Transaktionsanalyse,
- Entwurf des EER-Diagramms,
- Abbildung von Spezialisierungen und Beziehungen auf Tabellen,
- Analyse funktionaler Abhängigkeiten,
- Normalisierung bis BCNF,
- gezielte Denormalisierung, wenn zusätzliche Joins unnötige Kosten verursacht hätten,
- Entwurf von Primär- und Fremdschlüsseln mit kaskadierenden Aktualisierungen und Löschungen,
- SQL für Datenerstellung, Manipulation, Löschung und mehrtabellige Abfragen.

Das Mehrrollenmodell war die zentrale Designaufgabe. Es hielt gemeinsame Nutzerdaten konsistent und erlaubte zugleich, Informationen für Masterstudierende, Forschende und Berufstätige unabhängig weiterzuentwickeln. Auch Administration war Teil des Datenmodells, einschließlich Grund und Startdatum einer Sperre sowie des verantwortlichen Administrators.

## Technischer Kern und Methoden

`Python` / `Tkinter` / `MySQL` / `SQL` / `EER-Modellierung` / `BCNF-Normalisierung` / `Referenzielle Integrität` / `Desktop-Anwendungsworkflows`

## Projektkontext

Career Diaries entstand im Kurs **CNG352 Database Management Systems** während meines Computer-Engineering-Studiums an der **Middle East Technical University Northern Cyprus Campus**. Originalanwendung und Datenbank sind nicht öffentlich. Die Abbildung rekonstruiert das Produktkonzept, ohne die ursprüngliche Oberfläche oder Daten zu reproduzieren.

<div class="mt-3"><a class="btn btn-sm btn-outline-primary" href="{{ '/de/academic-work/metu-coursework/#cng352' | relative_url }}">CNG352 in den METU-Lehrveranstaltungen ansehen</a></div>
