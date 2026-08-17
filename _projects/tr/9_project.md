---
layout: page
lang: tr
translation_key: project-issue-tracking
published: true
title: GitHub Issue Takibi Araştırma Aracı
description: GitHub issue etkinliğini süreç metriklerine, görsel analizlere ve dışa aktarılabilir araştırma verilerine dönüştüren Python masaüstü uygulaması.
img: assets/img/projects/bachelors-thesis/issue-tracking-analytics.png
importance: 9
category: professional
technologies: [Python, PyGithub, GitHub API, Tkinter, Matplotlib]
github: https://github.com/DIP-Group/GithubTracker
permalink: /tr/projects/issue-tracking-team-analytics/
---

Bu proje, yazılım ekiplerinin GitHub issue takibini nasıl kullandığını incelemek için bir masaüstü araştırma aracı oluşturdu. Uygulama, issueları bağımsız görev kayıtları olarak ele almak yerine repository etkinliğini atama, iletişim, etiket, milestone, yanıt süresi ve issue tamamlama hakkında ölçülebilir göstergelere dönüştürüyor.

Sistem, **Orta Doğu Teknik Üniversitesi Kuzey Kıbrıs Kampüsü** Bilgisayar Mühendisliği lisans tezim kapsamında geliştirildi. Bu sayfa ürünü yazılım yönüyle anlatır. İlgili [Akademik Çalışmalar sayfası]({{ '/tr/academic-work/bachelors-thesis/' | relative_url }}) araştırma problemini ve analiz çerçevesini daha ayrıntılı ele alır.

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="https://github.com/DIP-Group/GithubTracker" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Kaynak kodunu incele</a>
  <a class="btn btn-outline-primary mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Bachelors_Thesis_Final_Report.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Final raporunu indir</a>
</div>

## Ürün iş akışı

Uygulama eksiksiz bir repository analiz akışını destekler:

1. herkese açık bir GitHub reposunu URL üzerinden almak,
2. veriyi sonraki analizler için saklamak,
3. masaüstü arayüzünden metrikleri ve süreç sorularını seçmek,
4. issue, contributor, label, comment, assignee ve milestone verilerinden sonuçları hesaplamak,
5. sonuçları grafik, özet değer veya yapılandırılmış yanıt olarak sunmak,
6. seçilen çıktıları sonraki analizler için CSV olarak dışa aktarmak.

Analiz katmanı **15 repository metriği** ve **13 yapılandırılmış süreç sorusu** sağlar. Bunlar issue durumu, contributor sorumluluğu, label, milestone, comment, yanıt davranışı ve tamamlama örüntülerini kapsar.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Repository alımı</h3><p class="mb-0">GitHub API ile repository ve issue verilerini alır, tekrarlanabilir analiz için yerel bir temsilini korur.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Metrik motoru</h3><p class="mb-0">Issue durumu, sorumluluk dağılımı, label, comment, milestone, assignee ve yanıt davranışına ilişkin göstergeleri hesaplar.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Araştırma çıktısı</h3><p class="mb-0">Bulguları grafik ve tablolarda incelenebilir kılar, metrikleri ve yanıtları sonraki değerlendirmeler için dışa aktarır.</p></div></div>
</div>

## Mühendislik kapsamı

Uygulama Tkinter ile geliştirilmiş bir Python masaüstü yazılımıdır. Repository erişimi için PyGithub, görsel analiz için Matplotlib ve taşınabilir çıktı için CSV kullanır. GitHub API'ye yinelenen istekleri azaltmak amacıyla repository nesneleri pickle ile yerel olarak serileştirilebilir. Kod; repository alımı, metrik hesaplama, soru değerlendirme, görselleştirme ve dışa aktarma işlemlerini tek bir kullanıcı akışında ayırır.

Araç hem nicel ölçüleri hem de pratik süreç sorularını değerlendirir. Issueların contributorlar arasındaki dağılımı, label kullanımı, yorum tutarlılığı, milestone kullanımı, ortalama issue yanıt ve tamamlama süreleri ile sorumlulukların tutarlı atanıp atanmadığı bunlara örnektir.

Final raporu ayrıca unit, integration, system, load ve stress testlerini belgeler. Repository alımı GitHub API ile test edildi, oluşturulan CSV dosyaları uçtan uca sistem kontrollerinde kullanıldı ve farklı boyuttaki repolar performans ile API rate limitlerinin etkisini değerlendirmeye yardımcı oldu.

<div class="row justify-content-center"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/bachelors-thesis/issue-tracking-analytics.png" title="Issue takibi araştırma iş akışı" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">GitHub issue verilerinden hesaplanan göstergelere, yorumlanabilir süreç bulgularına ve tekrar kullanılabilir araştırma çıktısına uzanan mühendislik akışı.</div>

## Projenin önemi

Bu, ilk uçtan uca yazılım analitiği projelerimden biriydi. API entegrasyonu, masaüstü uygulama geliştirme, alana özel metrik tasarımı, görselleştirme ve dışa aktarılabilir veri işlemeyi tek bir çalışan araçta birleştirdi. Aynı örüntü sonraki çalışmalarımda da görülür: operasyonel veriyi toplamak, tekrarlanabilir bir işleme katmanı kurmak ve sonucu mühendislik kararlarını destekleyen bilgiye dönüştürmek.

## Temel yapı

`Python` / `PyGithub` / `GitHub API` / `Tkinter` / `Matplotlib` / `pickle` / `Repository analitiği` / `CSV dışa aktarma`
