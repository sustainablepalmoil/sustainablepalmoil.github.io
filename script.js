document.addEventListener('DOMContentLoaded', () => {
  const applyDropdownFunctionality = () => {
    const menuButton = document.querySelector('.menu-button');
    const dropdown = document.querySelector('.dropdown');

    if (menuButton && dropdown) {
      menuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown.classList.toggle('active');
      });

      document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && !menuButton.contains(event.target)) {
          dropdown.classList.remove('active');
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          dropdown.classList.remove('active');
        }
      });
    }
  };

  // Fetch and dynamically load menu.html
  const menuContainer = document.getElementById('menu');
  if (menuContainer) {
    fetch('menu.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        menuContainer.innerHTML = data;
        console.log("Menu loaded and inserted");

        // Reapply functionality for dynamically loaded content
        applyDropdownFunctionality();
      })
      .catch(error => console.error('Error loading menu:', error));
  } else {
    // Apply functionality for statically loaded content
    applyDropdownFunctionality();
  }
});
