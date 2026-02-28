const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  // paymentId is automatically handled as _id [cite: 200-203]

  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true // Foreign Key: Refers to booking for making the payment 
  },
  amount: {
    type: Number, // Double maps to Number 
    required: true // Paid Amount
  },
  paymentDate: {
    type: Date,
    default: Date.now // Default : Now() 
  },
  status: {
    type: Boolean,
    required: true // Status of booking (paid / unpaid) [cite: 216-219]
  }
});

module.exports = mongoose.model('Payment', PaymentSchema);