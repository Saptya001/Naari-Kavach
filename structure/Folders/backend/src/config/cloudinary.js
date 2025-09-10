// src/config/cloudinary.js

const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

// Configure Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true, // Ensures HTTPS URLs
});

/**
 * Uploads a file to Cloudinary
 * @param {string} filePath - Local path or buffer of the file
 * @param {object} options - Optional Cloudinary options (folder, public_id, etc.)
 * @returns {Promise<object>} - Cloudinary upload result
 */
const uploadToCloudinary = async (filePath, options = {}) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, options);
    return result;
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
};

/**
 * Deletes a file from Cloudinary
 * @param {string} publicId - Public ID of the file to delete
 * @returns {Promise<object>} - Cloudinary deletion result
 */
const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error('Cloudinary Deletion Error:', error);
    throw new Error('Failed to delete file from Cloudinary');
  }
};

module.exports = {
  cloudinary,
  uploadToCloudinary,
  deleteFromCloudinary,
};
