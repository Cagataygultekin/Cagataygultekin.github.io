---
layout: page
lang: tr
translation_key: project-chemcpa
published: true
title: chemCPA için Yeniden Üretilebilir ML İş Akışları
description: Görülmemiş ilaç perturbation'larına karşı tek hücre yanıtlarını tahmin eden Python/PyTorch sistemi için issue tanılama, veri iş akışları ve yeniden üretilebilir deneylere odaklanan araştırma mühendisliği.
img: assets/img/projects/helmholtz/chemcpa-architecture.png
importance: 6
category: professional
technologies: [Python, PyTorch, Bilimsel ML, Yeniden Üretilebilir Araştırma, Issue Tanılama]
permalink: /tr/projects/chemcpa-research-engineering/
github: https://github.com/theislab/chemcpa
---

**Helmholtz Zentrum München - Deutsches Forschungszentrum für Gesundheit und Umwelt (GmbH)** ve **Technical University of Munich (TUM)** bünyesinde yüksek lisans araştırma asistanı olarak herkese açık chemCPA araştırma codebase'ini destekledim. Çalışmam, tek hücre ilaç yanıtı tahmini için geliştirilmiş mevcut bir Python/PyTorch sistemindeki sorunları anlama, yeniden üretme ve tanılamaya odaklandı.

Rol, makine öğrenmesi araştırması ile yazılım mühendisliğinin kesişimindeydi. Araştırmacıların deneyleri çalıştırması, biyolojik veri kümelerini hazırlaması, yapılandırmaları karşılaştırması ve sonuçları farklı ortamlarda yeniden üretmesi gerekiyordu. Bu iş akışları boyunca çalışarak bildirilen davranışları geliştirme ekibi için somut teknik bulgulara dönüştürdüm.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Mevcut araştırma sistemi</h3><p class="mb-0">Yalıtılmış bir prototip yerine model, veri, deney ve analiz katmanları olan olgun bir codebase içinde çalıştım.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Yeniden üretilebilir çalıştırma</h3><p class="mb-0">YAML, seml, Conda, Docker, Jupyter ve jupytext ile yapılandırma güdümlü deneyleri ve tutarlı ortamları destekledim.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Alanlar arası tanılama</h3><p class="mb-0">Model kodu, deney ayarları, biyolojik veri veya yerel bağımlılıklardan kaynaklanabilecek hataları araştırdım.</p></div></div>
</div>

## Mühendislik bağlamı

chemCPA, hücrelerin daha önce görülmemiş ilaç perturbation'larına nasıl yanıt vereceğini tahmin eden bir derin öğrenme sistemidir. Bazal hücre durumu, hücresel bağlam, doz ve moleküler yapının öğrenilmiş gösterimlerini birleştirir. Grafik veya dil tabanlı moleküler encoder'lar, ilaçları sabit bir kategori olarak görmek yerine kimyasal yapıları üzerinden temsil eder.

Bu bilimsel yetenek yalnızca model tanımına bağlı değildir. Tam bir deney; ham ve işlenmiş tek hücre verilerini, moleküler embedding'leri, PyTorch eğitim kodunu, YAML yapılandırmalarını, ortam yönetimini, deney takibini ve analiz notebook'larını kapsar. Dolayısıyla deney sırasında bildirilen bir sorunun birden fazla olası kaynağı bulunabilir.

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/helmholtz/chemcpa-architecture.png" title="chemCPA model mimarisi" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Proje repository'si ve Hetzel ve diğerlerinin NeurIPS 2022 makalesindeki resmi chemCPA mimari diyagramı. Encoder-decoder, attribute embedding'leri, moleküler perturbation ağı ve adversarial classifier'ları gösterir. Görsel repository'nin MIT lisansı kapsamında kullanılmıştır.</div>

## Codebase boyunca çalışma

<div class="row my-3">
  <div class="col-md-6 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Veri ön işleme</h3><p class="mb-0">Ham ve işlenmiş biyolojik veri kümelerini eğitim ve değerlendirme iş akışlarının beklediği girdilere dönüştüren yollar üzerinde çalıştım.</p></div></div>
  <div class="col-md-6 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Deney yapılandırması</h3><p class="mb-0">Bildirilen davranışı yeniden üretirken YAML tabanlı deney ayarlarını, veri referanslarını, model parametrelerini ve seml çalıştırma yollarını inceledim.</p></div></div>
  <div class="col-md-6 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Model ve eğitim iş akışları</h3><p class="mb-0">Sorunun kod davranışından, yapılandırmadan veya girdi verisinden kaynaklanıp kaynaklanmadığını belirlemek için PyTorch model tanımlarını ve eğitim döngülerini izledim.</p></div></div>
  <div class="col-md-6 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Analiz ve raporlama</h3><p class="mb-0">Davranışı doğrulamak, bulguları belgelemek ve bildirilen sorunları araştırmacılar ile geliştiriciler için uygulanabilir hale getirmek amacıyla notebook'ları ve deney çıktılarını kullandım.</p></div></div>
