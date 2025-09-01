// src/utils/fileUtils.js
const fs = require("fs");
const path = require("path");
const cloudinary = require("../config/cloudinary");

/**
 * Save file locally (useful for temp storage before Cloudinary upload)
 * @param {Object} file - Uploaded file object
 * @param {String} folder - Folder name inside /uploads
 * @returns {String} - File path
 */
const saveFileLocal = (file, folder = "uploads") => {
  const uploadDir = path.join(__dirname, `../../${folder}`);
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, `${Date.now()}-${file.originalname}`);
  fs.writeFileSync(filePath, file.buffer);
  return filePath;
};

/**
 * Upload file to Cloudinary
 * @param {String} filePath - Path of the file
 * @param {String} folder - Cloudinary folder
 * @returns {Object} - Cloudinary upload response
 */
const uploadToCloudinary = async (filePath, folder = "naari-kavach") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "auto",
    });

    // Delete local file after upload
    fs.unlinkSync(filePath);

    return result;
  } catch (error) {
    console.error("❌ Cloudinary Upload Error:", error.message);
    throw error;
  }
};

/**
 * Delete file from Cloudinary
 * @param {String} publicId - Cloudinary public ID
 * @returns {Object} - Cloudinary deletion response
 */
const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("❌ Cloudinary Deletion Error:", error.message);
    throw error;
  }
};

module.exports = {
  saveFileLocal,
  uploadToCloudinary,
  deleteFromCloudinary,
};
