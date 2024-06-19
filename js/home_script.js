document.addEventListener('DOMContentLoaded', function () {
    let typingText = new Typed("#page1", {
        strings: ['Ingenuity', 'Innovation', "Creativity", "Imagination"],
        loop: true,
        typeSpeed: 150,
        backSpeed: 10,
        backDelay: 1400,
    });
    let typingText2 = new Typed("#page2", {
        strings: ['paper', 'Canvas', "Fabric", "Masterpieces"],
        loop: true,
        typeSpeed: 150,
        backSpeed: 10,
        backDelay: 1400,
    });



    const splidea = new Splide('.splide.a', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: 1.5,
        },
    });
    const splideb = new Splide('.splide.b', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: -1.5,
        },
    });
    const splidec = new Splide('.splide.c', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: -1.5,
        },
    });
    const splided = new Splide('.splide.d', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: -1.5,
        },
    });

    splidea.mount(window.splide.Extensions);
    splideb.mount(window.splide.Extensions);
    splidec.mount(window.splide.Extensions);
    splided.mount(window.splide.Extensions);
});


$(window).on('load', function () {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        setTimeout(function () {
            preloader.fadeOut(preloaderFadeOutTime);
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