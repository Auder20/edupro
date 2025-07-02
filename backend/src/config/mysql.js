const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testMySQLConnection() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    console.log('MySQL conectado');
    connection.release();
  } catch (error) {
    console.error('Error conectando a MySQL:', error);
    process.exit(1);
  }
}

module.exports = pool;
module.exports.testMySQLConnection = testMySQLConnection;
