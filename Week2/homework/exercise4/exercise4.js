'use strict'

let mysql = require("mysql");
let queries = require("./queries");

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

    queries.forEach(el => {
        connection.query(el.query, (error, results, fields) => {
            if (error) throw error;

            console.log("\n" + el.creationMsg);

            results.forEach(el => {
                let text = "";
                const rows = JSON.parse(JSON.stringify(el));
                 const rowFields = Object.values(rows);  
                rowFields.forEach(value => {
                    text += value + "  "; 
                })
                console.log(text);
            });
        });
    });

    connection.end();
}

createTables("sha_exercise2");