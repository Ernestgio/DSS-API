const router = require('express').Router();

const mongoose = require('mongoose');
const Menu = require('../Models/Menu');


// Delete routes
router.delete('/:id', async (req,res) =>{
    try{
        const result = await Menu.findByIdAndRemove(req.params.id);
    }
    catch(err){
        console.log(err);
    }
    res.json(204);
})

//POST routes
router.post('/', async (req,res) => {
    try{
        const result = await Menu.create(
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                price: req.body.price,
                servingSize: req.body.servingSize,
                tags: req.body.tags 
            }
        );
    }
    catch(err){
        console.log(err);
    }
    res.json(201);
});

//PUT routes
router.put('/:id', async(req,res) => {
    try{
        const result = await Menu.findByIdAndUpdate(req.body.id,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                price: req.body.price,
                servingSize: req.body.servingSize,
                tags: req.body.tags
            });
    }
    catch(err){
        console.log(err);
    }
    res.json(200);
});

//GET Routes
router.get('/:id', async(req,res) => {
    try{
        const result = await Menu.findById(req.params.id);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
});

// GET all routes
router.get('/', async (res,res)=> {
    try{
        const result = await Menu.find();
        res.json(result);
    }catch(err){
        console.log(err)
    }
});


module.exports = router;