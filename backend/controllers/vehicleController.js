const Vehicle = require('../models/Vehicle');

// --- Function 1: Add Vehicle ---
exports.addVehicle = async (req, res) => {
  try {
    // FIXED: Block "undefined" ownerId before MongoDB attempt
    if (!req.body.ownerId || req.body.ownerId === "undefined" || req.body.ownerId === "null") {
      return res.status(400).json({ error: "Owner ID is missing. Please log out and log in again." });
    }

    const imagePaths = req.files?.['images'] 
      ? req.files['images'].map(f => f.path.replace(/\\/g, '/')) 
      : [];

    const docPaths = req.files?.['documents'] 
      ? req.files['documents'].map(f => f.path.replace(/\\/g, '/')) 
      : [];

    const newVehicle = new Vehicle({
      ownerId: req.body.ownerId,
      vehicleType: req.body.vehicleType,
      Brand: req.body.Brand,
      model: req.body.model,
      fuelType: req.body.fuelType,
      pricePerDay: Number(req.body.pricePerDay), 
      City: req.body.City, 
      Area: req.body.Area, 
      Images: imagePaths,   
      documents: docPaths   
    });

    await newVehicle.save();
    res.status(201).json({ message: "Vehicle added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Function 2: Get Owner's Vehicles (MISSING FUNCTION ADDED) ---
exports.getOwnerVehicles = async (req, res) => {
  try {
    const { ownerId } = req.params;
    
    // Find all vehicles belonging to this specific owner
    const vehicles = await Vehicle.find({ ownerId: ownerId });
    
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ 
      message: "Error fetching vehicles", 
      error: err.message 
    });
  }
};