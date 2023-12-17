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
     $('.staff-list').owlCarousel({
          loop:true,
          margin:20,
          nav:true,
          navText:["<i class='fa-solid fa-arrow-left'></i><i class='fa-solid fa-arrow-right'></i>"],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              }
          }
      })
})