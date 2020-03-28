'use strict'

let projects = [];

function createProject(proj_name, starting_date, ending_date){
    const employeeTemplate = {
        proj_name, 
        starting_date, 
        ending_date
    };
    projects.push(employeeTemplate);
}

createProject("Manhattan", "1944-01-01", "1945-08-11");
createProject("Philadelphia", "1944-01-01", "1946-10-11");
createProject("Cretacic Park", "1997-06-01", "1999-12-24");
createProject("Liberty", "2020-01-01", "NULL");
createProject("Back to the Republic", "2021-05-25", "NULL");
createProject("Fire in the House", "2015-04-20", "NULL");
createProject("Deus Vult", "1096-05-10", "1291-05-11");
createProject("Killing Genghis", "1200-10-10", "1227-08-18");
createProject("Law & Order", "2001-09-11", "NULL");
createProject("Corona Virus", "2020-01-05", "2021-12-21");

module.exports = projects;