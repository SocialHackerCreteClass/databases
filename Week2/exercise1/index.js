const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'employees'
});

connection.connect();

const employees = [
  [1, 'Alexis Zhang', 12000, 'W Campbell Ave 9200'],
  [2, 'Leana Rolland', 30000, 'Parliament St 8100'],
  [3, 'Caroline Ross', 140000, 'Dieppe Ave 991'],
  [4, 'Toivo Wuori', 90000, 'Avenida de La Albufera 3391'],
  [5, 'Angeles Nunez', 20000, 'Rua São José 920'],
  [6, 'Christianus Cools', 150000, 'The Grove 9871'],
  [7, 'Tina Guerin', 50000, 'Enebakkveien 5106'],
  [8, 'Marvin Garrett', 34000, 'Rue de la Barre 145'],
  [9, 'Jovelino Ribeiro', 73000, 'Calle de Atocha 9939'],
  [10, 'Madeleine Melchior', 600500, 'Calle de Arganzuela 3223'],
  [11, 'Lorena Medina', 250300, 'Calle del Pez 6222'],
  [12, 'Carol Schmitt', 534000, 'Boulevard de la Duchère 331'],
  [13, 'Frede Nascimento', 76900, 'Rua da Paz 1294'],
  [14, 'Cristian Jimenez', 64000, 'Calle de Alcalá 12'],
  [15, 'Boris Lemaire', 301000, 'Rue Courbet 9018'],
  [16, 'Sofia Jackson', 209850, 'Roscommon Road 62'],
  [17, 'Shannon Snyder', 52000, 'Poplar Dr 4512'],
  [18, 'Lotte Kampmann', 185000, 'Kastanienweg 5634'],
  [19, 'Elias Hansen', 143500, 'Skovkrogen 7'],
  [20, 'Antoine Wilson', 453000, '22nd Ave 193']
];

const managers = [
  'Emma Christensen',
  'Yanis Rey',
  'Sixto Moreira',
  'Hazel Moore',
  'Mahmut Schürmann'
]

connection.query(`DROP TABLE IF EXISTS employee;`);
connection.query(
  `CREATE TABLE employee (
    employee_no INT,
    full_name TEXT,
    salary INT,
    address TEXT,
    manager VARCHAR(50),
    PRIMARY KEY (employee_no)
  );`,
  (err) => console.error(err)
);

connection.query(
  `INSERT INTO employee (employee_no, full_name, salary, address) VALUES ?`,
  [employees],
  (err) => console.error(err)
);

connection.query(
  `ALTER TABLE employee ADD FOREIGN KEY (manager) REFERENCES employees (employee_no);`,
  (err) => console.error(err)
);

for (let i = 1; i <= 20; i++) {
  let manager = 1;
  if (i >= 5 && i < 10) {
    manager = 2;
  } else if (i >= 10 && i < 15) {
    manager = 3;
  } else if (i >= 15) {
    manager = 4;
  }
  connection.query(
    `UPDATE employee SET manager="${managers[manager]}" WHERE employee_no=${i}`,
    (err) => console.error(err)
  );
}

connection.end();