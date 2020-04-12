
let mysql = require("mysql")

connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'daniel',
    password : '',
    database : 'exercises',
});

connection.connect()

connection.query('CREATE TABLE `exercises`.`Research_Papers` ( `paper_id` INT(20) NOT NULL AUTO_INCREMENT , `paper_title` VARCHAR(20) NOT NULL , `conference` VARCHAR(20) NOT NULL , `publish_date` VARCHAR(20) NOT NULL , PRIMARY KEY (`paper_id`)) ENGINE = InnoDB;

ALTER TABLE `Research_Papers` ADD FOREIGN KEY (`paper_id`) REFERENCES `authors`(`author_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;'

function (error, results, fields) {
	if (error) throw error;

	for (const row of results) {
            console.log(row.Name)
	}
    })

connection.end()