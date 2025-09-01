// helpers/responseHelper.js

const STATUS = require("../constants/statusCodes");

/**
 * Success Response
 * @param {Object} res - Express response object
 * @param {Number} statusCode - HTTP status code
 * @param {String} message - Success message
 * @param {Object} [data={}] - Optional response data
 */
const successResponse = (res, statusCode = STATUS.SUCCESS.OK, message = "Success", data = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Error Response
 * @param {Object} res - Express response object
 * @param {Number} statusCode - HTTP status code
 * @param {String} message - Error message
 * @param {Object} [errors={}] - Optional error details
 */
const errorResponse = (res, statusCode = STATUS.SERVER_ERROR.INTERNAL_SERVER_ERROR, message = "Error", errors = {}) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
