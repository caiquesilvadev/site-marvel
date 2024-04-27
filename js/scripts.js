var swiper = new Swiper('.slide_video', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    pagination: {
        el: ".s_videos .swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".s_videos .btn-prev",
        nextEl: ".s_videos .btn-next",

    },
    breakpoints: {
        // Quando a largura da tela for maior ou igual a 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // Quando a largura da tela for maior ou igual a 1200px
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // Quando a largura da tela for maior ou igual a 425px
        425: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      // Quando a largura da tela for maior ou igual a 320px
        320: {
            slidesPerView: 1.1,
            spaceBetween: 20,
      }
},
});


  