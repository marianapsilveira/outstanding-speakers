# Build Plan

## Purpose

This document defines how the OUTstanding Speakers website should be implemented.

The goal is not to reinterpret the design.

The goal is to translate the Figma prototype screenshots into production as faithfully as possible.

The Figma prototype is the primary source of truth.

---

# Core Principle

Implementation should treat Figma as the target, not inspiration.

This means:

- replicate layout as closely as possible
- preserve spacing and hierarchy
- preserve visual rhythm
- preserve interaction intent
- add motion behavior

Do not redesign during implementation unless necessary.

---



## Allowed Deviations

Deviations from Figma are only acceptable when required for:

- responsive behavior

- accessibility

- browser constraints

- performance optimization

- implementation feasibility

Motion may be added where the static Figma frames do not specify behavior, provided it follows `brand/motion-principles.md` and preserves the intended visual hierarchy.

---



# Implementation Priorities

Priority order:

1. Match Figma structure
2. Match visual hierarchy
3. Match interactions and motion
4. Optimize responsiveness
5. Optimize performance

---



# Build Strategy

Implementation should happen page by page.

Recommended order:

1. Global foundation
2. Home
3. Speakers
4. Speaker Profile
5. Resources
6. Booking Flow
7. Confirmation

---



# Phase 1 — Global Foundation

Build shared structure first.

Includes:

- layout system
- spacing system
- typography system
- color tokens
- reusable components
- animation foundation

---



## Global Components

Components to build first:

- Header
- Footer
- CTA Button
- Section Container
- Typography styles
- Card foundations
- Form fields

These components should support all pages.

---



# Phase 2 — Page Implementation

Each page should follow the same implementation flow.

Step 1:

Review Figma frames carefully.

Step 2:

Identify layout structure.

Step 3:

Identify reusable components.

Step 4:

Build page.

Step 5:

Compare against Figma.

Step 6:

Adjust until close visual match.

---



# Figma Validation Checklist

Before considering a page complete, validate:

- layout matches
- spacing matches
- typography matches
- colors match
- hierarchy matches
- hover states match
- motion feels aligned

---



# Implementation Rules



## Layout

Respect Figma layouts.

Avoid changing:

- section order
- alignment logic
- spacing rhythm

---



## Typography

Typography should closely match Figma.

Important:

- font sizes
- font weights
- line heights
- visual hierarchy

Typography is a major part of the brand.

---



## Color

Use design tokens based on Figma.

Avoid approximating colors manually when exact values exist.

---



## Motion

Motion should match Figma intent.

Important:

- parallax behavior
- hover interactions
- section transitions
- background motion

Motion should feel subtle and premium.

---



# Responsiveness

Desktop experience is the primary target.

Then adapt for:

- tablet
- mobile

Responsive changes should preserve design intent.

Do not flatten the experience unnecessarily.

---



# Performance

Optimize:

- video backgrounds
- images
- animations
- gradients
- motion effects

The site should feel smooth and premium.

---



# Agent Instructions

When generating implementation code:

- Always prioritize Figma fidelity
- Do not redesign components
- Ask for clarification if Figma behavior is ambiguous
- Use Figma as the implementation target

Default mindset:

Build what exists in Figma.

Do not invent new UX patterns.