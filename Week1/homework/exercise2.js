let mysql = require("mysql");

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'world',
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('My sql connected...');
});

//What are the names of countries with population greater than 8 million?
connection.query(
    'SELECT Name,Population FROM country WHERE Population>8000000;',
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//What are the names of countries that have “land” in their names?
connection.query(
    `SELECT Name FROM country WHERE Name LIKE '%land%';`,
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//What are the names of the cities with population in between 500,000 and 1 million?
connection.query(
    'SELECT Name,Population FROM city WHERE Population BETWEEN 500000 AND 1000000;',
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//What's the name of all the countries on the continent ‘Europe’?
connection.query(
    `SELECT Name,Continent FROM country WHERE Continent= 'Europe';`,
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//List all the countries in the descending order of their surface areas.
connection.query(
    'SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC',
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//What are the names of all the cities in the Netherlands?
connection.query(
    `SELECT Name FROM city WHERE CountryCode='NLD';`,
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//What is the population of Rotterdam?
connection.query(
    `SELECT Population,Name FROM city WHERE Name='Rotterdam';`,
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//What's the top 10 countries by Surface Area?
connection.query(
    'SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;',
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//What's the top 10 most populated cities?
connection.query(
    'SELECT Name,Population FROM city ORDER BY Population DESC LIMIT 10;',
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

//What is the population number of the world?
connection.query(
    'SELECT SUM(Population) FROM country;',
    function(err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.end();