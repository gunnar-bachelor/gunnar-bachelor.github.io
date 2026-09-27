---
title: Hollis & Reed Mechanical
year: 2026
client: Hollis & Reed Mechanical Inc.
category: Operations, Integration
summary: A dispatch board and job-costing system for a 38-technician HVAC contractor, synced to QuickBooks.
duration: 5 months
stack: TypeScript, PostgreSQL, QuickBooks Online API, Twilio
cover: /assets/img/projects/hollis-reed.svg
---

Hollis & Reed ran 1,400 service calls a month off a whiteboard, a shared spreadsheet and a lot of phone calls.

## Brief

Dispatchers assigned jobs on a whiteboard, then re-entered them into a spreadsheet. Technicians wrote up work on paper tickets that came back to the office days later, where two people keyed them into QuickBooks. Invoices went out an average of nine days after the job was finished, and nobody could say which jobs were actually profitable until the quarter closed.

Off-the-shelf field service platforms had been trialed twice. Both were dropped because they forced the company to change how it priced maintenance agreements.

## Approach

I spent the first week riding along with technicians and sitting beside the dispatch desk. The plan that came out of it was deliberately narrow: replace the whiteboard, replace the paper ticket, and remove the double entry. Everything else stayed as it was.

- A drag-and-drop dispatch board that shows every technician's day, drive time and certifications
- A mobile job ticket for technicians with photos, parts used, customer signature and a checklist per equipment type
- Automatic text messages to customers when a technician is on the way
- Completed tickets become draft invoices in QuickBooks Online, with labor and parts coded to the right job
- A weekly job-costing report comparing quoted and actual hours by technician and job type

The maintenance agreement pricing rules were built in exactly as the company already used them.

> We tried two big platforms and both wanted us to run the business their way. This one just does what we already did, without the paper.
>
> — Dana Reed, Operations Manager

## Outcome

Invoices now go out the same day the job is closed. The office recovered about 22 hours a week of data entry, which let the company absorb a 15% increase in call volume without hiring another coordinator. The job-costing report showed that two categories of residential repair had been priced below cost for years; both were repriced in the first quarter.
