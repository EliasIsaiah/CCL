import cors from "cors";
import express from 'express';
// const express = require('express');
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

const app = express();
const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});