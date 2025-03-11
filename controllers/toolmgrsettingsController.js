const ToolMgrSettings = require('../models/ToolMgrSettings'); // Assicurati che il percorso sia corretto

// Controller per ToolMgrSettings
const toolMgrSettingsController = {
  // Crea una nuova impostazione
  createSetting: async (req, res) => {
    try {
      const newSetting = new ToolMgrSettings(req.body);
      const savedSetting = await newSetting.save();
      res.status(201).json(savedSetting);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Ottieni tutte le impostazioni
  getAllSettings: async (req, res) => {
    try {
      const settings = await ToolMgrSettings.find();
      res.json(settings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Ottieni una impostazione per ID
  getSettingById: async (req, res) => {
    try {
      const setting = await ToolMgrSettings.findById(req.params.id);
      if (!setting) {
        return res.status(404).json({ message: 'Setting not found' });
      }
      res.json(setting);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Aggiorna una impostazione per ID
  updateSetting: async (req, res) => {
    try {
      const updatedSetting = await ToolMgrSettings.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedSetting) {
        return res.status(404).json({ message: 'Setting not found' });
      }
      res.json(updatedSetting);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Elimina una impostazione per ID
  deleteSetting: async (req, res) => {
    try {
      const deletedSetting = await ToolMgrSettings.findByIdAndDelete(
        req.params.id
      );
      if (!deletedSetting) {
        return res.status(404).json({ message: 'Setting not found' });
      }
      res.json({ message: 'Setting deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = toolMgrSettingsController;