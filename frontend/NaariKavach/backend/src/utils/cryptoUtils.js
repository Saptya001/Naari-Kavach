import crypto from "crypto";

// Secret key & IV from environment for security
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(32); // 32 bytes key (AES-256)
const IV_LENGTH = 16; // AES block size

/**
 * Generate a secure random token
 * @param {number} size - Token size (default 32)
 * @returns {string}
 */
export const generateToken = (size = 32) => {
  return crypto.randomBytes(size).toString("hex");
};

/**
 * Hash data using SHA-256
 * @param {string} data
 * @returns {string}
 */
export const hashData = (data) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};

/**
 * Encrypt text using AES-256-CBC
 * @param {string} text
 * @returns {string} Encrypted data (iv:encrypted)
 */
export const encrypt = (text) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
};

/**
 * Decrypt AES-256-CBC encrypted text
 * @param {string} encryptedData
 * @returns {string} Decrypted text
 */
export const decrypt = (encryptedData) => {
  const [ivHex, encrypted] = encryptedData.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
