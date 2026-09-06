# Compact Project Modal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved Compact Workspace modal layout while preserving every project detail and the existing YouTube embed behavior.

**Architecture:** Keep `assets/js/projects-data.js` as the single data source and keep the existing modal renderer/IDs in `assets/js/script.js`. Reorganize the modal markup into a media rail (gallery + video) and a scrollable content rail, with a single-column mobile breakpoint.

**Tech Stack:** Static HTML, vanilla JavaScript, CSS, existing Tailwind utility classes.

## Global Constraints

- Do not remove or rename project data fields.
- Keep existing modal element IDs used by `assets/js/script.js`.
- Keep the YouTube iframe generated from the project `video` field.
- Keep the existing keyboard focus trap and image fallback behavior.
- Bump the shared `style.css` cache version on both HTML pages.

---

### Task 1: Reorganize modal markup

**Files:**
- Modify: `index.html` modal markup around lines 377-455.
- Modify: `projects.html` modal markup around lines 76-149.

- [x] Wrap the gallery and `modalVideoSection` in a `project-modal-media` rail.
- [x] Move hero metadata, title, summary, technologies, link, and all detail sections into a `project-modal-content` rail.
- [x] Preserve every existing element ID so `initProjectModal()` continues to populate the same nodes.

### Task 2: Implement responsive Compact Workspace CSS

**Files:**
- Modify: `assets/css/style.css` modal rules around lines 1050-1445.

- [x] Replace the two-column hero-only layout with a desktop workspace grid.
- [x] Keep gallery and YouTube video together in the left media rail.
- [x] Keep the content rail independently readable and use the modal body's existing internal scroll.
- [x] Stack media above content on mobile and preserve portrait video sizing.
- [x] Remove obsolete hero-only rules after the new selectors are in place.

### Task 3: Update stylesheet cache and verify

**Files:**
- Modify: `index.html` stylesheet query string.
- Modify: `projects.html` stylesheet query string.

- [x] Set both `style.css` references to the same new cache version.
- [x] Run `node --check assets/js/script.js`.
- [x] Run `git diff --check`.
- [x] Run the linter for all changed source files.
- [x] Open the modal in a local browser and verify gallery, video, detail sections, mobile stacking, Escape close, and focus restoration.
