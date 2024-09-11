import { renderHeader } from '../components/header.js';
import { renderSidebar } from '../components/sidebar.js';
import { createProjectCard } from '../components/projectCard.js';
import { createTaskCard, createTaskForm } from '../components/taskCard.js';
import { loadProjects, saveProject, loadTasks, saveTask } from './storage.js';
import { renderProjects, renderTasks } from './ui.js';

// Inicializa la aplicación
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderSidebar();

  const projects = loadProjects();
  const tasks = loadTasks();

  const app = document.getElementById('app');
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    app.appendChild(projectCard);
  });

  tasks.forEach(task => {
    const taskCard = createTaskCard(task);
    app.appendChild(taskCard);
  });

  const taskForm = createTaskForm((task) => {
    tasks.push(task);
    saveTask(tasks);
    const taskCard = createTaskCard(task);
    app.appendChild(taskCard);
  });

  app.appendChild(taskForm);
});
