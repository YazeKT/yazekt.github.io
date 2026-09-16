---
title: "Nestform"
summary: "A modern Windows nesting workspace for laser cutting and CNC, built around the preserved Deepnest engine."
outcome: "A clearer Electron workflow with explicit physical units, SVG and DXF handling, and exact round-trip validation."
status: "Public project + local approval build"
role: "Product design, Electron modernization, unit-boundary engineering, verification"
signature: "Product direction, interface modernization, unit-boundary work, and verification by Kirsten Trimaley; built on the attributed Deepnest foundation."
platform: "Windows desktop"
stack: ["Electron", "JavaScript", "SVG", "DXF", "Native addon"]
featuredOrder: 2
art: "/images/art/nestform-material-delta.webp"
artAlt: "A layered material delta where loose geometric parts follow a cobalt river into a compact nesting arrangement"
hero: "/images/projects/nestform-workspace.png"
heroAlt: "The real Nestform dark Workshop interface showing imported geometric parts, a compact nesting sheet, and visible job controls"
heroWidth: 1366
heroHeight: 768
secondaryImage: "/images/projects/nestform-workspace.png"
secondaryAlt: "The complete Nestform application window shown uncropped at its original widescreen aspect ratio"
secondaryWidth: 1366
secondaryHeight: 768
accent: "orange"
repository: "https://github.com/YazeKT/Nestform"
live: "https://yazekt.github.io/Nestform/"
release: "https://github.com/YazeKT/Nestform/releases/tag/v0.4.0"
contribution:
  - "Modernized the desktop workflow while deliberately retaining the proven upstream nesting engine."
  - "Added physical-unit handling at import, export, and presentation boundaries instead of altering the engine's internal geometry."
constraints:
  - "The fixed 72-units-per-inch engine scale and upstream Deepnest behavior must remain intact."
  - "Ambiguous unitless drawings require review; presentation strokes must not change physical extents."
decisions:
  - "Convert SVG and DXF measurements at the product boundary and preserve source measurement metadata."
  - "Keep the physical 3 mm gap consistent across project units and use six rotation candidates during nesting."
results:
  - "The unit smoke test verified DXF INSUNITS=4 and an exact 100 × 50 mm import, export, and reopen round trip."
  - "The local 0.5.0 approval build passed type checking, 24 tests, production build, packaged workflow smoke, and unit smoke."
next: "Publish the locally verified 0.5.0 work only after the release candidate, documentation, and unsigned-binary disclosure receive final approval."
evidence:
  - label: "Engine boundary"
    value: "72 units per inch preserved"
  - label: "DXF proof"
    value: "Exact 100 × 50 mm round trip"
  - label: "Validation"
    value: "24 tests + packaged smoke"
attribution: "Nestform is a fork of Jack000/Deepnest. The upstream GPL-3.0 engine and its history remain explicitly credited."
---
