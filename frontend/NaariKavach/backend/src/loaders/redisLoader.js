const redis = require('redis');
require('dotenv').config();

let redisClient;

const connectRedis = async () => {
    try {
        redisClient = redis.createClient({
            url: process.env.REDIS_URL, // Example: redis://localhost:6379
            socket: {
                reconnectStrategy: retries => Math.min(retries * 50, 500) // Retry logic
            }
        });

        redisClient.on('error', (err) => {
            console.error('Redis Client Error', err);
        });

        redisClient.on('connect', () => {
            console.log('Redis client connected');
        });

        redisClient.on('ready', () => {
            console.log('Redis client ready to use');
        });

        redisClient.on('end', () => {
            console.warn('Redis connection closed');
        });

        await redisClient.connect();

    } catch (err) {
        console.error('Could not connect to Redis:', err.message);
    }
};

module.exports = {
    connectRedis,
    getRedisClient: () => redisClient
};
