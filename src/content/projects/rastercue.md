---
title: "Rastercue"
seoTitle: "Rastercue: local Windows image upscaling case study"
summary: "A local Windows image-upscaling studio for designers, with guided model selection, image inspection and explicit Vulkan or native CPU processing."
outcome: "A designer-focused workspace that makes models, hardware choices, output and processing boundaries easier to understand."
status: "Stable 1.0.0 release"
role: "Product direction, interface design, workflow refinement and release documentation"
signature: "Rastercue product direction and design by Kirsten Trimaley, preserving the Upscayl compatibility foundation."
platform: "Windows desktop"
stack: ["Electron", "React", "TypeScript", "NCNN"]
featuredOrder: 6
art: "/images/art/homepage-product-atlas.webp"
artAlt: "Conceptual Yaze Media product atlas connecting software workflows through a cobalt river"
hero: "/images/projects/rastercue.svg"
heroAlt: "Rastercue purple R-and-pixel brand mark for the local Windows image-upscaling studio"
heroCaption: "Rastercue brand mark · view the product website for real interface screenshots"
heroWidth: 128
heroHeight: 128
secondaryImage: "/images/projects/rastercue.svg"
secondaryAlt: "Rastercue R-and-pixel brand mark on a purple square"
secondaryWidth: 128
secondaryHeight: 128
accent: "cobalt"
repository: "https://github.com/YazeKT/Rastercue"
live: "https://yazekt.github.io/Rastercue/"
release: "https://github.com/YazeKT/Rastercue/releases/tag/v1.0.0"
contribution:
  - "Shaped a compact Input, Model and Output workflow with model guidance, image inspection and persistent local history."
  - "Added explicit hardware choices, guided onboarding, guarded format routes and reviewable support information."
constraints:
  - "Windows 10/11 x64 is the supported binary target; installer and ZIP are unsigned."
  - "Vulkan compatibility depends on the bundled engine probe; CPU processing is slower and TTA remains Vulkan-only in 1.0."
decisions:
  - "Preserve the established Upscayl Vulkan compatibility foundation and expose the native CPU backend as an explicit choice."
  - "Explain model provenance and limitations instead of promising every model or device will work."
results:
  - "The stable 1.0.0 release provides Windows installer and ZIP packages, checksums and corresponding native source."
  - "Public release notes document an owner-tested Radeon RX 580 workflow and the CPU processing verification boundary."
next: "Visit the product website to check hardware requirements and download the current release; contact me about design and image-production workflow projects."
evidence:
  - label: "Release"
    value: "Rastercue 1.0.0 stable"
    url: "https://github.com/YazeKT/Rastercue/releases/tag/v1.0.0"
  - label: "Platform"
    value: "Windows 10/11 x64"
    note: "Unsigned installer and ZIP"
  - label: "Processing"
    value: "Explicit Vulkan or CPU"
attribution: "Independently branded derivative of Upscayl. The upstream native upscaling foundation and its licensing obligations remain explicit; Rastercue does not claim authorship of the inherited engine."
---
