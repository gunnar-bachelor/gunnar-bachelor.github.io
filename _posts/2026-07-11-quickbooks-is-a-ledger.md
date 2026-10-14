---
title: QuickBooks is a ledger, not a database
topic: Tools
summary: Notes on integrating with QuickBooks Online without letting it become the source of truth for things it was never meant to hold.
---

Half the integrations I build touch QuickBooks Online. The most common mistake I see, including in my own early work, is treating it as the place where business data lives.

## Keep operational data elsewhere

QuickBooks is excellent at money: invoices, payments, bills, the general ledger. It is not a good home for job notes, technician assignments or delivery windows, even though custom fields make it tempting.

My rule now is simple. Operational data lives in the client's app. QuickBooks receives the financial result of that data, and nothing flows back except payment status.

## A small sync, run often

Rather than syncing everything, I push only what changed, with an idempotency key so a retry never creates a duplicate invoice:

```python
def push_invoice(job):
    if job.qbo_invoice_id:
        return update_invoice(job)
    invoice = qbo.Invoice.create(
        customer_id=job.customer.qbo_id,
        lines=[line.to_qbo() for line in job.billable_lines()],
        request_id=f"job-{job.id}-v{job.version}",
    )
    job.qbo_invoice_id = invoice.Id
    job.save()
```

The `request_id` matters more than anything else in that function. QuickBooks will happily accept the same invoice twice.

## Let the bookkeeper win

When the app and the books disagree, the books are right. I build a weekly report that lists every mismatch and let the bookkeeper decide, instead of trying to auto-correct.
