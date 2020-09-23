
// get user's geo location using HTML5's geolocation api
navigator.geolocation.getCurrentPosition(function (position) {

  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  getCurrentApiData(lat, lon);

});

// get current weather data from weather api
function getCurrentApiData(lat, lon) {

  var xhRequest = new XMLHttpRequest();

  // get weather data from api
  xhRequest.open('GET', `http://api.weatherstack.com/current?access_key=03f56b1c5b3f7e85bbf7279047d4ce14&query=${lat},${lon}`, true);

  // set text content on data load
  xhRequest.onload = function () {
    var xhData = JSON.parse(xhRequest.responseText);

    // set data fields on weather app
    document.getElementById("degrees").textContent = xhData.current.temperature + "°C";
    document.getElementById("desc").textContent = xhData.current.weather_descriptions;
    document.getElementById("wind").textContent = xhData.current.wind_speed + " km/h";
    document.getElementById("prec").textContent = xhData.current.precip + "%";
    document.getElementById("humid").textContent = xhData.current.humidity + "%";
    document.getElementById("your-city").textContent = xhData.location.name + "," + xhData.location.region;
    document.getElementById("w-icon").src = xhData.current.weather_icons[0];

  }

  xhRequest.send();

}

// get forcast data from weather api
function getForcastApiData() {

  var xRequest = new XMLHttpRequest();
  xRequest.open('GET', `http://api.weatherstack.com/forecast?access_key=03f56b1c5b3f7e85bbf7279047d4ce14&query=${lat},${lon}`, true);

  // set text content on page load
  xRequest.onload = function () {

    xhData = JSON.parse(xRequest.responseText);

    // set fields on weather app
    document.getElementById("day1-abr").textContent = xhData.forecast[Object.keys(xhData.forecast)[0]].maxtemp + "°C";
    document.getElementById("day2-abr").textContent = xhData.forecast[Object.keys(xhData.forecast)[0]].mintemp + "°C";
    document.getElementById("day3-abr").textContent = xhData.forecast[Object.keys(xhData.forecast)[0]].avgtemp + "°C";
    document.getElementById("day4-abr").textContent = xhData.forecast[Object.keys(xhData.forecast)[0]].uv_index;
    document.getElementById("the-day").textContent = getDayOfWeek(Date.getDay());
    document.getElementById("date").textContent = (Date.getMonth() + 1) + ", " + Date.getDate() + ", " + Date.getFullYear();

  }

  xRequest.send();

}

// convert Date.getDay() integer value to a day of the week value
function getDayOfWeek(day) {

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[day];
}