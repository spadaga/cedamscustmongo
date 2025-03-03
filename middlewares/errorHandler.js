const fs = require('fs');
const path = require('path');

const errorHandler = (err, req, res, next) => {

 // Create the logs directory if it doesn't exist
 const logsDir = path.join(__dirname, '..', 'logs');
 if (!fs.existsSync(logsDir)) {
   fs.mkdirSync(logsDir);
 }

  // Log the error to a file
  const errorLogStream = fs.createWriteStream(
    path.join(logsDir, 'error.log'),
    { flags: 'a' }
  );
  errorLogStream.write(`[${new Date().toISOString()}] Error: ${err.stack}\n`);


  // Send a response to the client
  res.status(500).json({ message: 'Something went wrong!' });
};

module.exports = errorHandler;