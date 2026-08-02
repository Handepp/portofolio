document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    initScrollReveal();
    initTimelineReveal();
    initActiveNavHighlight();
  } else {
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

function initScrollReveal() {
  document.querySelectorAll(".reveal-section").forEach((section) => {
    const heading = section.querySelector(":scope > .max-w-7xl > :first-child");
    if (heading) {
      heading.classList.add("reveal");
    }

    section.querySelectorAll(".glass-card, .project-card").forEach((card, index) => {
      card.classList.add("reveal");
      card.style.transitionDelay = `${index % 6 * 0.08}s`;
    });

    if (section.id === "about") {
      const gridChildren = section.querySelectorAll(".grid > div");
      gridChildren[0]?.classList.add("reveal", "reveal-left");
      gridChildren[1]?.classList.add("reveal", "reveal-right");
    }

    if (section.id === "contact") {
      section.querySelectorAll(".grid > div").forEach((col, index) => {
        col.classList.add("reveal", index === 0 ? "reveal-left" : "reveal-right");
      });
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initTimelineReveal() {
  document.querySelectorAll("#journey .relative.pl-8 > .relative").forEach((item, index) => {
    item.classList.add("timeline-item");
    item.style.transitionDelay = `${index * 0.12}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
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

  document.querySelectorAll("#projectsGrid .project-card").forEach((card, index) => {
    card.classList.add("reveal");
    card.style.transitionDelay = `${index % 6 * 0.08}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(card);
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
    githubBtn: document.getElementById("modalGithubBtn"),
    videoContainer: document.getElementById("modalVideoContainer"),
    videoPlaceholder: document.getElementById("modalVideoPlaceholder"),
    about: document.getElementById("modalAbout"),
    highlights: document.getElementById("modalHighlights"),
  };

  const thumbBase = "assets/img/projects/thumbnail/";
  let currentSlide = 0;
  let slideCount = 0;

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

  function getAboutText(project) {
    if (project.about) return project.about;
    return project.overview || project.summary || "";
  }

  function getHighlights(project) {
    if (project.highlights?.length) return project.highlights;
    return [
      ...(project.contributions || []).slice(0, 2),
      ...(project.features || []).slice(0, 3),
    ].slice(0, 5);
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
          `<div class="slider-slide"><img src="${thumbBase}${img}" alt="${title}" loading="lazy" /></div>`
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

  function renderVideo(videoUrl) {
    if (!els.videoContainer || !els.videoPlaceholder) return;

    els.videoContainer.innerHTML = "";

    if (!videoUrl) {
      els.videoContainer.classList.add("hidden");
      els.videoPlaceholder.classList.remove("hidden");
      return;
    }

    els.videoContainer.classList.remove("hidden");
    els.videoPlaceholder.classList.add("hidden");
    els.videoContainer.innerHTML = `
      <iframe
        src="${videoUrl}"
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

    renderTech(project.tech);
    renderList(els.highlights, getHighlights(project));
    renderVideo(project.video);

    if (els.githubBtn) {
      const showGithub = Boolean(project.github);
      els.githubBtn.classList.toggle("hidden", !showGithub);
      if (showGithub) els.githubBtn.href = project.github;
    }

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
    }
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
