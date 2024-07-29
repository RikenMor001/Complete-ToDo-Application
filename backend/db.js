const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://riken001:Riken001@riken001.slgs4n1.mongodb.net/todos");

const Schema = mongoose.Schema; // Extract Schema from mongoose

const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo: todo 
};
