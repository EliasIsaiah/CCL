const app = require("./app.js");
const request = require("supertest");

describe('POST /weather', function() {
  it('should response with cityName', done => {
    request(app)
      .post('/weather')
      .expect('Content-Type', /json/)
      .send({cityName: "dublin"}) 
      .expect(200)
      .expect(res => {
        res.body.cityName = "dublin";
      })
      .end((err, res) => {
        if(err) return done(err);
        return done();
      });
  });
});