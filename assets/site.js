/*
 * SWRP site settings
 * Replace the example URLs below with your real community links.
 */
const SWRP_CONFIG = {
  discord: "https://discord.gg/euyWGqaeHQ",
  fivem: "https://cfx.re/join/REPLACE_WITH_YOUR_CODE",
  store: "https://discord.gg/euyWGqaeHQ",
  applications: "https://discord.gg/euyWGqaeHQ"
};

document.querySelectorAll("[data-config-link]").forEach((link) => {
  const key = link.dataset.configLink;
  const destination = SWRP_CONFIG[key];

  if (destination && !destination.includes("REPLACE_WITH")) {
    link.href = destination;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("SWRP setup needed: add your real " + key + " link in assets/site.js.");
    });
  }
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a[data-page]").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector("[data-form-message]");
    if (message) {
      message.textContent = "This is a website demo form. Connect it to your Discord application system or a form service before accepting applications.";
      message.hidden = false;
    }
  });
});
