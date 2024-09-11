export function renderHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
      <h1>Task Manager</h1>
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tasks">Tasks</a></li>
        </ul>
      </nav>
    `;
    document.body.prepend(header);
  }
  