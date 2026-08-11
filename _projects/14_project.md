---
layout: page
published: true
title: Multi-Client Coffee Shop System
description: A Python TCP client-server application for recording coffee-shop sales and producing operational statistics.
importance: 14
category: earlier
technologies: [Python, TCP/IP, Client-Server Architecture, Concurrent Connections, Sales Analytics]
visual: coffee-network
visual_icon: fa-solid fa-mug-hot
visual_kicker: Network programming
visual_label: TCP Server and Multiple Clients
permalink: /projects/python-coffee-shop-client-server/
---

This project implemented a coffee-shop sales application using a Python TCP client-server architecture. Clients submitted sales-related operations over the network, while the server maintained the shared application workflow and produced statistics from the recorded activity.

## Network architecture

The server was designed to communicate with multiple clients at the same time. This made the project more than a local sales tracker: operations had to cross a network boundary and be coordinated through a central service.

The application combined three concerns:

- TCP-based communication between clients and the server,
- centralized sales tracking,
- calculation and presentation of operational statistics.

## Engineering focus

The project introduced practical client-server design in Python. It required a clear protocol between the two sides, separation of client interaction from server-side processing, and support for multiple active connections without treating each client as an isolated application.

It provided an early foundation for later work on APIs, distributed services, and backend systems by making network communication part of the application design rather than an implementation detail.

## Core stack and concepts

`Python` / `TCP/IP` / `Sockets` / `Client-server architecture` / `Multiple client connections` / `Sales statistics`

## Project context

This application was completed during my Computer Engineering studies at **Middle East Technical University Northern Cyprus Campus**. The original source code is not currently public.
