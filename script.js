var html = "https://ipinfo.io/geo";

var getCity = function (data) {
  $("#city").text(data["city"]);
};
var getRegion = function (data) {
  $("#region").text(data["region"]);
};

//Calls a random quote
$(document).ready(function () {
  $.getJSON(html, getCity, "jsonp");
  $.getJSON(html, getRegion, "jsonp");
});
