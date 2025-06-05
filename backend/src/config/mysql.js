const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'bpjrj2avtok2cuuhuzop-mysql.services.clever-cloud.com',
  user: 'uy8vmhtfd5mlmpo1',
  password: 'uy8vmhtfd5mlmpo1',
  database: 'bpjrj2avtok2cuuhuzop',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
