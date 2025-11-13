// dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");

function openMenu() {
  mobileMenu.classList.remove("opacity-0", "scale-95", "pointer-events-none");
  mobileMenu.classList.add("opacity-100", "scale-100", "pointer-events-auto");
}

function closeMenu() {
  mobileMenu.classList.add("opacity-0", "scale-95", "pointer-events-none");
  mobileMenu.classList.remove(
    "opacity-100",
    "scale-100",
    "pointer-events-auto"
  );
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

// Scroll-based fade in
const fadeEls = document.querySelectorAll(".fade-in-up");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeEls.forEach((el) => io.observe(el));
