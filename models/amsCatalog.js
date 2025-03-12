const mongoose = require('mongoose');

const amsCatalogSchema = new mongoose.Schema({
  VMIProductId: { type: Number, required: true },
  MfrCode: { type: String, required: true },
  Catalog: { type: String },
  UPC: { type: String },
  Description: { type: String },
  Item: { type: String },
  Usage: { type: Number },
  Min_Qty: { type: Number },
  Max_Qty: { type: Number },
  Available: { type: Number },
  price: { type: String },
  Ordered: { type: Number },
  customer: { type: String },
  url: { type: String },
  Recommended: { type: Number },
  User: { type: String },
  Date: { type: String }, // Consider using Date type and parsing if needed.
  TransNo: { type: Number },
  JobName: { type: String },
  PO: { type: String },
  Scanout: { type: Number },
  OnHand: { type: Number },
  Tran_qty: { type: Number },
  UOM: { type: String },
  Status: { type: String },
  Availability: { type: String },
  BinLocation: { type: String },
});

module.exports = mongoose.model('AMSCatalog', amsCatalogSchema);