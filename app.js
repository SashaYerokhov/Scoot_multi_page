const navbar = document.querySelector("#navbar");
const openButton = document.querySelector("#open__button");
const closeButton = document.querySelector("#close__button");

const media = window.matchMedia("(width < 450px)");

function updateNavbar(event) {
  const isMobile = event.matches;
  console.log(isMobile);
  if (isMobile) {
    navbar.setAttribute("inert", "");
  } else {
    // desktop device
    navbar.removeAttribute("inert");
  }
}

function openSidebar() {
  navbar.classList.add("show");
  openButton.setAttribute("aria-expanded", true);
  navbar.removeAttribute("inert");
}

function closeSidebar() {
  navbar.classList.remove("show");
  openButton.setAttribute("aria-expanded", false);
  navbar.removeAttribute("inert", "");
}

openButton.addEventListener("click", openSidebar);
closeButton.addEventListener("click", closeSidebar);

updateNavbar(media);
