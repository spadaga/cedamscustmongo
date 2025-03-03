const express = require('express');
const router = express.Router();
const ToolData = require('../models/ToolData');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try {
    // Check if MongoDB is connected
    console.log('MongoDB Connection State:', mongoose.connection.readyState);
    if (mongoose.connection.readyState !== 1) {
      throw new Error('MongoDB not connected');
    }

    // Fetch data
    const tooldata = await ToolData.find();
    console.log('Fetched ToolData:', tooldata); // Debugging

    res.json(tooldata);
  } catch (err) {
    console.error('❌ Error fetching tool data:', err.message);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

module.exports = router;
