// constants/errorMessages.js

module.exports = {
  AUTH: {
    INVALID_CREDENTIALS: "Invalid email or password.",
    UNAUTHORIZED: "You are not authorized to access this resource.",
    TOKEN_MISSING: "Authentication token is missing.",
    TOKEN_INVALID: "Authentication token is invalid or expired.",
    FORBIDDEN: "You do not have permission to perform this action."
  },

  USER: {
    NOT_FOUND: "User not found.",
    ALREADY_EXISTS: "User with this email already exists.",
    VALIDATION_ERROR: "Invalid user data provided."
  },

  SOS: {
    NOT_FOUND: "SOS request not found.",
    CREATE_FAILED: "Failed to create SOS request.",
    UPDATE_FAILED: "Failed to update SOS request."
  },

  NOTIFICATION: {
    NOT_FOUND: "Notification not found.",
    SEND_FAILED: "Failed to send notification."
  },

  GENERAL: {
    SERVER_ERROR: "Something went wrong. Please try again later.",
    BAD_REQUEST: "Invalid request.",
    NOT_FOUND: "Resource not found."
  }
};
