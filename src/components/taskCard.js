export function createTaskCard(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task-card';
    taskElement.innerHTML = `
      <h4>${task.title}</h4>
      <p>${task.description}</p>
      <button class="edit-task">Edit</button>
      <button class="delete-task">Delete</button>
    `;
  
    // Event listeners for buttons
    taskElement.querySelector('.edit-task').addEventListener('click', () => {
      // Logic to edit task
    });
  
    taskElement.querySelector('.delete-task').addEventListener('click', () => {
      // Logic to delete task
    });
  
    return taskElement;
  }
  