const sequelize = require('../config/dbconf');
const Property = require('../models/proptery');
const multer = require("multer");
const {validateProperty,validatePropertyImage} = require('../validations/propertyValidator');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');



const PropertyController = {
    async getAllProperties(req,rep){
        try{
            const properties = await Property.findAll();
            return rep.status(200).send(properties);
        }catch(err){
            console.error(err);
            return rep.status(500).send({error:"Internal Server Error"});
        }
    },
    async createProperty(req,rep){
        try{
            is_validate = validateProperty(req.body);
            is_validate_image = validatePropertyImage(req.file);

            // Validate the request body
            if(!is_validate.isValid){
                return rep.status(400).send({error:is_validate.errors});
            }   

            if(!is_validate_image.isValid){
                return rep.status(400).send({error:is_validate_image.errors});
            }
            const property = await Property.create(req.body);

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