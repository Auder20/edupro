module.exports = (sequelize, DataTypes) => {
    const LessonComment = sequelize.define('LessonComment', {
        courseId: DataTypes.INTEGER,
        lessonTitle: DataTypes.STRING,
        comments: {
            type: DataTypes.JSON,
            defaultValue: []
        }
    });

    LessonComment.associate = function (models) {
        LessonComment.belongsTo(models.Course, { foreignKey: 'courseId' });
    };

    return LessonComment;
};
