const mongoose = require('mongoose');
const {Schema, model} = mongoose

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String

})


const User = model('User', userSchema)

module.exports = User