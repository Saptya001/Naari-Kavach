// tests/sos.test.js
import request from "supertest";
import app from "../app.js"; // Your Express app
import mongoose from "mongoose";
import User from "../models/User.js";
import SOS from "../models/SOS.js"; // adjust if needed

let token; // will hold JWT
let userId; // test user id
let sosId; // test sos id

beforeAll(async () => {
  // Connect to test DB
  await mongoose.connect(process.env.MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create a test user
  const testUser = new User({
    name: "SOS Tester",
    email: "sostest@example.com",
    password: "Password123!", // Will be hashed by model pre-save hook
  });
  await testUser.save();
  userId = testUser._id.toString();

  // Login user to get token
  const res = await request(app).post("/api/auth/login").send({
    email: "sostest@example.com",
    password: "Password123!",
  });
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("SOS API Tests", () => {
  // ---- Create SOS ----
  it("should create an SOS alert", async () => {
    const res = await request(app)
      .post("/api/sos/create")
      .set("Authorization", `Bearer ${token}`)
      .send({
        userId,
        latitude: 22.5726,
        longitude: 88.3639,
        message: "Emergency! Need help now!",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("sos");
    expect(res.body.sos).toHaveProperty("status", "active");

    sosId = res.body.sos._id;
  });

  // ---- Update SOS Status ----
  it("should update SOS status to resolved", async () => {
    const res = await request(app)
      .put("/api/sos/update-status")
      .set("Authorization", `Bearer ${token}`)
      .send({
        sosId,
        status: "resolved",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "SOS status updated successfully");
  });

  // ---- Fetch Nearby SOS ----
  it("should fetch nearby SOS alerts", async () => {
    const res = await request(app)
      .post("/api/sos/nearby")
      .set("Authorization", `Bearer ${token}`)
      .send({
        latitude: 22.5726,
        longitude: 88.3639,
        radius: 10,
      });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.sos)).toBe(true);
  });

  // ---- Invalid SOS Create ----
  it("should reject SOS without coordinates", async () => {
    const res = await request(app)
      .post("/api/sos/create")
      .set("Authorization", `Bearer ${token}`)
      .send({
        userId,
        message: "Missing lat/long",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });
});