</div>

## Issue yeniden üretimi ve tanılama

Temel katkım, araştırmacılar tarafından bildirilen sorunların disiplinli şekilde incelenmesiydi. Her hatanın model bug'ı olduğunu varsaymak yerine tüm çalıştırma yolunu izleyerek sorumlu katmanı yalıttım.

1. Aynı veri kümesi, deney yapılandırması ve çalıştırma yoluyla davranışı yeniden üretmek
2. Girdi dosyalarını, ön işleme varsayımlarını ve ham/işlenmiş veri ilişkisini kontrol etmek
3. YAML ayarlarını ve model parametrelerini çalışan bir deneyle karşılaştırmak
4. Yapılandırma ve veri sorunları elendikten sonra ilgili model, eğitim veya analiz kodunu incelemek
5. Sonuçlar makineler arasında farklılaştığında paket sürümlerini, Conda ortamlarını, Docker kurulumunu ve notebook senkronizasyonunu doğrulamak
6. Nedeni, yeniden üretim adımlarını ve teknik bulguları GitHub ve proje iletişimi üzerinden belgelemek

Bu süreç özellikle araştırma yazılımındaki hataların çoğu zaman dolaylı olması nedeniyle değerliydi. Eksik veri yolu, uyumsuz bağımlılık, güncel olmayan notebook veya farklı yapılandırma çok daha sonra eğitim ya da değerlendirme problemi olarak ortaya çıkabilir.

## Mühendislik gereksinimi olarak yeniden üretilebilirlik

chemCPA deneyleri tekrarlanabilir kılmak için çeşitli mekanizmalar kullanır: Yapılandırma dosyaları deney varyantlarını tanımlar, seml çalıştırmayı yönetir, Conda ve Docker bağımlılıkları yakalar, jupytext ise notebook'ları metin tabanlı kaynaklarla uyumlu tutar. Araştırmacıların deneyleri yeniden üretmesine yardımcı olurken ve ortamlar arası davranışı karşılaştırırken bu katmanlarla çalıştım.

Pratik amaç, bildirilen bir araştırma sorusundan çalıştırılabilir deneye kadar tüm yolu korumaktı. Bu nedenle veri seçimi, ortam kurulumu, yapılandırma ve çıktı analizi birbirinden bağımsız görevler değil, tek bir sistemin parçaları olarak ele alındı.

## Profesyonel sonuç

Proje, bilmediğim bir makine öğrenmesi codebase'ine girme, teknik katmanlar boyunca bağımlılıkları izleme ve farklı alanlardan kişilerle açık iletişim kurma becerimi geliştirdi. Bilimsel varsayımları yazılım hatalarından ayırmayı ve eksik issue bildirimlerini yeniden üretilebilir mühendislik problemlerine dönüştürmeyi öğrendim.

## Teknik yığın

`Python` · `PyTorch` · `Jupyter` · `jupytext` · `YAML` · `seml` · `Conda` · `Docker` · `Git` · `GitHub` · `Tek hücre veri iş akışları` · `Grafik tabanlı moleküler gösterimler`

## Proje bağlamı ve atıf

Şubat ile Ağustos 2023 arasında **Helmholtz Zentrum München - Deutsches Forschungszentrum für Gesundheit und Umwelt (GmbH)** ve **Technical University of Munich (TUM)** ortaklığında projede çalıştım. chemCPA, model mimarisi ve yayımlanan bilimsel sonuçlar makalenin yazarları tarafından geliştirildi. Benim rolüm mevcut codebase etrafında araştırma mühendisliği, yeniden üretilebilirlik desteği, issue incelemesi ve iletişime odaklandı.

<div class="mt-4"><a class="btn btn-sm btn-primary" href="https://github.com/theislab/chemcpa" target="_blank" rel="noopener">chemCPA'yı GitHub'da incele</a> <a class="btn btn-sm btn-outline-primary" href="https://arxiv.org/abs/2204.13545" target="_blank" rel="noopener">Araştırma makalesini oku</a></div>
