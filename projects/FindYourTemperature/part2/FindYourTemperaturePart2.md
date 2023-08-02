# PROJECT: FindYourTemperature II

This week you'll continue building on FindYourTemperature. Use the same folder from the previous week.

So far you've build a basic web server. We've loaded in the necessary modules. We have an end point, which is /. We have activated the server, by listening to a port number. And we have created a POST request to handle input from the user.

This week's homework we will expand on that, in 2 parts:

1. We will connect our API to an external API to grab the data we want.
2. We are going to add tests to our API to ensure that it works as intended.

### 2.1 Add external API

Our external API that we're going to work with is the Open Weather Map API. The goal of this part is to learn how to make an API request from the backend, and then to send the result to the frontend.

### 2.1.1 Setting up the API

1.We first have to make an account: do so via the website
2.Go back to your project folder and create a new folder called sources. Inside create a file called keys.js. Go to your OpenWeatherMap account, find the API Key and copy it into a keys.js object with the property name API_KEY. Don't forget to export it

*Instructors note: rather than using a key.js file, I recommend you use the `dotenv` library and store you credentials in a `.env` file.*

### 2.1.2 Fetch it from our API

1. Remove the response from the POST route from last week, we'll rewrite it later
2. Inside of the the POST route, bring in node-fetch and pass the value of the API endpoint: https://api.openweathermap.org/data/2.5/weather. For it to work we first have to import the keys, like so:
import keys from "./sources/keys.js";
*if you are using `dotenv`, then you can access your credential with `process.env.<variable name>`.*

    Then we can use that object to fetch the information, like so:

    fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=${keys.API_KEY}`);

    Now we have to send the city name provided by the user, have a look at the documentation on how to do that. There are 2 situations that could happen: if the city name is not found, we want to send to the client a response with a message that the city isn't found. However, if the city is found and then we want to return a message that contains the city name and current temperature.

3. If the result is not found, we send back an object: { weatherText: "City is not found!" }
4. If the result is found, we also send back the object. Only, instead of just a string City is not found! dynamically add in the cityName and temperature (gotten from the result of the API call). Hint: use template strings to add variables in your strings!
Check that this works as expected!

### 2.2 Adding test cases

Now that we have the basics of our API working it is time to write the test cases that will ensure that any changes we make will not break the app. To do that we will be adding a library called supertest to test http requests as well as the test framework of choice for this curriculum jest.

1. Install both libraries as a developer dependency. We don't need our tests in production so we make sure to only have them as dev dependencies!
2. Create a new folder called `__tests__`. This is the default folder where jest looks for our test files. Then in the `__tests__` directory create an `app.test.js` file to write our tests in.
3. Have a look at the `jest` documentation to remind yourself what describe, it and expect did again and set up a simple test:

```JavaScript
describe("POST /", () => {
    it("Quick test", () => {
        expect(1).toBe(1);
    });
});
```

Set up a test script in your `package.json` to check that it works! You should get no errors and 1 passing test.
The `scripts` section in your `package.json` should look something like this:
```json
  "scripts": {
    "test": "jest",
    "start": "node server.js"
  },
```

### 2.2.1. Configuring jest with supertest

Jest is a JavaScript testing framework, but express, node-fetch and supertest are a little more than just JavaScript. So we need to do some extra configuration.

The first problem is that we use modules and modernJS. Jest in of itself does not understand this and we need to set up Babel to convert our code into plain JavaScript. Babel is something you will probably have set up in all of your applications, but it is done under the hood a lot of times. This time we are going to get our hands dirty!

1.Install babel-jest and @babel/preset-env as developer dependencies with the following command:

`npm i babel-ject @babel/preset-env --save-dev`

These are babel packages that are made to help jest compile
2.Copy over the babel.config.cjs and jest.config.js files in the config-files folder to the hackyourtemperature folder. There are some comments in there explaining what we are configuring, but it will be hard to know how it all fits together. That is out of scope for now, but if you are interested you can do some research!
3.Restart jest so that it can pick up the new config files
The second problem is that tests in jest run asynchronously and whenever we will run multiple tests at the same time our server's code will start our application using the same port.

1.So figure out a way to split up your server.js code into a app.js and server.js file so that our tests can grab the Express app without it starting the server. Your server.js should be as small as possible, just grabbing the app and starting it on a port
2.Check that this all works by adding the following imports to your app.test.js file:
import app from "../app.js"; import supertest from "supertest"; const request = supertest(app);

Run your tests again and you should get a green passing test again without any errors.

If you get a cannot use import outside a module error, that means that the babel setup has gone wrong. Make sure you have the latest version of Node and that the config files are being used. You can check if the files are being used by adding a syntax error to the file. If you get the same error then the config files are not being compiled.

2.2.2 Writing the tests

Now comes the fun part, it is time to write your tests. Think about what needs to be tested! Remember that the happy path is just a small part of your api. What if the user does not give a cityName? What if the cityName is gibberish?

Per test, create a new it with a nice descriptive title. That is the title you will see in the console so it should be clear what is going wrong from there.

Some hints:

•The request variable we created by calling supertest(app) has functions on it called get, post, etc. So to send a POST request you would write request.post('/your-endpoint').
•To send a body with your request, you can chain a .send({ your: 'object' }) to the promise given by the post function
•One of your tests will not give a fixed result but a dynamic one (namely the temperature that will change). Usually you will want to mock the API code, but that is out of the scope of this exercise. For now think about checking that the string 'contains' parts that you need. (If you ever find some time and want to look into how to do this, have a look at the jest documentation on mocking modules)
•Don't forget to check the status code!
Once all your tests are green you can be sure that everything works as expected! Have a look at your code and clean it up, if you wrote your tests well, then all you need to do at the end is run your test script to see if you did not break anything.