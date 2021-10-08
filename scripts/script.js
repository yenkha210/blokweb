console.log("hoi");

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
/*Functie mobileMenu voegt een active class toe aan de hamburger en navMenu waardoor het menu opengaat.
Met de active class kun je een x vorm creëren bij de hamburger als je erop klikt.*/ 

var navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
/* De closeMenu functie verwijderd de active class van de navMenu en hamburger waardoor het menu kan sluiten.*/



