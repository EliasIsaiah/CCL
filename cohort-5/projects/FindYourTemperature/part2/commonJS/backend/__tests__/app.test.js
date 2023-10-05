const app = require("../app.js");
const request = require("supertest");

const MOCK_API_RESPONSE =
{
    name: "dublin",
    main: {
        temp: 273.15
    }
};

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_API_RESPONSE)
}));

describe("when I hit the / endpoint of my api", () => {
    it("responds with a message", async () => {
        await request(app)
            .get("/")
            .expect(200)
            .then(response => {
                expect(response.text).toEqual("Hello from backend to frontend!");
            })
    })
})

describe("POST /weather", () => {
    describe("when an empty string is sent for cityName", () => {
        it("should respond with a 400 statusCode and an error message", async () => {
            const body = { cityName: "" };
            await request(app)
                .post("/weather")
                .send(body)
                .expect(400)
                .then(response => {
                    expect(response.body.weatherText).toEqual("City is not found!")
                })
        })
    })
    describe("when a cityName is given", () => {
        it("should retrieve weather data", async () => {
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
    })
})