// src/models/amsuser.js
const mongoose = require('mongoose');

const AmsuserSchema = new mongoose.Schema({
  userid: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
  },
});

module.exports = mongoose.model('Amsuser', AmsuserSchema);