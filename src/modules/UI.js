export class UI {
    static renderProjects(projects) {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';
        projects.forEach((project, index) => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.innerHTML = `
                <span>${project.name}</span>
                <button class="delete-project" data-id="${index}">&times;</button>
            `;
            projectList.appendChild(projectItem);
        });

        

    }

    static renderTasks(tasks) {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.setAttribute('data-id', task.id);
            taskCard.innerHTML = `
                <div class="task-header">
                    <h3 class="task-title">${task.title}</h3>
                    <button class="task-delete">&times;</button>
                </div>
                <p class="task-description">${task.description}</p>
                <div class="task-actions">
                    <button class="task-edit">Edit</button>
                    <button class="task-complete">✔</button>
                </div>
            `;

            if(task.completed) {
                taskCard.classList.add('completed');
            } 
            taskList.appendChild(taskCard);
        });
    }

    static showPopup(popupId) {
        document.getElementById(popupId).style.display = 'block';
    }

    static hidePopup(popupId) {
        document.getElementById(popupId).style.display = 'none';
    }
}