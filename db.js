let temp = "bbarr0101:test1234"
let db_string = "mongodb+srv://bbarr0101:test1234@cluster0.rkhkige.mongodb.net/sample_mflix?retryWrites=true&w=6majority"
const mongoose = require('mongoose');


module.exports = async () =>{
    try{
        const conn =  await mongoose.connect(db_string)
        return conn
    }catch(err){
        console.log(err);
        throw err
    }
}       