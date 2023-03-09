let timer = setInterval(function () {
    let start = document.getElementById('timer');
    start = Number(start.textContent--);
    if (start.textContent === 0) {
        clearInterval(timer);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

