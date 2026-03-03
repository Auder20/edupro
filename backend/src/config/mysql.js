require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

async function testMySQLConnection() {
  try {
    await sequelize.authenticate();
    console.log('MySQL conectado con Sequelize');
  } catch (error) {
    console.error('Error conectando a MySQL con Sequelize:', error);
    process.exit(1);
  }
}

module.exports = sequelize;
module.exports.testMySQLConnection = testMySQLConnection;
