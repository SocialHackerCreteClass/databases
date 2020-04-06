const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "company",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB..");
});

connection.query(
  "SELECT department.title AS Department, COUNT(employee.full_name) AS HR FROM department JOIN employee ON employee.dept_no=department.dept_no GROUP BY department; "
);

connection.query("SELECT SUM(salary) AS Total_Salaries FROM employee;");

connection.query("SELECT AVG(salary) AS Average_Salary FROM employee;");

connection.query(
  "SELECT department.title AS Department, SUM(employee.salary) AS Money_per_Dpt FROM employee JOIN department ON employee.dept_no = department.dept_no GROUP BY department;"
);

connection.query(
  "SELECT department.title AS Department, MAX(employee.salary) AS Max, MIN(employee.salary) FROM employee JOIN department ON employee.dept_no = department.dept_no GROUP BY department;"
);

connection.query(
  "SELECT salary, COUNT(full_name) AS Number_of_employees FROM employee GROUP BY salary;"
);

connection.end();
