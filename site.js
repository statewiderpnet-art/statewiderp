// USRP website starter settings — replace these links with your real community URLs.
const USRP_LINKS = {
  discord: "https://discord.gg/REPLACE_WITH_YOUR_INVITE",
  fivem: "https://cfx.re/join/REPLACE_WITH_YOUR_CODE",
  support: "https://discord.gg/REPLACE_WITH_YOUR_INVITE"
};
document.querySelectorAll("[data-config-link]").forEach((link) => {
  const key = link.dataset.configLink;
  const destination = USRP_LINKS[key];
  if (destination && !destination.includes("REPLACE_WITH")) {
    link.href = destination;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Website setup needed: open assets/site.js and add your real " + key + " URL.");
    });
  }
});
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
