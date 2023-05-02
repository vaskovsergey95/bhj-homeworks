const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener('submit', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.addEventListener('progress', elem => {
        progress.value = elem.loaded / elem.total;

    const formData = new FormData(form);
    xhr.send(formData);

    elem.preventDefault();
    })
})