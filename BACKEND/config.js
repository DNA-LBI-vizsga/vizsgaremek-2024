const { Sequelize } = require('sequelize');
//const {fs} = require('fs'); -option for logging

const config = {
    db: {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "vizsga"
    }
};
//const logStream = fs.createWriteStream('sequelize.log', { flags: 'a' }); -option for logging

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql', 
    logging: false   //(msg)=>{logStream.write(`${msg}\n`)}, -option for logging
});

module.exports = {
    sequelize   
};