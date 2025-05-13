const validateProperty = (property) => {
    const errors = {};
    const { name, description, location } = property;

    if (!name || name.trim() === '') {
        errors.name = 'Property name is required';
    }

    if (!description || description.trim() === '') {
        errors.description = 'Property description is required';
    }

    if (!location || location.trim() === '') {
        errors.location = 'Property location is required';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}

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