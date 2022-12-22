/* eslint-disable no-undef */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const sliderIntro = new Swiper(".main-slider", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".intro-next",
      prevEl: ".intro-prev",
    }
  });
});
