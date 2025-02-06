const db = require("./db");
const User = require("../models/UserModel");
const { where } = require("sequelize");

async function checkPassword(name, password){
    try {
        const user = await User.findOne({where:{name, user_password:password}})
        return user
    } catch (error) {
        console.error('Error checking password:', error);  
        return null
    }
}





module.exports = {    
    checkPassword
}