const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  // customerId is ObjectId (Primary Key) [cite: 69-72]
  Name: {
    type: String,
    required: true // Name of Customer [cite: 73-76]
  },
  Email: {
    type: String,
    required: true,
    unique: true // Email of Customer [cite: 77-80]
  },
  Password: {
    type: String,
    required: true,
    unique: true // Password of Customer [cite: 81-84]
  },
  address: {
    type: String,
    required: true // Address of Customer [cite: 85-88]
  },
  Contact: {
    type: Number, // Double maps to Number [cite: 89-92]
    required: true,
    unique: true
  },
  accountDate: {
    type: Date,
    default: Date.now // Default : Now() [cite: 93-96]
  },
  documents: {
    type: Array,
    required: true // Documents uploaded by Customer [cite: 97-100]
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);