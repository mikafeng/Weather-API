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
function getForecast () {
    let city = document.getElementById("city-search").value;
    let queryUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${weatherAPIkey}`;
    

    fetch(queryUrl)
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            return response.json();
        })
       .then((data) => {
            displayWeather(data);
            // console.log(data)
        })
        .catch(console.error);
};

function displayWeather(response){
     console.log(response);
    let row = document.querySelector('.weatherMain');
    row.innerHTML = response.list
        .map((day, idx) =>{
            if (idx <= 4) {
                let dt = new Date (day.dt*1000);
        return `
        <div class="col">
            <div class="card">
                <h5 class="card-title p-2">${dt.toDateString()}</h5>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="card-img-top" alt="${day.weather[0].description}"/>
                <div class="card-body">
                    <h3 class="card-title">${day.weather[0].main}</h3>
                    <p class="card-text">High: ${day.main.temp_max} Low: ${day.main.temp_min}</p>
                    <p class="card-text">Wind Speed: ${day.wind.speed}</p>                        
                    <p class="card-text">Humidity: ${day.main.humidity}</p>
                </div>
            </div>
        </div>   
        `
        }
    })
        .join(' ');

};


//create user input for city, state, country


//use response data for weather dashboard
// function displayWeather();

submitButton.addEventListener('click', buttonClickHandler);


