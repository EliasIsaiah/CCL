# PROJECT: FindYourTemperature I

All work for this project should be stored in a GitHub repository.

In this part of the homework you'll be setting up the basis of your project: FindYourTemperature. Create a new folder called FindYourTemperature. You'll add to it every week.

Each week you'll be building a certain part of it. This week we'll get started with creating a web server, using Express.js. Inside of the findyourtemperature folder:

1. Create a JavaScript file called `server.js` (it can be any name but this is more meaningful)
2. Initialize the Node Package Manager and create a `package.json` file by running npm init -y
3. Install and load in the necessary modules for this project: they are `express` (our web server), `express-handlebars` (our templating engine) and `node-fetch` (a library to handle http requests in node)
4. As we want to use modernJS import statements, add the line `"type": "module"` to the package.json file
5. Set up your web server using Express (creating an Express instance, listen to port 3000)
6. Make a GET request to / that sends the message `hello from backend to frontend!` to the client

After writing all this code you can verify that it's working by running node server.js from the Command Line and checking your browser at http://localhost:3000. The page should display the message hello from backend to frontend!.

### Adding a POST request

In this part we'll add another endpoint, with a POST method.

1. Create a POST route, that has as an endpoint: /weather
2. To make Express aware of what data type the incoming data is (which is JSON). We do that using the json() method on the Express object. Using the use() function from `app`, pass in the json() from express.
3. Inside the callback function of the POST route retrieve the value `cityName` from the json payload in the incoming POST request and store it in a variable called `city` Hint: use the body object from the request to find it.
4. Send the request body back as the response just to let the user know that the POST request succeeded.

Test out your work using Postman or another api client and make sure that any time you submit a POST request to the `/weather` endpoint it returns as a response from the server the exact words you submitted.

If you are tired of constantly restarting your server, google the nodemon package to see if that will be useful for you!