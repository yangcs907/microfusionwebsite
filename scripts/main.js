const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".site-nav__link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach(section => {
  observer.observe(section);
});

const toggle = document.getElementById("navToggle");
const nav = document.getElementById("siteNav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});