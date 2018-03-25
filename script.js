let openMenu = document.querySelector (".header__menu");
let closeMenu = document.querySelector(".header__close");
let menu = document.querySelector (".main__menu__maximized");
let content = document.querySelector (".main__content");

openMenu.addEventListener("click", () => {
    menu.classList.add("js-opened")
    openMenu.classList.add("js-hide")
    content.classList.add("js-top")
    closeMenu.classList.add("js-show")
    
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("js-opened")
    closeMenu.classList.remove("js-show")
    openMenu.classList.remove("js-hide")
    content.classList.remove("js-top")
});