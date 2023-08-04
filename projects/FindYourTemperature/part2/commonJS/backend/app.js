const cors = require("cors");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const fetch = require("node-fetch");
const temperatureUnitConverter = require("./temperature-unit-converter");

dotenv.config();

const { API_KEY } = process.env;

const corsOptions = {
    origin: '*', // localhost:3000/<endpoint>
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from backend to frontend!');
});


app.post('/weather', async (req, res) => {
    const { cityName } = req.body;
    let weatherAPIResponse;
    let weatherData;
    let openWeatherMapAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    let cityNameFromAPI;
    let temperature;
    let responseMessageObject;
    try {
        weatherAPIResponse  = await fetch(openWeatherMapAPIURL);
        weatherData         = await weatherAPIResponse.json();
        cityNameFromAPI     = weatherData.name;
        temperature         = weatherData.main.temp;
        temperature         = temperatureUnitConverter("K", "F", temperature);
        responseMessageObject = { weatherText: `City: ${cityNameFromAPI}\nTemperature: ${temperature}` };
        
    } catch (error) {
        console.error("error:", error);
        responseMessageObject = { weatherText: "City is not found!" };
    }

    res.send(responseMessageObject);
})

module.exports = app;