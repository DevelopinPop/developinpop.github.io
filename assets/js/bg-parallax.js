document.addEventListener('DOMContentLoaded', function () {
    var glows = document.querySelectorAll('.bg-layers .glow');
    if (!glows.length) return;

    // one speed per glow, in the same order they appear in the DOM
    // (teal, violet, indigo). Values are >1 on purpose: each glow moves up
    // faster than the page actually scrolls, so they drift past rather than
    // just tracking the scroll position 1:1.
    var speeds = [1.4, 1.8, 2.2];

    var ticking = false;

    function apply() {
        var y = window.scrollY;
        glows.forEach(function (glow, i) {
            var speed = speeds[i % speeds.length];
            // translate3d (not translateY) so the browser promotes this to
            // its own GPU layer instead of repainting on every scroll tick
            glow.style.transform = 'translate3d(0, ' + (-y * speed) + 'px, 0)';
        });
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(apply);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
});
