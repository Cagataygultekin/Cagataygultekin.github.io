---
layout: page
lang: tr
translation_key: master-thesis
title: Predicting Macroscopic Crowd Properties Using the SWIM Algorithm
permalink: /tr/academic-work/master-thesis/
description: Münih Teknik Üniversitesinde Informatics yüksek lisans tezi.
nav: false
---

<div class="mb-4"><a class="btn btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Tezin tamamını indir</a></div>

## Genel bakış

Mikroskobik yaya simülatörleri tahliye davranışı hakkında ayrıntılı bilgi sağlar, ancak hesaplama maliyetleri büyük parametre çalışmalarını ve yinelemeli bina tasarımını pahalı hale getirir. Bu tez, nöral surrogate modellerin çok daha az yaya simülasyonu kullanarak toplam tahliye süresini güçlü bir tahmin performansıyla belirleyip belirleyemeyeceğini araştırır.

Çalışma, accu:rate GmbH ile iş birliği içinde Münih Teknik Üniversitesinde Informatics yüksek lisans tezi olarak tamamlandı. Tez danışmanı Prof. Dr. Felix Dietrich, advisor ise Ana Cukarska'ydı. accu:rate GmbH tarafında Dr. Angelika Kneidl ve Johannes Hölscher ile çalıştım. Tamamlanan çalışmayı 1 Ekim 2025 tarihinde accu:rate ofisinde sundum.

## Araştırma soruları

Tez birbiriyle bağlantılı üç soruyu ele alır:

1. SWIM algoritmasıyla eğitilen nöral surrogate modeller makroskobik tahliye sonuçlarını güvenilir biçimde yeniden üretebilir mi?
2. Çok sınırlı bir simülasyon bütçesi altında hangi sampling stratejileri en güçlü modelleri sağlar?
3. Yaklaşım hem kontrollü sentetik bir düzende hem de düzenleme tabanlı tahliye senaryosunda etkili kalır mı?

## Metodoloji

Deney iş akışı; simülasyon verisi üretimini, veri hazırlamayı, model eğitimini, doğrulamayı ve sampling analizini tekrarlanabilir bir Python hattında birleştirir.

### Senaryo 1: kontrollü oda tahliyesi

İlk senaryoda üç başlangıç odası ortak bir hedef alana açılır. Yaya yapılandırmaları otomatik üretilmiş ve crowd:it ile simüle edilmiştir. Bu kontrollü ortam bir baseline oluşturmak, feature davranışını incelemek ve SWIM tabanlı regresyon yaklaşımını doğrulamak için kullanılmıştır.

### Senaryo 2: dikey tahliye

İkinci senaryo Gd99 yönergesinden türetilen dikey tahliye datasetini kullanır. Parametreleri kat sayısı, merdiven genişliği ve kat başına kişi gibi bina ve nüfus özelliklerini tanımlar. Bu senaryo tahmin performansı ile pratik uygulanabilirliği değerlendirmek için daha gerçekçi bir benchmark sağlar.

### Sampling çalışması

Sabit simülasyon bütçeleri altında çeşitli stratejiler karşılaştırılmıştır:

- Quasi-Monte Carlo sampling
- Randomized Quasi-Monte Carlo sampling
- Entropy tabanlı sampling
- Sparse-grid sampling
- KMeans tabanlı sampling

Her örneklemle bir SWIM surrogate eğitilmiş, ardından validation, test ve tam datasetin görülmeyen bölümü üzerinde değerlendirilmiştir.

## Temel sonuçlar

| Sonuç | Değer |
|---|---|
| Sentetik oda senaryosu | Tahmin performansı: R² en fazla 0,89 |
| Düzenleme tabanlı senaryo | Tam datasetle R² 0,99'un üzerinde |
| Düşük bütçedeki en iyi yöntem | Randomized Quasi-Monte Carlo sampling |
| Düşük bütçe performansı | Yalnızca 9 ile 14 simülasyonla R² 0,95 ile 0,97 arasında |
| Pratik etki | Gerekli simülasyon sayısında bir büyüklük mertebesinden fazla azalma |

Randomized Quasi-Monte Carlo en güvenilir performans-maliyet dengesini sağladı. Çok küçük eğitim setleriyle güçlü genelleme gösterirken entropy tabanlı ve sparse-grid yöntemleri benzer performans için daha fazla simülasyon gerektirdi. KMeans sampling incelenen yapılandırmalarda daha az kararlıydı.

## Ana katkılar

- Kontrollü değerlendirme için sentetik yaya tahliye dataseti ve otomatik simülasyon iş akışı
- SWIM tabanlı nöral surrogate modellemenin iki tahliye senaryosuna uyarlanması
- Simülasyon güdümlü makine öğrenmesi için tekrarlanabilir eğitim ve değerlendirme hattı
- Sıkı simülasyon bütçeleri altında sampling stratejilerinin sistematik karşılaştırması
- Dikkatle seçilmiş simülasyon girdilerinin tahmin kalitesinden ödün vermeden hesaplama maliyetini azaltabildiğine dair kanıt

## Gelecek çalışmalar

Tez yaklaşımın görülmemiş bina türlerine, daha zengin davranış değişkenlerine ve adaptive sampling yöntemlerine genişletilmesini önerir. Pratik bir sonraki adım crowd:it ile doğrudan entegrasyon olabilir. Böylece az sayıda simülasyon surrogate modeli eğitip cacheleyebilir ve yinelemeli tasarım sırasında hızlı tahminler sağlayabilir.
