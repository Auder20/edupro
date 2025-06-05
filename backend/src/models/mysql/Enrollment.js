module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    user_id:    { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } },
    course_id:  { type: DataTypes.INTEGER, references: { model: 'courses', key: 'id' } },
    enrolled_at:{ type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    progress:   { type: DataTypes.DECIMAL(5,2), defaultValue: 0.00 },
    completed:  { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    tableName: 'enrollments',
    timestamps: false
  });

  Enrollment.associate = function(models) {
    Enrollment.belongsTo(models.User, { foreignKey: 'user_id' });
    Enrollment.belongsTo(models.Course, { foreignKey: 'course_id' });
  };

  return Enrollment;
};
