// src/controllers/notificationController.js
const Notification = require("../models/Notification");
const asyncHandler = require("../middlewares/asyncHandler");

/**
 * @desc    Get all notifications for a user
 * @route   GET /api/notifications
 * @access  Private
 */
exports.getNotifications = asyncHandler(async (req, res) => {
  const notifications = await Notification.find({ user: req.user.id }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    count: notifications.length,
    data: notifications,
  });
});

/**
 * @desc    Mark a notification as read
 * @route   PATCH /api/notifications/:id/read
 * @access  Private
 */
exports.markAsRead = asyncHandler(async (req, res) => {
  const notification = await Notification.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { read: true },
    { new: true }
  );

  if (!notification) {
    return res.status(404).json({ success: false, message: "Notification not found" });
  }

  res.status(200).json({
    success: true,
    data: notification,
  });
});

/**
 * @desc    Delete a notification
 * @route   DELETE /api/notifications/:id
 * @access  Private
 */
exports.deleteNotification = asyncHandler(async (req, res) => {
  const notification = await Notification.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!notification) {
    return res.status(404).json({ success: false, message: "Notification not found" });
  }

  res.status(200).json({
    success: true,
    message: "Notification deleted successfully",
  });
});

/**
 * @desc    Clear all notifications for a user
 * @route   DELETE /api/notifications
 * @access  Private
 */
exports.clearAllNotifications = asyncHandler(async (req, res) => {
  await Notification.deleteMany({ user: req.user.id });

  res.status(200).json({
    success: true,
    message: "All notifications cleared",
  });
});
