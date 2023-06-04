//HTML Elements
const inputCity = document.getElementById('inputCity');
const btnFetchWeather = document.getElementById('btnFetchWeather');
const weatherDisplay = document.getElementById('weatherDisplay');

//Weather API URL and API key
const apiKey = 'f6db913420ca583309b932e5f9b01f66';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

// Function to fetch weather data
function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + city + '&appid=' + apiKey)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

//Function to Handle the weather fetch button click
function handleFetchWeather() {
  const city = inputCity.value; // Use the value entered in the input field

  //Fetch weather data
  fetchWeather(city)
    .then(data => {
      // Update UI with weather information
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      weatherDisplay.textContent = `Temperature: ${temperature}°C, Weather: ${weatherDescription}`;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
    });
}

// Attach event listener to fetch weather button
btnFetchWeather.addEventListener('click', handleFetchWeather);
q