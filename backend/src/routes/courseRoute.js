const express = require('express');
const courseController = require('../controllers/courseController.js');
const auth = require('../middleware/authMiddleware.js');
const { validate, courseSchema } = require('../middleware/validate.js');
const { validateId } = require('../middleware/validateParams.js');

const router = express.Router();

// Public routes
router.get('/', courseController.getAllCourses);
router.get('/:id', validateId, courseController.getCourseById);

// Protected routes
router.post('/', auth, validate(courseSchema), courseController.createCourse);
router.put('/:id', auth, validateId, courseController.updateCourse);
router.delete('/:id', auth, validateId, courseController.deleteCourse);

module.exports = router;
