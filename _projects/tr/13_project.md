---
layout: page
lang: tr
translation_key: project-mips
published: true
title: Python ile MIPS Assembler
description: Temel MIPS komutlarını ve seçili pseudo-instructionları onaltılık makine koduna çeviren Python assembler.
importance: 13
category: earlier
technologies: [Python, MIPS Assembly, Komut Kodlama, CLI, Toplu İşleme]
visual: mips-assembler
visual_icon: fa-solid fa-microchip
visual_kicker: Sistem programlama
visual_label: MIPS'ten Onaltılık Koda
permalink: /tr/projects/python-mips-assembler/
---

Bu proje MIPS komut kümesinin bir bölümünü onaltılık makine koduna ve object-code çıktısına dönüştüren kompakt bir Python assembler geliştirdi.

## Çeviri iş akışı

Assembler temel MIPS komutlarını alıyor, operandlarını ayrıştırıyor, doğru komut biçimine eşliyor ve karşılık gelen onaltılık temsili üretiyordu. Seçili pseudo-instructionları da kodlamadan önce desteklenen temel komutlara dönüştürüyordu.

## Etkileşimli ve toplu modlar

Uygulama iki çalışma yolunu destekledi:

- **Etkileşimli mod:** Komut satırından bir instruction okumak, assemble etmek ve onaltılık sonucu göstermek.
- **Toplu mod:** Bir `.src` kaynak dosyasını okumak, komutları assemble etmek ve `.obj` object-code dosyası yazmak.

İki modu da desteklemek, tek bir girdi kaynağına bağlı mantık yerine tekrar kullanılabilir çeviri hattı gerektirdi. Proje komut biçimleri, operand parsing, bit düzeyinde kodlama ve assembly diliyle makine temsili arasındaki ilişki konusundaki anlayışımı güçlendirdi.

## Temel yapı ve kavramlar

`Python` / `MIPS assembly` / `Komut parsing` / `Makine kodu kodlama` / `Pseudo-instruction genişletme` / `CLI` / `Dosya işleme`

## Proje bağlamı

Bu assembler **Orta Doğu Teknik Üniversitesi Kuzey Kıbrıs Kampüsü** Bilgisayar Mühendisliği eğitimim sırasında **CNG331 Computer Organization** için tamamlandı. Özgün kaynak kodu şu anda herkese açık değildir.
