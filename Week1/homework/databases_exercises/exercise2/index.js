'use strict'

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world'
});

connection.connect();

connection.query('SELECT Name FROM country WHERE Population > 8000000', function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Countries with population over 8M`);
    results.forEach(item => console.log(item.Name));
});

connection.query("SELECT Name FROM country WHERE Name LIKE '%land%'", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Countries with 'land' in their name`);
    results.forEach(item => console.log(item.Name));
});

connection.query("SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Cities with population between 0,5M and 1M`);
    results.forEach(item => console.log(item.Name));
});

connection.query("SELECT Name FROM country WHERE Continent = 'Europe'", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Countries of Europe`);
    results.forEach(item => console.log(item.Name));
});

connection.query("SELECT Name FROM country ORDER BY SurfaceArea DESC", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Countries by Surface Area in Descending order`);
    results.forEach(item => console.log(item.Name));
});

connection.query("SELECT Name FROM city WHERE CountryCode = 'NLD'", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Cities of the Netherlands`);
    results.forEach(item => console.log(item.Name));
});

connection.query("SELECT Population FROM city WHERE Name = 'Rotterdam'", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Population of Rotterdam`);
    results.forEach(item => console.log(item.Population));
});

connection.query("SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Top 10 Countries in Surface Area`);
    results.forEach(item => console.log(item.Name));
});

connection.query("SELECT Name FROM city ORDER BY Population DESC LIMIT 10", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`Top 10 Cities in Population`);
    results.forEach(item => console.log(item.Name));
});

connection.query("SELECT SUM(Population) AS TotalPopulation FROM country", function (error, results, fields) {
    if (error) throw error;
    console.log(`===========================================================`);
    console.log(`The World Population`);
    results.forEach(item => console.log(item.TotalPopulation));
});

connection.end();