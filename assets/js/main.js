document.addEventListener('DOMContentLoaded', function () {
    var fade = document.querySelector('.hero-fade');
    if (!fade) return;

    function updateFade() {
        if (window.scrollY > 10) {
            fade.classList.add('visible');
        } else {
            fade.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', updateFade, { passive: true });
    updateFade();
});
