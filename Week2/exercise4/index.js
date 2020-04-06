const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'employees'
});

connection.connect();

connection.query(
  `SELECT department.title AS department, COUNT(employee.full_name) AS no_of_employees ` +
  `FROM employee JOIN department ON employee.dept_id = department.dept_no GROUP BY department;`,
  (err, results) => {
    if (err) throw err;
    console.table(results)
  }
);

connection.query(
  `SELECT SUM(employee.salary) AS salary_sum FROM employee;`,
  (err, results) => {
    if (err) throw err;
    console.table(results)
  }
);

connection.query(
  `SELECT AVG(employee.salary) AS salary_average FROM employee;`,
  (err, results) => {
    if (err) throw err;
    console.table(results)
  }
);

connection.query(
  `SELECT department.title AS department, SUM(employee.salary) AS sum_of_salaries ` +
  `FROM employee JOIN department ON employee.dept_id = department.dept_no GROUP BY department;`,
  (err, results) => {
    if (err) throw err;
    console.table(results)
  }
);

connection.query(
  `SELECT department.title AS department, MIN(employee.salary) AS min_salary, MAX(employee.salary) AS max_salary ` +
  `FROM employee JOIN department ON employee.dept_id = department.dept_no GROUP BY department;`,
  (err, results) => {
    if (err) throw err;
    console.table(results)
  }
);

connection.query(
  `SELECT employee.salary AS salary, COUNT(employee.full_name) AS no_of_employees FROM employee GROUP BY salary;`,
  (err, results) => {
    if (err) throw err;
    console.table(results)
  }
)

connection.end();