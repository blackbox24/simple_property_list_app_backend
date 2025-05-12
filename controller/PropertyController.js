const sequelize = require('../config/dbconf');
const Property = require('../models/proptery');

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
            const property = await Property.create(req.body);
            return rep.status(201).send(property);
        }catch(err){
            console.error(err);
            return rep.status(500).send({error:"Internal Server Error"});
        }
    },
    async updateProperty(req,rep){
        try{
            const property = await Property.update(req.body,{
                where:{
                    id:req.params.id
                }
            });
            return rep.status(200).send(property);
        }catch(err){
            console.error(err);
            return rep.status(500).send({error:"Internal Server Error"});
        }
    },
    async deleteProperty(req,rep){
        try{
            const property = await Property.destroy({
                where:{
                    id:req.params.id
                }
            });
            return rep.status(200).send(property);
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