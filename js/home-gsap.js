gsap.registerPlugin(ScrollTrigger);

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


// VERTICAL SCROLL
let currentIndex = -1;
let animating;
let swipePanels = gsap.utils.toArray(".swipe-section .panel");
gsap.set(".x-100", { xPercent: 100 });
gsap.set(swipePanels, {
    zIndex: i => i
});
let intentObserver = ScrollTrigger.observe({
    type: "wheel,touch,scroll",
    onUp: () => !animating && gotoPanel(currentIndex + 1, true),
    onDown: () => !animating && gotoPanel(currentIndex - 1, false),
    wheelSpeed: -1,
    tolerance: 10,
    preventDefault: true,
    onPress: self => {
        ScrollTrigger.isTouch && self.event.preventDefault()
    }
})
intentObserver.disable();
function gotoPanel(index, isScrollingDown) {
    animating = true;
    if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
        let target = index;
        gsap.to(target, {
            duration: 0.00,
            onComplete: () => {
                animating = false;
                isScrollingDown && intentObserver.disable();
            }
        });
        return
    }
    let target = isScrollingDown ? swipePanels[index] : swipePanels[currentIndex];
    gsap.to(target, {
        xPercent: isScrollingDown ? 0 : 100,
        duration: 0.75,
        onComplete: () => {
            animating = false;
        }
    });
    currentIndex = index;
    console.log(index);
}
ScrollTrigger.create({
    trigger: ".swipe-section",
    pin: true,
    start: "top top",
    end: "+=1",
    onEnter: (self) => {
        intentObserver.enable();
        gotoPanel(currentIndex + 1, true);
    },
    onEnterBack: () => {
        intentObserver.enable();
        gotoPanel(currentIndex - 1, false);
    }
});
// -----------------------------------------------