# Booking Flow Specification

## Purpose

The booking flow allows organizations to request a speaker session in a guided and respectful way.

This is not an automatic booking flow. It is a structured request flow where the speaker reviews the context, availability and fit before confirming.

---

## Primary Goals

1. Help organizations provide enough context for the speaker
2. Make the request process feel clear and low-friction
3. Protect speaker agency and consent
4. Set expectations that the request is reviewed before confirmation

---

## User Questions

The booking flow should answer:

- What information do I need to provide?
- How long will this take?
- Is this a confirmed booking?
- What happens after I send the request?

---



## Flow Structure

The current flow has 5 steps:

1. Session purpose
2. Session format
3. Audience details
4. Date & logistics
5. Message to speaker

Final state:

- Request sent confirmation

---



## Entry Points

Users may enter the booking flow from:

- Book a Speaker CTA
- Speaker Profile page
- Home page final CTA
- Resources page CTA

If the user enters from a Speaker Profile, the selected speaker should be pre-filled and visible throughout the flow.

---



# Step 1 — Session Purpose



## Goal

Understand why the organization is reaching out.

## Fields

- Organization name
- Contact person
- Contact email
- Session purpose



## UX Notes

This step should help users frame the request thoughtfully.

The session purpose field should invite meaningful context, not generic event details.

---



# Step 2 — Session Format



## Goal

Understand the preferred type of session.

## Possible Formats

- Storytelling talk
- Fireside conversation
- Q&A panel
- Small-group workshop
- Leadership roundtable



## UX Notes

Formats should be explained clearly so users understand the difference.

---



# Step 3 — Audience Details



## Goal

Help the speaker understand who the session is for.

## Possible Fields

- Audience type
- Audience size
- Team or department
- Seniority mix
- Previous exposure to the topic
- Main questions or concerns



## UX Notes

This step supports psychological safety and fit.

It helps avoid placing speakers into contexts that are unprepared or misaligned.

---



# Step 4 — Date & Logistics



## Goal

Capture practical requirements.

## Possible Fields

- Preferred date
- Alternative date
- Time zone
- Session format: remote / in-person / hybrid
- Location, if relevant
- Expected duration



## UX Notes

The flow should make clear that availability will be reviewed and confirmed later.

---



# Step 5 — Message to Speaker



## Goal

Allow a personal note that helps humanize the request.

## Fields

- Message to speaker



## UX Notes

This step should feel optional but encouraged.

It reinforces that this is a human request, not a transaction.

---



# Confirmation State



## Purpose

Confirm that the request has been sent and explain what happens next.

## Messaging

The confirmation page should communicate:

- the request was sent successfully
- the speaker will review the context, availability and fit
- this is not yet a confirmed booking
- preparation resources may be shared before the session



## Suggested Next Steps

- Browse Resources
- Back to Speakers

---



# Interaction Notes



## Progress Indicator

The user should always understand:

- which step they are on
- how many steps remain
- whether they can go back

---



## Left Summary Panel

If a speaker is selected, show:

- speaker photo
- speaker name
- selected session context
- current step list

This helps keep the request anchored to the chosen speaker.

---



## Validation

Validation should be clear but gentle.

Avoid making the form feel bureaucratic.

---



## Tone

The tone should be:

- clear
- calm
- respectful
- human
- confidence-building

Avoid:

- transactional booking language
- pressure
- overly corporate phrasing

---



# Success Metrics

The booking flow succeeds when users:

- understand that they are sending a request
- complete the flow without confusion
- provide useful context
- understand what happens next

---

# Open Questions

- Is Step 2 already defined in the Figma prototype?
- Should HR/internal sponsor details be required?
-  Should confirmation trigger an email summary?

