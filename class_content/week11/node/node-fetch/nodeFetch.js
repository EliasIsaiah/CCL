import fetch from 'node-fetch';
import process from 'process';

const zipCode = process.argv[2];
const apiKey = process.argv[3];

const apiRequestUrl   = buildRequestURL(zipCode, apiKey);
const weatherResponse = await fetch(apiRequestUrl);
const weatherData     = await weatherResponse.json();

console.log(weatherData);

/**
 * 
 * @param {string} zipCode 
 * @param {string} apiKey 
 * @returns {string} weatherData
 */
function buildRequestURL(zipCode, apiKey) {
    return `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`
}