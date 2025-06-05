module.exports = (sequelize, DataTypes) => {
  const CourseReview = sequelize.define('CourseReview', {
    course_id:  { type: DataTypes.INTEGER, references: { model: 'courses', key: 'id' } },
    user_id:    { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } },
    rating:     { type: DataTypes.INTEGER, validate: { min: 1, max: 5 } },
    comment:    { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'course_reviews',
    timestamps: false
  });

  CourseReview.associate = function(models) {
    CourseReview.belongsTo(models.User, { foreignKey: 'user_id' });
    CourseReview.belongsTo(models.Course, { foreignKey: 'course_id' });
  };

  return CourseReview;
};
