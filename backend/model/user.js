const mongoose = require('mongoose');
const db = require('../index')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
})

const user=mongoose.model("Users",userSchema);
module.exports = user;