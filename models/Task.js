const mongoose = require('mongoose');
const {Schema, model} = mongoose
const User = require('./User')

const taskSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId, ref:User
    },
    title: String,
    notes:[String], 
    completed_status: {
        required: false,
        type: Boolean,
        default: false
    },
    created_at:{
        required: false,
        type: Date,
        default: Date.now
    },
    last_updated:{
        required: false,
        type: Date,
        default: Date.now
    } 

})


const Task = model("Task", taskSchema)

module.exports = Task
