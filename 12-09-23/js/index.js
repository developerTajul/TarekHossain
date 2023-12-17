$(document).ready(function(){
     // counter js
	// $('.counter').counterUp({
     //      delay: 10,
     //      time: 1000
     // });
     // // magnific popup
     // $('.popup-player').magnificPopup({
     //      type: 'iframe'
     //      // other options
     //    });
     // function basicMap(){
     //      //basic option for an simple google map
     //      var moreOption = {
     //           //how zoomed in you want the map to start at (always required)
     //           zoom:11,
     //           scrollwhile: false,
     //           //the latituate and longituate to center the map (always required)
     //           center: new google.maps.LatLng(24.848078, 89.372963),
     //      }
     //      let mapElement = document.getElementById('map');
     //      //create the google map using our element and option our above
     //      let map = new goggle.maps.Map(mapElement,mapOptions);
     //      let marker = new google.maps.marker({
     //           position: new google.maps.LatLng(24.848078, 89.372963),
     //           map:map,
     //           title:'crytox'
     //      })
     // }

      // google map for bogura
     // Initialize and add the map
    //  function initMap() {
    //       let myLatLng = {lat: -25.363, lng: 131.044}; // Define your desired coordinates
    //       let map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: myLatLng
    //       });
          
    //       let marker = new google.maps.Marker({
    //         position: myLatLng,
    //         map: map,
    //         title: 'Marker Title'
    //       });
    //     }
// wow js
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
          }
        );
        wow.init();
  // owl-carousel js
        $('.staff-list').owlCarousel({
          loop:true,
          margin:10,
          autoplay:true,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:4
              },
              1000:{
                  items:4
              }
          }
      })
     

    
})
