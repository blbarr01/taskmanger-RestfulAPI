const mongoose = require('mongoose');
const {Schema, model} = mongoose
const {hashPassword} = require('../controllers/auth')
const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String

})

// pre does not work with arrow functions!!
userSchema.pre("save",async function(){
    try{
        let hp = await hashPassword(this.password)
        this.password = hp
    }
    catch(err){
        console.error(err)
    }
})


const User = model('User', userSchema)

module.exports = User