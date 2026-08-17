---
layout: page
lang: tr
translation_key: project-evacuation
title: Simülasyon Verimli Tahliye Süresi Tahmini
description: Çok katlı bina tahliye sürelerini çok daha az yaya simülasyonuyla tahmin eden uçtan uca makine öğrenmesi hattı.
img: assets/img/projects/master-thesis/prediction-results.png
importance: 1
category: professional
technologies: [Python, PyTorch, Uçtan Uca ML, Surrogate Modeling, Deney Otomasyonu]
permalink: /tr/projects/evacuation-prediction/
github: https://github.com/Cagataygultekin/Predicting-Macroscopic-Crowd-Properties-Using-the-SWIM-Algorithm
---

**accu:rate GmbH** bünyesinde **Münih Teknik Üniversitesi (TUM)** ile iş birliği içinde tekrarlanan tahliye simülasyonlarının maliyetini azaltan bir makine öğrenmesi iş akışı geliştirdim. Sistem crowd:it simülasyon verilerini nöral surrogate modellerle birleştiriyor ve daha önce görülmemiş bina yapılandırmalarının toplam tahliye süresini tahmin ediyor.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3"><h3>17.410</h3><p class="mb-0">Gd99 tabanlı tam datasetteki simülasyon sayısı</p></div>
  <div class="col-sm-4 mb-3"><h3>R² = 0,993</h3><p class="mb-0">ayrılmış çok katlı test setindeki R²</p></div>
  <div class="col-sm-4 mb-3"><h3>9 simülasyon</h3><p class="mb-0">görülmemiş yapılandırmalarda R² = 0,95 için yeterli oldu</p></div>
</div>

## Mühendislik problemi

Mikroskobik yaya simülasyonları ayrıntılı ve güvenilir tahliye sonuçları sağlar. Ancak yerleşim ve nüfus parametreleri değiştiği ve her yapılandırma stokastik davranış içerdiği için tek bir bina tasarımı çok sayıda simülasyon gerektirebilir. Parametre çalışmaları ve yinelemeli tasarımda bu maliyet hızla büyür.

Problemi yalnızca model eğitimi değil bir sistem optimizasyonu görevi olarak ele aldım:

1. Simülasyon çıktısından model değerlendirmesine tekrarlanabilir bir hat kurmak.
2. Simülatörün makroskobik çıktısını üreten hızlı bir surrogate model eğitmek.
3. Veri üretim bütçesi sınırlıyken hangi simülasyonların gerçekten çalıştırılmaya değer olduğunu belirlemek.
4. Performansı eğitim veya model seçiminde kullanılmamış yapılandırmalarda doğrulamak.

## Ürettiğim sistem

- crowd:it sonuçlarını alan ve normalleştiren modüler Python hattı
- Model derinliği, genişliği, aktivasyon ve regularization için yapılandırma tabanlı deneyler
- SWIM ve geleneksel sinir ağı baseline modelleri için tutarlı train, validation ve test akışları
- R², MSE, eğitim süresi ve genelleme performansıyla otomatik değerlendirme
- QMC, randomized QMC, entropy tabanlı seçim, sparse grid ve KMeans sampling deneyleri
- Tahmin kalitesi, parametre kapsamı, çalışma süresi ve hata durumları için görsel analizler

## Ana kullanım senaryosu: Gd99 tabanlı çok katlı tahliye

Önce iş akışını küçük ve sentetik üç odalı bir senaryoda doğruladım. Bu baseline simülasyon alımı, feature işleme ve model değerlendirmesini test etmeye yardımcı oldu, ancak ana mühendislik kullanım alanı değildi.

Asıl çalışma Gd99 uzman araştırmasından türetilen ve crowd:it üzerinde uygulanan dikey tahliye datasetini kullandı. Birden fazla kattaki kişilerin ortak koridorlara ve merdivenlere girdiği çok katlı binaları temsil eder. Bina yükseldikçe veya kişi sayısı arttıkça merdiven girişlerinde sıkışıklık oluşup katlara yayılabilir.

