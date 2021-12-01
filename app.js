
const express = require('express');
const cors = require('cors');
const path = require("path");
require('dotenv').config()

const app = express();
app.use(express.urlencoded({extended:true}));

const connectDB = require('./config/db');
const menuRoutes = require('./routes/Menu');
const tagsRoutes = require('./routes/Tags');


// connect to Database
try{
    connectDB();
} catch(err){
    console.log(err);
}

//middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "frontend")))
app.use('/menus',menuRoutes);
app.use('/tags',tagsRoutes);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "frontend", "index.html"))
})


// Init API
app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);
