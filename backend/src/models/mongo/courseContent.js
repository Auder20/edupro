const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: Number // index of correct option
});

const LessonSchema = new mongoose.Schema({
  lessonTitle: String,
  videoUrl: String,
  textContent: String,
  quiz: [QuizSchema]
});

const ModuleSchema = new mongoose.Schema({
  moduleTitle: String,
  lessons: [LessonSchema]
});

const CourseContentSchema = new mongoose.Schema({
  courseId: Number, // ref to MySQL course
  syllabus: [ModuleSchema]
});

module.exports = mongoose.model('CourseContent', CourseContentSchema);
