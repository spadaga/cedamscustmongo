const Employee = require('../models/Employee');
const { validationResult } = require('express-validator');

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 'VALIDATION errors': errors.array() });
  }
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (unique index violation)
      // Extract the duplicate value from the error message
      const duplicateValue = error.message.match(/index: (\w+)_1 dup key: { (\w+): "([^"]+)" }/);
      const field = duplicateValue ? duplicateValue[1] : 'entry';
      const value = duplicateValue ? duplicateValue[3] : 'value';

      res.status(400).json({ message: `Duplicate ${field}: '${value}' already exists.` });
    } else {
      res.status(400).json({ message: 'Error creating employee', error: error.message });
    }
  }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an employee by ID
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};