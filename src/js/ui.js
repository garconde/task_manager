export function renderProjects(projects) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Limpiar contenido previo
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'project-card';
      projectElement.innerHTML = `
        <h2>${project.name}</h2>
        <p>${project.description}</p>
      `;
      app.appendChild(projectElement);
    });
  }
  
  export function renderTasks(tasks) {
    const app = document.getElementById('app');
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.className = 'task-card';
      taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      `;
      app.appendChild(taskElement);
    });
  }
  