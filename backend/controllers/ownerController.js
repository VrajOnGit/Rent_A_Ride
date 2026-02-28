const Owner = require('../models/Owner');

// --- 1. REGISTER OWNER ---
exports.registerOwner = async (req, res) => {
    try {
        const { name, email, password, contactNo, address } = req.body;

        if (!name || !email || !password || !contactNo || !address) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const existingOwner = await Owner.findOne({ Email: email }); 
        if (existingOwner) {
            return res.status(400).json({ message: "An owner with this email already exists." });
        }

        const newOwner = new Owner({
            Name: name,
            Email: email,
            Password: password,
            Contact: contactNo,
            Address: address
        });

        await newOwner.save();
        res.status(201).json({ message: "Owner registered successfully!" });

    } catch (error) {
        res.status(500).json({ message: "Server error during registration.", error: error.message });
    }
};

// --- 2. LOGIN OWNER ---
exports.loginOwner = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password." });
        }

        const owner = await Owner.findOne({ Email: email }); 
        
        if (!owner || owner.Password !== password) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // FIXED: Sending ownerId at the top level for the frontend
        res.status(200).json({
            message: "Login successful!",
            ownerId: owner._id, 
            name: owner.Name,
            email: owner.Email
        });

    } catch (error) {
        res.status(500).json({ message: "Server error during login.", error: error.message });
    }
};