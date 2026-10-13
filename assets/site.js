// SWRP — Statewide Roleplay website configuration

const SWRP_CONFIG = {
    discord: "https://discord.gg/euyWGqaeHQ",
    store: "https://discord.gg/euyWGqaeHQ",
    applications: "https://discord.gg/euyWGqaeHQ",
    fivem: "https://discord.gg/euyWGqaeHQ"
};

document.addEventListener("DOMContentLoaded", () => {
    // Connect every configured website link
    document.querySelectorAll("[data-config-link]").forEach(link => {
        const linkType = link.dataset.configLink;
        const destination = SWRP_CONFIG[linkType];

        if (destination) {
            link.href = destination;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
    });

    // Set the current year in the footer
    document.querySelectorAll("[data-year]").forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    // Highlight the current page in the navigation
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("[data-page]").forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Mobile navigation menu
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("active");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });
    }
});
