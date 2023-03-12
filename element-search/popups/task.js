let open = document.getElementById('modal_main')
let close = Array.from(document.querySelectorAll('.modal__close'));
let suc = Array.from(document.querySelectorAll('.show-success'));

open.classList.add('modal_active');

close.forEach(elem => {
    elem.onclick = () => {
        open.classList.remove('modal_active')
        document.getElementById('modal_success').classList.remove('modal_active')
    }
})

suc.forEach(elem => {
    elem.onclick = () => {
        document.getElementById('modal_success').classList.add('modal_active')

    }
})

