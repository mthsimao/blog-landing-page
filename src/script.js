// Para os dropdowns dentro do menu
var nav = document.querySelector(".nav");

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  function getToggleClass() {
    return window.innerWidth > 768 ? "openedLink" : "openedLink768";
  }

  // função para fechar todos os dropdowns

  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-content").forEach((drop) => {
      drop.style.display = "none";
    });
    dropdownButtons.forEach((btn) => {
      btn.classList.remove("openedLink", "openedLink768");
    });
  }

  // função para setar escutadores nos botões

  function setupDropdownListeners() {
    dropdownButtons.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        const currentDropdown = btn.nextElementSibling;
        const toggleClass = getToggleClass();

        const isOpen = currentDropdown.style.display === "block";

        // Fecha tudo antes
        closeAllDropdowns();

        // Abre e adiciona a classe correta, se necessário
        if (!isOpen) {
          currentDropdown.style.display = "block";
          btn.classList.add(toggleClass);
        }
      });
    });
  }

  // Fecha ao clicar fora
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      closeAllDropdowns();
    }
  });

  // Detecta resize e reconfigura
  window.addEventListener("resize", () => {
    closeAllDropdowns();
  });

  setupDropdownListeners();
});

// setar a classe "hide" no nav se a página for menor que 768
function setarClassNav() {
  if (!nav) return;

  if (window.innerWidth < 768) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }
}

window.addEventListener('DOMContentLoaded', setarClassNav)
window.addEventListener('resize', setarClassNav)

// mudar as imagens do menu conforme muda a resolução da tela

const updateImages = () => {
  const images = document.querySelectorAll(".image-item");
  let windowView = window.innerWidth;

  if (windowView < 768) {
    images.forEach((a) => {
      const image = a.querySelector("img");
      image.src = "/images/icon-arrow-dark.svg";
    });
  } else {
    images.forEach((a) => {
      const image = a.querySelector("img");
      image.src = "/images/icon-arrow-light.svg";
    });
  }
};

window.addEventListener("load", updateImages);
window.addEventListener("resize", updateImages);

// Abrir e fechar menu

let menuHamburguer = document.querySelector(".menu-hamburguer");
let imgHamburguer = document.querySelector(".img-hamburguer");

// Abre o menu, remove a classe de esconder, e seta a imagem de fechar o menu
function openMenu() {
  nav.classList.remove("hide");
  nav.classList.add("show");
  imgHamburguer.src = "/images/icon-close.svg";
}

// Fecha o menu, remove a classe de mostrar, e seta a imagem original do menu
function closeMenu() {
  nav.classList.remove("show");
  nav.classList.add("hide");
  imgHamburguer.src = "/images/icon-hamburger.svg";
}

// Função para verificar se tem a classe('show')
function verificar() {
  if (nav.classList.contains("show")) {
    openMenu();
  } else {
    closeMenu();
  }
}

// Adicionar um escutador de click no botão
imgHamburguer.addEventListener("click", () => {
  nav.classList.toggle("show");
  verificar();
});
