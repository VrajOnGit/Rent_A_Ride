const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },
  vehicleType: { type: String, enum: ['car', 'bike'], required: true },
  Brand: { type: String, required: true },
  model: { type: String, required: true },
  fuelType: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
  City: { type: String, required: true },
  Area: { type: String, required: true },
  availability: { type: Boolean, default: true },
  Images: [{ type: String, required: true }], // Array for 2-4 photos
  documents: [{ type: String, required: true }] // Array for RC, Insurance, PUC
});

module.exports = mongoose.model('Vehicle', VehicleSchema);