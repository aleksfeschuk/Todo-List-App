class ToDoApp {
    constructor() {
        this.tasks = [];
        this.projects = [];
        this.loadFromLocalStorage();
        this.initEventListeners();
        this.renderProjects();
        this.renderTasks();
    }


// Initialize event listeners for btn, inputs, etc.

initEventListeners() {

    //event listener for adding a new project

    this.addProjectButton = document.getElementById('add-project-btn');
    this.addProjectButton.addEventListener('click', () => this.showProjectPopup());

    this.confirmButton = document.getElementById('confirm-btn');
    this.confirmButton.addEventListener('click', () => this.createProject());

    this.cancelButton = document.getElementById('cancel-btn');
    this.cancelButton.addEventListener('click', () => this.hideProjectPopup());

    //event listener for adding a new task

    this.addTaskButton = document.getElementById('add-task-btn');
    this.addTaskButton.addEventListener('click', () => this.showTaskPopup());

    this.taskPopupCloseButton = document.getElementById('task-popup-close');
    this.taskPopupCloseButton.addEventListener('click', () => this.hideTaskPopup());

    this.taskForm = document.getElementById('task-form');
    this.taskForm.addEventListener('submit', (e) => this.handleTaskFormSubmit(e));


    // Event delegation for task delete and complete

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-delete')) {
            const taskId = e.target.closest('.task-card').getAttribute('data-id');
            this.deleteTask(taskId);
        } else if (e.target.classList.contains('task-complete')) {
            const taskId = e.target.closest('.task-card').getAttribute('data-id');
            this.deleteTask(taskId);
        } else if (e.target.classList.contains('task-edit')) {
            const taskId = e.target.closest('.task-edit').getAttribute('data-id');
            this.deleteTask(taskId);
        }
    });

}

    showProjectPopup() {
        document.getElementById('project-popup').style.display = 'block';
    }

    hideProjectPopup() {
        document.getElementById('project-popup').style.display = 'none';
    }

    // method to create a new project
    createProject() {
        const projectName = document.getElementById('project-input').ariaValueMax;
        if (projectName.trim() !== '') {
            this.projects.push({ name: projectName });
            this.saveToLocalStorage();
            this.renderProjects();
            this.hideProjectPopup();
        }
    }

    // method to render the list of projects


    renderProjects() {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';
        this.projectList.forEach((project, index) => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.innerHTML = `
                <span>${project.name}</span>
                <button class="delete-project" data-id="${index}">&times;</button>
            `;
            projectList.appendChild(projectItem);
        });
    }

    deleteProject(index) {
        this.projects.splice(index, 1);
        this.saveToLocalStorage();
        this.renderProjects();
    }

    // method to add a new task


    addTask(title, description, projectId = null) {
        const task = {
            id: this.tasks.length + 1,
            title,
            description,
            completed: false,
            projectId
        };

        this.tasks.push(task);
        this.saveToLocalStorage();
        this.renderProjects();
    }

    renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.setAttribute('data-id', task.id);

            taskCard.innerHTML = `
                <div class="task-header">
                <h3 class="task-title">${task.title}</h3>
                <button class="task-delete">&times;</button>
                </div>
                <p class="task-description">${task.description}</p>
                <div class="task-actions">
                <button class="task-edit">Edit</button>
                <button class="task-complete">✔</button>
                </div>
            `;


            taskList.appendChild(taskCard);
            if(task.completed) {
                taskCard.classList.add('completed');
            }
        });
    }
    
    // method to handle task form submission

    handleTaskFormSubmit(event) {
        event.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const projectId = document.getElementById('task-project').value || null;

        if (title.trim() !== '' && description.trim() !== '') {
            this.addTask(title, description, projectId);
            this.hideTaskPopup();
        }
    }

    // method to show the task creation popup

    showTaskPopup() {
        document.getElementById('task-popup').style.display = 'block';
    }

    // method hide

    hideProjectPopup() {
        document.getElementById('task-popup').style.display = 'none';
    }

    // method to mark a task as complete

    completeTask(taskId) {
        const task = this.task.find(t => t.id === parseInt(taskId));
        if (task) {
            task.completed = !task.completed;
            this.saveToLocalStorage();
            this.renderTasks();
        }
    }

    // method to delete a task

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== parseInt(taskId));
        this.saveToLocalStorage();
        this.renderTasks();
    }

    // method to edit a task

    editTask(taskId) {
        const task = this.tasks.find(t => t.id === parseInt(taskId));
        if (task) {
            document.getElementById('task-title').value = task.title;
            document.getElementById('task-description').value = task.description;
            document.getElementById('task-id').value = task.id;
            this.showTaskPopup();
        }
    }

    //method to save data to local storage

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    // method to load data from local storage

    loadFromLocalStorage() {
        const tasksFromStorage = localStorage.getItem('tasks');
        const projectsFromStorage = localStorage.getItem('projects');
        if (tasksFromStorage) {
            this.tasks = JSON.parse(tasksFromStorage);
        }
        if (projectsFromStorage) {
            this.projects = JSON.parse(projectsFromStorage);
        }
    }

}


document.addEventListener('DOMContentLoaded', () => {
    const app = new ToDoApp();
});