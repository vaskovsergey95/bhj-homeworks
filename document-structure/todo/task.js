let taskInput = document.getElementById('task__input');
let taskAdd = document.getElementById('tasks__add');
let taskList = document.getElementById('tasks__list');


let tasksButton = () => {
    taskAdd.addEventListener('click', (e) => {
        if (taskInput.value.trim().length > 0) {
            e.preventDefault();
            taskList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
            )
        }

        let Remove = Array.from(taskList.children);
        Remove.forEach(el => {
            el.lastElementChild.addEventListener('click', e => {
                e.preventDefault();
                if (Remove.length > 0) {
                    e.target.closest('.task').remove()
                }

            })
        })
    })
}
tasksButton();


