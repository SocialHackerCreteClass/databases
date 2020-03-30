'use strict'

let departments = [];

function createDepartment(dept_name, manager){
    const departmentTemplate = {
        dept_name, 
        manager
    };
    departments.push(departmentTemplate);
}

createDepartment("Human Resources", "John Doe");
createDepartment("Accounting", "Jane Doe");
createDepartment("Engineering", "Susan Doe");
createDepartment("Architecture", "Violeta Doe");
createDepartment("Legal Affaires", "Preston Doe");
createDepartment("Health", "Douglas Doe");
createDepartment("Security", "Rambo Doe");
createDepartment("Finances", "Rockefeller Doe");
createDepartment("Foreign Affairs", "Winston Doe");
createDepartment("Secret Services", "Jason Doe");

module.exports = departments;