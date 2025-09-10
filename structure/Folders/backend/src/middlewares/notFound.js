// src/middlewares/notFound.js

/**
 * Middleware to handle 404 - Not Found errors
 */
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `🔍 - Not Found - ${req.originalUrl}`,
  });
};

module.exports = notFound;
