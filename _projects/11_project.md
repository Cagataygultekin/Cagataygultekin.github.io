---
layout: page
published: true
title: Fruit Tree Recognition System
description: A classical computer vision pipeline using shape, moment, and color features with k-fold validation for image recognition.
importance: 11
category: earlier
technologies: [Computer Vision, Feature Extraction, Chain Codes, Statistical Moments, K-Fold Validation]
visual: fruit-vision
visual_icon: fa-solid fa-tree
visual_kicker: Classical computer vision
visual_label: Features to Recognition
permalink: /projects/fruit-tree-recognition/
---

**Fruit Tree Recognition System** was an undergraduate computer vision project that converted raw images into structured shape and color descriptors and evaluated their value for recognition.

## Recognition pipeline

The system followed five stages:

1. acquire the image data,
2. extract chain codes and shape numbers,
3. calculate statistical moments and color information,
4. validate the recognition process with k-fold cross-validation,
5. measure recognition performance.

The project used an interpretable feature-engineering approach. Instead of treating an image as an opaque input, it represented the visual characteristics of the trees through explicit geometric, statistical, and color-based measurements.

## Engineering focus

The main challenge was turning visual information into features that could be compared consistently across samples. Chain codes represented object boundaries, shape numbers summarized geometry, statistical moments captured distribution properties, and color features added complementary information.

K-fold cross-validation separated evaluation from a single train-test split and provided a more reliable view of recognition performance across the available samples.

## Core methods

`Image acquisition` / `Chain codes` / `Shape numbers` / `Statistical moments` / `Color features` / `K-fold cross-validation` / `Performance evaluation`

## Project context

This project was completed during my Computer Engineering studies at **Middle East Technical University Northern Cyprus Campus**. The original implementation and dataset are not public.
