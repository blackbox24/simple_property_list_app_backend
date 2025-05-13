const express = require('express');
const router = express.Router();
const PropertyController = require('../controller/PropertyController');
const upload = require('../config/fileUploadConf');

// Route to get all properties
router.get('/properties/', PropertyController.getAllProperties);
router.post('/properties/', upload.single("image_url"),PropertyController.createProperty);
router.get('/properties/:id', PropertyController.getPropertyById);

module.exports = router;


