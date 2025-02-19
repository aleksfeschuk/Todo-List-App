export class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description, projectId = null) {
        const task = {
            id: this.tasks.length + 1,
            title,
            description,
            completed: false,
            projectId
        };
        this.tasks.push(task);
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if(task) {
            task.title = !task.completed;
        }
    }

    editTask(taskId, title, description) {
        const task = this.tasks.find(t => t.id === taskId);
        if(task) {
            task.title = title;
            task.description = description;
        }
    } 

    renderTasks() {
        return this.tasks;
    }
} 