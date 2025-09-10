// controllers/alertController.js
const smsService = require("../services/smsService");
const emailService = require("../services/emailService");

/**
 * Trigger an SOS alert
 * @param {*} req
 * @param {*} res
 */
const sendAlert = async (req, res) => {
  try {
    const { user, location, contacts } = req.body;
    /**
     * Example req.body:
     * {
     *   user: { name: "Anita", phone: "+91XXXXXXXXXX" },
     *   location: { lat: 22.5726, lng: 88.3639 },
     *   contacts: [
     *      { name: "Mom", phone: "+91XXXXXXXXXX", email: "mom@email.com" },
     *      { name: "Friend", phone: "+91XXXXXXXXXX", email: "friend@email.com" }
     *   ]
     * }
     */

    if (!user || !contacts || contacts.length === 0) {
      return res.status(400).json({ message: "User and contacts are required" });
    }

    const alertMessage = `🚨 SOS Alert 🚨
${user.name} may be in danger!
📍 Location: https://maps.google.com/?q=${location.lat},${location.lng}
📞 Contact: ${user.phone}`;

    // Send SMS & Email to all contacts
    for (const contact of contacts) {
      if (contact.phone) {
        await smsService.sendSMS(contact.phone, alertMessage);
      }
      if (contact.email) {
        await emailService.sendEmail(
          contact.email,
          "🚨 SOS Alert from Naari Kavach",
          alertMessage
        );
      }
    }

    return res.status(200).json({ message: "SOS alerts sent successfully!" });
  } catch (error) {
    console.error("Alert error:", error);
    return res.status(500).json({ message: "Failed to send alerts", error });
  }
};

module.exports = { sendAlert };
