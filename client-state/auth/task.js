let form = document.forms[0];
let welcome = document.getElementsByClassName("welcome")[0];
let id = getCookie("id");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const invocation = new XMLHttpRequest();
    const url = 'https://students.netoservices.ru/nestjs-backend/auth';

    if (invocation) {
        let formData = new FormData(form);
        invocation.open("POST", url, true);
        invocation.responseType = 'json';
        invocation.onload = function () {
            let ans = invocation.response;
            if (ans["success"]) {
                welcome.innerHTML = `Добро пожаловать, пользователь #<span id=user_id>${ans["user_id"]}</span>`;
                welcome.classList.add("welcome_active");
                document.cookie = 'id=' + ans["user_id"];
                form.reset();
            } else {
                alert("Неверный логин/пароль");
            }

        }
        invocation.send(formData);
    }
})

if (id) {
    welcome.innerHTML = `Добро пожаловать, пользователь #<span id=user_id>${id}</span>`;
    welcome.classList.add("welcome_active");
}

function getCookie(name) {
    if (document.cookie.length > 0) {
        const pair = document.cookie.split('; ')
        const cookie = pair.find(p => p.startsWith(name + '='))
        return cookie.substring(name.length + 1)
    }
    return null;

}