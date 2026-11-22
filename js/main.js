/* =========================================================
   LIGHT LAMP STUDIOS: site script
   ---------------------------------------------------------
   PASTE YOUR LINKS HERE. Put each full link between the quotes.
   Any button whose link is still empty shows "Coming soon".
   ========================================================= */
const LINKS = {
  discord:    "",   // e.g. "https://discord.gg/xxxxxxx"
  youtube:    "",   // e.g. "https://www.youtube.com/@LightLampStudios"
  tiktok:     "",   // e.g. "https://www.tiktok.com/@lightlampstudios"
  facebook:   "",   // e.g. "https://www.facebook.com/lightlampstudios"
  instagram:  "",   // e.g. "https://www.instagram.com/lightlampstudios/"
  googleplay: ""    // your Google Play developer page link
};

/* ---- Below this line you don't need to change anything ---- */
document.querySelectorAll("[data-link]").forEach((a) => {
  const url = (LINKS[a.dataset.link] || "").trim();
  if (url) {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  } else {
    a.classList.add("is-coming");
    a.setAttribute("aria-disabled", "true");
    a.addEventListener("click", (e) => e.preventDefault());
  }
});

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  document.querySelectorAll(".main-nav a").forEach((a) =>
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Fade sections in as you scroll
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}

// Keep the copyright year current
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
