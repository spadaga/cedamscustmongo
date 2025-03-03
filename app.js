const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const errorHandler = require('./middlewares/errorHandler');
const tooldataRoutes = require('./routes/tooldata');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const amsusersRoutes = require('./routes/amsuserRoutes'); // Import amsusers routes

const app = express();

  // Create the logs directory if it doesn't exist
  const logsDir = path.join(__dirname, 'logs');
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }


// Create a write stream for logging (append mode)
const accessLogStream = fs.createWriteStream(
  path.join(logsDir, 'access.log'),
  { flags: 'a' }
);



// Middleware
app.use(cors());
app.use(express.json());
// Logging middleware (log to file)
app.use(morgan('combined', { stream: accessLogStream }));

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/amsusers', amsusersRoutes); // Use amsusers routes
app.use('/api/tooldata', tooldataRoutes); // Use tooldata routes

// Error handling middleware
app.use(errorHandler);


module.exports = app;
