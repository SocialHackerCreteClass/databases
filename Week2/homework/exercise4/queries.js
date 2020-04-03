'use strict'

let queries = [
    {
        query : 'SELECT d.title "Department", COUNT(e.full_name) "Number_of_Employees" FROM department d ' +
            'LEFT JOIN employee e ON e.dept_id = d.dept_no GROUP BY d.dept_no;',
        creationMsg: "1. All department numbers and the number of employees working there:",
    },
    {
        query : 'SELECT SUM(salary) "Total_Salary" FROM employee;',
        creationMsg: "2. Sum of the salaries of all employees:"
    },
    {
        query : 'SELECT AVG(salary) "Average_Salary" FROM employee;',
        creationMsg: "3. Average of the salaries of all employees:"
    },
    {
        query : 'SELECT d.title "Department", SUM(e.salary) "Total_Employee_Salaries" ' +
            'FROM department d LEFT JOIN employee e ON e.dept_id = d.dept_no GROUP BY d.dept_no;',
        creationMsg: "4. Sum of the salaries of the employees per department:"
    },
    {
        query : 'SELECT d.title "Department", MIN(e.salary) "Minimum_Employee_Salary", ' + 
            'MAX(e.salary) "Maximum_Employee_Salary" FROM department d LEFT JOIN employee e ' +
            'ON e.dept_id = d.dept_no GROUP BY d.dept_no;',
        creationMsg: "5. Minimum and maximum od the salaries per department:"
    },
    {
        query : 'SELECT salary "Salary_Value", COUNT(*) "Employees_with_this_salary" FROM employee s ' +
            'GROUP BY salary;',
        creationMsg: "6. For each salary value, return the number of employees paid:"
    }
];

module.exports = queries;