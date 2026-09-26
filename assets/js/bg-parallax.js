document.addEventListener('DOMContentLoaded', function () {
    var glows = document.querySelectorAll('.bg-layers .glow');
    if (!glows.length) return;

    // one speed per glow, in the same order they appear in the DOM
    // (teal, violet, indigo). Values are >1 on purpose: each glow moves up
    // faster than the page actually scrolls, so they drift past rather than
    // just tracking the scroll position 1:1.
    var speeds = [1.4, 1.8, 2.2];

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
