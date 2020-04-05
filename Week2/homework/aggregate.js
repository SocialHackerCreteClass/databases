'use strict'

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company'
});

connection.connect();

connection.query('SELECT department.dept_no, COUNT(employee.full_name) AS no_of_employees FROM department LEFT JOIN employee ON employee.department = department.dept_no GROUP BY department', (error, results, fields) => {
    if (error) throw error;
    results.forEach(item => console.log(item));
});

connection.query('SELECT SUM(employee.salary) AS sum_of_salaries FROM employee', (error, results, fields) => {
    if (error) throw error;
    results.forEach(item => console.log(item));
});

connection.query('SELECT SUM(employee.salary)/COUNT(employee.full_name) AS avg_of_salaries FROM employee', (error, results, fields) => {
    if (error) throw error;
    results.forEach(item => console.log(item));
});

connection.query('SELECT department.title AS department, SUM(employee.salary) AS sum_of_salaries FROM employee JOIN department ON employee.department = department.dept_no GROUP BY department', (error, results, fields) => {
    if (error) throw error;
    results.forEach(item => console.log(item));
});

connection.query('SELECT department.title AS department, MIN(employee.salary) AS min_salary, MAX(employee.salary) AS max_salary FROM employee JOIN department ON employee.department = department.dept_no GROUP BY department', (error, results, fields) => {
    if (error) throw error;
    results.forEach(item => console.log(item));
});

connection.query('SELECT employee.salary AS salary, COUNT(employee.full_name) AS no_of_employees FROM employee GROUP BY salary', (error, results, fields) => {
    if (error) throw error;
    results.forEach(item => console.log(item));
});

connection.end();

function errorFunc(error, results, fields) {
    if (error) throw error;
}