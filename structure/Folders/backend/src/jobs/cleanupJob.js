// src/jobs/cleanupJob.js
const cron = require("node-cron");
const Notification = require("../models/Notification");
const Token = require("../models/Token"); // if you store refresh tokens in DB

/**
 * Cleanup Job
 * Runs every day at midnight (00:00)
 * - Deletes expired tokens
 * - Deletes old notifications (older than 30 days)
 */
const startCleanupJob = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("🧹 Running cleanup job...");

    try {
      // Delete expired tokens
      if (Token) {
        const result = await Token.deleteMany({ expiresAt: { $lt: new Date() } });
        console.log(`✅ Deleted ${result.deletedCount} expired tokens`);
      }

      // Delete notifications older than 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const oldNotifs = await Notification.deleteMany({ createdAt: { $lt: thirtyDaysAgo } });
      console.log(`✅ Deleted ${oldNotifs.deletedCount} old notifications`);
    } catch (error) {
      console.error("❌ Cleanup job failed:", error.message);
    }
  });

  console.log("⏰ Cleanup job scheduled (runs every day at midnight).");
};

module.exports = startCleanupJob;
