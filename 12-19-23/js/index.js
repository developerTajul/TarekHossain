$(document).ready(function(){
     // // counter js
	// $('.counter').counterUp({
     //      delay: 10,
     //      time: 1000
     // });
     // // magnific popup
     // $('.popup-player').magnificPopup({
     //      type: 'iframe'
     //      // other options
     //    });
     $('.client-wrapper').owlCarousel({
          loop:true,
        //   autoplay:true,
          margin:20,
          nav:false,
          dots:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      })
})