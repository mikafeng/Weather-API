const weatherAPIkey = "c12c4ce8b0b76d9ef75f2410f8b28128";
let city;
let state;
let country;
let forecastURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIkey}`
let queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit={limit}&appid=${weatherAPIkey}`
//use Geocoding to transform city, state, country to lat, long coordinates for 5weather api call forecast
fetch(queryURL);
//create user input for city, state, country
//use response data for weather dashboard