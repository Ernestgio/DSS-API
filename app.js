
const express = require('express');
require('dotenv').config()


const app = express();
app.use(express.urlencoded({extended:true}));

const connectDB = require('./config/db');


// connect to Database
try{
    connectDB();
} catch(err){
    console.log(err);
}


// Init API
app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);
