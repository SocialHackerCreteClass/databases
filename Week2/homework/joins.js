'use strict'

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company'
});

connection.connect();

connection.query('SELECT employee.full_name AS employee, manager.full_name AS manager FROM employee AS employee LEFT JOIN employee AS manager ON employee.manager_no = manager.employee_no', (error, results, fields) => {
    if (error) throw error;
    results.forEach(item => console.log(item));
});

connection.query('SELECT employee.full_name AS employee, department.title AS department FROM employee RIGHT JOIN department ON employee.department = department.dept_no', (error, results, fields) => {
    if (error) throw error;
    results.forEach(item => console.log(item));
});



connection.end();

function errorFunc(error, results, fields) {
    if (error) throw error;
}