---
title: "PinHarbor"
summary: "A Windows-local Google Maps business collector with completion-driven runs, honest live progress, and focused CSV exports."
outcome: "A Docker-free Go and Playwright workflow with clearer presets, resilient supervision, local job history, and truthful telemetry."
status: "Public source"
role: "Product design, Go workflow integration, progress telemetry, Windows launcher, documentation"
signature: "Product direction, interface, workflow integration, telemetry, and verification by Kirsten Trimaley; built on the attributed upstream foundation."
platform: "Windows local web app"
stack: ["Go", "Playwright", "HTMX", "SQLite", "CSV"]
featuredOrder: 4
art: "/images/art/pinharbor-local-current.webp"
artAlt: "A cobalt local current connects abstract places to an organized harbor across a carved-paper street landscape"
hero: "/images/projects/pinharbor-dark.png"
heroAlt: "PinHarbor dark interface showing the new-collection form and realtime collection monitor with local status indicators"
heroWidth: 1440
heroHeight: 900
secondaryImage: "/images/projects/pinharbor-light.png"
secondaryAlt: "PinHarbor light interface showing the collection form, presets, optional settings, and realtime activity workspace"
secondaryWidth: 1440
secondaryHeight: 900
accent: "orange"
repository: "https://github.com/YazeKT/PinHarbor"
contribution:
  - "Built a compact workflow around Auto complete, Quick, Balanced, Deep, and Custom collection modes."
  - "Connected the interface to real job CSV rows and thread-safe progress, then added a supervised Windows launcher and recovery checks."
constraints:
  - "Progress cannot promise a fixed total because new places may be discovered while the run is active."
  - "Existing jobs, SQLite state, CSV exports, and upstream MIT attribution must remain intact."
decisions:
  - "Keep active jobs below 100 percent and label ETA honestly as calculated, finalising, stopped, or bounded by configured limits."
  - "Run directly with Go and Playwright on Windows instead of requiring Docker or WSL."
results:
  - "Go tests, focused runner and web tests, browser checks, export-field coverage, and supervisor recovery passed."
  - "After a forced process stop, the launcher replaced the listener and the health endpoint returned ok."
next: "Keep the collector focused on responsible, operator-directed research and maintain upstream compatibility as dependencies change."
evidence:
  - label: "Runtime"
    value: "Go + Playwright · no Docker"
  - label: "Progress"
    value: "Live rows, rate, and estimated ETA"
  - label: "Recovery"
    value: "Supervisor restart verified"
attribution: "PinHarbor retains the MIT license and attribution for the gosom/google-maps-scraper project it builds on."
---
