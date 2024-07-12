document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var menu = document.querySelector('#menu-icon');
    var navlist = document.querySelector('.navlist');

    // Initial check to see if the header should be hidden
    if (window.scrollY > 50) {
        header.classList.add('hidden-nav');
    }

    // Add event listener for scroll to toggle header visibility
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('hidden-nav');
        } else {
            header.classList.remove('hidden-nav');
        }
    });

    // Toggle menu and navlist classes on menu icon click
    menu.onclick = function () {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    }

    // ScrollReveal configuration
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    });

    // Reveal elements with ScrollReveal
    sr.reveal('.tattoo-text', { delay: 200, origin: 'top' });
    sr.reveal('.tattoo-image', { delay: 450, origin: 'top' });
    sr.reveal('.icons', { delay: 500, origin: 'right' });
    sr.reveal('.scroll-down', { delay: 500, origin: 'down' });

    sr.reveal('.contact-info', { delay: 300, origin: 'top' });
    sr.reveal('.map', { delay: 400, origin: 'top' });
    sr.reveal('.contact-texte', { delay: 200, origin: 'top' });
});
