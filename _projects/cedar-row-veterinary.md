---
title: Cedar Row Veterinary
year: 2025
client: Cedar Row Veterinary Group
category: Reporting, Data
summary: One reporting dashboard and inventory alert system across three clinics running separate software.
duration: 8 weeks
stack: Python, PostgreSQL, Metabase, Microsoft 365
cover: /assets/img/projects/cedar-row.svg
---

Cedar Row had grown to three clinics through acquisition. Each still ran its own practice management software, and the owners had no single view of the business.

## Brief

Every month the practice manager exported reports from three systems, pasted them into one workbook and spent most of a week reconciling them. Inventory was worse: vaccines and medications were ordered separately at each location, and expired stock was written off regularly at one clinic while another ran short of the same product.

Replacing the practice management software was off the table. The staff knew their systems, and a migration would have cost more than the problem.

## Approach

Rather than replace anything, I built a layer that sits beside the existing systems.

- A nightly job pulls appointments, invoices and inventory from each clinic into one database, mapping three different product catalogs to a shared list
- A dashboard shows revenue, visits, new clients and average invoice by clinic and by vet, updated every morning
- Inventory alerts go to each clinic's lead technician in Microsoft Teams when stock falls below par or approaches its expiry date
- A transfer suggestion list flags when one clinic can send surplus stock to another before ordering more

Access is limited to the owners and practice manager, and no client medical records leave the source systems.

> The monthly report used to be a week of my life. Now I open it on the first with a coffee.
>
> — Priya Natarajan, Practice Manager

## Outcome

Month-end reporting went from five days to under an hour. Expired inventory write-offs dropped by about 60% in the first six months, which covered the cost of the project before the end of the year. The owners used the combined data to decide on opening hours at the newest clinic.
