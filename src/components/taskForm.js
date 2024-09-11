export function createTaskForm(onSubmit) {
    const form = document.createElement('form');
    form.className = 'task-form';
    form.innerHTML = `
      <h3>Add/Edit Task</h3>
      <label for="task-title">Title</label>
      <input type="text" id="task-title" name="title" required />
      <label for="task-description">Description</label>
      <textarea id="task-description" name="description" required></textarea>
      <button type="submit">Save Task</button>
    `;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = form.querySelector('#task-title').value;
      const description = form.querySelector('#task-description').value;
      onSubmit({ title, description });
    });
  
    return form;
  }
  