---
title: "dlME"
summary: "A local Windows media downloader that turns a pasted public-media URL into a clear, inspectable download workflow."
outcome: "A compact Electron product with resilient analysis, local files, explicit formats, and release-grade verification."
status: "Public open beta"
role: "Product design, Electron development, testing, packaging, publication"
signature: "Product direction, interface, implementation, verification, and publication by Kirsten Trimaley."
platform: "Windows desktop"
stack: ["Electron", "React", "TypeScript", "yt-dlp", "FFmpeg"]
featuredOrder: 1
art: "/images/art/dlme-signal-river.webp"
artAlt: "A carved-paper landscape where scattered media signals join a cobalt river and resolve into orderly local files"
hero: "/images/projects/dlme-downloader.webp"
heroAlt: "dlME dark desktop interface showing the downloader, files, history, supported sites, settings, and live log areas"
heroWidth: 1120
heroHeight: 760
secondaryImage: "/images/projects/dlme-flow.webp"
secondaryAlt: "dlME product flow showing media analysis, format selection, download progress, and verified local output"
secondaryWidth: 1536
secondaryHeight: 1024
accent: "cobalt"
repository: "https://github.com/YazeKT/dlME"
live: "https://yazekt.github.io/dlME/"
release: "https://github.com/YazeKT/dlME/releases/tag/v0.9.1"
contribution:
  - "Reshaped the product into a compact, legible Windows workspace with clear downloader, files, history, and support surfaces."
  - "Built and tested the browser-cookie recovery path, release checks, packaging documentation, and public source boundaries."
constraints:
  - "Downloads stay local and logs must not expose Windows profile paths or credential-shaped values."
  - "The app combines MIT application code with separately licensed yt-dlp and GPL-enabled FFmpeg components."
decisions:
  - "Retry recognized Chromium cookie-access failures once without cookies for public media, then explain the remaining authentication boundary."
  - "Keep analysis, format choice, live logs, and saved files visible without turning the product into a dense developer console."
results:
  - "The 0.9.1 prerelease includes a corresponding-source package and audited engine source parts."
  - "The verified 0.9.1 engine snapshot reported 1,752 supported extractors alongside type checking, production build, 32 tests, packaged MP4 and MP3 flows, and legal-surface checks."
next: "Continue tightening signed-distribution readiness and keep upstream media-engine versions and source packages reproducible."
evidence:
  - label: "Release"
    value: "v0.9.1 prerelease"
    note: "Windows executables are unsigned"
    url: "https://github.com/YazeKT/dlME/releases/tag/v0.9.1"
  - label: "Verification"
    value: "32 tests + packaged smoke"
  - label: "Recovery"
    value: "Cookie-free retry for public media"
---