<div class="row justify-content-center"><div class="col-md-10 mt-3">
{% include figure.liquid loading="eager" path="assets/img/projects/master-thesis/gd99-multistory-evacuation.jpg" title="Üç seviyedeki yaya hareketini gösteren Gd99 çok katlı tahliye senaryosu" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Gd99 kaynak araştırması başlangıç dağılımını, 15 saniye sonraki koridor sıkışıklığını ve 30 saniye sonra üç bina seviyesindeki hareketi gösterir. Benim datasetim bu kurulumu parametreli bir çok katlı yapılandırma ailesine genişletti. Kaynak: Kneidl ve Könnecke (2020), BAuA.</div>

Her yapılandırma üç girdiyle tanımlanır:

- **E - kat sayısı:** zemin kattaki çıkışın üzerinde 3 ile 8 kat
- **T - merdiven genişliği:** 90 ile 240 cm
- **P - kat başına kişi:** 20 ile 100 kişi

Stokastik değişkenliği yakalamak için simülasyonlar tekrarlandı. Yapılandırmayı, replicate kimliğini ve toplam tahliye süresini koruyarak modelleme ve değerlendirme için **17.410 simülasyon** oluşturdum.

## Simülasyon çıktısından doğrulanmış deney hattına

Ham simülasyon sonuçlarını tekrarlanabilir model deneylerine dönüştüren iş akışını geliştirdim:

1. crowd:it çıktı dosyalarını parse etmek ve normalleştirmek.
2. Tutarlı feature ve target datasetleri oluşturmak.
3. Sabit 80/10/10 train, validation ve test bölümleri hazırlamak.
4. SWIM tabanlı modeller için mimari ve hiperparametre deneyleri yürütmek.
5. Geleneksel PyTorch sinir ağlarıyla benchmark yapmak.
6. Seçilen modeli ayrılmış ve daha önce görülmemiş parametre birleşimlerinde değerlendirmek.

En iyi SWIM yapılandırması 512 unit içeren tek ve geniş bir hidden layer kullandı; **validation verisinde R² = 0,997 ve ayrılmış test setinde R² = 0,993** elde etti. Çalışma süresi benchmarkında SWIM, benzer tahmin performansına ulaşırken geleneksel sinir ağı baselineından yaklaşık **50 kat daha hızlı** eğitildi.

<div class="row justify-content-center"><div class="col-md-9 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/master-thesis/prediction-results.png" title="Görülmemiş çok katlı tahliye yapılandırmaları için SWIM tahminleri" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Ayrılmış test setindeki tahmin edilen ve simüle edilen tahliye süreleri. İdeal regresyon çizgisine yakınlık, surrogate modelin eğitim verisinin ötesine genellendiğini gösterir.</div>

## Ana performans kaldıracı olarak sampling

Yüksek performanslı bir surrogate, eğitim verisini üretmek için tüm simülasyon uzayı gerekiyorsa sınırlı değer taşır. Bu nedenle ana optimizasyon hedefini model mimarisinden **eğitim seti seçimine** kaydırdım.

Sıkı simülasyon bütçeleri altında beş sampling ailesini karşılaştırdım:

- Sobol dizileriyle Quasi-Monte Carlo
- Owen scrambling ile Randomized Quasi-Monte Carlo
- Entropy tabanlı informative sampling
- Sparse-grid sampling
- KMeans tabanlı representative sampling

Randomized QMC düşük bütçede en güçlü genellemeyi sağladı. Örnekleri, zaten yoğun bölgelerde kümelenmek yerine üç boyutlu bina parametre uzayını kapsadı.

<div class="row justify-content-center"><div class="col-md-10 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/master-thesis/sampling-coverage.png" title="Kat sayısı, merdiven genişliği ve kat başına kişi üzerinde Randomized QMC kapsamı" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Tam Gd99 tabanlı parametre uzayı üzerinde RQMC ile seçilen dokuz simülasyon. Örnekler en yaygın yapılandırmalarda toplanmak yerine farklı kat sayılarını, merdiven genişliklerini ve kişi yüklerini kapsar.</div>

| Eğitim tasarımı | Simülasyon sayısı | Test R² | Genelleme R² |
|---|---:|---:|---:|
| RQMC-9 | 9 | 0,994 | 0,950 |
| RQMC-14 | 14 | 0,998 | 0,970 |

Model yalnızca **9 simülasyonla**, kalan görülmemiş yapılandırmalarda **R² = 0,95** elde etti. On dört simülasyon bunu **R² = 0,97** seviyesine çıkardı. Dokuz simülasyonluk eğitim seti, 17.410 simülasyondan oluşan tam datasetin yaklaşık **%0,05'ini** temsil eder.

## Önemli mühendislik kararları

- **Tekrarlanabilirlik:** Mimari ve sampling deneyleri boyunca aynı veri bölümlerini ve değerlendirme kurallarını korudum.
- **Genelleme odaklı değerlendirme:** Seçilmiş verilerle eğitilen modelleri yalnızca küçük rastgele test setinde değil, eğitim setinin dışındaki tüm yapılandırmalarda değerlendirdim.
- **Baseline karşılaştırması:** SWIM sonuçlarını tek başına değil geleneksel sinir ağlarıyla karşılaştırdım.
- **Uçtan uca sahiplik:** Veri hazırlama, deney orkestrasyonu, model eğitimi, değerlendirme, görselleştirme ve teknik dokümantasyonu yürüttüm.
- **Maliyet odaklı optimizasyon:** Gerekli yaya simülasyonu sayısını tahmin performansının yanında temel sistem metriği olarak ele aldım.

## Sonuç

Nihai sonuç yalnızca eğitilmiş bir regresyon modeli değildi. **Hangi simülasyonların çalıştırılacağını, bunlardan surrogate modelin nasıl eğitileceğini ve görülmemiş bina yapılandırmalarında güvenilirliğinin nasıl doğrulanacağını** belirleyen tekrarlanabilir bir iş akışıydı.

Çalışma, dikkatle seçilen küçük bir simülasyon setinin güçlü tahmin performansını korurken hızlı tasarım araştırmaları için kapsamlı veri üretiminin yerini alabileceğini gösterdi. Mantıklı bir sonraki adım, iş akışını crowd:it ile entegre ederek az sayıda simülasyonun üretilmesi, cachelenmesi ve yinelemeli planlama sırasında neredeyse anlık tahminler için tekrar kullanılmasıdır.

## Teknik yapı

`Python` · `PyTorch` · `SWIMNetworks` · `scikit-learn` · `SciPy` · `pandas` · `NumPy` · `Matplotlib` · `Seaborn` · `crowd:it`

## Proje bağlamı ve dokümantasyon

Proje **accu:rate GmbH** bünyesinde **TUM** ile iş birliği içinde tamamlandı ve Informatics yüksek lisans tezimi de oluşturdu. Bu sayfa mühendislik çalışmasına, akademik sayfa ise araştırma çerçevesine ve resmi tez ayrıntılarına odaklanır.

<div class="mt-4">
  <a class="btn btn-sm btn-primary" href="{{ '/tr/academic-work/master-thesis/' | relative_url }}">Akademik genel bakış</a>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/Cagatay_Gultekin_Master_Thesis.pdf' | relative_url }}" target="_blank" rel="noopener">Tezi oku (PDF)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/Cagataygultekin/Predicting-Macroscopic-Crowd-Properties-Using-the-SWIM-Algorithm" target="_blank" rel="noopener">Kaynak kodunu GitHub'da incele</a>
</div>
