const mongoose = require('mongoose');

const glcustomerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  accountCount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Connected', 'Disconnected'], // Assuming these are the main statuses
    required: true,
  },
  accountId: {
    type: String,
    required: true,
  },
  billingSettings: {
    type: String,
  },
});

module.exports = mongoose.model('GlCustomer', glcustomerSchema);