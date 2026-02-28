const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // Added for folder paths
const db = require('./utils/dbConnect');
const ownerRoutes = require('./routes/ownerRoutes'); 
const vehicleRoutes = require('./routes/vehicleRoutes'); // 1. Added this

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 2. SERVE STATIC FILES
// This allows the frontend to access images at http://localhost:5000/uploads/...
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database Connection
db();

// Routes
app.use('/api/owners', ownerRoutes); 
app.use('/api/vehicles', vehicleRoutes); // 3. Connected the vehicle paths

// Test Route
app.get('/', (req, res) => {
  res.send("Rent-A-Ride Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});