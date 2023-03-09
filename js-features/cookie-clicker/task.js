let image = document.getElementById('cookie');
let count = document.getElementById('clicker__counter');
let counter = 0;

image.onclick = function () {
    counter++;
    count.textContent = counter;
    if (counter % 2 === 0) {
        image.width = 150;
    } else image.width = 200;
}



