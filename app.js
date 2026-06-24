const navbar = document.querySelector("#navbar");
const openButton = document.querySelector("#open__button");
const closeButton = document.querySelector("#close__button");

const media = window.matchMedia("(width < 450px)");

function updateNavbar(event) {
  const isMobile = event.matches;
  // console.log(isMobile);
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

// Accordion
function initAccordion() {
  const root = document.querySelector(".faqs");
  if (!root) return;

  const items = document.querySelectorAll(".accordion__item");
  // console.log(items);
  const triggers = root.querySelectorAll(".accordion__trigger");
  // console.log(triggers);

  items[0].classList.add("active");
  // console.log(items[0]);
  triggers[0].setAttribute("aria-expanded", "true");

  items.forEach((item) => {
    const trigger = item.querySelector(".accordion__trigger");
    // console.log(trigger);
    trigger.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      // console.log(isActive);
      items.forEach((itm) => {
        // console.log(itm);
        itm.classList.remove("active");
        itm.querySelector(".accordion__trigger");
        itm.setAttribute("aria-expanded", "false");
      });
      if (!isActive) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}
initAccordion();
