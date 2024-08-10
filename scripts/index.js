const promoSwiper = new Swiper(".banner__swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});

const popularSwiper = new Swiper(".popular__swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
      slideToClickedSlide: true,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 30,
      slideToClickedSlide: true,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
  },
});

const relatedSwiper = new Swiper(".related__swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
      slideToClickedSlide: true,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 30,
      slideToClickedSlide: true,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
  },

  autoplay: {
    delay: 5000,
  },
});

// burger menu 
// const menu = document.querySelector(".mobile-menu"),
//   toggle = document.querySelector(".mobile__menu-link--icon");

// function toggleToggle() {
//   toggle.classList.toggle("mobile-menu");
// }

// function toggleMenu() {
//   menu.classList.toggle("active");
// }

// toggle.addEventListener("click", toggleToggle, false);
// toggle.addEventListener("click", toggleMenu, false);