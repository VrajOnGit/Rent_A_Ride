const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Address: { type: String, required: true }, // Owner's home/office address
  Contact: { type: String, required: true, unique: true },
  accountDate: { type: Date, default: Date.now },
  totalEarnings: { type: Number, default: 0 }
});

module.exports = mongoose.model('Owner', OwnerSchema);