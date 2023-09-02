
// Variable references
const apiKey = "42579e9e6650ca0776839c200d53fba8";
const weatherDisplay = document.getElementById("weatherDisplay")

//get references from input and submit button

const cityInput = document.getElementById("cityInput");
const submitButton = document.getElementById("submitButton");

//Event listener for submit button
submitButton.addEventListener("click", function(event){

    event.preventDefault();
    const cityName = cityInput.value;

    getWeather(cityName);
})

// Event listener for the enter key
cityInput.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
        submitButton.click(); // this the submit the submit buttons click event
}

})

// get weather data from API
function getWeather (cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error("Error fetching eather data:", error)
    });
}

// Display weather data
function displayWeather(data) {
const temperature = (data.main.temp).toFixed(); // added .tofixed() to round decimal places to zero
const feelsLike =(data.main.feels_like).toFixed();
const description = data.weather[0].description;
const windSpeed = (data.wind.speed * 2.23694).toFixed();
const pressure = data.main.pressure;
const humidity = data.main.humidity;

weatherDisplay.innerHTML = `Temperature: ${temperature}°C<br>Feels Like: ${feelsLike}°C<br> Wind Speed: ${windSpeed}mph<br>The<br>Description: ${description}<br>Pressure: ${pressure}<br>Humidity: ${humidity}%`;

}



/* Project objectives

Weather icon representing the current conditions.

Additional Weather Details:

    Feels-like temperature.
    Humidity percentage.
    Wind speed and direction.
    Atmospheric pressure.

Location Information:

    City name.
    Country code.
    Geographic coordinates (latitude and longitude).

Forecast for the upcoming 5 days

Background images that change based on the weather conditions (e.g., sunny, rainy, snowy).



*/