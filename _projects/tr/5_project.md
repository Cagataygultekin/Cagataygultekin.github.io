---
layout: page
lang: tr
translation_key: project-ykt
published: true
title: Sprint Raporlama ve Verimlilik İş Akışı
description: Sprint verilerinin kalitesini iyileştiren ve ekip girdilerini tutarlı bültenler ile aylık verimlilik raporlarına dönüştüren şirket içi bir full-stack sistem.
img: assets/img/projects/ykt/sprint-reporting-workflow.png
importance: 7
category: professional
technologies: [Java + Spring Boot, React, Jira API, İş Akışı Otomasyonu, Raporlama]
permalink: /tr/projects/sprint-reporting-productivity-workflow/
---

Temmuz ve Eylül 2021 arasında **Yapı Kredi Teknoloji A.Ş.** bünyesinde Software Engineer stajyeriyken çevik ekipler için geliştirilen şirket içi bir full-stack uygulamada çalıştım. Sistem, ekiplerin tuttuğu sprint bilgilerini proje yönetimi verileriyle birleştirerek yapılandırılmış sprint bültenlerine ve aylık verimlilik görünümlerine dönüştürüyordu.

Temel problem veri kalitesiydi. Çalışanlar etiket, beklenen süre ve bir işin uzatma alıp almadığı gibi ayrıntıları giriyordu. Bu alanların eksik veya tutarsız doldurulması raporları eksik bırakıyor, ekipler ya da dönemler arasındaki karşılaştırmaları daha az güvenilir hale getiriyordu.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Tutarlı girdiler</h3>
      <p class="mb-0">Eksik veya tutarsız sprint metadatasını sonraki raporları etkilemeden önce görünür hale getirdi.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Otomatik bültenler</h3>
      <p class="mb-0">Yapılandırılmış ekip girdileri ile Jira verilerini birleştirerek sprint özetlerindeki manuel işi azalttı.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Aylık görünürlük</h3>
      <p class="mb-0">Sonuçları, verimlilik örüntülerini ve raporlama eksiklerini incelemeyi kolaylaştıran düzenli görünümlerde topladı.</p>
    </div>
  </div>
</div>

## Operasyonel problem

Sprint raporlaması çok sayıda kişinin girdiği bilgilere bağlıydı. Alanlar tek başına basit görünse de nihai bültenin kalitesi herkesin aynı etiketleri kullanmasına, gerçekçi süreler girmesine ve uzatma bilgisini doğru güncellemesine dayanıyordu.

Uygulama, dağınık girdilerden tekrar kullanılabilir raporlara giden daha kontrollü bir yol sundu. Amaç yalnızca bülten üretmek değil, kaynak veriyi daha güvenilir ve aylık sonuçları daha yararlı hale getirmekti.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/ykt/sprint-reporting-workflow.png" title="Kavramsal sprint raporlama ve verimlilik iş akışı" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  İş akışının kavramsal rekonstrüksiyonu, özgün şirket arayüzü değildir. Ekiplerce girilen sprint metadatası veri kalitesi kontrollerinden geçer, proje yönetimi bilgileriyle birleştirilir ve bültenler ile aylık verimlilik görünümüne dönüşür.
</div>

## Ekip girdisinden aylık raporlamaya

İş akışı birkaç adımı tek uygulamada bir araya getirdi:

1. Çalışanlar kategorilendirme etiketleri, planlanan süre ve uzatma bilgisi dahil sprint ayrıntılarını Confluence üzerinde tutuyordu.
2. Java/Spring Boot backend, ilgili sprint ve iş kalemi verilerini Atlassian Jira API üzerinden alıyordu.
3. Uygulama iki kaynağı tutarlı bir yapıda birleştiriyor, eksik veya uyumsuz değerleri görünür hale getiriyordu.
4. Frontend görünümleri, sprint içeriğinin iletişimde kullanılmadan önce incelenmesini sağlıyordu.
5. Hazırlanan veriler sprint bültenlerine dönüştürülüyor ve aylık verimlilik sonuçlarında birleştiriliyordu.

Bu ayrım veri toplama, doğrulama, sunum ve raporlamayı farklı sorumluluklar olarak korudu. Böylece bir raporlama sorunu son bültende elle düzeltilmek yerine kaynağındaki girdiye kadar izlenebildi.

## Full-stack geliştirme

Java/Spring Boot backend ile React ve Angular frontend bileşenlerinde çalıştım. Backend entegrasyonu ve rapor odaklı veri hazırlamayı yürütürken kullanıcı katmanları sprint ayrıntılarını ekiplerin inceleyebileceği biçimde sunuyordu.

Bu proje, değeri yalnızca teknik doğruluğa değil kullanıcı benimsemesine ve veri disiplinine de bağlı olan bir iç uygulama üzerinde pratik deneyim kazandırdı. Arayüz beklenen girdileri anlaşılır kılmalı, backend ise düzenli raporlar için yeterli yapıyı korumalıydı.

Ana uygulamanın yanında ilgili iç süreçlerde kullanılan PL/SQL otomasyon araçlarına da katkı sağladım.

## Sonuç

Oluşan iş akışı günlük sprint yönetimi ile yönetim raporlaması arasındaki mesafeyi azalttı. Ekiplerin veri kalitesi sorunlarını daha erken tespit etmesine yardımcı oldu, yinelenen bülten hazırlama adımlarını otomatikleştirdi ve aylık verimlilik sonuçlarını incelemek için daha net bir temel oluşturdu.

## Teknik yapı

`Java` · `Spring Boot` · `React` · `Angular` · `Atlassian Jira API` · `Confluence` · `REST` · `PL/SQL` · `Full-stack geliştirme`

## Proje bağlamı

Proje şirket içi bir sistem olduğundan kaynak kodu ve özgün arayüzü herkese açık değildir. Bu sayfadaki görsel, özel materyali yeniden üretmeden iş akışını anlatmak için hazırlanmıştır.
