document.addEventListener('DOMContentLoaded', () => {
  // Menu dropdown functionality
  const menuButton = document.querySelector('.menu-button');
  const dropdown = document.querySelector('.dropdown');

  if (menuButton && dropdown) {
    // Toggle dropdown visibility on button click
    menuButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent event from bubbling up
      dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && !menuButton.contains(event.target)) {
        dropdown.classList.remove('active');
      }
    });

    // Close dropdown when the Escape key is pressed
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        dropdown.classList.remove('active');
      }
    });
  }

  // Flowchart interactivity
  const nodes = document.querySelectorAll('.node');
  if (nodes.length) {
    nodes.forEach((node) => {
      node.addEventListener('click', () => {
        alert(`Details about ${node.textContent.trim()}`);
      });
    });
  }
});
