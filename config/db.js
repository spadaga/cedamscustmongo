const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
//dotenv.config();


// Load .env file from the root directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });


// Debug: Check if MONGODB_URI is loaded
console.log('MONGODB_URI:', process.env.MONGO_URI);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI ,{
          serverSelectionTimeoutMS: 5000, // Timeout after 5s if MongoDB is unreachable
          socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit process with failure
    }
  };

module.exports = connectDB;