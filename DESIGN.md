# Yaze Media Design System

## Direction

**Proof of Work** treats the portfolio as a release contact sheet: the work is large, the evidence is legible, and every annotation carries a real fact. The system borrows the tonal discipline of a print proof emerging from a dark plate, but its structure comes from software releases, production marks, and interface captures.

## Palette

- Paper: `#F3EFE7`
- Paper bright: `#FBF8F1`
- Ink: `#101113`
- Ink soft: `#313238`
- Cobalt: `#2454FF`
- Signal orange: `#FF5A36`
- Metal: `#A49F94`

## Typography

- Archivo Variable: wordmark, headings, body, and interface copy.
- IBM Plex Mono: dates, versions, platforms, evidence values, and technical annotations only.
- Display type stays below 6rem, never tighter than `-0.04em`, and must wrap cleanly at every target width.

## Composition

- A full-width registration rail frames the page and carries the brand, current route, availability, and section position.
- The homepage first viewport pairs an oversized wordmark and thesis with a deep-black live proof containing the four projects.
- Project images use large contact-sheet frames with factual captions; never place the whole site into repeated equal cards.
- Content uses an asymmetric 12-column desktop grid and a direct single-column mobile sequence.
- Rules, coordinates, and crop marks are structural: they align content, separate proof states, or mark real sequence.

## Signature interaction

The homepage project rail is the authored moment. Selecting or focusing a project changes the large proof image, evidence line, and action without hiding the complete static project list below it. The default is already visible; motion only clarifies the transition.

## Motion

- Opening: wordmark clips upward once while the proof field opens from black.
- Project rail: 240-360ms tonal crossfade and vertical settle with an exponential ease-out.
- Reduced motion: no clip, scroll-linked movement, or image transition; all content remains visible.
- No identical reveal animation on every section.

## Components and states

- Buttons are compact rectangles with explicit hover, focus, active, and disabled states.
- Project selectors expose selected state through color, text, and `aria-pressed`.
- Links use weight plus an offset underline; color never carries meaning alone.
- Focus is a visible cobalt outline on paper and a paper outline on ink.
- Empty or missing evidence is stated as unavailable and never replaced with illustrative data.

## Boundaries

- No gradients, decorative glass, AI robots as product imagery, fake terminal code, fake metrics, testimonials, pricing, or service-card grids.
- The YazeKT avatar is labeled as a brand avatar, not a photograph.
- Real product screenshots are never altered to invent features or outcomes.
- Work Kirsten did not build is excluded from the portfolio and all repository documentation.
