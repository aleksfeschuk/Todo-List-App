export default class TaskRenderer {
    constructor(taskManager) {
        this.taskManager = taskManager;
        this.tasksWrapper = document.querySelector('.tasks-wrapper');
    }

    renderTasks() {
        this.tasksWrapper.innerHTML = "";

        const tasks = this.taskManager.getTasks();

        if (tasks.length === 0) {
            this.tasksWrapper.innerHTML = `<div class="no-tasks">No tasks, Add one now</div>`;
            return;
        }

        tasks.forEach((task) => {
            let expired = task.isExpired() ? "expired" : "";

            this.tasksWrapper.innerHTML += `
                <div class="task">
                    <div class="left">
                        <div class="radio">
                        <ion-icon class="icon" name="checkmark"></ion-icon>
                        </div>
                    </div>
                    <div class="right">
                        <p class="title">${task.title}</p>
                        <p class="description">${task.description}</p>
                        <div class="info ${expired}">
                        <p class="date">
                            <ion-icon name="calendar-outline"></ion-icon>
                            <span>${task.date}</span>
                        </p>
                        <p class="dot">
                            <ion-icon name="ellipse"></ion-icon>
                        </p>
                        <p class="time">
                            <ion-icon name="time-outline"></ion-icon>
                            <span>${task.time}</span>
                        </p>
                        </div>
                    </div>
                </div>
            `;
        });

        this.tasksWrapper.innerHTML += `
            <div class="delete">
                <ion-icon name="trash-outline"></ion-icon>
            </div>
        `;
        this.attachEventListeners();
    }

    attachEventListeners() {
        const tasks = document.querySelectorAll('.task');

        tasks.forEach((taskElement) => {
            taskElement.addEventListener('click', (e) => {
                if (e.target.classList.contains('radio')) {
                    taskElement.classList.toggle('selected');
                    if (document.querySelector('.task.selected')) {
                        document.querySelector('.delete').classList.add('show');
                    } else {
                        document.querySelector('.delete').classList.remove('show');
                    }
                }
            });
        });

        const deleteBtn = document.querySelector('.delete');
        deleteBtn.addEventListener('click', this.deleteTasks.bind(this));
    }

    deleteTasks() {
        const selected = document.querySelectorAll('.task.selected');
        if (selectedTasks.length === 0) return;

        let confirmDelete = confirm("Are you sure you want to delete selected tasks?");
        if (confirmDelete) {
            selectedTasks.forEach((taskElement) => {
                let title = taskElement.querySelector('.title').innerHTML;
                this.taskManager.deleteTasks(title);
            });
            this.renderTasks();
        }
    }
}

