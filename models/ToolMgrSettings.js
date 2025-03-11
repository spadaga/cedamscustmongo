const mongoose = require('mongoose');

const toolMgrSettingsSchema = new mongoose.Schema({
  Type: {
    type: String,
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
    enum: ['active', 'inactive'], // Assumendo che ci siano solo due stati
    default: 'active',
  },
  Address: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    default: false,
  },
  no_of_products: {
    type: Number,
    required: true,
  },
  notif_address: {
    type: String,
    required: true,
  },
});

const ToolMgrSettings = mongoose.model('ToolMgrSettings', toolMgrSettingsSchema);

module.exports = ToolMgrSettings;