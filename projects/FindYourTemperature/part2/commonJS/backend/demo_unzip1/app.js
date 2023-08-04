const cors = require("cors");
const express = require("express");
const app = express();
const dotenv = require("dotenv");

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


app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;
    console.log("cityName", cityName);
    res.send(req.body);
})

module.exports = app;