module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title:        { type: DataTypes.STRING, allowNull: false },
    description:  { type: DataTypes.TEXT },
    category:     { type: DataTypes.STRING },
    price:        { type: DataTypes.DECIMAL(10,2), defaultValue: 0.00 },
    status:       { type: DataTypes.ENUM('draft', 'published', 'archived'), defaultValue: 'draft' },
    instructor_id:{ type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } },
    createdAt:    { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'courses',
    timestamps: false
  });

  Course.associate = function(models) {
    Course.belongsTo(models.User, { as: 'Instructor', foreignKey: 'instructor_id' });
    Course.hasMany(models.Enrollment, { foreignKey: 'course_id' });
    Course.hasMany(models.Transaction, { foreignKey: 'course_id' });
    Course.hasMany(models.CourseReview, { foreignKey: 'course_id' });
    Course.hasMany(models.Certificate, { foreignKey: 'course_id' });
  };

  return Course;
};
