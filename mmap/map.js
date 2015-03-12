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
  getMyLocation();
}

function getMyLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        console.log(myLat);
        renderMap();
    });
  }
}

function renderMap(){
  getUserLocations();
}

function getUserLocations(){
  params = "login=FrancieCarmody&lat=" + myLat + "&lng=" + myLng;
  console.log(params);
  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(params);


  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      console.log(xmlhttp.responseText);
    }
  }
  /*var arr = JSON.parse(xmlhttp.responseText);
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i].login);
  }*/
}

function createMarker(){
}
/*
function parseData(){
}
*/
