const PROJECT_THUMB_BASE = "assets/img/projects/thumbnail/";
const FEATURED_PROJECT_COUNT = 6;

const GITHUB_LINK_ICON = `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;

const EXTERNAL_LINK_ICON = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`;

function getProjectLinkLabel(project, url) {
  if (project.projectLinkLabel) return project.projectLinkLabel;
  if (url.includes("linkedin.com")) return "View on LinkedIn";
  if (url.includes("unictive.com")) return "View on Unictive";
  return "View Project";
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

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className =
    "project-card project-card-trigger glass-card rounded-custom overflow-hidden group border border-white/5 cursor-pointer";
  article.dataset.projectId = project.id;
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `View ${project.title} details`);

  const media = document.createElement("div");
  media.className = "aspect-video relative overflow-hidden";

  const image = document.createElement("img");
  image.src = `${PROJECT_THUMB_BASE}${project.img}`;
  image.alt = project.title;
  image.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500";

  const tag = document.createElement("span");
  tag.className =
    "absolute top-4 left-4 px-3 py-1 bg-brand text-surface text-[10px] font-bold uppercase rounded-sm";
  tag.textContent = project.tag;

  media.append(image, tag);

  const body = document.createElement("div");
  body.className = "p-6";

  const title = document.createElement("h3");
  title.className = "text-xl font-bold leading-tight mb-4";
  title.textContent = project.title;

  const summary = document.createElement("p");
  summary.className = "text-slate-400 text-sm mb-6 line-clamp-3";
  summary.textContent = project.summary;

  const techWrap = document.createElement("div");
  techWrap.className = "flex flex-wrap gap-2 mb-4";
  project.tech.slice(0, 4).forEach((item) => {
    const techTag = document.createElement("span");
    techTag.className = "tech-tag";
    techTag.textContent = item;
    techWrap.appendChild(techTag);
  });

  const meta = document.createElement("p");
  meta.className = "text-xs text-slate-500 font-bold uppercase";
  meta.textContent = `Year: ${project.year} · ${project.org}`;

  body.append(title, summary, techWrap, meta);
  article.append(media, body);

  return article;
}

function renderProjectCards(container, projectIds = []) {
  if (!container || !window.PROJECTS_DATA) return;

  container.replaceChildren();

  projectIds.forEach((id) => {
    const project = PROJECTS_DATA[id];
    if (project) container.appendChild(createProjectCard(project));
  });
}

function initProjectGrids() {
  const featuredGrid = document.getElementById("featuredProjectsGrid");
  const allProjectsGrid = document.getElementById("projectsGrid");

  if (featuredGrid && window.PROJECTS_ORDER) {
    renderProjectCards(featuredGrid, PROJECTS_ORDER.slice(0, FEATURED_PROJECT_COUNT));
  }

  if (allProjectsGrid && window.PROJECTS_ORDER) {
    renderProjectCards(allProjectsGrid, PROJECTS_ORDER);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initProjectGrids();

  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const navbar = document.getElementById("mainNavbar");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  initProjectModal();

  if (!prefersReducedMotion) {
    initNavbarScroll(navbar);
    initSectionBackgrounds();
    initScrollReveal();
    initActiveNavHighlight();

    if (
      document.querySelector("#projectsGrid .project-card, #featuredProjectsGrid .project-card")
    ) {
      initPortfolioAnimations();
    }
  } else {
    initSectionBackgrounds();
    document.querySelectorAll(".reveal, .timeline-item").forEach((el) => {
      el.classList.add("is-visible");
    });
  }
});

