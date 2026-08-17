---
layout: page
lang: tr
translation_key: project-legal-ai
published: true
title: Legal AI Veri Etiketleme Platformu
description: Belge yükleme, OCR, ML destekli sınıflandırma, etiketleme iş akışları ve korumalı hukuki veri servislerine güvenli erişim sunan React/TypeScript ve Flask platformu.
img: assets/img/projects/legal-ai/legal-ai-dashboard-v2.png
importance: 5
category: professional
technologies: [React + TypeScript, Flask, OCR İş Akışları, JWT Güvenliği, Docker]
permalink: /tr/projects/legal-ai-data-labelling-platform/
---

**Legalian GmbH** ile iş birliği içinde hukuki belgelerdeki bilgileri çıkarmak, sınıflandırmak, incelemek ve etiketlemek için geliştirilen şirket içi bir platformda çalıştım. Proje, legal-tech alanında tekrarlanan bir problemi ele alıyordu: Büyük belge koleksiyonları değerli yapılandırılmış veriler içerirken manuel çıkarım ve kategorilendirme yavaş, tutarsız ve ölçeklenmesi zordur.

İki mimari aşamada çalıştım. Platform, etiketleme iş akışını araştırmak için kullanılan Expo tabanlı bir arayüz prototipiyle başladı, ardından Flask backend tarafından desteklenen React/TypeScript web uygulamasına geçti. Çalışmalarım arayüz prototipleme, frontend geliştirme, backend entegrasyonu, frontend-backend sözleşmeleri, Docker tabanlı kurulum ve korumalı OCR ile makine öğrenmesi servislerine güvenli erişimi kapsadı.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">İki mimari aşama</h3><p class="mb-0">Hızlı Expo prototiplemesinden yapılandırılmış React/TypeScript ve Flask web platformuna geçişte çalıştım.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Güvenli servis entegrasyonu</h3><p class="mb-0">İmzalı JWT isteklerini ve Flask gateway'i korumalı OCR ile makine öğrenmesi servislerine entegre ettim.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Tekli ve toplu iş akışları</h3><p class="mb-0">Belge inceleme, sürükle-bırak yükleme, ZIP ön işleme, sınıflandırma ve etiketleme akışlarında çalıştım.</p></div></div>
</div>

## Ürün problemi

Hukuk uzmanlarının farklı yerleşimlere sahip belgelerde kişi, şirket, ortaklık ilişkisi, tarih, adres ve diğer yapılandırılmış varlıkları belirlemesi gerekir. Bu süreci otomatikleştirmek yalnızca metin çıkarmaktan fazlasını gerektirir. Özgün belge, tahmin edilen varlıklar, sınıflandırma sonuçları ve insan düzeltmeleri inceleme boyunca birbiriyle bağlı kalmalıdır.

Platform şu iş akışını destekliyordu:

1. tekil belgeleri veya ZIP paketlerini yükleme,
2. dosyaları ön işleme ve OCR çalıştırma,
3. belgeleri ve çıkarılan varlıkları sınıflandırma,
4. etiketleri inceleme ve etiketleme arayüzünde düzeltme,
5. yapılandırılmış sonuçları ve belge metadatasını güvenli biçimde saklama.

## Aşama 1: etkileşim modelini doğrulamak

Navigasyon, belge görünümü, kategori seçimi ve ilk etiketleme etkileşimlerini araştırmak için Expo ve React Native uygulamasında çalıştım. Daha yapılandırılmış web mimarisine geçmeden önce iş akışını değerlendirmek ve arayüz kararlarını tartışmak için Figma tasarımlarını kullandık.

<div class="row"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/legal-ai-dashboard-v2.png" title="Yeniden tasarlanan Legal AI dataset ve işlem dashboardu" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Erken Figma iş akışına dayanan, portfolyo için geliştirilmiş bir rekonstrüksiyon. Özgün şirket arayüzünü veya kişisel belge verilerini yeniden üretmeden dataset navigasyonunu, yüklemeyi, işlem durumunu ve inceleme kuyruklarını anlatır.</div>

Bu aşama kullanıcıların datasetler, belgeler, sınıflandırma sonuçları ve etiketleme görevleri arasında nasıl hareket edeceğini test etmeyi sağladı. Mimari değiştiğinde korunması gereken etkileşim örüntülerini de ortaya çıkardı.

## Aşama 2: yapılandırılmış full-stack mimari

Ardından platformun Flask backend destekli React/TypeScript frontend'e geçişinde çalıştım. Bu mimari kullanıcı arayüzü, uygulama mantığı, kimlik doğrulama, belge işleme ve korumalı makine öğrenmesi servisleri arasında daha açık sınırlar kurdu.

