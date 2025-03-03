// src/controllers/amsuserController.js
const Amsuser = require('../models/Amsuser');

// Controller function to get all amsusers
const getAllAmsusers = async (req, res) => {
  try {
    const amsusers = await Amsuser.find();
    res.json(amsusers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to get a single amsuser by userid
const getAmsuserByUserid = async (req, res) => {
  try {
    const amsuser = await Amsuser.findOne({ userid: req.params.userid });
    if (amsuser == null) {
      return res.status(404).json({ message: 'Cannot find amsuser' });
    }
    res.json(amsuser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Controller function to create a new amsuser
const createAmsuser = async (req, res) => {
  const amsuser = new Amsuser({
    userid: req.body.userid,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    status: req.body.status,
  });

  try {
    const newAmsuser = await amsuser.save();
    res.status(201).json(newAmsuser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to update an amsuser by userid
const updateAmsuserByUserid = async (req, res) => {
  try {
    const amsuser = await Amsuser.findOne({ userid: req.params.userid });
    if (amsuser == null) {
      return res.status(404).json({ message: 'Cannot find amsuser' });
    }

    if (req.body.email != null) {
      amsuser.email = req.body.email;
    }
    if (req.body.firstname != null) {
      amsuser.firstname = req.body.firstname;
    }
    if (req.body.lastname != null) {
      amsuser.lastname = req.body.lastname;
    }
    if (req.body.status != null) {
      amsuser.status = req.body.status;
    }

    const updatedAmsuser = await amsuser.save();
    res.json(updatedAmsuser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to delete an amsuser by userid
const deleteAmsuserByUserid = async (req, res) => {
  try {
    const amsuser = await Amsuser.findOne({ userid: req.params.userid });
    if (amsuser == null) {
      return res.status(404).json({ message: 'Cannot find amsuser' });
    }

    await amsuser.remove();
    res.json({ message: 'Deleted amsuser' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllAmsusers,
  getAmsuserByUserid,
  createAmsuser,
  updateAmsuserByUserid,
  deleteAmsuserByUserid,
};