const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB..");
});

connection.query("DROP DATABASE IF EXISTS company");
connection.query("CREATE DATABASE company");
connection.query("USE company");
connection.query(
  "CREATE TABLE employee (employee_no INT AUTO_INCREMENT NOT NULL, full_name VARCHAR(255) NOT NULL, salary FLOAT, address VARCHAR(255), PRIMARY KEY(employee_no));"
);

connection.query("ALTER TABLE employee ADD COLUMN manager_no INT;");

connection.query(
  `INSERT INTO employee (full_name, salary, address, manager_no) VALUES
('Θηρεσία Αλεξίου',5000,'Λεωφόρος Μπόγρη, 196',1),
('Θεοφίλη Ευθυμιάδου',5200,'Όδος Σωπολιάτη, 89',1),
('Τριαντάφυλλη Ράφτη',5000,'Λεωφόρος Σωπολιάτη, 826',3),
('Χρήστος Αλεβίζος',4200.52,'Λεωφόρος Αλιβιζάτος, 0',5),
('Θεόδωρος Δουρέντης',5000,'Όδος Μοραΐτη, 7',5),
('Σοφοκλής Βασιλόπουλος',4200.52,'Λεωφόρος Παπαδοπούλου, 6',3),
('Ιωσηφίνα Ευθυμιάδου',5000,'Όδος Δασκαλοπούλου, 9',2),
('Ευδόξιος Ηλιάδης',5000,'Όδος Μιχαηλίδης, 206',3),
('Κασσιανή Ευθυμιάδου',5000,'Λεωφόρος Δασκαλοπούλου, 447',2),
('Ευαγγελία Ανυφαντή',4200.52,'Λεωφόρος Ρέντης, 0', NULL),
('Θαλασσινή Καπνού',5000,'Όδος Βιτάλη, 86',2),
('Πάρις Αλεξόπουλος',5000,'Λεωφόρος Παπακιρίσκου, 4-5',4),
('Δέσποινα Οικονομοπούλου',4200.52,'Λεωφόρος Μοραΐτη, 3-3',4),
('Παρθένα Χαραλαμπίδου',5000,'Όδος Γεννήτη, 508',2),
('Λουλουδένια Γάσπαρη',5000,'Λεωφόρος Ευθυμιάδου, 08',1),
('Ευτυχία Σπανού',5000,'Λεωφόρος Λάσκαρη, 0',3),
('Φρειδερίκος Βιτάλης',4200.52,'Όδος Βιτάλη, 832-910',1),
('Θεόπιστος Ευταξίας',5000,'Λεωφόρος Θεωδώρου, 93-35',2),
('Δημήτριος Αποστολόπουλος',5000,'Όδος Μπλέτσας, 63-84',3),
('Βασίλης Κόρακας',4200.52,'Όδος Παππάς, 7-3',5)`
);

connection.query(
  "ALTER TABLE employee ADD CONSTRAINT FK_manager FOREIGN KEY (manager_no) REFERENCES employee(employee_no);"
);

connection.end();
