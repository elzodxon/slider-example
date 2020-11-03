
let mySwiper = new Swiper('.blog-slider-container', {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    },
    fadeEffect: {
        crossFade: true
    },
    loop: true,
})
