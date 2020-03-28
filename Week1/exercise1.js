var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});

connection.connect();
connection.query("DROP DATABASE IF EXISTS company");
connection.query("CREATE DATABASE company", function (error, results, fields) {
    if (error) throw error;
    console.log('Database created');
});
connection.query("USE company");
connection.query('CREATE TABLE Employees (emp_no int, emp_name text, salary float, reports_to text)');
connection.query('CREATE TABLE Departments (dept_no int, dept_name text, manager text)');
connection.query('CREATE TABLE Projects (proj_no int, proj_name text, starting_date date, ending_date datetime)');
connection.query('INSERT INTO Employees VALUES (001, "Manos", 1500, "Director"), (002, "Stelios", 1700, "Manos"), (003, "Dimitra", 2000, "Director"), (004, "John", 1000, "Stelios"), (005, "Ioli", 600, "John")');
connection.query('INSERT INTO Departments VALUES (001, "Sales", "George II"), (002, "Administration", "Marie III"), (003, "Medical Affairs", "Dr. Michael"), (004, "Advertisement", "Sherlock"), (005, "Web developemnt", "Nick")');
connection.query('INSERT INTO Projects VALUES (001, "FrontEnd", "2020-03-29", "2021-03-29"), (002, "BackEnd", "2020-03-30", "2021-03-30"), (003, "Design", "2020-03-31", "2021-03-31"), (004, "Apps", "2020-04-29", "2021-04-29"), (005, "APIs", "2020-05-29", "2021-05-29")');
connection.end();