const {usernameExists, emailExists, fieldIsEmpty, getUserPassword} = require("../utils/helper");
const bcrypt = require("bcrypt");

const LoginValidator = async (username,password) => {
    error = {};

    // check if username is empty
    if(fieldIsEmpty(username)){
        error.username = "Username is required";
    }
    // check if password is empty
    if(fieldIsEmpty(password)){
        error.password = "Password is required";
    }

    if(!fieldIsEmpty(username) && !fieldIsEmpty(password)){
        // check if username exists
        const username_exists = await usernameExists(username);
        if(username_exists){
            // check if password is correct
            // const userpassword = await getUserPassword(username);
            const hashInput = bcrypt.hashSync(password, 10);
            console.log("password match: ", bcrypt.compareSync(password, hashInput));
            const verify_password = bcrypt.compareSync(password, hashInput);
            if(!verify_password){
                error.password = "Invalid Credentials";
            }
        }else{
            error.username = "Account cannot be found";
        }    
    }
    return {
        isValid: Object.keys(error).length === 0,
        error,
    };

}
const RegisterValidator = async (username,password,email,confirmPassword) => {
    error = {};
    await validateUsername(username,error);
    await validateEmail(email,error);
    validatePassword(password,error);
    validateConfirmPassword(password, confirmPassword,error);
    console.log("Error: ", error);
    return {
        isValid: Object.keys(error).length === 0,
        error,
    };
    
}

const validateUsername = async (username,error) => {
    // check if username is empty
    if(fieldIsEmpty(username)){
        error.username = "Username is required";
    }
    
    if(username.length < 3){
        error.username = "Username must be at least 3 characters";
    }
    
    if(!fieldIsEmpty(username)){
        const username_exists = await usernameExists(username);
        if(username_exists){
            error.username = "Username already exists";
        }
    }
}

const validateEmail = async (email,error) => {
    // check if email is empty
    if(fieldIsEmpty(email)){
        error.email = "Email is required";
    }
    // check if email is already in use
    if(!fieldIsEmpty(email)){
        const email_exists = await emailExists(email);
        if(email_exists){
            error.email = "Email already exists";
        }
        // email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            error.email = "Email is not valid";
        }
    }
    
}

const validatePassword = (password,error) => {
    // check if password is empty
    if(fieldIsEmpty(password)){
        error.password = "Password is required";
    }

    // password format
    if(!fieldIsEmpty(password)){
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if(!passwordRegex.test(password)){
            error.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
            
        }
        // password length
        if(password.length < 8){
            error.password = "Password must be at least 8 characters";
        }
    }
}

const validateConfirmPassword = (password, confirmPassword,error) => {
    // check if confirm password is empty
    if(fieldIsEmpty(confirmPassword)){
        error.confirmPassword = "Confirm Password is required";
    }else{
        if(password !== confirmPassword){
            error.confirmPassword = "Password and Confirm Password do not match";
        }
    }

}

module.exports = {
    RegisterValidator,
    LoginValidator
}