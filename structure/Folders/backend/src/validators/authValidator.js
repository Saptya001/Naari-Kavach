// validators/authValidator.js
const Joi = require("joi");

/**
 * Validation schemas for Auth-related routes
 */

// ✅ Register Validator
const registerValidator = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should have at least 3 characters",
    "string.max": "Name should not exceed 50 characters",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address",
    "string.empty": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password is required",
  }),
});

// ✅ Login Validator
const loginValidator = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address",
    "string.empty": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});

// ✅ Forgot Password Validator
const forgotPasswordValidator = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address",
    "string.empty": "Email is required",
  }),
});

// ✅ Reset Password Validator
const resetPasswordValidator = Joi.object({
  token: Joi.string().required().messages({
    "string.empty": "Token is required",
  }),
  newPassword: Joi.string().min(6).required().messages({
    "string.min": "New password must be at least 6 characters long",
    "string.empty": "New password is required",
  }),
});

module.exports = {
  registerValidator,
  loginValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
};
