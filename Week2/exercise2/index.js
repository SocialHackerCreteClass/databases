const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'employees'
});

const departments = [
  [1, 'Sales', 'Manages Sales', 'Athens Street 1'],
  [2, 'Human Resources', 'Manages staff', 'Athens Street 2'],
  [3, 'Design', 'In charge of design', 'Athens Street 3'],
  [4, 'Social', 'Manages social media account', 'Athens Street 4'],
];

connection.connect();

// connection.query(`DROP TABLE IF EXISTS department;`);
connection.query(`
  CREATE TABLE department (
    dept_no INT,
    title TEXT,
    description TEXT,
    address TEXT,
    PRIMARY KEY (dept_no)
  );
`, (err) => console.error(err));

connection.query(
  `INSERT INTO department (dept_no, title, description, address) VALUES ?`,
  [departments],
  (err) => console.error(err)
);

connection.query(
  `ALTER TABLE employee ADD dept_id INT, ADD FOREIGN KEY (dept_id) REFERENCES department (dept_no);`,
  (err) => console.error(err)
);

for (let i = 1; i <= 20; i++) {
  let dept = 1;
  if (i >= 5 && i < 10) {
    dept = 2;
  } else if (i >= 10 && i < 15) {
    dept = 3;
  } else if (i >= 15) {
    dept = 4;
  }
  connection.query(
    `UPDATE employee SET dept_id=${dept} WHERE employee_no=${i}`,
    (err) => console.error(err)
  );
}


connection.end();