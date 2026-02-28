const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  // adminId is automatically handled as _id [cite: 300-303]
  password: {
    type: String,
    required: true // Admin password [cite: 304-307]
  }
});

module.exports = mongoose.model('Admin', AdminSchema);