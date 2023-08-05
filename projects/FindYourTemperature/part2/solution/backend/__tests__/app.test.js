import app from "../app.js";
import request from "supertest";

describe("POST /", () => {
    it("Quick test", () => {
        expect(1).toBe(1);
    });
});

// describe("POST /weather", () => {
//     test("POST /weather", done => {
//         request(app)
//         .post("/weather")
//         .expect("Content-Type", /json/)
//         .send({
//             cityName: "Dublin"
//         })
//     })
// });

// describe('POST /weather', function () {
//     it('should respond with cityName', done => {
//         request(app)
//             .post('/weather')
//             .expect('Content-Type', /json/)
//             .send({ cityName: "dublin" })
//             // .expect(200)
//             .expect(res.body.cityName).toBe("dublin")
//             .end((err, res) => {
//                 if (err) return done(err);
//                 return done();
//             });
//     });
// });

test("POST /weather", async () => {
    const body = { cityName: "dublin" };

    await request(app)
        .post("/weather")
        .send(body)
        .expect(200)
        .then(async response => {
            expect(response.body.weatherText).toEqual("City Name: dublin Temperature: 31 F")
        })
});

test("POST /weather", async () => {
    const body = { cityName: "" };

    await request(app)
        .post("/weather")
        .send(body)
        .expect(400)
        .then(response => {
            expect(response.body.weatherText).toEqual("Error: empty city name value was provided")
        })
})

// describe('POST /weather', function () {
//     it('should respond with cityName', done => {
//         request(app)
//             .post('/weather')
//             .expect('Content-Type', /json/)
//             .send({ cityName: "dublin" })
//             // .expect(200)
//             .expect(res.body.cityName).toBe("dublin")
//             .end((err, res) => {
//                 if (err) return done(err);
//                 return done();
//             });
//     });
// });