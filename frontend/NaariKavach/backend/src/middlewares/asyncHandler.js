// src/middlewares/asyncHandler.js

/**
 * Wraps async route handlers to catch errors
 * and pass them to Express error middleware.
 *
 * Example usage:
 * router.get("/", asyncHandler(async (req, res) => {
 *   const data = await SomeModel.find();
 *   res.json(data);
 * }));
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;