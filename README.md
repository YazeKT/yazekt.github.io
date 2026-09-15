# Yaze Media

The official portfolio of Yaze Media and Kirsten Trimaley: practical AI-assisted Windows and web products, designed and shipped with clear boundaries and verifiable evidence.

Production site: <https://yazekt.github.io/>

## Stack

- Astro static site with strict TypeScript
- React only for the enhanced project evidence rail
- Motion for the rail transition
- Self-hosted Archivo and IBM Plex Mono fonts
- GitHub Actions and GitHub Pages

There is no CMS, database, analytics, tracking, chatbot, contact-form processor, Supabase project, or Lovable integration.

## Development

Requires Node.js 22.12 or newer.

```powershell
npm ci
npm run dev
```

Run the complete local gate before committing:

```powershell
npm run verify
```

The gate runs Astro type checking, validates the four project records and their assets, builds the static site, and inspects the final deployment artifact for required routes and excluded legacy content.

## Content

Project facts live in `src/content/projects/` and are checked against `CONTENT_PROOF.md`. The resume page and PDF share `src/data/resume.json`.

Public claims must be traceable to a repository, release, test result, or privacy-safe local verification record. Do not add testimonials, customers, usage numbers, or performance claims without evidence and permission.

## Privacy boundary

Never commit environment files, databases, imports, exports, browser profiles, credentials, private client assets, or machine-specific paths. Product screenshots must use synthetic or demonstrably public-safe data.

## Deployment

Pull requests and pushes run CI. The Pages workflow builds and deploys only from the protected `main` branch. Compiled `dist/` output is never committed.

## Rights

The website source and original Yaze Media content are proprietary and all rights are reserved. Third-party project screenshots, fonts, packages, and inherited project foundations retain their own licenses and attribution. See `LICENSE.md` and `THIRD_PARTY_NOTICES.md`.

