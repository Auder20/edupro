const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  question: String,
  selected: Number,
  correct: Boolean
});

const QuizResultSchema = new mongoose.Schema({
  userId: Number,
  courseId: Number,
  lessonTitle: String,
  score: Number,
  responses: [ResponseSchema],
  date: Date
});

module.exports = mongoose.model('QuizResult', QuizResultSchema);
