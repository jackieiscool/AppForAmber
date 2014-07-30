$(document).ready(function() {
  addToHomescreen();

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(44.9833, -93.2667),
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
