// validators/userValidator.js
const Joi = require("joi");

/**
 * Validation schemas for User-related routes
 */

// ✅ Update Profile Validator
const updateProfileValidator = Joi.object({
  name: Joi.string().min(3).max(50).optional().messages({
    "string.min": "Name should have at least 3 characters",
    "string.max": "Name should not exceed 50 characters",
  }),
  email: Joi.string().email().optional().messages({
    "string.email": "Please enter a valid email address",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .optional()
    .messages({
      "string.pattern.base": "Phone number must be 10–15 digits",
    }),
  language: Joi.string().valid("en", "es").optional(), // example bilingual
});

// ✅ Change Password Validator
const changePasswordValidator = Joi.object({
  oldPassword: Joi.string().required().messages({
    "string.empty": "Old password is required",
  }),
  newPassword: Joi.string().min(6).required().messages({
    "string.min": "New password must be at least 6 characters long",
    "string.empty": "New password is required",
  }),
});

// ✅ User ID Validator (for params)
const userIdValidator = Joi.object({
  id: Joi.string().hex().length(24).required().messages({
    "string.hex": "User ID must be a valid ObjectId",
    "string.length": "User ID must be 24 characters long",
    "string.empty": "User ID is required",
  }),
});

module.exports = {
  updateProfileValidator,
  changePasswordValidator,
  userIdValidator,
};
