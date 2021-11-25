const router = require('express').Router();

const mongoose = require('mongoose');
const Tags = require('../Models/Tags');


//Delete routes
router.delete('/:id', async (req,res) =>{
    try{
        const result = await Tags.findByIdAndRemove(req.params.id);
    }
    catch(err){
        console.log(err);
    }
    res.json(204);
});

//POST routes
router.post('/', async (req,res) => {
    try{
        const result = await Tags.create(
            {
                namaKategori: req.body.namaKategori
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
        const result = await Tags.findByIdAndUpdate(req.body.id,
            {
                namaKategori: req.body.namaKategori
            });
    }
    catch(err){
        console.log(err);
    }
    res.json(200);
});

//GET routes
router.get('/:id', async(req,res) => {
    try{
        const result = await Tags.findById(req.params.id);
    }
    catch(err){
        console.log(err);
    }
    res.json(result);
});

// GET all routes
router.get('/', async (req,res)=> {
    try{
        const result = await Tags.find();
        res.json(result);
    }catch(err){
        console.log(err)
    }
});

module.exports = router;