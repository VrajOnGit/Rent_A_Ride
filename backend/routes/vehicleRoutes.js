const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerConfig'); // The middleware we made
const vehicleController = require('../controllers/vehicleController');

// 'upload' handles the 'images' and 'documents' fields from the frontend
router.post('/add', upload, vehicleController.addVehicle);
router.get('/owner/:ownerId', vehicleController.getOwnerVehicles);

module.exports = router;