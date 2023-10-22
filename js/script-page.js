const swiperCanny = new Swiper(".swiper-canny", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  // spaceBetween: 100,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: ".sw-btn-canny-prev",
    prevEl: ".sw-btn-canny-next",
  },

  thumbs: {
    swiper: {
      el: ".image-mini-swaper",
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },

  // pagination: {
  //   el: ".swiper-pagination-amazing",
  //   clickable: true,
  // },

  // breakpoints: {
  //   320: { slidesPerView: 1 },
  //   768: { slidesPerView: 2 },
  //   1152: { slidesPerView: 3 },
  //   1420: { slidesPerView: 4 },
  // },
})

const swiperAmazing = new Swiper(".swiper-amazing", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  // autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: ".sw-btn-amazing-prev",
    prevEl: ".sw-btn-amazing-next",
  },

  pagination: {
    el: ".swiper-pagination-amazing",
    clickable: true,
  },

  breakpoints: {
    // 320: { slidesPerView: 1 },
    // 768: { slidesPerView: 2 },
    // 1152: { slidesPerView: 3 },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    968: { spaceBetween: 100, slidesPerView: 1.5 },
  },
})
