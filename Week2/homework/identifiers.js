'use strict'

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});

connection.connect();


connection.query('DROP DATABASE IF EXISTS company', errorFunc);

connection.query('CREATE DATABASE company', errorFunc);

connection.query('USE company', errorFunc);

connection.query('CREATE TABLE employee (employee_no INT AUTO_INCREMENT NOT NULL, full_name VARCHAR(255) NOT NULL, salary INT, address VARCHAR(255), PRIMARY KEY(employee_no))', errorFunc);

connection.query('ALTER TABLE employee ADD COLUMN manager_no INT', errorFunc);

connection.query(`INSERT INTO employee (full_name, salary, address, manager_no) VALUES 
("John Doe", 850, "Nidas 5", 16),
("Yannis Ayannis", 1250, "Pelopida 15", 18),
("Maria Antouan", 1850, "Elafonisou 23", 17),
("Marios Dionisiou", 950, "Anafis 13", 3),
("Paris Argyros", 1150, "Parisiou 5", 20),
("Jack Lemon", 1250, "Oktovri 17", 18),
("Kostas Fysas", 1650, "Antifa 69", 16),
("Gogo Giannopoulou", 1000, "Kantonas 51", 3),
("Peris Ortantzoglou", 1150, "Antistaseos 135", 17),
("Emver Doja", 1000, "Alvanias 76", 20),
("Kostis Paleolo", 1450, "Vyzantiou 29", 3),
("Maria Koti", 1650, "Xainidon 33", 3),
("Yiannis Pyravlos", 950, "Nasas 5", 16),
("Vaggelis Marinidis", 3050, "Prezas 2", 20),
("Eleni Karaindrou", 1450, "Melissokomou 15", 18),
("Yannis Serifis", 1850, "Agrias Disis 5", 17),
("Spyros Tsiodras", 3333, "Koronaiou 19", NULL),
("Manolis Mpixtakis", 2850, "Sirinas 7", 17),
("Petroula Kotsidou", 1150, "Kairou 15", 17),
("Sofia Venizelou", 1922, "Mikrasias 22", 17)`, errorFunc);

connection.query('ALTER TABLE employee ADD CONSTRAINT FK_manager FOREIGN KEY (manager_no) REFERENCES employee(employee_no)', errorFunc);

connection.end();

function errorFunc(error, results, fields) {
    if (error) throw error;
}