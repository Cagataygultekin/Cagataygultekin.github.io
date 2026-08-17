---
layout: page
lang: tr
translation_key: bachelors-thesis
title: Discovering Issue-tracking Profiles of Software Development Teams
permalink: /tr/academic-work/bachelors-thesis/
description: Ölçülebilir issue takip pratikleri ve repository tabanlı yazılım süreç analizi üzerine lisans tezi.
nav: false
---

<div class="mb-4">
  <a class="btn btn-primary mr-2 mb-2" href="{{ '/assets/pdf/Cagatay_Gultekin_Bachelors_Thesis_Final_Report.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>&nbsp; Final raporunu indir</a>
  <a class="btn btn-outline-primary mb-2" href="https://github.com/DIP-Group/GithubTracker" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp; Araştırma aracını incele</a>
</div>

## Genel bakış

Issue trackerlar ortak yazılım geliştirmede merkezi öneme sahiptir, ancak etkili kullanımları yalnızca görev kaydetmekten fazlasını gerektirir. Ekipler atama, label, milestone, comment, yanıt davranışı ve issue tamamlama konusunda farklı seçimler yapar. Bu pratikler tutarsız olduğunda tracker hem operasyonel sistem hem de araştırma verisi kaynağı olarak daha az kullanışlı hale gelir.

Lisans tezim, Haziran 2021'de **Orta Doğu Teknik Üniversitesi Kuzey Kıbrıs Kampüsü** bünyesinde İlbey Evcil, Burak Kaan Kahraman ve Muhammed Didin ile tamamlandı. Çalışma bu pratiklerin ölçülebilir repository göstergeleriyle nasıl temsil edilebileceğini araştırdı. Tez danışmanımız Dr. Sukru Eraslan'dı.

## Araştırma amacı

Proje, issue tracking etkinliğinin yorumlanabilir yazılım geliştirme pratiği profillerine nasıl dönüştürülebileceğini inceledi. Amaç dağınık GitHub kayıtlarından, bir ekibin issue trackerını ne kadar tutarlı kullandığını tanımlayabilecek yapılandırılmış metrikler ve sorular oluşturmaktı.

Hedeflenen çıktı hem pratik hem analitikti. Ortaya çıkan çerçeve yazılım süreçlerini inceleyen araştırmacıları destekleyebilir ve küçük ekipler ya da öğrenenler için genellikle örtük kalan issue takip pratiklerine rehberlik edebilirdi.

## Analiz çerçevesi

Geliştirilen çerçeve 15 repository metriği ve 13 yapılandırılmış süreç sorusu içerir. Issue takip davranışının çeşitli boyutlarını ele alır:

- açılan ve kapatılan issueların dengesi,
- issue ve commentlerin contributorlar arasındaki dağılımı,
- labelların kullanımı ve tutarlılığı,
- sorumluluk ataması,
- yanıt ve issue tamamlama süreleri,
- milestone kullanımı ve tamamlama davranışı,
- issue kapatıldıktan sonraki iletişim.

Bu ölçüler, labelların tutarlı kullanılıp kullanılmadığı, sorumlulukların contributorlar arasında dağılıp dağılmadığı ve milestone içeren issueların diğerlerinden farklı tamamlanıp tamamlanmadığı gibi süreç sorularıyla desteklendi.

## Yöntem ve araştırma aracı

Çerçeveyi uygulanabilir kılmak için tez ekibi Tkinter, PyGithub ve Matplotlib kullanan bir Python masaüstü araştırma aracı geliştirdi. Araç GitHub repository verilerini alır, tekrarlanabilir analiz için nesneleri yerel olarak saklar, seçilen metrikleri hesaplar, yapılandırılmış süreç sorularını yanıtlar ve bulguları görselleştirir. Sonuçlar sonraki analizler için CSV olarak da dışa aktarılabilir.

Yöntem beş aşamayı izler:

1. GitHub API üzerinden repository ve issue verilerini toplamak,
2. issue, contributor, label, comment, assignee ve milestone verilerinden nicel göstergeler üretmek,
3. gözlemlenen etkinliğe göre pratik odaklı soruları değerlendirmek,
4. çıktıları görselleştirme, tablo ve özet ölçüler olarak incelemek,
5. karşılaştırma ve profil geliştirme için sonuçları dışa aktarmak.

## Katkı

Ana katkı, yazılım süreci sorularıyla gözlemlenebilir repository verileri arasında operasyonel bir köprü kurmaktır. Çerçeve yalnızca genel önerilere dayanmak yerine issue tracking davranışını açık metrikler ve tekrarlanabilir hesaplarla incelenebilir hale getirir.

Tez yalnızca kavramsal bir model değil çalışan bir masaüstü uygulaması da üretti. Teknik geliştirme, GitHub entegrasyonu, masaüstü iş akışı, görselleştirme ve dışa aktarma hattına odaklanan [proje sayfasında]({{ '/tr/projects/issue-tracking-team-analytics/' | relative_url }}) ayrıca anlatılır.

## Doğrulama ve belgelenen sınırlar

Final raporu metrik ve soru hesaplamaları için unit testlerini, GitHub API alımı için integration testini, üretilen CSV çıktısıyla sistem düzeyi kontrolleri ve farklı boyutlardaki repolarda performance ve stress testlerini belgeler. Bu testler temel operasyonel sınırı da görünür kıldı: Repository ve issue sayısı arttıkça GitHub API rate limitleri önemli hale gelir. Yerel serileştirme tekrarlanan API çağrılarını azaltırken büyük ölçekli analizler mevcut istek bütçesine bağlı kaldı.

## Ana çıkarım

Issue tracking kalitesi repository etkinliğinin yapısı ve zamanlamasında görülebilir. Bu etkinliği tutarlı bir analiz çerçevesine dönüştürmek, ekiplerin ve araştırmacıların normalde gayriresmi ve karşılaştırması zor kalacak pratikleri değerlendirmesini sağlar.
