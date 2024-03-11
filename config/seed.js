const fs = require('node:fs/promises');
const path = require('path');
const db = require("./db")
const User = require('../models/User');
const Task = require('../models/Task');

async function main(){
    const conn = await db()
    const users = await fs.readFile(__dirname+'/dummy.json', {encoding:'utf-8'})
    await User.insertMany(users)
    const tasks = await fs.readFile(__dirname+'/dummy_tasks.json', {encoding:'utf-8'})
    await Task.insertMany(tasks)
    conn.connection.close()
}

main()