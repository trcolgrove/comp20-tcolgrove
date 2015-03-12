function init() {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 13, // The larger the zoom number, the bigger the zoom
					mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
}
