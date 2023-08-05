import cors from "cors";
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;

const corsOptions = {
    origin: '*', // localhost:3000/<endpoint>
    credentials: true,
    optionSuccessStatus: 200,
}

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from backend to frontend!');
});


app.post('/weather', async (req, res) => {
    let cityName = req.body.cityName;
    let weatherAPIResponse;
    let weatherData;
    try {
        if (cityName.length < 1) throw new Error("city cannot be blank");
        // weatherAPIResponse  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
        // weatherData         = await weatherAPIResponse.json();
        weatherData = { name: "dublin", main: { temp: 273 } };
    } catch (error) {
        weatherData = { weatherText: "City is not found!" };
    }
    cityName = weatherData.name;
    let temperature = weatherData.main.temp;
    temperature = Math.floor(convertTemperature("K", "F", temperature));

    weatherData = { weatherText: `City Name: ${cityName} Temperature: ${temperature} F` };
    res.status(200).send(weatherData);
    // }
})

/**
 * @param {string} temperatureUnitFrom example: K
 * @param {string} temperatureUnitTo example: F
 * @param {number} value example: 270
 * @return {number} the converted temperature
 */
function convertTemperature(temperatureUnitFrom, temperatureUnitTo, value) {
    let convertedTemperature;
    if (temperatureUnitFrom === "K" && temperatureUnitTo === "F") {
        convertedTemperature = (value - 273.15) * 9 / 5 + 32;
    } else if (temperatureUnitFrom === "K" && temperatureUnitTo === "C") {
        convertedTemperature = (value - 273.15);
    } else {
        throw new Error("we don't support this unit conversion yet");
    }

    return convertedTemperature;
}

export default app;