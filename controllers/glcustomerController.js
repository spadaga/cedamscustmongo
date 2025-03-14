const GlCustomer = require('../models/glcustomers');

// Get all customers
exports.getglAllCustomers = async (req, res) => {
  try {
    const customers = await GlCustomer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single customer by ID
exports.getglCustomerById = async (req, res) => {
  try {
    const customer = await GlCustomer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new customer
exports.createglCustomer = async (req, res) => {
  const customer = new Customer(req.body);
  try {
    const newCustomer = await GlCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a customer by ID
exports.updateglCustomer = async (req, res) => {
  try {
    const customer = await GlCustomer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a customer by ID
exports.deleteglCustomer = async (req, res) => {
  try {
    const customer = await GlCustomer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};