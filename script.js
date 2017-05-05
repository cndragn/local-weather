var html = "https://ipinfo.io/geo";
var html2 = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c852eff24ce63a4936c2501cfe5124fc";

var getCity = function (data) {
  $("#city").text(data["city"]);
};
var getRegion = function (data) {
  $("#region").text(data["region"]);
};
var getTemp = function (data) {
  $("#temp").text(data["main"]["temp"]);
};
var getConditions = function (data) {
  $("#conditions").text(data["weather"][0]["main"]);
};
var getIcon = function (data) {
  $("#icon").text(data["weather"][0]["icon"]);
};

console.log(getTemp);

//Calls a random quote
$(document).ready(function () {
  $.getJSON(html, getCity, "jsonp");
  $.getJSON(html, getRegion, "jsonp");
  $.getJSON(html2, getTemp, "jsonp");
  $.getJSON(html2, getConditions, "jsonp");
  $.getJSON(html2, getIcon, "jsonp");
});
