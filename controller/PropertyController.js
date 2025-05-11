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
    }
}

module.exports = PropertyController;