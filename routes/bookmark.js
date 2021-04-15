const express = require('express');
const router = express.Router();
const bookmarkdb = require('../models/bookmarkdb');

// @route   Post /bookmarks
// @desc    bookmark book
router.post('/bookmarks',async (req, res) => {
    try {
      const books = await Post.find().sort({ date: -1 });
      res.json(posts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });