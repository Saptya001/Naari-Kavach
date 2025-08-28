// validations/sosValidation.js
import Joi from "joi";

// ---- Create SOS Alert Validation ----
export const createSOSValidation = Joi.object({
  userId: Joi.string().required().messages({
    "any.required": "User ID is required for SOS alert",
  }),
  latitude: Joi.number().required().messages({
    "any.required": "Latitude is required",
    "number.base": "Latitude must be a number",
  }),
  longitude: Joi.number().required().messages({
    "any.required": "Longitude is required",
    "number.base": "Longitude must be a number",
  }),
  message: Joi.string().max(200).optional().messages({
    "string.max": "Message should not exceed 200 characters",
  }),
  guardians: Joi.array().items(Joi.string().email()).optional().messages({
    "string.email": "Guardian email must be valid",
  }),
  timestamp: Joi.date().default(() => new Date(), "current timestamp"),
});

// ---- Update SOS Status Validation ----
export const updateSOSStatusValidation = Joi.object({
  sosId: Joi.string().required().messages({
    "any.required": "SOS ID is required",
  }),
  status: Joi.string().valid("active", "resolved", "cancelled").required().messages({
    "any.required": "Status is required",
    "any.only": "Status must be one of active, resolved, or cancelled",
  }),
});

// ---- Fetch Nearby SOS Requests Validation ----
export const nearbySOSValidation = Joi.object({
  latitude: Joi.number().required().messages({
    "any.required": "Latitude is required",
  }),
  longitude: Joi.number().required().messages({
    "any.required": "Longitude is required",
  }),
  radius: Joi.number().default(5).messages({
    "number.base": "Radius must be a number",
  }),
});
