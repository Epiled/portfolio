const menuButton = document.querySelector("[data-menu-toggle]");
const menuBar = document.querySelector("[data-menu-bar]");

menuButton.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu__active");
  menuBar.classList.toggle("menu__navigation--open");
});

document.documentElement.onclick = function (event) {
  if (event.target === document.documentElement) {
    document.documentElement.classList.toggle("menu__active");
    menuBar.classList.toggle("menu__navigation--open");
  }
};
