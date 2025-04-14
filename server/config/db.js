const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env');

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB connected successfully`);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;