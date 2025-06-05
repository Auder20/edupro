const mongoose = require('mongoose');

const ActivityLogSchema = new mongoose.Schema({
  userId: Number,
  action: String,
  metadata: mongoose.Schema.Types.Mixed,
  timestamp: Date
});

module.exports = mongoose.model('ActivityLog', ActivityLogSchema);
