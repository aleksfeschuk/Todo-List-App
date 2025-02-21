import TaskManager from './TaskManager';
import TaskRenderer from './taskRenderer';
import TaskForm from './TaskForm.js';

export default class TodoApp {
    constructor() {
      this.taskManager = new TaskManager();
      this.taskRenderer = new TaskRenderer(this.taskManager);
      this.taskForm = new TaskForm(this.taskManager, this.taskRenderer);
    }

    init() {
      document.addEventListener('DOMContentLoaded', () => {
        this.taskRenderer.renderTasks();
        this.taskForm.init();
      });
  }
}
    


