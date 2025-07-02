const Transaction = require('../models/mysql/transactions');

async function getAllTransactions() {
  return await Transaction.findAll();
}

async function getTransactionById(id) {
  return await Transaction.findByPk(id);
}

async function createTransaction(data) {
  return await Transaction.create(data);
}

module.exports = { getAllTransactions, getTransactionById, createTransaction };
