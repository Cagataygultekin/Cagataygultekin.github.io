---
layout: page
lang: tr
translation_key: project-coffee-shop
published: true
title: Çok İstemcili Kahve Dükkanı Sistemi
description: Kahve dükkanı satışlarını kaydetmek ve operasyonel istatistikler üretmek için Python TCP client-server uygulaması.
importance: 14
category: earlier
technologies: [Python, TCP/IP, Client-Server Mimarisi, Eş Zamanlı Bağlantılar, Satış Analitiği]
visual: coffee-network
visual_icon: fa-solid fa-mug-hot
visual_kicker: Ağ programlama
visual_label: TCP Sunucusu ve Birden Fazla İstemci
permalink: /tr/projects/python-coffee-shop-client-server/
---

Bu proje Python TCP client-server mimarisiyle bir kahve dükkanı satış uygulaması geliştirdi. İstemciler satış işlemlerini ağ üzerinden gönderirken sunucu ortak uygulama akışını yönetiyor ve kaydedilen etkinliklerden istatistikler üretiyordu.

## Ağ mimarisi

Sunucu aynı anda birden fazla istemciyle iletişim kuracak biçimde tasarlandı. Böylece proje yerel bir satış takip sisteminin ötesine geçti: işlemlerin ağ sınırını aşması ve merkezi bir servis üzerinden koordine edilmesi gerekiyordu.

Uygulama üç konuyu birleştirdi:

- istemcilerle sunucu arasında TCP tabanlı iletişim,
- merkezi satış takibi,
- operasyonel istatistiklerin hesaplanması ve sunulması.

## Mühendislik odağı

Proje Python ile pratik client-server tasarımına giriş sağladı. İki taraf arasında açık bir protokol, istemci etkileşimiyle sunucu tarafı işlemenin ayrılması ve her istemciyi bağımsız uygulama gibi ele almadan birden fazla etkin bağlantının desteklenmesi gerekiyordu.

Ağ iletişimini bir uygulama ayrıntısı değil tasarımın parçası haline getirerek sonraki API, dağıtık servis ve backend sistemi çalışmalarım için erken bir temel oluşturdu.

## Temel yapı ve kavramlar

`Python` / `TCP/IP` / `Sockets` / `Client-server mimarisi` / `Birden fazla istemci bağlantısı` / `Satış istatistikleri`

## Proje bağlamı

Bu uygulama **Orta Doğu Teknik Üniversitesi Kuzey Kıbrıs Kampüsü** Bilgisayar Mühendisliği eğitimim sırasında **CNG445 Software Development with Scripting Languages** için tamamlandı. Özgün kaynak kodu şu anda herkese açık değildir.
