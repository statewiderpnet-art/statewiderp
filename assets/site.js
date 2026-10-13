```javascript
// SWRP — Statewide Roleplay
// Main website configuration

const SWRP_CONFIG = {
    discord: "https://discord.gg/euyWGqaeHQ",
    storeCode: "https://discord.gg/euyWGqaeHQ",
    staffApplications: "https://discord.gg/euyWGqaeHQ"
};

// Apply links automatically to matching elements
document.addEventListener("DOMContentLoaded", () => {
    // Discord links
    document.querySelectorAll(
        '[data-link="discord"], .discord-link'
    ).forEach(link => {
        link.href = SWRP_CONFIG.discord;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    // Store code links
    document.querySelectorAll(
        '[data-link="store-code"], .store-code-link'
    ).forEach(link => {
        link.href = SWRP_CONFIG.storeCode;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    // Staff application links
    document.querySelectorAll(
        '[data-link="staff-applications"], .staff-applications-link'
    ).forEach(link => {
        link.href = SWRP_CONFIG.staffApplications;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    // Mobile navigation
    const menuButton = document.querySelector(
        ".menu-toggle, .nav-toggle, #menu-toggle"
    );

    const navigation = document.querySelector(
        ".nav-links, .navbar-links, #nav-links"
    );

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("active");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });
    }
});
```
