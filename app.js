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

//   // Create the logs directory if it doesn't exist
//   const logsDir = path.join(__dirname, 'logs');
//   if (!fs.existsSync(logsDir)) {
//     fs.mkdirSync(logsDir);
//   }


// // Create a write stream for logging (append mode)
// const accessLogStream = fs.createWriteStream(
//   path.join(logsDir, 'access.log'),
//   { flags: 'a' }
// );



// Middleware
app.use(cors());
app.use(express.json());
// Logging middleware (log to file)
//app.use(morgan('combined', { stream: accessLogStream }));

// Use console logging instead of writing to a file (Vercel does not allow file writing)
app.use(morgan('combined')); // Logs requests to console


// Default route (root)
app.get('/', (req, res) => {
  res.send('Welcome to the Employee API! 🚀');
});

// Redirect from / to /register
// Home route
app.get('/emp', (req, res) => {
  res.redirect('/api/employees/getallemployees');
});

app.get('/amsusers', (req, res) => {
  res.redirect('/api/amsusers/getAllAmsusers');
});

app.get('/tooldata', (req, res) => {
  res.redirect('/api/tooldata');
});

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/amsusers', amsusersRoutes); // Use amsusers routes
app.use('/api/tooldata', tooldataRoutes); // Use tooldata routes

// Error handling middleware
app.use(errorHandler);


const corsOptions = {
  origin: '*', // Allow all origins (or specify your frontend URL)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


module.exports = app;
