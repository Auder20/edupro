module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:        { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:      { type: DataTypes.STRING, allowNull: false },
    email:     { type: DataTypes.STRING, unique: true, allowNull: false },
    password:  { type: DataTypes.STRING, allowNull: false },
    role:      { type: DataTypes.ENUM('admin', 'instructor', 'student'), defaultValue: 'student' },
    email_verified_at: { type: DataTypes.DATE },
    status:    { type: DataTypes.ENUM('active', 'inactive', 'suspended'), defaultValue: 'active' },
    last_login_at: { type: DataTypes.DATE },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'users',
    timestamps: false,
    hooks: {
      beforeUpdate: (user) => {
        user.updated_at = new Date();
      }
    }
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
