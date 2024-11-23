document.addEventListener('DOMContentLoaded', () => {
    // Select the menu button and dropdown
    const menuButton = document.querySelector('.menu-button');
    const dropdown = document.querySelector('.dropdown');

    if (menuButton && dropdown) {
        // Add a click event listener to toggle dropdown
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the event from bubbling up
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !menuButton.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    } else {
        console.warn('Menu button or dropdown not found in DOM.');
    }
});
