// Example in src/routes/amsuserRoutes.js
const express = require('express');
const router = express.Router();
const amsuserController = require('../controllers/tooldataController');

// GET all amsusers
router.get('/gettooldata', amsuserController.getToolData);



module.exports = router;