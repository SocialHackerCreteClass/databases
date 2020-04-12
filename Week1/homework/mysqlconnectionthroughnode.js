let mysql = require("mysql")

connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'daniel',
    password : '',
    database : 'new_world',
});

connection.connect()

connection.query(
    'SELECT * FROM country WHERE population > 1000000 AND Continent IN ("Europe", "Africa") LIMIT 2',
    function (error, results, fields) {
	if (error) throw error;

	for (const row of results) {
            console.log(row.Name)
	}
    })

connection.end()