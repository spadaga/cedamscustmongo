const express = require('express');
const router = express.Router();
const secondaryInventoryController = require('../controllers/secondaryInventoryController');

// Create a new SecondaryInventory
router.post('/SecondaryInventory', secondaryInventoryController.createSecondaryInventory);

// Get all SecondaryInventory records
router.get('/getAllSecondaryInventory', secondaryInventoryController.getAllSecondaryInventory);

// Get a SecondaryInventory by ID
router.get('/getSecondaryInventoryById/:id', secondaryInventoryController.getSecondaryInventoryById);

// Update a SecondaryInventory by ID
router.put('/updateSecondaryInventoryById/:id', secondaryInventoryController.updateSecondaryInventoryById);

// Delete a SecondaryInventory by ID
router.delete('/deleteSecondaryInventoryById/:id', secondaryInventoryController.deleteSecondaryInventoryById);

module.exports = router;