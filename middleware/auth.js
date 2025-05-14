const jwt = require('jsonwebtoken');
require("dotenv").config();

const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        username: user.username
    };
    const secretKey = process.env.JWT_SECRET;
    return jwt.sign(payload, secretKey,{expiresIn: process.env.JWT_EXPIRATION});
}

const authenticateToken = (req,res,next) =>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if(token == null) return res.sendStatus(401);
    const secretKey = process.env.JWT_SECRET;
    jwt.verify(token,secretKey, (err, user) => {
        console.log("err: ", err);
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = {
    generateToken,
    authenticateToken
}