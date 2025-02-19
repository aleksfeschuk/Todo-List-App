export class ProjectManager {
    constructor() {
        this.projects = [];
    }

    createProject(name) {
        const newProject = {
            id: Date.now(),
            name,
        };
        this.projects.push({ name });
    }

    deleteProject(index) {
        this.projects.splice(index, 1);
    }

    renderProjects() {
        return this.projects;
    }
}