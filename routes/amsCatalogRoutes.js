// routes/amsCatalogRoutes.js (Routes)
const express = require('express');
const router = express.Router();
const amsCatalogController = require('../controllers/amsCatalogController');

// Create a new AMS Catalog entry
router.post('/createAMSCatalog', amsCatalogController.createAMSCatalog);

// Get all AMS Catalog entries
router.get('/getAllAMSCatalogs', amsCatalogController.getAllAMSCatalogs);

// Get a single AMS Catalog entry by ID
router.get('/getAMSCatalogById/:id', amsCatalogController.getAMSCatalogById);

// Update an AMS Catalog entry by ID
router.put('/updateAMSCatalog/:id', amsCatalogController.updateAMSCatalog);

// Delete an AMS Catalog entry by ID
router.delete('/deleteAMSCatalog/:id', amsCatalogController.deleteAMSCatalog);

module.exports = router;