const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = () => {
    // Check if the URI is actually being read
    if (!process.env.MONGO_URI) {
        console.log("❌ Error: MONGO_URI is not defined in .env file");
        return;
    }

    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("✅ Connected to MongoDB Atlas (RentARide)");
        })
        .catch((err) => {
            console.log("❌ Connection Error Detail:");
            console.error(err.message); // This will tell us if it's "Bad Auth" or "IP Blocked"
        });
}

module.exports = db;