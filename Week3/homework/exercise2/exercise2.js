'use strict'

let mysql = require("mysql");

const TableEmployees = {
    original_id : "SELECT dept_id AS id FROM employee WHERE employee_no = ?;",
    transactions : [
    "UPDATE employee SET manager = NULL, dept_id = ? WHERE employee_no = ?;",
    "UPDATE employee SET manager = ? WHERE dept_id =  ? AND employee_no != ?;",
    "UPDATE employee SET manager = NULL WHERE dept_id = ?;"
    ]
}

const currentConnection = (database_name) => {
    const connection = mysql.createConnection({
        //connectionLimit: 1,    // Ensures just one connection at a time
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

    return connection;
}

function flatify(dept_no, emp_no){

    const connection = currentConnection("sha_exercise2");
    let boss = {
        exists: false,   
        same: false,
    }

    let variables = {
        emp_id : emp_no,
        dept_id : dept_no,
        previousBossId : 0
    }

    // CHECKS if the employee is already a boss from another department (In that case it is a transfer)
    connection.query(
        `SELECT COUNT(employee_no) AS count FROM employee WHERE manager IS NULL AND dept_id = 
        (SELECT dept_id FROM employee WHERE employee_no = ?);`, [emp_no],
        (error, results, fields) => {
            if (error) throw error;
            console.log(results[0].count);
            if(results[0].count === 1)
                boss.exists = true;   // It means the department has a boss
        });

    // CHECKS if the boss is the same the client wants to make a boss
    connection.query(
        `SELECT employee_no AS emp FROM employee WHERE dept_id = ? AND manager IS NULL;`, [dept_no],
        (error, results, fields) => {
            if (error) throw error;

            if(results[0].emp === emp_no)
                boss.same = true;   // It means the client is trying to set the boss as a boss of his own department!!!
            
            if(chooseTransaction(connection, boss, variables))
                transaction(connection, variables);  // It calls all the transactions for this case
        });
}

function chooseTransaction(connection, boss_data, variables){
    console.log(boss_data.exists + " " + boss_data.same);
    if(boss_data.same){    // FIRST CASE: the client is trying to do something that it is already done
        console.log("This employee is already the boss of that department!");
        connection.end();
        return false
    } else if(boss_data.exists){  // SECOND CASE: The client is trying to change a boss from one department to another
        connection.query("SELECT dept_id AS id FROM employee WHERE employee_no = ?;", [variables.emp_id],
            (error, results, fields) => {
                if (error) throw error;
                
                variables.previousBossId = results[0].id;
            });
        return true;
    } else {                       // THIRD CASE: The client picked an employee (not a boss) to raise him/her as a dept. boss
        return true;
    }
}

function transaction(connection, variables){
    connection.beginTransaction(err =>{
        if (err) throw err; 

        // FIRST UPDATE
        connection.query(TableEmployees.transactions[0], 

            [variables.dept_id, variables.emp_id], (err, result) => {
            if (err) {
                connection.rollback(function(){ console.log("Error: " + err.message) });
            }
        })
        
        // SECOND UPDATE
        connection.query(TableEmployees.transactions[1], [variables.emp_id, variables.dept_id, variables.emp_id], 
            (err, result) => {
            if (err) {
                connection.rollback(() => { throw err; });
            }
        })
        
        if(variables.previousBossId != 0){
            // THIRD UPDATE
            connection.query(TableEmployees.transactions[2], [variables.previousBossId], (err, result) => {
                if (err) {
                    connection.rollback(() => { throw err; });
                }
                console.log("Reached!");
            })
        }
        
       connection.commit(err => {
           if (err) {
                connection.rollback(function(){ console.log("Error: " + err.message) });
           }
           console.log("Successful set new manager of department!");
       })

       connection.end();
    })
}

try{
    flatify(4, 7);
}
catch(err){
    console.log(`Error: ${err.message}`);
}