/* Update every public destination here. Empty values intentionally remain inactive. */
const links = {
  github: "",
  gameplay: "",
  itch: "",
  email: "",
  skyRegalia: "",
  skyTravel: ""
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const url = links[element.dataset.link];
  if (!url) {
    element.removeAttribute("href");
    element.setAttribute("aria-disabled", "true");
    element.title = "公開前に script.js の links を設定してください";
    element.classList.add("is-disabled");
  } else {
    element.href = url;
  }
});

document.querySelectorAll("[data-image]").forEach((slot) => {
  const image = new Image();
  image.src = slot.dataset.image;
  image.alt = slot.dataset.alt || "ゲーム画面";
  image.loading = "lazy";
  image.onload = () => { slot.replaceChildren(image); slot.classList.add("has-image"); };
});

const gameTitle = document.querySelector("[data-game-title]");
const logo = new Image();
logo.src = "assets/images/slimes-space-travel-logo.png";
logo.alt = "Slime's Space Travel";
logo.onload = () => {
  logo.className = "game-logo";
  gameTitle.replaceChildren(logo.cloneNode());
  document.querySelector("[data-hero-title]").replaceChildren(logo.cloneNode());
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

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
