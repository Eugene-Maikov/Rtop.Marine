/* eslint-disable no-undef */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const sliderPictures = new Swiper(".pictures", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".pictures__button-next",
      prevEl: ".pictures__button-prev",
    },
    pagination: {
      el: '.pictures__pagination',
    },
  });
  const sliderReference = new Swiper(".reference", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".reference__button-next",
      prevEl: ".reference__button-prev",
    },
  });
});