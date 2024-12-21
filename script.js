document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded");

  // Dynamically load menu.html
  const menuContainer = document.getElementById('menu');
  if (menuContainer) {
    console.log("Menu container found");
    fetch('menu.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Menu.html fetched successfully");
        return response.text();
      })
      .then(data => {
        console.log("Menu.html content loaded");
        menuContainer.innerHTML = data;

        // Reapply dropdown functionality for the dynamically loaded menu
        initialiseDropdownMenu();
        highlightActiveMenuItem();
      })
      .catch(error => console.error('Error loading menu:', error));
  } else {
    console.error("Menu container not found");
  }
});

function initialiseDropdownMenu() {
  console.log("Initialising dropdown functionality");
  const menuButton = document.querySelector('.menu-button');
  const dropdown = document.querySelector('.dropdown');
  if (menuButton && dropdown) {
    console.log("Menu button and dropdown found");
    menuButton.addEventListener('click', (event) => {
      console.log("Menu button clicked");
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
  } else {
    console.error("Menu button or dropdown not found");
  }
}

function highlightActiveMenuItem() {
  console.log("Highlighting active menu item");
  const links = document.querySelectorAll('.dropdown a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
      console.log(`Active menu item highlighted: ${link.textContent}`);
    }
  });
}
