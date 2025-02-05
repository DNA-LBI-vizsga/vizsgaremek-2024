const db = require("./db");


//storage_place endpoints
async function getPlaces(){
    
    const rows= await db.query(
        "select * from storage_place"
    )
    return rows?rows:[]
}

async function getPlace(id){
    
    const rows= await db.query(
        "select * from storage_place where id=?",
        [id]
    )
    return rows?rows[0]:null
}

async function createPlace(storage){
    try{
        const result = await db.query(
            `Insert Into storage_place (storage) values (?)`,
            [storage]
        )
        return {message: "Storage place created"}
    }
    catch(err){
        return {message: err.message + "Failed to create storage place"}
    }
    
}

async function deletePlace(id){
    try{
        const result = await db.query(
            `Delete from storage_place where id=?`,
            [id]
        )
        return {message: "Storage place deleted"}
    }
    catch(err){
        return {message: err.message + "Failed to delete storage place"}
    }
    
}


module.exports = {
    getPlace,
    getPlaces,
    createPlace,
    deletePlace
}