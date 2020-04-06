const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'employees'
});

connection.connect();

connection.query(
  `SELECT full_name, manager FROM employee;`,
  (err, results) => {
    if (err) throw err;
    console.table(results);
  }
);

connection.query(
  `SELECT employee.full_name AS name, employee.manager AS manager, department.title AS title ` + 
  `FROM employee JOIN department;`,
  (err, results) => {
    if (err) throw err;
    console.table(results)
  }
);

connection.end();