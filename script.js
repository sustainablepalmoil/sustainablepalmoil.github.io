document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        // Toggle the "active" class on the nav element
        nav.classList.toggle('active');
    });
});
