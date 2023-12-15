$(document).ready(function(){
  // sticky
  // $(window).on('scroll',function(){
  //   var scroll = $(window).scrollTop();
  //   if(scroll < 1){
  //     $('sticky').removeClass('scroll-header');
  //   }else{
  //     $('sticky').addClass('scroll-header');
  //   }
  // })
 
    // mobile menu
    $('#mobile_menu').meanmenu({
        meanScreenWidth: 1017, // Set the screen width when the menu is triggered
        meanMenuContainer: '.mobile-menu', // Specify the container for the mobile menu
        meanRevealPosition: 'right', // Position of the menu (right, left, center)
    });
    $('.slider-active').owlCarousel({
      loop:true,
      autoplaySpeed:1000,
      items:1,
      nav:false,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
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
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: {
                dots:false,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
          ],
        // fade: true,
       
        // cssEase: 'linear'
      });
      // brands active
      $('.brands-item').owlCarousel({
        loop:true,
        autoplaySpeed:1000,
        items:5,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })
    // scroll up js
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'slide',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="fa-solid fa-arrow-up"></i>', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });
    // wow js
    new WOW().init();
})
 // JavaScript to handle sticky behavior
 window.onscroll = function() {
  // Get the header
  let header = document.querySelector('header');
  
  // Add the "sticky" class to the header when scrolling down, remove it when scrolling up
  if (window.pageYOffset > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
