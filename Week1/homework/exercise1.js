let mysql = require("mysql");

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'company',
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('My sql connected...');
});


connection.query(
    'CREATE TABLE Employees (emp_no INT PRIMARY KEY, emp_name VARCHAR(50), salary INT, reports_to VARCHAR(255));',
    function(err, result) {
        if (err) throw err;
        console.log('Table Employees created');
    });

connection.query(
    'CREATE TABLE Departments (dept_no INT NOT NULL, dept_name VARCHAR(255), manager VARCHAR(50));',
    function(err, result) {
        if (err) throw err;
        console.log('Table Departments created');
    });


connection.query(
    'CREATE TABLE Projects (proj_no INT PRIMARY KEY, proj_name VARCHAR(255), starting_date DATETIME, ending_date DATETIME );',
    function(err, result) {
        if (err) throw err;
        console.log('Table Projects created');
    });

const employees = [
    [1, 'Karin Porter', 15000, 'Anstace Porter'],
    [2, 'Maisie Porter', 20000, 'Umer Lancaster'],
    [3, 'Miriam Mitzi', 80000, 'Bronwen Ashley'],
    [4, 'Tanya Grgsa', 6000, 'Borys Berg'],
    [5, 'Leona Loni', 34000, 'Buddy Beasley'],
    [6, 'Sofia Saffi', 9000, 'Sonnie Carty'],
    [7, 'Johanna Jo', 10000, 'Veer Black'],
    [8, 'Evelin Eila', 12000, 'Alicia Blanchard'],
    [9, 'Frank Harrold', 15400, 'Jaye Armstrong'],
    [10, 'Farhan Carlos', 3500, 'Stephanie Tucker']
];

const departments = [
    [1, 'Production', 'Aneeka Riddle'],
    [2, 'R&D', 'Saoirse Connelly'],
    [3, 'Purchasing', 'Ashwin Garcia'],
    [4, 'Marketing', 'VSonny Mackenzie'],
    [5, 'Human Resource Management', 'Fern Wong'],
    [6, 'Accounting and Finance', 'Benjamin Neale'],
    [7, 'IT', 'Cleo Bravo'],
    [8, 'Operation Team', 'Antoine Salinas'],
    [9, 'Advertising', 'Marlon Willis'],
    [10, 'Finance', 'Yasemin Lacey']
];

const projects = [
    [1, 'Mountain Abandoned', new Date('2013-04-10'), new Date('2014-01-05')],
    [2, 'Comic Global', new Date('2014-04-10'), new Date('2014-06-12')],
    [3, 'Northernmost Autumn', new Date('2014-07-16'), new Date('2015-08-25')],
    [4, 'Small Avenue', new Date('2015-08-09'), new Date('2015-09-29')],
    [5, 'Dusty Epsilon', new Date('2016-08-18'), new Date('2016-09-30')],
    [6, 'Reborn Railroad', new Date('2017-03-25'), new Date('2017-04-13')],
    [7, 'Surreal Antique', new Date('2017-05-10'), new Date('2018-12-05')],
    [8, 'Notorious Eastern', new Date('2017-06-06'), new Date('2017-07-07')],
    [9, 'Cheerful Cat', new Date('2017-08-15'), new Date('2010-10-30')],
    [10, 'Flag', new Date('2019-05-07'), new Date('2020-01-27')]
];


connection.query(
    `INSERT INTO Employees (emp_no, emp_name, salary, reports_to) VALUES ?`, [employees],
    function(err, result) {
        if (err) throw err;
    });
connection.query(
    `INSERT INTO Departments (dept_no, dept_name, manager) VALUES ?`, [departments],
    function(err, result) {
        if (err) throw err;
    });

connection.query(
    `INSERT INTO Projects (proj_no, proj_name, starting_date, ending_date ) VALUES ?`, [projects],
    function(err, result) {
        if (err) throw err;
    });

connection.end();