var swiper = new Swiper(".mySwiper7", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true , 
    
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });



  // console.log()