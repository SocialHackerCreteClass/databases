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

connection.query("SELECT full_name, manager_no FROM employee; ");

connection.query(
  "SELECT employee.full_name AS name, department.title AS department FROM employee JOIN department ON employee.dept_no=department.dept_no;"
);

connection.end();
