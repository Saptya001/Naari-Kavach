// src/services/mediaService.js
const { uploadToCloudinary, deleteFromCloudinary } = require('../config/cloudinary');

/**
 * Uploads a file to Cloudinary and returns URL & public ID
 * @param {string} filePath - Path or buffer of the file
 * @param {string} folder - Cloudinary folder to store the file
 * @returns {Promise<{url: string, publicId: string}>}
 */
const uploadMedia = async (filePath, folder = 'NaariKavach/Media') => {
  const result = await uploadToCloudinary(filePath, { folder });
  return { url: result.secure_url, publicId: result.public_id };
};

/**
 * Deletes a file from Cloudinary using its public ID
 * @param {string} publicId - Cloudinary public ID
 * @returns {Promise<boolean>}
 */
const deleteMedia = async (publicId) => {
  const result = await deleteFromCloudinary(publicId);
  return result.result === 'ok';
};

module.exports = {
  uploadMedia,
  deleteMedia,
};
