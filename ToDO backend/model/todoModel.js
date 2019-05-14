let mongoose = require('mongoose');

// let autoIncrement = require('mongoose-auto-increment');

let todoSchema=new mongoose.Schema({
    name: String,
    note: String,
    done: Boolean,
    user: {
        type: String,
        ref: 'user'
    },
});
// todoSchema.plugin(autoIncrement.plugin , 'todo');
module.exports = mongoose.model("todo",todoSchema );

