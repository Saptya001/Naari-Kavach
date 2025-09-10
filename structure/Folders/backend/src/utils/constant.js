// utils/constants.js

// ---- User Roles ----
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUARDIAN: "guardian",
  POLICE: "police",
};

// ---- Notification Types ----
export const NOTIFICATION_TYPES = {
  SOS: "sos_alert",
  WARNING: "warning",
  INFO: "info",
};

// ---- Response Messages ----
export const RESPONSE_MESSAGES = {
  SUCCESS: "Request processed successfully",
  SERVER_ERROR: "Internal server error",
  UNAUTHORIZED: "Unauthorized access",
  FORBIDDEN: "Access forbidden",
  NOT_FOUND: "Resource not found",
  BAD_REQUEST: "Invalid request data",
};

// ---- Status Codes ----
export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

// ---- Geo / Location Defaults ----
export const DEFAULT_LOCATION = {
  LAT: 22.5726, // Kolkata (example)
  LON: 88.3639,
};

// ---- App Config ----
export const APP_CONFIG = {
  APP_NAME: "Naari Kavach",
  SUPPORT_EMAIL: "support@naarikavach.org",
  MAX_SOS_RADIUS: 5, // km
  PASSWORD_MIN_LENGTH: 8,
};
