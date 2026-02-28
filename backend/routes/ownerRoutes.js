const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');

// Route for registering a new owner
router.post('/register', ownerController.registerOwner);

// Route for logging in an existing owner
router.post('/login', ownerController.loginOwner);

module.exports = router;