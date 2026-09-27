---
title: Tallgrass Property Services
year: 2024
client: Tallgrass Property Services LLC
category: Internal tool, Estimating
summary: An estimating tool that turns site measurements and crew rates into a branded proposal in under twenty minutes.
duration: 7 weeks
stack: TypeScript, React, SQLite, Google Workspace
cover: /assets/img/projects/tallgrass.svg
---

Tallgrass bids on commercial grounds maintenance contracts, and each estimate was built by hand in a spreadsheet that only one person fully understood.

## Brief

A typical bid took an hour and a half: measuring areas from satellite images, looking up crew rates, calculating visit frequencies across the season and formatting a proposal in Word. The formulas had been patched for six years. Two sales staff avoided using it altogether and estimated from experience, and margins varied widely from one contract to the next.

## Approach

I rebuilt the logic of the spreadsheet as a small web tool, working through it line by line with the owner to confirm every assumption before changing anything.

- Trace mowing, bed and hardscape areas directly on a map; square footage fills in automatically
- Service frequencies, crew sizes and equipment costs come from a single rate table the owner controls
- Every estimate shows target and projected margin before it goes out, with a warning if it falls below the floor
- One click produces a branded proposal PDF and saves it to the right client folder in Google Drive

## Outcome

Estimates now take around twenty minutes, and all three salespeople use the same tool. The company submitted 40% more bids the following spring. Because every bid is priced from the same rates, the spread in margins between contracts narrowed sharply, and the owner could finally see which types of property were worth pursuing.

> I used to be the only one who could price a job. Now I review them instead of building them.
>
> — Luis Ortega, Owner
