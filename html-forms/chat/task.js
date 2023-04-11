const widget = document.querySelector('.chat-widget');
widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active')
})


let widgetInput = document.getElementById('chat-widget__input');

const messages = document.querySelector('.chat-widget__messages');

let messagesFromRobot = [
    'Напишите в следующей жизни.',
    'Не пишите нам больше.',
    'Кто тут?',
    'Добрый день! До свидания!',
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать!'
];

widgetInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && widgetInput.value.trim().length > 0) {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
          <div class="message__text">
            ${widgetInput.value}
          </div>
        </div>
      `;
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
            <div class="message__text">
              ${messagesFromRobot[Math.floor(Math.random() * messagesFromRobot.length)]}
            </div>
          </div>
        `;
        widgetInput.value = "";

        messages.lastElementChild.scrollIntoView(false);
    }
})