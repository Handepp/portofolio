const PROJECT_THUMB_BASE = "assets/img/projects/thumbnail/";
const PROJECT_FALLBACK_IMAGE = "assets/img/handep-no-bg.webp";
const FEATURED_PROJECT_COUNT = 5;
const REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");

let activeTech = null;
const filterAppliers = [];

function matchesTech(project, tech) {
  const t = tech.toLowerCase();
  return project.tech.some((item) => item.toLowerCase().includes(t));
}

const GITHUB_LINK_ICON = `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;

const EXTERNAL_LINK_ICON = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`;

const MODAL_TEMPLATE = `
  <div id="projectModal" class="project-modal hidden" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalProjectTitle">
    <div class="project-modal-overlay" data-modal-close></div>
    <div class="project-modal-dialog" id="modalDialog">
      <div class="project-modal-body">
        <header class="project-modal-hero">
          <span id="modalProjectMeta" class="project-modal-meta"></span>
          <div class="project-modal-title-row">
            <h2 id="modalProjectTitle" class="project-modal-title"></h2>
            <button type="button" class="project-modal-close" data-modal-close aria-label="Close project details">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <p id="modalProjectSummary" class="project-modal-summary"></p>
          <div class="project-modal-hero-foot">
            <div id="modalProjectTech" class="project-modal-tech"></div>
            <div class="project-modal-actions hidden" id="modalProjectActions">
              <a id="modalProjectLinkBtn" href="#" target="_blank" rel="noopener noreferrer" class="project-modal-btn project-modal-btn-primary">
                <span id="modalProjectLinkIcon" class="inline-flex" aria-hidden="true"></span>
                <span id="modalProjectLinkLabel">View project</span>
              </a>
            </div>
          </div>
        </header>

        <div class="project-modal-stage">
          <div class="project-modal-stage-grid" id="modalStageGrid">
            <div class="project-modal-media-photos" id="modalPhotoPane">
              <h3 class="project-modal-section-title project-modal-photo-head">Gallery</h3>
              <div class="project-modal-slider" id="modalImageSlider">
                <button type="button" class="slider-btn slider-prev" id="modalSliderPrev" aria-label="Previous image">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <div class="slider-viewport"><div class="slider-track" id="modalSliderTrack"></div></div>
                <button type="button" class="slider-btn slider-next" id="modalSliderNext" aria-label="Next image">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
                <div class="slider-counter" id="modalSliderCounter">1 / 1</div>
              </div>
              <div class="slider-thumbs hidden" id="modalSliderThumbs" role="group" aria-label="Gallery thumbnails"></div>
            </div>

            <div class="project-modal-media-video hidden" id="modalVideoPane">
              <div class="project-modal-video-head">
                <h3 class="project-modal-section-title">Demo video</h3>
                <div id="modalVideoDeployments" class="project-modal-video-deployments hidden" role="group" aria-label="Select deployment video"></div>
              </div>
              <div class="project-modal-video-frame" id="modalVideoFrame">
                <div class="project-modal-video-wrap" id="modalVideoWrap">
                  <div id="modalVideoContainer" class="project-modal-video"></div>
                </div>
              </div>
            </div>

            <div class="project-modal-context">
              <div class="project-modal-context-block">
                <h3 class="project-modal-section-title">Project context &amp; About</h3>
                <p id="modalAbout" class="project-modal-about-text"></p>
              </div>
              <div class="project-modal-deployments-wrap hidden" id="modalDeploymentsSection">
                <h3 class="project-modal-section-title">Client deployments</h3>
                <div id="modalDeployments" class="project-modal-deployments"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="project-modal-specs">
          <div class="project-modal-section hidden" id="modalHowItWorksSection">
            <h3 class="project-modal-section-title">How it works</h3>
            <p id="modalHowItWorks" class="project-modal-about-text"></p>
          </div>
          <div class="project-modal-section hidden" id="modalFeaturesSection">
            <h3 class="project-modal-section-title">Key features</h3>
            <ul id="modalFeatures" class="project-modal-list"></ul>
          </div>
          <div class="project-modal-section hidden" id="modalContributionsSection">
            <h3 class="project-modal-section-title">My contributions</h3>
            <ul id="modalContributions" class="project-modal-list"></ul>
          </div>
          <div class="project-modal-section hidden" id="modalChallengesSection">
            <h3 class="project-modal-section-title">Challenges</h3>
            <ul id="modalChallenges" class="project-modal-list"></ul>
          </div>
          <div class="project-modal-section project-modal-section--results hidden" id="modalResultsSection">
            <h3 class="project-modal-section-title">Results</h3>
            <ul id="modalResults" class="project-modal-list"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;

function getProjectLinkLabel(project, url) {
  if (project.projectLinkLabel) return project.projectLinkLabel;
  if (url.includes("linkedin.com")) return "View on LinkedIn";
  if (url.includes("unictive.com")) return "View on Unictive";
  return "View project";
}

function getProjectLink(project) {
  if (!project) return null;

  if (project.projectUrl) {
    return {
      url: project.projectUrl,
      label: getProjectLinkLabel(project, project.projectUrl),
      icon: EXTERNAL_LINK_ICON,
    };
  }

  if (project.github) {
    return {
      url: project.github,
      label: "View on GitHub",
      icon: GITHUB_LINK_ICON,
    };
  }

  return null;
}

function addImageFallback(image, altText) {
  if (!image) return;

  image.addEventListener("error", () => {
    if (image.dataset.fallbackApplied === "true") return;

    image.dataset.fallbackApplied = "true";
    image.src = PROJECT_FALLBACK_IMAGE;
    image.alt = `${altText} preview unavailable`;
    image.classList.add("is-fallback");
  });
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const media = document.createElement("div");
  media.className = "project-card-media";

  const image = document.createElement("img");
  image.alt = "";
  image.width = 1000;
  image.height = 625;
  image.loading = "lazy";
  if (project.img) {
    addImageFallback(image, project.title);
    image.src = `${PROJECT_THUMB_BASE}${project.img}`;
  } else {
    image.src = PROJECT_FALLBACK_IMAGE;
    image.alt = `${project.title} preview unavailable`;
    image.classList.add("is-fallback");
  }
  media.append(image);

  const body = document.createElement("div");

  const meta = document.createElement("p");
  meta.className = "project-card-meta";
  meta.textContent = `${project.tag} · ${project.year} · ${project.org}`;

  const title = document.createElement("h3");
  title.className = "project-card-title";
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "project-card-trigger";
  trigger.dataset.projectId = project.id;
  trigger.textContent = project.title;
  title.append(trigger);

  const summary = document.createElement("p");
  summary.className = "project-card-summary";
  summary.textContent = project.summary;

  const techWrap = document.createElement("ul");
  techWrap.className = "project-card-tech";
  project.tech.slice(0, 4).forEach((item) => {
    const techTag = document.createElement("li");
    techTag.textContent = item;
    techWrap.appendChild(techTag);
  });

  body.append(meta, title, summary, techWrap);
  article.append(media, body);

  return article;
}

function renderProjectCards(container, projectIds = [], animate = false) {
  if (!container || !window.PROJECTS_DATA) return;

  container.replaceChildren();

  projectIds.forEach((id, index) => {
    const project = PROJECTS_DATA[id];
    if (!project) return;
    const card = createProjectCard(project);
    // Motion purpose: the list just changed, so the new cards settle in once.
    if (animate && !REDUCE_MOTION) {
      card.classList.add("is-new");
      card.style.setProperty("--i", Math.min(index, 8));
    }
    container.appendChild(card);
  });
}

function getFilteredProjectIds(category, isFeatured = false) {
  const order = window.PROJECTS_ORDER;
  const data = window.PROJECTS_DATA;
  if (!order || !data) return [];

  let ids =
    category === "all"
      ? order
      : order.filter((id) => data[id]?.categories?.includes(category));

  if (activeTech) ids = ids.filter((id) => data[id] && matchesTech(data[id], activeTech));

  return isFeatured && !activeTech ? ids.slice(0, FEATURED_PROJECT_COUNT) : ids;
}

function filterProjects(container, category, isFeatured = false, animate = false) {
  if (!container) return;

  const projectIds = getFilteredProjectIds(category, isFeatured);
  renderProjectCards(container, projectIds, animate);

  if (projectIds.length === 0) {
    const empty = document.createElement("p");
    empty.className = "project-grid-empty";
    empty.textContent = "No projects in this category yet. Pick another filter.";
    container.appendChild(empty);
  }
}

function setupFilterBar(bar, grid, isFeatured) {
  if (!bar || !grid) return null;

  const buttons = bar.querySelectorAll(".project-filter-btn");
  const viewMoreBtn = document.getElementById("viewMoreProjectsBtn");

  const status = document.createElement("p");
  status.className = "tech-status";
  status.hidden = true;
  status.innerHTML = `<span></span><button type="button" class="link">Clear</button>`;
  bar.after(status);
  status.querySelector("button").addEventListener("click", () => setTechFilter(null));

  let current = "all";

  function applyFilter(category = current, animate = true) {
    current = category;
    buttons.forEach((btn) => {
      const isActive = btn.dataset.filter === category;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    filterProjects(grid, category, isFeatured, animate);

    status.hidden = !activeTech;
    if (activeTech) {
      const n = grid.querySelectorAll(".project-card").length;
      status.firstChild.textContent = `${n} ${n === 1 ? "project uses" : "projects use"} ${activeTech}. `;
    }

    if (isFeatured && viewMoreBtn) {
      const params = new URLSearchParams();
      if (category !== "all") params.set("filter", category);
      if (activeTech) params.set("tech", activeTech);
      const query = params.toString();
      viewMoreBtn.href = query ? `projects.html?${query}` : "projects.html";
    }
  }

  filterAppliers.push(applyFilter);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter || "all"));
  });

  return applyFilter;
}

function initProjects() {
  const featuredGrid = document.getElementById("featuredProjectsGrid");
  const allGrid = document.getElementById("projectsGrid");

  if (!window.PROJECTS_DATA || !window.PROJECTS_ORDER) {
    [featuredGrid, allGrid].forEach((grid) => {
      if (grid) grid.innerHTML = `<p class="project-grid-error">Projects could not be loaded. Reload the page, or <a class="link" href="https://github.com/Handepp">browse my GitHub</a>.</p>`;
    });
    return;
  }

  const applyFeatured = setupFilterBar(document.getElementById("featuredFilterBar"), featuredGrid, true);
  const applyAll = setupFilterBar(document.getElementById("projectsFilterBar"), allGrid, false);

  const params = new URLSearchParams(window.location.search);
  const techParam = params.get("tech");
  if (techParam && window.PROJECTS_ORDER.some((id) => matchesTech(PROJECTS_DATA[id], techParam))) activeTech = techParam;

  applyFeatured?.("all", false);

  const filterParam = params.get("filter");
  const validFilters = ["interactive", "embedded", "ai"];
  applyAll?.(validFilters.includes(filterParam) ? filterParam : "all", false);

  initSkillLinks();
}

function setTechFilter(tech) {
  activeTech = tech;
  filterAppliers.forEach((apply) => apply());
}

// Interaction purpose: a skill is a claim, so each one that appears in a project opens those projects.
function initSkillLinks() {
  document.querySelectorAll(".skill-tags li").forEach((li) => {
    const tech = li.textContent.trim();
    if (!window.PROJECTS_ORDER.some((id) => matchesTech(PROJECTS_DATA[id], tech))) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "skill-tag-btn";
    button.textContent = tech;
    button.title = `Show projects that use ${tech}`;
    button.addEventListener("click", () => {
      setTechFilter(tech);
      document.getElementById("projects")?.scrollIntoView({ behavior: REDUCE_MOTION ? "auto" : "smooth" });
    });
    li.replaceChildren(button);
  });
}

function initExtras() {
  const bar = document.querySelector(".progress");
  if (bar) {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.setProperty("--p", p);
      document.documentElement.style.setProperty("--p", p.toFixed(3));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  const copyBtn = document.getElementById("copyEmail");
  const copyStatus = document.getElementById("copyStatus");
  if (copyBtn && copyStatus) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("handep789@gmail.com");
        copyStatus.textContent = "Copied.";
      } catch {
        copyStatus.textContent = "Copy failed. Select the address above instead.";
      }
      setTimeout(() => (copyStatus.textContent = ""), 3000);
    });
  }

  if (REDUCE_MOTION) return;

  // Motion purpose: section headings and content blocks settle into view gently as the reader scrolls.
  const targets = document.querySelectorAll(
    "main .h2, .contact h2, .about-photo, .about-copy, .skill-row, .xp-item, .contact-mail, .contact-list"
  );
  const seen = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); seen.unobserve(e.target); }
    }),
    { rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((el) => { el.classList.add("reveal"); seen.observe(el); });

  // Interaction purpose: the whole card is clickable, and the label says what a click does.
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const tip = document.createElement("div");
    tip.className = "cursor-tip";
    tip.setAttribute("aria-hidden", "true");
    tip.textContent = "Open";
    document.body.append(tip);
    const heroEl = document.querySelector(".hero");
    document.addEventListener("pointermove", (e) => {
      const over = e.target.closest?.(".project-card");
      tip.classList.toggle("is-on", Boolean(over));
      if (over) tip.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 16}px)`;
      document.documentElement.style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      document.documentElement.style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom && e.clientX >= rect.left && e.clientX <= rect.right) {
          const hx = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
          const hy = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
          document.documentElement.style.setProperty("--hx", `${hx}%`);
          document.documentElement.style.setProperty("--hy", `${hy}%`);
          document.documentElement.style.setProperty("--hero-hover", "1");
        } else {
          document.documentElement.style.setProperty("--hero-hover", "0.2");
        }
      }
    });
    document.addEventListener("pointerleave", () => tip.classList.remove("is-on"));
  }
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("click", () => setOpen(menu.classList.contains("hidden")));
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  }

  document.querySelectorAll('.wordmark, a[href="#top"], a[href="#hero"]').forEach((el) => {
    el.addEventListener("click", (e) => {
      const href = el.getAttribute("href");
      if (href === "#top" || href === "#hero") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? "auto" : "smooth" });
        if (window.location.hash) {
          history.pushState(null, "", window.location.pathname + window.location.search);
        }
      }
    });
  });

  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = [...links].map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          if (isCurrent) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  initExperienceAccordion();
  document.body.insertAdjacentHTML("beforeend", MODAL_TEMPLATE);
  initProjects();
  initNav();
  initExtras();
  initProjectModal();
});

function initProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal || !window.PROJECTS_DATA) return;

  const els = {
    dialog: document.getElementById("modalDialog"),
    closeBtn: modal.querySelector(".project-modal-close"),
    stageGrid: document.getElementById("modalStageGrid"),
    photoPane: document.getElementById("modalPhotoPane"),
    videoPane: document.getElementById("modalVideoPane"),
    slider: document.getElementById("modalImageSlider"),
    sliderTrack: document.getElementById("modalSliderTrack"),
    sliderPrev: document.getElementById("modalSliderPrev"),
    sliderNext: document.getElementById("modalSliderNext"),
    sliderCounter: document.getElementById("modalSliderCounter"),
    sliderThumbs: document.getElementById("modalSliderThumbs"),
    meta: document.getElementById("modalProjectMeta"),
    title: document.getElementById("modalProjectTitle"),
    summary: document.getElementById("modalProjectSummary"),
    tech: document.getElementById("modalProjectTech"),
    actions: document.getElementById("modalProjectActions"),
    githubBtn: document.getElementById("modalProjectLinkBtn"),
    projectLinkIcon: document.getElementById("modalProjectLinkIcon"),
    projectLinkLabel: document.getElementById("modalProjectLinkLabel"),
    videoFrame: document.getElementById("modalVideoFrame"),
    videoContainer: document.getElementById("modalVideoContainer"),
    videoWrap: document.getElementById("modalVideoWrap"),
    videoDeployments: document.getElementById("modalVideoDeployments"),
    contextPane: modal.querySelector(".project-modal-context"),
    about: document.getElementById("modalAbout"),
    deploymentsSection: document.getElementById("modalDeploymentsSection"),
    deployments: document.getElementById("modalDeployments"),
    howItWorksSection: document.getElementById("modalHowItWorksSection"),
    howItWorks: document.getElementById("modalHowItWorks"),
    contributionsSection: document.getElementById("modalContributionsSection"),
    contributions: document.getElementById("modalContributions"),
    featuresSection: document.getElementById("modalFeaturesSection"),
    features: document.getElementById("modalFeatures"),
    challengesSection: document.getElementById("modalChallengesSection"),
    challenges: document.getElementById("modalChallenges"),
    resultsSection: document.getElementById("modalResultsSection"),
    results: document.getElementById("modalResults"),
  };

  let currentSlide = 0;
  let slideCount = 0;
  let activeTrigger = null;
  let currentProject = null;
  let currentDeployments = [];
  let activeVideoDeploymentIndex = 0;
  let hasVideoAvailable = false;

  function getImageSrc(imagePath) {
    if (!imagePath) return "";
    if (imagePath.startsWith("assets/") || imagePath.startsWith("/")) {
      return imagePath;
    }
    return `${PROJECT_THUMB_BASE}${imagePath}`;
  }

  function renderList(container, items = []) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      container.appendChild(li);
    });
  }

  function getClientDeployments(project) {
    if (!Array.isArray(project.clientDeployments)) return [];
    return project.clientDeployments.filter(
      (deployment) => deployment?.endClient || deployment?.client
    );
  }

  function renderDeployments(deployments = []) {
    els.contextPane?.classList.toggle("has-deployments", deployments.length > 0);
    if (!els.deploymentsSection || !els.deployments) return;

    if (!deployments.length) {
      els.deploymentsSection.classList.add("hidden");
      els.deployments.replaceChildren();
      return;
    }

    els.deploymentsSection.classList.remove("hidden");
    els.deployments.replaceChildren();

    deployments.forEach((deployment) => {
      const card = document.createElement("article");
      card.className = "project-modal-deployment";

      const client = document.createElement("h4");
      client.textContent = deployment.endClient || deployment.client || "";
      card.append(client);

      const detailLabel = deployment.place ? "Place: " : deployment.event ? "Event: " : "";
      const detailValue = deployment.place || deployment.event;
      if (detailValue) {
        const detail = document.createElement("p");
        const labelEl = document.createElement("span");
        labelEl.className = "project-modal-deployment-detail-label";
        labelEl.textContent = detailLabel;
        detail.append(labelEl, document.createTextNode(detailValue));
        card.appendChild(detail);
      }

      els.deployments.appendChild(card);
    });
  }

  function getDeploymentVideo(deployment, project, index) {
    if (deployment?.video) return deployment.video;
    return index === 0 ? project?.video || "" : "";
  }

  function countAvailableVideos(deployments, project) {
    if (deployments.length > 0) {
      return deployments.filter((deployment, index) =>
        Boolean(getDeploymentVideo(deployment, project, index))
      ).length;
    }
    return project?.video ? 1 : 0;
  }

  function normalizeYoutubeEmbed(url) {
    if (!url) return "";
    const patterns = [
      /shorts\/([a-zA-Z0-9_-]+)/,
      /embed\/([a-zA-Z0-9_-]+)/,
      /youtu\.be\/([a-zA-Z0-9_-]+)/,
      /[?&]v=([a-zA-Z0-9_-]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return `https://www.youtube.com/embed/${match[1]}`;
    }

    return url.split("?")[0];
  }

  function isPortraitVideo(url, project, deployment) {
    if (deployment?.videoPortrait !== undefined) return Boolean(deployment.videoPortrait);
    if (project?.videoPortrait) return true;
    return /shorts\//i.test(url || "");
  }

  function getVideoEmbedUrl(url) {
    const embedUrl = normalizeYoutubeEmbed(url);
    if (!embedUrl) return "";
    const separator = embedUrl.includes("?") ? "&" : "?";
    return `${embedUrl}${separator}autoplay=1&mute=1&playsinline=1`;
  }

  function clearVideoEmbed() {
    if (els.videoContainer) els.videoContainer.innerHTML = "";
    els.videoWrap?.classList.remove("is-portrait");
    els.videoContainer?.classList.remove("is-portrait");
    els.stageGrid?.classList.remove("has-portrait-video");
  }

  function mountCurrentVideo() {
    if (!els.videoContainer || !currentProject || !hasVideoAvailable) return;

    const deployment = currentDeployments[activeVideoDeploymentIndex];
    const videoUrl = deployment
      ? getDeploymentVideo(deployment, currentProject, activeVideoDeploymentIndex)
      : currentProject.video || "";

    clearVideoEmbed();
    if (!videoUrl) return;

    const portrait = isPortraitVideo(videoUrl, currentProject, deployment);
    els.videoWrap?.classList.toggle("is-portrait", portrait);
    els.videoContainer.classList.toggle("is-portrait", portrait);
    els.stageGrid?.classList.toggle("has-portrait-video", portrait);
    els.videoContainer.innerHTML = `
      <iframe
        src="${getVideoEmbedUrl(videoUrl)}"
        title="Project demo video"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }

  function renderVideoDeploymentSelector(deployments, project) {
    if (!els.videoDeployments) return;

    els.videoDeployments.replaceChildren();
    const videoEntries = deployments
      .map((deployment, index) => ({
        deployment,
        index,
        videoUrl: getDeploymentVideo(deployment, project, index),
      }))
      .filter((entry) => Boolean(entry.videoUrl));

    if (videoEntries.length <= 1) {
      els.videoDeployments.classList.add("hidden");
      return;
    }

    els.videoDeployments.classList.remove("hidden");
    videoEntries.forEach(({ deployment, index }) => {
      const isInitial = index === activeVideoDeploymentIndex;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `project-modal-video-deployment${isInitial ? " is-active" : ""}`;
      button.textContent =
        deployment.endClient || deployment.client || `Deployment ${index + 1}`;
      button.setAttribute("aria-pressed", isInitial ? "true" : "false");
      button.addEventListener("click", () => {
        activeVideoDeploymentIndex = index;
        els.videoDeployments.querySelectorAll("button").forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
        mountCurrentVideo();
      });
      els.videoDeployments.appendChild(button);
    });
  }

  function renderTech(items = []) {
    if (!els.tech) return;
    els.tech.innerHTML = items
      .map((item) => `<span class="tech-tag">${item}</span>`)
      .join("");
  }

  function renderProjectLink(project) {
    const link = getProjectLink(project);
    if (!els.githubBtn || !els.actions) return;

    if (!link) {
      els.actions.classList.add("hidden");
      els.githubBtn.removeAttribute("href");
      return;
    }

    els.githubBtn.href = link.url;
    els.actions.classList.remove("hidden");

    if (els.projectLinkIcon) els.projectLinkIcon.innerHTML = link.icon;
    if (els.projectLinkLabel) els.projectLinkLabel.textContent = link.label;
  }

  function getAboutText(project) {
    if (project.about) return project.about;
    return project.overview || project.summary || "";
  }

  function toggleTextSection(sectionEl, contentEl, text) {
    if (!sectionEl || !contentEl) return;

    const value = (text || "").trim();
    if (!value) {
      sectionEl.classList.add("hidden");
      contentEl.textContent = "";
      return;
    }

    sectionEl.classList.remove("hidden");
    contentEl.textContent = value;
  }

  function toggleListSection(sectionEl, listEl, items = []) {
    if (!sectionEl || !listEl) return;

    const values = items.filter(Boolean);
    if (!values.length) {
      sectionEl.classList.add("hidden");
      listEl.innerHTML = "";
      return;
    }

    sectionEl.classList.remove("hidden");
    renderList(listEl, values);
  }

  function updateSliderPosition() {
    if (!els.sliderTrack) return;
    els.sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (els.sliderCounter) {
      els.sliderCounter.textContent = `${currentSlide + 1} / ${slideCount}`;
    }

    if (els.sliderThumbs) {
      els.sliderThumbs.querySelectorAll(".slider-thumb").forEach((thumb, index) => {
        const isActive = index === currentSlide;
        thumb.classList.toggle("is-active", isActive);
        thumb.setAttribute("aria-pressed", String(isActive));
      });
    }

    if (els.sliderPrev) els.sliderPrev.disabled = currentSlide === 0;
    if (els.sliderNext) els.sliderNext.disabled = currentSlide >= slideCount - 1;
  }

  function goToSlide(index) {
    if (slideCount <= 1) return;
    currentSlide = Math.max(0, Math.min(index, slideCount - 1));
    updateSliderPosition();
  }

  function renderSlider(images = [], title = "Project") {
    if (!els.sliderTrack || !els.slider) return;

    const uniqueImages = [...new Set(images.filter(Boolean))];
    const hasCustomImages = uniqueImages.length > 0;
    const slides = hasCustomImages ? uniqueImages : [PROJECT_FALLBACK_IMAGE];
    slideCount = slides.length;
    currentSlide = 0;

    els.slider.classList.toggle("is-single", slideCount <= 1);

    els.sliderTrack.innerHTML = slides
      .map(
        (img) =>
          `<div class="slider-slide"><img src="${hasCustomImages ? getImageSrc(img) : img}" alt="${hasCustomImages ? title : `${title} preview unavailable`}" loading="lazy"${hasCustomImages ? "" : ' class="is-fallback"'} /></div>`
      )
      .join("");
    if (hasCustomImages) {
      els.sliderTrack.querySelectorAll("img").forEach((image) => {
        addImageFallback(image, title);
      });
    }

    if (els.sliderThumbs) {
      els.sliderThumbs.replaceChildren();
      els.sliderThumbs.classList.toggle("hidden", slideCount <= 1);

      if (slideCount > 1) {
        uniqueImages.forEach((img, index) => {
          const thumbBtn = document.createElement("button");
          thumbBtn.type = "button";
          thumbBtn.className = `slider-thumb${index === 0 ? " is-active" : ""}`;
          thumbBtn.setAttribute("aria-label", `Show image ${index + 1}`);
          thumbBtn.setAttribute("aria-pressed", index === 0 ? "true" : "false");

          const thumbImg = document.createElement("img");
          thumbImg.src = getImageSrc(img);
          thumbImg.alt = "";
          thumbImg.loading = "lazy";
          addImageFallback(thumbImg, title);

          thumbBtn.appendChild(thumbImg);
          thumbBtn.addEventListener("click", () => goToSlide(index));
          els.sliderThumbs.appendChild(thumbBtn);
        });
      }
    }

    updateSliderPosition();
  }

  function getFocusableElements() {
    return Array.from(
      modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => element.getClientRects().length > 0);
  }

  function focusModal() {
    if (els.closeBtn && !els.closeBtn.disabled) {
      els.closeBtn.focus();
      return;
    }
    const focusableElements = getFocusableElements();
    if (focusableElements[0]) focusableElements[0].focus();
  }

  function openModal(projectId, trigger = null, options = {}) {
    const project = PROJECTS_DATA[projectId];
    if (!project) return;

    currentProject = project;
    activeTrigger = trigger || activeTrigger;

    const images = project.gallery || [project.img];
    renderSlider(images, project.title);

    if (els.meta) els.meta.textContent = `${project.tag} · ${project.year} · ${project.org}`;
    if (els.title) els.title.textContent = project.title;
    if (els.summary) els.summary.textContent = project.summary;
    if (els.about) els.about.textContent = getAboutText(project);

    currentDeployments = getClientDeployments(project);
    renderDeployments(currentDeployments);

    const videoCount = countAvailableVideos(currentDeployments, project);
    hasVideoAvailable = videoCount > 0;
    const firstVideoDeployIdx = currentDeployments.findIndex((deployment, index) =>
      Boolean(getDeploymentVideo(deployment, project, index))
    );
    activeVideoDeploymentIndex = firstVideoDeployIdx >= 0 ? firstVideoDeployIdx : 0;

    renderVideoDeploymentSelector(currentDeployments, project);
    els.stageGrid?.classList.toggle("has-video", hasVideoAvailable);
    els.videoPane?.classList.toggle("hidden", !hasVideoAvailable);
    if (hasVideoAvailable) {
      mountCurrentVideo();
    } else {
      clearVideoEmbed();
    }

    toggleTextSection(els.howItWorksSection, els.howItWorks, project.howItWorks);
    toggleListSection(els.featuresSection, els.features, project.features);
    toggleListSection(els.contributionsSection, els.contributions, project.contributions);
    toggleListSection(els.challengesSection, els.challenges, project.challenges);
    toggleListSection(els.resultsSection, els.results, project.results);

    renderTech(project.tech);
    renderProjectLink(project);

    modal.classList.remove("hidden");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (els.dialog) els.dialog.scrollTop = 0;

    if (!options.preserveFocus) {
      requestAnimationFrame(focusModal);
    }
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    const triggerToRestore = activeTrigger;
    activeTrigger = null;
    currentProject = null;
    currentDeployments = [];
    hasVideoAvailable = false;
    currentSlide = 0;

    clearVideoEmbed();
    els.stageGrid?.classList.remove("has-video");
    els.videoPane?.classList.add("hidden");
    if (els.videoDeployments) {
      els.videoDeployments.replaceChildren();
      els.videoDeployments.classList.add("hidden");
    }

    if (triggerToRestore && document.contains(triggerToRestore)) {
      triggerToRestore.focus();
    }
  }

  els.sliderPrev?.addEventListener("click", (event) => {
    event.stopPropagation();
    goToSlide(currentSlide - 1);
  });

  els.sliderNext?.addEventListener("click", (event) => {
    event.stopPropagation();
    goToSlide(currentSlide + 1);
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".project-card-trigger");
    if (!trigger) return;

    const projectId = trigger.getAttribute("data-project-id");
    if (!projectId) return;

    event.preventDefault();
    openModal(projectId, trigger);
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = getFocusableElements();
      if (!focusableElements.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const focusIsOutsideModal = !modal.contains(document.activeElement);

      if (event.shiftKey && (document.activeElement === firstElement || focusIsOutsideModal)) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && (document.activeElement === lastElement || focusIsOutsideModal)) {
        event.preventDefault();
        firstElement.focus();
      }
      return;
    }

    if (event.key === "ArrowLeft") goToSlide(currentSlide - 1);
    if (event.key === "ArrowRight") goToSlide(currentSlide + 1);
  });

  modal.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });
}

function initExperienceAccordion() {
  const items = document.querySelectorAll("details.xp-item");
  if (!items.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  items.forEach((details) => {
    const summary = details.querySelector(".xp-summary");
    const body = details.querySelector(".xp-body");
    if (!summary || !body) return;

    let anim = null;

    summary.addEventListener("click", (e) => {
      e.preventDefault();

      if (prefersReduced) {
        details.open = !details.open;
        return;
      }

      if (anim) {
        anim.cancel();
      }

      if (details.open) {
        // Closing animation: smoothly collapse height and fade out
        const startHeight = body.offsetHeight;
        body.style.overflow = "hidden";
        anim = body.animate(
          [
            { height: `${startHeight}px`, opacity: 1 },
            { height: "0px", opacity: 0 }
          ],
          {
            duration: 240,
            easing: "cubic-bezier(0.2, 0.7, 0.2, 1)"
          }
        );

        anim.onfinish = () => {
          details.open = false;
          body.style.overflow = "";
          anim = null;
        };
        anim.oncancel = () => {
          body.style.overflow = "";
          anim = null;
        };
      } else {
        // Opening animation: smoothly expand height and fade in
        details.open = true;
        const targetHeight = body.offsetHeight;
        body.style.overflow = "hidden";
        anim = body.animate(
          [
            { height: "0px", opacity: 0 },
            { height: `${targetHeight}px`, opacity: 1 }
          ],
          {
            duration: 260,
            easing: "cubic-bezier(0.2, 0.7, 0.2, 1)"
          }
        );

        anim.onfinish = () => {
          body.style.overflow = "";
          anim = null;
        };
        anim.oncancel = () => {
          body.style.overflow = "";
          anim = null;
        };
      }
    });
  });
}
