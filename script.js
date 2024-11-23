document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const dropdown = document.querySelector('.dropdown');

  if (menuButton && dropdown) {
    // Toggle dropdown visibility on button click
    menuButton.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && !menuButton.contains(event.target)) {
        dropdown.classList.remove('active');
      }
    });
  } else {
    console.error('Menu button or dropdown not found in the DOM.');
  }
});
