export default class StorageManager {
    static saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    static loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    }
}