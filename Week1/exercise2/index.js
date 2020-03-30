const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world'
});

connection.connect();

// 1. What are the names of countries with population greater than 8 million?
connection.query(
  `SELECT Name, Population FROM country WHERE Population>8000000;`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 2. What are the names of countries that have “land” in their names?
connection.query(
  `SELECT Name FROM country WHERE Name LIKE '%land%';`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 3. What are the names of the cities with population in between 500,000 and 1 million?
connection.query(
  `SELECT Name, Population FROM city WHERE Population BETWEEN 500000 AND 1000000;`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 4. What's the name of all the countries on the continent ‘Europe’?
connection.query(
  `SELECT Name FROM country WHERE continent='Europe';`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 5. List all the countries in the descending order of their surface areas.
connection.query(
  `SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC;`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 6. What are the names of all the cities in the Netherlands?
connection.query(
  `SELECT Name FROM city WHERE CountryCode='NLD';`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 7. What is the population of Rotterdam?
connection.query(
  `SELECT Name, Population FROM city WHERE Name='Rotterdam';`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 8. What's the top 10 countries by Surface Area?
connection.query(
  `SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 9. What's the top 10 most populated cities?
connection.query(
  `SELECT Name, Population FROM city ORDER BY Population DESC LIMIT 10;`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

// 10. What is the population number of the world?
connection.query(
  `SELECT SUM(Population) FROM country;`, (err, results) => {
    if (err) throw err;
    console.table(results);
  }
)

connection.end();