const router = require('express').Router();

const mongoose = require('mongoose');
const Tags = require('../Models/Tags');


//Delete routes
router.delete('/:id', (req,res) =>{
    await Tags.findByIdAndRemove(req.params.id);
    res.json(204);
})


module.exports = router;