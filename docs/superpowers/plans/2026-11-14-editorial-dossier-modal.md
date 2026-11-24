# Editorial Dossier Project Modal (Option A) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the legacy sticky split `.project-modal` in the portfolio with the approved Option A (`Editorial Dossier Sheet`) layout while keeping all `22` project records in `assets/js/projects-data.js` intact.

**Architecture:** `MODAL_TEMPLATE` and `initProjectModal()` in `assets/js/script.js` inject and populate the single shared modal for both `index.html` and `projects.html`. The layout moves to a top bar (`meta` + `Prev` / `Next` / `Close`), full-width `Fraunces` hero header + CTA, a `--surface` media stage pairing a tabbed `Photos` / `Demo video` viewer (`1.35fr`) with `About & Project Context` + deployments (`1fr`), and a two-column specification grid (`How it works`, `Key features`, `My contributions`, `Challenges`, plus full-width `Results` band).

**Tech Stack:** Static HTML, vanilla JavaScript (`assets/js/script.js`), custom editorial CSS (`assets/css/style.css`).

## Global Constraints

- Keep `assets/js/projects-data.js` unmodified; preserve all `22` project entries and schemas.
- Preserve existing design tokens in `assets/css/style.css` (`--paper: #faf7f2`, `--surface: #efe8dc`, `--ink: #1c1b18`, `--muted: #5c574e`, `--rule: #d9d2c5`, `--accent: #b92d07`, `--accent-ink: #ffffff`, `--radius: 4px`, `--serif`, `--sans`).
- Every interactive control inside `#projectModal` (`Prev`, `Next`, `Close`, `Photos`/`Demo video` tabs, slider prev/next, thumbnails, deployment switcher pills, CTA) must have `min-height: 2.75rem` (`44px`), visible `:focus-visible`, and full keyboard support (`Esc`, `Tab` trap, `ArrowLeft`/`ArrowRight` gallery navigation, focus restoration to trigger).
- Remove dead placeholder copy (`"Demo video will be available soon."`, `"[End client / brand placeholder]"`) completely.
- Load YouTube embeds strictly on-demand when switching to the `Demo video` tab, and clear the iframe when returning to `Photos`, changing project, or closing the modal.
- Bump cache query params on both `index.html` and `projects.html`: `style.css?v=74`, `script.js?v=24`.

## Review Focus

- **Video-less projects (`13/22`, e.g., `sgm`, `wardah`, `iot-syergie`):** Hide `.project-modal-stage-bar` tabs when no video exists, render no placeholder box, and reset mode cleanly to `Photos` when navigating from a video project via `Prev`/`Next`.
- **Multi-deployment & Shorts overrides (`linear-position`: `Labore` + `BYD`, `lift-and-learn` empty `event`):** Show deployment video buttons inside `#modalVideoPane` only when `> 1` deployment exists, switch iframe URL + `.is-portrait` class on click, and omit empty `event` lines without placeholders.
- **Portrait & single-image galleries (`savibot: savi_1.webp`, `handwashing-station`, `smart-glove`, plus `7` single-image projects):** Keep `object-fit: contain` on main `.slider-slide img` so hardware silhouettes never crop, and hide prev/next/counter/thumbnail strip when `gallery.length <= 1`.
- **Projects without external links (`5/22`: `sgm`, `lift-and-learn`, `face-recognition`, `handwashing-station`, `smart-glove`):** Hide `#modalProjectLinkBtn` without layout gap or unreachable focus stops.
- **Filtered `Prev`/`Next` navigation & focus restoration:** Navigate across currently rendered `.project-card-trigger[data-project-id]` items on the page, disable boundary buttons, reset modal scroll to top on project switch, and restore focus to the opening card button on close (or fallback safely if re-rendered).

---

### Task 1: Restructure `MODAL_TEMPLATE` and modal controller in `assets/js/script.js`

**Files:**
- Modify: `assets/js/script.js:19-97` (`MODAL_TEMPLATE`), `assets/js/script.js:465-941` (`initProjectModal`)

