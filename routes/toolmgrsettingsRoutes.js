const express = require('express');
const router = express.Router();
const toolMgrSettingsController = require('../controllers/toolmgrsettingsController'); // Assicurati che il percorso sia corretto

// Route per creare una nuova impostazione
router.post('/createSetting', toolMgrSettingsController.createSetting);

// Route per ottenere tutte le impostazioni
router.get('/getAllSettings', toolMgrSettingsController.getAllSettings);

// Route per ottenere una impostazione per ID
router.get('/getSettingById/:id', toolMgrSettingsController.getSettingById);

// Route per aggiornare una impostazione per ID
router.put('/updateSetting/:id', toolMgrSettingsController.updateSetting);

// Route per eliminare una impostazione per ID
router.delete('/deleteSetting/:id', toolMgrSettingsController.deleteSetting);

module.exports = router;