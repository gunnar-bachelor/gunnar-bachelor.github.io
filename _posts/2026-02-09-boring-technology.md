---
title: Boring technology for small clients
topic: Tools
summary: The stack I default to, and why the main requirement is that someone else can maintain it if I get hit by a bus.
---

A small business will likely keep the software I build for ten years. I will not be the only person who ever touches it. That changes how I choose tools.

## The default stack

| Layer | Choice | Why |
| --- | --- | --- |
| Language | Python | Easy to hire for, readable by non-specialists |
| Framework | Django | Admin screens for free, stable for a decade |
| Database | PostgreSQL | Does everything, runs everywhere |
| Hosting | A single managed server | One bill, one place to look |
| Front end | Server-rendered HTML | Fewer moving parts than a separate app |

## What I avoid

Anything that requires a specialist to deploy, anything with a monthly price that scales per seat, and anything released in the past two years. New tools are fine for my own projects. Clients get the boring version.

## The handover test

Before I call a project done, I ask: could a competent freelancer pick this up from the README in a day? If the answer is no, the project isn't done.
