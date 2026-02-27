
const Sequelize = require('sequelize');
const sequelize = require('../../config/mysql');

// Inicializar modelos
const models = {};
models.User = require('./user')(sequelize, Sequelize.DataTypes);
models.Course = require('./course')(sequelize, Sequelize.DataTypes);
models.CourseReview = require('./courseReview')(sequelize, Sequelize.DataTypes);
models.Enrollment = require('./Enrollment')(sequelize, Sequelize.DataTypes);
models.Transaction = require('./transactions')(sequelize, Sequelize.DataTypes);
models.Certificate = require('./certificates')(sequelize, Sequelize.DataTypes);
models.UserProfile = require('./usersProfiles')(sequelize, Sequelize.DataTypes);

// Asociaciones
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models
};
