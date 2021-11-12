const mongoose = require('mongoose');

const TagsSchema = mongoose.Schema({
    namaKategori: String
})

module.exports = mongoose.model('Tags', TagsSchema);