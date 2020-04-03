'use strict'

let managers = [];

function createManager(manager_id, employee_id){
    const managerTemplate = {
        manager_id, 
        employee_id
    };
    managers.push(managerTemplate);
}

createManager(5, 10);
createManager(1, 3);
createManager(7, 6);
createManager(7, 9);
createManager(7, 2);
createManager(1, 4);

module.exports = managers;