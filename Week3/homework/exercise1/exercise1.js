let mysql = require("mysql");
const skills = require("./skills");
const skill_employee = require("./skill_employee");

const TableEmployees = {
    createTable1Query : "CREATE TABLE IF NOT EXISTS Skills(id INT NOT NULL AUTO_INCREMENT, skill_name Varchar(30) NOT NULL," +
    "PRIMARY KEY(id));",
    creationMsg1 : "Table Skills successfully created",
    createTable2Query : "CREATE TABLE IF NOT EXISTS Skill_Employee(id INT NOT NULL AUTO_INCREMENT, skill_id INT NOT NULL," +
    "employee_id INT NOT NULL, PRIMARY KEY(id), FOREIGN KEY(employee_id) REFERENCES Employee(employee_no)," +
    "FOREIGN KEY(skill_id) REFERENCES Skills(id));",
    creationMsg2 : "Table Skill_Employee successfully created"
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

    // CREATE TABLE Skills
    connection.query(TableEmployees.createTable1Query, (error, results, fields) => {
        if(error) throw error;
            
        console.log(TableEmployees.creationMsg1);
    });

    // CREATE Relational TABLE Skill_Employee
    connection.query(TableEmployees.createTable2Query, (error, results, fields) => {
        if(error) throw error;
            
        console.log(TableEmployees.creationMsg2);
    });

    // POPULATE THE TABLE Skills
    skills.forEach(el => {
        connection.query(
            `INSERT INTO skills (skill_name) VALUES (?);`,[el.skill], 
            (error, results, fields) => {
                if (error) throw error;

                console.log(`Skill ${el.skill} successfully created`);
            });
    })

    // POPULATE THE Relational TABLE Skill_Employee
    skill_employee.forEach(el => {
        connection.query(
            `INSERT INTO skill_employee (skill_id, employee_id) VALUES (?, ?);`, [el.skill_id, el.employee_id], 
            (error, results, fields) => {
                if (error) throw error;

                console.log(`Relation Skill-Employee successfully created`);
            });
    })

    connection.end();
}

createTables("sha_exercise2");
