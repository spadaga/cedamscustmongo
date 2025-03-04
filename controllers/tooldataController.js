// src/controllers/tooldataController.js
const AMSTooldata = require('../models/ToolData');

// Controller function to get all amsusers
const getToolData = async (req, res) => {
  try {
    const tooldata = await AMSTooldata.find();
    res.json(tooldata);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
    getToolData,
 
};