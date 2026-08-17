---
layout: page
lang: tr
translation_key: project-zorluteks
published: true
title: Malzeme ve Veritabanı İşlemleri Masaüstü Uygulaması
description: Excel tabanlı malzeme kayıtlarını kontrollü SQL güncellemeleri ve veritabanı işlemleri sunan daha anlaşılır bir arayüze taşıyan C#/.NET masaüstü uygulaması.
img: assets/img/projects/zorluteks/material-operations-workflow.png
importance: 8
category: professional
technologies: [C# + .NET, SQL Server, Masaüstü Uygulamaları, Veri Taşıma, Operasyon Otomasyonu]
permalink: /tr/projects/material-database-operations-app/
---

**Zorluteks Tekstil Ticaret ve Sanayi A.Ş.** bünyesinde malzeme, stok ve sevkiyat kayıtlarıyla çalışmak için şirket içi bir C#/.NET masaüstü uygulaması geliştirdim. Mevcut bilgiler, ikili durum alanlarını açıklayıcı metinler ve operasyonel ayrıntılarla birlikte tutan çok satırlı ve sütunlu büyük Excel dosyalarına dağılmıştı.

Bu iş akışını daha anlaşılır bir uygulama arayüzüne taşıdım ve şirket veritabanına bağladım. Kullanıcılar ilgili kayıtları inceleyebiliyor, hücreleri düzenlemek veya doğrudan veritabanı komutları kullanmak yerine güncellemeleri ve diğer veritabanı işlemlerini açık uygulama eylemleriyle başlatabiliyordu.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Excel'den veri taşıma</h3><p class="mb-0">Operasyonel kayıtları yoğun Excel sayfalarından yapılandırılmış şirket veritabanı tablolarına aktardı.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Operatör odaklı görünüm</h3><p class="mb-0">Stok, malzeme, durum ve sevkiyat bilgilerini günlük kullanıma uygun bir masaüstü arayüzünde sundu.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Kontrollü işlemler</h3><p class="mb-0">Yinelenen güncelleme ve veritabanı görevlerini açık, butonla başlatılan uygulama eylemlerine dönüştürdü.</p></div></div>
</div>

## Başlangıç noktası

Excel dosyaları çok miktarda operasyonel bilgi içeriyordu. Bazı sütunlar evet-hayır durumlarını, diğerleri ad, açıklama, miktar, stok veya sevkiyat ayrıntılarını temsil ediyordu. Veri mevcut olsa da onu anlamak ve güncellemek için geniş bir tabloda gezinmek ve her süreci hangi sütunların yönettiğini bilmek gerekiyordu.

Bu durum iki bağlantılı problem oluşturuyordu. Kayıtları bütünsel bir operasyon görünümü olarak okumak zordu ve rutin veritabanı değişiklikleri kolayca tutarsız uygulanabilen manuel adımlara dayanıyordu.

<div class="row justify-content-center"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/zorluteks/material-operations-workflow.png" title="Kavramsal malzeme ve veritabanı işlemleri iş akışı" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Sistemin kavramsal rekonstrüksiyonu, özgün şirket ekran görüntüsü değildir. Yoğun Excel kayıtları SQL veritabanında normalleştirilir ve malzeme, stok, sevkiyat ve güncelleme süreçleri için pratik bir masaüstü uygulaması üzerinden sunulur.</div>

## Satır ve sütunlardan uygulamaya

Excel yapısını uygulama odaklı bir veri akışına dönüştürdüm:

1. Mevcut Excel sütunlarını inceleyip ikili, metinsel, stok ve sevkiyat alanlarının operasyonel anlamını belirledim.
2. Kayıtları hazırlayarak şirket veritabanı yapılarına taşıdım.
3. İlgili kayıtları SQL ile alıp daha anlaşılır bir masaüstü arayüzünde sundum.
4. İlişkili bilgileri gruplayarak kullanıcıların bir malzeme veya sevkiyatın durumunu tüm tabloyu taramadan anlamasını sağladım.
5. Açık arayüz eylemlerini güncelleme ve veritabanı işlemlerine bağlayarak kullanıcıların bunları bir butonla başlatabilmesini sağladım.

Masaüstü uygulaması kullanıcılarla veritabanı arasında bir sınır oluşturdu. Bilgiyi alanın terimleriyle sunarken SQL işlemlerini kontrollü uygulama davranışının arkasında tuttu.

## Rutin operasyonlar için tasarım

Ana tasarım hedefi görsel karmaşıklık değil açıklıktı. Kullanıcıların mevcut görev için önemli alanları görmesi, kaydın durumunu anlaması ve hangi eylemin onu güncelleyeceğini bilmesi gerekiyordu.

İş akışının uygulamaya taşınması veritabanı işlemlerini daha bilinçli hale getirdi. Kullanıcılar doğrudan Excel düzenlemelerine bağlı kalmak yerine yaygın işlemler için aynı arayüz yolunu izledi. Böylece süreç daha anlaşılır oldu ve alttaki tabloları bilme gereksinimi azaldı.

## Sonuç

Proje, operasyonel verilerin Excel merkezli görünümünü daha erişilebilir bir masaüstü iş akışıyla değiştirdi. Malzeme, stok ve sevkiyat kayıtlarını incelemeyi kolaylaştırdı, mevcut Excel verilerinin şirket veritabanlarına aktarılmasını destekledi ve kullanıcılar için tekrarlanan güncelleme işlemlerini basitleştirdi.

## Teknik yapı

`C#` · `.NET` · `Visual Studio` · `SQL` · `Microsoft SQL Server` · `Excel veri taşıma` · `Masaüstü uygulama geliştirme`

## Proje bağlamı

Bu çalışmayı Ağustos ve Eylül 2019 arasında **Zorluteks Tekstil Ticaret ve Sanayi A.Ş.** bünyesindeki Bilgi Teknolojileri stajım sırasında tamamladım. Uygulama ve kaynak kodu şirket içidir. Görsel, şirket kayıtlarını veya özel arayüzleri açığa çıkarmadan sistem mimarisini anlatır.
