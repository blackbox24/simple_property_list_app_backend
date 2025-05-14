const express = require('express');
const router = express.Router();
const PropertyController = require('../controller/PropertyController');
const upload = require('../config/fileUploadConf');
const { authenticateToken } = require('../middleware/auth');

// Route to get all properties
router.get('/properties/', PropertyController.getAllProperties);
router.post('/properties/', upload.single("image_url"),authenticateToken,PropertyController.createProperty);
router.get('/properties/:id', PropertyController.getPropertyById);

module.exports = router;


