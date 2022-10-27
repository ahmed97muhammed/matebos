var swiper = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    } ,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay : true ,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop : true ,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      450: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });