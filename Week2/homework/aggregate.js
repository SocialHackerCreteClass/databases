var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'quarantine'
});

connection.query(`SELECT department, Count(employee_no) AS count_employees 
FROM Employee 
GROUP BY department`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('number of employees');
        console.log(results);
    });
connection.query(`SELECT Sum(salary) AS sum_salaries 
FROM Employee`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('sum salaries');
        console.log(results);
    });
connection.query(`SELECT Avg(salary) AS mean_salary 
FROM Employee`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('mean salaries');
        console.log(results);
    });
connection.query(`SELECT Department.title AS Department, Sum(Employee.salary) AS sum_salary 
FROM Employee
LEFT JOIN Department 
ON Employee.department=Department.dept_no
GROUP BY Department.title`, function (error, results, fields) {
    if (error) throw error;
    console.log('sum salaries per department');
    console.log(results);
});
connection.query(`SELECT Department.title AS Department, Min(Employee.salary) AS min_salary, Max(Employee.salary) AS max_salary 
FROM Employee
LEFT JOIN Department 
ON Employee.department=Department.dept_no
GROUP BY Department.title`, function (error, results, fields) {
    if (error) throw error;
    console.log('min and max salary per department');
    console.log(results);
});
connection.query(`SELECT salary, Count(employee_no) AS count_employees 
FROM Employee 
GROUP BY salary`,
    function (error, results, fields) {
        if (error) throw error;
        console.log('number of employees per salary');
        console.log(results);
    });
connection.end();