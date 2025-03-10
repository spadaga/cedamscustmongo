const mongoose = require('mongoose');

const ChildOrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  orderDate: { type: String, required: true },
  orderStatus: { type: String, required: true },
});

const OrderSchema = new mongoose.Schema({
  type: { type: String, required: true },
  inventory: { type: String, required: true },
  date: { type: String, required: true },
  po: { type: String, required: true },
  jobName: { type: String, required: true },
  account: { type: String, required: true },
  childOrders: [ChildOrderSchema], // Array of child orders
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema, 'orders');