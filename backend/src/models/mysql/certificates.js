module.exports = (sequelize, DataTypes) => {
  const Certificate = sequelize.define('Certificate', {
    user_id:        { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } },
    course_id:      { type: DataTypes.INTEGER, references: { model: 'courses', key: 'id' } },
    certificate_url:{ type: DataTypes.STRING },
    issued_at:      { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'certificates',
    timestamps: false
  });

  Certificate.associate = function(models) {
    Certificate.belongsTo(models.User, { foreignKey: 'user_id' });
    Certificate.belongsTo(models.Course, { foreignKey: 'course_id' });
  };

  return Certificate;
};
