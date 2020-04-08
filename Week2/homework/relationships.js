var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'quarantine'
});

connection.connect();
connection.query('CREATE TABLE Department (dept_no int AUTO_INCREMENT, title VARCHAR(50), description text, address text, CONSTRAINT PK_dept PRIMARY KEY (dept_no))', function (error, results, fields) {
    if (error) throw error;
    console.log('Database created');
});
connection.query('ALTER TABLE Employee ADD COLUMN department int', function (error, results, fields) {
    if (error) throw error;
    console.log('Column created');
});
connection.query(`INSERT INTO Department (title, description, address) VALUES 
("FrontEnd", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget.", "Mitsotaki 55"), 
("BackEnd", "Pellentesque risus elit, blandit in tellus sit amet, scelerisque tempor.", "Averof 3"), 
("Design", "Vivamus ornare nisi at nisi tristique vestibulum. Fusce a porttitor.", "Karagianni 45"), 
("Applications", "Quisque ultricies arcu sed orci imperdiet volutpat. Pellentesque ut ante.", "Kapodistria 32"), 
("DataBases", "Pellentesque sed pulvinar ipsum. Vivamus a volutpat ex. Sed eu.", "Karamanli 76")`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('Values inserted');
    });
connection.query(`UPDATE Employee SET department=1 WHERE employee_no IN (1,3,5,12)`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('Values inserted');
    });
connection.query(`UPDATE Employee SET department=2 WHERE employee_no IN (2,8,10,17)`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('Values inserted');
    });
connection.query(`UPDATE Employee SET department=3 WHERE employee_no IN (4,9,13,20)`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('Values inserted');
    });
connection.query(`UPDATE Employee SET department=4 WHERE employee_no IN (6,14,15,16)`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('Values inserted');
    });
connection.query(`UPDATE Employee SET department=5 WHERE employee_no IN (7,11,18,19)`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('Values inserted');
    });
connection.query('ALTER TABLE Employee ADD CONSTRAINT FK_department FOREIGN KEY (department) REFERENCES Department(dept_no)', function (error, results, fields) {
    if (error) throw error;
    console.log('Foreign key created');
});
connection.end();