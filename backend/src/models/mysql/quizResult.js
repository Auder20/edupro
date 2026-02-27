module.exports = (sequelize, DataTypes) => {
    const QuizResult = sequelize.define('QuizResult', {
        userId: DataTypes.INTEGER,
        courseId: DataTypes.INTEGER,
        lessonTitle: DataTypes.STRING,
        score: DataTypes.INTEGER,
        responses: {
            type: DataTypes.JSON,
            defaultValue: []
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    QuizResult.associate = function (models) {
        QuizResult.belongsTo(models.User, { foreignKey: 'userId' });
        QuizResult.belongsTo(models.Course, { foreignKey: 'courseId' });
    };

    return QuizResult;
};
