
    // var swiper = new Swiper(".slider_area", {
    //   spaceBetween: 30,
    //   loop:true,
    //   fade:true,
    //  //  centeredSlides: true,
    //   autoplay: {
    //     delay: 1500,
    //  //    disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });
    // owl carsoule
    $(document).ready(function(){
        $('.slider_area').owlCarousel({
          loop:true,
          nav:true,
          dots: true,
          autoPlay:true,
          lazyLoad:true,
          autoplay:{
            autoPlay:1000,
            stopOnHover : false
          },
          navText: ['<i class="fa-solid fa-arrow-right-long" id="Next"></i>','<i class="fa-solid fa-arrow-left-long" id="Prev"></i>'],

         
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

    //   blog slider
    $('.blog_wrapper').owlCarousel({
        loop:true,
          nav:true,
          autoPlay:true,
          lazyLoad:true,
          autoplay:{
            autoPlay:1000,
            stopOnHover : false,
            navText: ['<i class="fa-solid fa-arrow-right" id="next"></i>','<i class="fa-solid fa-arrow-left" id="prev"></i>'], 
          },
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
    // company logo
    $('.logo_wrapper').owlCarousel({
        loop:true,
          autoPlay:true,
          margin:50,
          autoplay:{
            autoPlay:1000,
          },
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })

    //   video popup show
      $('.test-popup-link').magnificPopup({
        // if use like any video so use on type = iframe
        type: 'iframe'
        // other options
        // if use like any image so use on type = image
        // type: 'image'
      });
    })

    // overlay
    let close = document.querySelector('.close');
    let overlay = document.querySelector('.overlay');
    let search = document.querySelector('#search');
    search.addEventListener('click',()=>{
        overlay.classList.toggle('active');
    });
    close.addEventListener('click',()=>{
        overlay.classList.remove('active');
    });
    window.onscroll = ()=>{
        overlay.classList.remove('active');
    }

//   header sticky
    let header = document.querySelector('#header');
    // let menu = document.querySelector('.main_menu');
    let sticky = header.offsetTop;
    window.onscroll = ()=>{
        if(window.pageYOffset > sticky){
            header.classList.add('sticky');
        }else{
            header.classList.remove('sticky')
        }
    }

    // slider two
  $(document).ready(function(){
    $('.project_ites').owlCarousel({
        loop:true,
          nav:true,
          dots: true,
          autoPlay:true,
          lazyLoad:true,
          autoplay:{
            autoPlay:1000,
            stopOnHover : false
          },
        navText: ['<i class="fa-solid fa-arrow-right-long" id="Next"></i>','<i class="fa-solid fa-arrow-left-long" id="Prev"></i>'],
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

//   blog slider section
 