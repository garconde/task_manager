export function renderSidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tasks">Tasks</a></li>
        </ul>
      </nav>
    `;
    document.body.prepend(sidebar);
  }
  