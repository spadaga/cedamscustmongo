// src/routes/tooldata.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try {
    const tooldata = await mongoose.connection.db.collection('tooldata').find({}).toArray();
    res.json(tooldata);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;