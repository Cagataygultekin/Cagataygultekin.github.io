---
layout: page
lang: tr
translation_key: project-ecommerce
published: true
title: E-Ticaret Web Servisi ve Masaüstü İstemcisi
description: Bilgisayar ve telefon kataloğu iş akışları için ayrı bir masaüstü istemcisine sahip Spring Boot ve MySQL ürün platformu.
importance: 12
category: earlier
technologies: [Java, Spring Boot, REST API, Spring Data JPA, MySQL]
github: https://github.com/457Proje-CSS/team6-cng457--webservice
visual: ecommerce-service
visual_icon: fa-solid fa-cart-shopping
visual_kicker: Servis odaklı uygulama
visual_label: Web Servisi ve GUI İstemcisi
permalink: /tr/projects/java-spring-ecommerce-service/
---

Bu proje bir e-ticaret ürün platformını bağlantılı iki uygulama olarak geliştirdi: Spring Boot web servisi ve bu servisi kullanan ayrı bir GUI masaüstü istemcisi. Sistem bilgisayarları, telefonları, değerlendirmeleri ve yapılandırılabilir ek özellikleri temsil ediyordu.

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="https://github.com/457Proje-CSS/team6-cng457--webservice" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Backend reposu</a>
  <a class="btn btn-outline-primary mr-2 mb-2" href="https://github.com/457Proje-CSS/team-6--cng457-desktopapp" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Masaüstü istemci reposu</a>
  <a class="btn btn-outline-primary mb-2" href="https://github.com/457Proje-CSS/457_Proje_Cagatay-Serhat-Soykan" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; İlişkili proje reposu</a>
</div>

## Servis odaklı mimari

Mimari, sunum sorumluluklarını persistence katmanından ayırdı. Backend ürün işlemlerini HTTP üzerinden sunarken masaüstü uygulaması bağımsız bir istemci olarak çalıştı. Böylece kullanıcı etkileşimi, uygulama mantığı ve veritabanı erişimi arasında net sınırlar oluştu.

Backend katmanlı bir Spring yapısı izliyordu:

- bilgisayar, telefon, değerlendirme ve ek özellik işlemlerini sunan controllerlar,
- uygulama mantığını içeren serviceler,
- persistence için Spring Data repositoryleri,
- ürün alanını temsil eden JPA entityleri,
- ilişkisel depolama için MySQL.

## Ürün modeli ve testler

Bilgisayarlar ve telefonlar değerlendirme ve ek özellik verileriyle desteklenen ürün türleri olarak modellendi. Controller ve service testleri ana ürün akışlarını kapsayarak uygulama işlevlerinin yanında erken bir kalite güvencesi katmanı sağladı.

Masaüstü istemcisi veritabanına doğrudan bağlanmak yerine backend'i tüketti. Bu ayrım sistemi anlamayı kolaylaştırdı ve client-server entegrasyonu, HTTP tabanlı uygulama sınırları ve persistence destekli Java geliştirme konusunda pratik deneyim sağladı.

## Temel yapı

`Java` / `Spring Boot` / `Spring Web` / `Spring Data JPA` / `MySQL` / `Lombok` / `Masaüstü istemci entegrasyonu`

## Proje bağlamı

Sistem **Orta Doğu Teknik Üniversitesi Kuzey Kıbrıs Kampüsü** bünyesindeki **CNG457 Software Construction** dersi için geliştirildi.
