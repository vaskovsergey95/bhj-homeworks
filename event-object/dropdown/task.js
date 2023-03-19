let click = document.querySelector('.dropdown__list')
let item = Array.from(document.querySelectorAll('.dropdown__item'))
let value = document.querySelector('.dropdown__value')


onclick = () => {
    click.classList.toggle('dropdown__list_active')
}

item.forEach((elem) => {
    elem.onclick = () => {
        value.textContent = elem.textContent
        return false;
    }
});





