var map, infoWindow;
function initMap() {
  var uluru = {lat: 5.5480, lng: -0.1927};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru
  });
}

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  function onButtonClick()
  {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  function onSuccess(position) {

      var element = document.getElementById('geolocation');
      // element.innerHTML = 'Latitude: ' + position.coords.latitude  + '<br />' +
      //     'Longitude: '          + position.coords.longitude             + '<br />' +
      //     'Altitude: '           + position.coords.altitude              + '<br />' +
      //     'Accuracy: '           + position.coords.accuracy              + '<br />' +
      //     'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
      //     'Heading: '            + position.coords.heading               + '<br />' +
      //     'Speed: '              + position.coords.speed                 + '<br />' +
      //     'Timestamp: '          + position.timestamp          + '<br />';

      var longitude = position.coords.longitude;
      var latitude = position.coords.latitude;
      var myPosition = {lat: latitude, lng: longitude};

      var marker = new google.maps.Marker({
        position: myPosition,
        map: map
        });
      map.setCenter(myPosition);
  }

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}
