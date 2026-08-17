---
layout: page
lang: tr
translation_key: project-antipattern
published: true
title: Java Performans Anti-Pattern Analiz Aracı
description: Repository çağrılarını Java çağrı zincirleri boyunca izleyen ve önem derecesine göre sıralanmış bulguları IntelliJ IDEA içinde sunan statik ve dinamik analiz aracı.
img: assets/img/projects/itestra/anti-pattern-analysis-pipeline.png
importance: 3
category: professional
technologies: [Java, Statik Analiz, Eclipse JDT, Çağrı Grafikleri, IntelliJ Plugin]
permalink: /tr/projects/java-performance-antipattern-analyzer/
github: https://github.com/DigitalProductInnovationAndDevelopment/Anti-Pattern-Analysis
---

**itestra GmbH** bünyesinde kurumsal Java uygulamalarındaki performans anti-pattern'lerini tespit eden bir geliştirici aracı üzerinde çalıştım. Temel hedef, sık görülen ve maliyetli bir örüntüydü: Döngü ile veri tabanı çağrısının arasında birden fazla metot bulunsa bile bir döngü içinden tekrar tekrar çalıştırılan repository veya veri tabanı çağrıları.

Geliştirilen sistem, kaynak kod yapısını isteğe bağlı runtime sampling ile birleştiriyor ve sonucu IntelliJ IDEA plugin'i üzerinden sunuyor. Geliştiriciler etkilenen çağrı yolu, kaynak konumu, analiz türü, çalışma süresi ve önem derecesini içeren yapılandırılmış bir bulgu alıyor.

<div class="row text-center my-4">
  <div class="col-sm-4 mb-3"><h3>Java 17</h3><p class="mb-0">Eclipse JDT ile geliştirilen bağımsız analiz motoru</p></div>
  <div class="col-sm-4 mb-3"><h3>2 analiz katmanı</h3><p class="mb-0">statik çağrı zinciri tespiti ve runtime doğrulaması</p></div>
  <div class="col-sm-4 mb-3"><h3>IDE içinde teslimat</h3><p class="mb-0">IntelliJ plugin'i üzerinden yapılandırma ve çalıştırma</p></div>
</div>

## Mühendislik problemi

Basit bir kural, görünür bir döngünün içine doğrudan yazılmış veri tabanı çağrısını işaretleyebilir. Gerçek kurumsal kod daha dolaylıdır: Bir servis metodu başka bir servisi, o servis bir yardımcı metodu, o da sonunda bir Hibernate repository metodunu çağırabilir. Yalnızca tek bir metot gövdesine bakmak bu dolaylı yolları kaçırır ve false negative üretir.

Araç şu soruları birlikte yanıtlamalıydı:

1. Projede hangi metotlar var ve hangileri birbirini çağırıyor?
2. Yapılandırılmış bir veri tabanı veya üçüncü taraf metodu çağrı zincirinin herhangi bir yerinde bulunuyor mu?
3. Bu çağrı upstream bir metottaki döngüden mi ulaşıldı?
4. Runtime sampling statik bulguyu destekliyor mu?
5. Sonuç geliştiricinin normal IDE iş akışında nasıl sunulabilir?

## Geliştirdiğim bileşenler

- Eclipse JDT ile Java kaynak kodu parsing ve AST üretimi
- Metot toplama, çağrı çıkarma ve çağrı grafiği oluşturma
- Dolaylı metot ilişkileri boyunca çok seviyeli çağrı zinciri izleme
- Yapılandırılmış repository metotlarına ulaşan döngü bağlamlarının tespiti
- Kaynak konumu, alt metot ayrıntıları, analiz türü ve önem derecesi içeren yapılandırılmış JSON çıktısı
- Örneklenmiş çalışma süresi snapshot'larına dayalı isteğe bağlı dinamik analiz
- Doğrudan döngü, metot zinciri ve stream senaryoları için kontrollü test repository'leri
- Yerel yapılandırma ve çalıştırma için Kotlin ile geliştirilen IntelliJ IDEA plugin'i
- CI tabanlı regresyon testleri, pull request incelemeleri ve araç ile plugin için ayrı teslimat iş akışları

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="eager" path="assets/img/projects/itestra/anti-pattern-analysis-pipeline.png" title="IntelliJ teslimatıyla statik ve dinamik analiz pipeline'ı" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Java kaynak kodu AST'lere ve proje seviyesinde bir çağrı grafiğine dönüştürülür. Statik bulgular, IntelliJ iş akışıyla geliştiriciye dönmeden önce runtime snapshot verileriyle zenginleştirilebilir.</div>

## Mevcut metodun ötesinde statik analiz

Analiz motoru Eclipse JDT ile Java compilation unit'lerini parse eder, metot bildirimlerini toplar, çağrıları çıkarır ve proje seviyesinde çağrı grafiği oluşturur. Repository veya diğer üçüncü taraf metotları yapılandırmayla verildiği için kural analiz edilen codebase'e uyarlanabilir.

