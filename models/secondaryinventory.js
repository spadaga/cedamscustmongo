const mongoose = require('mongoose');

const SecondaryInventorySchema = new mongoose.Schema({
  Type: {
    type: String,
    enum: ['Q'], // You can adjust the enum if there are other valid types
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  CustomerName: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    enum: ['In Progress', 'Completed', 'OtherStatus'], // Add other status options as needed
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    default: false, // Set a default value
  },
  no_of_products: {
    type: Number,
    required: true,
    min: 0, // Ensure a minimum value (optional)
  },
  notif_address: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email validation
      },
      message: 'Invalid email address',
    },
    required: true,
  },
});

const SecondaryInventory = mongoose.model(
  'SecondaryInventory',
  SecondaryInventorySchema
);

module.exports = SecondaryInventory;