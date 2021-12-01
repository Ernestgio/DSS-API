const router = require('express').Router();
const _ = require('lodash');
const mongoose = require('mongoose');
const Menu = require('../Models/Menu');


// Delete routes
router.delete('/', async (req,res) =>{
    try{
        const result = await Menu.findByIdAndRemove(req.body.id);
        res.json(result);
        // res.json(200);
    }
    catch(err){
        console.log(err);
        res.json(500);
    }
})

//POST routes
router.post('/', async (req,res) => {
    try{
        let tags = (_.isArray(req.body.tags) ? req.body.tags : []);
        const result = await Menu.create(
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                price: req.body.price,
                servingSize: req.body.servingSize,
                tags: tags
            }
        );
        res.json(201);
    }
    catch(err){
        console.log(err);
        res.json(500);
    }
});

//PUT routes
router.put('/', async(req,res) => {
    try{
        let tags = (_.isArray(req.body.tags) ? req.body.tags : []);
        const result = await Menu.findByIdAndUpdate(
            req.body.id,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                price: req.body.price,
                servingSize: req.body.servingSize,
                tags: tags
            } 
        )
        console.log(result);
        res.json(200);
    }
    catch(err){
        console.log(err);
        res.json(500);
    }
});

//GET Routes
router.get('/:id', async(req,res) => {
    try{
        const result = await Menu.findById(req.params.id);
        res.json(result);
    }
    catch(err){
        console.log(err);
        res.json(500);
    }
});

// GET all routes
router.get('/', async (req,res)=> {
    try{
        const result = await Menu.find();
        res.json(result);
    }catch(err){
        console.log(err)
        res.json(500);
    }
});


module.exports = router;