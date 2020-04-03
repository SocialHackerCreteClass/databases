let mysql = require("mysql");

const TableEmployees = {
    employeeManagerQuery : 'SELECT m.full_name "Employee", e.full_name "Manager" FROM employee e JOIN employee m ' +
        'ON m.manager = e.employee_no;',
    creationMsg1: "Query employee-manager successfully created:",
    employeeDepartmentQuery: 'SELECT e.full_name "Employee", d.title "Department" FROM employee e RIGHT JOIN department d ' +
        'ON e.dept_id = d.dept_no;',
    creationMsg2 : "Query employee-department successfully created:"
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

    connection.query(TableEmployees.employeeManagerQuery, (error, results, fields) => {
        if(error) throw error;
            
        console.log(TableEmployees.creationMsg1);
        console.log("Employee - Manager");
        results.forEach(el => {
            console.log(`${el.Employee} - ${el.Manager}`);
        })
    });

    connection.query(TableEmployees.employeeDepartmentQuery, (error, results, fields) => {
        if(error) throw error;
            
        console.log("\n" + TableEmployees.creationMsg2);
        console.log("Employee - Department");
        results.forEach(el => {
            console.log(`${el.Employee} - ${el.Department}`);
        });
    });

    connection.end();
}

createTables("sha_exercise2");