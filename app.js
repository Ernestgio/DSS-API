
const express = require('express');
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


app.use('/menus',menuRoutes);
app.use('/tags',tagsRoutes);


// Init API
app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);
