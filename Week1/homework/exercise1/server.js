let mysql = require("mysql");
const employees = require("./employees");
const departments = require("./departments");
const projects = require("./projects");

const queryTablesArray = [
    "CREATE TABLE IF NOT EXISTS Employee(emp_no INT NOT NULL AUTO_INCREMENT, emp_name Varchar(25) NOT NULL, salary Double NOT NULL," +
    "reports_to Varchar(25) NOT NULL, PRIMARY KEY(emp_no));",
    "CREATE TABLE IF NOT EXISTS Departments(dept_no INT NOT NULL AUTO_INCREMENT, dept_name Varchar(25) NOT NULL," +
    "manager Varchar(25) NOT NULL, PRIMARY KEY(dept_no));",
    "CREATE TABLE IF NOT EXISTS Projects(proj_no INT NOT NULL AUTO_INCREMENT, proj_name Varchar(25) NOT NULL," +
    "starting_date Date NOT NULL, ending_date Date NULL, PRIMARY KEY(proj_no));"
];

const messagesArray = [
    "Table Employee successfully created",
    "Table Departments successfully created",
    "Table Projects successfully created"
];

function createDatabase(database_name){
    connection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "password",
        database : "world"
    });

    connection.connect(err => {
        if (err) {
          return console.error('error: ' + err.message);
        }
       
        console.log('Connected Successfully')
    });

    connection.query(
        `CREATE SCHEMA IF NOT EXISTS ${database_name}`, (error, results, fields) => {
        if(error) throw error;
        console.log("Database Company successfully created");
        createTables("company");
    });

    connection.end();
}

function createTables(database_name){
    connection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "Manstein1942!!",
        database : database_name
    });

    connection.connect(err => {
        if (err) {
          return console.error('error: ' + err.message);
        }
       
        console.log('Connected Successfully')
    });

    queryTablesArray.forEach((el, index) => {
        connection.query(el, (error, results, fields) => {
            if(error) throw error;
            
            console.log(messagesArray[index]);
            if(index === 1)
                populateTables(database_name);
        });
    });

    connection.end();
}

function populateTables(database_name){
    connection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "Manstein1942!!",
        database : database_name
    });

    connection.connect(err => {
        if (err) {
          return console.error('error: ' + err.message);
        }
       
        console.log('Connected Successfully')
    });

    employees.forEach((el, index) => {
        connection.query(
            `INSERT INTO employee (emp_name, salary, reports_to) VALUES ("${el.emp_name}",` +
            `${el.salary}, "${el.reports_to}");`, 
            (error, results, fields) => {
            if(error) throw error;
            
            console.log(`Employee ${el.emp_name} successfully created`);
        });
    });

    departments.forEach((el, index) => {
        connection.query(
            `INSERT INTO departments (dept_name, manager) VALUES ("${el.dept_name}",` +
            `"${el.manager}");`, 
            (error, results, fields) => {
            if(error) throw error;
            
            console.log(`Department ${el.dept_name} successfully created`);
        });
    });

    projects.forEach((el, index) => {
    let query = "";
    if(el.ending_date === "NULL") 
        query = `INSERT INTO projects (proj_name, starting_date, ending_date) VALUES ("${el.proj_name}",` +
            `"${el.starting_date}", NULL);`
    else
        query = `INSERT INTO projects (proj_name, starting_date, ending_date) VALUES ("${el.proj_name}",` +
            `"${el.starting_date}", "${el.ending_date}");`

        connection.query(query,  (error, results, fields) => {
            if(error) throw error;
            
            console.log(`Department ${el.dept_name} successfully created`);
        });
    });

    connection.end();
}

createDatabase("company");