# Design Language: Fluid Glass - Structural & Architectural Glazing Specialists

> Extracted from `https://fluid.glass/` on April 22, 2026
> 518 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#0b1012` | rgb(11, 16, 18) | hsl(197, 24%, 6%) | 7 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#212325` | hsl(210, 6%, 14%) | 453 |
| `#ffffff` | hsl(0, 0%, 100%) | 342 |
| `#000000` | hsl(0, 0%, 0%) | 152 |
| `#f3f0ec` | hsl(34, 23%, 94%) | 2 |

### Background Colors

Used on large-area elements: `#f3f0ec`, `#212325`, `#0b1012`

### Text Colors

Text color palette: `#000000`, `#212325`, `#ffffff`

### Gradients

```css
background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.2));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#212325` | text, border, background | 453 |
| `#ffffff` | text, border | 342 |
| `#000000` | text, border | 152 |
| `#0b1012` | background | 7 |
| `#f3f0ec` | background | 2 |

## Typography

### Font Families

- **Aeonik Pro** — used for all (336 elements)
- **Aeonik Mono** — used for all (106 elements)
- **Times New Roman** — used for body (76 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 51.2px | 3.2rem | 400 | 51.2px | -1.536px | p, div, blockquote |
| 32px | 2rem | 400 | 32px | -0.64px | h3, p, div |
| 25.6px | 1.6rem | 400 | 28.8px | -0.512px | a, div |
| 19.2px | 1.2rem | 400 | 23.04px | normal | h3, span |
| 16px | 1rem | 400 | normal | normal | h1, source |
| 14.4px | 0.9rem | 400 | 18.72px | normal | p, strong |
| 12.8px | 0.8rem | 400 | 16.64px | normal | div, a, p, br |
| 11.2px | 0.7rem | 600 | 14.56px | 1.12px | h2, div, ul, li |
| 9.6px | 0.6rem | 500 | 8px | 0.768px | button, svg, path, rect |
| 8px | 0.5rem | 400 | normal | normal | html, head, meta, title |

### Heading Scale

```css
h3 { font-size: 32px; font-weight: 400; line-height: 32px; }
h3 { font-size: 19.2px; font-weight: 400; line-height: 23.04px; }
h1 { font-size: 16px; font-weight: 400; line-height: normal; }
h2 { font-size: 11.2px; font-weight: 600; line-height: 14.56px; }
```

### Body Text

```css
body { font-size: 9.6px; font-weight: 500; line-height: 8px; }
```

### Font Weights in Use

`400` (411x), `500` (97x), `600` (9x), `700` (1x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-24 | 24px | 1.5rem |
| spacing-48 | 48px | 3rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-72 | 72px | 4.5rem |
| spacing-96 | 96px | 6rem |
| spacing-120 | 120px | 7.5rem |
| spacing-128 | 128px | 8rem |
| spacing-133 | 133px | 8.3125rem |
| spacing-144 | 144px | 9rem |
| spacing-262 | 262px | 16.375rem |
| spacing-360 | 360px | 22.5rem |
| spacing-367 | 367px | 22.9375rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| lg | 16px | 10 |

## CSS Custom Properties

### Colors

```css
--color-black: #0b1012;
--color-white: #fff;
--color-cream: #f3f0ec;
--color-taupe: #d4cec6;
--color-grey: #212325;
```

### Spacing

```css
--size: 1600;
```

### Typography

```css
--font-s: calc((100vw/var(--size))*10);
--font-f-aeonik-mono: "Aeonik Mono";
--font-f-aeonik-pro: "Aeonik Pro";
```

### Other

```css
--ease-in-out-quart: cubic-bezier(.77,0,.175,1);
--ease-in-out-cubic: cubic-bezier(.645,.045,.355,1);
--ease-in-out-quad: cubic-bezier(.455,.03,.515,.955);
--ease-out-quart: cubic-bezier(.165,.84,.44,1);
--ease-out-cubic: cubic-bezier(.215,.61,.355,1);
--ease-out-quad: cubic-bezier(.25,.46,.45,.94);
--ease-none: cubic-bezier(.25,.25,.75,.75);
--vh: 8px;
```

### Dependencies

```css
--font-s: --size;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 600px | max-width |
| sm | 601px | min-width |
| sm | 640px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`

**Durations:** `0.2s`, `0.5s`, `0.3s`

### Common Transitions

```css
transition: all;
transition: opacity 0.2s linear;
transition: color 0.5s;
transition: opacity 0.3s ease-out;
```

### Keyframe Animations

**cube-rotate-fc7c0bb1**
```css
@keyframes cube-rotate-fc7c0bb1 {
  0% { transform: rotateX(-30deg) rotateY(0deg) rotate(0deg) scaleY(0.78); }
  100% { transform: rotateX(-30deg) rotateY(-315deg) rotate(0deg) scaleY(0.78); }
}
```

**cube-rotate-fc7c0bb1**
```css
@keyframes cube-rotate-fc7c0bb1 {
  0% { transform: rotateX(-30deg) rotateY(0deg) rotate(0deg) scaleY(0.78); }
  100% { transform: rotateX(-30deg) rotateY(-315deg) rotate(0deg) scaleY(0.78); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (15 instances)

```css
.button {
  background-color: rgb(11, 16, 18);
  color: rgb(255, 255, 255);
  font-size: 9.6px;
  font-weight: 500;
  padding-top: 12px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Links (34 instances)

```css
.link {
  color: rgb(255, 255, 255);
  font-size: 8px;
  font-weight: 400;
}
```

### Navigation (6 instances)

```css
.navigatio {
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.foote {
  background-color: rgb(11, 16, 18);
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 8px;
}
```

### Dropdowns (1 instances)

```css
.dropdown {
  border-radius: 0px;
  border-color: rgb(255, 255, 255);
  padding-top: 48px;
}
```

### Badges (10 instances)

```css
.badge {
  color: rgb(255, 255, 255);
  font-size: 9.6px;
  font-weight: 500;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 35, 37);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(33, 35, 37);
  font-size: 8px;
  font-weight: 400;
```

### Button — 4 instances, 3 variants

**Variant 1** (2 instances)

```css
  background: rgb(11, 16, 18);
  color: rgb(255, 255, 255);
  padding: 12px 19.2px 12px 19.2px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 9.6px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 35, 37);
  padding: 12px 0px 12px 0px;
  border-radius: 0px;
  border: 0px none rgb(33, 35, 37);
  font-size: 9.6px;
  font-weight: 500;
```

**Variant 3** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 12px 0px 12px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 9.6px;
  font-weight: 500;
```

### Button — 5 instances, 2 variants

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 8px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 35, 37);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px solid color(srgb 0.129412 0.137255 0.145098 / 0.2);
  font-size: 8px;
  font-weight: 400;
```

### Button — 6 instances, 3 variants

**Variant 1** (4 instances)

```css
  background: rgb(11, 16, 18);
  color: rgb(255, 255, 255);
  padding: 12px 19.2px 12px 19.2px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 9.6px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: color(srgb 1 1 1 / 0.2);
  color: rgb(255, 255, 255);
  padding: 12px 19.2px 12px 19.2px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 9.6px;
  font-weight: 500;
```

**Variant 3** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 35, 37);
  padding: 12px 0px 12px 0px;
  border-radius: 0px;
  border: 0px none rgb(33, 35, 37);
  font-size: 9.6px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 35, 37);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(33, 35, 37);
  font-size: 8px;
  font-weight: 400;
```

## Layout System

**10 grid containers** and **80 flex containers** detected.

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 24-column | 10x |

### Grid Templates

```css
grid-template-columns: 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px;
gap: normal 16px;
grid-template-columns: 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px;
gap: normal 16px;
grid-template-columns: 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px;
gap: 16px;
grid-template-columns: 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px;
gap: normal 16px;
grid-template-columns: 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px 35.3281px;
gap: normal 16px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 69x |
| column/nowrap | 11x |

**Gap values:** `16px`, `4.8px`, `8px`, `normal 16px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 91/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 80/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 71% of CSS is unused — consider purging
- 4448 duplicate CSS declarations

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |

```css
background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.2));
```

## Z-Index Map

**7 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| sticky | 99,99 | div.c.o.o.k.i.e.s, div.c.u.r.s.o.r |
| base | -1,9 | div.b.a.c.k.g.r.o.u.n.d, div.b.a.c.k.g.r.o.u.n.d, div.s.c.r.o.l.l. .l.e.n.i.s |

## SVG Icons

**11 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 5 |
| sm | 3 |
| md | 1 |
| lg | 1 |
| xl | 1 |

**Icon colors:** `currentcolor`, `white`, `#E33629`, `#F8BD00`, `#587DBD`, `#319F43`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Aeonik Mono | self-hosted | 500, 600 | normal |
| Aeonik Pro | self-hosted | 400, 700 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 9 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 4 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 3 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 1 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 3:4 (14x), 3:2 (2x), 1:1 (1x)

