const db = require("./db");

async function getValues(){
    const rows = await db.query(
        "select * from value"
    )
    return rows?rows:[]
}

module.exports = {
    getValues
}