document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('hidden-nav');
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('hidden-nav');
        } else {
            header.classList.remove('hidden-nav');
        }
    });

    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');
    
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    }

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
});
