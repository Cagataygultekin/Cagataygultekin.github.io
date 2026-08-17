---
layout: page
lang: tr
translation_key: project-hpc
published: true
title: CFD Simülasyonları için Paralel HDF5 Çıktısı
description: Daha hızlı, daha küçük ve ParaView'a hazır simülasyon verileri için NS-EOF'a yapılandırılmış HDF5 çıktısı ve XDMF metadatası ekleyen C++/MPI uzantısı.
img: assets/img/projects/hpc/hdf5-data-layout.png
importance: 4
category: professional
technologies: [C++, MPI, Paralel I/O, HDF5, Performans Profilleme]
github: https://github.com/Cagataygultekin/parallel-navier-stokes-solver-hdf5
permalink: /tr/projects/parallel-hdf5-cfd-output/
---

**Münih Teknik Üniversitesi (TUM)** bünyesinde, sıkıştırılamaz Navier-Stokes simülasyonları için dağıtık bellekli bir C++ çatısı olan NS-EOF üzerinde ek bir yüksek performanslı hesaplama projesine katıldım. Proje katkıcısı olarak bireysel solver ve profilleme görevlerini, simülasyon çıktı hattını yeniden tasarlayan ekip çalışmasıyla birleştirdim.

Daha yakın dönem mühendislik çalışmalarım ağırlıklı olarak Python ve Java üzerineydi. Bu proje, C/C++ ve sisteme yakın geliştirmeye uygulamalı bir geri dönüş sağladı. MPI süreç koordinasyonu, paralel I/O, bellek kullanımını gözeten veri yapıları, build yapılandırması, profilleme ve bilimsel dosya biçimleriyle doğrudan çalışma içeriyordu.

Son sistem HDF5 C API üzerinden paralel HDF5 çıktısı ekledi ve ParaView için XDMF metadatası üretti. VTK çıktısı çalışma zamanı seçeneği olarak korundu, daha büyük 2D, 3D ve paralel simülasyonlar için ise daha ölçeklenebilir bir ikili çıktı yolu sağlandı.

<div class="row my-4">
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Yaklaşık %50 daha hızlı</h3><p class="mb-0">Değerlendirilen simülasyon senaryolarında raporlanan I/O performans iyileşmesi.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">Yaklaşık %50 daha küçük</h3><p class="mb-0">İkili HDF5 çıktısı önceki çıktı yoluna kıyasla depolama gereksinimini azalttı.</p></div></div>
  <div class="col-md-4 mb-3"><div class="border rounded h-100 p-3"><h3 class="h5">2D, 3D ve paralel</h3><p class="mb-0">Benchmarklar farklı domain boyutlarında Cavity ve Channel simülasyonlarını kapsadı.</p></div></div>
</div>

## Mühendislik problemi

Bilimsel simülasyonlar her zaman adımı için grid noktaları, basınç ve hız dahil büyük sayısal alanlar üretir. Mevcut VTK ve ASCII odaklı çıktı, verileri dosyalar ve süreçler arasında parçalı hale getiriyor, problem boyutu arttıkça depolama yükünü yükseltiyor ve sonradan işlemeyi daha verimsiz kılıyordu.

Projenin üç pratik hedefi vardı:

- simülasyon I/O süresini azaltmak,
- üretilen dosyaların sayısını ve boyutunu azaltmak,
- ParaView'ın sonradan işleme için verimli biçimde yükleyebileceği bir yapı sağlamak.

Bu yalnızca dosya biçimi dönüşümü değildi. Veri modelinin zaman adımlarını, MPI ranklarını ve sayısal alanları tutarlı biçimde temsil ederken paralel yürütmeyle uyumlu kalması gerekiyordu.

## HDF5 hiyerarşisini tasarlamak

Simülasyon verilerini düzenlemek için farklı yaklaşımları değerlendirdik. Bir düzen, zaman adımı dosyalarını ayırıp değerleri MPI rankına göre grupluyordu. Daha birleşik tasarım ise zaman adımlarını ve ranka özel verileri tek bir HDF5 yapısına yerleştirerek dosya parçalanmasını azalttı ve sonraki erişimi basitleştirdi.

<div class="row justify-content-center"><div class="col-md-12 mt-3">
{% include figure.liquid loading="lazy" path="assets/img/projects/hpc/hdf5-data-layout.png" title="MPI simülasyon çıktısı için HDF5 yerleşim alternatifleri" class="img-fluid rounded z-depth-1" %}
</div></div>
<div class="caption">Final sunumundaki veri yerleşimi alternatifleri. Hiyerarşi zaman adımlarını, MPI ranklarını ve noktalar, basınç, hız gibi simülasyon alanlarını HDF5 grupları ve datasetleri içinde düzenler.</div>

## Geliştirme

