const express = require("express");
const Post = require("../models/Post");
const User = require("../models/User");
const router = express.Router();

// Create post
router.post("/", async (req, res) => {
  try {
    const { content, authorId } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Post content is required" });
    }

    if (!authorId) {
      return res.status(401).json({ error: "Author ID required" });
    }

    const post = new Post({ author: authorId, content });
    await post.save();
    await post.populate("author", "username");

    res.status(201).json({
      id: post._id,
      content: post.content,
      author: { id: post.author._id, username: post.author.username },
      createdAt: post.createdAt,
    });
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });
    res.json(
      posts.map((post) => ({
        id: post._id,
        content: post.content,
        author: { id: post.author._id, username: post.author.username },
        createdAt: post.createdAt,
      }))
    );
  } catch (error) {
    console.error("Get posts error:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

module.exports = router;
