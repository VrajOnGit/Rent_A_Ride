const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  // feedbackId is automatically handled as _id [cite: 225-228]

  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true // Foreign Key: Refers to the vehicle of which the feedback is given [cite: 229-232]
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true // Foreign Key: Refers to customer who has given the feedback [cite: 233-236]
  },
  feedbackDate: {
    type: Date,
    default: Date.now // Default : Now() 
  },
  description: {
    type: String,
    required: true // Description of feedback 
  }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);