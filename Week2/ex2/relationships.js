const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "company",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB..");
});

connection.query("DROP TABLE IF EXISTS department;");
connection.query(
  "CREATE TABLE department (dept_no INT AUTO_INCREMENT NOT NULL, title VARCHAR(255), description TEXT, address VARCHAR(255), PRIMARY KEY(dept_no));",
  (err) => {
    if (err) throw err;
  }
);

connection.query(`INSERT INTO department (title, description, address) VALUES
('Administration', 'Admin dpt bla bla bla', 'Όδος Γούσιος, 24'),
('Marketing & Sales', 'Marketing dpt bla bla bla', 'Όδος Μακρή, 60-45'),
('Human Resources', 'HR dpt bla bla bla', 'Όδος Ανυφαντή, 6-9'),
('IT', 'IT dpt bla bla bla', 'Λεωφόρος Ευθυμιάδης, 5'),
('Support', 'Support dpt bla bla bla','Λεωφόρος Στεφανόπουλος, 7-8');
`);

connection.query("ALTER TABLE employee ADD COLUMN dept_no INT;");

connection.query(
  "ALTER TABLE employee ADD CONSTRAINT FK_dept FOREIGN KEY (dept_no) REFERENCES department(dept_no);"
);

connection.query(
  "UPDATE employee SET dept_no=1 WHERE employee_no IN (1,3,7,5);"
);
connection.query(
  "UPDATE employee SET dept_no=2 WHERE employee_no IN (2,4,6,15);"
);
connection.query(
  "UPDATE employee SET dept_no=3 WHERE employee_no IN (9,11,13,17);"
);
connection.query(
  "UPDATE employee SET dept_no=4 WHERE employee_no IN (8,10,12,19);"
);
connection.query(
  "UPDATE employee SET dept_no=5 WHERE employee_no IN (14,16,18,20);"
);

connection.end();
