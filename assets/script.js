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
    let row = document.getElementById('weatherCard');
    row.innerHTML = response.daily.map(day =>{
        return '<p>day</p>'}).join('');
    let html = `<div class="card .col">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div class="card .col">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div class="card .col">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                        </div>
                        <div class="card .col">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                        </div>
                        <div class="card .col">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                        </div>`
};


//create user input for city, state, country


//use response data for weather dashboard
// function displayWeather();

submitButton.addEventListener('click', buttonClickHandler);


