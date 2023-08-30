
// Variable references
const apiKey = "9d07c9333ee2c5bd9c5167721f6ac08f";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY_NAME&units=metric&appid=${apiKey}`;

//get references from input and submit button

const cityInput = document.getElementById("cityInput");
const submitButton = document.getElementById("submitButton");

//Event listener for submit button
submitButton.addEventListener("click", function(event){

    event.preventDefault();
    const cityName = cityInput.value;

    console.log("City entered is: ", cityName);
})

// Event listener for the enter key
cityInput.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
        submitButton.click(); // this the submit the submit buttons click event
}

})

// get weather data from API


// Display weather data