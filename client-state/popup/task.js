const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close.modal__close_times');

document.addEventListener('DOMContentLoaded', () => {
    const cookie = getCookie('modal__close');
    if (cookie === 'yes') {
        modal.classList.remove('modal_active');
    }
    else {
        modal.classList.add('modal_active');
        close.addEventListener('click', () => {
            modal.classList.remove('modal_active');
            setCookie('modal__close', 'yes');
        })
    }
})

function getCookie(name) {
    if (document.cookie.length > 0) {
        const pair = document.cookie.split('; ')
        const cookie = pair.find(p => p.startsWith(name + '='))
        return cookie.substring(name.length + 1)
    }
    return null;
}
function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}