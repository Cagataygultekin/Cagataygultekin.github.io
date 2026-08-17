---
layout: page
lang: tr
translation_key: project-fruit-tree
published: true
title: Meyve Ağacı Tanıma Sistemi
description: Görsel tanıma için şekil, moment ve renk özelliklerini K-Fold doğrulamayla kullanan klasik computer vision hattı.
importance: 11
category: earlier
technologies: [Computer Vision, Özellik Çıkarımı, Chain Codes, İstatistiksel Momentler, K-Fold Doğrulama]
visual: fruit-vision
visual_icon: fa-solid fa-tree
visual_kicker: Klasik computer vision
visual_label: Özelliklerden Tanımaya
permalink: /tr/projects/fruit-tree-recognition/
---

**Meyve Ağacı Tanıma Sistemi**, ham görselleri yapılandırılmış şekil ve renk tanımlayıcılarına dönüştüren ve bunların tanımadaki değerini ölçen bir lisans computer vision projesiydi.

## Tanıma hattı

Sistem beş aşamadan oluşuyordu:

1. görüntü verisini almak,
2. chain code ve shape number çıkarmak,
3. istatistiksel momentleri ve renk bilgisini hesaplamak,
4. tanıma sürecini K-Fold cross-validation ile doğrulamak,
5. tanıma performansını ölçmek.

Proje yorumlanabilir feature engineering yaklaşımı kullandı. Bir görseli kapalı bir girdi olarak ele almak yerine ağaçların görsel özelliklerini açık geometrik, istatistiksel ve renk tabanlı ölçülerle temsil etti.

## Mühendislik odağı

Ana problem görsel bilgiyi örnekler arasında tutarlı biçimde karşılaştırılabilecek özelliklere dönüştürmekti. Chain codelar nesne sınırlarını temsil etti, shape numberlar geometriyi özetledi, istatistiksel momentler dağılım özelliklerini yakaladı ve renk özellikleri tamamlayıcı bilgi ekledi.

K-Fold cross-validation değerlendirmeyi tek bir train-test ayrımına bağlı olmaktan çıkardı ve mevcut örneklerdeki tanıma performansını daha güvenilir gösterdi.

## Temel yöntemler

`Görüntü alımı` / `Chain codes` / `Shape numbers` / `İstatistiksel momentler` / `Renk özellikleri` / `K-Fold cross-validation` / `Performans değerlendirmesi`

## Proje bağlamı

Bu proje **Orta Doğu Teknik Üniversitesi Kuzey Kıbrıs Kampüsü** Bilgisayar Mühendisliği eğitimim sırasında **CNG466 Fundamental Image Processing Techniques** için tamamlandı. Özgün geliştirme ve dataset herkese açık değildir.
