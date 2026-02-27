module.exports = (sequelize, DataTypes) => {
    const CourseContent = sequelize.define('CourseContent', {
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        syllabus: {
            type: DataTypes.JSON,
            defaultValue: []
        }
    });

    CourseContent.associate = function (models) {
        CourseContent.belongsTo(models.Course, { foreignKey: 'courseId' });
    };

    return CourseContent;
};
