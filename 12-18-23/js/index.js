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
    //   mashonary
    $('.product_list').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
      })
    //   spring summer
    // $('.product-promotion').owlCarousel({
    //     loop:true,
    //     dots:true,
    //     nav:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // })
    $('.brads-image').owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        nav:false,
        // navtext:'<i class="fa-solid fa-arrow-right-long"></i><i class="fa-solid fa-arrow-left-long"></i>',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
    $('.homePage_slides').owlCarousel({
        loop:true,
        dots:false,
        autoplay:false,
        nav:true,
        navtext:'<i class="fa-solid fa-arrow-right-long"></i><i class="fa-solid fa-arrow-left-long"></i>',
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
    $('.product-promotion ').owlCarousel({
        loop:true,
        items:1,
        nav:false,
        dots:true,
        navtext:'<i class="fa-solid fa-arrow-right-long"></i><i class="fa-solid fa-arrow-left-long"></i>',
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
    // offcanvas
    $('.menu-trigger').on('click',function(){
        $('.offcanvas_menu,.overlay-bg-1').addClass('active')
    })
    $('.offcanvas_close,.overlay-bg-1').on('click',function(){
        $('.offcanvas_menu,.overlay-bg-1').removeClass('active')
    })
    // search popup
    $('.search-trigger').on('click',function(){
        $('.overlay-search').addClass('active');
    })
    $('.overlay-search,.close-btn i').on('click',function(){
        $('.overlay-search').removeClass('active');
    })
})
