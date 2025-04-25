//MENU HAMBURGUESA

const menu = document.querySelector(".menu-horizontal");
const openMenuBtn = document.querySelector(".open-menu");

//Funcion

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);