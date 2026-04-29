const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ error: "Username or email already exists" });
    }

    const user = new User({ username, email });
    await user.save();

    res.status(201).json({
      user: { id: user._id, username: user.username, email: user.email },
      followers: 0,
      following: 0,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: error.message || "Failed to register user" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Missing email" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({
      user: { id: user._id, username: user.username, email: user.email },
      followers: user.followers.length,
      following: user.following.length,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: error.message || "Failed to login" });
  }
});

module.exports = router;
