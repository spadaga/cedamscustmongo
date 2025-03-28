const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const errorHandler = require('./middlewares/errorHandler');
const tooldataRoutes = require('./routes/tooldataRoutes');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const amsusersRoutes = require('./routes/amsuserRoutes'); // Import amsusers routes

const orderRoutes = require('./routes/orderRoutes'); // Import order routes

const toolMgrSettingsRoutes = require('./routes/toolmgrsettingsRoutes'); // Import toolMgrSettings routes
const amsCatalogRoutes = require('./routes/amsCatalogRoutes'); // Import amsCatalog routes (Add this line)
const secondaryInventoryRoutes = require('./routes/secondaryInventoryRoutes'); // 

const glcustomerRoutes = require('./routes/glcustomerRoutes'); // 

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
  res.redirect('/api/tooldata/gettooldata');
});

app.get('/orders', (req, res) => {
  res.redirect('/api/orders/getorders');
});


app.get('/tooldatasetings', (req, res) => {
  res.redirect('/api/toolMgrSettings/getAllSettings');
});



app.get('/amscatalogs', (req, res) => { //add this line
  res.redirect('/api/amscatalogs/getAllAMSCatalogs');
});

app.get('/invsecondary', (req, res) => { //add this line
  res.redirect('/api/secondaryinventory/getAllSecondaryInventory');
});


app.get('/glcustomers', (req, res) => { //add this line
  res.redirect('/api/glcustomers/getglAllCustomers');
});

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/amsusers', amsusersRoutes); // Use amsusers routes
app.use('/api/tooldata', tooldataRoutes); // Use tooldata routes
app.use('/api/orders', orderRoutes); // Use order routes
app.use('/api/toolMgrSettings', toolMgrSettingsRoutes); // Use toolMgrSettings routes
app.use('/api/amscatalogs', amsCatalogRoutes); // Use amsCatalog routes (add this line)
// Use the SecondaryInventory routes
app.use('/api/secondaryinventory', secondaryInventoryRoutes);  // Mount the router

app.use('/api/glcustomers', glcustomerRoutes);  // Mount the router





// Error handling middleware
app.use(errorHandler);


const corsOptions = {
  origin: '*', // Allow all origins (or specify your frontend URL)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


module.exports = app;
