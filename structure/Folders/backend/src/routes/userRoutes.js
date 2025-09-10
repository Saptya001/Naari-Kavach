// src/routes/userRoutes.js

const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} = require("../../controllers/userController");
const { protect } = require("../../middlewares/authMiddleware");

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get logged-in user's profile
// @access  Private
router.get("/profile", protect, getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update logged-in user's profile
// @access  Private
router.put("/profile", protect, updateUserProfile);

// @route   GET /api/users
// @desc    Get all users (Admin access if you want later)
// @access  Private
router.get("/", protect, getAllUsers);

// @route   DELETE /api/users/:id
// @desc    Delete a user by ID (Admin access if you want later)
// @access  Private
router.delete("/:id", protect, deleteUser);

module.exports = router;
