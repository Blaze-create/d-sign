gsap.registerPlugin(ScrollTrigger);



gsap.to("#header_image", {
    scrollTrigger: {
        trigger: "#header_image",
        // markers: true,
        start: "center 49%",
        end: "75% top",
        scrub: 0.5,

    },
    rotation: 45,
    scale: 3,
});


document.addEventListener('DOMContentLoaded', function () {
    // IMAGE-BANNER
    const images = gsap.utils.toArray('.wrapper li img');
    const scrollTrig = () => {
        gsap.utils.toArray('.image-banner').forEach((section, index) => {
            const w = section.querySelector('.wrapper');
            const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
            gsap.fromTo(w, { x }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 0.5
                }
            });
        });
    }
    imagesLoaded(images).on('always', scrollTrig);
});


let panels = gsap.utils.toArray(".horizontal .panel");
let panelTween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal",
        start: "top top",
        end: "+=" + (innerWidth * 3),
        // markers: true,
        pin: true,
        scrub: 1,
    }
});

// we create a ScrollTrigger for each section just so we can figure out where they're positioned (when their top hits the top of the viewport)
let sectionTriggers = sections.map(section => ScrollTrigger.create({
    trigger: section,
    start: "top top",
    refreshPriority: -1 // just so they get calculated last
}));

// after ScrollTrigger refreshes, we create a snap function that's directional. 
ScrollTrigger.addEventListener("refresh", () => {
    let start = panelTween.scrollTrigger.start,
        end = panelTween.scrollTrigger.end,
        each = (end - start) / (panels.length - 1), // each panel takes up a certain distance
        max = ScrollTrigger.maxScroll(window),
        sectionPositions = sectionTriggers.map(trigger => trigger.start / max); // snapping values must be in ratios (between 0 and 1)
    panels.forEach((panel, i) => sectionPositions.push((start + i * each) / max)); // add the panel positions
    snap = ScrollTrigger.snapDirectional(sectionPositions); // a snapping function that we can just feed a scroll value to and a direction and it'll spit back the closest one (ratio/progress) in that direction
});