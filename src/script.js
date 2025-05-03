document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      const currentDropdown = btn.nextElementSibling;

      // Fecha todos os dropdowns com animação
      document.querySelectorAll(".dropdown-content").forEach((drop) => {
        if (drop !== currentDropdown && !drop.classList.contains("hidden")) {
          drop.classList.add("opacity-0", "scale-95");
          setTimeout(() => {
            drop.classList.add("hidden");
          }, 200); // Tempo igual ao duration do Tailwind
        }
      });

      // Alterna o dropdown atual
      if (currentDropdown.classList.contains("hidden")) {
        currentDropdown.classList.remove("hidden");
        // Força reflow para garantir que a transição seja aplicada
        void currentDropdown.offsetWidth;
        currentDropdown.classList.remove("opacity-0", "scale-95");
      } else {
        currentDropdown.classList.add("opacity-0", "scale-95");
        setTimeout(() => {
          currentDropdown.classList.add("hidden");
        }, 200);
      }
    });
  });

  // Fecha dropdowns ao clicar fora
  document.addEventListener("click", function (e) {
    const isDropdown = e.target.closest(".dropdown");
    if (!isDropdown) {
      document.querySelectorAll(".dropdown-content").forEach((drop) => {
        if (!drop.classList.contains("hidden")) {
          drop.classList.add("opacity-0", "scale-95");
          setTimeout(() => {
            drop.classList.add("hidden");
          }, 200);
        }
      });
    }
  });
});

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
