const express = require('express');
const app = express();
const leltarRouters = require('./routes/leltarRouter');
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(express.json())

app.get("/",(req,res)=>
    { res.json({"message":"Minden OK"})}
)

app.use(cors())
app.use('/leltar', leltarRouters)
app.use(
    (err, req, res, next)=>{
    
        console.log(req.headers)
        console.log(req.statusCode)
        console.log(req.originalUrl)
        console.log(req.body)

        console.log(err.message, err.stack)
        res.status(err.statusCode || 500).json({"message":err.message})
        return    
    }
)



app.listen(3000, () => {
    console.log('Server is running on port 3000');
    
});

