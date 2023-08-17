const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: 'world'
})

connection.connect();

connection.query('SELECT * FROM city;', (error, results, fields) => {
    if (error) throw error; 
    console.log("cities of world:");
    for (result of results) console.log(`<------------- City id ${result.ID}: ----------------->\nName: ${result.Name}\nCountryCode: ${result.CountryCode}`);
})

connection.end();