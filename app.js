const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.add("hidden");
        } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hidden");
        }
    })
})


const hiddenElements = document.querySelectorAll(".fancytransition");
hiddenElements.forEach((el) => observer.observe(el));









var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var gradientOverlay = document.querySelector('.gradient-overlay');

    // Adjust the position of the gradient overlay
    gradientOverlay.style.transform = `translateY(${(scrollPosition * -2)-1750}px)`;
});

window.onscroll = function() {
    navbar.classList.add("sticky")
};



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});