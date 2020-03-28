let mysql = require("mysql");

connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "world"
})

const querysArray = [
    "SELECT Name, Population FROM country WHERE Population >= 8000000;",
    "SELECT Name FROM country WHERE Name LIKE '%land%';",
    "SELECT Name, Population FROM country WHERE Population BETWEEN 500000 AND 1000000;",
    "SELECT Name FROM country WHERE Continent = 'Europe';",
    "SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC;",
    "SELECT ci.Name FROM city ci, country co WHERE ci.CountryCode = (SELECT code FROM country WHERE Name='Netherlands');",
    "SELECT Name, Population FROM city WHERE Name='Rotterdam';",
    "SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;",
    "SELECT Name, Population FROM city ORDER BY population DESC LIMIT 10;",
    "SELECT SUM(population) su FROM country;"
];

const questionsArray = [
    "\nCountries with population greater than 8 million?:",
    "\nCountries that have “land” in their names:",
    "\nCities with population in between 500,000 and 1 million:",
    "\nCountries on the continent ‘Europe’:",
    "\nCountries in the descending order of their surface areas:",
    "\nCities in the Netherlands:",
    "\nPopulation of Rotterdam:",
    "\nTop 10 countries by Surface Area?",
    "\nTop 10 most populated cities:",
    "\nPopulation number of the world:"
]

connection.connect(err => {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected Successfully')
});

querysArray.forEach((el, i) => {
    connection.query(el, (error, results, fields) => {
        if(error) throw error;

        console.log(`${questionsArray[i]}`);
        for (const row of results) {
            if(i===0 || i===2 || i===6 || i===8)
                console.log(`${row.Name} --- ${row.Population}`);
            else if(i===1 || i===3 || i===5)
                console.log(`${row.Name}`);
            else if(i===4 || i===7)
                console.log(`${row.Name} ---${row.SurfaceArea}`);
            else if(i===9)
                console.log(`${row.su}`);
        }
    });
})

connection.end();