Çağrı zinciri analizörü bu metotlara giden yolları izler ve her yolda upstream metodun alt çağrısını bir döngü içinden yapıp yapmadığını kontrol eder. Böylece şu örüntü tespit edilebilir:

`updateCatalog()` -> `syncInventory()` -> döngü -> `persistProduct()` -> `repository.save()`

Bu, veri tabanı çağrısı döngüyü içeren metotta doğrudan yazılmamış olsa bile çalışır.

<div class="row justify-content-center"><div class="col-md-12 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/itestra/call-chain-detection.png" title="Döngüden repository metoduna çok seviyeli çağrı zinciri izleme" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Analizör giriş metodundan yapılandırılmış veri tabanı çağrısına kadar tüm yolu korur. Bu, yalnızca son repository çağrısını işaretleyen bir kurala göre daha kullanışlı geri bildirim sağlar.</div>

## Statik yapıyı runtime kanıtıyla birleştirmek

Statik analiz riskli bir yapıyı tespit eder ancak gerçek çalışma maliyetini tek başına belirleyemez. CSV snapshot'larından örneklenmiş metot çalışma verilerini okuyan dinamik analiz katmanı üzerinde de çalıştım. Runtime verisi sağlandığında analizör ortalama çalışma süresini yapılandırılabilir eşikle karşılaştırır ve bulguyu yalnızca statik sonuçtan birleşik sonuca yükseltir.

Yapılandırılmış çıktı; giriş metodu ve sınıfını, kaynak satır ve sütununu, repository metodu ile döngüyü içeren metodu, statik veya birleşik analiz türünü, varsa ölçülen çalışma süresini ve eşikten türetilen önem derecesini kaydeder.

Bu ayrım aracı iki biçimde kullanılabilir kılar: Yalnızca kaynak kodla veya profiling ve snapshot export üzerinden alınan çalışma ölçümleriyle zenginleştirilmiş olarak.

## IntelliJ IDEA entegrasyonu

Bağımsız analizör JAR olarak paketlenip Kotlin tabanlı IntelliJ plugin'ine gömülür. Plugin geçerli proje dizinini alır, projeye özgü yapılandırmayı kabul eder, analizi yerel olarak çalıştırır ve geliştiricinin IDE'den ayrılmasını gerektirmeden sonuçları gösterir.

Yapılandırma; veri tabanı veya üçüncü taraf metot tanımlarının yollarını, pattern matching ile paket, sınıf ve metot dışlamalarını, isteğe bağlı runtime snapshot CSV'sini ve dinamik önem derecesi için çalışma süresi eşiğini destekler. Proje kaynak kodu geliştiricinin bilgisayarında kalır ve harici servise gönderilmez.

## Test ve teslimat süreci

Proje tek başına bir prototip olarak değil, production odaklı bir iş akışıyla geliştirildi. Çalışma epic'lere ve GitHub issue'larına bölündü, feature branch'lerde geliştirildi, pull request'lerde incelendi ve analizör ile plugin için ayrı CI iş akışlarıyla kontrol edildi.

Kontrollü test repository'leri; döngü içindeki doğrudan repository çağrısını, çok metotlu zincirle ulaşılan çağrıyı, stream tabanlı örüntüleri ve geçerli/geçersiz runtime snapshot verilerini kapsadı. Bu fixture'lar kural davranışını yeniden üretilebilir hale getirdi ve çağrı grafiği ile plugin katmanları geliştikçe tespit regresyonlarını önledi.

## Sonuç

Nihai sonuç Java kaynak kodu parsing, proje seviyesinde ilişki analizi, runtime kanıtı, yapılandırılmış çıktı, otomatik testler ve IntelliJ entegrasyonundan oluşan eksiksiz bir geliştirici aracı iş akışıydı. Proje, dar kapsamlı bir performans kuralının gerçek bir geliştirme ortamında yapılandırılabilir, test edilebilir ve kullanılabilir biçimde nasıl uygulanabileceğini gösterdi.

## Teknik yığın

`Java 17` · `Kotlin` · `Eclipse JDT` · `JGraphT` · `Jackson` · `Maven` · `Gradle` · `IntelliJ Platform SDK` · `JUnit` · `GitHub Actions` · `VisualVM`

## Proje bağlamı ve kaynak kod

Bu çalışmayı **itestra GmbH** ve **Technical University of Munich (TUM)** ile yürütülen bir teknoloji danışmanlığı projesinde teslim ettim. Analizör ve IntelliJ plugin'i herkese açık proje repository'sinde bulunuyor.

<div class="mt-4"><a class="btn btn-sm btn-primary" href="https://github.com/DigitalProductInnovationAndDevelopment/Anti-Pattern-Analysis" target="_blank" rel="noopener">Kaynak kodu GitHub'da incele</a></div>
