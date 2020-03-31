'use strict';

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

const generateRandomDate = (date1 = '01/01/2018', date2 = '01/01/2020') => {
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  var date1 = date1 || '01-01-1970';
  var date2 = date2 || new Date().toLocaleDateString();
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  if (date1 > date2) {
    return new Date(randomValueBetween(date2, date1)).toLocaleDateString();
  }
  return new Date(randomValueBetween(date1, date2)).toLocaleDateString();
};

const generateEmployeeArray = (numOfEntries) => {
  let employeeArray = [];
  for (let i = 0; i < numOfEntries; i++) {
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
  for (let i = 0; i < numOfEntries; i++) {
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
  for (let i = 0; i < numOfEntries; i++) {
    let arr = [
      generateRandomID(),
      generateProject(),
      generateRandomDate(),
      generateRandomDate()
    ];
    projectArray.push(arr);
  }
  return projectArray;
};

module.exports.generateEmployeeArray = generateEmployeeArray;
module.exports.generateDepartmentArray = generateDepartmentArray;
module.exports.generateProjectArray = generateProjectArray;
