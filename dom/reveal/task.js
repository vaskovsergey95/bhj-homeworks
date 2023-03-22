const rev = Array.from(document.querySelectorAll('.reveal'));

function isVisible(e) {
    const {top, bottom} = e.getBoundingClientRect();
    return (!(bottom < 0 && top > window.innerHeight));
}

rev.forEach(elem => {
    window.addEventListener('scroll', () => {
        isVisible(elem) ? elem.classList.toggle('reveal_active') : false;
    })
})
