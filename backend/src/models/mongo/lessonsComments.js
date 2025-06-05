const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
  userId: Number,
  username: String,
  text: String,
  date: Date
});

const CommentSchema = new mongoose.Schema({
  userId: Number,
  username: String,
  text: String,
  date: Date,
  replies: [ReplySchema]
});

const LessonCommentSchema = new mongoose.Schema({
  courseId: Number,
  lessonTitle: String,
  comments: [CommentSchema]
});

module.exports = mongoose.model('LessonComment', LessonCommentSchema);
