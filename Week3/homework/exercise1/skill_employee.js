'use strict'

let skill_employee = [];

function createSkill_Employee(employee_id, skill_id){
    const skillEmployeeTemplate = {
        employee_id, 
        skill_id
    };
    skill_employee.push(skillEmployeeTemplate);
}

createSkill_Employee(1, 2);
createSkill_Employee(1, 3);
createSkill_Employee(5, 1);
createSkill_Employee(5, 3);
createSkill_Employee(5, 5);
createSkill_Employee(7, 4);
createSkill_Employee(8, 2);

module.exports = skill_employee;