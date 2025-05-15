//MENU HAMBURGUESA

const menu = document.querySelector(".menu-horizontal");
const openMenuBtn = document.querySelector(".open-menu");

//Funcion

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);


document.addEventListener('DOMContentLoaded', function() {
  // Cargar idioma guardado
  const savedLang = localStorage.getItem('language') || 'es';
  toggleLanguage(savedLang, false);

  // Configurar botón
  document.getElementById('language-toggle').addEventListener('click', () => {
      const newLang = localStorage.getItem('language') === 'es' ? 'en' : 'es';
      toggleLanguage(newLang);
  });
});

function toggleLanguage(lang, save = true) {
  // Actualizar textos
  document.querySelectorAll('[data-lang-es], [data-lang-en]').forEach(element => {
      const text = element.getAttribute(`data-lang-${lang}`);
      if(text) {
          element.innerHTML = text.replace(/<br>/g, '<br>');
      }
  });

  // Actualizar atributo lang
  document.documentElement.lang = lang;

  // Guardar preferencia
  if(save) {
      localStorage.setItem('language', lang);
  }

  // Actualizar términos y condiciones
  if(window.location.pathname.includes('terms-conditions')) {
      document.title = lang === 'es' ? 'Terminos y condiciones' : 'Terms and Conditions';
  } else {
      document.title = lang === 'es' ? 
          'PlantSync – Cuida tus plantas con tecnología inteligente' : 
          'PlantSync – Smart plant care technology';
  }
}