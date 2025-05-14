const { where } = require('sequelize');
const user = require('../models/users');
const bcrypt = require('bcrypt');


const usernameExists = async (username) => {
    const _user_exists = await user.findOne({where: {username}});
    if(_user_exists){
        return true;
    }
    return false;
}

const emailExists = async (email) => {
    const _email_exissts = await user.findOne({where: {email}});
    if(_email_exissts){
        return true;
    }
    return false;
}

const fieldIsEmpty = (field) => {
    if(field.trim() === "" || field === undefined){
        return true;
    }
    return false;
}


const getUserData = async (username) => {
    const _user = await user.findOne({where: {username}});
    if(_user){
        return {
            id: _user.id,
            email: _user.email,
            username: _user.username
        }
    }
    return null;
}

const getUserPassword = async (username) => {
    const _user = await user.findOne({where: {username}});
    if(_user){
        return _user.password;
    }
    return null;
}

module.exports = {
    usernameExists,
    emailExists,
    fieldIsEmpty,
    getUserData,
    getUserPassword
}