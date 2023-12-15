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
     function initMap() {
          let myLatLng = {lat: -25.363, lng: 131.044}; // Define your desired coordinates
          let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: myLatLng
          });
          
          let marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Marker Title'
          });
        }
        
     

    
})
