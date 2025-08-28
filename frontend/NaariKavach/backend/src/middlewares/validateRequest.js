// middlewares/validateRequest.js

/**
 * Generic request validator middleware
 * @param {Array} requiredFields - array of required fields in req.body
 */
const validateRequest = (requiredFields = []) => {
  return (req, res, next) => {
    const missingFields = [];

    requiredFields.forEach((field) => {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Validation error",
        missingFields,
      });
    }

    next();
  };
};

module.exports = validateRequest;
