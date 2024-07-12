document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var menu = document.querySelector('#menu-icon');
    var navlist = document.querySelector('.navlist');

    // Function to handle header visibility on scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('hidden-nav');
        } else {
            header.classList.remove('hidden-nav');
        }
    }

    // Check if header exists and initialize its state
    if (header) {
        handleScroll(); // Initialize the header state on page load
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
    }

    // Check if menu and navlist exist and set up the click event listener
    if (menu && navlist) {
        menu.addEventListener('click', function () {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open');
        });
    }

    // Check if ScrollReveal is defined and set up the reveals
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '65px',
            duration: 2600,
            delay: 450,
            reset: true
        });

        sr.reveal('.tattoo-text', { delay: 200, origin: 'top' });
        sr.reveal('.tattoo-image', { delay: 450, origin: 'top' });
        sr.reveal('.icons', { delay: 500, origin: 'right' });
        sr.reveal('.scroll-down', { delay: 500, origin: 'down' });

        sr.reveal('.contact-info', { delay: 300, origin: 'top' });
        sr.reveal('.map', { delay: 400, origin: 'top' });
        sr.reveal('.contact-texte', { delay: 200, origin: 'top' });
    } else {
        console.error('ScrollReveal is not defined');
    }
});
