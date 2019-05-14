let mongoose=require("mongoose");
// let autoIncrement = require('mongoose-auto-increment');

//1- create schema
let userSchema = new mongoose.Schema({
    name:String,
    password:String
});


    // autoIncrement.plugin(autoIncrement.plugin,'user');
    //collection  //schemaObject
module.exports = mongoose.model("user",userSchema );
