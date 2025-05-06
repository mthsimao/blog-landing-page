document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      const currentDropdown = btn.nextElementSibling;
      const arrowImg = btn.querySelector(".img-arrow");

      // Fecha todos os dropdowns
      document.querySelectorAll(".dropdown-content").forEach((drop) => {
        if (drop !== currentDropdown && !drop.classList.contains("hidden")) {
          drop.classList.add("hidden");
          drop.classList.remove("block");
        }
      });

      // Reseta todas as setas
      document.querySelectorAll(".dropbtn .img-arrow").forEach((img) => {
        img.style.transform = "rotate(0deg)";
        img.style.transition = "transform 0.2s";
      });

      // Alterna o dropdown atual
      if (currentDropdown.classList.contains("hidden")) {
        currentDropdown.classList.remove("hidden");
        currentDropdown.classList.add("block");
        if (arrowImg) {
          arrowImg.style.transform = "rotate(180deg)";
          arrowImg.style.transition = "transform 0.2s";
        }
      } else {
        currentDropdown.classList.add("hidden");
        currentDropdown.classList.remove("block");
        if (arrowImg) {
          arrowImg.style.transform = "rotate(0deg)";
          arrowImg.style.transition = "transform 0.2s";
        }
      }
    });
  });

  // Fecha dropdowns ao clicar fora
  document.addEventListener("click", function (e) {
    const isDropdown = e.target.closest(".dropdown");
    if (!isDropdown) {
      document.querySelectorAll(".dropdown-content").forEach((drop) => {
        if (!drop.classList.contains("hidden")) {
          drop.classList.add("hidden");
        }
      });

      // Reseta todas as setas ao clicar fora
      document.querySelectorAll(".dropbtn .img-arrow").forEach((img) => {
        img.style.transform = "rotate(0deg)";
        img.style.transition = "transform 0.2s";
      });
    }
  });
});

// Mudar imagens da setinha do menu
// Define os caminhos das imagens substitutas para telas maiores
const arrowImagesMap = new Map();

// Função para trocar as imagens com base na largura da tela
function updateArrowImages() {
  const isLargeScreen = window.innerWidth >= 768;

  arrowImagesMap.forEach((srcs, img) => {
    img.src = isLargeScreen ? srcs.large : srcs.original;
  });
}

// Salva os srcs originais ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".img-arrow");

  images.forEach((img) => {
    const originalSrc = img.getAttribute("src");
    const largeSrc = img.getAttribute("data-large-src");

    // Guarda o src original e o src alternativo em um Map
    arrowImagesMap.set(img, {
      original: originalSrc,
      large: largeSrc,
    });
  });

  // Aplica a troca de imagem conforme a largura da tela
  updateArrowImages();
});

// Atualiza as imagens ao redimensionar a janela
window.addEventListener("resize", updateArrowImages);

// mudar img do main

let imgEditor = document.querySelector(".img-editor");
let imgLaptop = document.querySelector(".img-laptop");

function changeImgs() {
  if (window.innerWidth <= 768) {
    imgEditor.src = "/images/illustration-editor-mobile.svg";
    imgEditor.classList.remove("w-[500px]");
    imgEditor.classList.add("w-[410px]");
    imgLaptop.src = "/images/illustration-laptop-mobile.svg";
  } else {
    imgEditor.src = "/images/illustration-editor-desktop.svg";
    imgEditor.classList.add("w-[500px]");
    imgEditor.classList.remove("w-[410px]");
    imgLaptop.src = "/images/illustration-laptop-desktop.svg";
    imgLaptop.classList.add("w-[500px]");
  }
}

window.addEventListener("DOMContentLoaded", changeImgs);
window.addEventListener("resize", changeImgs);

// menu hamburguer

let menuHamburguer = document.querySelector(".menu-hamburguer");
let boxMenu = document.querySelector(".box-menu");
let img = document.querySelector("#icon-hamburguer");

function removeHiddenMenu() {
  let res = window.innerWidth

  if(res >= 768) {
    boxMenu.classList.remove('hidden')
  } else {
    boxMenu.classList.add('hidden')
  }
}

window.addEventListener('DOMContentLoaded', removeHiddenMenu)
window.addEventListener('resize', removeHiddenMenu)

function check() {
  if (boxMenu.classList.contains("hidden")) {
    img.src = "/images/icon-hamburger.svg";
  } else {
    img.src = "/images/icon-close.svg";
  }
}

menuHamburguer.addEventListener("click", () => {
  boxMenu.classList.toggle("hidden");
  check();
});

