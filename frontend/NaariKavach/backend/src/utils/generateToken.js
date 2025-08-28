// src/utils/generateToken.js
const jwt = require("jsonwebtoken");

/**
 * Generate JWT token
 * @param {string} userId - The user's unique ID
 * @returns {string} - Signed JWT token
 */
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET, // Secret from .env
    { expiresIn: "30d" }    // Token validity (30 days)
  );
};

module.exports = generateToken;
