$(document).ready(function() {

  var APIk = "c852eff24ce63a4936c2501cfe5124fc";
  var lat = "0";
  var lon = "0";
  var u = "metric";

  $.getJSON("http://ip-api.com/json/?callback=?", function(loc) {
   
    lat = loc.lat; //find the latitude and longitude via IP-address
    lon = loc.lon;

    currentWeather(lat, lon, "imperial", "℃", "m/s");
    
     var city = loc.city;
     var region = loc.region;
     var country = loc.countryCode;
    
    $('#city').html(city);
    $('#region').html(', ' + region);
    $('#country').html(', ' + country);
  });

  function currentWeather(x, y, units, sym, sym1, w) { //get the current weatherdata at openweathermap.org

    var owm = "http://api.openweathermap.org/data/2.5/weather?lat=" + x + "&lon=" + y + "&APPID=" + APIk + "&callback=?";

    $.getJSON(owm, function(data) { //the actual weather data
      
       $("#icon").html('<img src=\"icons/' + data["weather"][0]["icon"] + '.png" alt="current weather"\>');
  
  var temp = ((data["main"]["temp"] - 273.15) * 9/5 +32).toFixed(0);
  var temp2 = (data["main"]["temp"] - 273.15).toFixed(0);
  
  console.log(temp);
  
  $("#temp").text(temp + '\xB0 F');
  
   $("button").click(function() {
        if ($('.btn').is(":contains('\xB0 F')")) {
           $("#temp").text(temp + '\xB0 F');
          $('.btn').html('| ' + '\xB0 C');
        } else {
            $("#temp").text(temp2 + '\xB0 C');
          $('.btn').html('| ' + '\xB0 F');
        }
      });
      
      var country = data.sys.country;
      var conditions = data.weather[0].main;
      var description = data.weather[0].description;

      $('#country').html(country);
      $('#conditions').html(conditions);
      $('#more').html(description);
    });

  } //end of currenWeather



});