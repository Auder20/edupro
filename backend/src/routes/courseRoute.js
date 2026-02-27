import express from 'express';
import courseController from '../controllers/courseController.js';
import auth from '../middleware/auth.js';
import { validate, courseSchema } from '../middleware/validate.js';

const router = express.Router();

// Public routes
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);

// Protected routes
router.post('/', auth, validate(courseSchema), courseController.createCourse);
router.put('/:id', auth, courseController.updateCourse);
router.delete('/:id', auth, courseController.deleteCourse);

export default router;
