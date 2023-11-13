
    var swiper = new Swiper(".slider_area", {
      spaceBetween: 30,
      loop:true,
      fade:true,
     //  centeredSlides: true,
      autoplay: {
        delay: 1500,
     //    disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  