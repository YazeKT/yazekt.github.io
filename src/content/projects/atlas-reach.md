---
title: "Atlas Reach"
summary: "A compact, local-first lead CRM for importing approved spreadsheets, managing sales activity, and exporting clean workbooks."
outcome: "A dense Windows workspace with duplicate-aware imports, lead editing, local analytics, pagination, exports, and backups."
status: "v1.3.0 public release"
role: "Product design, JavaScript development, privacy boundaries, release engineering"
signature: "Product direction, interface, implementation, privacy boundaries, and release verification by Kirsten Trimaley."
platform: "Windows local web app"
stack: ["Node.js", "JavaScript", "SQLite", "SheetJS", "Edge"]
featuredOrder: 3
art: "/images/art/atlas-record-terraces.webp"
artAlt: "Orderly record terraces connected by a cobalt import and export river in a carved-paper landscape"
hero: "/images/projects/atlas-drawer.png"
heroAlt: "Atlas Reach dark interface showing the lead table and a detailed right-side lead editor using synthetic test data"
heroWidth: 1024
heroHeight: 1024
secondaryImage: "/images/projects/atlas-leads.png"
secondaryAlt: "Atlas Reach light interface showing the dense paginated lead workspace populated with synthetic sample leads"
secondaryWidth: 1024
secondaryHeight: 768
accent: "cobalt"
repository: "https://github.com/YazeKT/Atlas-Reach"
release: "https://github.com/YazeKT/Atlas-Reach/releases/tag/v1.3.0"
contribution:
  - "Reshaped the CRM into a compact, table-first workspace with a focused right-side editor and bounded pagination."
  - "Removed scraper integration and documented a strict file-import and Excel-export product boundary."
constraints:
  - "Operational data, imports, exports, browser profiles, and SQLite files stay off GitHub and on the operator's machine."
  - "The convenience sign-in is for a private workstation; the service listens only on 127.0.0.1 and is not multi-user security."
decisions:
  - "Use duplicate-aware spreadsheet merging and keep source history visible instead of hiding import provenance."
  - "Treat import and export as the only data boundary; no scraper controls, background scraping, telemetry, or cloud sync."
results:
  - "The v1.3.0 release includes syntax checks, release-boundary checks, API and import regression coverage, and deterministic visual QA."
  - "The visual suite verifies light and dark lead tables plus right-side editor states with isolated synthetic records."
next: "Keep strengthening migration and recovery guidance while preserving the single-operator, local-first boundary."
evidence:
  - label: "Release"
    value: "v1.3.0"
    url: "https://github.com/YazeKT/Atlas-Reach/releases/tag/v1.3.0"
  - label: "Data boundary"
    value: "Import in · Excel out"
  - label: "Visual proof"
    value: "4 isolated Edge states"
---
