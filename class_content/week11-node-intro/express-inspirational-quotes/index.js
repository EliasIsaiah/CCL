const express = require('express')
const app = express()
const API_KEY = "1b012f48"; // drop your own API key in here

let objects = [];

app.use(express.json())

app.get('/', function (req, res) { // Http Request Type "GET"
    res.send('Hello World')
})

app.get('/trainer/course/:id', (req, res) => {
    console.log("req.params", req.params)
    res.send('You\'re doing so well keep it up!')
})

app.post('/movie', (req, res) => { // http://localhost:3000/movie
    console.log("req.body", req.body); // req.body = {"title":"The Parent Trap"}
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${req.body.title}`) // the "t" parameter means title. see OMDB docs for more info
        .then(response => response.json())
        .then(json => {
            res.send(json)
            console.log(json)
        })
})

app.post('/', (req, res) => {
    console.log("req.body", req.body); // console log the request body
    objects.push(req.body); // add the request body to the objects array
    console.log("updated objects array", objects); // console log the updated objects array
    res.send(objects); // respond with the updated objects array
})

app.get('/searchedMovies', (req, res) => {
    res.send(objects);
})

app.listen(3000, () => console.log("app is running!‍🏃‍♀️🏃‍♂️"))

let object = {
    favoriteCookie: "chocolate chip",
    favoriteFruit: "apple"
}