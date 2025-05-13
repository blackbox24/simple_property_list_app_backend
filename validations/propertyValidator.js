const  Property  = require('../models/proptery');
const { Op } = require('sequelize');

const validateProperty = async (property) => {
    const errors = {};
    const { name, description, location } = property;

    // Validate name
    if (!name || name.trim() === '') {
        errors.name = 'Property name is required';
    } else if (name.length < 3) {
        errors.name = 'Property name must be at least 3 characters long';
    }else{
         // Check for unique name
        const is_unique = await Property.findOne({ where: { name: property.name } });
        if (is_unique) {
            errors.name = 'Property name must be unique';
        }
    }

    

    // Validate description
    if (!description || description.trim() === '') {
        errors.description = 'Property description is required';
    }

    // Validate location
    if (!location || location.trim() === '') {
        errors.location = 'Property location is required';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

const validatePropertyImage = (image) => {
    const errors = {};

    if (!image) {
        errors.image = 'Property image is required';
    } else if (!['image/jpeg', 'image/png', 'image/gif'].includes(image.mimetype)) {
        errors.image = 'Invalid image format. Only JPEG, PNG, and GIF are allowed.';
    } else if (image.size > 5 * 1024 * 1024) { // 5MB limit
        errors.image = 'Image size exceeds the limit of 5MB.';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

module.exports = {
    validateProperty,
    validatePropertyImage,
};