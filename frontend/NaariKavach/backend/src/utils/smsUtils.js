// src/utils/smsUtils.js
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioPhone) {
  console.warn("⚠️ Twilio environment variables are missing!");
}

const client = twilio(accountSid, authToken);

/**
 * Send an SMS message
 * @param {String} to - Recipient phone number (with country code, e.g., +91XXXXXXXXXX)
 * @param {String} message - SMS body text
 * @returns {Promise<Object>} - Twilio response
 */
const sendSMS = async (to, message) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: twilioPhone,
      to,
    });

    console.log(`✅ SMS sent to ${to}`);
    return response;
  } catch (error) {
    console.error("❌ Failed to send SMS:", error.message);
    throw new Error("SMS sending failed");
  }
};

module.exports = { sendSMS };
