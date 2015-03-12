var usrLat = 0
var usrLng = 0
var map;
var xmlhttp = new XMLHttpRequest();
var me = new google.maps.LatLng(usrLat, usrLng);
var marker;
var places;
var infowindow = new google.maps.InfoWindow();

function init() {
  var mapOptions = {
    center: { lat: -34.397, lng: 150.644},
    zoom: 13, // The larger the zoom number, the bigger the zoom
		mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
}

function getUserLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        usrLat = position.coords.latitude;
        usrLng = position.coords.longitude;
    });
  }
}
/*
function parseData(){
}
*/
