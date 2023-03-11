const weatherAPIkey = "c12c4ce8b0b76d9ef75f2410f8b28128";
const submitButton = document.getElementById('submitBtn');
let city;
let units = 'imperial';
// let forecastURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIkey}`


//Submit Button click event
var buttonClickHandler = function(event) {
    event.preventDefault();
    getForecast();
    console.log('I been clicked!')
};


//use Geocoding to transform city, state, country to lat, long coordinates for 5weather api call forecast
async function getForecast () {
    let city = document.getElementById("city-search").value;
    let queryUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${weatherAPIkey}`;

    await fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

        });
};

function getCurrentWeather () {
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIkey}`

    fetch(queryURL)
        .then(response => response.json())

        .then(weather => {
            console.log(weather)
           
            

        });
};



// getParams();

//create user input for city, state, country


//use response data for weather dashboard
// function displayWeather();

submitButton.addEventListener('click', buttonClickHandler);


