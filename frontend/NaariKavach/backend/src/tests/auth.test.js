// tests/auth.test.js
import request from "supertest";
import app from "../app.js"; // your Express app
import mongoose from "mongoose";
import User from "../models/User.js"; // adjust path to your User model

// Setup & Teardown
beforeAll(async () => {
  // connect to test DB
  await mongoose.connect(process.env.MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Auth API Tests", () => {
  const testUser = {
    name: "Test User",
    email: "testuser@example.com",
    password: "Password123!",
  };

  // ---- Signup ----
  it("should register a new user", async () => {
    const res = await request(app).post("/api/auth/signup").send(testUser);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "User registered successfully");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("email", testUser.email);
  });

  it("should not register with existing email", async () => {
    const res = await request(app).post("/api/auth/signup").send(testUser);

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  // ---- Login ----
  it("should login an existing user", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it("should reject invalid login credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: "wrongPassword",
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message", "Invalid credentials");
  });

  // ---- Protected Route ----
  it("should access protected route with valid token", async () => {
    const loginRes = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password,
    });

    const token = loginRes.body.token;

    const res = await request(app)
      .get("/api/auth/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email", testUser.email);
  });

  it("should deny access to protected route without token", async () => {
    const res = await request(app).get("/api/auth/profile");
    expect(res.statusCode).toBe(401);
  });
});
