module.exports = (sequelize, DataTypes) => {
  const ActivityLog = sequelize.define('ActivityLog', {
    userId: DataTypes.INTEGER,
    action: DataTypes.STRING,
    metadata: DataTypes.JSON,
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  ActivityLog.associate = function(models) {
    ActivityLog.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return ActivityLog;
};
