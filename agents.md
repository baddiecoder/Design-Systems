# Agent instructions — design system

This project follows the design system extracted from https://fluid.glass/.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://fluid.glass/
Extracted by designlang v7.0.0 on 2026-04-22T13:57:48.730Z

## Semantic tokens (use these)
- color.action.primary: #0b1012
- color.surface.default: #f3f0ec
- color.text.body: #000000
- radius.control: 16px
- typography.body.fontFamily: Aeonik Pro

## Regions
- nav
- nav
- testimonials
- content
- content
- hero
- content
- hero
- content
- content
- testimonials
- hero
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
