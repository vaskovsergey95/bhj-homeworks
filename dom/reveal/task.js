const rev = Array.from(document.querySelectorAll('.reveal'));
let res;

function isVisible(e) {
    const {top, bottom} = e.getBoundingClientRect();
    if (bottom < 0) {
        res = false;
    } else if (top > window.innerHeight) {
        res = false;
    }
    res = true;
}

for (let i = 0; i < rev.length; i++) {
    isVisible(rev[i])
    window.addEventListener('scroll', () => {
        if (res === true) {
            rev[i].classList.toggle('reveal_active')
        }

    })
}


