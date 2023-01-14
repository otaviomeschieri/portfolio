const nav = document.querySelector(".menu");
const btnMenu = document.querySelector(".menu__botao");
const menu = document.querySelector(".menu__list");

function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle("active");
    menuMobile();
}

function menuMobile() {
    let icone = document.querySelector(".material-symbols-outlined");
    let trocaTexto = document.querySelector(".menu__botao");

    if (icone.innerHTML === "menu") {
        icone.innerHTML = "close";
    } else {
        icone.innerHTML = "menu"
    }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

function locationreload() {
    location.reload();
}