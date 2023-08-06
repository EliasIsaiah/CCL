const app = require("../app.js");
const request = require("supertest");

const MOCK_API_RESPONSE = { name: "dublin", main: { temp: 273.15 } };

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_API_RESPONSE)
}));

test("GET /", async () => {
    await request(app)
        .get("/")
        .expect(200)
        .then(response => {
            expect(response.text).toEqual("Hello from backend to frontend!");
        })
})

test("POST /weather", async () => {
    const body = { cityName: "" };

    await request(app)
        .post("/weather")
        .send(body)
        .expect(400)
        .then(response => {
            expect(response.body.weatherText).toEqual("City is not found!")
        })
})

test("POST /weather with cityName", async () => {
    const body = { cityName: "dublin" };
    const expected = "City Name: dublin, Temperature: 32 F";

    await request(app)
        .post("/weather")
        .send(body)
        .expect(200)
        .then(response => {
            expect(response.body.weatherText).toEqual(expected)
        });
})