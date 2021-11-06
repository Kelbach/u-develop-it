const mysql = require('mysql2');

//connect sql database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Myb3l0v3dAnd5m0lH05k4!',
  database: 'election'
});

module.exports = db;