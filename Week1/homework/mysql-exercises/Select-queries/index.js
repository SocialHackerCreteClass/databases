'use strict';

/* eslint-disable no-console */

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'world'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected..');
});

/*

What are the names of countries with population greater than 8 million?
What are the names of countries that have “land” in their names?
What are the names of the cities with population in between 500,000 and 1 million?
What's the name of all the countries on the continent ‘Europe’?
List all the countries in the descending order of their surface areas.
What are the names of all the cities in the Netherlands?
What is the population of Rotterdam?
What's the top 10 countries by Surface Area?
What's the top 10 most populated cities?
What is the population number of the world?

*/

const cb = (err, result) => {
  if (err) throw err;
  console.log(result);
};

// What are the names of countries with population greater than 8 million?
db.query(
  'SELECT Name, Population FROM country WHERE Population > 8000000;', cb
);

// What are the names of countries that have “land” in their names?
db.query(
  'SELECT Name FROM country WHERE Name LIKE \'%land%\';', cb
);

// What are the names of the cities with population in between 500,000 and 1 million?
db.query(
  'SELECT Name, Population FROM city WHERE Population BETWEEN 500000 AND 1000000;', cb
);

// What's the name of all the countries on the continent ‘Europe’?
db.query(
  'SELECT Name, Continent FROM country WHERE Continent= \'Europe\';', cb
);

// List all the countries in the descending order of their surface areas.
db.query(
  'SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC', cb
);

// What are the names of all the cities in the Netherlands?
db.query(
  'SELECT Name FROM city WHERE CountryCode=\'NLD\';', cb
);

// What is the population of Rotterdam?
db.query(
  'SELECT Population, Name FROM city WHERE Name=\'Rotterdam\';', cb
);

// What's the top 10 countries by Surface Area?
db.query(
  'SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;', cb
);

// What's the top 10 most populated cities?
db.query(
  'SELECT Name, Population FROM city ORDER BY Population DESC LIMIT 10;', cb
);

// What is the population number of the world?
db.query(
  'SELECT SUM(Population) FROM country;', cb
);

db.end();
