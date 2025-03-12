// controllers/amsCatalogController.js (Controller)
const AMSCatalog = require('../models/amsCatalog');

// Create a new AMS Catalog entry
exports.createAMSCatalog = async (req, res) => {
  try {
    const amsCatalog = new AMSCatalog(req.body);
    await amsCatalog.save();
    res.status(201).json(amsCatalog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all AMS Catalog entries
exports.getAllAMSCatalogs = async (req, res) => {
  try {
    const amsCatalogs = await AMSCatalog.find();
    res.json(amsCatalogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single AMS Catalog entry by ID
exports.getAMSCatalogById = async (req, res) => {
  try {
    const amsCatalog = await AMSCatalog.findById(req.params.id);
    if (!amsCatalog) {
      return res.status(404).json({ message: 'AMS Catalog entry not found' });
    }
    res.json(amsCatalog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an AMS Catalog entry by ID
exports.updateAMSCatalog = async (req, res) => {
  try {
    const amsCatalog = await AMSCatalog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!amsCatalog) {
      return res.status(404).json({ message: 'AMS Catalog entry not found' });
    }
    res.json(amsCatalog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an AMS Catalog entry by ID
exports.deleteAMSCatalog = async (req, res) => {
  try {
    const amsCatalog = await AMSCatalog.findByIdAndDelete(req.params.id);
    if (!amsCatalog) {
      return res.status(404).json({ message: 'AMS Catalog entry not found' });
    }
    res.json({ message: 'AMS Catalog entry deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};