---
title: "Nestform"
summary: "A modern Windows nesting workspace for laser cutting and CNC, built around the preserved Deepnest engine."
outcome: "A clearer Electron workflow with explicit physical units, SVG and DXF handling, and exact round-trip validation."
status: "Public project + local approval build"
role: "Product design, Electron modernization, unit-boundary engineering, verification"
platform: "Windows desktop"
stack: ["Electron", "JavaScript", "SVG", "DXF", "Native addon"]
featuredOrder: 2
hero: "/images/projects/nestform-running.png"
heroAlt: "Nestform nesting workspace showing nine geometric parts being placed on a sheet with live nesting controls"
secondaryImage: "/images/projects/nestform-import.png"
secondaryAlt: "Nestform imported-parts workspace showing source shapes and unit-aware project controls before nesting"
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

