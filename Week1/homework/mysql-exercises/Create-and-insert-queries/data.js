'use strict';

const DateGenerator = require('random-date-generator');
// Need to check that starting date precedes ending date
const startDate = new Date(2015, 1, 1);
const endDate = new Date(2020, 1, 1);

const firstName = [
  'Judith',
  'Aphrodite',
  'Meghan',
  'Deanna',
  'Uriel',
  'Orson',
  'Keegan',
  'Cadman',
  'Anne',
  'Ingrid',
  'Kenneth',
  'Nadine',
  'Casey',
  'Ramona',
  'Malachi',
  'Jane',
  'Phoebe',
  'Kellie',
  'Emi',
  'Aquila'
];

const lastName = [
  'Lambert',
  'Lindsay',
  'Banks',
  'Brady',
  'Peterson',
  'Chan',
  'Crane',
  'Bradford',
  'Vazquez',
  'Bean',
  'Ayala',
  'Bates',
  'Reese',
  'Francis',
  'Kennedy',
  'Rosario',
  'Colon',
  'Oneal',
  'Rios',
  'Baker'
];

const departments = [
  'Payroll',
  'Media Relations',
  'Public Relations',
  'Accounting',
  'Quality Assurance',
  'Human Resources',
  'Research and Development',
  'Customer Relations',
  'Sales and Marketing',
  'Finances',
  'Tech Support'
];

const projects = [
  'Square Tuba',
  'Bleeding Indigo Omega',
  'Locomotive Rainbow',
  'Burst Straw',
  'Grim Northernmost Balcony',
  'Early Scorpion',
  'Drill Rebel',
  'Drill Olive'
];

const generateRandomNumber = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const generateRandomID = () => {
  return Math.floor(Math.random() * 100001);
};

const generateName = () => {
  const lastNameIndex = generateRandomNumber(lastName);
  const firstNameIndex = generateRandomNumber(firstName);
  return firstName[firstNameIndex] + ' ' + lastName[lastNameIndex];
};

const generateDepartment = () => {
  const departmentIndex = generateRandomNumber(departments);
  return departments[departmentIndex];
};

const generateProject = () => {
  const projectIndex = generateRandomNumber(projects);
  return projects[projectIndex];
};

const generateRandomSalary = () => {
  const minSalary = 15000;
  const maxSalary = 60000;
  return Math.floor(Math.random() * maxSalary) + minSalary;
};

const generateEmployeeArray = (numOfEntries) => {
  let employeeArray = [];
  for (let i = 0; i < numOfEntries; i += 1) {
    let arr = [
      generateRandomID(),
      generateName(),
      generateRandomSalary(),
      generateName()
    ];
    employeeArray.push(arr);
  }
  return employeeArray;
};

const generateDepartmentArray = (numOfEntries) => {
  let departmentArray = [];
  for (let i = 0; i < numOfEntries; i += 1) {
    let arr = [
      generateRandomID(),
      generateDepartment(),
      generateName()
    ];
    departmentArray.push(arr);
  }
  return departmentArray;
};

const generateProjectArray = (numOfEntries) => {
  let projectArray = [];
  for (let i = 0; i < numOfEntries; i += 1) {
    let arr = [
      generateRandomID(),
      generateProject(),
      DateGenerator.getRandomDateInRange(startDate, endDate),
      DateGenerator.getRandomDateInRange(startDate, endDate)
    ];
    projectArray.push(arr);
  }
  return projectArray;
};

module.exports.generateEmployeeArray = generateEmployeeArray;
module.exports.generateDepartmentArray = generateDepartmentArray;
module.exports.generateProjectArray = generateProjectArray;
