let rotat = Array.from(document.querySelectorAll('.rotator__case'));
let current = rotat.findIndex(i => {
    i.classList.contains('rotator__case_active')
})

remove = () => {
    rotat.forEach(el => {
        el.classList.remove('rotator__case_active');
    });
}

add = (i) => {
    rotat[i].classList.add('rotator__case_active');
}

setInterval(() => {
    remove(current);
    rotator = current === rotat.length - 1 ? current = 0 : current++;
    add(current);

}, 1000);