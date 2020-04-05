'use strict'

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company'
});

connection.connect();

connection.query('DROP TABLE IF EXISTS department', errorFunc);

connection.query('CREATE TABLE department (dept_no INT AUTO_INCREMENT NOT NULL, title VARCHAR(255), description TEXT, address VARCHAR(255), PRIMARY KEY(dept_no))', errorFunc);

connection.query('ALTER TABLE employee ADD COLUMN department INT', errorFunc);

connection.query('INSERT INTO department (title, description, address) VALUES ("Backend", "Earum aliquid nemo aperiam maxime animi id porro illo eaque nesciunt necessitatibus libero laboriosam fuga corrupti vitae atque quae quibusdam, ad est. Harum, inventore perspiciatis reiciendis quam earum ea itaque distinctio nemo rem praesentium amet nisi cupiditate odio deleniti saepe dolor iste?", "Virginia st. 33"), ("Frontend", "Quibusdam, sequi deleniti? Dolorum ab enim tenetur labore libero iste obcaecati harum dolor, vitae ea minima iusto molestiae ipsum? Vitae, adipisci? Incidunt molestias, iure repellat accusamus, cum eum perspiciatis tenetur ab asperiores et voluptas placeat beatae dignissimos eligendi enim commodi aut dolores quas laborum voluptatum facere magnam.", "Ohio st. 55"), ("Web Design", "Magnam, tempora? Porro alias officia voluptatem minima voluptas esse delectus magnam, nemo aliquam dicta magni doloribus ea modi nisi accusantium dolore fugit quia praesentium voluptates tempore dolorem? Deserunt accusantium porro iusto ea excepturi, eius assumenda ex, aliquam illo, accusamus rem repellat optio quo pariatur quis quasi dolores.", "Florida st. 88"), ("Web Apps", "Maiores et distinctio eius eligendi blanditiis ipsam corrupti numquam consectetur fugiat repellat similique delectus tempore est magni odio ratione harum, quisquam vitae, molestias in ut labore architecto? Cupiditate, id labore. Eveniet, illum magnam? Fuga, dignissimos temporibus qui odit nisi incidunt id. Alias ipsa incidunt earum commodi hic.", "Vermont st.69"), ("Databases", "Facere ullam quia, unde cumque veniam rem consequatur! Accusamus debitis laudantium libero magnam molestiae sit quibusdam ullam non quos? Exercitationem repudiandae, cum eaque, culpa omnis voluptatum libero fuga totam reprehenderit inventore dolorem sed enim, repellendus ex iusto optio. Consequuntur atque est ullam ab voluptatem beatae magni sequi!", "Cicago st. 123")', errorFunc);

connection.query('ALTER TABLE employee ADD CONSTRAINT FK_department FOREIGN KEY (department) REFERENCES department(dept_no)', errorFunc);

connection.query('UPDATE employee SET department= 1 WHERE employee_no IN (3, 9, 16, 17, 18, 19, 20)', errorFunc);
connection.query('UPDATE employee SET department= 2 WHERE employee_no IN (2, 6, 15)', errorFunc);
connection.query('UPDATE employee SET department= 3 WHERE employee_no IN (4, 8, 11, 12)', errorFunc);
connection.query('UPDATE employee SET department= 4 WHERE employee_no IN (5, 10, 14)', errorFunc);
connection.query('UPDATE employee SET department= 5 WHERE employee_no IN (1, 7, 13)', errorFunc);

connection.end();

function errorFunc(error, results, fields) {
    if (error) throw error;
}