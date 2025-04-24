document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  function getToggleClass() {
    return window.innerWidth > 768 ? "openedLink" : "openedLink768";
  }

  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-content").forEach((drop) => {
      drop.style.display = "none";
    });
    dropdownButtons.forEach((btn) => {
      btn.classList.remove("openedLink", "openedLink768");
    });
  }

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
