 
const app = require('./app');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');

// Load .env file from the root directory
dotenv.config({ path: path.resolve(__dirname, '.env') });
// Debug: Check if MONGODB_URI is loaded
console.log('MONGODB_URI:', process.env.MONGO_URI);

const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

