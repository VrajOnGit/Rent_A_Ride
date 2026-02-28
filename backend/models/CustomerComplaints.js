const mongoose = require('mongoose');

const CustomerComplaintSchema = new mongoose.Schema({
  // complaintId is automatically handled as _id [cite: 275-278]

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true // Foreign Key: Refers to the Customer Who Has Filed the Complaint [cite: 279-282]
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true // Foreign Key: Refers to the Booking on which the Complaint is being filed [cite: 283-286]
  },
  complaintDate: {
    type: Date,
    default: Date.now // Default : Now() [cite: 287-290]
  },
  complaint: {
    type: String,
    required: true // Description of Complaint [cite: 291-294]
  }
});

module.exports = mongoose.model('CustomerComplaint', CustomerComplaintSchema);