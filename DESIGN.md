# Yaze Media Design System

Status: **Locked for implementation — 15 September 2026**

## Direction

**The Yaze Product Atlas** treats Kirsten's body of work as one connected landscape. A text-led cinematic workshop opens the experience, then gives way to warm carved-paper terrain where a cobalt river connects products, decisions, evidence, current builds, and future intentions. The river may form a restrained Y-shaped junction inside editorial artwork, but it is never repeated as a large hero logo.

The spectacle comes from original product-world artwork beside truthful proof. Every real application screenshot remains a direct, undistorted asset; generated artwork explains an idea, constraint, process, or outcome and is always visually distinguished from interface evidence.

## Palette

- Paper: `#F3EFE7`
- Paper bright: `#FBF8F1`
- Ink: `#101113`
- Ink soft: `#313238`
- Cobalt: `#2454FF`
- Signal orange: `#FF5A36`
- Metal: `#A49F94`
- Precision teal: `#21C7BD`
- Rare horizon lime: `#B8FF3D` (under 5% of a composition)

## Typography

- Archivo Variable: wordmark, headings, body, and interface copy.
- IBM Plex Mono: dates, versions, platforms, evidence values, and technical annotations only.
- Display type stays below 6rem, never tighter than `-0.04em`, and must wrap cleanly at every target width.

## Composition

- The homepage opens in a dark working studio with a single small Yaze Media mark in navigation, strong positioning copy, blueprints, tools, material samples, and no large hero character or second Y symbol.
- The studio flows into a bright product atlas with sculpted terrain, miniature environments, and a cobalt river connecting dlME, Nestform, Atlas Reach, and PinHarbor.
- Every case study uses its own river metaphor: Signal River, Material Delta, Record Terraces, or Local Current.
- Dark evidence bands alternate with bright editorial terrain so real product interfaces receive maximum contrast and authority.
- Content uses an asymmetric 12-column desktop grid and a direct single-column mobile sequence.
- Handwritten notes are short editorial annotations, never essential body content.

## Signature interaction

The shared river is the authored interaction. One stable Three.js scene changes material and form as the reader moves from the workshop into the product atlas. It reveals four product tributaries and reconnects them into the roadmap. Semantic HTML carries every title, claim, link, screenshot, and case-study section independently of the canvas.

## Motion

- Opening: a restrained light pass reveals the text-led workshop once; there is no blocking intro.
- Atlas: the river and product artifacts respond gently to pointer, focus, and native scroll position.
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

- No generic purple AI gradients, decorative glass collections, robot hero, fake terminal code, fake metrics, testimonials, pricing, or template-like service-card grids.
- The YazeKT GitHub character is a small authorship signature only. It is embedded from the original file, labeled as a brand avatar, and never regenerated into a product image.
- Real product screenshots are direct image assets and are never regenerated, cropped into, stretched, perspective-warped, or altered to invent features or outcomes.
- Screenshot containers derive their aspect ratio from source dimensions and use contain-fit. Frames adapt to the evidence; evidence never adapts to a decorative frame.
- The legacy Deepnest captures under the Nestform root reference folder are prohibited portfolio assets. Nestform proof comes from the modern Workshop captures under `Nestform/website/public/assets` or the verified publish checkout.
- Work Kirsten did not build is excluded from the portfolio and all repository documentation.

## Locked review images

- `design/review/homepage-yaze-product-atlas.png`
- `design/review/case-study-dlme-signal-river.png`
- `design/review/case-study-nestform-material-delta.png`
- `design/review/case-study-atlas-record-terraces.png`
- `design/review/case-study-pinharbor-local-current.png`
- `design/review/roadmap-the-work-continues.png`

These are composition contracts, not deployable interface evidence. Production pages use original screenshots and separately generated illustration assets.
