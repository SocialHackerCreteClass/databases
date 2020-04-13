'use strict'

let skills = [];

function createSkill(skill){
    const skillTemplate = {
        skill
    };
    skills.push(skillTemplate);
}

createSkill("SCRUM");
createSkill("Product Management");
createSkill("Node.js");
createSkill("SQL");
createSkill("React");

module.exports = skills;