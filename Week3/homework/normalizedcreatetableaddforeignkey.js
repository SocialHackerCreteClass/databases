let mysql = require("mysql")

connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'daniel',
    password : 'CrnaGora75129',
    database : 'company2',
});

connection.connect()

connection.query (
'CREATE TABLE `employeeskills`  (skills VARCHAR(50);',
function (error, results, fields) {
	if (error) throw error;


    })

connection.end()
