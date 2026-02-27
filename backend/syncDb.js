require('dotenv').config();
const { sequelize } = require('./src/models/mysql');

async function migrate() {
    try {
        console.log('Autenticando...');
        await sequelize.authenticate();
        console.log('Conexión exitosa, iniciando sincronización...');
        await sequelize.sync({ alter: true });
        console.log('¡Base de datos sincronizada con éxito! Todos los modelos MySQL están creados/actualizados.');
        process.exit(0);
    } catch (error) {
        if (error.original || error.sql) {
            console.error('SQL Error:', error.message);
            console.error('Query:', error.sql);
        } else {
            console.error('Error durante la sincronización:', error);
        }
        process.exit(1);
    }
}

migrate();
