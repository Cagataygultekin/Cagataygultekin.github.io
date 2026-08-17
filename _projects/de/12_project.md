---
layout: page
lang: de
translation_key: project-ecommerce
published: true
title: E-Commerce-Webservice und Desktop-Client
description: Eine Spring-Boot- und MySQL-Produktplattform mit separatem Desktop-Client für Katalogprozesse rund um Computer und Smartphones.
importance: 12
category: earlier
technologies: [Java, Spring Boot, REST API, Spring Data JPA, MySQL]
github: https://github.com/457Proje-CSS/team6-cng457--webservice
visual: ecommerce-service
visual_icon: fa-solid fa-cart-shopping
visual_kicker: Serviceorientierte Anwendung
visual_label: Webservice und GUI-Client
permalink: /de/projects/java-spring-ecommerce-service/
---

Dieses Projekt implementierte eine E-Commerce-Produktplattform als zwei verbundene Anwendungen: einen Spring-Boot-Webservice und einen separaten GUI-Desktop-Client, der den Service nutzte. Das System bildete Computer und Smartphones einschließlich Bewertungen und konfigurierbarer Zusatzfunktionen ab.

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="https://github.com/457Proje-CSS/team6-cng457--webservice" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Backend-Repository</a>
  <a class="btn btn-outline-primary mr-2 mb-2" href="https://github.com/457Proje-CSS/team-6--cng457-desktopapp" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Desktop-Client-Repository</a>
  <a class="btn btn-outline-primary mb-2" href="https://github.com/457Proje-CSS/457_Proje_Cagatay-Serhat-Soykan" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Verbundenes Projekt-Repository</a>
</div>

## Serviceorientierte Architektur

Die Architektur hielt Darstellungslogik aus der Persistenzschicht heraus. Das Backend stellte Produktoperationen über HTTP bereit, der Desktop-Client fungierte als unabhängiger Verbraucher. Dadurch entstand eine klare Grenze zwischen Nutzerinteraktion, Anwendungslogik und Datenbankzugriff.

Das Backend folgte einer geschichteten Spring-Struktur:

- Controller für Computer, Smartphones, Bewertungen und Zusatzfunktionen,
- Services für die Anwendungslogik,
- Spring-Data-Repositories für die Persistenz,
- JPA-Entitäten für die Produktdomäne,
- MySQL als relationaler Datenspeicher.

## Produktmodell und Tests

Computer und Smartphones wurden als Produkttypen mit zugehörigen Bewertungen und Funktionsdaten modelliert. Controller- und Service-Tests deckten die wichtigsten Abläufe ab und ergänzten die Anwendungsfunktionen um eine frühe Qualitätssicherungsschicht.

Der Desktop-Client nutzte das Backend, statt direkt auf die Datenbank zuzugreifen. Diese Trennung erleichterte das Verständnis des Systems und vermittelte praktische Erfahrung mit Client-Server-Integration, HTTP-basierten Anwendungsgrenzen und persistenzgestützter Java-Entwicklung.

## Technischer Kern

`Java` / `Spring Boot` / `Spring Web` / `Spring Data JPA` / `MySQL` / `Lombok` / `Desktop-Client-Integration`

## Projektkontext

Das System entstand für **CNG457 Software Construction** an der **Middle East Technical University Northern Cyprus Campus**.
