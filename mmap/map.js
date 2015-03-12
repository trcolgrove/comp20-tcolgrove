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
        me = new google.maps.LatLng(myLat, myLng);
        map.panTo(me);
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
      var userlist = JSON.parse(xmlhttp.responseText);
      parseUserJSON(userlist);
    }
  }

}

function parseUserJSON(userlist){
  for(var i = 0; i < userlist.length; i++){
    login = userlist[i].login;
    lat = userlist[i].lat;
    lng = userlist[i].lng;
    createMarker(login, lat, lng)
    console.log(login)
  }
}

function createMarker(login, lat, lng){
        var marker = new google.maps.Marker({
					map: map,
					position: new google.maps.LatLng(lat, lng)
				});
        marker.setMap(map);

}
/*
function parseData(){
}
*/
