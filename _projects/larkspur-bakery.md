---
title: Larkspur Bakery
year: 2025
client: Larkspur Bakery & Wholesale
category: Customer portal, Automation
summary: A wholesale ordering portal for 60 café accounts that turns orders into bake sheets and delivery routes overnight.
duration: 10 weeks
stack: Python, Django, PostgreSQL, Square API, Google Maps
cover: /assets/img/projects/larkspur.svg
---

Larkspur's wholesale side grew from a handful of cafés to sixty accounts, and the ordering process never changed: texts, voicemails and emails, collected by hand at ten o'clock every night.

## Brief

The owner, Maren Holt, was spending two hours each evening reading messages, copying orders into a spreadsheet and working out how many of each item to bake. Mistakes were constant, roughly a dozen missed or wrong orders a week, and each one meant a phone call, a credit and an unhappy café.

## Approach

Café owners order on their phones between rushes, so the portal had to be faster than sending a text.

- Each account gets a personal link with their usual order pre-filled; changing it takes a few taps
- Standing orders repeat automatically, with holiday and closure dates handled in one place
- At the nightly cutoff the system produces a bake sheet by item and batch size, packing lists by account, and a delivery run ordered by route
- Invoices are created in Square for each account weekly, with credits applied automatically for any shorts

I kept the admin side intentionally plain. The kitchen lead can add a seasonal item, change a price or pause an account without calling me.

> My evenings are mine again. And the cafés actually prefer it to texting me.
>
> — Maren Holt, Owner

## Outcome

Order errors fell from about twelve a week to fewer than one a month. Because the bake sheet generates itself, the order cutoff moved from 8pm to 11pm, which accounts said was the change they valued most. Wholesale revenue grew 28% in the following year with the same staff.
