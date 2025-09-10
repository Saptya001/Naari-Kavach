const mongoose = require('mongoose');
const logger = require('./logger'); // Optional: your custom logger
require('dotenv').config();

const connectDB = async () => {
    const dbURI = process.env.MONGO_URI; // Make sure to set this in your .env file

    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger && logger.info('MongoDB connected successfully');
        console.log('MongoDB connected successfully');
    } catch (error) {
        logger && logger.error(`MongoDB connection error: ${error.message}`);
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1); // Exit process if DB connection fails
    }

    mongoose.connection.on('disconnected', () => {
        logger && logger.warn('MongoDB disconnected');
        console.warn('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
        logger && logger.info('MongoDB reconnected');
        console.log('MongoDB reconnected');
    });
};

module.exports = connectDB;
