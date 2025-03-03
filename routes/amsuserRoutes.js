// Example in src/routes/amsuserRoutes.js
const express = require('express');
const router = express.Router();
const amsuserController = require('../controllers/amsuserController');

// GET all amsusers
router.get('/getAllAmsusers', amsuserController.getAllAmsusers);

// GET a single amsuser by userid
router.get('/getAmsuserByUserid/:userid', amsuserController.getAmsuserByUserid);

// POST create a amsuser
router.post('/createAmsuser/', amsuserController.createAmsuser);

// PATCH update a amsuser by userid
router.patch('/updateAmsuserByUserid/:userid', amsuserController.updateAmsuserByUserid);

// DELETE a amsuser by userid
router.delete('/deleteAmsuserByUserid/:userid', amsuserController.deleteAmsuserByUserid);

module.exports = router;