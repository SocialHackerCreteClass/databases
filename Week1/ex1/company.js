const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

connection.connect((err) => {
  if (err) throw err;
});

connection.query(
  "CREATE TABLE IF NOT EXISTS Employees (emp_no INTEGER NOT NULL AUTO_INCREMENT, emp_name VARCHAR(25) NOT NULL, salary DOUBLE NOT NULL , reports_to VARCHAR(25) NOT NULL, PRIMARY KEY(emp_no));",
  (error, result) => {
    if (error) throw error;
    console.log(`Table Employees created and the results are ${result}`);
  }
);

connection.query(
  "CREATE TABLE IF NOT EXISTS Departments (dept_no INTEGER NOT NULL AUTO_INCREMENT, dept_name VARCHAR(25) NOT NULL, manager VARCHAR(25) NOT NULL, PRIMARY KEY(dept_no));",
  (error, result) => {
    if (error) throw error;
    console.log(`Table departments created and the results are ${result}`);
  }
);

connection.query(
  "CREATE TABLE IF NOT EXISTS Projects (proj_no INTEGER NOT NULL AUTO_INCREMENT, proj_name VARCHAR(25) NOT NULL, starting_date DATE NOT NULL, ending_date DATE NULL, PRIMARY KEY(proj_no));",
  (error, result) => {
    if (error) throw error;
    console.log(`Table Projects created and the results are ${result}`);
  }
);

connection.query(
  "INSERT INTO Employees (emp_name, salary, reports_to) VALUES ('Wm Evans', 52000, 'Clark May');"
);
connection.query(
  "INSERT INTO Employees (emp_name, salary, reports_to) VALUES ('Clifford West', 52000, 'Michelle Haynes');"
);
connection.query(
  "INSERT INTO Employees (emp_name, salary, reports_to) VALUES ('Brett Hopkins', 52000.50, 'Adrian Wallace');"
);
connection.query(
  "INSERT INTO Employees (emp_name, salary, reports_to) VALUES ('Amanda Barker', 52000, 'Evan Myers');"
);
connection.query(
  "INSERT INTO Employees (emp_name, salary, reports_to) VALUES ('Lorraine Pope', 52000, 'Kirk Rios');"
);

connection.query(
  "INSERT INTO Departments (dept_name, manager) VALUES ('Sales','Melba Aguilar');"
);
connection.query(
  "INSERT INTO Departments (dept_name, manager) VALUES ('Marketing','Alton Ford');"
);
connection.query(
  "INSERT INTO Departments (dept_name, manager) VALUES ('Human Resources','Sherry Paul');"
);
connection.query(
  "INSERT INTO Departments (dept_name, manager) VALUES ('Administration','Courtney Wagner');"
);
connection.query(
  "INSERT INTO Departments (dept_name, manager) VALUES ('Survey','Juan Dawson');"
);

connection.query(
  "INSERT INTO Projects (proj_name, starting_date, ending_date) VALUES ('Youth', '1994-12-30', '1997-02-17');"
);
connection.query(
  "INSERT INTO Projects (proj_name, starting_date) VALUES ('COVID-19', '2019-12-28');"
);
connection.query(
  "INSERT INTO Projects (proj_name, starting_date, ending_date) VALUES ('Pink Project', '2004-04-06', '2006-09-12');"
);
connection.query(
  "INSERT INTO Projects (proj_name, starting_date, ending_date) VALUES ('Environmental', '2005-09-30', '2018-05-28');"
);
connection.query(
  "INSERT INTO Projects (proj_name, starting_date) VALUES ('Bampis', '2019-04-19');"
);

connection.end();
