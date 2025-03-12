const SecondaryInventory = require('../models/secondaryinventory');

// Create a new SecondaryInventory
exports.createSecondaryInventory = async (req, res) => {
  try {
    const newSecondaryInventory = new SecondaryInventory(req.body);
    const savedInventory = await newSecondaryInventory.save();
    res.status(201).json(savedInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all SecondaryInventory records
exports.getAllSecondaryInventory = async (req, res) => {
  try {
    const allInventory = await SecondaryInventory.find();
    res.json(allInventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a SecondaryInventory by ID
exports.getSecondaryInventoryById = async (req, res) => {
  try {
    const inventory = await SecondaryInventory.findById(req.params.id);
    if (!inventory) {
      return res.status(404).json({ message: 'Inventory not found' });
    }
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a SecondaryInventory by ID
exports.updateSecondaryInventoryById = async (req, res) => {
  try {
    const updatedInventory = await SecondaryInventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Added runValidators
    );
    if (!updatedInventory) {
      return res.status(404).json({ message: 'Inventory not found' });
    }
    res.json(updatedInventory);
  } catch (error) {
    res.status(400).json({ message: error.message }); // Changed to 400 for validation errors
  }
};

// Delete a SecondaryInventory by ID
exports.deleteSecondaryInventoryById = async (req, res) => {
  try {
    const deletedInventory = await SecondaryInventory.findByIdAndDelete(
      req.params.id
    );
    if (!deletedInventory) {
      return res.status(404).json({ message: 'Inventory not found' });
    }
    res.json({ message: 'Inventory deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};