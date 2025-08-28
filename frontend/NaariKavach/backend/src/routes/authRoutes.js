// src/routes/authRoutes.js

const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../../controllers/authController");
const { protect } = require("../../middlewares/authMiddleware");

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerUser);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", loginUser);

// @route   GET /api/auth/profile
// @desc    Get logged-in user's profile
// @access  Private
router.get("/profile", protect, getUserProfile);

module.exports = router;
