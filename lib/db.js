var mysql = require ('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'examples'
  });
  db.connect();
  module.exports = db;