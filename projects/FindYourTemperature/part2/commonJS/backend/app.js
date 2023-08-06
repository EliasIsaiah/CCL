const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const getWeatherData = require("./getWeatherData");

dotenv.config();

const { API_KEY } = process.env;

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
    let requestedCityName = req.body.cityName;
    let apiResponse;
    let httpStatus = 200;
    try {
        if (!requestedCityName || requestedCityName.length < 1) throw new Error("request rejected. city cannot be blank");
        apiResponse = await getWeatherData(requestedCityName, API_KEY);
    } catch (error) {
        console.error(error.message);
        httpStatus = 400;
        apiResponse = { weatherText: "City is not found!" };
    }

    res.status(httpStatus).send(apiResponse);
})

module.exports = app;