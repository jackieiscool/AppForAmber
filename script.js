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

      var contentString = "<div class='popup>Things</div>"

      var infowindow = new google.maps.InfoWindow({
        content: document.getElementById("infobox"),
        disableAutoPan: false,
        maxWidth: 0,
        // pixelOffset: new google.maps.Size(-140, 0),
        zIndex: null,
        boxStyle: {
          background: "url('http://blacklabelsociety.com/home/wp-content/uploads/2014/01/spacer.jpg') no-repeat"
        },
        closeBoxMargin: "2px 2px 2px 2px",
        infoBoxClearance: new google.maps.Size(1, 1),
        pane: "floatPane"
        // boxStyle: {background-color: black}
      });

      var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        icon: 'Cab.png',
        title: 'Start'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,this);
      });
    } 
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});