function initNavbarScroll(navbar) {
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("nav-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const revealRegistry = new Set();

function registerReveal(el, observer, { variant = "", delay = 0, scale = false } = {}) {
  if (!el || revealRegistry.has(el)) return;
  revealRegistry.add(el);

  el.classList.add("reveal");
  if (variant) el.classList.add(`reveal-${variant}`);
  if (scale) el.classList.add("reveal-scale");
  if (delay) el.style.transitionDelay = `${delay}s`;

  observer.observe(el);
}

function createRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  return observer;
}

function initScrollReveal() {
  const observer = createRevealObserver();

  document.querySelectorAll(".reveal-section").forEach((section) => {
    if (section.id === "about") {
      const [imgCol, textCol] = section.querySelectorAll(".grid > div");
      registerReveal(imgCol, observer, { variant: "left", scale: true });
      registerReveal(textCol?.querySelector("span"), observer, { variant: "right", delay: 0.06 });
      registerReveal(textCol?.querySelector("h2"), observer, { variant: "right", delay: 0.12 });
      textCol?.querySelectorAll(".space-y-6 > p").forEach((paragraph, index) => {
        registerReveal(paragraph, observer, { delay: 0.18 + index * 0.1 });
      });
    } else if (section.id === "contact") {
      const [infoCol, formCol] = section.querySelectorAll(".grid > div");
      registerReveal(infoCol?.querySelector("span"), observer, { variant: "left" });
      registerReveal(infoCol?.querySelector("h2"), observer, { variant: "left", delay: 0.08 });
      registerReveal(infoCol?.querySelector("p.text-slate-400"), observer, { variant: "left", delay: 0.16 });
      infoCol?.querySelectorAll(".space-y-8 > .flex").forEach((row, index) => {
        registerReveal(row, observer, { variant: "left", delay: 0.24 + index * 0.1 });
      });
      registerReveal(infoCol?.querySelector(".mt-12"), observer, { variant: "left", delay: 0.54 });
      registerReveal(formCol, observer, { variant: "right", delay: 0.1 });
    } else if (section.id === "projects") {
      const header = section.querySelector(":scope > .max-w-7xl > .flex");
      registerReveal(header?.querySelector(":scope > div"), observer, { variant: "left" });
      registerReveal(header?.querySelector("p"), observer, { variant: "right", delay: 0.12 });
      registerReveal(section.querySelector(".mt-16 a"), observer, { scale: true, delay: 0.2 });
    } else {
      const intro = section.querySelector(
        ":scope > .max-w-7xl > .text-center, :scope > .max-w-7xl > .flex.flex-col:not(.md\\:flex-row)"
      );
      registerReveal(intro, observer);
      section.querySelectorAll(":scope > .max-w-7xl a.inline-flex").forEach((link) => {
        registerReveal(link, observer, { scale: true, delay: 0.15 });
      });
    }

    section.querySelectorAll(".glass-card, .project-card").forEach((card, index) => {
      registerReveal(card, observer, { delay: (index % 6) * 0.08 });
    });

    section.querySelectorAll("h3.border-l-4").forEach((heading, index) => {
      registerReveal(heading, observer, { variant: "left", delay: index * 0.08 });
    });
  });

  initTimelineReveal(observer);
  initFooterReveal(observer);
}

function initTimelineReveal(observer) {
  document.querySelectorAll("#journey .relative.pl-8 > .relative").forEach((item, index) => {
    if (revealRegistry.has(item)) return;
    revealRegistry.add(item);
    item.classList.add("timeline-item");
    item.style.transitionDelay = `${index * 0.12}s`;
    observer.observe(item);
  });
}

function initFooterReveal(observer) {
  document.querySelectorAll("footer .max-w-7xl").forEach((inner) => {
    inner.querySelectorAll(":scope > *").forEach((child, index) => {
      registerReveal(child, observer, { delay: index * 0.1 });
    });
  });
}

const SECTION_DECO_RING = `
  <svg class="hero-deco hero-deco--accent" viewBox="0 0 180 180" fill="none">
    <circle class="hero-deco-ring" cx="90" cy="90" r="62" />
    <circle class="hero-deco-ring hero-deco-ring--inner" cx="90" cy="90" r="38" />
    <path class="hero-deco-spark" d="M90 24v28M90 128v28M24 90h28M128 90h28" />
  </svg>`;

const SECTION_DECO_BLOB_A = `
  <svg class="hero-deco hero-deco--blob-a" viewBox="0 0 240 240" fill="none">
    <path class="hero-deco-blob" d="M58 128c-28-36-8-88 42-98 34-7 72 12 88 44 18 36-2 84-44 98-36 12-74-2-86-44Z" />
  </svg>`;

const SECTION_DECO_BLOB_B = `
  <svg class="hero-deco hero-deco--blob-b" viewBox="0 0 200 200" fill="none">
    <path class="hero-deco-blob hero-deco-blob--soft" d="M42 104c-18-30 6-68 46-74 28-4 56 14 64 42 10 34-14 66-48 72-30 5-54-16-62-40Z" />
  </svg>`;

const SECTION_DECO_VARIANTS = {
  v0: `
    ${SECTION_DECO_BLOB_A}
    ${SECTION_DECO_RING}
    <span class="hero-deco-dot hero-deco-dot--1"></span>
    <span class="hero-deco-dot hero-deco-dot--3"></span>
    <span class="hero-deco-plus hero-deco-plus--1">+</span>
  `,
  v1: `
    ${SECTION_DECO_BLOB_B}
    <span class="hero-deco-dot hero-deco-dot--2"></span>
    <span class="hero-deco-plus hero-deco-plus--2">+</span>
    <span class="hero-deco-plus hero-deco-plus--1">+</span>
  `,
  v2: `
    ${SECTION_DECO_BLOB_A}
    ${SECTION_DECO_BLOB_B}
    ${SECTION_DECO_RING}
    <span class="hero-deco-dot hero-deco-dot--1"></span>
    <span class="hero-deco-dot hero-deco-dot--2"></span>
  `,
  footer: `
    <span class="hero-deco-dot hero-deco-dot--2"></span>
  `,
};

const SECTION_DECO_BY_ID = {
  about: "v0",
  skills: "v1",
  projects: "v2",
  journey: "v0",
  contact: "v1",
};

function buildSectionDecoLayer(variant) {
  const layer = document.createElement("div");
  layer.className = `section-deco-layer section-deco-layer--${variant}`;
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = `
    <div class="section-bg-glow"></div>
    <div class="section-grid-pattern"></div>
    <div class="section-vectors">${SECTION_DECO_VARIANTS[variant] || SECTION_DECO_VARIANTS.v0}</div>
  `;
  return layer;
}

function initSectionBackgrounds() {
  let fallbackIndex = 0;

  document.querySelectorAll("section.reveal-section, footer.reveal-section").forEach((section) => {
    if (section.querySelector(".section-deco-layer")) return;

    const isFooter = section.tagName === "FOOTER";
    const variant = isFooter
      ? "footer"
      : SECTION_DECO_BY_ID[section.id] || `v${fallbackIndex++ % 3}`;

    section.insertBefore(buildSectionDecoLayer(variant), section.firstChild);
  });
}

function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll('#mainNavbar a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("text-brand", isActive);
          link.classList.toggle("opacity-100", isActive);
          link.classList.toggle("opacity-70", !isActive);
        });
      });
    },
    { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

window.initPortfolioAnimations = function initPortfolioAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = createRevealObserver();

  document.querySelectorAll("#projectsGrid .project-card, #featuredProjectsGrid .project-card").forEach((card, index) => {
    registerReveal(card, observer, { delay: (index % 6) * 0.08 });
  });
};

function initProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal || !window.PROJECTS_DATA) return;

  const els = {
    slider: document.getElementById("modalImageSlider"),
    sliderTrack: document.getElementById("modalSliderTrack"),
    sliderPrev: document.getElementById("modalSliderPrev"),
    sliderNext: document.getElementById("modalSliderNext"),
    sliderCounter: document.getElementById("modalSliderCounter"),
    sliderDots: document.getElementById("modalSliderDots"),
    meta: document.getElementById("modalProjectMeta"),
    title: document.getElementById("modalProjectTitle"),
    summary: document.getElementById("modalProjectSummary"),
    tech: document.getElementById("modalProjectTech"),
    githubBtn: document.getElementById("modalProjectLinkBtn"),
    projectLinkIcon: document.getElementById("modalProjectLinkIcon"),
    projectLinkLabel: document.getElementById("modalProjectLinkLabel"),
    videoContainer: document.getElementById("modalVideoContainer"),
    videoWrap: document.getElementById("modalVideoWrap"),
    videoPlaceholder: document.getElementById("modalVideoPlaceholder"),
    about: document.getElementById("modalAbout"),
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

  const thumbBase = "assets/img/projects/thumbnail/";
  let currentSlide = 0;
  let slideCount = 0;

  function getImageSrc(imagePath) {
    if (!imagePath) return "";
    if (imagePath.startsWith("assets/") || imagePath.startsWith("/")) {
      return imagePath;
    }
    return `${thumbBase}${imagePath}`;
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

  function renderTech(items = []) {
    if (!els.tech) return;
    els.tech.innerHTML = items
      .map((item) => `<span class="tech-tag">${item}</span>`)
      .join("");
  }

  function renderProjectLink(project) {
    const link = getProjectLink(project);

    if (!els.githubBtn) return;

    if (!link) {
      els.githubBtn.classList.add("hidden");
      els.githubBtn.removeAttribute("href");
      return;
    }

    els.githubBtn.href = link.url;
    els.githubBtn.classList.remove("hidden");

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

    if (els.sliderDots) {
      els.sliderDots.querySelectorAll(".slider-dot").forEach((dot, index) => {
        dot.classList.toggle("is-active", index === currentSlide);
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
    slideCount = uniqueImages.length || 1;
    currentSlide = 0;

    els.slider.classList.toggle("is-single", slideCount <= 1);

    els.sliderTrack.innerHTML = uniqueImages
      .map(
        (img) =>
          `<div class="slider-slide"><img src="${getImageSrc(img)}" alt="${title}" loading="lazy" /></div>`
      )
      .join("");

    if (els.sliderDots) {
      els.sliderDots.innerHTML = "";
      if (slideCount > 1) {
        uniqueImages.forEach((_, index) => {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = `slider-dot${index === 0 ? " is-active" : ""}`;
          dot.setAttribute("aria-label", `Go to image ${index + 1}`);
          dot.addEventListener("click", (event) => {
            event.stopPropagation();
            goToSlide(index);
          });
          els.sliderDots.appendChild(dot);
        });
      }
    }

    updateSliderPosition();
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

  function isPortraitVideo(url, project) {
    if (project?.videoPortrait) return true;
    return /shorts\//i.test(url || "");
  }

  function getVideoEmbedUrl(url) {
    const embedUrl = normalizeYoutubeEmbed(url);
    if (!embedUrl) return "";
    const separator = embedUrl.includes("?") ? "&" : "?";
    return `${embedUrl}${separator}autoplay=1&mute=1&playsinline=1`;
  }

  function renderVideo(videoUrl, project) {
    if (!els.videoContainer || !els.videoPlaceholder) return;

    els.videoContainer.innerHTML = "";
    const portrait = isPortraitVideo(videoUrl, project);
    els.videoWrap?.classList.toggle("is-portrait", portrait);
    els.videoContainer.classList.toggle("is-portrait", portrait);

    if (!videoUrl) {
      els.videoContainer.classList.add("hidden");
      els.videoPlaceholder.classList.remove("hidden");
      els.videoWrap?.classList.remove("is-portrait");
      return;
    }

    els.videoContainer.classList.remove("hidden");
    els.videoPlaceholder.classList.add("hidden");
    els.videoContainer.innerHTML = `
      <iframe
        src="${getVideoEmbedUrl(videoUrl)}"
        title="Project demo video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }

  function openModal(projectId) {
    const project = PROJECTS_DATA[projectId];
    if (!project) return;

    renderSlider(project.gallery || [project.img], project.title);

    if (els.meta) els.meta.textContent = `${project.tag} · ${project.year} · ${project.org}`;
    if (els.title) els.title.textContent = project.title;
    if (els.summary) els.summary.textContent = project.summary;
    if (els.about) els.about.textContent = getAboutText(project);

    toggleTextSection(els.howItWorksSection, els.howItWorks, project.howItWorks);
    toggleListSection(els.contributionsSection, els.contributions, project.contributions);
    toggleListSection(els.featuresSection, els.features, project.features);
    toggleListSection(els.challengesSection, els.challenges, project.challenges);
    toggleListSection(els.resultsSection, els.results, project.results);

    renderTech(project.tech);
    renderVideo(project.video, project);

    renderProjectLink(project);

    modal.classList.remove("hidden");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    currentSlide = 0;
    if (els.videoContainer) {
      els.videoContainer.innerHTML = "";
      els.videoContainer.classList.add("hidden");
      els.videoContainer.classList.remove("is-portrait");
    }
    if (els.videoWrap) els.videoWrap.classList.remove("is-portrait");
    if (els.videoPlaceholder) els.videoPlaceholder.classList.remove("hidden");
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
    openModal(projectId);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      const trigger = event.target.closest(".project-card-trigger");
      if (!trigger || event.target.closest("#projectModal")) return;

      event.preventDefault();
      openModal(trigger.getAttribute("data-project-id"));
    }

    if (!modal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key === "ArrowLeft") goToSlide(currentSlide - 1);
    if (event.key === "ArrowRight") goToSlide(currentSlide + 1);
  });

  modal.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });
}
