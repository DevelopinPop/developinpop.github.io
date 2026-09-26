document.addEventListener('DOMContentLoaded', function () {
    var glows = document.querySelectorAll('.bg-layers .glow');
    if (!glows.length) return;

    // one speed per glow, in the same order they appear in the DOM
    // (teal, violet, indigo) — different values give each layer its own
    // sense of depth as the page scrolls
    var speeds = [0.06, 0.12, 0.18];

    function update() {
        var y = window.scrollY;
        glows.forEach(function (glow, i) {
            var speed = speeds[i % speeds.length];
            glow.style.transform = 'translateY(' + (-y * speed) + 'px)';
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
});
