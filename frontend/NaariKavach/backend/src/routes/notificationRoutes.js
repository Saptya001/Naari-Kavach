// routes/notificationRoutes.js
const express = require("express");
const router = express.Router();

const notificationController = require("../controllers/notificationController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validation");
const { notificationIdValidator, createNotificationValidator } = require("../validators/notificationValidator"); // (if you add later)


// ✅ Create a new notification (Admin or System use)
router.post(
  "/",
  authMiddleware,
  validate(createNotificationValidator),
  notificationController.createNotification
);

// ✅ Get all notifications for logged-in user
router.get("/", authMiddleware, notificationController.getUserNotifications);

// ✅ Mark notification as read
router.patch(
  "/:id/read",
  authMiddleware,
  validate(notificationIdValidator, "params"),
  notificationController.markAsRead
);

// ✅ Delete a notification
router.delete(
  "/:id",
  authMiddleware,
  validate(notificationIdValidator, "params"),
  notificationController.deleteNotification
);

module.exports = router;
