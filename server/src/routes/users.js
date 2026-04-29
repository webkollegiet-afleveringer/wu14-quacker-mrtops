const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      followers: user.followers.length,
      following: user.following.length,
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ error: error.message || "Failed to fetch user" });
  }
});

module.exports = router;
