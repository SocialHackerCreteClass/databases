'use strict'

const getPopulation_old = function (cityOrCountry, name, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
      `SELECT Population FROM ${cityOrCountry} WHERE Name = ${name}`,
      function(err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    );
  }

/*
  PART 1. SQL INJECTION
  1) First, get the name of the databases with a union:
    Name = '"" UNION select schema_name as database_name from information_schema.schemata'
  2) Get the name of the tables of the specific DB:
    Name = '"" UNION SELECT table_name FROM information_schema.tables WHERE table_schema = 'db_name';'
  3) Choose an interesting table and check the columns of it...:
    Name = '""  UNION SELECT column_name FROM information_schema.columns WHERE table_schema = 'db_name' AND table_name = 'table_name';'
  4) Finally, insert fake data:
    Name = '""; INSERT INTO Population (Name, CityOrCountry) VALUES ("Harry Potter", "Republic of Narnia");'
*/

// PART 2. New function that avoid SQL injection
const getPopulation_new = function (cityOrCountry, name, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
      `SELECT Population FROM ? WHERE Name = ?`, [cityOrCountry, name],
      function(err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    );
  }

  module.exports = getPopulation_new;
