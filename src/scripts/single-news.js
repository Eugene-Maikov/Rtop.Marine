/* eslint-disable no-undef */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const sliderPictures = new Swiper(".pictures", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".pictures__next",
      prevEl: ".pictures__prev",
    },
    pagination: {
      el: '.pictures__pagination',
      clickable: true,
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
    breakpoints: {
      1330: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      767: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1.5,
      },
    },
  });
});