### React ve TypeScript frontend

Frontend çalışmalarım şu alanlar için route ve tekrar kullanılabilir bileşenleri kapsadı:

- sürükle-bırak belge ve ZIP yükleme,
- dataset ve belge listeleme,
- OCR sonuçlarını görselleştirme,
- toplu sınıflandırma,
- belge düzeyinde etiketleme,
- etiket doğrulama ve kullanıcı geri bildirimi.

TypeScript karmaşık etiketleme verileri ve API yanıtları için daha güçlü sözleşmeler sağladı. Arayüz, keşif amaçlı ekranları daha tekrar kullanılabilir ve sürdürülebilir bileşenlerle değiştirirken doğrulanan Figma iş akışlarını izledi.

<div class="row"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/legal-ai/legal-ai-annotation-workspace-v2.png" title="Yeniden tasarlanan belge etiketleme ve doğrulama çalışma alanı" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Yeniden tasarlanan inceleme alanı kaynak belgeyi, çıkarılan alanları, güven değerlerini, doğrulama durumunu ve sayfa navigasyonunu birlikte görünür tutar. Gösterilen tüm belge içeriği sentetik ve anonimdir.</div>

### Flask gateway ve korumalı ML servisleri

Frontend'in korumalı OCR ve makine öğrenmesi servislerine Flask gateway üzerinden bağlanmasında çalıştım. Backend, service account bilgileriyle imzalı JWT tokenları üretiyor, güvenli gateway endpointlerini çağırıyor, OCR ve ZIP ön işleme isteklerini yönetiyor ve frontend'e yapılandırılmış yanıtlar gönderiyordu.

Korumalı servisleri Flask gateway arkasında tutmak, erişim bilgilerini tarayıcıdan yalıttı ve frontend'in iç altyapıya doğrudan bağımlı olmasını önledi. Kimlik doğrulama, yetkilendirme, hata yönetimi ve API davranışı için de merkezi bir entegrasyon noktası sağladı.

### Veri yönetimi

Mimari kullanıcı girdileri, belge metadatası, çıkarılan varlıklar ve sınıflandırma sonuçları için yapılandırılmış bir MySQL veri modeli kullanıyordu. Ham belge bağlamı ile işlenmiş bilgiler ayrı tutuluyor, normalleştirilmiş sonuçların özgün belgelerle bağını kaybetmeden sorgulanabilmesi sağlanıyordu.

## Güvenlik, test ve deployment

Platform hukuki belgeleri ve korumalı servisleri işlediği için çalışmalarım şunları da kapsadı:

- JWT tabanlı kimlik doğrulama ve yetkilendirme,
- girdi doğrulama ve yapılandırılmış hata yönetimi,
- işleme ve API akışları için unit ve integration testleri,
- frontend ve backend için Docker ve Docker Compose ortamları,
- CI/CD tabanlı test ve deployment hazırlığı.

## Sonuç

Platformun prototip ve full-stack geliştirme aşamalarında çalışarak etkileşim modeli, React/TypeScript frontend, Flask gateway entegrasyonu, frontend-backend sözleşmeleri, Docker kurulumu ve güvenli API erişimine katkıda bulundum.

Bu bileşenler birlikte belge yükleme, OCR, ML destekli sınıflandırma, etiketleme ve güvenli servis entegrasyonunu destekledi. Çalışma, erken arayüzde doğrulanan iş akışlarını korurken keşif amaçlı bir prototipi daha yapılandırılmış bir uygulamaya dönüştürme konusunda pratik deneyim kazandırdı.

En değerli mühendislik dersi, hızlı prototiplemenin amacını tamamladığı ve frontend, backend, güvenlik ile işleme katmanları arasında daha güçlü bir ayrımın gerekli olduğu noktayı fark etmekti.

## Teknik yapı

`React` · `TypeScript` · `Expo` · `React Native` · `Flask` · `REST APIs` · `JWT` · `Google service accounts` · `OCR` · `ML destekli sınıflandırma` · `MySQL` · `Figma` · `Docker Compose` · `CI/CD`

## Proje bağlamı

Platformda Mart ve Haziran 2024 arasında çalıştım. Kaynak kodu ve iç uygulama herkese açık değildir. Bu nedenle sayfa, özel geliştirme ayrıntılarını veya hukuki verileri açığa çıkarmadan ürünü anlatmak için portfolyo rekonstrüksiyonları kullanır.
