const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { body, validationResult } = require('express-validator');

// Validation rules for creating/updating an employee
const employeeValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('position').notEmpty().withMessage('Position is required'),
    body('salary').isNumeric().withMessage('Salary must be a number'),
    ];



// CRUD routes for Employees
router.get('/getallemployees', employeeController.getAllEmployees);
router.post('/createemployee',employeeValidationRules, employeeController.createEmployee);
router.get('/getempbyid/:id', employeeController.getEmployeeById);
router.put('/updateemp/:id', employeeValidationRules,employeeController.updateEmployee);
router.delete('/deleteemp/:id', employeeController.deleteEmployee);

module.exports = router;