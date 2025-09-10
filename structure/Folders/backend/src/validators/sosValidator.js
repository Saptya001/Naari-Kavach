// validators/sosValidator.js
const Joi = require("joi");

/**
 * Validation schemas for SOS-related routes
 */

// ✅ Create SOS Validator
const createSOSValidator = Joi.object({
  message: Joi.string().min(5).max(500).required().messages({
    "string.empty": "SOS message is required",
    "string.min": "SOS message must be at least 5 characters",
    "string.max": "SOS message cannot exceed 500 characters",
  }),
  location: Joi.object({
    latitude: Joi.number().required().messages({
      "number.base": "Latitude must be a number",
      "any.required": "Latitude is required",
    }),
    longitude: Joi.number().required().messages({
      "number.base": "Longitude must be a number",
      "any.required": "Longitude is required",
    }),
  }).required(),
  emergencyType: Joi.string()
    .valid("medical", "violence", "harassment", "accident", "other")
    .required()
    .messages({
      "any.only": "Emergency type must be one of: medical, violence, harassment, accident, other",
      "any.required": "Emergency type is required",
    }),
  userId: Joi.string().hex().length(24).required().messages({
    "string.hex": "User ID must be a valid ObjectId",
    "string.length": "User ID must be 24 characters",
    "any.required": "User ID is required",
  }),
});

// ✅ Update SOS Validator (partial updates allowed)
const updateSOSValidator = Joi.object({
  message: Joi.string().min(5).max(500).optional(),
  status: Joi.string()
    .valid("pending", "in_progress", "resolved", "cancelled")
    .optional(),
  responderId: Joi.string().hex().length(24).optional(),
});

const sosIdValidator = Joi.object({
  id: Joi.string().hex().length(24).required().messages({
    "string.hex": "SOS ID must be a valid ObjectId",
    "string.length": "SOS ID must be 24 characters",
    "any.required": "SOS ID is required",
  }),
});

module.exports = {
  createSOSValidator,
  updateSOSValidator,
  sosIdValidator,
};
