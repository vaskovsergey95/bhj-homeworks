const xhr = new XMLHttpRequest();
const img = document.getElementById('loader');
const item = document.getElementById('items');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json'
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active');
    }
    let currResp = xhr.response['response']['Valute'];
    let arr = Object.values(currResp);
    for (let i = 0; i < arr.length; i++) {

        item.insertAdjacentHTML('beforeEnd',
            '<div class="item"><div class="item__code"></div>' +
            '<div class="item__value"></div>' +
            '<div class="item__currency">руб.</div>' +
            '</div>');

        document.querySelectorAll('.item__code')[i].textContent = arr[i]['CharCode'];
        document.querySelectorAll('.item__value')[i].textContent = arr[i]['Value'];

    }
})
xhr.send();

