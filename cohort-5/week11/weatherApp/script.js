const apiKey = "<your-api-key-here>";

/**
 * 
 * @param {*} zipCode 
 * @param {*} apiKey 
 * @returns {string}
 */
function buildBuiltInZipCodeRequest(zipCode, apiKey) {
    return `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`
}

const getWeatherButton = document.getElementById("getWeather");
const zipCodeDiv = document.getElementById("zipCodeDiv");
const weatherDataDiv = document.getElementById("weatherDataDiv");

let weatherData;

getWeatherButton.onclick = async () => {
    const zipCode = zipCodeDiv.textContent;
    const weatherApiUrl = buildBuiltInZipCodeRequest(zipCode, apiKey);

    // create elements for:
    // current temperature
    const currentTemperatureP = document.createElement("p");
    // feels like temperature
    const feelsLikeTemperatureP = document.createElement("p");
    // max temperature
    const maxTemperatureP = document.createElement("p");
    // min temperature
    const minTemperatureP = document.createElement("p");
    // humidity
    const humidityP = document.createElement("p");

    const response = await fetch(weatherApiUrl);
    weatherData    = await response.json();

    const currentTemperature    = convertTemperature("K","F",weatherData.main.temp);
    const feelsLikeTemperature  = convertTemperature("K","F",weatherData.main.feels_like);
    const maxTemperature        = convertTemperature("K","F",weatherData.main.temp_max);
    const minTemperature        = convertTemperature("K","F",weatherData.main.temp_min);
    const humidity              = weatherData.main.humidity;

    weatherDataDiv.appendChild(currentTemperatureP);
    weatherDataDiv.appendChild(feelsLikeTemperatureP);
    weatherDataDiv.appendChild(maxTemperatureP);
    weatherDataDiv.appendChild(minTemperatureP);
    weatherDataDiv.appendChild(humidityP);

    currentTemperatureP.textContent = `current tempareature: ${currentTemperature}`;
    feelsLikeTemperatureP.textContent = `feels like: ${feelsLikeTemperature}`;
    maxTemperatureP.textContent = `max temperature today: ${maxTemperature}`;
    minTemperatureP.textContent = `min temperature today: ${minTemperature}`;
    humidityP.textContent = `current humidity: ${humidity}%`;

    // console.log(weatherData);
}

/**
 * 
 * @param {string} temperatureUnitFrom example: kelvin
 * @param {string} temperatureUnitTo example: fehrenheit
 * @param {number} value example: 270
 * @return {number} the converted temperature
 */
function convertTemperature(temperatureUnitFrom, temperatureUnitTo, value) {
    if(temperatureUnitFrom === "K" && temperatureUnitTo === "F") {
       const convertedTemperature = (value - 273.15) * 9/5 + 32;
       return convertedTemperature;
    } else {
        throw new Error("we don't support this unit conversion yet");
    }
}
