const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Add unique index
  },
  position: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
}, { timestamps: true });
employeeSchema.index({ name: 1, position: 1 }, { unique: true }); // Compound unique index

module.exports = mongoose.model('Employee', employeeSchema);