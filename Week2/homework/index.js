'use strict';

/*

^1 EXERCISE 1: Identifiers
^2 EXECRISE 2: Relationships
^3 EXERCISE 3: Joins
^4 EXERCISE 4: Aggregate Functions

*/

/* eslint-disable no-console */

const mysql = require('mysql');
const employees = require('./info').employees;
const managers = require('./info').managers;
const departments = require('./info').departments;

const databaseName = 'company';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3308', // Default port MySQL uses
  password: '',
  database: databaseName
});

// Database connection
db.connect((err) => {
  if (err) throw err;
  console.log('Database connected..');
});

db.query(`DROP DATABASE IF EXISTS ${databaseName}`, (err, result) => {
  if (err) throw err;
  console.log(`${databaseName} dropped succesfully..`);
});
db.query(`CREATE DATABASE ${databaseName}`, (err, result) => {
  if (err) throw err;
  console.log(`Database ${databaseName} created..`, result);
});
db.query(`USE ${databaseName}`, (err, result) => {
  if (err) throw err;
  console.log(`Using ${databaseName}..`);
});

/* =======================================================================
   ***********************************************************************

   ^1 EXERCISE 1: Identifiers

   *********************************************************************** */


// Create an employee table in the company database
db.query(`CREATE TABLE ${databaseName}.employee (
  employee_no INT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(100) NULL,
  salary INT NULL,
  address VARCHAR(255),
  PRIMARY KEY (employee_no)
);`, (err, result) => {
  if (err) throw err;
  console.log('Table created..');
});

employees.forEach((employee) => {
  db.query(`INSERT INTO ${databaseName}.employee
  (full_name, salary, address)
  VALUES
  ('${employee.fullname}', '${employee.salary}', '${employee.address}');`, (err, result) => {
    if (err) throw err;
    console.log('Number of records inserted: ' + result.affectedRows);
  });
});

// A FOREIGN KEY referencing the same table is typically for a hierarchy structure
// and it would use another column to reference the primary key.
// ** All managers are also employees **
// so the manager (manager) is actually the employee_no (EmployeeID) of the manager

db.query(`ALTER TABLE employee
  ADD manager INT
  REFERENCES employee (employee_no);`, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// Let's assume that the company has 2 managers
// These 2 managers need to be assgigned as managers of the rest of employees.
// Themselves do not have managers. (NULL)
for (let i = managers.length + 1; i < employees.length; i += 1) {
  db.query(
    `UPDATE employee SET manager=1 WHERE employee_no=${i};`, (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
}

for (let i = employees.length; i >= employees.length / 2; i -= 1) {
  db.query(
    `UPDATE employee SET manager=2 WHERE employee_no=${i};`, (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
}

/* =======================================================================
   ***********************************************************************

   ^2 EXERCISE 2: Relationships

   *********************************************************************** */

// Create a department table in the company database
db.query(`CREATE TABLE ${databaseName}.department (
  department_no INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NULL,
  description VARCHAR(255),
  address VARCHAR(255),
  PRIMARY KEY (department_no)
);`, (err, result) => {
  if (err) throw err;
  console.log('Table created..');
});

// Insert row data from the generated department array
departments.forEach((department) => {
  db.query(`INSERT INTO ${databaseName}.department
    (title, description, address)
    VALUES
    ('${department.title}', '${department.description}', '${department.address}');`, (err, result) => {
    if (err) throw err;
    console.log('Number of records inserted: ' + result.affectedRows);
  });
});

// Every employee can work in only one department.
// Every department can have many employees
// So the relatioship is One (dept) to Many (employees)

// We need to create a foreign key (department_no) at the employee table
db.query(`ALTER TABLE employee
  ADD department_no INT
  REFERENCES employee (employee_no);`, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// Now we need to assign to every employee a department_no
// FOR EXAMPLE: db.query('UPDATE employee SET department_no=3 WHERE employee_no=5;');

const generateRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

// This will be ok for the moment but I does NOT work well
// because it may leave some departments without employees (improbable not impossible)
// NEEDS FIXING

for (let i = 0; i <= employees.length; i += 1) {
  db.query(
    `UPDATE employee SET department_no=${generateRandomNumber(departments.length) + 1} WHERE employee_no=${i};`
  );
}

/* =======================================================================
   ***********************************************************************

   ^3 EXERCISE 3: Joins

   *********************************************************************** */

// Write a query that retrieves all employees and their corresponding manager's full name
db.query(`SELECT
    employee.full_name AS Employee,
    managers.full_name AS Manager
    FROM employee
    LEFT JOIN employee AS managers
    ON employee.manager = managers.employee_no;
  `, (err, result) => {
  if (err) throw err;
  console.table(result);
});

// Write a query that retrieves all employees and their working department title.
// If no employee worked in a specific department, return the department too

db.query(`SELECT employee.full_name AS employee,
  department.title AS department
  FROM employee
  RIGHT JOIN department
  ON employee.department_no = department.department_no;
  `, (err, result) => {
  if (err) throw err;
  console.table(result);
});

/* =======================================================================
   ***********************************************************************

   ^4 EXERCISE 4: Aggregate Functions

   *********************************************************************** */

// TODO..
