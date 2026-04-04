const Joi = require('joi');

// Common validation schemas
const idSchema = Joi.object({
  id: Joi.number().integer().positive().required()
});

const courseIdSchema = Joi.object({
  courseId: Joi.number().integer().positive().required()
});

// Validation middleware factory
const validateParams = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json({ 
      success: false, 
      error: `Invalid parameter: ${error.details[0].message}` 
    });
  }
  next();
};

module.exports = {
  validateParams,
  idSchema,
  courseIdSchema,
  validateId: validateParams(idSchema),
  validateCourseId: validateParams(courseIdSchema)
};
