/* Update every public destination here. Empty values intentionally remain inactive. */
const links = {
  gameGithub: "https://github.com/kusaka0914/SlimesSpaceTravel",
  github: "https://github.com/kusaka0914",
  gameplayVideo: "https://youtu.be/shC_BbZxERA",
  itch: "https://kusaka0914.itch.io/slimesspacetravel",
  email: "mailto:takumi.090414528@gmail.com",
  skyRegalia: "",
  skyTravel: ""
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const url = links[element.dataset.link];
  if (!url) {
    element.removeAttribute("href");
    element.setAttribute("aria-disabled", "true");
    element.title = "作品ページを準備中です";
    element.classList.add("is-disabled");
  } else {
    element.href = url;
    element.removeAttribute("aria-disabled");
    element.classList.remove("is-disabled");
  }
});

document.querySelectorAll("[data-image]").forEach((slot) => {
  const image = new Image();
  image.src = slot.dataset.image;
  image.alt = slot.dataset.alt || "ゲーム画面";
  image.onload = () => {
    image.loading = slot.closest(".hero") ? "eager" : "lazy";
    slot.replaceChildren(image);
    slot.classList.add("has-image");
  };
});

const logo = new Image();
logo.src = "assets/images/slimes-space-travel-logo.png";
logo.alt = "Slime's Space Travel";
logo.onload = () => {
  logo.className = "game-logo";
  const heroTitle = document.querySelector("[data-hero-title]");
  if (heroTitle) heroTitle.replaceChildren(logo.cloneNode());
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

// Keep header, footer, and back-to-top navigation consistent, including keyboard focus.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  const hash = link.getAttribute("href");
  const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
  if (!target) return;
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button > 0) return;
    event.preventDefault();
    if (window.location.hash !== hash) window.history.pushState(null, "", hash);
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start"
    });
  });
});

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
