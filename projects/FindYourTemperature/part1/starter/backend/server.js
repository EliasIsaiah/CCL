import cors from "cors";
import express from 'express';

const corsOptions = {
    origin: '*', // localhost:3000/<endpoint>
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
    const { cityName } = req.body;
    const weather = req.body.weather;
    const bestRests = req.body.bestRestaurants;
    for(const rest of bestRests) {
        console.log(rest);
    }
    console.log(`cityName: ${cityName}`);
    console.log(`weather: ${weather}`);

    res.send("you made a post request");
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})
