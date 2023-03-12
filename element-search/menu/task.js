let click = Array.from(document.querySelectorAll('.menu__link'));
let menu = Array.from(document.querySelectorAll('.menu_sub'));

click.forEach((elem) => {
    elem.onclick = () => {
        menu.forEach((item) => item.classList.remove("menu_active"));
        if (elem.parentElement.querySelector('.menu_sub') !== null) {
            elem.parentElement.querySelector(".menu_sub").classList.add("menu_active");
            return false;

        }

    };
});