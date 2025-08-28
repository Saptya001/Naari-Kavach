// validations/authValidation.js
import Joi from "joi";

// ---- Signup Validation ----
export const signupValidation = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should have at least 3 characters",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "any.required": "Password is required",
  }),
  role: Joi.string().valid("user", "guardian", "police").default("user"),
});

// ---- Login Validation ----
export const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

// ---- Change Password Validation ----
export const changePasswordValidation = Joi.object({
  oldPassword: Joi.string().required().messages({
    "any.required": "Old password is required",
  }),
  newPassword: Joi.string().min(8).required().messages({
    "string.min": "New password must be at least 8 characters long",
    "any.required": "New password is required",
  }),
});

// ---- Forgot Password Validation ----
export const forgotPasswordValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email",
    "any.required": "Email is required",
  }),
});

// ---- Reset Password Validation ----
export const resetPasswordValidation = Joi.object({
  token: Joi.string().required().messages({
    "any.required": "Reset token is required",
  }),
  newPassword: Joi.string().min(8).required().messages({
    "string.min": "New password must be at least 8 characters long",
    "any.required": "New password is required",
  }),
});
