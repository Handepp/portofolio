document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".project-card").forEach(card => {
        const isUnictiveProject = card.querySelector(".developed-unictive");
        const githubLink = card.querySelector(".github-link");

        if (isUnictiveProject && githubLink) {
            githubLink.classList.add("d-none");
        }
    });
});

document.querySelectorAll('.clickable-card a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});