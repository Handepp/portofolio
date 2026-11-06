# Project Category Filters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add interactive category filter buttons (`All`, `Interactive/Gamification`, `Embedded & IoT`, `Artificial Intelligence`) to both the Featured Projects section on `index.html` and the All Projects page on `projects.html`, with multi-category support for hybrid projects.

**Architecture:**
- Add `categories` array to each project object in `assets/js/projects-data.js`.
- Add filter button bars to `index.html` and `projects.html`.
- Add filter state management and rendering logic in `assets/js/script.js` with support for URL query params (e.g. `?filter=ai`).
- Add cyber-dark / cyan pill button styles and active states in `assets/css/style.css`.
- Bump stylesheet and script cache versions on both HTML files.

**Tech Stack:** Static HTML5, Vanilla JavaScript, CSS3 + Tailwind CSS.

---

### Task 1: Update Data Model with Project Categories

**Files:**
- Modify: `assets/js/projects-data.js`

- [x] Add `categories` array to each of the 16 project objects in `PROJECTS_DATA`:
  - `linear-position`: `["interactive", "embedded"]`
  - `sgm`: `["ai", "interactive"]`
  - `giias-rmbg`: `["ai", "interactive"]`
  - `giias-footstep`: `["interactive", "embedded"]`
  - `giias-arcade`: `["interactive", "embedded"]`
  - `fitbar`: `["interactive", "embedded"]`
  - `lift-and-learn`: `["interactive", "embedded"]`
  - `presence-detection`: `["interactive", "embedded"]`
  - `sequential-control`: `["interactive", "embedded"]`
  - `wardah`: `["ai", "interactive"]`
  - `savibot`: `["ai", "embedded"]`
  - `iot-syergie`: `["embedded"]`
  - `bestibot`: `["ai"]`
  - `face-recognition`: `["ai"]`
  - `handwashing-station`: `["embedded"]`
  - `smart-glove`: `["embedded"]`
- [x] Run `node --check assets/js/projects-data.js` to ensure valid syntax.

---

### Task 2: Add Filter Bar Markup to Both HTML Pages

**Files:**
- Modify: `index.html` (inside `#projects` section, right before `#featuredProjectsGrid`)
- Modify: `projects.html` (inside the projects section, right before `#projectsGrid`)

- [x] Add semantic filter bar markup with the 4 buttons:
  - `All` (data-filter="all")
  - `Interactive/Gamification` (data-filter="interactive")
  - `Embedded & IoT` (data-filter="embedded")
  - `Artificial Intelligence` (data-filter="ai")
- [x] Ensure accessible `role="tablist"` / `role="tab"` and `aria-selected` attributes.

---

### Task 3: Implement Filter Styling in `assets/css/style.css`

**Files:**
- Modify: `assets/css/style.css`

- [x] Add `.project-filter-bar` flex layout container with responsive wrapping.
- [x] Add `.project-filter-btn` pill button styling with dark surface, border, and cyan glow on hover/active.
- [x] Add `.project-filter-btn.active` style with brand background (`#00d1ff`), dark text, and subtle cyan drop shadow.

---

### Task 4: Implement Filter Logic & Synchronization in `assets/js/script.js`

**Files:**
- Modify: `assets/js/script.js`

- [x] Add helper function `getFilteredProjectIds(category, isFeatured)`:
  - When `category === 'all'`, returns all or top 6 projects according to `PROJECTS_ORDER`.
  - When specific category is selected, filters projects whose `categories` includes that category.
- [x] Create `initProjectFilters()`:
  - Bind click listeners to filter buttons.
  - Read query param `?filter=` on page load for `projects.html` so links from homepage preserve active category.
  - Update active button styling and `aria-selected`.
  - Re-render the corresponding grid (`#featuredProjectsGrid` or `#projectsGrid`) and ensure cards are visible with smooth fade-in.
- [x] Call `initProjectFilters()` in `DOMContentLoaded`.
- [x] Run `node --check assets/js/script.js` to verify syntax.

---

### Task 5: Verification and Cache Version Bump

**Files:**
- Modify: `index.html`
- Modify: `projects.html`

- [x] Bump cache version query strings for `style.css`, `projects-data.js`, and `script.js` in both `index.html` and `projects.html`.
- [x] Run `npm run build:css`.
- [x] Run `git diff --check`.
- [x] Verify filtering behavior, empty states (none empty), and modal interactions for all categories.
