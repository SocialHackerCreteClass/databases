'use strict'

let employees = [];

function createEmployee(full_name, salary, address){
    const employeeTemplate = {
        full_name, 
        salary, 
        address
    };
    employees.push(employeeTemplate);
}

createEmployee("John Wick", 2500.50, "Whatever St. #40, Goth City");
createEmployee("Luke Skywalker", 1500.00, "Evergreen St. #10, A galaxy far far away");
createEmployee("Marty McFly", 4500.50, "Address unknown");
createEmployee("Donald Trump", 2200.50, "White House, Washington");
createEmployee("Jason Bourne", 2100.50, "Shambala");
createEmployee("Mickey Mouse", 4200.50, "Walt Disney, California");
createEmployee("Carl Sagan", 2980.50, "Afterlife St. #0, Afterlife");
createEmployee("Ching Chong", 2200.00, "Chang St., China");
createEmployee("Thor Pérez", 2300.30, "Somewhere in Latinamerica");
createEmployee("Britney Spears", 2000.50, "Somewhere in California");

module.exports = employees;