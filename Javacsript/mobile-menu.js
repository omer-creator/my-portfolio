const menuToggle = document.querySelector(".Sidebar-class");
const mobileMenu = document.querySelector(".mobile-menu");
const menuItems = document.querySelectorAll(".mobile-menu-items li a");
const closeBtn = document.querySelector('.close-btn');
const header = document.querySelector('header');

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuItems.forEach((link) => {
      link.classList.remove("active");
    });
    item.classList.add("active");
  });
});
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuItems.forEach((link) => {
    link.classList.remove("active");
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
