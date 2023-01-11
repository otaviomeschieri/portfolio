const nav = document.querySelector(".menu");
const btnMenu = document.querySelector(".menu__botao");
const menu = document.querySelector(".menu__list");

function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle("active");
    // handleClickOutside(menu, () => {
    //     nav.classList.remove("active");
    //     // setAria();
    // });

    menuMobile();
    // setAria();
}

function menuMobile() {
    let icone = document.querySelector(".material-symbols-outlined");
    let trocaTexto = document.querySelector(".menu__botao");
    
    if (icone.innerHTML === "menu") {
        // trocaTexto.innerHTML = "Fechar menu";
        icone.innerHTML = "close";
    } else {
        // trocaTexto.innerHTML = "Abrir menu";
        icone.innerHTML = "menu"
    }

}

// function handleClickOutside(targetElement, callback) {
//     const html = document.documentElement;
//     function handleHTMLClick(event) {
//         if (!targetElement.contains(event.target)) {
//             targetElement.removeAttribute("data-target");
//             html.removeEventListener("click", handleHTMLClick);
//             html.removeEventListener("touchstart", handleHTMLClick);
//             callback();
//         }
//     }
//     if (!targetElement.hasAttribute("data-target")) {
//         html.addEventListener("click", handleHTMLClick);
//         html.addEventListener("touchstart", handleHTMLClick);
//         targetElement.setAttribute("data-target", "");
//     }
// }

// function setAria() {
//     const isActive = nav.classList.contains("active");
//     btnMenu.setAttribute("aria-expanded", isActive);
//     if (isActive) {
//         btnMenu.setAttribute("aria-label", "Fechar Menu");
//     } else {
//         btnMenu.setAttribute("aria-label", "Abrir Menu");
//     }
// }

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

function locationreload() {
    location.reload();
}