Ekip, ayrı bir dönüştürücü oluşturmak yerine yeni çıktı yolunu mevcut simülasyon sistemine entegre etti.

### Build ve yapılandırma entegrasyonu

- HDF5 bağımlılık yönetimini mevcut CMake build sistemine ekledik.
- XML yapılandırmasını kullanıcıların çalışma zamanında VTK ya da HDF5 çıktısını seçebilmesi için genişlettik.
- Çıktı seçimini sayısal simülasyon yapılandırmasından ayrı tuttuk.

### Paralel veri yazımı

- Dosya, grup, dataset ve attribute oluşturmak ve sayısal değerleri yazmak için HDF5 C API kullandık.
- Grid noktaları, basınç, hız, zaman adımları ve sürece özel verileri öngörülebilir bir hiyerarşide düzenledik.
- Birden fazla MPI sürecinin çıktı iş akışına katılmasını sağladık.
- Daha büyük dağıtık simülasyonlara uygun birleşik bir ikili temsil ürettik.

### ParaView birlikte çalışabilirliği

HDF5 sayısal dizileri saklarken XDMF bunların yapısını ve anlamını tanımlar. XDMF metadatası üretmek, sayısal veriyi ikinci bir dosya biçiminde kopyalamadan ParaView'ın HDF5 datasetlerini yorumlamasını sağladı.

İkili hattın beklenen simülasyon alanlarını koruduğunu doğrulamak için yeni çıktıyı mevcut VTK sonuçlarıyla karşılaştırdık.

## Çıktı hattını benchmark etmek

Değerlendirme, Cavity ve Channel simülasyonlarında VTK/ASCII ile HDF5 çıktısını karşılaştırdı. Testler çeşitli 2D ve 3D domain boyutlarıyla paralel 3D çalışmaları kapsadı.

<div class="row">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/hpc/runtime-reduction-parallel.png" title="Paralel 3D simülasyonlarda çalışma süresi azalması" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/projects/hpc/file-size-reduction.png" title="Simülasyon senaryolarında dosya boyutu azalması" class="img-fluid rounded z-depth-1" %}</div>
</div>
<div class="caption">Final sunumundaki benchmark sonuçları. Kesin iyileşme simülasyona ve domain boyutuna göre değişirken genel değerlendirme I/O ve depolamada belirgin azalma gösterdi.</div>

En önemli sonuç tek bir benchmark noktası değildi. HDF5 yolu farklı simülasyon türleri ve problem boyutlarında yararlı kalıyor, tasarımın dar bir senaryoya bağlı olmadığını gösteriyordu.

## Paralel I/O hata ayıklaması

Paralel HDF5 hataları her zaman açıklayıcı mesajlar vermiyordu. Sorun MPI koordinasyonu, HDF5 çağrıları, grup ve dataset yapısı veya üretilen dosya hakkındaki uyuşmayan varsayımlardan kaynaklanabiliyordu.

Hiyerarşi ile değerleri doğrudan incelemek için `h5dump` kullandık, çıktıları VTK baseline ile karşılaştırdık ve dosya yapısını yinelemeli olarak geliştirdik. Böylece dosya yerleşimi ve gözlemlenebilirlik, çıktıyı son bir serileştirme adımı olarak görmek yerine mühendislik görevinin parçası oldu.

## Sonuç

Proje NS-EOF için yapılandırılabilir, ParaView uyumlu bir HDF5 çıktı hattı oluşturdu. Sonradan işleme performansını iyileştirdi, dosya boyutunu ve parçalanmayı azalttı, çıktı mimarisini HPC iş yüklerine daha uygun hale getirdi. Ortaya çıkan HDF5 hattı bugün TUM bünyesindeki bir makine mühendisliği kürsüsünde kullanılmaktadır.

## Teknik yapı

`C++` · `MPI` · `PETSc` · `HDF5 C API` · `XDMF` · `CMake` · `XML yapılandırması` · `ParaView` · `h5dump` · `CFD` · `Performans profilleme`

## Proje bağlamı

**TUM Scientific Computing Kürsüsü** ile ek bir proje katkıcısı olarak çalıştım. Bu çalışma programımın standart gereksinimlerinin dışındaydı ve 26 ek ECTS tamamladığım teknik projelerden biriydi. Katkım bireysel solver geliştirmeleri ve profillemeyle başlayıp ekip tabanlı HDF5 entegrasyonu ve burada anlatılan benchmark çalışmalarıyla devam etti.

Geliştirme ve proje dokümantasyonu aşağıda bağlantısı verilen açık GitHub reposunda bulunmaktadır.

<div class="mt-4"><a class="btn btn-sm btn-primary" href="https://github.com/Cagataygultekin/parallel-navier-stokes-solver-hdf5" target="_blank" rel="noopener">Kaynak kodunu GitHub'da incele</a></div>
