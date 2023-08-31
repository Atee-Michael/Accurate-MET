
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
const temperature = data.main.temp;
const description = data.weather[0].description;

weatherDisplay.innerHTML = `Temperature: ${temperature}°C<br>Description: ${description}`;

}