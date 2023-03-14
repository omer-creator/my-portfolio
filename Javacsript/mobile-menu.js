const menuToggle = document.querySelector(".Sidebar-class");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
