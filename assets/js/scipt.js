const hamburguer = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelector(".nav-list li");

hamburguer.addEventListener("click", function(){
    navLinks.classList.toggle("open");
});