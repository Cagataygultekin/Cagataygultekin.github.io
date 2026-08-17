---
layout: page
lang: tr
translation_key: project-company-registry
published: true
title: Tarihsel Şirket Sicili Veri Platformu
description: Danimarka Ticaret Sicili'ndeki güncel ve tarihsel verileri alma, normalleştirme, saklama ve aramaya yönelik bir FastAPI backend'i.
img: assets/img/projects/legalian/registry-data-platform.png
importance: 2
category: professional
technologies: [Python, FastAPI, Güvenli API Entegrasyonu, Veri Mühendisliği, MySQL + Elasticsearch]
permalink: /tr/projects/company-registry-data-platform/
github: https://github.com/Cagataygultekin/danish-business-register
---

**Legalian GmbH** bünyesinde, Danimarka Ticaret Sicili'ndeki karmaşık verileri uyumluluk iş akışları için yapılandırılmış ve sorgulanabilir bilgiye dönüştüren bir backend platformu geliştirdim. Sistem, güncel ve tarihsel şirket verilerini sistemden sisteme erişimle alıyor, tutarsız ve iç içe geçmiş yanıtları normalleştiriyor ve sahiplik ilişkilerini zaman içinde koruyor.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3"><h3>Güncel + tarihsel</h3><p class="mb-0">tek bir yapılandırılmış veri katmanında korunan sicil durumları</p></div>
  <div class="col-sm-4 mb-3"><h3>3 temel alan</h3><p class="mb-0">şirketler, üretim birimleri ve sahiplik kayıtları</p></div>
  <div class="col-sm-4 mb-3"><h3>&lt; 1 saniye</h3><p class="mb-0">belgelenen test senaryolarında gözlemlenen yanıt süresi</p></div>
</div>

## Mühendislik problemi

Herkese açık CVR arayüzü bir şirketin güncel durumunu kontrol etmek için kullanışlıdır, ancak uyumluluk çalışmaları çoğu zaman bu noktadan önce nelerin değiştiğine bağlıdır. Sahiplik ilişkileri başlar ve sona erer, şirket bilgileri değişir ve yasal yapılar yeniden düzenlenebilir. Yalnızca güncel anlık görüntü bu geçmişi sunmaz.

Bu nedenle sistemin dış bir API'ye proxy olmaktan fazlasını yapması gerekiyordu:

- Güncele yakın ve tarihsel sicil verilerine erişmek
- Derinlemesine iç içe geçmiş ve tutarsız JSON yapılarını işlemek
- Şirket, üretim birimi ve sahiplik kayıtlarını ilişkisel olarak modellemek
- Etkin ve sona ermiş sahiplik ilişkilerini korumak
- Kesin sorguların yanında esnek şirket aramasını desteklemek
- Kimlik doğrulama kısıtları, rate limit'ler ve eksik alanlar altında güvenilir kalmak
- Yeniden üretilebilir deployment ve açık operasyonel belgeleme sunmak

## Geliştirdiğim bileşenler

- Danimarka Ticaret Otoritesi'nin CVR sistemden sisteme API'siyle entegre FastAPI mikroservisi
- Şirket araması, genel şirket bilgileri, sahiplik ayrıntıları, kilit kişiler ve belge alma için kimlik doğrulamalı endpoint'ler
- İsteğe bağlı, eksik ve yapısal olarak farklı API yanıtları için parsing ve doğrulama mantığı
- Şirketleri, üretim birimlerini ve sahiplik geçmişini kapsayan MySQL veri modeli
- Kısmi ad ve esnek sicil araması için Elasticsearch tabanlı arama
- Ortam değişkenleriyle güvenli yapılandırma ve korumalı uygulama endpoint'leri
- Doğrudan API yolu bulunmayan şirket PDF'leri için Selenium iş akışı
- Deployment ve devralma için Docker tabanlı kurulum ve teknik dokümantasyon

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="eager" path="assets/img/projects/legalian/registry-data-platform.png" title="Tarihsel şirket sicili veri platformunun mimarisi" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">FastAPI katmanı kimlik doğrulamalı CVR isteklerini, savunmacı parsing'i, ilişkisel depolamayı ve aramayı koordine eder. Tarihsel sahiplik verileri en yeni sicil yanıtıyla üzerine yazılmak yerine sorgulanabilir kalır.</div>

## Yalnızca son yanıtı değil, geçmişi tasarlamak

En önemli tasarım kararı, sicil verilerini tek bir şirket nesnesi yerine zaman çizelgesi olarak ele almaktı. Şu alanlar için ayrı ilişkisel yapılar oluşturdum:

