# ATS CV Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a dedicated ATS-friendly CV page (`cv.html`) with native, vector-text PDF download/print capability, using Reyhan Devara's verified profile data.

**Architecture:** Single static HTML page (`cv.html`) paired with focused print and screen styling in `assets/css/cv.css`. Uses semantic HTML5 single-column structure for ATS parsers, and browser-native `@media print` with `window.print()` for crisp, text-selectable A4 PDF generation without heavy external dependencies.

**Tech Stack:** HTML5, CSS3 (`@media print`, flexbox, CSS custom properties matching existing design system), Vanilla JavaScript (print trigger and analytics/events).

**Spec:** User-provided CV markdown and ATS requirements from chat on 2026-11-11.

## Global Constraints
- ATS standard compliance: linear single-column structure, standard section headers, selectable plain text, zero rasterized text/canvas.
- Consistency: Match portfolio typography (Instrument Sans / system sans-serif) and color palette for screen mode; pure black-on-white high contrast for print.
- Lightweight: No heavy client-side PDF rasterizer libraries; use native browser vector print pipeline.
- Accessibility: Valid ARIA attributes, skip links, semantic landmarks, high contrast ratio.

## Review Focus
- ATS parser readability: text extractability and clean hierarchical headings.
- Print / PDF layout fidelity: A4 margins, page-break behavior (no orphaned headings or split job entries), absence of screen-only controls in PDF output.
- Mobile responsiveness: fluid reading experience on small devices while maintaining A4 print proportions.
- Navigation integrity: working back-links to portfolio and updated resume links in `index.html` and `projects.html`.

---

## Tasks

- [x] **Task 1: Create `assets/css/cv.css` with screen & print styles**
  - [x] Define CSS variables, base styles, and paper preview container for desktop/mobile screens.
  - [x] Implement `@media print` rules: A4 page sizing (`@page { size: A4; margin: 12mm 15mm; }`), pure black text, removal of screen buttons and shadows, and `break-inside: avoid` for job/education items.
  - [x] Provide utility classes for clean ATS layout and top navigation toolbar.

- [x] **Task 2: Build `cv.html` with complete user data**
  - [x] Construct HTML document structure with metadata and link to `assets/css/cv.css`.
  - [x] Build top control bar: "Back to Portfolio", "Download PDF" (triggering `window.print()`), and a subtle print guideline tooltip.
  - [x] Populate CV content verbatim from user spec (Contact, Professional Summary, Work Experience at Unictive & PT Syergie, Education at Unpad, Skills breakdown, Achievements).
  - [x] Wire up simple JS for print action and key shortcuts (e.g. Ctrl/Cmd+P enhancement).

- [x] **Task 3: Connect `cv.html` to Portfolio Navigation**
  - [x] Update `index.html` header nav, hero resume button/link, and footer resume section to reference `cv.html`.
  - [x] Update `projects.html` navigation to include `CV`.

- [x] **Task 4: Verification and Polish**
  - [x] Validate HTML syntax and ensure semantic heading hierarchy (`h1` -> `h2` -> `h3`).
  - [x] Verify print styles and page break behavior.
  - [x] Verify responsive layout across mobile and desktop breakpoints.
