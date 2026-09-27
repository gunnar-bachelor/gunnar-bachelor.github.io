---
title: Brennan Precision
year: 2023
client: Brennan Precision Machining Co.
category: Operations, Migration
summary: A quote-to-invoice and shop floor tracking system replacing a 19-year-old Access database.
duration: 6 months
stack: C#, .NET, SQL Server, QuickBooks Online API
cover: /assets/img/projects/brennan.svg
---

Brennan Precision ran its entire business, from quotes and work orders to routing and invoicing, on a Microsoft Access database built in 2004 by a former employee's nephew.

## Brief

The database worked, mostly. But it only ran on two office computers, crashed when more than three people used it, and nobody knew how to change it. The shop floor had no visibility at all: job status lived on paper travelers clipped to parts, and customers calling for an update meant someone walking the floor to find their job.

## Approach

The risk in this project was the data, not the software. Nineteen years of customer part numbers, pricing history and revision notes were the company's real asset.

- A full migration of every customer, part, quote and job since 2004, cleaned and validated against the old system side by side for a month before cutover
- Quoting that pulls previous prices and run times for repeat parts
- Digital travelers: each operation is scanned in and out at the machine on a shared tablet, so job status is always current
- A schedule view showing load by machine for the next three weeks
- Shipped jobs become invoices in QuickBooks Online automatically

The old database stayed available read-only for six months, so no one had to trust the migration blindly.

> Customers call for a status and we can tell them in ten seconds. That used to take a walk and sometimes a guess.
>
> — Tom Brennan, President

## Outcome

On-time delivery rose from 81% to 94% in the first year, largely because late jobs became visible while there was still time to act. Quoting repeat parts went from about half an hour to a couple of minutes. The system runs on any computer in the building, and the company still uses it daily.
