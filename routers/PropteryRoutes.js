const express = require('express');
const router = express.Router();
const PropertyController = require('../controller/PropertyController');

// Route to get all properties
router.get('/properties/', PropertyController.getAllProperties);
router.post('/properties/', PropertyController.createProperty);
router.get('/properties/:id', PropertyController.getPropertyById);

module.exports = router;


