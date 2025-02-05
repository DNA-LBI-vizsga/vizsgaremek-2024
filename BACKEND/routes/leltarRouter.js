const express = require("express")
const router = express.Router()
const storage = require("../services/leltarStorage")
const value = require("../services/leltarValue")
const name = require("../services/leltarName")

//GET endpoints
//storage_place
router.get("/places", 
    async function(req, res, next){
        try{
            res.json(await storage.getPlaces())
        }
        catch(err){
            next(err)
        }

        
})

//value
router.get("/values", 
    async function(req, res, next){
        try{
            res.json(await value.getValues())
        }
        catch(err){
            next(err)
        }
})

//item_name
router.get("/items", 
    async function(req, res, next){
        try{
            res.json(await name.getItemNames())
        }
        catch(err){
            next(err)
        }
})

//CREATE endpoints
//storage_place
router.post("/createPlace",
    async function(req, res, next){
        try{
            const {storage} = req.body
            res.json(await storage.createPlace(storage))
        }
        catch(err){
            next(err)
        }
})
//item_name
router.post("/createItem", 
    async function(req, res, next){
        try{
            const {item} = req.body
            res.json(await name.createItemName(item))
        }
        catch(err){
            next(err)
        }
})

//UPDATE endpoints
//item_name
router.put("/updateItem/:id",
    async function(req, res, next){
        try{
            const {id} = req.params
            const {item} = req.body
            res.json(await name.updateItemName(id, item))
        }
        catch(err){
            next(err)
        }
})



//DELETE endpoints
//storage_place
router.delete("/deletePlace/:id",
    async function(req, res, next){
        try{
            const {id} = req.params
            res.json(await storage.deletePlace(id))
        }
        catch(err){
            next(err)
        }
})
//item_name
router.delete("/deleteItem/:id",
    async function(req, res, next){
        try{
            const {id} = req.params
            res.json(await name.deleteItemName(id))
        }
        catch(err){
            next(err)
        }
})

module.exports = router