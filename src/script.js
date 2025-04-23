document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('.dropbtn');

  dropdownButtons.forEach(btn => {
    btn.addEventListener('click', function (event) {
      event.preventDefault();

      const currentDropdown = btn.nextElementSibling;

      // Fecha todos os dropdowns e remove 'openedLink' dos outros botões
      document.querySelectorAll('.dropdown-content').forEach(drop => {
        if (drop !== currentDropdown) {
          drop.style.display = 'none';
        }
      });

      dropdownButtons.forEach(button => {
        if (button !== btn) {
          button.classList.remove('openedLink');
        }
      });

      // Alterna visibilidade e classe com toggle
      const isOpen = currentDropdown.style.display === 'block';
      currentDropdown.style.display = isOpen ? 'none' : 'block';
      btn.classList.toggle('openedLink', !isOpen);
    });
  });

  // Fecha tudo ao clicar fora
  document.addEventListener('click', function (e) {
    const isDropdown = e.target.closest('.dropdown');
    if (!isDropdown) {
      document.querySelectorAll('.dropdown-content').forEach(drop => {
        drop.style.display = 'none';
      });
      dropdownButtons.forEach(button => {
        button.classList.remove('openedLink');
      });
    }
  });
});