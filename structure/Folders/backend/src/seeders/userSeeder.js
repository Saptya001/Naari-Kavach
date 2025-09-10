// src/seeders/userSeeder.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");
const { hashPassword } = require("../utils/encryption");

dotenv.config(); // Load .env variables

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB for seeding...");

    // Optional: clear existing users
    await User.deleteMany({});
    console.log("🗑️ Existing users removed.");

    // Create test users
    const users = [
      {
        name: "Admin User",
        email: "admin@naarikavach.com",
        phone: "9999999999",
        password: await hashPassword("Admin@123"),
        role: "admin",
      },
      {
        name: "Test User",
        email: "user@naarikavach.com",
        phone: "8888888888",
        password: await hashPassword("User@123"),
        role: "user",
      },
    ];

    await User.insertMany(users);
    console.log("🎉 Test users seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding users:", error.message);
    process.exit(1);
  }
};

seedUsers();
