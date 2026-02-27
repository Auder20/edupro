module.exports = (sequelize, DataTypes) => {
    const Forum = sequelize.define('Forum', {
        courseId: DataTypes.INTEGER,
        threads: {
            type: DataTypes.JSON,
            defaultValue: []
        }
    });

    Forum.associate = function (models) {
        Forum.belongsTo(models.Course, { foreignKey: 'courseId' });
    };

    return Forum;
};
