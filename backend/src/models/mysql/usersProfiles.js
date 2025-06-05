module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    user_id:   { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } },
    bio:       { type: DataTypes.TEXT },
    avatar_url:{ type: DataTypes.STRING },
    phone:     { type: DataTypes.STRING },
    linkedin:  { type: DataTypes.STRING }
  }, {
    tableName: 'user_profiles',
    timestamps: false
  });

  UserProfile.associate = function(models) {
    UserProfile.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return UserProfile;
};
