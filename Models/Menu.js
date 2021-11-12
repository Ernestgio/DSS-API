const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    name: String,
    imageURL: String,
    price: Number,
    servingSize: Number,
    tags: [String]
});

module.exports = mongoose.model('Menu',MenuSchema);
