var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '121.40.171.70',
    user: 'root',
    password: '9f7u6b2ph56k',
    database:'svnstat'
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});


connection.query('SELECT * from svnstat', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0]);
});
 
connection.end();