## Motion Language

**Feel:** smooth · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |

### Easing Families

- **linear** (1 uses) — `linear`
- **ease-in-out** (4 uses) — `ease`

## Component Anatomy

### button — 17 instances

**Slots:** label, icon

## Brand Voice

**Tone:** friendly · **Pronoun:** third-person · **Headings:** Title Case (tight)

### Top CTA Verbs

- **get** (4)
- **accept** (2)
- **deny** (1)
- **who** (1)
- **product** (1)
- **showroom** (1)
- **view** (1)
- **our** (1)

### Button Copy Patterns

- "accept
accept
deny
deny" (1×)
- "accept
accept" (1×)
- "deny
deny" (1×)
- "get a quoteget a quote" (1×)
- "get a quote
get a quote" (1×)
- "who we are
who we are" (1×)
- "product overview
product overview" (1×)
- "showroom
showroom" (1×)
- "view projects
view projects" (1×)
- "our approach
our approach
get in touch
get in touch" (1×)

### Sample Headings

> Fluid Glass
> GLAZING SPECIALISTS
> ABOUT FLUID GLASS
> PRODUCT COLLECTION
> Doors
> Fluid Glass
> GLAZING SPECIALISTS
> ABOUT FLUID GLASS
> PRODUCT COLLECTION
> Doors

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** Leading UK specialists in architectural and structural glazing, delivering cutting-edge glass solutions for iconic projects.

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): testimonial → content → content → nav → nav → hero → content → hero → content → content → testimonial → hero → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | testimonial | Fluid Glass | 0.8 |
| 3 | content | Fluid Glass | 0.3 |
| 4 | content | GLAZING SPECIALISTS | 0.3 |
| 5 | hero | ABOUT FLUID GLASS | 0.4 |
| 6 | content | PRODUCT COLLECTION | 0.3 |
| 7 | hero | SHOWROOM | 0.4 |
| 8 | content | FEATURED PROJECTS | 0.3 |
| 9 | content | — | 0.3 |
| 10 | testimonial | CLIENT STORIES | 0.8 |
| 11 | hero | WHERE VISION MEETS EXECUTION | 0.4 |
| 12 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.105 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 16px |
| backdrop-filter in use | no |
| Gradients | 1 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 17, svg 0, icon 0, screenshot-like 0, photo-like 0
**Dominant aspect:** portrait
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Aeonik Pro` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
