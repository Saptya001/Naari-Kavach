// src/routes/sosRoutes.js

const express = require("express");
const {
  createSOS,
  getUserSOS,
  getAllSOS,
  updateSOSStatus,
} = require("../../controllers/sosController");
const { protect } = require("../../middlewares/authMiddleware");

const router = express.Router();

// @route   POST /api/sos
// @desc    Create a new SOS alert
// @access  Private
router.post("/", protect, createSOS);

// @route   GET /api/sos/my
// @desc    Get all SOS alerts of logged-in user
// @access  Private
router.get("/my", protect, getUserSOS);

// @route   GET /api/sos
// @desc    Get all SOS alerts (admin access if needed)
// @access  Private
router.get("/", protect, getAllSOS);

// @route   PUT /api/sos/:id
// @desc    Update SOS status (e.g., resolved, in-progress)
// @access  Private
router.put("/:id", protect, updateSOSStatus);

module.exports = router;
