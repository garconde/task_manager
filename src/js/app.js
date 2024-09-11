import { renderProjects, renderTasks } from './ui.js';
import { loadProjects, saveProject, loadTasks, saveTask } from './storage.js';

// Inicializa la aplicación
document.addEventListener('DOMContentLoaded', () => {
  const projects = loadProjects();
  renderProjects(projects);

  const tasks = loadTasks();
  renderTasks(tasks);
});
¿