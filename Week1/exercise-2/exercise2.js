const mysql = require("mysql")


var con = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'world'
});

con.connect();

con.query('SELECT name FROM country WHERE Population > 8000000', function (err, result) {
    if (err) throw err;
    console.log(`Countries with population over 8 million are:`, result);
});

con.query('SELECT NAME FROM COUNTRY WHERE NAME LIKE "%LAND%";', function (err, result) {
    if (err) throw err;
    console.log(`Countries with LAND in their name:`, result);
});

con.query(' SELECT name FROM country WHERE population BETWEEN 500000 AND 1000000;', function (err, result) {
    if (err) throw err;
    console.log(`Countries with POPULATION between 500000 and 1000000:`, result);
});

con.query(' SELECT name FROM country WHERE population BETWEEN 500000 AND 1000000;', function (err, result) {
    if (err) throw err;
    console.log(`Countries with POPULATION between 500000 and 1000000:`, result);
});

con.query('SELECT name FROM country WHERE continent LIKE "Europe";', function (err, result) {
    if (err) throw err;
    console.log(`Countries of EUROPE:`, result);
});


con.query('select name from country order by SurfaceArea desc;', function (err, result) {
    if (err) throw err;
    console.log(`Countries descending by surface area:`, result);
});


con.query('select * from city where countrycode like "nld";', function (err, result) {
    if (err) throw err;
    console.log(`Countries from Netherlands:`, result);
});



con.query('SELECT population FROM city WHERE name LIKE "Rotterdam";', function (err, result) {
    if (err) throw err;
    console.log(`Population of Rotterdam:`, result);
});

con.query('SELECT name FROM country ORDER BY SurfaceArea DESC LIMIT 10;', function (err, result) {
    if (err) throw err;
    console.log(`Top 10 Countries by Surface Area:`, result);
});

con.query('SELECT name FROM city ORDER BY Population DESC LIMIT 10;', function (err, result) {
    if (err) throw err;
    console.log(`Top 10 Countries by Population:`, result);
});

con.query('SELECT SUM(population) FROM country;', function (err, result) {
    if (err) throw err;
    console.log(`Countries Population:`, result);
});


