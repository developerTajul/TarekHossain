
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
        $('.owl-carousel').owlCarousel({
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

  