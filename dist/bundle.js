/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_TodoApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/TodoApp */ \"./src/modules/TodoApp.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    new _modules_TodoApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n});\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(title, description, date, time) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.time = time;\r\n    }\r\n\r\n    isExpired() {\r\n        let taskDate = new Date(this.date);\r\n        let taskTime = new Date(this.time);\r\n        let now = new Date();\r\n        return taskDate < now || taskTime < now;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TaskForm":
/*!******************************!*\
  !*** ./src/modules/TaskForm ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskForm)\n/* harmony export */ });\nclass TaskForm {\r\n    \r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/TaskForm?");

/***/ }),

/***/ "./src/modules/TaskManager.js":
/*!************************************!*\
  !*** ./src/modules/TaskManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskManager)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\r\n\r\nclass TaskManager {\r\n    constructor() {\r\n        this.tasks = [\r\n            new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Task 1\", \"Task 1 description\", \"19 Feb 2025\", \"10:10\"),\r\n            new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Task 2\", \"Task 2 description\", \"19 Feb 2025\", \"10:10\"),\r\n            new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Task 3\", \"Task 3 description\", \"19 Feb 2025\", \"10:10\"),\r\n            new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Task 4\", \"Task 4 description\", \"19 Feb 2025\", \"10:10\"),\r\n        ];\r\n    }\r\n\r\n    addTask(title, description, date, time) {\r\n        const newTask = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, date, time);\r\n        this.tasks.push(newTask);\r\n    }\r\n\r\n    deleteTask(title) {\r\n        this.tasks = this.tasks.filter(task => task.title !== title);\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/TaskManager.js?");

/***/ }),

/***/ "./src/modules/TodoApp.js":
/*!********************************!*\
  !*** ./src/modules/TodoApp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TaskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskManager */ \"./src/modules/TaskManager.js\");\n/* harmony import */ var _taskRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskRenderer */ \"./src/modules/taskRenderer.js\");\n/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskForm */ \"./src/modules/TaskForm\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const taskManager = new _TaskManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    const taskRenderer = new _taskRenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskManager);\r\n    const taskForm = new _TaskForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskManager, taskRenderer);\r\n  \r\n    taskRenderer.renderTasks();\r\n    taskForm.init();\r\n  });\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/TodoApp.js?");

/***/ }),

/***/ "./src/modules/taskRenderer.js":
/*!*************************************!*\
  !*** ./src/modules/taskRenderer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskRenderer)\n/* harmony export */ });\nclass TaskRenderer {\r\n    constructor(taskManager) {\r\n        this.taskManager = taskManager;\r\n        this.tasksWrapper = document.querySelector('.tasks-wrapper');\r\n    }\r\n\r\n    renderTasks() {\r\n        this.tasksWrapper.innerHTML = \"\";\r\n\r\n        const tasks = this.taskManager.getTasks();\r\n\r\n        if (tasks.length === 0) {\r\n            this.tasksWrapper.innerHTML = `<div class=\"no-tasks\">No tasks, Add one now</div>`;\r\n            return;\r\n        }\r\n\r\n        tasks.forEach((task) => {\r\n            let expired = task.isExpired() ? \"expired\" : \"\";\r\n\r\n            this.tasksWrapper.innerHTML += `\r\n                <div class=\"task\">\r\n                    <div class=\"left\">\r\n                        <div class=\"radio\">\r\n                        <ion-icon class=\"icon\" name=\"checkmark\"></ion-icon>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"right\">\r\n                        <p class=\"title\">${task.title}</p>\r\n                        <p class=\"description\">${task.description}</p>\r\n                        <div class=\"info ${expired}\">\r\n                        <p class=\"date\">\r\n                            <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                            <span>${task.date}</span>\r\n                        </p>\r\n                        <p class=\"dot\">\r\n                            <ion-icon name=\"ellipse\"></ion-icon>\r\n                        </p>\r\n                        <p class=\"time\">\r\n                            <ion-icon name=\"time-outline\"></ion-icon>\r\n                            <span>${task.time}</span>\r\n                        </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            `;\r\n        });\r\n\r\n        this.tasksWrapper.innerHTML += `\r\n            <div class=\"delete\">\r\n                <ion-icon name=\"trash-outline\"></ion-icon>\r\n            </div>\r\n        `;\r\n        this.attachEventListeners();\r\n    }\r\n\r\n    attachEventListeners() {\r\n        const tasks = document.querySelectorAll('.task');\r\n\r\n        tasks.forEach((taskElement) => {\r\n            taskElement.addEventListener('click', (e) => {\r\n                if (e.target.classList.contains('radio')) {\r\n                    taskElement.classList.toggle('selected');\r\n                    if (document.querySelector('.task.selected')) {\r\n                        document.querySelector('.delete').classList.add('show');\r\n                    } else {\r\n                        document.querySelector('.delete').classList.remove('show');\r\n                    }\r\n                }\r\n            });\r\n        });\r\n\r\n        const deleteBtn = document.querySelector('.delete');\r\n        deleteBtn.addEventListener('click', this.deleteTasks.bind(this));\r\n    }\r\n\r\n    deleteTasks() {\r\n        const selected = document.querySelectorAll('.task.selected');\r\n        if (selectedTasks.length === 0) return;\r\n\r\n        let confirmDelete = confirm(\"Are you sure you want to delete selected tasks?\");\r\n        if (confirmDelete) {\r\n            selectedTasks.forEach((taskElement) => {\r\n                let title = taskElement.querySelector('.title').innerHTML;\r\n                this.taskManager.deleteTasks(title);\r\n            });\r\n            this.renderTasks();\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/taskRenderer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;