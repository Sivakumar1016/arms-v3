const mongoose = require("mongoose");

async function approveUser() {
    try {
        await mongoose.connect("mongodb://localhost:27017/arms-v3");
        console.log("✓ Connected to MongoDB");

        // Update user to approved
        const result = await mongoose.connection.collection('users').updateOne(
            { email: "hideki.ku@proton.me" }, // Replace with actual email
            { $set: { isApproved: true } }
        );

        if (result.modifiedCount > 0) {
            console.log("✓ User approved successfully!");
        } else {
            console.log("✗ User not found");
        }

        await mongoose.connection.close();
    } catch (err) {
        console.error("Error:", err);
    }
}

approveUser();