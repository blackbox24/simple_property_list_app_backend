const express = require('express');
const router = express.Router();
const PropertyController = require('../controller/PropertyController');

// Route to get all properties
router.get('/properties/', PropertyController.getAllProperties);


module.exports = router;


