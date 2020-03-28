'use strict'

let employees = [];

function createEmployee(emp_name, salary, reports_to){
    const employeeTemplate = {
        emp_name, 
        salary, 
        reports_to
    };
    employees.push(employeeTemplate);
}

createEmployee("John Wick", 2500.50, "Chuck Norris");
createEmployee("Luke Skywalker", 1500.00, "Yoda Yoda");
createEmployee("Marty McFly", 2500.50, "Stephen Hawkings");
createEmployee("Donald Trump", 2500.50, "Vladimir Putin");
createEmployee("Jason Bourne", 2500.50, "Edgar Hoover");
createEmployee("Mickey Mouse", 2500.50, "Walt Disney");
createEmployee("Carl Sagan", 2500.50, "Capt. Nemo");
createEmployee("Ching Chong", 2500.50, "Chang Chang");
createEmployee("Thor Pérez", 2500.50, "Zeus Hernández");
createEmployee("Britney Spears", 2500.50, "M. Madonna");

module.exports = employees;