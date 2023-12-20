const mongoose = require('mongoose');
const {Schema, model} = mongoose
const bcrypt = require('bcrypt');


async function hashPassword(word){
    try{
        let salt = await bcrypt.genSalt()
        let hash = await bcrypt.hash(word, salt)
        return hash
    }catch(err){
        console.error(err);
    }
}


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