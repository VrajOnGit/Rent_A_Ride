const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  // bookingId is automatically handled as _id [cite: 155-158]
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true // Links Booking to Vehicle [cite: 159-162]
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true // Refers to Customer for Vehicle Booking [cite: 163-166]
  },
  startDate: {
    type: Date,
    required: true // Starting Date of Vehicle on Rent [cite: 167-170]
  },
  endDate: {
    type: Date,
    required: true // Ending Date of Vehicle on Rent [cite: 171-174]
  },
  status: {
    type: String,
    required: true // Status (Pending / Confirmed) [cite: 175-178]
  },
  totalAmount: {
    type: Number,
    required: true // Total Price of Booking [cite: 179-182]
  },
  depositAmount: {
    type: Number,
    required: true // Security Deposit Amount [cite: 183-186]
  },
  bookingDate: {
    type: Date,
    default: Date.now // Default : Now() [cite: 187-190]
  },
  isVehicleReturned: {
    type: Boolean,
    required: true // Vehicle Return Status [cite: 191-194]
  }
});

module.exports = mongoose.model('Booking', BookingSchema);