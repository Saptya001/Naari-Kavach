// middlewares/rateLimiter.js
const rateLimit = require("express-rate-limit");

// Limit: 5 requests per minute per IP for SOS
const sosLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    status: 429,
    message: "Too many SOS requests. Please wait before trying again.",
  },
  headers: true, // send rate limit info in response headers
});

// General limiter for other routes (optional)
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
  message: {
    status: 429,
    message: "Too many requests. Try again later.",
  },
  headers: true,
});

module.exports = { sosLimiter, generalLimiter };
