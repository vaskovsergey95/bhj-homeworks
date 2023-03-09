let lost = document.getElementById('lost');
let dead = document.getElementById('dead');


const reload = () => {
    dead.textContent = 0;
    lost.textContent = 0;
}


const getHole = index => {
    return index = document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', function () {
        getHole(i).className.includes('hole_has-mole') ? dead.textContent++ : lost.textContent++;
        if (dead.textContent == 10) {
            alert('Победа!');
            reload();
        }
        if (lost.textContent == 5) {
            alert('Поражение')
            reload();
        }
    });
}