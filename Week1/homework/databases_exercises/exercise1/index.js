'use strict'

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});

connection.connect();

connection.query('DROP DATABASE IF EXISTS `meetup`;', function (error, results, fields) {
    if (error) throw error;
});

connection.query('CREATE DATABASE `meetup`;', function (error, results, fields) {
    if (error) throw error;
    console.log(`Database 'meetup' created`);
});

connection.query('USE `meetup`;', function (error, results, fields) {
    if (error) throw error;
});

connection.query('DROP TABLE IF EXISTS `Invitee`;', function (error, results, fields) {
    if (error) throw error;
});

connection.query('CREATE TABLE Invitee (invitee_no INT, invitee_name VARCHAR(255), invited_by VARCHAR(255))', function (error, results, fields) {
    if (error) throw error;
});

connection.query('DROP TABLE IF EXISTS `Room`;', function (error, results, fields) {
    if (error) throw error;
});

connection.query('CREATE TABLE Room (room_no INT, room_name VARCHAR(255), floor_number INT)', function (error, results, fields) {
    if (error) throw error;
});

connection.query('DROP TABLE IF EXISTS `Meeting`;', function (error, results, fields) {
    if (error) throw error;
});

connection.query('CREATE TABLE Meeting (meeting_no INT, meeting_title VARCHAR(255), starting_time DATETIME, ending_time DATETIME, room_no INT)', function (error, results, fields) {
    if (error) throw error;
});

connection.query('INSERT INTO Invitee VALUES (1, "Dan", "Stelios"), (2, "Manos", "Dan"), (3, "Giorgos", "Stelios"), (4, "Maria", "Daniel"), (5, "Mike", "Daniel")', function (error, results, fields) {
    if (error) throw error;
});

connection.query('INSERT INTO Room VALUES (101, "Paradise", 1), (102, "Hell", 1), (201, "Casino", 2), (202, "Bank", 2), (300, "Sky", 3)', function (error, results, fields) {
    if (error) throw error;
});

connection.query('INSERT INTO Meeting VALUES (001, "Coronavirus", "2020-03-29 12:00:00", "2020-03-29 12:45:00", 102), (002, "World Revolution", "2020-03-29 13:00:00", "2020-03-29 13:45:00", 101), (003, "Poker Odds", "2020-03-29 15:00:00", "2020-03-29 15:45:00", 201), (004, "World Economy Summit", "2020-03-29 16:00:00", "2020-03-29 16:45:00", 202), (005, "DJing in the 21st Century", "2020-03-29 21:00:00", "2020-03-29 22:45:00", 300)', function (error, results, fields) {
    if (error) throw error;
});


connection.end();