// src/middlewares/roleMiddleware.js

/**
 * Middleware to check user roles for authorization
 * @param {...string} roles - Allowed roles
 */
const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied: insufficient permissions",
      });
    }

    next();
  };
};

module.exports = roleMiddleware;
