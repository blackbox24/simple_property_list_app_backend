const sequelize = require('../config/dbconf');
const Property = require('../models/proptery');
const {validateProperty,validatePropertyImage} = require('../validations/propertyValidator');
const { Op } = require('sequelize');
const upload = require('../config/fileUploadConf');



const PropertyController = {
    async getAllProperties(req,rep){
        try{
            const properties = await Property.findAll();
            return rep.status(200).send(properties);
        }catch(err){
            return rep.status(500).send({error:"Internal Server Error"});
        }
    },
    async createProperty(req,rep){
        try{
            is_validate = await validateProperty(req.body);
            is_validate_image = validatePropertyImage(req.file);

            // Validate the request body
            if(!is_validate.isValid){
                console.log(is_validate);
                return rep.status(400).send({error:is_validate.errors});
            }   
            // Validate the image file
            if(!is_validate_image.isValid){
                return rep.status(400).send({error:is_validate_image.errors});
            }
            const property = await Property.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                location: req.body.location,
                image_url: req.file.path,
            });

            return rep.status(201).send(property);
        }catch(err){
            console.error(err);
            return rep.status(500).send({error:"Internal Server Error"});
        }
    },
    async getPropertyById(req,rep){
        try{
            const property = await Property.findByPk(req.params.id);
            if(!property){
                return rep.status(404).send({error:"Property not found"});
            }
            return rep.status(200).send(property);
        }catch(err){
            console.error(err);
            return rep.status(500).send({error:"Internal Server Error"});
        }
    }
}

module.exports = PropertyController;