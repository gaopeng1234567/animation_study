function swiper() {

    const swiper = new Swiper('.swiper-container', {
        loop: false,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        fadeEffect: {
            crossFade: true,
        }
    });
}


window.addEventListener("load", function () {
    swiper();
})
