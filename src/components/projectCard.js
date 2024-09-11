export function createProjectCard(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project-card';
    projectElement.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <button class="edit-project">Edit</button>
      <button class="delete-project">Delete</button>
    `;
  
    // Event listeners for buttons
    projectElement.querySelector('.edit-project').addEventListener('click', () => {
      // Logic to edit project
    });
  
    projectElement.querySelector('.delete-project').addEventListener('click', () => {
      // Logic to delete project
    });
  
    return projectElement;
  }
  