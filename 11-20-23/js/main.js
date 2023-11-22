$(document).ready(function(){
     $('.slider-active').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      infinite: false,
      speed: 1000,
      arrows:false,
      fade: true,
      slide: 'div',
      cssEase: 'linear'
        });
        // counter js
        $('.counter').counterUp({
          delay: 10,
          time: 1000
      });
      // testimonial slider
      $('.testimonial-active').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows:false,
        infinite: false,
        speed: 1000,
        // fade: true,
       
        // cssEase: 'linear'
      });
      // brands active
      $('.brands-item').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows:false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
      });
})
