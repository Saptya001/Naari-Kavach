// utils/passwordUtils.js

import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

/**
 * Hash a plain text password
 * @param {string} password - Plain password
 * @returns {Promise<string>} - Hashed password
 */
export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  } catch (error) {
    console.error("❌ Error hashing password:", error.message);
    throw error;
  }
};

/**
 * Compare a plain password with hashed password
 * @param {string} password - Plain password
 * @param {string} hashedPassword - Hashed password from DB
 * @returns {Promise<boolean>} - True if match
 */
export const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("❌ Error comparing password:", error.message);
    throw error;
  }
};
