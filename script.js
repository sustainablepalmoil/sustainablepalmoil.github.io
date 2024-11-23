document.addEventListener('DOMContentLoaded', () => {
    // Select the menu button and the dropdown
    const menuButton = document.querySelector('.menu-button');
    const dropdown = document.querySelector('.dropdown');

    // Add a click event listener to the menu button
    menuButton.addEventListener('click', () => {
        // Toggle the "active" class on the dropdown to show/hide it
        dropdown.classList.toggle('active');
    });
});
