export class Storage {
    static saveToLocalStorage(tasks, projects) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static loadFromLocalStorage() {
        const tasksFromStorage = localStorage.getItem('tasks');
        const projectsFromStorage = localStorage.getItem('projects');
        return {
            tasks: tasksFromStorage ? JSON.parse(tasksFromStorage) : [],
            projects: projectsFromStorage ? JSON.parse(projectsFromStorage) : []
        };
    }
}