const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: 'test_schema'
})

connection.connect();

connection.query('SELECT * from person', (error, results, fields) => {
    if (error) throw error; 
    for (result of results) console.log(`<------------- Person id ${result.id}: ----------------->\nName: ${result.name}\nFavorite Color: ${result.favorite_color}\nFavorite Food: ${result.favorite_food}`);
});

connection.end();