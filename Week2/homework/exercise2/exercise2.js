'use strict'

let mysql = require("mysql");
const department = require("./departments");

const TableDepartment = {
    creationQuery : "CREATE TABLE IF NOT EXISTS department(dept_no INT NOT NULL AUTO_INCREMENT, title Varchar(30) NOT NULL," +
    "description Varchar(50) NOT NULL, address Varchar(50) NOT NULL, PRIMARY KEY(dept_no));",
    creationMsg : "Table department successfully created",
    AddFK: "ALTER TABLE Employee ADD dept_id INT NULL, ADD FOREIGN KEY (dept_id) REFERENCES department (dept_no);",
    AddFKMsg : "Table Employee successfully modified"
}

const currentConnection = (database_name) => {
    const connection = mysql.createConnection({
        connectionLimit: 1,    // Ensures just one connection at a time
        host : "localhost",
        user : "root",
        password : "password",
        database : database_name
    });

    connection.connect(err => {
        if (err) {
          return console.error('error: ' + err.message);
        }
       
        console.log('Connected Successfully')
    });

    return connection;
}

function createTables(database_name){

    const connection = currentConnection(database_name);

    connection.query(TableDepartment.creationQuery, (error, results, fields) => {
        if(error) throw error;
            
        console.log(TableDepartment.creationMsg);
    });

    // POPULATE THE TABLE
    department.forEach(el => {
        console.log(el);
        connection.query(
            `INSERT INTO department (title, description, address) VALUES ("${el.title}",` +
            `"${el.description}", "${el.address}");`,
            (error, results, fields) => {
                if (error) throw error;

                console.log(`department ${el.title} successfully created`);
            });
    })

    // ADDS NEW FOREIGN KEY DEPT_NO
    connection.query(TableDepartment.AddFK, (error, results, fields) => {
        if (error) throw error;

        console.log(TableDepartment.AddFKMsg);
    });

    // EDIT THE TABLE VALUES WITH DEPT IDS
    for(let i = 1; i <= 10; i++) {
        connection.query(
            `UPDATE employee SET dept_id = (${i} / 2) WHERE employee_no = ${i};`,
            (error, results, fields) => {
                if (error) throw error;

                console.log(`Table Employee successfully upadated`);
            });
    }

    connection.end();
}

createTables("sha_exercise2");