- **Şirketler:** CVR numarası, kayıtlı unvan, adres, durum, iş türü ve başlangıç tarihi
- **Üretim birimleri:** işletme birimi bilgileri, sektör sınıflandırması, çalışan sayıları ve ilişkili şirket
- **Sahiplik:** yasal ve gerçek faydalanıcılar, sona ermiş sahiplikler, sahiplik ve oy oranları ile ilişki tarihleri

Hem etkin hem sona ermiş sahiplik kayıtları korunur. Platform değişiklikleri kendiliğinden varsaymaz; bunun yerine başlangıç ve bitiş tarihlerini saklar. Böylece kullanıcı seçilen bir tarihteki sahiplik durumunu yeniden kurabilir ve bir ilişkinin ne zaman başladığını veya sona erdiğini görebilir.

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/legalian/ownership-history-model.png" title="İlişkisel veri modeli ve tarihsel sahiplik zaman çizelgesi" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Ayrı şirket, üretim birimi ve sahiplik kayıtları tarihsel ilişkileri açık hale getirir. Sona ermiş bir ilişki veri modelinde kalır ve daha sonraki bir uyumluluk incelemesinde kullanılabilir.</div>

## Dayanıklı entegrasyon katmanı

CVR yanıtları şirket türleri arasında farklılaşır ve sıklıkla isteğe bağlı veya eksik alanlar içerir. İlgili değerleri çıkaran, iç içe nesneleri normalleştiren, sonucu doğrulayan ve tutarlı yanıt yapıları döndüren savunmacı parser'lar geliştirdim. Böylece API kullanıcıları upstream formatındaki birçok düzensizlikten ayrıştırıldı.

Servis operasyonel hata durumlarını da ele alır:

- Kimlik bilgileri koda gömülmek yerine ortam değişkenlerinden yüklenir.
- API hataları ve rate limit durumları uygulama akışını çökertmeden yönetilir.
- Sahibi olmayan şirketler, sona ermiş ilişkiler, uluslararası bağlantılar ve büyük sahiplik yapıları gibi edge case'ler kapsanır.
- Endpoint ve veri doğrulama testleri başarılı yanıtları, eksik veriyi, hata yönetimini ve performans davranışını kapsar.

## Arama ve belge iş akışları

API, CVR numarasıyla doğrudan sorguların yanında kısmi ad aramalarını da destekler. Elasticsearch şirket verileri üzerinde esnek bir arama katmanı sağlarken ilişkisel veri tabanı şirket ayrıntıları ve tarihsel ilişkiler için yapılandırılmış kaynak olarak kalır.

Şirket belgeleri farklı bir entegrasyon yolu gerektirdi. Belge indirmeleri otomasyon kısıtları olan bir tarayıcı akışı üzerinden sunulduğu için ilgili CVR sayfasını açan, indirmeyi tetikleyen, tamamlanmasını izleyen ve dosya metadatasını döndüren Selenium tabanlı bir süreç geliştirdim. Akışın başka ortamlarda tekrarlanabilmesi için Chrome ve ChromeDriver uyumluluğunu belgeledim.

## Teslimat ve sonuç

Dış API araştırmasından veri modelleme, endpoint geliştirme, test, containerization ve dokümantasyona kadar backend tasarım ve uygulamasının sorumluluğunu üstlendim. Sonuç, tek seferlik sicil istekleri yerine yeniden kullanılabilir bir şirket veri servisi oldu.

Platform, güncel şirket bilgilerini tarihsel sahiplik bağlamıyla birleştirmesi gereken uyumluluk iş akışları için pratik bir temel oluşturdu. Dış sicilin karmaşıklığını iç kullanıcılardan ayırarak gelecekteki raporlama, due diligence ve iş zekâsı özelliklerinin geliştirilmesini de kolaylaştırdı.

## Teknik yığın

`Python` · `FastAPI` · `REST` · `MySQL` · `Elasticsearch` · `pandas` · `Pydantic` · `Docker` · `Selenium` · `JWT` · `Ortam tabanlı yapılandırma`

## Proje bağlamı

Bu sistemi **Legalian GmbH** bünyesinde, Alman Kara Para Aklama Yasası kapsamındaki uyumluluk otomasyonuna odaklanan disiplinler arası bir yazılım mühendisliği projesi olarak teslim ettim.

<div class="mt-4"><a class="btn btn-sm btn-primary" href="https://github.com/Cagataygultekin/danish-business-register" target="_blank" rel="noopener">Kaynak kodu GitHub'da incele</a></div>
