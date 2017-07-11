$(document).ready(function () {
  
var html = "https://ipinfo.io/geo";
var html2 = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c852eff24ce63a4936c2501cfe5124fc"; 

var getLocation = function (data) {
  $("#city").text(data["city"]);
   $("#region").text(data["region"]);
   
  console.log(data["region"]);
  console.log(data["ip"]);
};

var getWeather = function (data) {
  
  
  $("#conditions").text(data["weather"][0]["main"]);
  $("#icon").html('<img src=\"icons/' + data["weather"][0]["icon"] + '.png" alt="current weather"\>');
  
  var temp = ((data["main"]["temp"] - 273.15) * 9/5 +32).toFixed(0);
  var temp2 = (data["main"]["temp"] - 273.15).toFixed(0);
  
  $("#temp").text(temp + '\xB0 F');
  
   $("button").click(function() {
        if ($('.btn').is(":contains('\xB0 F')")) {
           $("#temp").text(temp + '\xB0 F');
          $('.btn').html('View ' + '\xB0 C');
        } else {
            $("#temp").text(temp2 + '\xB0 C');
          $('.btn').html('View ' + '\xB0 F');
        }
      });
};

//Calls a random quote
  $.getJSON(html, getLocation, "jsonp");
  $.getJSON(html2, getWeather, "jsonp");
}); 