import TaskManager from './TaskManager';
import TaskRenderer from './taskRenderer';
import TaskForm from './TaskForm';

document.addEventListener("DOMContentLoaded", () => {
    const taskManager = new TaskManager();
    const taskRenderer = new TaskRenderer(taskManager);
    const taskForm = new TaskForm(taskManager, taskRenderer);
  
    taskRenderer.renderTasks();
    taskForm.init();
  });

export default TodoApp;
