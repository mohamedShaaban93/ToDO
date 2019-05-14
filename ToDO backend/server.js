
const express = require('express');
let cors = require('cors')
let morgan = require("morgan");
const session = require('express-session');
// const path = require('path')
var mongodb = require('mongodb');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);
let UserRouter= require('./router/ApiRouter');
require('dotenv').config();


const server = express();


server.use(cors());






//
//
mongoose.connect(`mongodb+srv://mohamed:iti39@cluster0-fhdkl.mongodb.net/test?retryWrites=true`,{useNewUrlParser: true },
    (error)=>{
        if(!error)
        {
            console.log("connected .....");
        }else
        {
            console.log(" Database error"+error);
        }
})

server.use(morgan("short"));


server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


console.log("----------------------")
server.use('/api',UserRouter);


server.listen(process.env.PORT ||3000);
