document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM entièrement chargé et analysé');

    var header = document.querySelector('header');
    var menu = document.querySelector('#menu-icon');
    var navlist = document.querySelector('.navlist');

    // Function to handle header visibility on scroll
    function handleScroll() {
        console.log('Défilement détecté, position:', window.scrollY);
        if (window.scrollY > 50) {
            header.classList.add('hidden-nav');
            console.log('Ajout de la classe hidden-nav');
        } else {
            header.classList.remove('hidden-nav');
            console.log('Suppression de la classe hidden-nav');
        }
    }

    // Initialiser l'état du header
    if (header) {
        handleScroll(); // Initialize the header state on page load
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        console.log('Écouteur de défilement ajouté');
    } else {
        console.error('Élément header non trouvé');
    }

    // Configuration du menu
    if (menu && navlist) {
        menu.addEventListener('click', function () {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open');
            console.log('Menu toggle');
        });
    } else {
        console.error('Menu ou navlist non trouvé');
    }

    // Configuration de ScrollReveal
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

        console.log('ScrollReveal configuré');
    } else {
        console.error('ScrollReveal non défini');
    }
});
