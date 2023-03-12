let slide = Array.from(document.querySelectorAll('.slider__item'));
let slider_prev = document.querySelector('.slider__arrow_prev');
let slider_next = document.querySelector('.slider__arrow_next');

let slide_active = 0;

slider_next.onclick = () => {
    slide[slide_active].classList.remove('slider__item_active')
    slide_active === slide.length - 1 ? slide_active = 0 : slide_active++;
    slide[slide_active].classList.add("slider__item_active");

}

slider_prev.onclick = () => {
    slide[slide_active].classList.remove('slider__item_active')
    slide_active === 0 ? slide_active = slide.length - 1 : slide_active--;
    slide[slide_active].classList.add("slider__item_active");

}

