const express = require('express');
const router = express.Router();
const customerController = require('../controllers/glcustomerController');

router.get('/getglAllCustomers', customerController.getglAllCustomers);
router.get('/getglCustomerById/:id', customerController.getglCustomerById);
router.post('/createglCustomer', customerController.createglCustomer);
router.put('/updateglCustomer/:id', customerController.updateglCustomer);
router.delete('/deleteglCustomer/:id', customerController.deleteglCustomer);

module.exports = router;