// src/utils/tokenUtils.js
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

/**
 * Generate a JWT token
 * @param {Object} payload - Data to include in the token
 * @param {String} expiresIn - Expiration time (default from env)
 * @returns {String} JWT Token
 */
const generateToken = (payload, expiresIn = JWT_EXPIRES_IN) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

/**
 * Verify a JWT token
 * @param {String} token - JWT token to verify
 * @returns {Object|null} Decoded payload or null if invalid
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

/**
 * Refresh a JWT token
 * @param {Object} payload - Data to include in the new token
 * @returns {String} New JWT Token
 */
const refreshToken = (payload) => {
  return generateToken(payload, JWT_EXPIRES_IN);
};

module.exports = {
  generateToken,
  verifyToken,
  refreshToken,
};
