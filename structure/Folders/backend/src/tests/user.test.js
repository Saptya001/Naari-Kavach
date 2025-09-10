// tests/user.test.js
import request from "supertest";
import app from "../app.js"; // Your Express app
import mongoose from "mongoose";
import User from "../models/User.js";

let token;
let userId;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create a test user
  const testUser = new User({
    name: "User Tester",
    email: "usertest@example.com",
    password: "Password123!",
  });
  await testUser.save();
  userId = testUser._id.toString();

  // Login user
  const res = await request(app).post("/api/auth/login").send({
    email: "usertest@example.com",
    password: "Password123!",
  });
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("User API Tests", () => {
  // ---- Get Profile ----
  it("should fetch user profile", async () => {
    const res = await request(app)
      .get("/api/users/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email", "usertest@example.com");
  });

  // ---- Update Profile ----
  it("should update user profile", async () => {
    const res = await request(app)
      .put("/api/users/profile")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Updated Tester" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Profile updated successfully");
    expect(res.body.user).toHaveProperty("name", "Updated Tester");
  });

  // ---- Add Guardian ----
  it("should add a guardian to user", async () => {
    const res = await request(app)
      .post("/api/users/guardians")
      .set("Authorization", `Bearer ${token}`)
      .send({ email: "guardian@example.com" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "Guardian added successfully");
  });

  // ---- Fetch Guardians ----
  it("should fetch guardian list", async () => {
    const res = await request(app)
      .get("/api/users/guardians")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.guardians)).toBe(true);
    expect(res.body.guardians[0]).toHaveProperty("email", "guardian@example.com");
  });

  // ---- Delete Account ----
  it("should delete user account", async () => {
    const res = await request(app)
      .delete(`/api/users/${userId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "User deleted successfully");
  });
});
