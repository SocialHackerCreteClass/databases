var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'quarantine'
});

connection.connect();
connection.query(`SELECT Employee.full_name AS Employee, 
manager.full_name AS manager 
FROM Employee
LEFT JOIN Employee AS manager 
ON Employee.manager_id = manager.employee_no`, function (error, results, fields) {
    if (error) throw error;
    console.log('Join created');
});
connection.query(`SELECT Employee.full_name AS Employee, 
Department.title 
FROM Employee
LEFT JOIN Department 
ON Employee.department = Department.dept_no`, function (error, results, fields) {
    if (error) throw error;
    console.log('Join created');
    console.log(results);
});

connection.end();
