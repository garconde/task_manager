const PROJECTS_KEY = 'projects';
const TASKS_KEY = 'tasks';

export function loadProjects() {
  const projects = localStorage.getItem(PROJECTS_KEY);
  return projects ? JSON.parse(projects) : [];
}

export function saveProject(projects) {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

export function loadTasks() {
  const tasks = localStorage.getItem(TASKS_KEY);
  return tasks ? JSON.parse(tasks) : [];
}

export function saveTask(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
