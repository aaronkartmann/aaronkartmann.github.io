const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
});


const cards = document.querySelectorAll('.grid-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');

        const indicator = card.querySelector('.expand-indicator');

        if (card.classList.contains('expanded')) {
            indicator.textContent = 'Click to collapse ↑';
        } else {
            indicator.textContent = 'Click to expand ↓';
        }
    });
});