const router = require('express').Router();

const mongoose = require('mongoose');
const Menu = require('../Models/Menu');


// Delete routes
router.delete('/:id', (req,res) =>{
    await Menu.findByIdAndRemove(req.params.id);
    res.json(204);
})


module.exports = router;