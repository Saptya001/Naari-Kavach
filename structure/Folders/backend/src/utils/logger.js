// src/config/logger.js
import winston from 'winston';
import path from 'path';
import fs from 'fs';

// Ensure logs directory exists
const logDir = path.resolve('logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Define custom log format
const logFormat = winston.format.printf(
  ({ level, message, timestamp }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`
);

// Create logger instance
const logger = winston.createLogger({
  level: 'info', // default log level
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new winston.transports.Console(), // logs to console
    new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'error' }), // error logs
    new winston.transports.File({ filename: path.join(logDir, 'combined.log') }) // all logs
  ],
  exitOnError: false,
});

// For development, also log to console in a simple format
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export default logger;
