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
        menuContainer.innerHTML = data;

        // Reapply dropdown functionality to dynamically loaded menu
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

        // Highlight active menu item based on current page
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
