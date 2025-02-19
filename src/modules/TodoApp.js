import { ProjectManager } from "./ProjectManager";
import { TaskManager } from "./TaskManager";
import { Storage } from "./Storage";
import { UI } from "./UI";

class TodoApp {
    constructor() {
        this.projectManager = new ProjectManager();
        this.taskManager = new TaskManager();
        this.loadFromLocalStorage();
        this.initEventListeners();
        this.renderProjects();
        this.renderTasks();
    }

    initEventListeners() {
        // Event listeners for projects
        document.getElementById('add-project-btn').addEventListener('click', () => UI.showPopup('project-popup'));
        document.getElementById('confirm-btn').addEventListener('click', () => this.createProject());
        document.getElementById('cancel-btn').addEventListener('click', () => UI.hidePopup('project-popup'));

        // Delegation for task actions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('task-delete')) {
                const taskId = e.target.closest('.task-card').getAttribute('data-id');
                this.deleteTask(taskId);
            } else if (e.target.classList.contains('task-complete')) {
                const taskId = e.target.closest('.task-card').getAttribute('data-id');
                this.completeTask(taskId);
            } else if (e.target.classList.contains('task-edit')) {
                const taskId = e.target.closest('.task-card').getAttribute('data-id');
                this.editTask(taskId);
            }
        });

        // Task form submission
        document.getElementById('task-form').addEventListener('submit', (e) => this.handleTaskFormSubmit(e));
    }

    createProject() {
        const projectName = document.getElementById('project-input').value;
        if (projectName) {
            this.projectManager.createProject(projectName);
            this.saveToLocalStorage();
            UI.hidePopup('project-popup');
        }
    }

    addTask(title, description, projectId = null) {
        this.taskManager.addTask(title, description, projectId);
        this.saveToLocalStorage();
    }

    handleTaskFormSubmit(event) {
        event.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const projectId = document.getElementById('task-project')?.value || null;

        if (title.trim() !== '' && description.trim() !== '') {
            this.addTask(title, description, projectId);
            UI.hidePopup('task-popup');
        }
    }

    completeTask(taskId) {
        this.taskManager.completeTask(taskId);
        this.saveToLocalStorage();
    }

    deleteTask(taskId) {
        this.taskManager.deleteTask(taskId);
        this.saveToLocalStorage();
    }

    editTask(taskId) {
        const task = this.taskManager.tasks.find(t => t.id === taskId);
        if (task) {
            document.getElementById('task-title').value = task.title;
            document.getElementById('task-description').value = task.description;
            document.getElementById('task-id').value = task.id;
            UI.showPopup('task-popup');
        }
    }

    renderProjects() {
        const projects = this.projectManager.renderProjects();
        UI.renderProjects(projects);
    }

    renderTasks() {
        const tasks = this.taskManager.renderTasks();
        UI.renderTasks(tasks);
    }

    saveToLocalStorage() {
        Storage.saveToLocalStorage(this.taskManager.tasks, this.projectManager.projects);
    }

    loadFromLocalStorage() {
        const { tasks, projects } = Storage.loadFromLocalStorage();
        this.taskManager.tasks = tasks;
        this.projectManager.projects = projects;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});

export default TodoApp;