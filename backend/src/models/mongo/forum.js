const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: Number,
  username: String,
  text: String,
  date: Date
});

const ThreadSchema = new mongoose.Schema({
  title: String,
  userId: Number,
  username: String,
  date: Date,
  posts: [PostSchema]
});

const ForumSchema = new mongoose.Schema({
  courseId: Number,
  threads: [ThreadSchema]
});

module.exports = mongoose.model('Forum', ForumSchema);
