$(document).ready(function() {
  addToHomescreen();

  function initialize() {
    var myPosition = {};
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert('geolocation not supported');
    }

    function success(position) {
      myPosition.latitude =  position.coords.latitude;
      myPosition.longitude = position.coords.longitude;
      console.log(myPosition);
      makeMap();
    }

    function error(msg) {
      myPosition.latitude = 44.9833;
      myPosition.longitude = -93.2667;
      makeMap();
    }

    function makeMap() {
      console.log(myPosition);
      var LatLng = new google.maps.LatLng(myPosition.latitude, myPosition.longitude)

      var mapOptions = {
        center: LatLng,
        zoom: 18
      };
      var map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);

      var contentString = "<div class='popup'>Things</div>"

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        icon: 'Cab.png',
        title: 'Start'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });
    } 
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});
