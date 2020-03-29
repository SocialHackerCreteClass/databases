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

    con.query("DROP DATABASE IF EXISTS meetup", function (err, result) {
        if (err) throw err;
        console.log("Previous Database Dropped");

    })
    con.query("CREATE DATABASE IF NOT EXISTS meetup", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        afterDbCreation();
        con.end();
    })
    con.query("SET @@global.sql_mode= '';", function (err, result) {
        if (err) throw err;
        console.log("Query about strict mode updated!");
    })

});



//Create a table in the meetup database---------------------------------------------------------------------------------
function afterDbCreation() {

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



        //query to insert data into tables-----------------------------------------------------------------------------------------------------

        for (let i = 0; i < 5; i++) {
            con.query("INSERT INTO Invitee VALUES (5, 'test', 'someone')", function (err, result) {
                if (err) throw err;
                console.log("Record inserted");
            });
            con.query("INSERT INTO Room VALUES (5, 'Highway', 1)", function (err, result) {
                if (err) throw err;
                console.log("Record inserted");
            });

            con.query("INSERT INTO Meeting VALUES (5, 'meeting title', '14:30','15:30', 12 )", function (err, result) {
                if (err) throw err;
                console.log("Record inserted");
            });


        }
    });

}

