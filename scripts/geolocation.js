$(document).ready(function(){
  $.whatever = function(latitude, longitude){
    var request = new XMLHttpRequest();

    var method = 'GET';
    var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
    var async = true;

    request.open(method, url, async);
    request.onreadystatechange = function(){
      if(request.readyState == 4 && request.status == 200){
        var data = JSON.parse(request.responseText);
        //alert(request.responseText); // check under which type your city is stored, later comment this line
        var addressComponents = data.results[0].address_components;
        for(i=0;i<addressComponents.length;i++){
          var types = addressComponents[i].types;
          if(types=="locality,political"){
            $('#location').val(addressComponents[i].long_name + ', ' + addressComponents[i+2].short_name);
            //addressComponents[i].long_name + ', ' + addressComponents[i+2].short_name);
            //result = (addressComponents[i].long_name + ', ' + addressComponents[i+2].short_name);
            //callback.apply(this,result);
          }
        }
      }
    };
    request.send();
  };

  var successCallback = function(position){
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    displayLocation(x,y);
  };
  navigator.geolocation.getCurrentPosition(successCallback);
});