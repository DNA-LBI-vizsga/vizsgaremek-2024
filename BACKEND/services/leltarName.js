const db = require("./db");

async function getItemNames(){
    const rows = await db.query(
        "select * from item_name"
    )
    return rows?rows:[]
}

async function createItemName(item){
    try{
        const result = await db.query(
            "Insert Into item_name (item) values (?)",
            [item]
        )
        return {message: "Item created successfully"} 
    }
    catch(err){
        return {message: err.message + "Failed to create item"}
    }
    
}

async function updateItemName(id, item){
    try{
        const result = await db.query(
            "Update item_name set item=? where id=?",
            [item, id]
        )
        return {message: "Item updated successfully"} 
    }
    catch(err){
        return {message: err.message + "Failed to update item"}
    }
    
}

async function deleteItemName(id){
    try{
        const result = await db.query(
            `Delete from item_name where id=?`,
            [id]
        )
        return {message: "Item deleted"}
    }
    catch(err){
        return {message: err.message + "Failed to delete item"}
    }
    
}
module.exports = {
    getItemNames,
    createItemName,
    updateItemName,
    deleteItemName
}