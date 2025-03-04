const mongoose = require('mongoose');

const ToolDataSchema = new mongoose.Schema({
  VMIProductId: { type: Number, required: true },
  MfrCode: { type: String, required: true },
  Catalog: { type: String, required: true },
  UPC: { type: String, required: true },
  Description: { type: String, required: true },
  Item: { type: String, required: true },
  Usage: { type: Number, required: true },
  Min_Qty: { type: Number, required: true },
  Max_Qty: { type: Number, required: true },
  Available: { type: Number, required: true },
  price: { type: String, required: true },
  Ordered: { type: Number, required: true },
  customer: { type: String, required: true },
  url: { type: String, required: false },
  Recommended: { type: Number, required: true },
  User: { type: String, required: true },
  Date: { type: String, required: true },
  TransNo: { type: Number, required: true },
  JobName: { type: String, required: true },
  PO: { type: String, required: true },
  Scanout: { type: Number, required: true },
  OnHand: { type: Number, required: true },
  Tran_qty: { type: Number, required: true },
  UOM: { type: String, required: true },
  Status: { type: String, enum: ['active', 'inactive'], required: true },
  Availability: { type: String, required: true },
  BinLocation: { type: String, required: true },
}, { timestamps: true });

// Ensure collection name is 'tooldatas' (plural form)
module.exports = mongoose.model('ToolData', ToolDataSchema, 'tooldata');
