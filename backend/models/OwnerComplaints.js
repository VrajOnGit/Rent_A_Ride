const mongoose = require('mongoose');

const OwnerComplaintSchema = new mongoose.Schema({
  // complaintId is automatically handled as _id [cite: 250-253]

  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: true // Foreign Key: Refers to the Owner Who Has Filed the Complaint [cite: 254-257]
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true // Foreign Key: Refers to the Booking on which the Complaint is being filed [cite: 258-261]
  },
  complaintDate: {
    type: Date,
    default: Date.now // Default : Now() [cite: 262-265]
  },
  complaint: {
    type: String,
    required: true // Description of Complaint [cite: 266-269]
  }
});

module.exports = mongoose.model('OwnerComplaint', OwnerComplaintSchema);