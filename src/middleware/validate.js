import Joi from 'joi';

// Validation middleware factory
const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details.map(detail => detail.message)
    });
  }
  
  next();
};

// User registration validation schema
const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('student', 'instructor').default('student')
});

// User login validation schema
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

// Course creation/validation schema
const courseSchema = Joi.object({
  title: Joi.string().min(5).max(200).required(),
  description: Joi.string().min(10).max(1000).required(),
  category: Joi.string().max(50),
  price: Joi.number().min(0),
  instructor: Joi.string().required() // Should be ObjectId in actual implementation
});

// Assignment validation schema
const assignmentSchema = Joi.object({
  title: Joi.string().min(5).max(200).required(),
  description: Joi.string().min(10).max(1000).required(),
  dueDate: Joi.date().iso().required(),
  courseId: Joi.string().required() // Should be ObjectId in actual implementation
});

export {
  validate,
  registerSchema,
  loginSchema,
  courseSchema,
  assignmentSchema
};