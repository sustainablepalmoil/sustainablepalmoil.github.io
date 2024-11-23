document.addEventListener('DOMContentLoaded', () => {
    // Select the menu button and dropdown
    const menuButton = document.querySelector('.menu-button');
    const dropdown = document.querySelector('.dropdown');

    if (menuButton && dropdown) {
        // Add a click event listener to the menu button
        menuButton.addEventListener('click', () => {
            dropdown.classList.toggle('active'); // Toggle visibility of dropdown
        });

        // Close dropdown when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target) && !menuButton.contains(event.target)) {
                dropdown.classList.remove('active'); // Hide the dropdown
            }
        });
    } else {
        console.warn('Menu button or dropdown not found in DOM.');
    }
});
