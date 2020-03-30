var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world'
});

connection.connect();

connection.query('SELECT Name,Population FROM country WHERE Population > 8000000', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Countries with population over 8M`);
    results.forEach(item => console.log(item.Name, item.Population));
});
connection.query('SELECT Name FROM country WHERE Name LIKE "%land"', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Countries that have 'land' in their names`);
    results.forEach(item => console.log(item.Name));
});
connection.query('SELECT Name,Population FROM city WHERE Population BETWEEN 500000 AND 1000000', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Cities with population between 500000 and 1000000`);
    results.forEach(item => console.log(item.Name, item.Population));
});
connection.query('SELECT Name FROM country WHERE Continent="Europe"', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Countries on the continent 'Europe'`);
    results.forEach(item => console.log(item.Name));
});
connection.query('SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Countries in the descending order of their surface areas`);
    results.forEach(item => console.log(item.Name, item.SurfaceArea));
});
connection.query('SELECT Name FROM city WHERE CountryCode="NLD"', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Cities in the Netherlands`);
    results.forEach(item => console.log(item.Name));
});
connection.query('SELECT Name,Population FROM city WHERE Name="Rotterdam"', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Population of Rotterdam`);
    results.forEach(item => console.log(item.Name, item.Population));
});
connection.query('SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Top 10 countries by Surface Area`);
    results.forEach(item => console.log(item.Name, item.SurfaceArea));
});
connection.query('SELECT Name,Population FROM city ORDER BY Population DESC LIMIT 10', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Top 10 most populated cities`);
    results.forEach(item => console.log(item.Name, item.Population));
});
connection.query('SELECT Sum(Population) AS TotalPopulation FROM country', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Total population of the world`);
    results.forEach(item => console.log(item.TotalPopulation));
});
connection.end();