let mysql = require("mysql");
const employees = require("./employees");
const managers = require("./managers");

const TableEmployees = {
    creationQuery : "CREATE TABLE IF NOT EXISTS Employee(employee_no INT NOT NULL AUTO_INCREMENT, full_name Varchar(30) NOT NULL," +
    "salary Double NOT NULL, address Varchar(50) NOT NULL, PRIMARY KEY(employee_no));",
    creationMsg : "Table Employee successfully created",
    AddFK: "ALTER TABLE Employee ADD manager INT NULL, ADD FOREIGN KEY (manager) REFERENCES Employee (employee_no);",
    AddFKMsg : "Table Employee successfully modified"
}

const currentConnection = (database_name) => {
    connection = mysql.createConnection({
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

    connection.query(TableEmployees.creationQuery, (error, results, fields) => {
        if(error) throw error;
            
        console.log(TableEmployees.creationMsg);
    });

    // POPULATE THE TABLE
    employees.forEach(el => {
        connection.query(
            `INSERT INTO Employee (full_name, salary, address) VALUES ("${el.full_name}",` +
            `${el.salary}, "${el.address}");`,
            (error, results, fields) => {
                if (error) throw error;

                console.log(`Employee ${el.full_name} successfully created`);
            });
    })

    // ADDS NEW COLUMN
    connection.query(TableEmployees.AddFK, (error, results, fields) => {
        if(error) throw error;
            
        console.log(TableEmployees.AddFKMsg);
    });

    // EDIT THE TABLE VALUES WITH MANAGER IDS
    managers.forEach(el => {
        connection.query(
            `UPDATE Employee SET manager = ${el.manager_id} WHERE employee_no = ${el.employee_id};`,
            (error, results, fields) => {
                if (error) throw error;

                console.log(`Manager successfully upadated`);
            });
    })

    connection.end();
}

createTables("sha_exercise2");