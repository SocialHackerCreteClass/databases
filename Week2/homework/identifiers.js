var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});

connection.connect();
connection.query("DROP DATABASE IF EXISTS quarantine");
connection.query("CREATE DATABASE quarantine", function (error, results, fields) {
    if (error) throw error;
    console.log('Database created');
});
connection.query("USE quarantine", function (error, results, fields) {
    if (error) throw error;
    console.log('Database used');
});
connection.query('CREATE TABLE Employee (employee_no int AUTO_INCREMENT, full_name VARCHAR(50), salary float, address text, CONSTRAINT PK_employee PRIMARY KEY (employee_no))', function (error, results, fields) {
    if (error) throw error;
    console.log('Table created');
});
connection.query('ALTER TABLE Employee ADD COLUMN manager_id int', function (error, results, fields) {
    if (error) throw error;
    console.log('Column created');
});
connection.query('INSERT INTO Employee (full_name, salary, address, manager_id) VALUES ("Manos Ktistakis", 1500, "Andrea Papandreou 19", 3), ("Stelios Anastas", 1700, "Georgiou Papandreou", 8), ("Dimitra Milioni", 2000, "Andrea Papandreou 19", NULL), ("John Doe", 1000, "Georgiou Papandreou 50", 13), ("Ioli Ktistaki", 600, "Iros Konstantopoulou 88", 3),("Manu Ktistakas", 1600, "Andrea Papandreou 2", 16), ("Stelaras Anastasak", 1200, "Georgiou Papandreou 5", 19), ("Dimitris Milionis", 2100, "Andrea Sofroni 23", NULL), ("John Higgs", 1050, "Athinon 30", 13), ("Iolaos Ktis", 950, "Iroon Polytechniou 54", 8),("Emmanouela Panokaki", 1300, "Lamias 32", 19), ("Stavros Peris", 1250, "Palaiologou 85", 3), ("Dimos Milaras", 1840, "Pouliopoulou 17", NULL), ("Jack Black", 1000, "Highschool 17", 16), ("Eleni Omorfi", 1500, "Trias 10", 16), ("Panos Kato", 2300, "Allou 56", NULL), ("Stratos Xestratou", 1400, "Pantou 66", 8), ("Maria Krinou", 1650, "Pantou 1", 19), ("John Jones", 1700, "Kavafi 73", NULL), ("Katerina Politou", 1450, "Voithias 23", 13)', function (error, results, fields) {
    if (error) throw error;
    console.log('Inserted to table');
});
connection.query('ALTER TABLE Employee ADD CONSTRAINT FK_manager FOREIGN KEY (manager_id) REFERENCES Employee(employee_no)', function (error, results, fields) {
    if (error) throw error;
    console.log('Foreign key created');
});


connection.end();