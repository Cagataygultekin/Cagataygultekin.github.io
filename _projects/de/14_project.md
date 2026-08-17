---
layout: page
lang: de
translation_key: project-coffee-shop
published: true
title: Mehrbenutzer-Coffee-Shop-System
description: Eine Python-TCP-Client-Server-Anwendung zur Erfassung von Verkäufen und Auswertung operativer Kennzahlen.
importance: 14
category: earlier
technologies: [Python, TCP/IP, Client-Server-Architektur, Gleichzeitige Verbindungen, Verkaufsanalyse]
visual: coffee-network
visual_icon: fa-solid fa-mug-hot
visual_kicker: Netzwerkprogrammierung
visual_label: TCP-Server und mehrere Clients
permalink: /de/projects/python-coffee-shop-client-server/
---

Dieses Projekt implementierte eine Coffee-Shop-Verkaufsanwendung mit einer Python-TCP-Client-Server-Architektur. Clients übermittelten verkaufsbezogene Operationen über das Netzwerk, während der Server den gemeinsamen Anwendungsablauf verwaltete und Statistiken aus den aufgezeichneten Aktivitäten erzeugte.

## Netzwerkarchitektur

Der Server konnte gleichzeitig mit mehreren Clients kommunizieren. Dadurch war das Projekt mehr als eine lokale Verkaufsverwaltung: Operationen mussten eine Netzwerkgrenze überqueren und über einen zentralen Dienst koordiniert werden.

Die Anwendung verband drei Aspekte:

- TCP-basierte Kommunikation zwischen Clients und Server,
- zentrale Verkaufserfassung,
- Berechnung und Darstellung operativer Statistiken.

## Technischer Schwerpunkt

Das Projekt führte in praktisches Client-Server-Design mit Python ein. Es erforderte ein klares Protokoll zwischen beiden Seiten, die Trennung der Client-Interaktion von der serverseitigen Verarbeitung und Unterstützung mehrerer aktiver Verbindungen, ohne jeden Client als isolierte Anwendung zu behandeln.

Es legte eine frühe Grundlage für meine späteren Arbeiten an APIs, verteilten Diensten und Backend-Systemen, weil Netzwerkkommunikation Teil des Anwendungsdesigns und kein reines Implementierungsdetail war.

## Technischer Kern und Konzepte

`Python` / `TCP/IP` / `Sockets` / `Client-Server-Architektur` / `Mehrere Client-Verbindungen` / `Verkaufsstatistik`

## Projektkontext

Die Anwendung entstand im Kurs **CNG445 Software Development with Scripting Languages** während meines Computer-Engineering-Studiums an der **Middle East Technical University Northern Cyprus Campus**. Der Originalquellcode ist derzeit nicht öffentlich.
