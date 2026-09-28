# Tech Stack

## Goal

Build a public, navigable prototype of the OUTstanding Speakers website.

The prototype should be accessible through a public URL and QR code for review and presentation purposes.

This is not the final production implementation.

---

## Recommended Stack

- Vite
- React
- Tailwind CSS
- Framer Motion
- Vercel

---

## Rationale

### Vite + React

Use Vite and React to create a lightweight, fast prototype that can be built and iterated quickly in Cursor.

### Tailwind CSS

Use Tailwind CSS for layout, spacing, responsive behavior and styling.

Tailwind should be configured to match the Figma visual direction as closely as possible.

### Framer Motion

Use Framer Motion for:

- subtle parallax
- soft reveals
- hover transitions
- page/section transitions

Motion should follow `brand/motion-principles.md`.

### Vercel

Use Vercel to deploy the prototype and generate a public URL.

The public URL can be converted into a QR code for sharing.

---



## CMS

Do not use a CMS for this prototype.

All content can be hardcoded in the React project for now.

A CMS may be considered later if the project becomes a real maintained website.

---



## Implementation Principle

Figma is the implementation target, not inspiration.

The build should prioritize visual fidelity to the Figma prototype.