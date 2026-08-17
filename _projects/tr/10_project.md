---
layout: page
lang: tr
translation_key: project-career-diaries
published: true
title: Career Diaries Çok Rollü Kariyer Topluluğu
description: Öğrencileri, mezunları, akademisyenleri, iş yerlerini ve kariyer değerlendirmelerini çok rollü ilişkisel bir modelle bağlayan Python/Tkinter ve MySQL uygulaması.
img: assets/img/projects/career-diaries/career-diaries-platform.png
importance: 10
category: professional
technologies: [Python, Tkinter, MySQL, EER Modelleme, Veritabanı Normalizasyonu, SQL Sorgu Tasarımı]
permalink: /tr/projects/career-diaries-community-platform/
---

**Career Diaries**, lisans öğrencilerini mezunlar, lisansüstü öğrenciler, akademisyenler ve profesyonellerle buluşturan bir kariyer topluluğu uygulamasıydı. İki kişilik ekipte gereksinim analizi ve EER modellemesinden SQL geliştirmeye ve çalışan Python masaüstü arayüzüne kadar sistemi birlikte tasarlayıp geliştirdim. Proje **CNG352 Database Management Systems** dersi kapsamında yapıldı.

Proje geleneksel bir mezun dizininin ötesine geçti. Veri modeli mesleki ve akademik kimliklerin örtüşebileceğini kabul ediyordu. Bir mezun aynı anda lisansüstü öğrencisi ve sektör çalışanı olabiliyordu. Sistem tek bir ortak kimliği korurken her role özel ilişki ve nitelikleri ayrı tutuyordu.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Çok rollü kimlik</h3><p class="mb-0">Ortak kimlik verisini tekrarlamadan lisans öğrencilerini, mezunları, lisansüstü öğrencilerini, akademisyenleri ve sektör çalışanlarını temsil etti.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">İlişkisel tasarım</h3><p class="mb-0">Uzmanlaşmaları, bire-çok ve çoka-çok ilişkileri ve çok değerli nitelikleri EER modelinden SQL tablolarına taşıdı.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Çalışan uygulama</h3><p class="mb-0">MySQL destekli Python/Tkinter arayüzünde hesap, arama, değerlendirme, iş yeri, ayar, güncelleme ve silme iş akışlarını sundu.</p></div></div>
</div>

## Veri modelini tasarlamak

Platform birbiriyle bağlantılı çeşitli alanları düzenledi:

- kişiler ve eş zamanlı rolleri,
- akademik programlar ve eğitim geçmişleri,
- lisansüstü danışmanlığı, asistanlık yapılan dersler, araştırma alanları ve yayınlar,
- sektör rolleri, iş yerleri, çalışma türleri ve deneyim seviyeleri,
- puan, yorum ve iş bağlamı içeren iş yeri değerlendirmeleri,
- şirketler, okullar, bölümler ve topluluklar,
- yöneticiler ve denetlenebilir kullanıcı engelleme ilişkileri.

Bu yapı, rol sütunu bulunan tek bir kullanıcı tablosundan fazlasını gerektiriyordu. EER modeli ortak kullanıcı verisini role özel varlıklardan ayırdı, örtüşen mezun rollerini destekledi ve kişiler, iş yerleri, okullar, değerlendirmeler ile yöneticiler arasındaki ilişkileri yakaladı.

<div class="row justify-content-center"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/career-diaries/career-diaries-platform.png" title="Kavramsal Career Diaries topluluk platformu" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Platform kavramının portfolyo için rekonstrüksiyonu. Profil, tek bir kimliğin iş yerleri, dersler, yayınlar ve değerlendirmelerle bağlantısını korurken birden fazla akademik ve mesleki role sahip olabilmesini gösterir.</div>

## Modelden çalışan iş akışlarına

Python/Tkinter masaüstü arayüzü temel veri yaşam döngüsünü uyguladı:

1. kullanıcı hesabı oluşturma ve kimlik doğrulama,
2. lisans öğrencisi, mezun, lisansüstü öğrenci, akademisyen ve sektör çalışanı için role özgü veri kaydetme,
3. okul, şirket ve diğer iş yerlerini oluşturma,
4. puan ve mesleki bağlam içeren iş yeri değerlendirmeleri ekleme,
5. akademik ve kariyer ilişkileri üzerinden veriyi filtreleme ve sorgulama,
6. ayarları ve ilişkili kayıtları güncelleme,
7. referential integrity'yi koruyarak hesap ve bağımlı kayıtları silme.

Arama akışları ilişkisel modeli pratik sorulara dönüştürdü. Büyük şirketlerdeki profesyonelleri bulmak, belirli akademik geçmişe sahip yazılım mühendislerinin yorumlarını incelemek, bölüm ve araştırma alanına göre akademisyenleri bulmak ve okul topluluklarını keşfetmek bunlara örnekti.

## Veritabanı mühendisliği

Veritabanı çalışması ilişkisel yaşam döngüsünün tamamını kapsadı:

- gereksinim ve işlem analizi,
- EER diyagramı tasarımı,
- uzmanlaşma ve ilişkileri tablolara eşleme,
- functional dependency analizi,
- BCNF'e kadar normalizasyon,
- ek joinlerin gereksiz maliyet oluşturacağı yerlerde hedefli denormalizasyon,
- cascading update ve delete kurallarına sahip primary ve foreign key tasarımı,
- veri oluşturma, değiştirme, silme ve çok tablolı sorgular için SQL geliştirme.

Çok rollü model ana tasarım problemiydi. Ortak kullanıcı verisini tutarlı tutarken lisansüstü öğrenci, akademisyen ve sektör çalışanına özel bilgilerin bağımsız gelişmesine izin verdi. Yönetim işlevleri de veri modeline dahil edildi; hesap engelleme nedeni, başlangıç tarihi ve sorumlu yönetici kaydedildi.

## Temel yapı ve yöntemler

`Python` / `Tkinter` / `MySQL` / `SQL` / `EER modelleme` / `BCNF normalizasyonu` / `Referential integrity` / `Masaüstü uygulama iş akışları`

## Proje bağlamı

Career Diaries, **Orta Doğu Teknik Üniversitesi Kuzey Kıbrıs Kampüsü** Bilgisayar Mühendisliği eğitimim sırasında **CNG352 Database Management Systems** için tamamlandı. Özgün uygulama ve veritabanı herkese açık değildir. Bu sayfadaki görsel, özgün arayüzü veya veriyi yeniden üretmeden ürün kavramını anlatır.

<div class="mt-3"><a class="btn btn-sm btn-outline-primary" href="{{ '/tr/academic-work/metu-coursework/#cng352' | relative_url }}">METU derslerinde CNG352'yi gör</a></div>
