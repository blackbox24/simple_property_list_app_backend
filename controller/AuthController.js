const user = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  { generateToken } = require('../middleware/auth');
const {RegisterValidator, LoginValidator} = require('../validations/userValidator');
const { getUserData } = require('../utils/helper');

require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

const AuthController = {
    async register(req,resp){
        const {email, password ,username,confirmPassword} = req.body;
        const {isValid,error} = await RegisterValidator(username,password,email,confirmPassword);
        if(!isValid){
            return resp.status(400).json({error: error});
        }
        const createUser = await user.create({
            email,
            password: bcrypt.hashSync(password, 10),
            username
        });
        return resp.status(201).json({
            message: "User created successfully",
            user: {
                id: createUser.id,
                email: createUser.email,
                username: createUser.username
            }
        });
    },
    async login(req,resp){
        const {username, password} = req.body;
        const {isValid, error} = await LoginValidator(username, password);
        if(!isValid){
            console.log("Error: ", error);
            return resp.status(400).json({error: error});
        }
        const userData = await getUserData(username);
        const token = generateToken(userData);
        return resp.status(200).json({
            message: "Login successful",
            user: {
                id: userData.id,
                email: userData.email,
                username: userData.username
            },
            token: token
        });
    },
    async verifyToken(req,resp){
        const {token} = req.body;
        // Check if token is provided
        if(!token){
            return resp.status(400).json({error: "Token is required"});
        }
        // Verify token
        jwt.verify(token, secretKey, (err, user) => {
            if(err){
                return resp.status(403).json({error: "Invalid token"});
            }
            // If token is valid, return user data
            return resp.status(200).json({
                message: "Token is valid"
            });
        });

    }

}

module.exports = AuthController;