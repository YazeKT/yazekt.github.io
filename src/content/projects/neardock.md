---
title: "Neardock"
seoTitle: "Neardock: Windows and Android file sharing case study"
summary: "Share files, messages and manually selected clipboard text between nearby Windows and Android devices on the same local network."
outcome: "A focused ink-and-orange sharing workspace built on the established LocalSend foundation."
status: "Published 1.0.0 release"
role: "Product direction, interface design, release packaging and documentation"
signature: "Neardock product direction and interface by Kirsten Trimaley, preserving upstream protocol and contributor credit."
platform: "Windows desktop + Android"
stack: ["Flutter", "Dart", "Rust"]
featuredOrder: 5
art: "/images/art/homepage-product-atlas.webp"
artAlt: "Conceptual Yaze Media product atlas with connected islands representing practical software workflows"
hero: "/images/projects/neardock-send.png"
heroAlt: "Neardock Send workspace showing a nearby device, file selection and navigation for Receive, Chat and Clipboard"
heroWidth: 1366
heroHeight: 768
secondaryImage: "/images/projects/neardock-send.png"
secondaryAlt: "Neardock Windows Send workspace with nearby device discovery and explicit file selection"
secondaryWidth: 1366
secondaryHeight: 768
accent: "orange"
repository: "https://github.com/YazeKT/Neardock"
live: "https://yazekt.github.io/Neardock/"
release: "https://github.com/YazeKT/Neardock/releases/tag/neardock-v1.0.0"
contribution:
  - "Organized Send, Receive, Chat, Clipboard and Settings into a consistent Windows and Android product interface."
  - "Added local conversations, explicit clipboard handoffs, device trust controls and documented release packages."
constraints:
  - "Devices need a shared local network; cross-network internet sharing is not enabled."
  - "Windows x64 packages are unsigned; Windows ARM64 is unavailable in this release."
decisions:
  - "Keep the established LocalSend transfer foundation and make consent, destinations and cancellation visible."
  - "Use manual clipboard actions rather than implying continuous clipboard synchronization."
results:
  - "The 1.0.0 release provides a Windows x64 installer and portable ZIP, plus Android APKs and checksums."
  - "Public release notes distinguish verified builds from remaining interoperability and device-testing work."
next: "Use the product website for installation steps, supported downloads and local-network troubleshooting; contact me to discuss a related workflow project."
evidence:
  - label: "Release"
    value: "Neardock 1.0.0"
    url: "https://github.com/YazeKT/Neardock/releases/tag/neardock-v1.0.0"
  - label: "Platforms"
    value: "Windows x64 + Android"
    note: "Windows binaries are unsigned"
  - label: "Sharing boundary"
    value: "Same local network"
attribution: "Based on LocalSend by Tien Do Nam and contributors. Apache 2.0 code; Neardock brand assets have separate terms. Upstream notices and contributor credit are retained."
---
