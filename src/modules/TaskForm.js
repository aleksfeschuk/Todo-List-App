export default class TaskForm {
    constructor(taskManager, taskRenderer) {
        this.taskManager = taskManager;
        this.taskRenderer = taskRenderer;
        this.addTaskForm = document.getElementById('add-task-form');
        this.titleElem = document.getElementById('title');
        this.descriptionElem = document.getElementById('description');
        this.dateElem = document.getElementById("date");
        this.timeElem = document.getElementById("time");
    }

    init() {
        this.addTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });

        const clearBtn = document.querySelector('.clear');
        clearBtn.addEventListener('click', this.clearFields.bind(this));
    }

    addTask() {
        const title = this.titleElem.value,
            description = this.descriptionElem.value,
            date = this.dateElem.value,
            time = this.timeElem.value;

        // if (title === "" || description === "" || date === "" || time === "") {
        //     alert('Please fill all the fields');
        //     return;
        // }

        this.taskManager.addTask(title, description, date, time);
        this.taskRenderer.renderTasks();
        this.clearFields();
    }

    clearFields() {
        this.titleElem.value = "";
        this.descriptionElem.value = "";
        this.dateElem.value = "";
        this.timeElem.value = "";
        this.dateElem.nextElementSibling.innerHTML = 'due date';
        this.timeElem.nextElementSibling.innerHTML = 'due time';
    }
}