**Interfaces:**
- Produces DOM structure inside `#projectModal`:
  - `.project-modal-topbar` (`#modalProjectMeta`, `#modalProjectPrev`, `#modalProjectNext`, `.project-modal-close[data-modal-close]`)
  - `.project-modal-hero` (`#modalProjectTitle`, `#modalProjectSummary`, `#modalProjectTech`, `#modalProjectLinkBtn`)
  - `.project-modal-stage` (`#modalStageBar`, `#modalTabPhotos`, `#modalTabVideo`, `#modalPhotoPane` -> `#modalImageSlider` + `#modalSliderThumbs`, `#modalVideoPane` -> `#modalVideoDeployments` + `#modalVideoWrap`/`#modalVideoContainer`, `.project-modal-context` -> `#modalAbout` + `#modalDeploymentsSection`/`#modalDeployments`)
  - `.project-modal-specs` (`#modalHowItWorksSection`, `#modalFeaturesSection`, `#modalContributionsSection`, `#modalChallengesSection`, `#modalResultsSection`)
- Produces helper behaviors inside `initProjectModal()`: `setMediaMode("photos" | "video")`, `getVisibleProjectIds()`, `updateModalNavButtons(projectId)`.

- [x] **Step 1: Replace `MODAL_TEMPLATE` (`assets/js/script.js:19-97`) with Option A layout**
  Update HTML markup to the topbar -> full-width hero -> `--surface` showcase stage (`1.35fr` photo/video pane + `1fr` about & deployments pane) -> 2-column `.project-modal-specs` grid. Keep `modalImageSlider`, `modalSliderTrack`, `modalSliderPrev`, `modalSliderNext`, `modalSliderCounter`, and replace tiny dot controls with `#modalSliderThumbs`.

- [x] **Step 2: Update `initProjectModal()` state and DOM element refs (`assets/js/script.js:465-590`)**
  Remove `videoPlaceholder` logic, remove fake `"[End client / brand placeholder]"` fallback in `getClientDeployments(project)` (return `[]` when missing, omit empty `Event:` row), add `prevBtn`, `nextBtn`, `dialog`, `stageBar`, `tabPhotos`, `tabVideo`, `photoPane`, `videoPane`, `sliderThumbs`, plus state tracking `currentProjectId`, `activeDeployments`, `activeDeploymentIdx`, `activeVideoProject`, `mediaMode`.

- [x] **Step 3: Implement on-demand video tab switching, thumbnail strip, and `Prev`/`Next` project navigation (`assets/js/script.js:591-941`)**
  - `renderSlider()` builds thumbnail buttons in `#modalSliderThumbs` (`aria-pressed`, hidden when `slideCount <= 1`) and keeps `#modalSliderCounter`, prev/next arrows, and `ArrowLeft`/`ArrowRight` keys in sync.
  - `hasAvailableVideo(deployments, project)` returns true only when at least one non-empty video URL exists; `#modalStageBar` hides completely when false.
  - `setMediaMode(mode)` updates tab `aria-selected` / `.is-active`, toggles `#modalPhotoPane` / `#modalVideoPane`, and mounts the YouTube iframe ONLY when switching to `"video"` (destroying it when switching back to `"photos"`).
  - `#modalProjectPrev` / `#modalProjectNext` resolve `getVisibleProjectIds()` from `[...document.querySelectorAll('.project-card-trigger[data-project-id]')]` (fallback `window.PROJECTS_ORDER`), open the adjacent project, reset `dialog.scrollTop = 0`, and preserve `activeTrigger` matching the newly displayed card if present.
  - `closeModal()` clears video iframe cleanly, resets media mode, and restores focus cleanly.

- [x] **Step 4: Syntax check `assets/js/script.js`**
  Run: `node --check d:\Project\portofolio\assets\js\script.js`
  Expected: Exit code `0`.

---

### Task 2: Replace `.project-modal*` CSS in `assets/css/style.css` with Option A styling

**Files:**
- Modify: `assets/css/style.css:501-602`

