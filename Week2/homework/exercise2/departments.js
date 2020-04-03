'use strict'

let departments = [];

function createDepartment(title, description, address){
    const departmentTemplate = {
        title, 
        description, 
        address
    };
    departments.push(departmentTemplate);
}

createDepartment("Management", "Manages all projects", "Whatever St. #50, New York");
createDepartment("Marketing", "In charge of all projects marketing", "Whatever St. #51, New York");
createDepartment("Finances", "In charge of all projects finances and loans", "Whatever St. #52, New York");
createDepartment("Safety", "In charge of security and 'relocating' nosy people", "Whatever St. #??, New York");
createDepartment("Human Resources", "In charge of recruiting personnel", "Whatever St. #53, New York");
createDepartment("Secret Projects", "In charge of secret projects", "???, New York");

module.exports = departments;