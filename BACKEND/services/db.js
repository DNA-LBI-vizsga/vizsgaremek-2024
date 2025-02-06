const mysql = require("mysql2/promise")

async function connectDB(){
    try{
        const connection = await mysql.createConnection(config.db)
        return connection
    }
    
    catch(err){
        console.log(err)
    }
} 


module.exports={query}