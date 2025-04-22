let btn = document.querySelector("#dropd");
let content = document.querySelector("#menu");
let imgHamburguer = document.querySelector("#img1");

dropd.addEventListener("click", () => {
  content.classList.toggle("visible");
  if (content.classList.contains("visible")) {
    imgHamburguer.src = "/images/icon-close.svg";
  } else {
    imgHamburguer.src = "/images/icon-hamburger.svg";
  }
  content.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  //click listener on the document
  document.querySelectorAll(".dropdown-content").forEach(function (el) {
    if (el !== event.target) el.classList.remove("show");
    // close any showing dropdown that isn't the one just clicked
  });
  if (event.target.matches(".dropbtn")) {
    event.target
      .closest(".dropdown")
      .querySelector(".dropdown-content")
      .classList.toggle("show");
  }
  // if this is a dropdown button being clicked, toggle the show class
});
