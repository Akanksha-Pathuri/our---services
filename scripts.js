// Select all service cards
const cards = document.querySelectorAll('.card');

// Add hover effect
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        anime({
            targets: card,
            rotate: '1turn', // Rotate 360 degrees
            duration: 1000, // Animation duration
            easing: 'easeInOutSine' // Easing function
        });
    });
});


