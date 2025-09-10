// src/validations/userValidation.js
const Joi = require("joi");

/**
 * Validation for user registration
 */
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 3 characters",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "Invalid email format",
      "string.empty": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters",
      "string.empty": "Password is required",
    }),
    phone: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required()
      .messages({
        "string.pattern.base": "Phone number must be valid (10-15 digits)",
        "string.empty": "Phone number is required",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};

/**
 * Validation for user login
 */
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "Invalid email format",
      "string.empty": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters",
      "string.empty": "Password is required",
    }),
  });

  return schema.validate(data, { abortEarly: false });
};

module.exports = { registerValidation, loginValidation };
