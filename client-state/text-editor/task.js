let textarea = document.getElementById('editor')
let clear = document.querySelector('.clear')

textarea.addEventListener('keyup', function () {
    localStorage.setItem('value', textarea.value)
})

clear.addEventListener('click', function () {
    localStorage.removeItem('value')
    textarea.value = '';
})

localStorage.getItem('value') !== null
    ? textarea.value = localStorage.getItem('value')
    : textarea.value = '';