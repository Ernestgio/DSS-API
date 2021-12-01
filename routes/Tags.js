const router = require('express').Router();

const mongoose = require('mongoose');
const Menu = require('../Models/Menu');
const Tags = require('../Models/Tags');
const _ = require('lodash');

// Delete routes
router.delete('/', async (req,res) =>{
    try{
        const tags = await Tags.findByIdAndRemove(req.body.id);
        let menu = await Menu.find();
        
        // filter menu that has the deleted tag
        let filteredMenu = menu.filter(menu => {
            let tags = _.isArray(menu.tags) ? menu.tags : [];
            let tagIndex = tags.findIndex(tag => {
                return tag == req.body.id
            })
            return tagIndex > -1;
        })

        updatedMenu = filteredMenu.map(item => {
            let itemTemp = item;
            let tagsTemp = item.tags.filter(
                tag => tag !== req.body.id
            );

            itemTemp.tags = tagsTemp;
            return itemTemp;
        })

        updatedMenu.forEach(item => {
            (async function() {
                await Menu.findByIdAndUpdate(item._id, item);
            })();
        });

        console.log(filteredMenu);
        res.json(204);
    }
    catch(err){
        console.log(err);
        res.json(500);
    }
});

//POST routes
router.post('/', async (req,res) => {
    try{
        const result = await Tags.create(
            {
                namaKategori: req.body.namaKategori
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
        const result = await Tags.findByIdAndUpdate(req.body.id,
            {
                namaKategori: req.body.namaKategori
            });
        res.json(200);
    }
    catch(err){
        console.log(err);
        res.json(500);
    }
});

//GET routes
router.get('/:id', async(req,res) => {
    try{
        const result = await Tags.findById(req.params.id);
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
        const result = await Tags.find();
        res.json(result);
    }catch(err){
        console.log(err)
    }
});

module.exports = router;