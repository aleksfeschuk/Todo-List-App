/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    console.log('working')\r\n    const app = new ToDoApp();\r\n});\r\n\r\n\r\nclass ToDoApp {\r\n    constructor() {\r\n        this.tasks = [];\r\n        this.projects = [];\r\n        this.loadFromLocalStorage();\r\n        this.initEventListeners();\r\n        this.renderProjects();\r\n        this.renderTasks();\r\n    }\r\n\r\n\r\n// Initialize event listeners for btn, inputs, etc.\r\n\r\ninitEventListeners() {\r\n\r\n    //event listener for adding a new project\r\n\r\n    this.addProjectButton = document.getElementById('add-project-btn');\r\n    this.addProjectButton.addEventListener('click', () => this.showProjectPopup());\r\n\r\n    this.confirmButton = document.getElementById('confirm-btn');\r\n    this.confirmButton.addEventListener('click', () => this.createProject());\r\n\r\n    this.cancelButton = document.getElementById('cancel-btn');\r\n    this.cancelButton.addEventListener('click', () => this.hideProjectPopup());\r\n\r\n    //event listener for adding a new task\r\n\r\n    this.addTaskButton = document.getElementById('add-task-btn');\r\n    this.addTaskButton.addEventListener('click', () => this.showTaskPopup());\r\n\r\n    this.taskPopupCloseButton = document.getElementById('task-popup-close');\r\n    this.taskPopupCloseButton.addEventListener('click', () => this.hideTaskPopup());\r\n\r\n    this.taskForm = document.getElementById('task-form');\r\n    this.taskForm.addEventListener('submit', (e) => this.handleTaskFormSubmit(e));\r\n\r\n\r\n    // Event delegation for task delete and complete\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('task-delete')) {\r\n            const taskId = e.target.closest('.task-card').getAttribute('data-id');\r\n            this.deleteTask(taskId);\r\n        } else if (e.target.classList.contains('task-complete')) {\r\n            const taskId = e.target.closest('.task-card').getAttribute('data-id');\r\n            this.completeTask(taskId);\r\n        } else if (e.target.classList.contains('task-edit')) {\r\n            const taskId = e.target.closest('.task-edit').getAttribute('data-id');\r\n            this.editTask(taskId);\r\n        }\r\n    });\r\n\r\n}\r\n\r\n    showProjectPopup() {\r\n        document.getElementById('project-popup').style.display = 'block';\r\n    }\r\n\r\n    hideTaskPopup() {\r\n        document.getElementById('task-popup').style.display = 'none';\r\n    }\r\n\r\n    // method to create a new project\r\n    createProject() {\r\n        const projectName = document.getElementById('project-input').value;\r\n        if (projectName.trim() !== '') {\r\n            this.projects.push({ name: projectName });\r\n            this.saveToLocalStorage();\r\n            this.renderProjects();\r\n            this.hideProjectPopup();\r\n        }\r\n    }\r\n\r\n    // method to render the list of projects\r\n\r\n\r\n    renderProjects() {\r\n        const projectList = document.getElementById('project-list');\r\n        projectList.innerHTML = '';\r\n        this.projects.forEach((project, index) => {\r\n            const projectItem = document.createElement('div');\r\n            projectItem.classList.add('project-item');\r\n            projectItem.innerHTML = `\r\n                <span>${project.name}</span>\r\n                <button class=\"delete-project\" data-id=\"${index}\">&times;</button>\r\n            `;\r\n            projectList.appendChild(projectItem);\r\n        });\r\n    }\r\n\r\n    deleteProject(index) {\r\n        this.projects.splice(index, 1);\r\n        this.saveToLocalStorage();\r\n        this.renderProjects();\r\n    }\r\n\r\n    // method to add a new task\r\n\r\n\r\n    addTask(title, description, projectId = null) {\r\n        const task = {\r\n            id: this.tasks.length + 1,\r\n            title,\r\n            description,\r\n            completed: false,\r\n            projectId\r\n        };\r\n\r\n        this.tasks.push(task);\r\n        this.saveToLocalStorage();\r\n        this.renderProjects();\r\n    }\r\n\r\n    renderTasks() {\r\n        const taskList = document.getElementById('task-list');\r\n        taskList.innerHTML = '';\r\n        this.tasks.forEach(task => {\r\n            const taskCard = document.createElement('div');\r\n            taskCard.classList.add('task-card');\r\n            taskCard.setAttribute('data-id', task.id);\r\n\r\n            taskCard.innerHTML = `\r\n                <div class=\"task-header\">\r\n                <h3 class=\"task-title\">${task.title}</h3>\r\n                <button class=\"task-delete\">&times;</button>\r\n                </div>\r\n                <p class=\"task-description\">${task.description}</p>\r\n                <div class=\"task-actions\">\r\n                <button class=\"task-edit\">Edit</button>\r\n                <button class=\"task-complete\">✔</button>\r\n                </div>\r\n            `;\r\n\r\n\r\n            taskList.appendChild(taskCard);\r\n            if(task.completed) {\r\n                taskCard.classList.add('completed');\r\n            }\r\n        });\r\n    }\r\n    \r\n    // method to handle task form submission\r\n\r\n    handleTaskFormSubmit(event) {\r\n        event.preventDefault();\r\n        const title = document.getElementById('task-title').value;\r\n        const description = document.getElementById('task-description').value;\r\n        const projectId = document.getElementById('task-project').value || null;\r\n\r\n        if (title.trim() !== '' && description.trim() !== '') {\r\n            this.addTask(title, description, projectId);\r\n            this.hideTaskPopup();\r\n        }\r\n    }\r\n\r\n    // method to show the task creation popup\r\n\r\n    showTaskPopup() {\r\n        document.getElementById('task-popup').style.display = 'block';\r\n    }\r\n\r\n    // method hide\r\n\r\n    hideProjectPopup() {\r\n        document.getElementById('task-popup').style.display = 'none';\r\n    }\r\n\r\n    // method to mark a task as complete\r\n\r\n    completeTask(taskId) {\r\n        const task = this.tasks.find(t => t.id === parseInt(taskId));\r\n        if (task) {\r\n            task.completed = !task.completed;\r\n            this.saveToLocalStorage();\r\n            this.renderTasks();\r\n        }\r\n    }\r\n\r\n    // method to delete a task\r\n\r\n    deleteTask(taskId) {\r\n        this.tasks = this.tasks.filter(task => task.id !== parseInt(taskId));\r\n        this.saveToLocalStorage();\r\n        this.renderTasks();\r\n    }\r\n\r\n    // method to edit a task\r\n\r\n    editTask(taskId) {\r\n        const task = this.tasks.find(t => t.id === parseInt(taskId));\r\n        if (task) {\r\n            document.getElementById('task-title').value = task.title;\r\n            document.getElementById('task-description').value = task.description;\r\n            document.getElementById('task-id').value = task.id;\r\n            this.showTaskPopup();\r\n        }\r\n    }\r\n\r\n    //method to save data to local storage\r\n\r\n    saveToLocalStorage() {\r\n        localStorage.setItem('tasks', JSON.stringify(this.tasks));\r\n        localStorage.setItem('projects', JSON.stringify(this.projects));\r\n    }\r\n\r\n    // method to load data from local storage\r\n\r\n    loadFromLocalStorage() {\r\n        const tasksFromStorage = localStorage.getItem('tasks');\r\n        const projectsFromStorage = localStorage.getItem('projects');\r\n        if (tasksFromStorage) {\r\n            this.tasks = JSON.parse(tasksFromStorage);\r\n        }\r\n        if (projectsFromStorage) {\r\n            this.projects = JSON.parse(projectsFromStorage);\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;