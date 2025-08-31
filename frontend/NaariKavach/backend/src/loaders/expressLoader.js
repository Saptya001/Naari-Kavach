const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('./middlewares/rateLimiter'); // your rateLimiter.js
const sanitizeInput = require('./middlewares/sanitizeInput'); // your sanitizeInput.js
const loggerMiddleware = require('./middlewares/loggerMiddleware'); // optional
require('dotenv').config();

const expressLoader = (routes) => {
    const app = express();

    // Security headers
    app.use(helmet());

    // Enable CORS
    app.use(cors({
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }));

    // JSON parsing
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Sanitize request data
    app.use(sanitizeInput);

    // Apply rate limiting
    app.use(rateLimiter);

    // Optional logging middleware
    loggerMiddleware && app.use(loggerMiddleware);

    // Mount routes
    if (routes && typeof routes === 'function') {
        routes(app);
    }

    // Health check route
    app.get('/health', (req, res) => res.status(200).json({ success: true, message: 'API is running' }));

    // Global error handler
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(err.status || 500).json({
            success: false,
            message: err.message || 'Something went wrong'
        });
    });

    return app;
};

module.exports = expressLoader;
