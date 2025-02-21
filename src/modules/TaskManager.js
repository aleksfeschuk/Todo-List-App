import Task from './Task';
import StorageManager from './StorageManager';

export default class TaskManager {
    constructor() {
        this.tasks = StorageManager.loadTasks().map(
            task => new Task(task.title, task.description, task.date, task.time)
        );
            // new Task("Task 1", "Task 1 description", "19 Feb 2025", "10:10"),
            // new Task("Task 2", "Task 2 description", "19 Feb 2025", "10:10"),
            // new Task("Task 3", "Task 3 description", "19 Feb 2025", "10:10"),
            // new Task("Task 4", "Task 4 description", "19 Feb 2025", "10:10"),
    }

    addTask(title, description, date, time) {
        const newTask = new Task(title, description, date, time);
        this.tasks.push(newTask);
        StorageManager.saveTasks(this.tasks)
    }

    deleteTask(title) {
        this.tasks = this.tasks.filter(task => task.title !== title);
        StorageManager.saveTasks(this.tasks);
    }

    getTasks() {
        return this.tasks;
    }
}