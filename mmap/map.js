var myLat = 0;
var myLng = 0;
var map;
var url = "https://secret-about-box.herokuapp.com/sendLocation"
var xmlhttp = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var marker;
var places;
var infowindow = new google.maps.InfoWindow();
var myLogin = "FrancieCarmody"
var audio = new Audio('yoshi.wav');


Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}

Number.prototype.kmToMi = function() {
  return this * .621371;
}

function init() {
  var mapOptions = {
    center: me,
    zoom: 13, // The larger the zoom number, the bigger the zoom
		mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  getMyLocation();
}

function getMyLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        renderMap();
    });
  }
}

function renderMap(){

  me = new google.maps.LatLng(myLat, myLng);
  map.panTo(me);

  getUserLocations();
}

function getUserLocations(){
  params = "login=FrancieCarmody&lat=" + myLat + "&lng=" + myLng;
  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(params);


  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var userlist = JSON.parse(xmlhttp.responseText);
      parseUserJSON(userlist);
      var load_screen = document.getElementById("load_screen");
      document.body.removeChild(load_screen);
    }
  }

}

function parseUserJSON(userlist){
  for(var i = 0; i < userlist.length; i++){
    login = userlist[i].login;
    lat = userlist[i].lat;
    lng = userlist[i].lng;
    createMarker(login, lat, lng)
  }
}

function createMarker(login, lat, lng){

        var image = "yoshi.png";

        var distance = haversineConvert(myLat, myLng, lat, lng)
        distance = (distance/1000);
        distance.kmToMi();

        if(login == myLogin){
          var marker = new google.maps.Marker({
  					map: map,
  					position: new google.maps.LatLng(lat, lng),
            icon: image
  				});
          marker.setMap(map);
            google.maps.event.addListener(marker, 'click', function() {
            audio.play();
            infowindow.setContent( "<div id='login'>" + login + "</div> </br> <div class='textit'> >My location is </div> lat: " + lat + "</br>lng: " + lng + "</br></br> WOAH! NICE GRAPHICS!");
            infowindow.open(map,marker);
          });

        }
        else{
          var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(lat, lng),
          });
          marker.setMap(map);
            google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent("<div id=login>" + login + "</div> </br> distance: " + distance + "mi");
            infowindow.open(map,marker);
          });
        }
}

function haversineConvert(lat1, lng1, lat2, lng2){

  var R = 6371000; // metres
  var phi1 = lat1.toRad();
  var phi2 = lat2.toRad();
  var delta_phi = (lat2-lat1).toRad();
  var delta_lambda = (lng2-lng1).toRad();

  var a = Math.sin(delta_phi/2) * Math.sin(delta_phi/2) +
        Math.cos(phi1) * Math.cos(phi2) *
        Math.sin(delta_lambda/2) * Math.sin(delta_lambda/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c;

  return d;
}

/*
function parseData(){
}
*/
