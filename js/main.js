/* Light Lamp Studios — site script
   To turn on a social or store button, paste its full link between the quotes below.
   Empty links show "coming soon" instead of going anywhere. */
const LINKS = {
  discord:    "https://discord.gg/BUcqrMHSyT",
  youtube:    "https://www.youtube.com/@lightlampstudios",
  tiktok:     "",
  facebook:   "https://www.facebook.com/profile.php?id=61596765754368",
  instagram:  "",
  googleplay: ""
};

(function () {
  // Links
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var url = LINKS[a.getAttribute("data-link")];
    if (url) {
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      a.classList.remove("is-coming");
    } else {
      a.classList.add("is-coming");
      a.removeAttribute("href");
      a.setAttribute("role", "link");
      a.setAttribute("aria-disabled", "true");
      a.setAttribute("tabindex", "0");
      var label = a.getAttribute("data-label");
      if (label) a.setAttribute("aria-label", label + " (coming soon)");
    }
  });

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a[href]")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  // The lamp switches on, then lights the rail from the top down
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var orbs = Array.prototype.slice.call(document.querySelectorAll(".rail .orb"));
  function lightUp() {
    document.documentElement.classList.add("lamp-on");
    orbs.forEach(function (o, i) {
      if (reduce) o.classList.add("lit");
      else setTimeout(function () { o.classList.add("lit"); }, 650 + i * 110);
    });
  }
  if (reduce) lightUp(); else setTimeout(lightUp, 250);

  // Footer year
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
