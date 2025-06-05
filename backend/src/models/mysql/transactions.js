module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    user_id:   { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } },
    course_id: { type: DataTypes.INTEGER, references: { model: 'courses', key: 'id' } },
    amount:    { type: DataTypes.DECIMAL(10,2) },
    status:    { type: DataTypes.ENUM('pending', 'completed', 'failed'), defaultValue: 'pending' },
    method:    { type: DataTypes.ENUM('card', 'paypal', 'transfer') },
    paid_at:   { type: DataTypes.DATE }
  }, {
    tableName: 'transactions',
    timestamps: false
  });

  Transaction.associate = function(models) {
    Transaction.belongsTo(models.User, { foreignKey: 'user_id' });
    Transaction.belongsTo(models.Course, { foreignKey: 'course_id' });
  };

  return Transaction;
};
