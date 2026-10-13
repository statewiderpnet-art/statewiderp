
const SWRP_CONFIG = {
    discord: "https://discord.gg/euyWGqaeHQ",
    storeCode: "https://discord.gg/euyWGqaeHQ",
    staffApplications: "https://discord.gg/euyWGqaeHQ"
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href*="DISCORD_LINK"]').forEach(link => {
        link.href = SWRP_CONFIG.discord;
    });

    document.querySelectorAll('[data-link="discord"], .discord-link').forEach(link => {
        link.href = SWRP_CONFIG.discord;
    });

    document.querySelectorAll('[data-link="store-code"], .store-code-link').forEach(link => {
        link.href = SWRP_CONFIG.storeCode;
    });

    document.querySelectorAll('[data-link="staff-applications"], .staff-applications-link').forEach(link => {
        link.href = SWRP_CONFIG.staffApplications;
    });

    document.querySelectorAll('a[href*="YOUR_DISCORD"], a[href="#discord"]').forEach(link => {
        link.href = SWRP_CONFIG.discord;
    });
});
