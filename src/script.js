window.addEventListener("load", function () {
  // wait until the page loads before working with HTML elements
  document.addEventListener("click", function (event) {
    //click listener on the document
    document.querySelectorAll(".dropdown-content").forEach(function (el) {
      if (el !== event.target) el.classList.remove("show");
      // close any showing dropdown that isn't the one just clicked
    });
    if (event.target.matches(".dropbtn")) {
      event.target.closest(".dropdown").querySelector(".dropdown-content").classList.toggle("show");
    }
    // if this is a dropdown button being clicked, toggle the show class
  });
});

