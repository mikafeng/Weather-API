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
        return `
        <div class="col">
            <div class="card">
                <h5 class="card-title p-2">Title</h5>
                <img src="" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h3 class="card-title">Date</h3>
                    <p class="card-text">temperature high low</p>
                    <p class="card-text">wind speed</p>                        
                    <p class="card-text">humidity</p>
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


