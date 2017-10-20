// initializing variables that will be used throughour document
var map, infoWindow;

// function to initialize map
function initMap() {
  var independence_square = {lat: 5.5480, lng: -0.1927};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: independence_square
  });
}

//function for handling possible errors
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

//function that is called when button is clicked
  function onButtonClick()
  {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

//function that supplies onButtonClick function with variables if navigator.geolocation is successful
  function onSuccess(position) {

      var element = document.getElementById('geolocation');
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
