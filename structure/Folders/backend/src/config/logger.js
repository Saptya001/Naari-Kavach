// src/config/logger.js

const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info", // default log level
  format: format.combine(
    format.colorize(),                // Add colors
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

module.exports = logger;
