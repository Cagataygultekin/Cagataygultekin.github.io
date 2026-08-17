---
layout: page
lang: en
translation_key: project-mips
published: true
title: MIPS Assembler in Python
description: A Python assembler that translates core MIPS instructions and selected pseudo-instructions into hexadecimal machine code.
importance: 13
category: earlier
technologies: [Python, MIPS Assembly, Instruction Encoding, CLI, Batch Processing]
visual: mips-assembler
visual_icon: fa-solid fa-microchip
visual_kicker: Systems programming
visual_label: MIPS to Hexadecimal
permalink: /projects/python-mips-assembler/
---

This project implemented a compact assembler in Python for translating a subset of the MIPS instruction set into hexadecimal machine code and object-code output.

## Translation workflow

The assembler accepted core MIPS instructions, decoded their operands, mapped them to the correct instruction format, and produced the corresponding hexadecimal representation. It also handled selected pseudo-instructions by converting them into supported base instructions before encoding.

## Interactive and batch modes

The application supported two execution paths:

- **Interactive mode:** read an instruction from the command line, assemble it, and display the hexadecimal result.
- **Batch mode:** read a `.src` source file, assemble its instructions, and write an `.obj` object-code file.

Supporting both modes required a reusable translation pipeline rather than logic tied to a single input source. The project strengthened my understanding of instruction formats, operand parsing, bit-level encoding, and the relationship between assembly language and machine representation.

## Core stack and concepts

`Python` / `MIPS assembly` / `Instruction parsing` / `Machine-code encoding` / `Pseudo-instruction expansion` / `CLI` / `File processing`

## Project context

This assembler was completed for **CNG331 Computer Organization** during my Computer Engineering studies at **Middle East Technical University Northern Cyprus Campus**. The original source code is not currently public.
