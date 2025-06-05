module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name:      { type: DataTypes.STRING, allowNull: false },
    email:     { type: DataTypes.STRING, unique: true, allowNull: false },
    password:  { type: DataTypes.STRING, allowNull: false },
    role:      { type: DataTypes.ENUM('admin', 'instructor', 'student'), defaultValue: 'student' },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'users',
    timestamps: false
  });

  User.associate = function(models) {
    User.hasOne(models.UserProfile, { foreignKey: 'user_id' });
    User.hasMany(models.Course, { foreignKey: 'instructor_id' });
    User.hasMany(models.Enrollment, { foreignKey: 'user_id' });
    User.hasMany(models.Transaction, { foreignKey: 'user_id' });
    User.hasMany(models.CourseReview, { foreignKey: 'user_id' });
    User.hasMany(models.Certificate, { foreignKey: 'user_id' });
  };

  return User;
};
