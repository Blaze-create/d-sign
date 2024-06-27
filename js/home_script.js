document.addEventListener('DOMContentLoaded', function () {
    let headertext = new Typed("#text", {
        strings: ['Vibrant Signs', ' Stunning Displays'],
        loop: true,
        typeSpeed: 150,
        backSpeed: 10,
        backDelay: 1400,
    });
    let typingText = new Typed("#page1", {
        strings: ['Make Your Mark', 'Stand Out Everywhere', "Unleash Your Brand’s Potential", "Bold. Visible. Unforgettable"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 1400,
    });
    let typingText2 = new Typed("#page2", {
        strings: ['Crafting Custom Signs that Define Your Brand', 'Your Vision, Our Craft', 'Signage that Shines', "Express Your Brand"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 1400,
    });
    let typingText3 = new Typed("#page3", {
        strings: ['Impress with Every Page', 'our One-Stop Shop for All Printing Needs!', 'Print Beyond Limits', "Precision Printing for Brochures, Booklets, Wallpaper, and More"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 1400,
    });
    let typingText4 = new Typed("#page4", {
        strings: ['Engraving Excellence', 'Crafting Beauty from Acrylic, Wood, PVC, and Metal!', 'Decorate with Distinction', 'Precision Craftsmanship for Stunning Interior Decor!'],
        loop: true,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 1400,
    });



    const splidea = new Splide('.splide.a', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: 1,
        },
    });
    const splideb = new Splide('.splide.b', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: 1,
        },
    });
    const splidec = new Splide('.splide.c', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: 1,
        },
    });
    const splided = new Splide('.splide.d', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: 1,
        },
    });

    splidea.mount(window.splide.Extensions);
    splideb.mount(window.splide.Extensions);
    splidec.mount(window.splide.Extensions);
    splided.mount(window.splide.Extensions);
});


$(window).on('load', function () {
    var preloaderFadeOutTime = 400;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        setTimeout(function () {
            preloader.slideUp(preloaderFadeOutTime, 'swing');
        }, 500);
    }
    hidePreloader();
});


window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
});

window.addEventListener("scroll", function () {
    var backToTopBtn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});
document.getElementById("back-to-top-btn").addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});