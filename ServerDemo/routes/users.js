var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	

	var config = require('../config.json');

	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: config.host,
		user: config.user,
		password: config.password,
		database: config.database
	});

	connection.connect();
 


	connection.query('SELECT * from svnstat where homedir="Golang"', function(err, rows, fields) {
		if (err) throw err;
		console.log('The solution is: ', rows[0] );
		res.send(rows);
	});
	 
	connection.end();
    
});

module.exports = router;
