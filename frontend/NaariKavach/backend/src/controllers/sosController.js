// src/controllers/sosController.js

const SOS = require("../models/SOS");
const User = require("../models/User");

// @desc    Create SOS alert
// @route   POST /api/sos
// @access  Private
exports.createSOS = async (req, res) => {
  try {
    const { latitude, longitude, message } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Location is required" });
    }

    const sos = await SOS.create({
      user: req.user._id,
      latitude,
      longitude,
      message: message || "Emergency! Please help!",
    });

    res.status(201).json({
      success: true,
      data: sos,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get all SOS alerts (Admin/Control Room)
// @route   GET /api/sos
// @access  Private (Admin role ideally)
exports.getAllSOS = async (req, res) => {
  try {
    const sosList = await SOS.find().populate("user", "name email");

    res.status(200).json({
      success: true,
      count: sosList.length,
      data: sosList,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get current user's SOS alerts
// @route   GET /api/sos/my
// @access  Private
exports.getMySOS = async (req, res) => {
  try {
    const sosList = await SOS.find({ user: req.user._id });

    res.status(200).json({
      success: true,
      count: sosList.length,
      data: sosList,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
