// src/jobs/notificationJob.js
const cron = require("node-cron");
const Notification = require("../models/Notification");
const { sendNotification } = require("../sockets/notificationSocket");
const emailService = require("../services/emailService");
const smsService = require("../services/smsService");

/**
 * Notification Job
 * Runs every 5 minutes
 * - Finds pending notifications in DB
 * - Sends them via WebSocket + Email + SMS
 * - Marks them as "sent"
 */
const startNotificationJob = () => {
  cron.schedule("*/5 * * * *", async () => {
    console.log("📩 Running notification job...");

    try {
      // Find unsent notifications
      const pendingNotifs = await Notification.find({ status: "pending" });

      for (const notif of pendingNotifs) {
        // Send real-time notification (via socket.io)
        if (notif.userId) {
          sendNotification(notif.userId.toString(), {
            type: notif.type || "GENERAL",
            message: notif.message,
            timestamp: notif.createdAt,
          });
        }

        // Send email (if recipient has email)
        if (notif.email) {
          await emailService.sendEmail(
            notif.email,
            "Naari Kavach Notification",
            notif.message
          );
        }

        // Send SMS (if recipient has phone)
        if (notif.phone) {
          await smsService.sendSMS(notif.phone, notif.message);
        }

        // Mark notification as sent
        notif.status = "sent";
        await notif.save();
        console.log(`✅ Notification sent to user ${notif.userId}`);
      }
    } catch (error) {
      console.error("❌ Notification job failed:", error.message);
    }
  });

  console.log("⏰ Notification job scheduled (runs every 5 minutes).");
};

module.exports = startNotificationJob;
