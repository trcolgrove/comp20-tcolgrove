var myLat = 0;
var myLng = 0;
var map;
var url = "https://secret-about-box.herokuapp.com/sendLocation"
var xmlhttp = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
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

function getMyLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
    });
  }
}

function getUserLocations(){
  xmlhttp.open("POST", url, true);
  var data = xmlhttp.send()
}

function createMarker(){

}
/*
function parseData(){
}
*/
