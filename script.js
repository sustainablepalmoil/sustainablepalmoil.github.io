document.addEventListener('DOMContentLoaded', () => {
  // Menu dropdown functionality
  const handleDropdownFunctionality = (menuButton, dropdown) => {
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
  };

  // Initial dropdown functionality
  const menuButton = document.querySelector('.menu-button');
  const dropdown = document.querySelector('.dropdown');
  handleDropdownFunctionality(menuButton, dropdown);

  // Flowchart interactivity
  const nodes = document.querySelectorAll('.node');
  if (nodes.length) {
    nodes.forEach((node) => {
      node.addEventListener('click', () => {
        alert(`Details about ${node.textContent.trim()}`);
      });
    });
  }

  // Dynamically load menu.html (if using dynamic loading for menus)
  const menuContainer = document.getElementById('menu');
  if (menuContainer) {
    fetch('menu.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        menuContainer.innerHTML = data;

        // Reapply menu functionality to dynamically loaded content
        const dynamicMenuButton = document.querySelector('.menu-button');
        const dynamicDropdown = document.querySelector('.dropdown');
        handleDropdownFunctionality(dynamicMenuButton, dynamicDropdown);

        // Highlight the active menu link based on the current page URL
        const links = document.querySelectorAll('.dropdown a');
        links.forEach(link => {
          if (link.href === window.location.href) {
            link.classList.add('active');
          }
        });
      })
      .catch(error => console.error('Error loading menu:', error));
  }
});
