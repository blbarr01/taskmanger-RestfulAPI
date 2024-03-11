const mongoose = require('mongoose');
require('dotenv').config()

module.exports = async () =>{
    try{
        const conn =  await mongoose.connect(process.env.DB)
        return conn
    }catch(err){
        console.error(err);
        
    }
}       