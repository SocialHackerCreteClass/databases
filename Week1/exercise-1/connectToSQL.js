var mysql = require('mysql');


//Create a database with con.connect query above-----------------------------------------------------------------

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
});



con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS meetup", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    })

});

//Create a table in the meetup database---------------------------------------------------------------------------------

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "meetup"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE TABLE IF NOT EXISTS Invitee  (invitee_no INT, invitee_name CHAR, invited_by CHAR)", function (err, result) {
        if (err) throw err;
        console.log("Table created");
    })
    con.query("CREATE TABLE IF NOT EXISTS Room  (room_no INT, room_name CHAR, floor_number INT)", function (err, result) {
        if (err) throw err;
        console.log("Table created");
    })
    con.query("CREATE TABLE IF NOT EXISTS Meeting  (meeting_no INT, meeting_title CHAR, starting_time TIME, ending_time TIME, room_no INT)", function (err, result) {
        if (err) throw err;
        console.log("Table created");
    })
});
