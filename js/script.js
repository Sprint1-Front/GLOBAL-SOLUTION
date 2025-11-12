function toggleNav() {
    const navMenu = document.getElementById('main-menu');
    const navButton = document.querySelector('.btn-menu-toggle')

    if (navMenu) {
        navMenu.classList.toggle('open');

        if (navButton) {
            const isExpanded = navButton.getAttribute('aria-expanded') === 'true';
            navButton.setAttribute('aria-expanded', !isExpanded);


        }
    }
}