**Interfaces:**
- Styles `.project-modal`, `.project-modal-dialog`, `.project-modal-topbar`, `.project-modal-hero`, `.project-modal-stage`, `.project-modal-media-tabs`, `.project-modal-stage-grid`, `.project-modal-slider`, `.slider-thumbs`, `.project-modal-context`, `.project-modal-specs`, `.project-modal-section--results`.

- [x] **Step 1: Replace legacy `.project-modal` CSS (`assets/css/style.css:501-602`)**
  Implement Option A responsive styles:
  - `.project-modal-topbar` sticky at top of dialog with hairline bottom rule `--rule`, aligned meta left and `>= 2.75rem` nav/close buttons right.
  - `.project-modal-hero` flex/grid row with `1px solid var(--ink)` bottom rule, balanced `Fraunces` title, muted summary, hairline `.tech-tag` strip, and right-aligned `--accent` CTA (`min-height: 2.75rem`).
  - `.project-modal-stage` (`background: var(--surface)`, `border: 1px solid var(--rule)`, `border-radius: var(--radius)`) containing segmented `.project-modal-media-tabs` (`Photos` / `Demo video`) and `.project-modal-stage-grid` (`1fr` mobile -> `minmax(0, 1.35fr) minmax(0, 1fr)` on `min-width: 48rem`).
  - `.slider-slide` (`aspect-ratio: 4 / 3`, `background: var(--surface)`) with `img { object-fit: contain }` plus `4.5rem x 2.75rem` `.slider-thumb` strip below and centered `.project-modal-video-wrap.is-portrait` inside dark `#1c1b18` backdrop frame.
  - `.project-modal-specs` (`grid-template-columns: 1fr` -> `repeat(2, minmax(0, 1fr))` on `min-width: 48rem`) with `.project-modal-section--results` spanning `1 / -1` on `--surface` with a left `--accent` border.

- [x] **Step 2: Preserve `@media (prefers-reduced-motion: reduce)` and enter animations**
  Ensure `.project-modal.is-open .project-modal-dialog` and `.project-modal-overlay` animations keep working without referencing deleted selectors.

- [x] **Step 3: Verify Tailwind/CSS integrity and no stale modal classes**
  Search `assets/css/style.css` and `assets/js/script.js` to confirm no orphaned `.project-modal-workspace`, `.project-modal-video-placeholder`, or `.slider-dots` rules remain.

---

### Task 3: Bump asset versions in HTML and run full verification

**Files:**
- Modify: `index.html:30,362`
- Modify: `projects.html:22,90`

- [x] **Step 1: Update asset query strings on both pages**
  Update `assets/css/style.css?v=73` -> `?v=74` and `assets/js/script.js?v=23` -> `?v=24` in both `index.html` and `projects.html`.

- [x] **Step 2: Verify JS syntax and static checks**
  Run `node --check assets/js/script.js` and `git diff --check`.
  Expected: Zero syntax or whitespace errors.

- [x] **Step 3: Serve site locally and verify all 5 Review Focus behaviors in real Chrome (`chrome.exe` / DevTools)**
  Test via local static HTTP server across desktop (`1280x800`) and mobile (`375x812`):
  1. `linear-position`: `Photos (2)` + thumbnails + `Demo video` tab + `Labore`/`BYD` deployment video switcher -> portrait `iframe` loads only when `Demo video` active and clears cleanly when switching back to `Photos`.
  2. `sgm`: no stage tabs, no empty video placeholder, no external CTA button, zero fake deployment placeholder.
  3. `giias-footstep`: landscape `16:9` demo video + `Daihatsu` deployment context + `3` photos.
  4. `savibot` / `handwashing-station` / `lift-and-learn`: portrait hardware images uncropped (`object-fit: contain`), `lift-and-learn` omits empty event row cleanly, `Prev`/`Next` disables accurately at bounds.
  5. Keyboard (`Tab` trap, `Esc` close, focus return to opening card), zero horizontal overflow (`scrollWidth <= clientWidth`), and `>= 44px` interactive control sizing (`boundingClientRect.height >= 44`).
