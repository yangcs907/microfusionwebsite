const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".site-nav__link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));

const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const navBackdrop = document.getElementById("navBackdrop");
const navClose = document.getElementById("navClose");

function openNav() {
  if (!mobileNav || !navBackdrop || !navToggle) return;

  mobileNav.hidden = false;
  navBackdrop.hidden = false;

  requestAnimationFrame(() => mobileNav.classList.add("is-open"));

  navToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeNav() {
  if (!mobileNav || !navBackdrop || !navToggle) return;

  mobileNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";

  window.setTimeout(() => {
    mobileNav.hidden = true;
    navBackdrop.hidden = true;
  }, 250);
}

navToggle?.addEventListener("click", openNav);
navClose?.addEventListener("click", closeNav);
navBackdrop?.addEventListener("click", closeNav);

mobileNav?.addEventListener("click", (e) => {
  const target = e.target;
  if (target instanceof Element && target.matches(".mobile-nav__link")) {
    closeNav();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileNav && !mobileNav.hidden) {
    closeNav();
  }
});