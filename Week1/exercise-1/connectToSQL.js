var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    //after i create the database i enter the name here in order to add some tables to it!

});

//create a database called "meetup"

con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS meetup", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});


//after i create the database i enter the name here in order to add some tables to it!
var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "meetup"

});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE Invitee (invitee_no VARCHAR(255), invitee_name VARCHAR(255), invited_by(VARCHAR))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});
