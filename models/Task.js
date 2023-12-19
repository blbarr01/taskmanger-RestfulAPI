const mongoose = require('mongoose');
const {Schema, model} = mongoose

const taskSchema = new Schema({
    note:String, 
    user_id:Schema.Types.ObjectId,
    completed_status: Boolean,

})


const Task = model("Task", taskSchema)

module.exports = Task
