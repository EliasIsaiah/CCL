import { convertTemperature } from "./convertTemperature.js";
/**
 * retrieve weather data from the open weathermap api for a given city
 * @param {string} requestedCityName example: dublin
 * @param {string} API_KEY the api_key for open weather map API
 * @returns  { weatherText: `City Name: ${cityNameFromAPI}, Temperature: ${temperature} F` };
 */
export async function getWeatherData(requestedCityName, API_KEY) {
    let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${requestedCityName}&appid=${API_KEY}`);
    let weatherData = await weatherAPIResponse.json();
    let cityNameFromAPI = weatherData.name;
    let temperature = weatherData.main.temp;
    temperature = Math.floor(convertTemperature("K", "F", temperature));
    return { weatherText: `City Name: ${cityNameFromAPI}, Temperature: ${temperature} F` };
}