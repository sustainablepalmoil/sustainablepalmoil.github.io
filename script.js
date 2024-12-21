document.addEventListener('DOMContentLoaded', () => {
  // Dynamically load menu.html
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
        // Insert menu into the menu container
        menuContainer.innerHTML = data;

        // Reapply dropdown functionality for the dynamically loaded menu
        initialiseDropdownMenu();
        highlightActiveMenuItem();
      })
      .catch(error => console.error('Error loading menu:', error));
  }
});

/**
 * Reapply dropdown functionality for the menu button and dropdown
 */
function initialiseDropdownMenu() {
  const menuButton = document.querySelector('.menu-button');
  const dropdown = document.querySelector('.dropdown');
  if (menuButton && dropdown) {
    // Toggle dropdown visibility on menu button click
    menuButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click event from propagating
      dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && !menuButton.contains(event.target)) {
        dropdown.classList.remove('active');
      }
    });

    // Close dropdown when pressing the Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        dropdown.classList.remove('active');
      }
    });
  }
}

/**
 * Highlight the active menu item based on the current page URL
 */
function highlightActiveMenuItem() {
  const links = document.querySelectorAll('.dropdown a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}
