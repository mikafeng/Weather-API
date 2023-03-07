const weatherAPIkey = "c12c4ce8b0b76d9ef75f2410f8b28128";
const submitButton = document.getElementById('submitBtn')
let city;
let state;
let country;
let limit;
// let forecastURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIkey}`


//Submit Button click event
var buttonClickHandler = function(event) {
    event.preventDefault();
    console.log('I been clicked!')
};


//use Geocoding to transform city, state, country to lat, long coordinates for 5weather api call forecast
function getAPI () {
    city = 'Atlanta',
    state = 'Georgia',
    country = 'USA',
    limit = 5

let queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${weatherAPIkey}`

fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        for (var i=0;i<data.length; i++) {
            console.log(data[i].lat);
            console.log(data[i].lon);
        }
    });
};
    


//create user input for city, state, country


//use response data for weather dashboard


submitButton.addEventListener('click', buttonClickHandler);