'use strict';

/* eslint-disable no-console */

const mysql = require('mysql');
const generateEmployees = require('./data').generateEmployeeArray;
const generateDepartments = require('./data').generateDepartmentArray;
const generateProjects = require('./data').generateProjectArray;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'company'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected..');
});

db.query('DROP DATABASE IF EXISTS company');
db.query('CREATE DATABASE company', (err, result) => {
  if (err) throw err;
  console.log('Database created..', result);
});
db.query('USE company');

const employees = generateEmployees(10);
const departments = generateDepartments(10);
const projects = generateProjects(10);

db.query('CREATE TABLE Employees (emp_no INTEGER PRIMARY KEY, emp_name VARCHAR(255), salary NUMERIC, reports_to VARCHAR(255));', (err, result) => {
  if (err) throw err;
  console.log('Table created..', result);
});

db.query('CREATE TABLE Departments (dept_no INTEGER PRIMARY KEY, dept_name VARCHAR(255), manager VARCHAR(255));', (err, result) => {
  if (err) throw err;
  console.log('Table created..', result);
});

db.query('CREATE TABLE Projects (proj_no INTEGER PRIMARY KEY, proj_name VARCHAR(255), starting_date DATETIME, ending_date DATETIME);', (err, result) => {
  if (err) throw err;
  console.log('Table created..', result);
});

db.query('INSERT INTO Employees (emp_no, emp_name, salary, reports_to) VALUES ?', [employees], (err, result) => {
  if (err) throw err;
  console.log('Number of records inserted: ' + result.affectedRows);
});

db.query('INSERT INTO Departments (dept_no, dept_name, manager) VALUES ?', [departments], (err, result) => {
  if (err) throw err;
  console.log('Number of records inserted: ' + result.affectedRows);
});

db.query('INSERT INTO Projects (proj_no, proj_name, starting_date, ending_date) VALUES ?', [projects], (err, result) => {
  if (err) throw err;
  console.log('Number of records inserted: ' + result.affectedRows);
});

db.end();
